// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfWebAclRuleGroupAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Override action for the rule group. Valid values are 'none' and 'count'. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#override_action TfWebAclRuleGroupAssociation#override_action}
  */
  readonly overrideAction?: string;
  /**
  * Priority of the rule within the Web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#priority TfWebAclRuleGroupAssociation#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#region TfWebAclRuleGroupAssociation#region}
  */
  readonly region?: string;
  /**
  * Name of the rule to create in the Web ACL that references the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#rule_name TfWebAclRuleGroupAssociation#rule_name}
  */
  readonly ruleName: string;
  /**
  * ARN of the Web ACL to associate the Rule Group with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#web_acl_arn TfWebAclRuleGroupAssociation#web_acl_arn}
  */
  readonly webAclArn: string;
  /**
  * managed_rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#managed_rule_group TfWebAclRuleGroupAssociation#managed_rule_group}
  */
  readonly managedRuleGroup?: TfWebAclRuleGroupAssociation.ManagedRuleGroupProperty[] | cdktn.IResolvable;
  /**
  * rule_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#rule_group_reference TfWebAclRuleGroupAssociation#rule_group_reference}
  */
  readonly ruleGroupReference?: TfWebAclRuleGroupAssociation.RuleGroupReferenceProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#timeouts TfWebAclRuleGroupAssociation#timeouts}
  */
  readonly timeouts?: TfWebAclRuleGroupAssociation.TimeoutsProperty;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#visibility_config TfWebAclRuleGroupAssociation#visibility_config}
  */
  readonly visibilityConfig?: TfWebAclRuleGroupAssociation.VisibilityConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association aws_wafv2_web_acl_rule_group_association}
*/
export class TfWebAclRuleGroupAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl_rule_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfWebAclRuleGroupAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfWebAclRuleGroupAssociation to import
  * @param importFromId The id of the existing TfWebAclRuleGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfWebAclRuleGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl_rule_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association aws_wafv2_web_acl_rule_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfWebAclRuleGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: TfWebAclRuleGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_rule_group_association',
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
    this._overrideAction = config.overrideAction;
    this._priority = config.priority;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._webAclArn = config.webAclArn;
    this._managedRuleGroup.internalValue = config.managedRuleGroup;
    this._ruleGroupReference.internalValue = config.ruleGroupReference;
    this._timeouts.internalValue = config.timeouts;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // override_action - computed: true, optional: true, required: false
  private _overrideAction?: string; 
  public get overrideAction() {
    return this.getStringAttribute('override_action');
  }
  public set overrideAction(value: string) {
    this._overrideAction = value;
  }
  public resetOverrideAction() {
    this._overrideAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction;
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

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn?: string; 
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn;
  }

  // managed_rule_group - computed: false, optional: true, required: false
  private _managedRuleGroup = new TfWebAclRuleGroupAssociation.ManagedRuleGroupPropertyList(this, "managed_rule_group", false);
  public get managedRuleGroup() {
    return this._managedRuleGroup;
  }
  public putManagedRuleGroup(value: TfWebAclRuleGroupAssociation.ManagedRuleGroupProperty[] | cdktn.IResolvable) {
    this._managedRuleGroup.internalValue = value;
  }
  public resetManagedRuleGroup() {
    this._managedRuleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupInput() {
    return this._managedRuleGroup.internalValue;
  }

  // rule_group_reference - computed: false, optional: true, required: false
  private _ruleGroupReference = new TfWebAclRuleGroupAssociation.RuleGroupReferencePropertyList(this, "rule_group_reference", false);
  public get ruleGroupReference() {
    return this._ruleGroupReference;
  }
  public putRuleGroupReference(value: TfWebAclRuleGroupAssociation.RuleGroupReferenceProperty[] | cdktn.IResolvable) {
    this._ruleGroupReference.internalValue = value;
  }
  public resetRuleGroupReference() {
    this._ruleGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReferenceInput() {
    return this._ruleGroupReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfWebAclRuleGroupAssociation.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfWebAclRuleGroupAssociation.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // visibility_config - computed: false, optional: true, required: false
  private _visibilityConfig = new TfWebAclRuleGroupAssociation.VisibilityConfigPropertyList(this, "visibility_config", false);
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: TfWebAclRuleGroupAssociation.VisibilityConfigProperty[] | cdktn.IResolvable) {
    this._visibilityConfig.internalValue = value;
  }
  public resetVisibilityConfig() {
    this._visibilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      override_action: cdktn.stringToTerraform(this._overrideAction),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      web_acl_arn: cdktn.stringToTerraform(this._webAclArn),
      managed_rule_group: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupPropertyToTerraform, true)(this._managedRuleGroup.internalValue),
      rule_group_reference: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferencePropertyToTerraform, true)(this._ruleGroupReference.internalValue),
      timeouts: tfWebAclRuleGroupAssociationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      visibility_config: cdktn.listMapper(tfWebAclRuleGroupAssociationVisibilityConfigPropertyToTerraform, true)(this._visibilityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      override_action: {
        value: cdktn.stringToHclTerraform(this._overrideAction),
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
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_acl_arn: {
        value: cdktn.stringToHclTerraform(this._webAclArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_rule_group: {
        value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupPropertyToHclTerraform, true)(this._managedRuleGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAclRuleGroupAssociation.ManagedRuleGroupPropertyList",
      },
      rule_group_reference: {
        value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferencePropertyToHclTerraform, true)(this._ruleGroupReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAclRuleGroupAssociation.RuleGroupReferencePropertyList",
      },
      timeouts: {
        value: tfWebAclRuleGroupAssociationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfWebAclRuleGroupAssociation.TimeoutsProperty",
      },
      visibility_config: {
        value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationVisibilityConfigPropertyToHclTerraform, true)(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAclRuleGroupAssociation.VisibilityConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfWebAclRuleGroupAssociationAddressFieldsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.AddressFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identifiers),
  }
}


export function tfWebAclRuleGroupAssociationAddressFieldsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.AddressFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationEmailFieldPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.EmailFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function tfWebAclRuleGroupAssociationEmailFieldPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.EmailFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationPhoneNumberFieldsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.PhoneNumberFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identifiers),
  }
}


export function tfWebAclRuleGroupAssociationPhoneNumberFieldsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.PhoneNumberFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    address_fields: cdktn.listMapper(tfWebAclRuleGroupAssociationAddressFieldsPropertyToTerraform, true)(struct!.addressFields),
    email_field: cdktn.listMapper(tfWebAclRuleGroupAssociationEmailFieldPropertyToTerraform, true)(struct!.emailField),
    password_field: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyToTerraform, true)(struct!.passwordField),
    phone_number_fields: cdktn.listMapper(tfWebAclRuleGroupAssociationPhoneNumberFieldsPropertyToTerraform, true)(struct!.phoneNumberFields),
    username_field: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyToTerraform, true)(struct!.usernameField),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_fields: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationAddressFieldsPropertyToHclTerraform, true)(struct!.addressFields),
      isBlock: true,
      type: "list",
      storageClassType: "AddressFieldsPropertyList",
    },
    email_field: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationEmailFieldPropertyToHclTerraform, true)(struct!.emailField),
      isBlock: true,
      type: "list",
      storageClassType: "EmailFieldPropertyList",
    },
    password_field: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyToHclTerraform, true)(struct!.passwordField),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyList",
    },
    phone_number_fields: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationPhoneNumberFieldsPropertyToHclTerraform, true)(struct!.phoneNumberFields),
      isBlock: true,
      type: "list",
      storageClassType: "PhoneNumberFieldsPropertyList",
    },
    username_field: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyToHclTerraform, true)(struct!.usernameField),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureStrings),
    success_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successStrings),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    name: cdktn.stringToTerraform(struct!.name),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    identifier: cdktn.stringToTerraform(struct!.identifier),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.failureCodes),
    success_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.successCodes),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.failureCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    success_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.successCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_contains: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyToTerraform, true)(struct!.bodyContains),
    header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyToTerraform, true)(struct!.header),
    json: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyToTerraform, true)(struct!.json),
    status_code: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyToTerraform, true)(struct!.statusCode),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_contains: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyToHclTerraform, true)(struct!.bodyContains),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyList",
    },
    header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyList",
    },
    json: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyList",
    },
    status_code: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyToHclTerraform, true)(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAcfpRuleSetPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAcfpRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    creation_path: cdktn.stringToTerraform(struct!.creationPath),
    enable_regex_in_path: cdktn.booleanToTerraform(struct!.enableRegexInPath),
    registration_page_path: cdktn.stringToTerraform(struct!.registrationPagePath),
    request_inspection: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyToTerraform, true)(struct!.requestInspection),
    response_inspection: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyToTerraform, true)(struct!.responseInspection),
  }
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAcfpRuleSetPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAcfpRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    creation_path: {
      value: cdktn.stringToHclTerraform(struct!.creationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_regex_in_path: {
      value: cdktn.booleanToHclTerraform(struct!.enableRegexInPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration_page_path: {
      value: cdktn.stringToHclTerraform(struct!.registrationPagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_inspection: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyToHclTerraform, true)(struct!.requestInspection),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyList",
    },
    response_inspection: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyToHclTerraform, true)(struct!.responseInspection),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationExemptUriRegularExpressionPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ExemptUriRegularExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_string: cdktn.stringToTerraform(struct!.regexString),
  }
}


export function tfWebAclRuleGroupAssociationExemptUriRegularExpressionPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ExemptUriRegularExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_string: {
      value: cdktn.stringToHclTerraform(struct!.regexString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sensitivity: cdktn.stringToTerraform(struct!.sensitivity),
    usage_of_action: cdktn.stringToTerraform(struct!.usageOfAction),
    exempt_uri_regular_expression: cdktn.listMapper(tfWebAclRuleGroupAssociationExemptUriRegularExpressionPropertyToTerraform, true)(struct!.exemptUriRegularExpression),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sensitivity: {
      value: cdktn.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_of_action: {
      value: cdktn.stringToHclTerraform(struct!.usageOfAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempt_uri_regular_expression: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationExemptUriRegularExpressionPropertyToHclTerraform, true)(struct!.exemptUriRegularExpression),
      isBlock: true,
      type: "list",
      storageClassType: "ExemptUriRegularExpressionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationClientSideActionConfigPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ClientSideActionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    challenge: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyToTerraform, true)(struct!.challenge),
  }
}


export function tfWebAclRuleGroupAssociationClientSideActionConfigPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ClientSideActionConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    challenge: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAntiDdosRuleSetPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAntiDdosRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sensitivity_to_block: cdktn.stringToTerraform(struct!.sensitivityToBlock),
    client_side_action_config: cdktn.listMapper(tfWebAclRuleGroupAssociationClientSideActionConfigPropertyToTerraform, true)(struct!.clientSideActionConfig),
  }
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAntiDdosRuleSetPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAntiDdosRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sensitivity_to_block: {
      value: cdktn.stringToHclTerraform(struct!.sensitivityToBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_side_action_config: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationClientSideActionConfigPropertyToHclTerraform, true)(struct!.clientSideActionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClientSideActionConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    password_field: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyToTerraform, true)(struct!.passwordField),
    username_field: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyToTerraform, true)(struct!.usernameField),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_field: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyToHclTerraform, true)(struct!.passwordField),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyList",
    },
    username_field: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyToHclTerraform, true)(struct!.usernameField),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureStrings),
    success_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successStrings),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    name: cdktn.stringToTerraform(struct!.name),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    identifier: cdktn.stringToTerraform(struct!.identifier),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.failureCodes),
    success_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.successCodes),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.failureCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    success_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.successCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_contains: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyToTerraform, true)(struct!.bodyContains),
    header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyToTerraform, true)(struct!.header),
    json: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyToTerraform, true)(struct!.json),
    status_code: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyToTerraform, true)(struct!.statusCode),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_contains: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyToHclTerraform, true)(struct!.bodyContains),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyList",
    },
    header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyList",
    },
    json: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyList",
    },
    status_code: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyToHclTerraform, true)(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAtpRuleSetPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAtpRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_regex_in_path: cdktn.booleanToTerraform(struct!.enableRegexInPath),
    login_path: cdktn.stringToTerraform(struct!.loginPath),
    request_inspection: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyToTerraform, true)(struct!.requestInspection),
    response_inspection: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyToTerraform, true)(struct!.responseInspection),
  }
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesAtpRuleSetPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesAtpRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_regex_in_path: {
      value: cdktn.booleanToHclTerraform(struct!.enableRegexInPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_path: {
      value: cdktn.stringToHclTerraform(struct!.loginPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_inspection: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyToHclTerraform, true)(struct!.requestInspection),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyList",
    },
    response_inspection: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyToHclTerraform, true)(struct!.responseInspection),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesBotControlRuleSetPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesBotControlRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_machine_learning: cdktn.booleanToTerraform(struct!.enableMachineLearning),
    inspection_level: cdktn.stringToTerraform(struct!.inspectionLevel),
  }
}


export function tfWebAclRuleGroupAssociationAwsManagedRulesBotControlRuleSetPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.AwsManagedRulesBotControlRuleSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_machine_learning: {
      value: cdktn.booleanToHclTerraform(struct!.enableMachineLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspection_level: {
      value: cdktn.stringToHclTerraform(struct!.inspectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupConfigsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_managed_rules_acfp_rule_set: cdktn.listMapper(tfWebAclRuleGroupAssociationAwsManagedRulesAcfpRuleSetPropertyToTerraform, true)(struct!.awsManagedRulesAcfpRuleSet),
    aws_managed_rules_anti_ddos_rule_set: cdktn.listMapper(tfWebAclRuleGroupAssociationAwsManagedRulesAntiDdosRuleSetPropertyToTerraform, true)(struct!.awsManagedRulesAntiDdosRuleSet),
    aws_managed_rules_atp_rule_set: cdktn.listMapper(tfWebAclRuleGroupAssociationAwsManagedRulesAtpRuleSetPropertyToTerraform, true)(struct!.awsManagedRulesAtpRuleSet),
    aws_managed_rules_bot_control_rule_set: cdktn.listMapper(tfWebAclRuleGroupAssociationAwsManagedRulesBotControlRuleSetPropertyToTerraform, true)(struct!.awsManagedRulesBotControlRuleSet),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupConfigsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_managed_rules_acfp_rule_set: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationAwsManagedRulesAcfpRuleSetPropertyToHclTerraform, true)(struct!.awsManagedRulesAcfpRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsManagedRulesAcfpRuleSetPropertyList",
    },
    aws_managed_rules_anti_ddos_rule_set: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationAwsManagedRulesAntiDdosRuleSetPropertyToHclTerraform, true)(struct!.awsManagedRulesAntiDdosRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsManagedRulesAntiDdosRuleSetPropertyList",
    },
    aws_managed_rules_atp_rule_set: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationAwsManagedRulesAtpRuleSetPropertyToHclTerraform, true)(struct!.awsManagedRulesAtpRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsManagedRulesAtpRuleSetPropertyList",
    },
    aws_managed_rules_bot_control_rule_set: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationAwsManagedRulesBotControlRuleSetPropertyToHclTerraform, true)(struct!.awsManagedRulesBotControlRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsManagedRulesBotControlRuleSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToTerraform, true)(struct!.responseHeader),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyToTerraform, true)(struct!.customResponse),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyToHclTerraform, true)(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUsePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyToTerraform, true)(struct!.allow),
    block: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyToTerraform, true)(struct!.block),
    captcha: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyToTerraform, true)(struct!.captcha),
    challenge: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyToTerraform, true)(struct!.challenge),
    count: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountPropertyToTerraform, true)(struct!.count),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUsePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideActionToUseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyList",
    },
    block: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyToHclTerraform, true)(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyList",
    },
    captcha: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyToHclTerraform, true)(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyList",
    },
    challenge: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyList",
    },
    count: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountPropertyToHclTerraform, true)(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverridePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action_to_use: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUsePropertyToTerraform, true)(struct!.actionToUse),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverridePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupRuleActionOverrideProperty | cdktn.IResolvable): any {
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
    action_to_use: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUsePropertyToHclTerraform, true)(struct!.actionToUse),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverrideActionToUsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    vendor_name: cdktn.stringToTerraform(struct!.vendorName),
    version: cdktn.stringToTerraform(struct!.version),
    managed_rule_group_configs: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupConfigsPropertyToTerraform, true)(struct!.managedRuleGroupConfigs),
    rule_action_override: cdktn.listMapper(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverridePropertyToTerraform, true)(struct!.ruleActionOverride),
  }
}


export function tfWebAclRuleGroupAssociationManagedRuleGroupPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.ManagedRuleGroupProperty | cdktn.IResolvable): any {
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
    vendor_name: {
      value: cdktn.stringToHclTerraform(struct!.vendorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_rule_group_configs: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupConfigsPropertyToHclTerraform, true)(struct!.managedRuleGroupConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupConfigsPropertyList",
    },
    rule_action_override: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationManagedRuleGroupRuleActionOverridePropertyToHclTerraform, true)(struct!.ruleActionOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedRuleGroupRuleActionOverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToTerraform, true)(struct!.responseHeader),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyToTerraform, true)(struct!.customResponse),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyToHclTerraform, true)(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToTerraform, true)(struct!.customRequestHandling),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUsePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyToTerraform, true)(struct!.allow),
    block: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyToTerraform, true)(struct!.block),
    captcha: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyToTerraform, true)(struct!.captcha),
    challenge: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyToTerraform, true)(struct!.challenge),
    count: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountPropertyToTerraform, true)(struct!.count),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUsePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideActionToUseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyList",
    },
    block: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyToHclTerraform, true)(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyList",
    },
    captcha: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyToHclTerraform, true)(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyList",
    },
    challenge: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyList",
    },
    count: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountPropertyToHclTerraform, true)(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverridePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action_to_use: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUsePropertyToTerraform, true)(struct!.actionToUse),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverridePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceRuleActionOverrideProperty | cdktn.IResolvable): any {
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
    action_to_use: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUsePropertyToHclTerraform, true)(struct!.actionToUse),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverrideActionToUsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationRuleGroupReferencePropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    rule_action_override: cdktn.listMapper(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverridePropertyToTerraform, true)(struct!.ruleActionOverride),
  }
}


export function tfWebAclRuleGroupAssociationRuleGroupReferencePropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.RuleGroupReferenceProperty | cdktn.IResolvable): any {
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
    rule_action_override: {
      value: cdktn.listMapperHcl(tfWebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverridePropertyToHclTerraform, true)(struct!.ruleActionOverride),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupReferenceRuleActionOverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclRuleGroupAssociationTimeoutsPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationTimeoutsPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfWebAclRuleGroupAssociationVisibilityConfigPropertyToTerraform(struct?: TfWebAclRuleGroupAssociation.VisibilityConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktn.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function tfWebAclRuleGroupAssociationVisibilityConfigPropertyToHclTerraform(struct?: TfWebAclRuleGroupAssociation.VisibilityConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfWebAclRuleGroupAssociation {
export interface AddressFieldsProperty {
  /**
  * Identifiers of the address fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifiers TfWebAclRuleGroupAssociation#identifiers}
  */
  readonly identifiers: string[];
}
export class AddressFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AddressFieldsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressFieldsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifiers = value.identifiers;
    }
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }
}

export class AddressFieldsPropertyList extends cdktn.ComplexList {
  public internalValue? : AddressFieldsProperty[] | cdktn.IResolvable

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
  public get(index: number): AddressFieldsPropertyOutputReference {
    return new AddressFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmailFieldProperty {
  /**
  * Identifier of the email field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}
export class EmailFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EmailFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class EmailFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : EmailFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): EmailFieldPropertyOutputReference {
    return new EmailFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty {
  /**
  * Identifier of the password field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneNumberFieldsProperty {
  /**
  * Identifiers of the phone number fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifiers TfWebAclRuleGroupAssociation#identifiers}
  */
  readonly identifiers: string[];
}
export class PhoneNumberFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PhoneNumberFieldsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneNumberFieldsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifiers = value.identifiers;
    }
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }
}

export class PhoneNumberFieldsPropertyList extends cdktn.ComplexList {
  public internalValue? : PhoneNumberFieldsProperty[] | cdktn.IResolvable

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
  public get(index: number): PhoneNumberFieldsPropertyOutputReference {
    return new PhoneNumberFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty {
  /**
  * Identifier of the username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty {
  /**
  * Payload type for inspection, either JSON or FORM_ENCODED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#payload_type TfWebAclRuleGroupAssociation#payload_type}
  */
  readonly payloadType: string;
  /**
  * address_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#address_fields TfWebAclRuleGroupAssociation#address_fields}
  */
  readonly addressFields?: AddressFieldsProperty[] | cdktn.IResolvable;
  /**
  * email_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#email_field TfWebAclRuleGroupAssociation#email_field}
  */
  readonly emailField?: EmailFieldProperty[] | cdktn.IResolvable;
  /**
  * password_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#password_field TfWebAclRuleGroupAssociation#password_field}
  */
  readonly passwordField?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable;
  /**
  * phone_number_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#phone_number_fields TfWebAclRuleGroupAssociation#phone_number_fields}
  */
  readonly phoneNumberFields?: PhoneNumberFieldsProperty[] | cdktn.IResolvable;
  /**
  * username_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#username_field TfWebAclRuleGroupAssociation#username_field}
  */
  readonly usernameField?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._addressFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFields = this._addressFields?.internalValue;
    }
    if (this._emailField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailField = this._emailField?.internalValue;
    }
    if (this._passwordField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordField = this._passwordField?.internalValue;
    }
    if (this._phoneNumberFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumberFields = this._phoneNumberFields?.internalValue;
    }
    if (this._usernameField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadType = undefined;
      this._addressFields.internalValue = undefined;
      this._emailField.internalValue = undefined;
      this._passwordField.internalValue = undefined;
      this._phoneNumberFields.internalValue = undefined;
      this._usernameField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadType = value.payloadType;
      this._addressFields.internalValue = value.addressFields;
      this._emailField.internalValue = value.emailField;
      this._passwordField.internalValue = value.passwordField;
      this._phoneNumberFields.internalValue = value.phoneNumberFields;
      this._usernameField.internalValue = value.usernameField;
    }
  }

  // payload_type - computed: false, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // address_fields - computed: false, optional: true, required: false
  private _addressFields = new AddressFieldsPropertyList(this, "address_fields", false);
  public get addressFields() {
    return this._addressFields;
  }
  public putAddressFields(value: AddressFieldsProperty[] | cdktn.IResolvable) {
    this._addressFields.internalValue = value;
  }
  public resetAddressFields() {
    this._addressFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFieldsInput() {
    return this._addressFields.internalValue;
  }

  // email_field - computed: false, optional: true, required: false
  private _emailField = new EmailFieldPropertyList(this, "email_field", false);
  public get emailField() {
    return this._emailField;
  }
  public putEmailField(value: EmailFieldProperty[] | cdktn.IResolvable) {
    this._emailField.internalValue = value;
  }
  public resetEmailField() {
    this._emailField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFieldInput() {
    return this._emailField.internalValue;
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldPropertyList(this, "password_field", false);
  public get passwordField() {
    return this._passwordField;
  }
  public putPasswordField(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable) {
    this._passwordField.internalValue = value;
  }
  public resetPasswordField() {
    this._passwordField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField.internalValue;
  }

  // phone_number_fields - computed: false, optional: true, required: false
  private _phoneNumberFields = new PhoneNumberFieldsPropertyList(this, "phone_number_fields", false);
  public get phoneNumberFields() {
    return this._phoneNumberFields;
  }
  public putPhoneNumberFields(value: PhoneNumberFieldsProperty[] | cdktn.IResolvable) {
    this._phoneNumberFields.internalValue = value;
  }
  public resetPhoneNumberFields() {
    this._phoneNumberFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberFieldsInput() {
    return this._phoneNumberFields.internalValue;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldPropertyList(this, "username_field", false);
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable) {
    this._usernameField.internalValue = value;
  }
  public resetUsernameField() {
    this._usernameField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField.internalValue;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_strings TfWebAclRuleGroupAssociation#failure_strings}
  */
  readonly failureStrings: string[];
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_strings TfWebAclRuleGroupAssociation#success_strings}
  */
  readonly successStrings: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureStrings = this._failureStrings;
    }
    if (this._successStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.successStrings = this._successStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureStrings = undefined;
      this._successStrings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureStrings = value.failureStrings;
      this._successStrings = value.successStrings;
    }
  }

  // failure_strings - computed: false, optional: false, required: true
  private _failureStrings?: string[]; 
  public get failureStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_strings'));
  }
  public set failureStrings(value: string[]) {
    this._failureStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureStringsInput() {
    return this._failureStrings;
  }

  // success_strings - computed: false, optional: false, required: true
  private _successStrings?: string[]; 
  public get successStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('success_strings'));
  }
  public set successStrings(value: string[]) {
    this._successStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successStringsInput() {
    return this._successStrings;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values TfWebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Name of the HTTP header to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_values TfWebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._name = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._name = value.name;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
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

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values TfWebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Identifier of the JSON field to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_values TfWebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._identifier = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._identifier = value.identifier;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty {
  /**
  * Status codes that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_codes TfWebAclRuleGroupAssociation#failure_codes}
  */
  readonly failureCodes: number[];
  /**
  * Status codes that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_codes TfWebAclRuleGroupAssociation#success_codes}
  */
  readonly successCodes: number[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCodes = this._failureCodes;
    }
    if (this._successCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCodes = this._successCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCodes = undefined;
      this._successCodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCodes = value.failureCodes;
      this._successCodes = value.successCodes;
    }
  }

  // failure_codes - computed: false, optional: false, required: true
  private _failureCodes?: number[]; 
  public get failureCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('failure_codes')));
  }
  public set failureCodes(value: number[]) {
    this._failureCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodesInput() {
    return this._failureCodes;
  }

  // success_codes - computed: false, optional: false, required: true
  private _successCodes?: number[]; 
  public get successCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('success_codes')));
  }
  public set successCodes(value: number[]) {
    this._successCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successCodesInput() {
    return this._successCodes;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty {
  /**
  * body_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#body_contains TfWebAclRuleGroupAssociation#body_contains}
  */
  readonly bodyContains?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#header TfWebAclRuleGroupAssociation#header}
  */
  readonly header?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#json TfWebAclRuleGroupAssociation#json}
  */
  readonly json?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#status_code TfWebAclRuleGroupAssociation#status_code}
  */
  readonly statusCode?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyContains = this._bodyContains?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = undefined;
      this._header.internalValue = undefined;
      this._json.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = value.bodyContains;
      this._header.internalValue = value.header;
      this._json.internalValue = value.json;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // body_contains - computed: false, optional: true, required: false
  private _bodyContains = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsPropertyList(this, "body_contains", false);
  public get bodyContains() {
    return this._bodyContains;
  }
  public putBodyContains(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable) {
    this._bodyContains.internalValue = value;
  }
  public resetBodyContains() {
    this._bodyContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyContainsInput() {
    return this._bodyContains.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonPropertyList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodePropertyList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsManagedRulesAcfpRuleSetProperty {
  /**
  * Path to the account creation endpoint on the protected website
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#creation_path TfWebAclRuleGroupAssociation#creation_path}
  */
  readonly creationPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#enable_regex_in_path TfWebAclRuleGroupAssociation#enable_regex_in_path}
  */
  readonly enableRegexInPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#registration_page_path TfWebAclRuleGroupAssociation#registration_page_path}
  */
  readonly registrationPagePath: string;
  /**
  * request_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#request_inspection TfWebAclRuleGroupAssociation#request_inspection}
  */
  readonly requestInspection?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty[] | cdktn.IResolvable;
  /**
  * response_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_inspection TfWebAclRuleGroupAssociation#response_inspection}
  */
  readonly responseInspection?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty[] | cdktn.IResolvable;
}
export class AwsManagedRulesAcfpRuleSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsManagedRulesAcfpRuleSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationPath = this._creationPath;
    }
    if (this._enableRegexInPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRegexInPath = this._enableRegexInPath;
    }
    if (this._registrationPagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationPagePath = this._registrationPagePath;
    }
    if (this._requestInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInspection = this._requestInspection?.internalValue;
    }
    if (this._responseInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseInspection = this._responseInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManagedRulesAcfpRuleSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationPath = undefined;
      this._enableRegexInPath = undefined;
      this._registrationPagePath = undefined;
      this._requestInspection.internalValue = undefined;
      this._responseInspection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationPath = value.creationPath;
      this._enableRegexInPath = value.enableRegexInPath;
      this._registrationPagePath = value.registrationPagePath;
      this._requestInspection.internalValue = value.requestInspection;
      this._responseInspection.internalValue = value.responseInspection;
    }
  }

  // creation_path - computed: false, optional: false, required: true
  private _creationPath?: string; 
  public get creationPath() {
    return this.getStringAttribute('creation_path');
  }
  public set creationPath(value: string) {
    this._creationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPathInput() {
    return this._creationPath;
  }

  // enable_regex_in_path - computed: true, optional: true, required: false
  private _enableRegexInPath?: boolean | cdktn.IResolvable; 
  public get enableRegexInPath() {
    return this.getBooleanAttribute('enable_regex_in_path');
  }
  public set enableRegexInPath(value: boolean | cdktn.IResolvable) {
    this._enableRegexInPath = value;
  }
  public resetEnableRegexInPath() {
    this._enableRegexInPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexInPathInput() {
    return this._enableRegexInPath;
  }

  // registration_page_path - computed: false, optional: false, required: true
  private _registrationPagePath?: string; 
  public get registrationPagePath() {
    return this.getStringAttribute('registration_page_path');
  }
  public set registrationPagePath(value: string) {
    this._registrationPagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPagePathInput() {
    return this._registrationPagePath;
  }

  // request_inspection - computed: false, optional: true, required: false
  private _requestInspection = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPropertyList(this, "request_inspection", false);
  public get requestInspection() {
    return this._requestInspection;
  }
  public putRequestInspection(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionProperty[] | cdktn.IResolvable) {
    this._requestInspection.internalValue = value;
  }
  public resetRequestInspection() {
    this._requestInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInspectionInput() {
    return this._requestInspection.internalValue;
  }

  // response_inspection - computed: false, optional: true, required: false
  private _responseInspection = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionPropertyList(this, "response_inspection", false);
  public get responseInspection() {
    return this._responseInspection;
  }
  public putResponseInspection(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionProperty[] | cdktn.IResolvable) {
    this._responseInspection.internalValue = value;
  }
  public resetResponseInspection() {
    this._responseInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInspectionInput() {
    return this._responseInspection.internalValue;
  }
}

export class AwsManagedRulesAcfpRuleSetPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsManagedRulesAcfpRuleSetProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsManagedRulesAcfpRuleSetPropertyOutputReference {
    return new AwsManagedRulesAcfpRuleSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExemptUriRegularExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#regex_string TfWebAclRuleGroupAssociation#regex_string}
  */
  readonly regexString?: string;
}
export class ExemptUriRegularExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExemptUriRegularExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexString !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexString = this._regexString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExemptUriRegularExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexString = value.regexString;
    }
  }

  // regex_string - computed: false, optional: true, required: false
  private _regexString?: string; 
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
  public set regexString(value: string) {
    this._regexString = value;
  }
  public resetRegexString() {
    this._regexString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexStringInput() {
    return this._regexString;
  }
}

export class ExemptUriRegularExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : ExemptUriRegularExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): ExemptUriRegularExpressionPropertyOutputReference {
    return new ExemptUriRegularExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#sensitivity TfWebAclRuleGroupAssociation#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#usage_of_action TfWebAclRuleGroupAssociation#usage_of_action}
  */
  readonly usageOfAction: string;
  /**
  * exempt_uri_regular_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#exempt_uri_regular_expression TfWebAclRuleGroupAssociation#exempt_uri_regular_expression}
  */
  readonly exemptUriRegularExpression?: ExemptUriRegularExpressionProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._usageOfAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageOfAction = this._usageOfAction;
    }
    if (this._exemptUriRegularExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptUriRegularExpression = this._exemptUriRegularExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivity = undefined;
      this._usageOfAction = undefined;
      this._exemptUriRegularExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivity = value.sensitivity;
      this._usageOfAction = value.usageOfAction;
      this._exemptUriRegularExpression.internalValue = value.exemptUriRegularExpression;
    }
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // usage_of_action - computed: false, optional: false, required: true
  private _usageOfAction?: string; 
  public get usageOfAction() {
    return this.getStringAttribute('usage_of_action');
  }
  public set usageOfAction(value: string) {
    this._usageOfAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageOfActionInput() {
    return this._usageOfAction;
  }

  // exempt_uri_regular_expression - computed: false, optional: true, required: false
  private _exemptUriRegularExpression = new ExemptUriRegularExpressionPropertyList(this, "exempt_uri_regular_expression", false);
  public get exemptUriRegularExpression() {
    return this._exemptUriRegularExpression;
  }
  public putExemptUriRegularExpression(value: ExemptUriRegularExpressionProperty[] | cdktn.IResolvable) {
    this._exemptUriRegularExpression.internalValue = value;
  }
  public resetExemptUriRegularExpression() {
    this._exemptUriRegularExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptUriRegularExpressionInput() {
    return this._exemptUriRegularExpression.internalValue;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientSideActionConfigProperty {
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#challenge TfWebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty[] | cdktn.IResolvable;
}
export class ClientSideActionConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClientSideActionConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientSideActionConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._challenge.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._challenge.internalValue = value.challenge;
    }
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengePropertyList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeProperty[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }
}

export class ClientSideActionConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ClientSideActionConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ClientSideActionConfigPropertyOutputReference {
    return new ClientSideActionConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsManagedRulesAntiDdosRuleSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#sensitivity_to_block TfWebAclRuleGroupAssociation#sensitivity_to_block}
  */
  readonly sensitivityToBlock?: string;
  /**
  * client_side_action_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#client_side_action_config TfWebAclRuleGroupAssociation#client_side_action_config}
  */
  readonly clientSideActionConfig?: ClientSideActionConfigProperty[] | cdktn.IResolvable;
}
export class AwsManagedRulesAntiDdosRuleSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsManagedRulesAntiDdosRuleSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivityToBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityToBlock = this._sensitivityToBlock;
    }
    if (this._clientSideActionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSideActionConfig = this._clientSideActionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManagedRulesAntiDdosRuleSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivityToBlock = undefined;
      this._clientSideActionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivityToBlock = value.sensitivityToBlock;
      this._clientSideActionConfig.internalValue = value.clientSideActionConfig;
    }
  }

  // sensitivity_to_block - computed: true, optional: true, required: false
  private _sensitivityToBlock?: string; 
  public get sensitivityToBlock() {
    return this.getStringAttribute('sensitivity_to_block');
  }
  public set sensitivityToBlock(value: string) {
    this._sensitivityToBlock = value;
  }
  public resetSensitivityToBlock() {
    this._sensitivityToBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityToBlockInput() {
    return this._sensitivityToBlock;
  }

  // client_side_action_config - computed: false, optional: true, required: false
  private _clientSideActionConfig = new ClientSideActionConfigPropertyList(this, "client_side_action_config", false);
  public get clientSideActionConfig() {
    return this._clientSideActionConfig;
  }
  public putClientSideActionConfig(value: ClientSideActionConfigProperty[] | cdktn.IResolvable) {
    this._clientSideActionConfig.internalValue = value;
  }
  public resetClientSideActionConfig() {
    this._clientSideActionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideActionConfigInput() {
    return this._clientSideActionConfig.internalValue;
  }
}

export class AwsManagedRulesAntiDdosRuleSetPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsManagedRulesAntiDdosRuleSetProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsManagedRulesAntiDdosRuleSetPropertyOutputReference {
    return new AwsManagedRulesAntiDdosRuleSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty {
  /**
  * Identifier of the password field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty {
  /**
  * Identifier of the username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty {
  /**
  * Payload type for inspection, either JSON or FORM_ENCODED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#payload_type TfWebAclRuleGroupAssociation#payload_type}
  */
  readonly payloadType: string;
  /**
  * password_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#password_field TfWebAclRuleGroupAssociation#password_field}
  */
  readonly passwordField?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable;
  /**
  * username_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#username_field TfWebAclRuleGroupAssociation#username_field}
  */
  readonly usernameField?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._passwordField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordField = this._passwordField?.internalValue;
    }
    if (this._usernameField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadType = undefined;
      this._passwordField.internalValue = undefined;
      this._usernameField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadType = value.payloadType;
      this._passwordField.internalValue = value.passwordField;
      this._usernameField.internalValue = value.usernameField;
    }
  }

  // payload_type - computed: false, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldPropertyList(this, "password_field", false);
  public get passwordField() {
    return this._passwordField;
  }
  public putPasswordField(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldProperty[] | cdktn.IResolvable) {
    this._passwordField.internalValue = value;
  }
  public resetPasswordField() {
    this._passwordField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField.internalValue;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldPropertyList(this, "username_field", false);
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldProperty[] | cdktn.IResolvable) {
    this._usernameField.internalValue = value;
  }
  public resetUsernameField() {
    this._usernameField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField.internalValue;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_strings TfWebAclRuleGroupAssociation#failure_strings}
  */
  readonly failureStrings: string[];
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_strings TfWebAclRuleGroupAssociation#success_strings}
  */
  readonly successStrings: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureStrings = this._failureStrings;
    }
    if (this._successStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.successStrings = this._successStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureStrings = undefined;
      this._successStrings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureStrings = value.failureStrings;
      this._successStrings = value.successStrings;
    }
  }

  // failure_strings - computed: false, optional: false, required: true
  private _failureStrings?: string[]; 
  public get failureStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_strings'));
  }
  public set failureStrings(value: string[]) {
    this._failureStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureStringsInput() {
    return this._failureStrings;
  }

  // success_strings - computed: false, optional: false, required: true
  private _successStrings?: string[]; 
  public get successStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('success_strings'));
  }
  public set successStrings(value: string[]) {
    this._successStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successStringsInput() {
    return this._successStrings;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values TfWebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Name of the HTTP header to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_values TfWebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._name = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._name = value.name;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
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

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values TfWebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Identifier of the JSON field to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#identifier TfWebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_values TfWebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._identifier = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._identifier = value.identifier;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty {
  /**
  * Status codes that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#failure_codes TfWebAclRuleGroupAssociation#failure_codes}
  */
  readonly failureCodes: number[];
  /**
  * Status codes that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#success_codes TfWebAclRuleGroupAssociation#success_codes}
  */
  readonly successCodes: number[];
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCodes = this._failureCodes;
    }
    if (this._successCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCodes = this._successCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCodes = undefined;
      this._successCodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCodes = value.failureCodes;
      this._successCodes = value.successCodes;
    }
  }

  // failure_codes - computed: false, optional: false, required: true
  private _failureCodes?: number[]; 
  public get failureCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('failure_codes')));
  }
  public set failureCodes(value: number[]) {
    this._failureCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodesInput() {
    return this._failureCodes;
  }

  // success_codes - computed: false, optional: false, required: true
  private _successCodes?: number[]; 
  public get successCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('success_codes')));
  }
  public set successCodes(value: number[]) {
    this._successCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successCodesInput() {
    return this._successCodes;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty {
  /**
  * body_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#body_contains TfWebAclRuleGroupAssociation#body_contains}
  */
  readonly bodyContains?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#header TfWebAclRuleGroupAssociation#header}
  */
  readonly header?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#json TfWebAclRuleGroupAssociation#json}
  */
  readonly json?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#status_code TfWebAclRuleGroupAssociation#status_code}
  */
  readonly statusCode?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyContains = this._bodyContains?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = undefined;
      this._header.internalValue = undefined;
      this._json.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = value.bodyContains;
      this._header.internalValue = value.header;
      this._json.internalValue = value.json;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // body_contains - computed: false, optional: true, required: false
  private _bodyContains = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsPropertyList(this, "body_contains", false);
  public get bodyContains() {
    return this._bodyContains;
  }
  public putBodyContains(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsProperty[] | cdktn.IResolvable) {
    this._bodyContains.internalValue = value;
  }
  public resetBodyContains() {
    this._bodyContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyContainsInput() {
    return this._bodyContains.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonPropertyList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonProperty[] | cdktn.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodePropertyList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeProperty[] | cdktn.IResolvable) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}

export class ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyOutputReference {
    return new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsManagedRulesAtpRuleSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#enable_regex_in_path TfWebAclRuleGroupAssociation#enable_regex_in_path}
  */
  readonly enableRegexInPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#login_path TfWebAclRuleGroupAssociation#login_path}
  */
  readonly loginPath: string;
  /**
  * request_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#request_inspection TfWebAclRuleGroupAssociation#request_inspection}
  */
  readonly requestInspection?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty[] | cdktn.IResolvable;
  /**
  * response_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_inspection TfWebAclRuleGroupAssociation#response_inspection}
  */
  readonly responseInspection?: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty[] | cdktn.IResolvable;
}
export class AwsManagedRulesAtpRuleSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsManagedRulesAtpRuleSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRegexInPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRegexInPath = this._enableRegexInPath;
    }
    if (this._loginPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPath = this._loginPath;
    }
    if (this._requestInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInspection = this._requestInspection?.internalValue;
    }
    if (this._responseInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseInspection = this._responseInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManagedRulesAtpRuleSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRegexInPath = undefined;
      this._loginPath = undefined;
      this._requestInspection.internalValue = undefined;
      this._responseInspection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRegexInPath = value.enableRegexInPath;
      this._loginPath = value.loginPath;
      this._requestInspection.internalValue = value.requestInspection;
      this._responseInspection.internalValue = value.responseInspection;
    }
  }

  // enable_regex_in_path - computed: true, optional: true, required: false
  private _enableRegexInPath?: boolean | cdktn.IResolvable; 
  public get enableRegexInPath() {
    return this.getBooleanAttribute('enable_regex_in_path');
  }
  public set enableRegexInPath(value: boolean | cdktn.IResolvable) {
    this._enableRegexInPath = value;
  }
  public resetEnableRegexInPath() {
    this._enableRegexInPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexInPathInput() {
    return this._enableRegexInPath;
  }

  // login_path - computed: false, optional: false, required: true
  private _loginPath?: string; 
  public get loginPath() {
    return this.getStringAttribute('login_path');
  }
  public set loginPath(value: string) {
    this._loginPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPathInput() {
    return this._loginPath;
  }

  // request_inspection - computed: false, optional: true, required: false
  private _requestInspection = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPropertyList(this, "request_inspection", false);
  public get requestInspection() {
    return this._requestInspection;
  }
  public putRequestInspection(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionProperty[] | cdktn.IResolvable) {
    this._requestInspection.internalValue = value;
  }
  public resetRequestInspection() {
    this._requestInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInspectionInput() {
    return this._requestInspection.internalValue;
  }

  // response_inspection - computed: false, optional: true, required: false
  private _responseInspection = new ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionPropertyList(this, "response_inspection", false);
  public get responseInspection() {
    return this._responseInspection;
  }
  public putResponseInspection(value: ManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionProperty[] | cdktn.IResolvable) {
    this._responseInspection.internalValue = value;
  }
  public resetResponseInspection() {
    this._responseInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInspectionInput() {
    return this._responseInspection.internalValue;
  }
}

export class AwsManagedRulesAtpRuleSetPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsManagedRulesAtpRuleSetProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsManagedRulesAtpRuleSetPropertyOutputReference {
    return new AwsManagedRulesAtpRuleSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsManagedRulesBotControlRuleSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#enable_machine_learning TfWebAclRuleGroupAssociation#enable_machine_learning}
  */
  readonly enableMachineLearning?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#inspection_level TfWebAclRuleGroupAssociation#inspection_level}
  */
  readonly inspectionLevel: string;
}
export class AwsManagedRulesBotControlRuleSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsManagedRulesBotControlRuleSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMachineLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMachineLearning = this._enableMachineLearning;
    }
    if (this._inspectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLevel = this._inspectionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManagedRulesBotControlRuleSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMachineLearning = undefined;
      this._inspectionLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMachineLearning = value.enableMachineLearning;
      this._inspectionLevel = value.inspectionLevel;
    }
  }

  // enable_machine_learning - computed: true, optional: true, required: false
  private _enableMachineLearning?: boolean | cdktn.IResolvable; 
  public get enableMachineLearning() {
    return this.getBooleanAttribute('enable_machine_learning');
  }
  public set enableMachineLearning(value: boolean | cdktn.IResolvable) {
    this._enableMachineLearning = value;
  }
  public resetEnableMachineLearning() {
    this._enableMachineLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineLearningInput() {
    return this._enableMachineLearning;
  }

  // inspection_level - computed: false, optional: false, required: true
  private _inspectionLevel?: string; 
  public get inspectionLevel() {
    return this.getStringAttribute('inspection_level');
  }
  public set inspectionLevel(value: string) {
    this._inspectionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLevelInput() {
    return this._inspectionLevel;
  }
}

export class AwsManagedRulesBotControlRuleSetPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsManagedRulesBotControlRuleSetProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsManagedRulesBotControlRuleSetPropertyOutputReference {
    return new AwsManagedRulesBotControlRuleSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupConfigsProperty {
  /**
  * aws_managed_rules_acfp_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_acfp_rule_set TfWebAclRuleGroupAssociation#aws_managed_rules_acfp_rule_set}
  */
  readonly awsManagedRulesAcfpRuleSet?: AwsManagedRulesAcfpRuleSetProperty[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_anti_ddos_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_anti_ddos_rule_set TfWebAclRuleGroupAssociation#aws_managed_rules_anti_ddos_rule_set}
  */
  readonly awsManagedRulesAntiDdosRuleSet?: AwsManagedRulesAntiDdosRuleSetProperty[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_atp_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_atp_rule_set TfWebAclRuleGroupAssociation#aws_managed_rules_atp_rule_set}
  */
  readonly awsManagedRulesAtpRuleSet?: AwsManagedRulesAtpRuleSetProperty[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_bot_control_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_bot_control_rule_set TfWebAclRuleGroupAssociation#aws_managed_rules_bot_control_rule_set}
  */
  readonly awsManagedRulesBotControlRuleSet?: AwsManagedRulesBotControlRuleSetProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsManagedRulesAcfpRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAcfpRuleSet = this._awsManagedRulesAcfpRuleSet?.internalValue;
    }
    if (this._awsManagedRulesAntiDdosRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAntiDdosRuleSet = this._awsManagedRulesAntiDdosRuleSet?.internalValue;
    }
    if (this._awsManagedRulesAtpRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAtpRuleSet = this._awsManagedRulesAtpRuleSet?.internalValue;
    }
    if (this._awsManagedRulesBotControlRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesBotControlRuleSet = this._awsManagedRulesBotControlRuleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsManagedRulesAcfpRuleSet.internalValue = undefined;
      this._awsManagedRulesAntiDdosRuleSet.internalValue = undefined;
      this._awsManagedRulesAtpRuleSet.internalValue = undefined;
      this._awsManagedRulesBotControlRuleSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsManagedRulesAcfpRuleSet.internalValue = value.awsManagedRulesAcfpRuleSet;
      this._awsManagedRulesAntiDdosRuleSet.internalValue = value.awsManagedRulesAntiDdosRuleSet;
      this._awsManagedRulesAtpRuleSet.internalValue = value.awsManagedRulesAtpRuleSet;
      this._awsManagedRulesBotControlRuleSet.internalValue = value.awsManagedRulesBotControlRuleSet;
    }
  }

  // aws_managed_rules_acfp_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAcfpRuleSet = new AwsManagedRulesAcfpRuleSetPropertyList(this, "aws_managed_rules_acfp_rule_set", false);
  public get awsManagedRulesAcfpRuleSet() {
    return this._awsManagedRulesAcfpRuleSet;
  }
  public putAwsManagedRulesAcfpRuleSet(value: AwsManagedRulesAcfpRuleSetProperty[] | cdktn.IResolvable) {
    this._awsManagedRulesAcfpRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAcfpRuleSet() {
    this._awsManagedRulesAcfpRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAcfpRuleSetInput() {
    return this._awsManagedRulesAcfpRuleSet.internalValue;
  }

  // aws_managed_rules_anti_ddos_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAntiDdosRuleSet = new AwsManagedRulesAntiDdosRuleSetPropertyList(this, "aws_managed_rules_anti_ddos_rule_set", false);
  public get awsManagedRulesAntiDdosRuleSet() {
    return this._awsManagedRulesAntiDdosRuleSet;
  }
  public putAwsManagedRulesAntiDdosRuleSet(value: AwsManagedRulesAntiDdosRuleSetProperty[] | cdktn.IResolvable) {
    this._awsManagedRulesAntiDdosRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAntiDdosRuleSet() {
    this._awsManagedRulesAntiDdosRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAntiDdosRuleSetInput() {
    return this._awsManagedRulesAntiDdosRuleSet.internalValue;
  }

  // aws_managed_rules_atp_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAtpRuleSet = new AwsManagedRulesAtpRuleSetPropertyList(this, "aws_managed_rules_atp_rule_set", false);
  public get awsManagedRulesAtpRuleSet() {
    return this._awsManagedRulesAtpRuleSet;
  }
  public putAwsManagedRulesAtpRuleSet(value: AwsManagedRulesAtpRuleSetProperty[] | cdktn.IResolvable) {
    this._awsManagedRulesAtpRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAtpRuleSet() {
    this._awsManagedRulesAtpRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAtpRuleSetInput() {
    return this._awsManagedRulesAtpRuleSet.internalValue;
  }

  // aws_managed_rules_bot_control_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesBotControlRuleSet = new AwsManagedRulesBotControlRuleSetPropertyList(this, "aws_managed_rules_bot_control_rule_set", false);
  public get awsManagedRulesBotControlRuleSet() {
    return this._awsManagedRulesBotControlRuleSet;
  }
  public putAwsManagedRulesBotControlRuleSet(value: AwsManagedRulesBotControlRuleSetProperty[] | cdktn.IResolvable) {
    this._awsManagedRulesBotControlRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesBotControlRuleSet() {
    this._awsManagedRulesBotControlRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesBotControlRuleSetInput() {
    return this._awsManagedRulesBotControlRuleSet.internalValue;
  }
}

export class ManagedRuleGroupConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupConfigsPropertyOutputReference {
    return new ManagedRuleGroupConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response_body_key TfWebAclRuleGroupAssociation#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_code TfWebAclRuleGroupAssociation#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_header TfWebAclRuleGroupAssociation#response_header}
  */
  readonly responseHeader?: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response TfWebAclRuleGroupAssociation#custom_response}
  */
  readonly customResponse?: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponsePropertyList(this, "custom_response", false);
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseCountProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: ManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideActionToUseProperty {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#allow TfWebAclRuleGroupAssociation#allow}
  */
  readonly allow?: ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#block TfWebAclRuleGroupAssociation#block}
  */
  readonly block?: ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#captcha TfWebAclRuleGroupAssociation#captcha}
  */
  readonly captcha?: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#challenge TfWebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#count TfWebAclRuleGroupAssociation#count}
  */
  readonly count?: ManagedRuleGroupRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverrideActionToUsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideActionToUseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideActionToUseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ManagedRuleGroupRuleActionOverrideActionToUseAllowPropertyList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ManagedRuleGroupRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new ManagedRuleGroupRuleActionOverrideActionToUseBlockPropertyList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: ManagedRuleGroupRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new ManagedRuleGroupRuleActionOverrideActionToUseCaptchaPropertyList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: ManagedRuleGroupRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new ManagedRuleGroupRuleActionOverrideActionToUseChallengePropertyList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: ManagedRuleGroupRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new ManagedRuleGroupRuleActionOverrideActionToUseCountPropertyList(this, "count", false);
  public get count() {
    return this._count;
  }
  public putCount(value: ManagedRuleGroupRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverrideActionToUsePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverrideActionToUsePropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverrideActionToUsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupRuleActionOverrideProperty {
  /**
  * Name of the rule to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * action_to_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#action_to_use TfWebAclRuleGroupAssociation#action_to_use}
  */
  readonly actionToUse?: ManagedRuleGroupRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupRuleActionOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupRuleActionOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actionToUse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionToUse = this._actionToUse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupRuleActionOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actionToUse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actionToUse.internalValue = value.actionToUse;
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

  // action_to_use - computed: false, optional: true, required: false
  private _actionToUse = new ManagedRuleGroupRuleActionOverrideActionToUsePropertyList(this, "action_to_use", false);
  public get actionToUse() {
    return this._actionToUse;
  }
  public putActionToUse(value: ManagedRuleGroupRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable) {
    this._actionToUse.internalValue = value;
  }
  public resetActionToUse() {
    this._actionToUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToUseInput() {
    return this._actionToUse.internalValue;
  }
}

export class ManagedRuleGroupRuleActionOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupRuleActionOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupRuleActionOverridePropertyOutputReference {
    return new ManagedRuleGroupRuleActionOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedRuleGroupProperty {
  /**
  * Name of the managed rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Name of the managed rule group vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#vendor_name TfWebAclRuleGroupAssociation#vendor_name}
  */
  readonly vendorName: string;
  /**
  * Version of the managed rule group. Omit this to use the default version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#version TfWebAclRuleGroupAssociation#version}
  */
  readonly version?: string;
  /**
  * managed_rule_group_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#managed_rule_group_configs TfWebAclRuleGroupAssociation#managed_rule_group_configs}
  */
  readonly managedRuleGroupConfigs?: ManagedRuleGroupConfigsProperty[] | cdktn.IResolvable;
  /**
  * rule_action_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#rule_action_override TfWebAclRuleGroupAssociation#rule_action_override}
  */
  readonly ruleActionOverride?: ManagedRuleGroupRuleActionOverrideProperty[] | cdktn.IResolvable;
}
export class ManagedRuleGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedRuleGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vendorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorName = this._vendorName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._managedRuleGroupConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleGroupConfigs = this._managedRuleGroupConfigs?.internalValue;
    }
    if (this._ruleActionOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionOverride = this._ruleActionOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedRuleGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vendorName = undefined;
      this._version = undefined;
      this._managedRuleGroupConfigs.internalValue = undefined;
      this._ruleActionOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vendorName = value.vendorName;
      this._version = value.version;
      this._managedRuleGroupConfigs.internalValue = value.managedRuleGroupConfigs;
      this._ruleActionOverride.internalValue = value.ruleActionOverride;
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

  // vendor_name - computed: false, optional: false, required: true
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // managed_rule_group_configs - computed: false, optional: true, required: false
  private _managedRuleGroupConfigs = new ManagedRuleGroupConfigsPropertyList(this, "managed_rule_group_configs", false);
  public get managedRuleGroupConfigs() {
    return this._managedRuleGroupConfigs;
  }
  public putManagedRuleGroupConfigs(value: ManagedRuleGroupConfigsProperty[] | cdktn.IResolvable) {
    this._managedRuleGroupConfigs.internalValue = value;
  }
  public resetManagedRuleGroupConfigs() {
    this._managedRuleGroupConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupConfigsInput() {
    return this._managedRuleGroupConfigs.internalValue;
  }

  // rule_action_override - computed: false, optional: true, required: false
  private _ruleActionOverride = new ManagedRuleGroupRuleActionOverridePropertyList(this, "rule_action_override", false);
  public get ruleActionOverride() {
    return this._ruleActionOverride;
  }
  public putRuleActionOverride(value: ManagedRuleGroupRuleActionOverrideProperty[] | cdktn.IResolvable) {
    this._ruleActionOverride.internalValue = value;
  }
  public resetRuleActionOverride() {
    this._ruleActionOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionOverrideInput() {
    return this._ruleActionOverride.internalValue;
  }
}

export class ManagedRuleGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedRuleGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedRuleGroupPropertyOutputReference {
    return new ManagedRuleGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response_body_key TfWebAclRuleGroupAssociation#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_code TfWebAclRuleGroupAssociation#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#response_header TfWebAclRuleGroupAssociation#response_header}
  */
  readonly responseHeader?: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderPropertyList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response TfWebAclRuleGroupAssociation#custom_response}
  */
  readonly customResponse?: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponsePropertyList(this, "custom_response", false);
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseProperty[] | cdktn.IResolvable) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#value TfWebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header TfWebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseCountProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling TfWebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseCountProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingPropertyList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingProperty[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideActionToUseProperty {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#allow TfWebAclRuleGroupAssociation#allow}
  */
  readonly allow?: RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#block TfWebAclRuleGroupAssociation#block}
  */
  readonly block?: RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#captcha TfWebAclRuleGroupAssociation#captcha}
  */
  readonly captcha?: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#challenge TfWebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#count TfWebAclRuleGroupAssociation#count}
  */
  readonly count?: RuleGroupReferenceRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverrideActionToUsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideActionToUseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideActionToUseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new RuleGroupReferenceRuleActionOverrideActionToUseAllowPropertyList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: RuleGroupReferenceRuleActionOverrideActionToUseAllowProperty[] | cdktn.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new RuleGroupReferenceRuleActionOverrideActionToUseBlockPropertyList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: RuleGroupReferenceRuleActionOverrideActionToUseBlockProperty[] | cdktn.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new RuleGroupReferenceRuleActionOverrideActionToUseCaptchaPropertyList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: RuleGroupReferenceRuleActionOverrideActionToUseCaptchaProperty[] | cdktn.IResolvable) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new RuleGroupReferenceRuleActionOverrideActionToUseChallengePropertyList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: RuleGroupReferenceRuleActionOverrideActionToUseChallengeProperty[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new RuleGroupReferenceRuleActionOverrideActionToUseCountPropertyList(this, "count", false);
  public get count() {
    return this._count;
  }
  public putCount(value: RuleGroupReferenceRuleActionOverrideActionToUseCountProperty[] | cdktn.IResolvable) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverrideActionToUsePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverrideActionToUsePropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverrideActionToUsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceRuleActionOverrideProperty {
  /**
  * Name of the rule to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#name TfWebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * action_to_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#action_to_use TfWebAclRuleGroupAssociation#action_to_use}
  */
  readonly actionToUse?: RuleGroupReferenceRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferenceRuleActionOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceRuleActionOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actionToUse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionToUse = this._actionToUse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceRuleActionOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actionToUse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actionToUse.internalValue = value.actionToUse;
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

  // action_to_use - computed: false, optional: true, required: false
  private _actionToUse = new RuleGroupReferenceRuleActionOverrideActionToUsePropertyList(this, "action_to_use", false);
  public get actionToUse() {
    return this._actionToUse;
  }
  public putActionToUse(value: RuleGroupReferenceRuleActionOverrideActionToUseProperty[] | cdktn.IResolvable) {
    this._actionToUse.internalValue = value;
  }
  public resetActionToUse() {
    this._actionToUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToUseInput() {
    return this._actionToUse.internalValue;
  }
}

export class RuleGroupReferenceRuleActionOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceRuleActionOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferenceRuleActionOverridePropertyOutputReference {
    return new RuleGroupReferenceRuleActionOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupReferenceProperty {
  /**
  * ARN of the Rule Group to associate with the Web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#arn TfWebAclRuleGroupAssociation#arn}
  */
  readonly arn: string;
  /**
  * rule_action_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#rule_action_override TfWebAclRuleGroupAssociation#rule_action_override}
  */
  readonly ruleActionOverride?: RuleGroupReferenceRuleActionOverrideProperty[] | cdktn.IResolvable;
}
export class RuleGroupReferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleGroupReferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._ruleActionOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionOverride = this._ruleActionOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupReferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._ruleActionOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._ruleActionOverride.internalValue = value.ruleActionOverride;
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

  // rule_action_override - computed: false, optional: true, required: false
  private _ruleActionOverride = new RuleGroupReferenceRuleActionOverridePropertyList(this, "rule_action_override", false);
  public get ruleActionOverride() {
    return this._ruleActionOverride;
  }
  public putRuleActionOverride(value: RuleGroupReferenceRuleActionOverrideProperty[] | cdktn.IResolvable) {
    this._ruleActionOverride.internalValue = value;
  }
  public resetRuleActionOverride() {
    this._ruleActionOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionOverrideInput() {
    return this._ruleActionOverride.internalValue;
  }
}

export class RuleGroupReferencePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleGroupReferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleGroupReferencePropertyOutputReference {
    return new RuleGroupReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#create TfWebAclRuleGroupAssociation#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#delete TfWebAclRuleGroupAssociation#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#update TfWebAclRuleGroupAssociation#update}
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
export interface VisibilityConfigProperty {
  /**
  * Indicates whether the rule is available for use in the metrics for the web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#cloudwatch_metrics_enabled TfWebAclRuleGroupAssociation#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktn.IResolvable;
  /**
  * A name for the metrics for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#metric_name TfWebAclRuleGroupAssociation#metric_name}
  */
  readonly metricName: string;
  /**
  * Indicates whether to store a sampling of the web requests that match the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl_rule_group_association#sampled_requests_enabled TfWebAclRuleGroupAssociation#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktn.IResolvable;
}
export class VisibilityConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VisibilityConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktn.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktn.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}

export class VisibilityConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : VisibilityConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): VisibilityConfigPropertyOutputReference {
    return new VisibilityConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
