// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAutomationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#description AwsAutomationRule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#is_terminal AwsAutomationRule#is_terminal}
  */
  readonly isTerminal?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#region AwsAutomationRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#rule_name AwsAutomationRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#rule_order AwsAutomationRule#rule_order}
  */
  readonly ruleOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#rule_status AwsAutomationRule#rule_status}
  */
  readonly ruleStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#tags AwsAutomationRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#actions AwsAutomationRule#actions}
  */
  readonly actions?: AwsAutomationRule.ActionsProperty[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#criteria AwsAutomationRule#criteria}
  */
  readonly criteria?: AwsAutomationRule.CriteriaProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule}
*/
export class AwsAutomationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_automation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAutomationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAutomationRule to import
  * @param importFromId The id of the existing AwsAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAutomationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_automation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAutomationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_automation_rule',
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
    this._isTerminal = config.isTerminal;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._ruleOrder = config.ruleOrder;
    this._ruleStatus = config.ruleStatus;
    this._tags = config.tags;
    this._actions.internalValue = config.actions;
    this._criteria.internalValue = config.criteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_terminal - computed: true, optional: true, required: false
  private _isTerminal?: boolean | cdktn.IResolvable; 
  public get isTerminal() {
    return this.getBooleanAttribute('is_terminal');
  }
  public set isTerminal(value: boolean | cdktn.IResolvable) {
    this._isTerminal = value;
  }
  public resetIsTerminal() {
    this._isTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTerminalInput() {
    return this._isTerminal;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: number; 
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }
  public set ruleOrder(value: number) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // rule_status - computed: true, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new AwsAutomationRule.ActionsPropertyList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: AwsAutomationRule.ActionsProperty[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new AwsAutomationRule.CriteriaPropertyList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: AwsAutomationRule.CriteriaProperty[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      is_terminal: cdktn.booleanToTerraform(this._isTerminal),
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      rule_order: cdktn.numberToTerraform(this._ruleOrder),
      rule_status: cdktn.stringToTerraform(this._ruleStatus),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      actions: cdktn.listMapper(awsAutomationRuleActionsPropertyToTerraform, true)(this._actions.internalValue),
      criteria: cdktn.listMapper(awsAutomationRuleCriteriaPropertyToTerraform, true)(this._criteria.internalValue),
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
      is_terminal: {
        value: cdktn.booleanToHclTerraform(this._isTerminal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_order: {
        value: cdktn.numberToHclTerraform(this._ruleOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_status: {
        value: cdktn.stringToHclTerraform(this._ruleStatus),
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
      actions: {
        value: cdktn.listMapperHcl(awsAutomationRuleActionsPropertyToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAutomationRule.ActionsPropertyList",
      },
      criteria: {
        value: cdktn.listMapperHcl(awsAutomationRuleCriteriaPropertyToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutomationRule.CriteriaPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAutomationRuleNotePropertyToTerraform(struct?: AwsAutomationRule.NoteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    updated_by: cdktn.stringToTerraform(struct!.updatedBy),
  }
}


export function awsAutomationRuleNotePropertyToHclTerraform(struct?: AwsAutomationRule.NoteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_by: {
      value: cdktn.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleRelatedFindingsPropertyToTerraform(struct?: AwsAutomationRule.RelatedFindingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    product_arn: cdktn.stringToTerraform(struct!.productArn),
  }
}


export function awsAutomationRuleRelatedFindingsPropertyToHclTerraform(struct?: AwsAutomationRule.RelatedFindingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_arn: {
      value: cdktn.stringToHclTerraform(struct!.productArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleSeverityPropertyToTerraform(struct?: AwsAutomationRule.SeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
    product: cdktn.numberToTerraform(struct!.product),
  }
}


export function awsAutomationRuleSeverityPropertyToHclTerraform(struct?: AwsAutomationRule.SeverityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktn.numberToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleWorkflowPropertyToTerraform(struct?: AwsAutomationRule.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsAutomationRuleWorkflowPropertyToHclTerraform(struct?: AwsAutomationRule.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleFindingFieldsUpdatePropertyToTerraform(struct?: AwsAutomationRule.FindingFieldsUpdateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence: cdktn.numberToTerraform(struct!.confidence),
    criticality: cdktn.numberToTerraform(struct!.criticality),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    user_defined_fields: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.userDefinedFields),
    verification_state: cdktn.stringToTerraform(struct!.verificationState),
    note: cdktn.listMapper(awsAutomationRuleNotePropertyToTerraform, true)(struct!.note),
    related_findings: cdktn.listMapper(awsAutomationRuleRelatedFindingsPropertyToTerraform, true)(struct!.relatedFindings),
    severity: cdktn.listMapper(awsAutomationRuleSeverityPropertyToTerraform, true)(struct!.severity),
    workflow: cdktn.listMapper(awsAutomationRuleWorkflowPropertyToTerraform, true)(struct!.workflow),
  }
}


export function awsAutomationRuleFindingFieldsUpdatePropertyToHclTerraform(struct?: AwsAutomationRule.FindingFieldsUpdateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence: {
      value: cdktn.numberToHclTerraform(struct!.confidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    criticality: {
      value: cdktn.numberToHclTerraform(struct!.criticality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_defined_fields: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.userDefinedFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    verification_state: {
      value: cdktn.stringToHclTerraform(struct!.verificationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note: {
      value: cdktn.listMapperHcl(awsAutomationRuleNotePropertyToHclTerraform, true)(struct!.note),
      isBlock: true,
      type: "list",
      storageClassType: "NotePropertyList",
    },
    related_findings: {
      value: cdktn.listMapperHcl(awsAutomationRuleRelatedFindingsPropertyToHclTerraform, true)(struct!.relatedFindings),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedFindingsPropertyList",
    },
    severity: {
      value: cdktn.listMapperHcl(awsAutomationRuleSeverityPropertyToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "SeverityPropertyList",
    },
    workflow: {
      value: cdktn.listMapperHcl(awsAutomationRuleWorkflowPropertyToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleActionsPropertyToTerraform(struct?: AwsAutomationRule.ActionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    finding_fields_update: cdktn.listMapper(awsAutomationRuleFindingFieldsUpdatePropertyToTerraform, true)(struct!.findingFieldsUpdate),
  }
}


export function awsAutomationRuleActionsPropertyToHclTerraform(struct?: AwsAutomationRule.ActionsProperty | cdktn.IResolvable): any {
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
    finding_fields_update: {
      value: cdktn.listMapperHcl(awsAutomationRuleFindingFieldsUpdatePropertyToHclTerraform, true)(struct!.findingFieldsUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "FindingFieldsUpdatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleAwsAccountIdPropertyToTerraform(struct?: AwsAutomationRule.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleAwsAccountIdPropertyToHclTerraform(struct?: AwsAutomationRule.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleAwsAccountNamePropertyToTerraform(struct?: AwsAutomationRule.AwsAccountNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleAwsAccountNamePropertyToHclTerraform(struct?: AwsAutomationRule.AwsAccountNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCompanyNamePropertyToTerraform(struct?: AwsAutomationRule.CompanyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCompanyNamePropertyToHclTerraform(struct?: AwsAutomationRule.CompanyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleComplianceAssociatedStandardsIdPropertyToTerraform(struct?: AwsAutomationRule.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleComplianceAssociatedStandardsIdPropertyToHclTerraform(struct?: AwsAutomationRule.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleComplianceSecurityControlIdPropertyToTerraform(struct?: AwsAutomationRule.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleComplianceSecurityControlIdPropertyToHclTerraform(struct?: AwsAutomationRule.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleComplianceStatusPropertyToTerraform(struct?: AwsAutomationRule.ComplianceStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleComplianceStatusPropertyToHclTerraform(struct?: AwsAutomationRule.ComplianceStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleConfidencePropertyToTerraform(struct?: AwsAutomationRule.ConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.numberToTerraform(struct!.eq),
    gt: cdktn.numberToTerraform(struct!.gt),
    gte: cdktn.numberToTerraform(struct!.gte),
    lt: cdktn.numberToTerraform(struct!.lt),
    lte: cdktn.numberToTerraform(struct!.lte),
  }
}


export function awsAutomationRuleConfidencePropertyToHclTerraform(struct?: AwsAutomationRule.ConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.numberToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt: {
      value: cdktn.numberToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktn.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt: {
      value: cdktn.numberToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktn.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleCriteriaCreatedAtDateRangePropertyToTerraform(struct?: AwsAutomationRule.CriteriaCreatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCriteriaCreatedAtDateRangePropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaCreatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleCreatedAtPropertyToTerraform(struct?: AwsAutomationRule.CreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(awsAutomationRuleCriteriaCreatedAtDateRangePropertyToTerraform, true)(struct!.dateRange),
  }
}


export function awsAutomationRuleCreatedAtPropertyToHclTerraform(struct?: AwsAutomationRule.CreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriteriaCreatedAtDateRangePropertyToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "CriteriaCreatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleCriticalityPropertyToTerraform(struct?: AwsAutomationRule.CriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.numberToTerraform(struct!.eq),
    gt: cdktn.numberToTerraform(struct!.gt),
    gte: cdktn.numberToTerraform(struct!.gte),
    lt: cdktn.numberToTerraform(struct!.lt),
    lte: cdktn.numberToTerraform(struct!.lte),
  }
}


export function awsAutomationRuleCriticalityPropertyToHclTerraform(struct?: AwsAutomationRule.CriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.numberToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt: {
      value: cdktn.numberToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktn.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt: {
      value: cdktn.numberToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktn.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleDescriptionPropertyToTerraform(struct?: AwsAutomationRule.DescriptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleDescriptionPropertyToHclTerraform(struct?: AwsAutomationRule.DescriptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCriteriaFirstObservedAtDateRangePropertyToTerraform(struct?: AwsAutomationRule.CriteriaFirstObservedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCriteriaFirstObservedAtDateRangePropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaFirstObservedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleFirstObservedAtPropertyToTerraform(struct?: AwsAutomationRule.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(awsAutomationRuleCriteriaFirstObservedAtDateRangePropertyToTerraform, true)(struct!.dateRange),
  }
}


export function awsAutomationRuleFirstObservedAtPropertyToHclTerraform(struct?: AwsAutomationRule.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriteriaFirstObservedAtDateRangePropertyToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "CriteriaFirstObservedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleGeneratorIdPropertyToTerraform(struct?: AwsAutomationRule.GeneratorIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleGeneratorIdPropertyToHclTerraform(struct?: AwsAutomationRule.GeneratorIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleIdPropertyToTerraform(struct?: AwsAutomationRule.IdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleIdPropertyToHclTerraform(struct?: AwsAutomationRule.IdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCriteriaLastObservedAtDateRangePropertyToTerraform(struct?: AwsAutomationRule.CriteriaLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCriteriaLastObservedAtDateRangePropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleLastObservedAtPropertyToTerraform(struct?: AwsAutomationRule.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(awsAutomationRuleCriteriaLastObservedAtDateRangePropertyToTerraform, true)(struct!.dateRange),
  }
}


export function awsAutomationRuleLastObservedAtPropertyToHclTerraform(struct?: AwsAutomationRule.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriteriaLastObservedAtDateRangePropertyToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "CriteriaLastObservedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleNoteTextPropertyToTerraform(struct?: AwsAutomationRule.NoteTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleNoteTextPropertyToHclTerraform(struct?: AwsAutomationRule.NoteTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCriteriaNoteUpdatedAtDateRangePropertyToTerraform(struct?: AwsAutomationRule.CriteriaNoteUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCriteriaNoteUpdatedAtDateRangePropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaNoteUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleNoteUpdatedAtPropertyToTerraform(struct?: AwsAutomationRule.NoteUpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(awsAutomationRuleCriteriaNoteUpdatedAtDateRangePropertyToTerraform, true)(struct!.dateRange),
  }
}


export function awsAutomationRuleNoteUpdatedAtPropertyToHclTerraform(struct?: AwsAutomationRule.NoteUpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriteriaNoteUpdatedAtDateRangePropertyToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "CriteriaNoteUpdatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleNoteUpdatedByPropertyToTerraform(struct?: AwsAutomationRule.NoteUpdatedByProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleNoteUpdatedByPropertyToHclTerraform(struct?: AwsAutomationRule.NoteUpdatedByProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleProductArnPropertyToTerraform(struct?: AwsAutomationRule.ProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleProductArnPropertyToHclTerraform(struct?: AwsAutomationRule.ProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleProductNamePropertyToTerraform(struct?: AwsAutomationRule.ProductNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleProductNamePropertyToHclTerraform(struct?: AwsAutomationRule.ProductNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleRecordStatePropertyToTerraform(struct?: AwsAutomationRule.RecordStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleRecordStatePropertyToHclTerraform(struct?: AwsAutomationRule.RecordStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleRelatedFindingsIdPropertyToTerraform(struct?: AwsAutomationRule.RelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleRelatedFindingsIdPropertyToHclTerraform(struct?: AwsAutomationRule.RelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleRelatedFindingsProductArnPropertyToTerraform(struct?: AwsAutomationRule.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleRelatedFindingsProductArnPropertyToHclTerraform(struct?: AwsAutomationRule.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourceApplicationArnPropertyToTerraform(struct?: AwsAutomationRule.ResourceApplicationArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceApplicationArnPropertyToHclTerraform(struct?: AwsAutomationRule.ResourceApplicationArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourceApplicationNamePropertyToTerraform(struct?: AwsAutomationRule.ResourceApplicationNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceApplicationNamePropertyToHclTerraform(struct?: AwsAutomationRule.ResourceApplicationNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourceDetailsOtherPropertyToTerraform(struct?: AwsAutomationRule.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceDetailsOtherPropertyToHclTerraform(struct?: AwsAutomationRule.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsAutomationRuleResourceIdPropertyToTerraform(struct?: AwsAutomationRule.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceIdPropertyToHclTerraform(struct?: AwsAutomationRule.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourcePartitionPropertyToTerraform(struct?: AwsAutomationRule.ResourcePartitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourcePartitionPropertyToHclTerraform(struct?: AwsAutomationRule.ResourcePartitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourceRegionPropertyToTerraform(struct?: AwsAutomationRule.ResourceRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceRegionPropertyToHclTerraform(struct?: AwsAutomationRule.ResourceRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleResourceTagsPropertyToTerraform(struct?: AwsAutomationRule.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceTagsPropertyToHclTerraform(struct?: AwsAutomationRule.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsAutomationRuleResourceTypePropertyToTerraform(struct?: AwsAutomationRule.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleResourceTypePropertyToHclTerraform(struct?: AwsAutomationRule.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleSeverityLabelPropertyToTerraform(struct?: AwsAutomationRule.SeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleSeverityLabelPropertyToHclTerraform(struct?: AwsAutomationRule.SeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleSourceUrlPropertyToTerraform(struct?: AwsAutomationRule.SourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleSourceUrlPropertyToHclTerraform(struct?: AwsAutomationRule.SourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleTitlePropertyToTerraform(struct?: AwsAutomationRule.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleTitlePropertyToHclTerraform(struct?: AwsAutomationRule.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleTypePropertyToTerraform(struct?: AwsAutomationRule.TypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleTypePropertyToHclTerraform(struct?: AwsAutomationRule.TypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCriteriaUpdatedAtDateRangePropertyToTerraform(struct?: AwsAutomationRule.CriteriaUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAutomationRuleCriteriaUpdatedAtDateRangePropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleUpdatedAtPropertyToTerraform(struct?: AwsAutomationRule.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(awsAutomationRuleCriteriaUpdatedAtDateRangePropertyToTerraform, true)(struct!.dateRange),
  }
}


export function awsAutomationRuleUpdatedAtPropertyToHclTerraform(struct?: AwsAutomationRule.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriteriaUpdatedAtDateRangePropertyToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "CriteriaUpdatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutomationRuleUserDefinedFieldsPropertyToTerraform(struct?: AwsAutomationRule.UserDefinedFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleUserDefinedFieldsPropertyToHclTerraform(struct?: AwsAutomationRule.UserDefinedFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsAutomationRuleVerificationStatePropertyToTerraform(struct?: AwsAutomationRule.VerificationStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleVerificationStatePropertyToHclTerraform(struct?: AwsAutomationRule.VerificationStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleWorkflowStatusPropertyToTerraform(struct?: AwsAutomationRule.WorkflowStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutomationRuleWorkflowStatusPropertyToHclTerraform(struct?: AwsAutomationRule.WorkflowStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsAutomationRuleCriteriaPropertyToTerraform(struct?: AwsAutomationRule.CriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(awsAutomationRuleAwsAccountIdPropertyToTerraform, true)(struct!.awsAccountId),
    aws_account_name: cdktn.listMapper(awsAutomationRuleAwsAccountNamePropertyToTerraform, true)(struct!.awsAccountName),
    company_name: cdktn.listMapper(awsAutomationRuleCompanyNamePropertyToTerraform, true)(struct!.companyName),
    compliance_associated_standards_id: cdktn.listMapper(awsAutomationRuleComplianceAssociatedStandardsIdPropertyToTerraform, true)(struct!.complianceAssociatedStandardsId),
    compliance_security_control_id: cdktn.listMapper(awsAutomationRuleComplianceSecurityControlIdPropertyToTerraform, true)(struct!.complianceSecurityControlId),
    compliance_status: cdktn.listMapper(awsAutomationRuleComplianceStatusPropertyToTerraform, true)(struct!.complianceStatus),
    confidence: cdktn.listMapper(awsAutomationRuleConfidencePropertyToTerraform, true)(struct!.confidence),
    created_at: cdktn.listMapper(awsAutomationRuleCreatedAtPropertyToTerraform, true)(struct!.createdAt),
    criticality: cdktn.listMapper(awsAutomationRuleCriticalityPropertyToTerraform, true)(struct!.criticality),
    description: cdktn.listMapper(awsAutomationRuleDescriptionPropertyToTerraform, true)(struct!.description),
    first_observed_at: cdktn.listMapper(awsAutomationRuleFirstObservedAtPropertyToTerraform, true)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(awsAutomationRuleGeneratorIdPropertyToTerraform, true)(struct!.generatorId),
    id: cdktn.listMapper(awsAutomationRuleIdPropertyToTerraform, true)(struct!.id),
    last_observed_at: cdktn.listMapper(awsAutomationRuleLastObservedAtPropertyToTerraform, true)(struct!.lastObservedAt),
    note_text: cdktn.listMapper(awsAutomationRuleNoteTextPropertyToTerraform, true)(struct!.noteText),
    note_updated_at: cdktn.listMapper(awsAutomationRuleNoteUpdatedAtPropertyToTerraform, true)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(awsAutomationRuleNoteUpdatedByPropertyToTerraform, true)(struct!.noteUpdatedBy),
    product_arn: cdktn.listMapper(awsAutomationRuleProductArnPropertyToTerraform, true)(struct!.productArn),
    product_name: cdktn.listMapper(awsAutomationRuleProductNamePropertyToTerraform, true)(struct!.productName),
    record_state: cdktn.listMapper(awsAutomationRuleRecordStatePropertyToTerraform, true)(struct!.recordState),
    related_findings_id: cdktn.listMapper(awsAutomationRuleRelatedFindingsIdPropertyToTerraform, true)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(awsAutomationRuleRelatedFindingsProductArnPropertyToTerraform, true)(struct!.relatedFindingsProductArn),
    resource_application_arn: cdktn.listMapper(awsAutomationRuleResourceApplicationArnPropertyToTerraform, true)(struct!.resourceApplicationArn),
    resource_application_name: cdktn.listMapper(awsAutomationRuleResourceApplicationNamePropertyToTerraform, true)(struct!.resourceApplicationName),
    resource_details_other: cdktn.listMapper(awsAutomationRuleResourceDetailsOtherPropertyToTerraform, true)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(awsAutomationRuleResourceIdPropertyToTerraform, true)(struct!.resourceId),
    resource_partition: cdktn.listMapper(awsAutomationRuleResourcePartitionPropertyToTerraform, true)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(awsAutomationRuleResourceRegionPropertyToTerraform, true)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(awsAutomationRuleResourceTagsPropertyToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(awsAutomationRuleResourceTypePropertyToTerraform, true)(struct!.resourceType),
    severity_label: cdktn.listMapper(awsAutomationRuleSeverityLabelPropertyToTerraform, true)(struct!.severityLabel),
    source_url: cdktn.listMapper(awsAutomationRuleSourceUrlPropertyToTerraform, true)(struct!.sourceUrl),
    title: cdktn.listMapper(awsAutomationRuleTitlePropertyToTerraform, true)(struct!.title),
    type: cdktn.listMapper(awsAutomationRuleTypePropertyToTerraform, true)(struct!.type),
    updated_at: cdktn.listMapper(awsAutomationRuleUpdatedAtPropertyToTerraform, true)(struct!.updatedAt),
    user_defined_fields: cdktn.listMapper(awsAutomationRuleUserDefinedFieldsPropertyToTerraform, true)(struct!.userDefinedFields),
    verification_state: cdktn.listMapper(awsAutomationRuleVerificationStatePropertyToTerraform, true)(struct!.verificationState),
    workflow_status: cdktn.listMapper(awsAutomationRuleWorkflowStatusPropertyToTerraform, true)(struct!.workflowStatus),
  }
}


export function awsAutomationRuleCriteriaPropertyToHclTerraform(struct?: AwsAutomationRule.CriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleAwsAccountIdPropertyToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "AwsAccountIdPropertyList",
    },
    aws_account_name: {
      value: cdktn.listMapperHcl(awsAutomationRuleAwsAccountNamePropertyToHclTerraform, true)(struct!.awsAccountName),
      isBlock: true,
      type: "set",
      storageClassType: "AwsAccountNamePropertyList",
    },
    company_name: {
      value: cdktn.listMapperHcl(awsAutomationRuleCompanyNamePropertyToHclTerraform, true)(struct!.companyName),
      isBlock: true,
      type: "set",
      storageClassType: "CompanyNamePropertyList",
    },
    compliance_associated_standards_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleComplianceAssociatedStandardsIdPropertyToHclTerraform, true)(struct!.complianceAssociatedStandardsId),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceAssociatedStandardsIdPropertyList",
    },
    compliance_security_control_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleComplianceSecurityControlIdPropertyToHclTerraform, true)(struct!.complianceSecurityControlId),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceSecurityControlIdPropertyList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(awsAutomationRuleComplianceStatusPropertyToHclTerraform, true)(struct!.complianceStatus),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceStatusPropertyList",
    },
    confidence: {
      value: cdktn.listMapperHcl(awsAutomationRuleConfidencePropertyToHclTerraform, true)(struct!.confidence),
      isBlock: true,
      type: "set",
      storageClassType: "ConfidencePropertyList",
    },
    created_at: {
      value: cdktn.listMapperHcl(awsAutomationRuleCreatedAtPropertyToHclTerraform, true)(struct!.createdAt),
      isBlock: true,
      type: "set",
      storageClassType: "CreatedAtPropertyList",
    },
    criticality: {
      value: cdktn.listMapperHcl(awsAutomationRuleCriticalityPropertyToHclTerraform, true)(struct!.criticality),
      isBlock: true,
      type: "set",
      storageClassType: "CriticalityPropertyList",
    },
    description: {
      value: cdktn.listMapperHcl(awsAutomationRuleDescriptionPropertyToHclTerraform, true)(struct!.description),
      isBlock: true,
      type: "set",
      storageClassType: "DescriptionPropertyList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(awsAutomationRuleFirstObservedAtPropertyToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "FirstObservedAtPropertyList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleGeneratorIdPropertyToHclTerraform, true)(struct!.generatorId),
      isBlock: true,
      type: "set",
      storageClassType: "GeneratorIdPropertyList",
    },
    id: {
      value: cdktn.listMapperHcl(awsAutomationRuleIdPropertyToHclTerraform, true)(struct!.id),
      isBlock: true,
      type: "set",
      storageClassType: "IdPropertyList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(awsAutomationRuleLastObservedAtPropertyToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "LastObservedAtPropertyList",
    },
    note_text: {
      value: cdktn.listMapperHcl(awsAutomationRuleNoteTextPropertyToHclTerraform, true)(struct!.noteText),
      isBlock: true,
      type: "set",
      storageClassType: "NoteTextPropertyList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(awsAutomationRuleNoteUpdatedAtPropertyToHclTerraform, true)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "NoteUpdatedAtPropertyList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(awsAutomationRuleNoteUpdatedByPropertyToHclTerraform, true)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "set",
      storageClassType: "NoteUpdatedByPropertyList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(awsAutomationRuleProductArnPropertyToHclTerraform, true)(struct!.productArn),
      isBlock: true,
      type: "set",
      storageClassType: "ProductArnPropertyList",
    },
    product_name: {
      value: cdktn.listMapperHcl(awsAutomationRuleProductNamePropertyToHclTerraform, true)(struct!.productName),
      isBlock: true,
      type: "set",
      storageClassType: "ProductNamePropertyList",
    },
    record_state: {
      value: cdktn.listMapperHcl(awsAutomationRuleRecordStatePropertyToHclTerraform, true)(struct!.recordState),
      isBlock: true,
      type: "set",
      storageClassType: "RecordStatePropertyList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleRelatedFindingsIdPropertyToHclTerraform, true)(struct!.relatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedFindingsIdPropertyList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(awsAutomationRuleRelatedFindingsProductArnPropertyToHclTerraform, true)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedFindingsProductArnPropertyList",
    },
    resource_application_arn: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceApplicationArnPropertyToHclTerraform, true)(struct!.resourceApplicationArn),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceApplicationArnPropertyList",
    },
    resource_application_name: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceApplicationNamePropertyToHclTerraform, true)(struct!.resourceApplicationName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceApplicationNamePropertyList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceDetailsOtherPropertyToHclTerraform, true)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceDetailsOtherPropertyList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceIdPropertyToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceIdPropertyList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourcePartitionPropertyToHclTerraform, true)(struct!.resourcePartition),
      isBlock: true,
      type: "set",
      storageClassType: "ResourcePartitionPropertyList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceRegionPropertyToHclTerraform, true)(struct!.resourceRegion),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceRegionPropertyList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceTagsPropertyToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTagsPropertyList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(awsAutomationRuleResourceTypePropertyToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTypePropertyList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(awsAutomationRuleSeverityLabelPropertyToHclTerraform, true)(struct!.severityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SeverityLabelPropertyList",
    },
    source_url: {
      value: cdktn.listMapperHcl(awsAutomationRuleSourceUrlPropertyToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SourceUrlPropertyList",
    },
    title: {
      value: cdktn.listMapperHcl(awsAutomationRuleTitlePropertyToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "TitlePropertyList",
    },
    type: {
      value: cdktn.listMapperHcl(awsAutomationRuleTypePropertyToHclTerraform, true)(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "TypePropertyList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(awsAutomationRuleUpdatedAtPropertyToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "UpdatedAtPropertyList",
    },
    user_defined_fields: {
      value: cdktn.listMapperHcl(awsAutomationRuleUserDefinedFieldsPropertyToHclTerraform, true)(struct!.userDefinedFields),
      isBlock: true,
      type: "set",
      storageClassType: "UserDefinedFieldsPropertyList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(awsAutomationRuleVerificationStatePropertyToHclTerraform, true)(struct!.verificationState),
      isBlock: true,
      type: "set",
      storageClassType: "VerificationStatePropertyList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(awsAutomationRuleWorkflowStatusPropertyToHclTerraform, true)(struct!.workflowStatus),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStatusPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAutomationRule {
export interface NoteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#text AwsAutomationRule#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#updated_by AwsAutomationRule#updated_by}
  */
  readonly updatedBy: string;
}
export class NotePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._updatedBy = value.updatedBy;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // updated_by - computed: false, optional: false, required: true
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }
}

export class NotePropertyList extends cdktn.ComplexList {
  public internalValue? : NoteProperty[] | cdktn.IResolvable

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
  public get(index: number): NotePropertyOutputReference {
    return new NotePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedFindingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#id AwsAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#product_arn AwsAutomationRule#product_arn}
  */
  readonly productArn: string;
}
export class RelatedFindingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedFindingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._productArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedFindingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._productArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._productArn = value.productArn;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // product_arn - computed: false, optional: false, required: true
  private _productArn?: string; 
  public get productArn() {
    return this.getStringAttribute('product_arn');
  }
  public set productArn(value: string) {
    this._productArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn;
  }
}

export class RelatedFindingsPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedFindingsProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedFindingsPropertyOutputReference {
    return new RelatedFindingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SeverityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#label AwsAutomationRule#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#product AwsAutomationRule#product}
  */
  readonly product?: number;
}
export class SeverityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SeverityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeverityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._product = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._product = value.product;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // product - computed: false, optional: true, required: false
  private _product?: number; 
  public get product() {
    return this.getNumberAttribute('product');
  }
  public set product(value: number) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class SeverityPropertyList extends cdktn.ComplexList {
  public internalValue? : SeverityProperty[] | cdktn.IResolvable

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
  public get(index: number): SeverityPropertyOutputReference {
    return new SeverityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#status AwsAutomationRule#status}
  */
  readonly status?: string;
}
export class WorkflowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class WorkflowPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowPropertyOutputReference {
    return new WorkflowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingFieldsUpdateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#confidence AwsAutomationRule#confidence}
  */
  readonly confidence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#criticality AwsAutomationRule#criticality}
  */
  readonly criticality?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#types AwsAutomationRule#types}
  */
  readonly types?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#user_defined_fields AwsAutomationRule#user_defined_fields}
  */
  readonly userDefinedFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#verification_state AwsAutomationRule#verification_state}
  */
  readonly verificationState?: string;
  /**
  * note block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#note AwsAutomationRule#note}
  */
  readonly note?: NoteProperty[] | cdktn.IResolvable;
  /**
  * related_findings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#related_findings AwsAutomationRule#related_findings}
  */
  readonly relatedFindings?: RelatedFindingsProperty[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#severity AwsAutomationRule#severity}
  */
  readonly severity?: SeverityProperty[] | cdktn.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#workflow AwsAutomationRule#workflow}
  */
  readonly workflow?: WorkflowProperty[] | cdktn.IResolvable;
}
export class FindingFieldsUpdatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingFieldsUpdateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence;
    }
    if (this._criticality !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._userDefinedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields;
    }
    if (this._verificationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState;
    }
    if (this._note?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note?.internalValue;
    }
    if (this._relatedFindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindings = this._relatedFindings?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingFieldsUpdateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidence = undefined;
      this._criticality = undefined;
      this._types = undefined;
      this._userDefinedFields = undefined;
      this._verificationState = undefined;
      this._note.internalValue = undefined;
      this._relatedFindings.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._workflow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidence = value.confidence;
      this._criticality = value.criticality;
      this._types = value.types;
      this._userDefinedFields = value.userDefinedFields;
      this._verificationState = value.verificationState;
      this._note.internalValue = value.note;
      this._relatedFindings.internalValue = value.relatedFindings;
      this._severity.internalValue = value.severity;
      this._workflow.internalValue = value.workflow;
    }
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence?: number; 
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }
  public set confidence(value: number) {
    this._confidence = value;
  }
  public resetConfidence() {
    this._confidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality?: number; 
  public get criticality() {
    return this.getNumberAttribute('criticality');
  }
  public set criticality(value: number) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields?: { [key: string]: string }; 
  public get userDefinedFields() {
    return this.getStringMapAttribute('user_defined_fields');
  }
  public set userDefinedFields(value: { [key: string]: string }) {
    this._userDefinedFields = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState?: string; 
  public get verificationState() {
    return this.getStringAttribute('verification_state');
  }
  public set verificationState(value: string) {
    this._verificationState = value;
  }
  public resetVerificationState() {
    this._verificationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState;
  }

  // note - computed: false, optional: true, required: false
  private _note = new NotePropertyList(this, "note", false);
  public get note() {
    return this._note;
  }
  public putNote(value: NoteProperty[] | cdktn.IResolvable) {
    this._note.internalValue = value;
  }
  public resetNote() {
    this._note.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note.internalValue;
  }

  // related_findings - computed: false, optional: true, required: false
  private _relatedFindings = new RelatedFindingsPropertyList(this, "related_findings", true);
  public get relatedFindings() {
    return this._relatedFindings;
  }
  public putRelatedFindings(value: RelatedFindingsProperty[] | cdktn.IResolvable) {
    this._relatedFindings.internalValue = value;
  }
  public resetRelatedFindings() {
    this._relatedFindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsInput() {
    return this._relatedFindings.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new SeverityPropertyList(this, "severity", false);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: SeverityProperty[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new WorkflowPropertyList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: WorkflowProperty[] | cdktn.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}

export class FindingFieldsUpdatePropertyList extends cdktn.ComplexList {
  public internalValue? : FindingFieldsUpdateProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingFieldsUpdatePropertyOutputReference {
    return new FindingFieldsUpdatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#type AwsAutomationRule#type}
  */
  readonly type?: string;
  /**
  * finding_fields_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#finding_fields_update AwsAutomationRule#finding_fields_update}
  */
  readonly findingFieldsUpdate?: FindingFieldsUpdateProperty[] | cdktn.IResolvable;
}
export class ActionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._findingFieldsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingFieldsUpdate = this._findingFieldsUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._findingFieldsUpdate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._findingFieldsUpdate.internalValue = value.findingFieldsUpdate;
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

  // finding_fields_update - computed: false, optional: true, required: false
  private _findingFieldsUpdate = new FindingFieldsUpdatePropertyList(this, "finding_fields_update", false);
  public get findingFieldsUpdate() {
    return this._findingFieldsUpdate;
  }
  public putFindingFieldsUpdate(value: FindingFieldsUpdateProperty[] | cdktn.IResolvable) {
    this._findingFieldsUpdate.internalValue = value;
  }
  public resetFindingFieldsUpdate() {
    this._findingFieldsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingFieldsUpdateInput() {
    return this._findingFieldsUpdate.internalValue;
  }
}

export class ActionsPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionsProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionsPropertyOutputReference {
    return new ActionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsAccountIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class AwsAccountIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsAccountIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class AwsAccountIdPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsAccountIdProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsAccountIdPropertyOutputReference {
    return new AwsAccountIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsAccountNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class AwsAccountNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsAccountNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class AwsAccountNamePropertyList extends cdktn.ComplexList {
  public internalValue? : AwsAccountNameProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsAccountNamePropertyOutputReference {
    return new AwsAccountNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CompanyNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class CompanyNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CompanyNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompanyNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CompanyNamePropertyList extends cdktn.ComplexList {
  public internalValue? : CompanyNameProperty[] | cdktn.IResolvable

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
  public get(index: number): CompanyNamePropertyOutputReference {
    return new CompanyNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceAssociatedStandardsIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ComplianceAssociatedStandardsIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceAssociatedStandardsIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceAssociatedStandardsIdPropertyOutputReference {
    return new ComplianceAssociatedStandardsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceSecurityControlIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ComplianceSecurityControlIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceSecurityControlIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceSecurityControlIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceSecurityControlIdPropertyOutputReference {
    return new ComplianceSecurityControlIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ComplianceStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceStatusPropertyOutputReference {
    return new ComplianceStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfidenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#eq AwsAutomationRule#eq}
  */
  readonly eq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#gt AwsAutomationRule#gt}
  */
  readonly gt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#gte AwsAutomationRule#gte}
  */
  readonly gte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#lt AwsAutomationRule#lt}
  */
  readonly lt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#lte AwsAutomationRule#lte}
  */
  readonly lte?: number;
}
export class ConfidencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfidenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfidenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: number; 
  public get eq() {
    return this.getNumberAttribute('eq');
  }
  public set eq(value: number) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gt - computed: false, optional: true, required: false
  private _gt?: number; 
  public get gt() {
    return this.getNumberAttribute('gt');
  }
  public set gt(value: number) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: number; 
  public get lt() {
    return this.getNumberAttribute('lt');
  }
  public set lt(value: number) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class ConfidencePropertyList extends cdktn.ComplexList {
  public internalValue? : ConfidenceProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfidencePropertyOutputReference {
    return new ConfidencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaCreatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#unit AwsAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: number;
}
export class CriteriaCreatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaCreatedAtDateRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaCreatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
}

export class CriteriaCreatedAtDateRangePropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaCreatedAtDateRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaCreatedAtDateRangePropertyOutputReference {
    return new CriteriaCreatedAtDateRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#end AwsAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#start AwsAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#date_range AwsAutomationRule#date_range}
  */
  readonly dateRange?: CriteriaCreatedAtDateRangeProperty[] | cdktn.IResolvable;
}
export class CreatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CreatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new CriteriaCreatedAtDateRangePropertyList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: CriteriaCreatedAtDateRangeProperty[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class CreatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : CreatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): CreatedAtPropertyOutputReference {
    return new CreatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriticalityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#eq AwsAutomationRule#eq}
  */
  readonly eq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#gt AwsAutomationRule#gt}
  */
  readonly gt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#gte AwsAutomationRule#gte}
  */
  readonly gte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#lt AwsAutomationRule#lt}
  */
  readonly lt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#lte AwsAutomationRule#lte}
  */
  readonly lte?: number;
}
export class CriticalityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriticalityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriticalityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: number; 
  public get eq() {
    return this.getNumberAttribute('eq');
  }
  public set eq(value: number) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gt - computed: false, optional: true, required: false
  private _gt?: number; 
  public get gt() {
    return this.getNumberAttribute('gt');
  }
  public set gt(value: number) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: number; 
  public get lt() {
    return this.getNumberAttribute('lt');
  }
  public set lt(value: number) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class CriticalityPropertyList extends cdktn.ComplexList {
  public internalValue? : CriticalityProperty[] | cdktn.IResolvable

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
  public get(index: number): CriticalityPropertyOutputReference {
    return new CriticalityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DescriptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class DescriptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DescriptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DescriptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class DescriptionPropertyList extends cdktn.ComplexList {
  public internalValue? : DescriptionProperty[] | cdktn.IResolvable

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
  public get(index: number): DescriptionPropertyOutputReference {
    return new DescriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaFirstObservedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#unit AwsAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: number;
}
export class CriteriaFirstObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaFirstObservedAtDateRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaFirstObservedAtDateRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
}

export class CriteriaFirstObservedAtDateRangePropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaFirstObservedAtDateRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaFirstObservedAtDateRangePropertyOutputReference {
    return new CriteriaFirstObservedAtDateRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#end AwsAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#start AwsAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#date_range AwsAutomationRule#date_range}
  */
  readonly dateRange?: CriteriaFirstObservedAtDateRangeProperty[] | cdktn.IResolvable;
}
export class FirstObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirstObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirstObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new CriteriaFirstObservedAtDateRangePropertyList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: CriteriaFirstObservedAtDateRangeProperty[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class FirstObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : FirstObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): FirstObservedAtPropertyOutputReference {
    return new FirstObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeneratorIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class GeneratorIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeneratorIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneratorIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class GeneratorIdPropertyList extends cdktn.ComplexList {
  public internalValue? : GeneratorIdProperty[] | cdktn.IResolvable

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
  public get(index: number): GeneratorIdPropertyOutputReference {
    return new GeneratorIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class IdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class IdPropertyList extends cdktn.ComplexList {
  public internalValue? : IdProperty[] | cdktn.IResolvable

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
  public get(index: number): IdPropertyOutputReference {
    return new IdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaLastObservedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#unit AwsAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: number;
}
export class CriteriaLastObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
}

export class CriteriaLastObservedAtDateRangePropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaLastObservedAtDateRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaLastObservedAtDateRangePropertyOutputReference {
    return new CriteriaLastObservedAtDateRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#end AwsAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#start AwsAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#date_range AwsAutomationRule#date_range}
  */
  readonly dateRange?: CriteriaLastObservedAtDateRangeProperty[] | cdktn.IResolvable;
}
export class LastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new CriteriaLastObservedAtDateRangePropertyList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: CriteriaLastObservedAtDateRangeProperty[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class LastObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : LastObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): LastObservedAtPropertyOutputReference {
    return new LastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoteTextProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class NoteTextPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteTextProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteTextProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NoteTextPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteTextProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteTextPropertyOutputReference {
    return new NoteTextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaNoteUpdatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#unit AwsAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: number;
}
export class CriteriaNoteUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaNoteUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaNoteUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
}

export class CriteriaNoteUpdatedAtDateRangePropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaNoteUpdatedAtDateRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaNoteUpdatedAtDateRangePropertyOutputReference {
    return new CriteriaNoteUpdatedAtDateRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoteUpdatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#end AwsAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#start AwsAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#date_range AwsAutomationRule#date_range}
  */
  readonly dateRange?: CriteriaNoteUpdatedAtDateRangeProperty[] | cdktn.IResolvable;
}
export class NoteUpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteUpdatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteUpdatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new CriteriaNoteUpdatedAtDateRangePropertyList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: CriteriaNoteUpdatedAtDateRangeProperty[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class NoteUpdatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteUpdatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteUpdatedAtPropertyOutputReference {
    return new NoteUpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoteUpdatedByProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class NoteUpdatedByPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteUpdatedByProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteUpdatedByProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NoteUpdatedByPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteUpdatedByProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteUpdatedByPropertyOutputReference {
    return new NoteUpdatedByPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProductArnPropertyList extends cdktn.ComplexList {
  public internalValue? : ProductArnProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductArnPropertyOutputReference {
    return new ProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ProductNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProductNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ProductNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductNamePropertyOutputReference {
    return new ProductNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordStateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class RecordStatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecordStateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordStateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RecordStatePropertyList extends cdktn.ComplexList {
  public internalValue? : RecordStateProperty[] | cdktn.IResolvable

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
  public get(index: number): RecordStatePropertyOutputReference {
    return new RecordStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedFindingsIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class RelatedFindingsIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedFindingsIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedFindingsIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RelatedFindingsIdPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedFindingsIdProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedFindingsIdPropertyOutputReference {
    return new RelatedFindingsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedFindingsProductArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class RelatedFindingsProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RelatedFindingsProductArnPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedFindingsProductArnProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedFindingsProductArnPropertyOutputReference {
    return new RelatedFindingsProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceApplicationArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceApplicationArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceApplicationArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceApplicationArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceApplicationArnPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceApplicationArnProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceApplicationArnPropertyOutputReference {
    return new ResourceApplicationArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceApplicationNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceApplicationNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceApplicationNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceApplicationNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceApplicationNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceApplicationNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceApplicationNamePropertyOutputReference {
    return new ResourceApplicationNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceDetailsOtherProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#key AwsAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceDetailsOtherPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceDetailsOtherProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: ResourceDetailsOtherProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class ResourceDetailsOtherPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceDetailsOtherProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceDetailsOtherPropertyOutputReference {
    return new ResourceDetailsOtherPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceIdPropertyOutputReference {
    return new ResourceIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePartitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourcePartitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourcePartitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePartitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourcePartitionPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourcePartitionProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourcePartitionPropertyOutputReference {
    return new ResourcePartitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceRegionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceRegionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceRegionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRegionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceRegionPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceRegionProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceRegionPropertyOutputReference {
    return new ResourceRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#key AwsAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class ResourceTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTagsPropertyOutputReference {
    return new ResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class ResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTypePropertyOutputReference {
    return new ResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SeverityLabelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class SeverityLabelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SeverityLabelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeverityLabelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SeverityLabelPropertyList extends cdktn.ComplexList {
  public internalValue? : SeverityLabelProperty[] | cdktn.IResolvable

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
  public get(index: number): SeverityLabelPropertyOutputReference {
    return new SeverityLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceUrlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class SourceUrlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceUrlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceUrlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SourceUrlPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceUrlProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceUrlPropertyOutputReference {
    return new SourceUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TitleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class TitlePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TitleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TitleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class TitlePropertyList extends cdktn.ComplexList {
  public internalValue? : TitleProperty[] | cdktn.IResolvable

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
  public get(index: number): TitlePropertyOutputReference {
    return new TitlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class TypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class TypePropertyList extends cdktn.ComplexList {
  public internalValue? : TypeProperty[] | cdktn.IResolvable

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
  public get(index: number): TypePropertyOutputReference {
    return new TypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaUpdatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#unit AwsAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: number;
}
export class CriteriaUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
}

export class CriteriaUpdatedAtDateRangePropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaUpdatedAtDateRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaUpdatedAtDateRangePropertyOutputReference {
    return new CriteriaUpdatedAtDateRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpdatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#end AwsAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#start AwsAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#date_range AwsAutomationRule#date_range}
  */
  readonly dateRange?: CriteriaUpdatedAtDateRangeProperty[] | cdktn.IResolvable;
}
export class UpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UpdatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new CriteriaUpdatedAtDateRangePropertyList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: CriteriaUpdatedAtDateRangeProperty[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class UpdatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : UpdatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): UpdatedAtPropertyOutputReference {
    return new UpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserDefinedFieldsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#key AwsAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class UserDefinedFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserDefinedFieldsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: UserDefinedFieldsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class UserDefinedFieldsPropertyList extends cdktn.ComplexList {
  public internalValue? : UserDefinedFieldsProperty[] | cdktn.IResolvable

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
  public get(index: number): UserDefinedFieldsPropertyOutputReference {
    return new UserDefinedFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerificationStateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class VerificationStatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VerificationStateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerificationStateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VerificationStatePropertyList extends cdktn.ComplexList {
  public internalValue? : VerificationStateProperty[] | cdktn.IResolvable

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
  public get(index: number): VerificationStatePropertyOutputReference {
    return new VerificationStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#comparison AwsAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#value AwsAutomationRule#value}
  */
  readonly value: string;
}
export class WorkflowStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class WorkflowStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStatusPropertyOutputReference {
    return new WorkflowStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriteriaProperty {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#aws_account_id AwsAutomationRule#aws_account_id}
  */
  readonly awsAccountId?: AwsAccountIdProperty[] | cdktn.IResolvable;
  /**
  * aws_account_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#aws_account_name AwsAutomationRule#aws_account_name}
  */
  readonly awsAccountName?: AwsAccountNameProperty[] | cdktn.IResolvable;
  /**
  * company_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#company_name AwsAutomationRule#company_name}
  */
  readonly companyName?: CompanyNameProperty[] | cdktn.IResolvable;
  /**
  * compliance_associated_standards_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#compliance_associated_standards_id AwsAutomationRule#compliance_associated_standards_id}
  */
  readonly complianceAssociatedStandardsId?: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable;
  /**
  * compliance_security_control_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#compliance_security_control_id AwsAutomationRule#compliance_security_control_id}
  */
  readonly complianceSecurityControlId?: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable;
  /**
  * compliance_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#compliance_status AwsAutomationRule#compliance_status}
  */
  readonly complianceStatus?: ComplianceStatusProperty[] | cdktn.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#confidence AwsAutomationRule#confidence}
  */
  readonly confidence?: ConfidenceProperty[] | cdktn.IResolvable;
  /**
  * created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#created_at AwsAutomationRule#created_at}
  */
  readonly createdAt?: CreatedAtProperty[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#criticality AwsAutomationRule#criticality}
  */
  readonly criticality?: CriticalityProperty[] | cdktn.IResolvable;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#description AwsAutomationRule#description}
  */
  readonly description?: DescriptionProperty[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#first_observed_at AwsAutomationRule#first_observed_at}
  */
  readonly firstObservedAt?: FirstObservedAtProperty[] | cdktn.IResolvable;
  /**
  * generator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#generator_id AwsAutomationRule#generator_id}
  */
  readonly generatorId?: GeneratorIdProperty[] | cdktn.IResolvable;
  /**
  * id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#id AwsAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: IdProperty[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#last_observed_at AwsAutomationRule#last_observed_at}
  */
  readonly lastObservedAt?: LastObservedAtProperty[] | cdktn.IResolvable;
  /**
  * note_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#note_text AwsAutomationRule#note_text}
  */
  readonly noteText?: NoteTextProperty[] | cdktn.IResolvable;
  /**
  * note_updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#note_updated_at AwsAutomationRule#note_updated_at}
  */
  readonly noteUpdatedAt?: NoteUpdatedAtProperty[] | cdktn.IResolvable;
  /**
  * note_updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#note_updated_by AwsAutomationRule#note_updated_by}
  */
  readonly noteUpdatedBy?: NoteUpdatedByProperty[] | cdktn.IResolvable;
  /**
  * product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#product_arn AwsAutomationRule#product_arn}
  */
  readonly productArn?: ProductArnProperty[] | cdktn.IResolvable;
  /**
  * product_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#product_name AwsAutomationRule#product_name}
  */
  readonly productName?: ProductNameProperty[] | cdktn.IResolvable;
  /**
  * record_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#record_state AwsAutomationRule#record_state}
  */
  readonly recordState?: RecordStateProperty[] | cdktn.IResolvable;
  /**
  * related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#related_findings_id AwsAutomationRule#related_findings_id}
  */
  readonly relatedFindingsId?: RelatedFindingsIdProperty[] | cdktn.IResolvable;
  /**
  * related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#related_findings_product_arn AwsAutomationRule#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: RelatedFindingsProductArnProperty[] | cdktn.IResolvable;
  /**
  * resource_application_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_application_arn AwsAutomationRule#resource_application_arn}
  */
  readonly resourceApplicationArn?: ResourceApplicationArnProperty[] | cdktn.IResolvable;
  /**
  * resource_application_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_application_name AwsAutomationRule#resource_application_name}
  */
  readonly resourceApplicationName?: ResourceApplicationNameProperty[] | cdktn.IResolvable;
  /**
  * resource_details_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_details_other AwsAutomationRule#resource_details_other}
  */
  readonly resourceDetailsOther?: ResourceDetailsOtherProperty[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_id AwsAutomationRule#resource_id}
  */
  readonly resourceId?: ResourceIdProperty[] | cdktn.IResolvable;
  /**
  * resource_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_partition AwsAutomationRule#resource_partition}
  */
  readonly resourcePartition?: ResourcePartitionProperty[] | cdktn.IResolvable;
  /**
  * resource_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_region AwsAutomationRule#resource_region}
  */
  readonly resourceRegion?: ResourceRegionProperty[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_tags AwsAutomationRule#resource_tags}
  */
  readonly resourceTags?: ResourceTagsProperty[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#resource_type AwsAutomationRule#resource_type}
  */
  readonly resourceType?: ResourceTypeProperty[] | cdktn.IResolvable;
  /**
  * severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#severity_label AwsAutomationRule#severity_label}
  */
  readonly severityLabel?: SeverityLabelProperty[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#source_url AwsAutomationRule#source_url}
  */
  readonly sourceUrl?: SourceUrlProperty[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#title AwsAutomationRule#title}
  */
  readonly title?: TitleProperty[] | cdktn.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#type AwsAutomationRule#type}
  */
  readonly type?: TypeProperty[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#updated_at AwsAutomationRule#updated_at}
  */
  readonly updatedAt?: UpdatedAtProperty[] | cdktn.IResolvable;
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#user_defined_fields AwsAutomationRule#user_defined_fields}
  */
  readonly userDefinedFields?: UserDefinedFieldsProperty[] | cdktn.IResolvable;
  /**
  * verification_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#verification_state AwsAutomationRule#verification_state}
  */
  readonly verificationState?: VerificationStateProperty[] | cdktn.IResolvable;
  /**
  * workflow_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_automation_rule#workflow_status AwsAutomationRule#workflow_status}
  */
  readonly workflowStatus?: WorkflowStatusProperty[] | cdktn.IResolvable;
}
export class CriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriteriaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._awsAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
    }
    if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
    }
    if (this._complianceSecurityControlId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
    }
    if (this._complianceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
    }
    if (this._confidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence?.internalValue;
    }
    if (this._createdAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._generatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._noteText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText?.internalValue;
    }
    if (this._noteUpdatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
    }
    if (this._noteUpdatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recordState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState?.internalValue;
    }
    if (this._relatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
    }
    if (this._relatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
    }
    if (this._resourceApplicationArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationArn = this._resourceApplicationArn?.internalValue;
    }
    if (this._resourceApplicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationName = this._resourceApplicationName?.internalValue;
    }
    if (this._resourceDetailsOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourcePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
    }
    if (this._resourceRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._userDefinedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields?.internalValue;
    }
    if (this._verificationState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState?.internalValue;
    }
    if (this._workflowStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriteriaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._awsAccountName.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceAssociatedStandardsId.internalValue = undefined;
      this._complianceSecurityControlId.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceApplicationArn.internalValue = undefined;
      this._resourceApplicationName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedFields.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._awsAccountName.internalValue = value.awsAccountName;
      this._companyName.internalValue = value.companyName;
      this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
      this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._productArn.internalValue = value.productArn;
      this._productName.internalValue = value.productName;
      this._recordState.internalValue = value.recordState;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceApplicationArn.internalValue = value.resourceApplicationArn;
      this._resourceApplicationName.internalValue = value.resourceApplicationName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severityLabel.internalValue = value.severityLabel;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedFields.internalValue = value.userDefinedFields;
      this._verificationState.internalValue = value.verificationState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new AwsAccountIdPropertyList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: AwsAccountIdProperty[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // aws_account_name - computed: false, optional: true, required: false
  private _awsAccountName = new AwsAccountNamePropertyList(this, "aws_account_name", true);
  public get awsAccountName() {
    return this._awsAccountName;
  }
  public putAwsAccountName(value: AwsAccountNameProperty[] | cdktn.IResolvable) {
    this._awsAccountName.internalValue = value;
  }
  public resetAwsAccountName() {
    this._awsAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNameInput() {
    return this._awsAccountName.internalValue;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName = new CompanyNamePropertyList(this, "company_name", true);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: CompanyNameProperty[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_associated_standards_id - computed: false, optional: true, required: false
  private _complianceAssociatedStandardsId = new ComplianceAssociatedStandardsIdPropertyList(this, "compliance_associated_standards_id", true);
  public get complianceAssociatedStandardsId() {
    return this._complianceAssociatedStandardsId;
  }
  public putComplianceAssociatedStandardsId(value: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable) {
    this._complianceAssociatedStandardsId.internalValue = value;
  }
  public resetComplianceAssociatedStandardsId() {
    this._complianceAssociatedStandardsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAssociatedStandardsIdInput() {
    return this._complianceAssociatedStandardsId.internalValue;
  }

  // compliance_security_control_id - computed: false, optional: true, required: false
  private _complianceSecurityControlId = new ComplianceSecurityControlIdPropertyList(this, "compliance_security_control_id", true);
  public get complianceSecurityControlId() {
    return this._complianceSecurityControlId;
  }
  public putComplianceSecurityControlId(value: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable) {
    this._complianceSecurityControlId.internalValue = value;
  }
  public resetComplianceSecurityControlId() {
    this._complianceSecurityControlId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlIdInput() {
    return this._complianceSecurityControlId.internalValue;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus = new ComplianceStatusPropertyList(this, "compliance_status", true);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: ComplianceStatusProperty[] | cdktn.IResolvable) {
    this._complianceStatus.internalValue = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus.internalValue;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence = new ConfidencePropertyList(this, "confidence", true);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: ConfidenceProperty[] | cdktn.IResolvable) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt = new CreatedAtPropertyList(this, "created_at", true);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: CreatedAtProperty[] | cdktn.IResolvable) {
    this._createdAt.internalValue = value;
  }
  public resetCreatedAt() {
    this._createdAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new CriticalityPropertyList(this, "criticality", true);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: CriticalityProperty[] | cdktn.IResolvable) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new DescriptionPropertyList(this, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: DescriptionProperty[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new FirstObservedAtPropertyList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: FirstObservedAtProperty[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // generator_id - computed: false, optional: true, required: false
  private _generatorId = new GeneratorIdPropertyList(this, "generator_id", true);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: GeneratorIdProperty[] | cdktn.IResolvable) {
    this._generatorId.internalValue = value;
  }
  public resetGeneratorId() {
    this._generatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new IdPropertyList(this, "id", true);
  public get id() {
    return this._id;
  }
  public putId(value: IdProperty[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new LastObservedAtPropertyList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: LastObservedAtProperty[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText = new NoteTextPropertyList(this, "note_text", true);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: NoteTextProperty[] | cdktn.IResolvable) {
    this._noteText.internalValue = value;
  }
  public resetNoteText() {
    this._noteText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText.internalValue;
  }

  // note_updated_at - computed: false, optional: true, required: false
  private _noteUpdatedAt = new NoteUpdatedAtPropertyList(this, "note_updated_at", true);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: NoteUpdatedAtProperty[] | cdktn.IResolvable) {
    this._noteUpdatedAt.internalValue = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt.internalValue;
  }

  // note_updated_by - computed: false, optional: true, required: false
  private _noteUpdatedBy = new NoteUpdatedByPropertyList(this, "note_updated_by", true);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: NoteUpdatedByProperty[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn = new ProductArnPropertyList(this, "product_arn", true);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: ProductArnProperty[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName = new ProductNamePropertyList(this, "product_name", true);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: ProductNameProperty[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState = new RecordStatePropertyList(this, "record_state", true);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: RecordStateProperty[] | cdktn.IResolvable) {
    this._recordState.internalValue = value;
  }
  public resetRecordState() {
    this._recordState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState.internalValue;
  }

  // related_findings_id - computed: false, optional: true, required: false
  private _relatedFindingsId = new RelatedFindingsIdPropertyList(this, "related_findings_id", true);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: RelatedFindingsIdProperty[] | cdktn.IResolvable) {
    this._relatedFindingsId.internalValue = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId.internalValue;
  }

  // related_findings_product_arn - computed: false, optional: true, required: false
  private _relatedFindingsProductArn = new RelatedFindingsProductArnPropertyList(this, "related_findings_product_arn", true);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: RelatedFindingsProductArnProperty[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_application_arn - computed: false, optional: true, required: false
  private _resourceApplicationArn = new ResourceApplicationArnPropertyList(this, "resource_application_arn", true);
  public get resourceApplicationArn() {
    return this._resourceApplicationArn;
  }
  public putResourceApplicationArn(value: ResourceApplicationArnProperty[] | cdktn.IResolvable) {
    this._resourceApplicationArn.internalValue = value;
  }
  public resetResourceApplicationArn() {
    this._resourceApplicationArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationArnInput() {
    return this._resourceApplicationArn.internalValue;
  }

  // resource_application_name - computed: false, optional: true, required: false
  private _resourceApplicationName = new ResourceApplicationNamePropertyList(this, "resource_application_name", true);
  public get resourceApplicationName() {
    return this._resourceApplicationName;
  }
  public putResourceApplicationName(value: ResourceApplicationNameProperty[] | cdktn.IResolvable) {
    this._resourceApplicationName.internalValue = value;
  }
  public resetResourceApplicationName() {
    this._resourceApplicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationNameInput() {
    return this._resourceApplicationName.internalValue;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther = new ResourceDetailsOtherPropertyList(this, "resource_details_other", true);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: ResourceDetailsOtherProperty[] | cdktn.IResolvable) {
    this._resourceDetailsOther.internalValue = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new ResourceIdPropertyList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: ResourceIdProperty[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_partition - computed: false, optional: true, required: false
  private _resourcePartition = new ResourcePartitionPropertyList(this, "resource_partition", true);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: ResourcePartitionProperty[] | cdktn.IResolvable) {
    this._resourcePartition.internalValue = value;
  }
  public resetResourcePartition() {
    this._resourcePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition.internalValue;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion = new ResourceRegionPropertyList(this, "resource_region", true);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: ResourceRegionProperty[] | cdktn.IResolvable) {
    this._resourceRegion.internalValue = value;
  }
  public resetResourceRegion() {
    this._resourceRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ResourceTagsPropertyList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ResourceTagsProperty[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new ResourceTypePropertyList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: ResourceTypeProperty[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity_label - computed: false, optional: true, required: false
  private _severityLabel = new SeverityLabelPropertyList(this, "severity_label", true);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SeverityLabelProperty[] | cdktn.IResolvable) {
    this._severityLabel.internalValue = value;
  }
  public resetSeverityLabel() {
    this._severityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel.internalValue;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl = new SourceUrlPropertyList(this, "source_url", true);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SourceUrlProperty[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new TitlePropertyList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: TitleProperty[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new TypePropertyList(this, "type", true);
  public get type() {
    return this._type;
  }
  public putType(value: TypeProperty[] | cdktn.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new UpdatedAtPropertyList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: UpdatedAtProperty[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields = new UserDefinedFieldsPropertyList(this, "user_defined_fields", true);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: UserDefinedFieldsProperty[] | cdktn.IResolvable) {
    this._userDefinedFields.internalValue = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields.internalValue;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState = new VerificationStatePropertyList(this, "verification_state", true);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: VerificationStateProperty[] | cdktn.IResolvable) {
    this._verificationState.internalValue = value;
  }
  public resetVerificationState() {
    this._verificationState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState.internalValue;
  }

  // workflow_status - computed: false, optional: true, required: false
  private _workflowStatus = new WorkflowStatusPropertyList(this, "workflow_status", true);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: WorkflowStatusProperty[] | cdktn.IResolvable) {
    this._workflowStatus.internalValue = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus.internalValue;
  }
}

export class CriteriaPropertyList extends cdktn.ComplexList {
  public internalValue? : CriteriaProperty[] | cdktn.IResolvable

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
  public get(index: number): CriteriaPropertyOutputReference {
    return new CriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
