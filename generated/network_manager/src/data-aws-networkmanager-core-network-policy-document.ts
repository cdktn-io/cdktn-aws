// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DataTfCoreNetworkPolicyDocumentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#id DataTfCoreNetworkPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#version DataTfCoreNetworkPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * attachment_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_policies DataTfCoreNetworkPolicyDocument#attachment_policies}
  */
  readonly attachmentPolicies?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesProperty[] | cdktn.IResolvable;
  /**
  * attachment_routing_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_routing_policy_rules DataTfCoreNetworkPolicyDocument#attachment_routing_policy_rules}
  */
  readonly attachmentRoutingPolicyRules?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesProperty[] | cdktn.IResolvable;
  /**
  * core_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#core_network_configuration DataTfCoreNetworkPolicyDocument#core_network_configuration}
  */
  readonly coreNetworkConfiguration: DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationProperty[] | cdktn.IResolvable;
  /**
  * network_function_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataTfCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsProperty[] | cdktn.IResolvable;
  /**
  * routing_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policies DataTfCoreNetworkPolicyDocument#routing_policies}
  */
  readonly routingPolicies?: DataTfCoreNetworkPolicyDocument.RoutingPoliciesProperty[] | cdktn.IResolvable;
  /**
  * segment_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#segment_actions DataTfCoreNetworkPolicyDocument#segment_actions}
  */
  readonly segmentActions?: DataTfCoreNetworkPolicyDocument.SegmentActionsProperty[] | cdktn.IResolvable;
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataTfCoreNetworkPolicyDocument#segments}
  */
  readonly segments: DataTfCoreNetworkPolicyDocument.SegmentsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export class DataTfCoreNetworkPolicyDocument extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataTfCoreNetworkPolicyDocument resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfCoreNetworkPolicyDocument to import
  * @param importFromId The id of the existing DataTfCoreNetworkPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfCoreNetworkPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_core_network_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfCoreNetworkPolicyDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfCoreNetworkPolicyDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_core_network_policy_document',
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
    this._version = config.version;
    this._attachmentPolicies.internalValue = config.attachmentPolicies;
    this._attachmentRoutingPolicyRules.internalValue = config.attachmentRoutingPolicyRules;
    this._coreNetworkConfiguration.internalValue = config.coreNetworkConfiguration;
    this._networkFunctionGroups.internalValue = config.networkFunctionGroups;
    this._routingPolicies.internalValue = config.routingPolicies;
    this._segmentActions.internalValue = config.segmentActions;
    this._segments.internalValue = config.segments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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

  // attachment_policies - computed: false, optional: true, required: false
  private _attachmentPolicies = new DataTfCoreNetworkPolicyDocument.AttachmentPoliciesPropertyList(this, "attachment_policies", false);
  public get attachmentPolicies() {
    return this._attachmentPolicies;
  }
  public putAttachmentPolicies(value: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesProperty[] | cdktn.IResolvable) {
    this._attachmentPolicies.internalValue = value;
  }
  public resetAttachmentPolicies() {
    this._attachmentPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPoliciesInput() {
    return this._attachmentPolicies.internalValue;
  }

  // attachment_routing_policy_rules - computed: false, optional: true, required: false
  private _attachmentRoutingPolicyRules = new DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesPropertyList(this, "attachment_routing_policy_rules", false);
  public get attachmentRoutingPolicyRules() {
    return this._attachmentRoutingPolicyRules;
  }
  public putAttachmentRoutingPolicyRules(value: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesProperty[] | cdktn.IResolvable) {
    this._attachmentRoutingPolicyRules.internalValue = value;
  }
  public resetAttachmentRoutingPolicyRules() {
    this._attachmentRoutingPolicyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentRoutingPolicyRulesInput() {
    return this._attachmentRoutingPolicyRules.internalValue;
  }

  // core_network_configuration - computed: false, optional: false, required: true
  private _coreNetworkConfiguration = new DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationPropertyList(this, "core_network_configuration", false);
  public get coreNetworkConfiguration() {
    return this._coreNetworkConfiguration;
  }
  public putCoreNetworkConfiguration(value: DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationProperty[] | cdktn.IResolvable) {
    this._coreNetworkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkConfigurationInput() {
    return this._coreNetworkConfiguration.internalValue;
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups = new DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsPropertyList(this, "network_function_groups", false);
  public get networkFunctionGroups() {
    return this._networkFunctionGroups;
  }
  public putNetworkFunctionGroups(value: DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsProperty[] | cdktn.IResolvable) {
    this._networkFunctionGroups.internalValue = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups.internalValue;
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DataTfCoreNetworkPolicyDocument.RoutingPoliciesPropertyList(this, "routing_policies", false);
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: DataTfCoreNetworkPolicyDocument.RoutingPoliciesProperty[] | cdktn.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // segment_actions - computed: false, optional: true, required: false
  private _segmentActions = new DataTfCoreNetworkPolicyDocument.SegmentActionsPropertyList(this, "segment_actions", false);
  public get segmentActions() {
    return this._segmentActions;
  }
  public putSegmentActions(value: DataTfCoreNetworkPolicyDocument.SegmentActionsProperty[] | cdktn.IResolvable) {
    this._segmentActions.internalValue = value;
  }
  public resetSegmentActions() {
    this._segmentActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentActionsInput() {
    return this._segmentActions.internalValue;
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new DataTfCoreNetworkPolicyDocument.SegmentsPropertyList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: DataTfCoreNetworkPolicyDocument.SegmentsProperty[] | cdktn.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      version: cdktn.stringToTerraform(this._version),
      attachment_policies: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentAttachmentPoliciesPropertyToTerraform, true)(this._attachmentPolicies.internalValue),
      attachment_routing_policy_rules: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesPropertyToTerraform, true)(this._attachmentRoutingPolicyRules.internalValue),
      core_network_configuration: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentCoreNetworkConfigurationPropertyToTerraform, true)(this._coreNetworkConfiguration.internalValue),
      network_function_groups: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentNetworkFunctionGroupsPropertyToTerraform, true)(this._networkFunctionGroups.internalValue),
      routing_policies: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentRoutingPoliciesPropertyToTerraform, true)(this._routingPolicies.internalValue),
      segment_actions: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentSegmentActionsPropertyToTerraform, true)(this._segmentActions.internalValue),
      segments: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentSegmentsPropertyToTerraform, true)(this._segments.internalValue),
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
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_policies: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentAttachmentPoliciesPropertyToHclTerraform, true)(this._attachmentPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.AttachmentPoliciesPropertyList",
      },
      attachment_routing_policy_rules: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesPropertyToHclTerraform, true)(this._attachmentRoutingPolicyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesPropertyList",
      },
      core_network_configuration: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentCoreNetworkConfigurationPropertyToHclTerraform, true)(this._coreNetworkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationPropertyList",
      },
      network_function_groups: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentNetworkFunctionGroupsPropertyToHclTerraform, true)(this._networkFunctionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsPropertyList",
      },
      routing_policies: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentRoutingPoliciesPropertyToHclTerraform, true)(this._routingPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.RoutingPoliciesPropertyList",
      },
      segment_actions: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentSegmentActionsPropertyToHclTerraform, true)(this._segmentActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.SegmentActionsPropertyList",
      },
      segments: {
        value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentSegmentsPropertyToHclTerraform, true)(this._segments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfCoreNetworkPolicyDocument.SegmentsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesActionPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.AttachmentPoliciesActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_to_network_function_group: cdktn.stringToTerraform(struct!.addToNetworkFunctionGroup),
    association_method: cdktn.stringToTerraform(struct!.associationMethod),
    require_acceptance: cdktn.booleanToTerraform(struct!.requireAcceptance),
    segment: cdktn.stringToTerraform(struct!.segment),
    tag_value_of_key: cdktn.stringToTerraform(struct!.tagValueOfKey),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesActionPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.AttachmentPoliciesActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_to_network_function_group: {
      value: cdktn.stringToHclTerraform(struct!.addToNetworkFunctionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_method: {
      value: cdktn.stringToHclTerraform(struct!.associationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value_of_key: {
      value: cdktn.stringToHclTerraform(struct!.tagValueOfKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesConditionsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesConditionsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesConditionsProperty | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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


export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_logic: cdktn.stringToTerraform(struct!.conditionLogic),
    description: cdktn.stringToTerraform(struct!.description),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    action: dataTfCoreNetworkPolicyDocumentAttachmentPoliciesActionPropertyToTerraform(struct!.action),
    conditions: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentAttachmentPoliciesConditionsPropertyToTerraform, true)(struct!.conditions),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentPoliciesPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_logic: {
      value: cdktn.stringToHclTerraform(struct!.conditionLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: dataTfCoreNetworkPolicyDocumentAttachmentPoliciesActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AttachmentPoliciesActionPropertyList",
    },
    conditions: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentAttachmentPoliciesConditionsPropertyToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AttachmentPoliciesConditionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associate_routing_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.associateRoutingPolicies),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associate_routing_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.associateRoutingPolicies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesConditionsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    edge_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.edgeLocations),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    action: dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionPropertyToTerraform(struct!.action),
    conditions: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsPropertyToTerraform, true)(struct!.conditions),
  }
}


export function dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.AttachmentRoutingPolicyRulesProperty | cdktn.IResolvable): any {
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
    edge_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.edgeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AttachmentRoutingPolicyRulesActionPropertyList",
    },
    conditions: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsPropertyToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AttachmentRoutingPolicyRulesConditionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentEdgeLocationsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.EdgeLocationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asn: cdktn.stringToTerraform(struct!.asn),
    inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.insideCidrBlocks),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function dataTfCoreNetworkPolicyDocumentEdgeLocationsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.EdgeLocationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asn: {
      value: cdktn.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentCoreNetworkConfigurationPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asn_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.asnRanges),
    dns_support: cdktn.booleanToTerraform(struct!.dnsSupport),
    inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.insideCidrBlocks),
    security_group_referencing_support: cdktn.booleanToTerraform(struct!.securityGroupReferencingSupport),
    vpn_ecmp_support: cdktn.booleanToTerraform(struct!.vpnEcmpSupport),
    edge_locations: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentEdgeLocationsPropertyToTerraform, true)(struct!.edgeLocations),
  }
}


export function dataTfCoreNetworkPolicyDocumentCoreNetworkConfigurationPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.CoreNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asn_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.asnRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_support: {
      value: cdktn.booleanToHclTerraform(struct!.dnsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_group_referencing_support: {
      value: cdktn.booleanToHclTerraform(struct!.securityGroupReferencingSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_ecmp_support: {
      value: cdktn.booleanToHclTerraform(struct!.vpnEcmpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_locations: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentEdgeLocationsPropertyToHclTerraform, true)(struct!.edgeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeLocationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentNetworkFunctionGroupsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktn.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataTfCoreNetworkPolicyDocumentNetworkFunctionGroupsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.NetworkFunctionGroupsProperty | cdktn.IResolvable): any {
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
    require_attachment_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataTfCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentMatchConditionsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.MatchConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataTfCoreNetworkPolicyDocumentMatchConditionsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.MatchConditionsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentRuleDefinitionPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.RuleDefinitionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.RuleDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_logic: cdktn.stringToTerraform(struct!.conditionLogic),
    action: dataTfCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyToTerraform(struct!.action),
    match_conditions: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentMatchConditionsPropertyToTerraform, true)(struct!.matchConditions),
  }
}


export function dataTfCoreNetworkPolicyDocumentRuleDefinitionPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.RuleDefinitionPropertyOutputReference | DataTfCoreNetworkPolicyDocument.RuleDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_logic: {
      value: cdktn.stringToHclTerraform(struct!.conditionLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: dataTfCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyList",
    },
    match_conditions: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentMatchConditionsPropertyToHclTerraform, true)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "MatchConditionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentRoutingPolicyRulesPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPolicyRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    rule_definition: dataTfCoreNetworkPolicyDocumentRuleDefinitionPropertyToTerraform(struct!.ruleDefinition),
  }
}


export function dataTfCoreNetworkPolicyDocumentRoutingPolicyRulesPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPolicyRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_definition: {
      value: dataTfCoreNetworkPolicyDocumentRuleDefinitionPropertyToHclTerraform(struct!.ruleDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "RuleDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentRoutingPoliciesPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_policy_description: cdktn.stringToTerraform(struct!.routingPolicyDescription),
    routing_policy_direction: cdktn.stringToTerraform(struct!.routingPolicyDirection),
    routing_policy_name: cdktn.stringToTerraform(struct!.routingPolicyName),
    routing_policy_number: cdktn.numberToTerraform(struct!.routingPolicyNumber),
    routing_policy_rules: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentRoutingPolicyRulesPropertyToTerraform, true)(struct!.routingPolicyRules),
  }
}


export function dataTfCoreNetworkPolicyDocumentRoutingPoliciesPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.RoutingPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_policy_description: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_direction: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_name: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_number: {
      value: cdktn.numberToHclTerraform(struct!.routingPolicyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_policy_rules: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentRoutingPolicyRulesPropertyToHclTerraform, true)(struct!.routingPolicyRules),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingPolicyRulesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentEdgeLocationAssociationPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.EdgeLocationAssociationPropertyOutputReference | DataTfCoreNetworkPolicyDocument.EdgeLocationAssociationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edge_location: cdktn.stringToTerraform(struct!.edgeLocation),
    peer_edge_location: cdktn.stringToTerraform(struct!.peerEdgeLocation),
    routing_policy_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.routingPolicyNames),
  }
}


export function dataTfCoreNetworkPolicyDocumentEdgeLocationAssociationPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.EdgeLocationAssociationPropertyOutputReference | DataTfCoreNetworkPolicyDocument.EdgeLocationAssociationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edge_location: {
      value: cdktn.stringToHclTerraform(struct!.edgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_edge_location: {
      value: cdktn.stringToHclTerraform(struct!.peerEdgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.routingPolicyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentWithEdgeOverridePropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.WithEdgeOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edge_sets: cdktn.listMapper(cdktn.listMapper(cdktn.stringToTerraform, false), false)(struct!.edgeSets),
    use_edge: cdktn.stringToTerraform(struct!.useEdge),
    use_edge_location: cdktn.stringToTerraform(struct!.useEdgeLocation),
  }
}


export function dataTfCoreNetworkPolicyDocumentWithEdgeOverridePropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.WithEdgeOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edge_sets: {
      value: cdktn.listMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false), false)(struct!.edgeSets),
      isBlock: false,
      type: "set",
      storageClassType: "stringListList",
    },
    use_edge: {
      value: cdktn.stringToHclTerraform(struct!.useEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_edge_location: {
      value: cdktn.stringToHclTerraform(struct!.useEdgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentViaPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.ViaPropertyOutputReference | DataTfCoreNetworkPolicyDocument.ViaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_function_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.networkFunctionGroups),
    with_edge_override: cdktn.listMapper(dataTfCoreNetworkPolicyDocumentWithEdgeOverridePropertyToTerraform, true)(struct!.withEdgeOverride),
  }
}


export function dataTfCoreNetworkPolicyDocumentViaPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.ViaPropertyOutputReference | DataTfCoreNetworkPolicyDocument.ViaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_function_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.networkFunctionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    with_edge_override: {
      value: cdktn.listMapperHcl(dataTfCoreNetworkPolicyDocumentWithEdgeOverridePropertyToHclTerraform, true)(struct!.withEdgeOverride),
      isBlock: true,
      type: "list",
      storageClassType: "WithEdgeOverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentWhenSentToPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.WhenSentToPropertyOutputReference | DataTfCoreNetworkPolicyDocument.WhenSentToProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.segments),
  }
}


export function dataTfCoreNetworkPolicyDocumentWhenSentToPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.WhenSentToPropertyOutputReference | DataTfCoreNetworkPolicyDocument.WhenSentToProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.segments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentSegmentActionsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.SegmentActionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    destination_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationCidrBlocks),
    destinations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinations),
    mode: cdktn.stringToTerraform(struct!.mode),
    routing_policy_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.routingPolicyNames),
    segment: cdktn.stringToTerraform(struct!.segment),
    share_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.shareWith),
    share_with_except: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.shareWithExcept),
    edge_location_association: dataTfCoreNetworkPolicyDocumentEdgeLocationAssociationPropertyToTerraform(struct!.edgeLocationAssociation),
    via: dataTfCoreNetworkPolicyDocumentViaPropertyToTerraform(struct!.via),
    when_sent_to: dataTfCoreNetworkPolicyDocumentWhenSentToPropertyToTerraform(struct!.whenSentTo),
  }
}


export function dataTfCoreNetworkPolicyDocumentSegmentActionsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.SegmentActionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destinations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.routingPolicyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.shareWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    share_with_except: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.shareWithExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    edge_location_association: {
      value: dataTfCoreNetworkPolicyDocumentEdgeLocationAssociationPropertyToHclTerraform(struct!.edgeLocationAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeLocationAssociationPropertyList",
    },
    via: {
      value: dataTfCoreNetworkPolicyDocumentViaPropertyToHclTerraform(struct!.via),
      isBlock: true,
      type: "list",
      storageClassType: "ViaPropertyList",
    },
    when_sent_to: {
      value: dataTfCoreNetworkPolicyDocumentWhenSentToPropertyToHclTerraform(struct!.whenSentTo),
      isBlock: true,
      type: "list",
      storageClassType: "WhenSentToPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfCoreNetworkPolicyDocumentSegmentsPropertyToTerraform(struct?: DataTfCoreNetworkPolicyDocument.SegmentsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowFilter),
    deny_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.denyFilter),
    description: cdktn.stringToTerraform(struct!.description),
    edge_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.edgeLocations),
    isolate_attachments: cdktn.booleanToTerraform(struct!.isolateAttachments),
    name: cdktn.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktn.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataTfCoreNetworkPolicyDocumentSegmentsPropertyToHclTerraform(struct?: DataTfCoreNetworkPolicyDocument.SegmentsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deny_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.denyFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.edgeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    isolate_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.isolateAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_attachment_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace DataTfCoreNetworkPolicyDocument {
export interface AttachmentPoliciesActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataTfCoreNetworkPolicyDocument#add_to_network_function_group}
  */
  readonly addToNetworkFunctionGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#association_method DataTfCoreNetworkPolicyDocument#association_method}
  */
  readonly associationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataTfCoreNetworkPolicyDocument#require_acceptance}
  */
  readonly requireAcceptance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataTfCoreNetworkPolicyDocument#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataTfCoreNetworkPolicyDocument#tag_value_of_key}
  */
  readonly tagValueOfKey?: string;
}
export class AttachmentPoliciesActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttachmentPoliciesActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToNetworkFunctionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToNetworkFunctionGroup = this._addToNetworkFunctionGroup;
    }
    if (this._associationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationMethod = this._associationMethod;
    }
    if (this._requireAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAcceptance = this._requireAcceptance;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._tagValueOfKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueOfKey = this._tagValueOfKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentPoliciesActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addToNetworkFunctionGroup = undefined;
      this._associationMethod = undefined;
      this._requireAcceptance = undefined;
      this._segment = undefined;
      this._tagValueOfKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addToNetworkFunctionGroup = value.addToNetworkFunctionGroup;
      this._associationMethod = value.associationMethod;
      this._requireAcceptance = value.requireAcceptance;
      this._segment = value.segment;
      this._tagValueOfKey = value.tagValueOfKey;
    }
  }

  // add_to_network_function_group - computed: false, optional: true, required: false
  private _addToNetworkFunctionGroup?: string; 
  public get addToNetworkFunctionGroup() {
    return this.getStringAttribute('add_to_network_function_group');
  }
  public set addToNetworkFunctionGroup(value: string) {
    this._addToNetworkFunctionGroup = value;
  }
  public resetAddToNetworkFunctionGroup() {
    this._addToNetworkFunctionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToNetworkFunctionGroupInput() {
    return this._addToNetworkFunctionGroup;
  }

  // association_method - computed: false, optional: true, required: false
  private _associationMethod?: string; 
  public get associationMethod() {
    return this.getStringAttribute('association_method');
  }
  public set associationMethod(value: string) {
    this._associationMethod = value;
  }
  public resetAssociationMethod() {
    this._associationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationMethodInput() {
    return this._associationMethod;
  }

  // require_acceptance - computed: false, optional: true, required: false
  private _requireAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAcceptance() {
    return this.getBooleanAttribute('require_acceptance');
  }
  public set requireAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAcceptance = value;
  }
  public resetRequireAcceptance() {
    this._requireAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAcceptanceInput() {
    return this._requireAcceptance;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // tag_value_of_key - computed: false, optional: true, required: false
  private _tagValueOfKey?: string; 
  public get tagValueOfKey() {
    return this.getStringAttribute('tag_value_of_key');
  }
  public set tagValueOfKey(value: string) {
    this._tagValueOfKey = value;
  }
  public resetTagValueOfKey() {
    this._tagValueOfKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueOfKeyInput() {
    return this._tagValueOfKey;
  }
}
export interface AttachmentPoliciesConditionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#key DataTfCoreNetworkPolicyDocument#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#operator DataTfCoreNetworkPolicyDocument#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#type DataTfCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#value DataTfCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}
export class AttachmentPoliciesConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AttachmentPoliciesConditionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentPoliciesConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._type = undefined;
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
      this._operator = value.operator;
      this._type = value.type;
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

  // operator - computed: false, optional: true, required: false
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
}

export class AttachmentPoliciesConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : AttachmentPoliciesConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): AttachmentPoliciesConditionsPropertyOutputReference {
    return new AttachmentPoliciesConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttachmentPoliciesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataTfCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#description DataTfCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataTfCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#action DataTfCoreNetworkPolicyDocument#action}
  */
  readonly action: AttachmentPoliciesActionProperty;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataTfCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: AttachmentPoliciesConditionsProperty[] | cdktn.IResolvable;
}
export class AttachmentPoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AttachmentPoliciesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogic = this._conditionLogic;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentPoliciesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionLogic = undefined;
      this._description = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionLogic = value.conditionLogic;
      this._description = value.description;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // condition_logic - computed: false, optional: true, required: false
  private _conditionLogic?: string; 
  public get conditionLogic() {
    return this.getStringAttribute('condition_logic');
  }
  public set conditionLogic(value: string) {
    this._conditionLogic = value;
  }
  public resetConditionLogic() {
    this._conditionLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicInput() {
    return this._conditionLogic;
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

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: false, required: true
  private _action = new AttachmentPoliciesActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AttachmentPoliciesActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AttachmentPoliciesConditionsPropertyList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AttachmentPoliciesConditionsProperty[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AttachmentPoliciesPropertyList extends cdktn.ComplexList {
  public internalValue? : AttachmentPoliciesProperty[] | cdktn.IResolvable

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
  public get(index: number): AttachmentPoliciesPropertyOutputReference {
    return new AttachmentPoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttachmentRoutingPolicyRulesActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#associate_routing_policies DataTfCoreNetworkPolicyDocument#associate_routing_policies}
  */
  readonly associateRoutingPolicies: string[];
}
export class AttachmentRoutingPolicyRulesActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttachmentRoutingPolicyRulesActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateRoutingPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateRoutingPolicies = this._associateRoutingPolicies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentRoutingPolicyRulesActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associateRoutingPolicies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associateRoutingPolicies = value.associateRoutingPolicies;
    }
  }

  // associate_routing_policies - computed: false, optional: false, required: true
  private _associateRoutingPolicies?: string[]; 
  public get associateRoutingPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('associate_routing_policies'));
  }
  public set associateRoutingPolicies(value: string[]) {
    this._associateRoutingPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associateRoutingPoliciesInput() {
    return this._associateRoutingPolicies;
  }
}
export interface AttachmentRoutingPolicyRulesConditionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#type DataTfCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#value DataTfCoreNetworkPolicyDocument#value}
  */
  readonly value: string;
}
export class AttachmentRoutingPolicyRulesConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AttachmentRoutingPolicyRulesConditionsProperty | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentRoutingPolicyRulesConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
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

export class AttachmentRoutingPolicyRulesConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : AttachmentRoutingPolicyRulesConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): AttachmentRoutingPolicyRulesConditionsPropertyOutputReference {
    return new AttachmentRoutingPolicyRulesConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttachmentRoutingPolicyRulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#description DataTfCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataTfCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataTfCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#action DataTfCoreNetworkPolicyDocument#action}
  */
  readonly action: AttachmentRoutingPolicyRulesActionProperty;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataTfCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: AttachmentRoutingPolicyRulesConditionsProperty[] | cdktn.IResolvable;
}
export class AttachmentRoutingPolicyRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AttachmentRoutingPolicyRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._edgeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentRoutingPolicyRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._edgeLocations = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._edgeLocations = value.edgeLocations;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
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

  // edge_locations - computed: false, optional: true, required: false
  private _edgeLocations?: string[]; 
  public get edgeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('edge_locations'));
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  public resetEdgeLocations() {
    this._edgeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: false, required: true
  private _action = new AttachmentRoutingPolicyRulesActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AttachmentRoutingPolicyRulesActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AttachmentRoutingPolicyRulesConditionsPropertyList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AttachmentRoutingPolicyRulesConditionsProperty[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AttachmentRoutingPolicyRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : AttachmentRoutingPolicyRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): AttachmentRoutingPolicyRulesPropertyOutputReference {
    return new AttachmentRoutingPolicyRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeLocationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#asn DataTfCoreNetworkPolicyDocument#asn}
  */
  readonly asn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataTfCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#location DataTfCoreNetworkPolicyDocument#location}
  */
  readonly location: string;
}
export class EdgeLocationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EdgeLocationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._insideCidrBlocks = undefined;
      this._location = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._location = value.location;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class EdgeLocationsPropertyList extends cdktn.ComplexList {
  public internalValue? : EdgeLocationsProperty[] | cdktn.IResolvable

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
  public get(index: number): EdgeLocationsPropertyOutputReference {
    return new EdgeLocationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreNetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataTfCoreNetworkPolicyDocument#asn_ranges}
  */
  readonly asnRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#dns_support DataTfCoreNetworkPolicyDocument#dns_support}
  */
  readonly dnsSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataTfCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#security_group_referencing_support DataTfCoreNetworkPolicyDocument#security_group_referencing_support}
  */
  readonly securityGroupReferencingSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataTfCoreNetworkPolicyDocument#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: boolean | cdktn.IResolvable;
  /**
  * edge_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataTfCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations: EdgeLocationsProperty[] | cdktn.IResolvable;
}
export class CoreNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreNetworkConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnRanges = this._asnRanges;
    }
    if (this._dnsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSupport = this._dnsSupport;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._securityGroupReferencingSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupReferencingSupport = this._securityGroupReferencingSupport;
    }
    if (this._vpnEcmpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnEcmpSupport = this._vpnEcmpSupport;
    }
    if (this._edgeLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnRanges = undefined;
      this._dnsSupport = undefined;
      this._insideCidrBlocks = undefined;
      this._securityGroupReferencingSupport = undefined;
      this._vpnEcmpSupport = undefined;
      this._edgeLocations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnRanges = value.asnRanges;
      this._dnsSupport = value.dnsSupport;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._securityGroupReferencingSupport = value.securityGroupReferencingSupport;
      this._vpnEcmpSupport = value.vpnEcmpSupport;
      this._edgeLocations.internalValue = value.edgeLocations;
    }
  }

  // asn_ranges - computed: false, optional: false, required: true
  private _asnRanges?: string[]; 
  public get asnRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('asn_ranges'));
  }
  public set asnRanges(value: string[]) {
    this._asnRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnRangesInput() {
    return this._asnRanges;
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: boolean | cdktn.IResolvable; 
  public get dnsSupport() {
    return this.getBooleanAttribute('dns_support');
  }
  public set dnsSupport(value: boolean | cdktn.IResolvable) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('inside_cidr_blocks'));
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // security_group_referencing_support - computed: false, optional: true, required: false
  private _securityGroupReferencingSupport?: boolean | cdktn.IResolvable; 
  public get securityGroupReferencingSupport() {
    return this.getBooleanAttribute('security_group_referencing_support');
  }
  public set securityGroupReferencingSupport(value: boolean | cdktn.IResolvable) {
    this._securityGroupReferencingSupport = value;
  }
  public resetSecurityGroupReferencingSupport() {
    this._securityGroupReferencingSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupReferencingSupportInput() {
    return this._securityGroupReferencingSupport;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: boolean | cdktn.IResolvable; 
  public get vpnEcmpSupport() {
    return this.getBooleanAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: boolean | cdktn.IResolvable) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport;
  }

  // edge_locations - computed: false, optional: false, required: true
  private _edgeLocations = new EdgeLocationsPropertyList(this, "edge_locations", false);
  public get edgeLocations() {
    return this._edgeLocations;
  }
  public putEdgeLocations(value: EdgeLocationsProperty[] | cdktn.IResolvable) {
    this._edgeLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations.internalValue;
  }
}

export class CoreNetworkConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreNetworkConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreNetworkConfigurationPropertyOutputReference {
    return new CoreNetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkFunctionGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#description DataTfCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#name DataTfCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataTfCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance: boolean | cdktn.IResolvable;
}
export class NetworkFunctionGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkFunctionGroupsProperty | cdktn.IResolvable | undefined {
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
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFunctionGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
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
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
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

  // require_attachment_acceptance - computed: false, optional: false, required: true
  private _requireAttachmentAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class NetworkFunctionGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkFunctionGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkFunctionGroupsPropertyOutputReference {
    return new NetworkFunctionGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#type DataTfCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#value DataTfCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}
export class RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
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
}
export interface MatchConditionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#type DataTfCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#value DataTfCoreNetworkPolicyDocument#value}
  */
  readonly value: string;
}
export class MatchConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchConditionsProperty | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
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

export class MatchConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchConditionsPropertyOutputReference {
    return new MatchConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataTfCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#action DataTfCoreNetworkPolicyDocument#action}
  */
  readonly action: RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty;
  /**
  * match_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#match_conditions DataTfCoreNetworkPolicyDocument#match_conditions}
  */
  readonly matchConditions?: MatchConditionsProperty[] | cdktn.IResolvable;
}
export class RuleDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogic = this._conditionLogic;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionLogic = undefined;
      this._action.internalValue = undefined;
      this._matchConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionLogic = value.conditionLogic;
      this._action.internalValue = value.action;
      this._matchConditions.internalValue = value.matchConditions;
    }
  }

  // condition_logic - computed: false, optional: true, required: false
  private _conditionLogic?: string; 
  public get conditionLogic() {
    return this.getStringAttribute('condition_logic');
  }
  public set conditionLogic(value: string) {
    this._conditionLogic = value;
  }
  public resetConditionLogic() {
    this._conditionLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicInput() {
    return this._conditionLogic;
  }

  // action - computed: false, optional: false, required: true
  private _action = new RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: RoutingPoliciesRoutingPolicyRulesRuleDefinitionActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new MatchConditionsPropertyList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: MatchConditionsProperty[] | cdktn.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }
}
export interface RoutingPolicyRulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataTfCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * rule_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#rule_definition DataTfCoreNetworkPolicyDocument#rule_definition}
  */
  readonly ruleDefinition: RuleDefinitionProperty;
}
export class RoutingPolicyRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RoutingPolicyRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingPolicyRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleNumber = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleNumber = value.ruleNumber;
      this._ruleDefinition.internalValue = value.ruleDefinition;
    }
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // rule_definition - computed: false, optional: false, required: true
  private _ruleDefinition = new RuleDefinitionPropertyOutputReference(this, "rule_definition");
  public get ruleDefinition() {
    return this._ruleDefinition;
  }
  public putRuleDefinition(value: RuleDefinitionProperty) {
    this._ruleDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition.internalValue;
  }
}

export class RoutingPolicyRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : RoutingPolicyRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): RoutingPolicyRulesPropertyOutputReference {
    return new RoutingPolicyRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingPoliciesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_description DataTfCoreNetworkPolicyDocument#routing_policy_description}
  */
  readonly routingPolicyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_direction DataTfCoreNetworkPolicyDocument#routing_policy_direction}
  */
  readonly routingPolicyDirection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_name DataTfCoreNetworkPolicyDocument#routing_policy_name}
  */
  readonly routingPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_number DataTfCoreNetworkPolicyDocument#routing_policy_number}
  */
  readonly routingPolicyNumber: number;
  /**
  * routing_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_rules DataTfCoreNetworkPolicyDocument#routing_policy_rules}
  */
  readonly routingPolicyRules: RoutingPolicyRulesProperty[] | cdktn.IResolvable;
}
export class RoutingPoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RoutingPoliciesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyDescription = this._routingPolicyDescription;
    }
    if (this._routingPolicyDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyDirection = this._routingPolicyDirection;
    }
    if (this._routingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyName = this._routingPolicyName;
    }
    if (this._routingPolicyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNumber = this._routingPolicyNumber;
    }
    if (this._routingPolicyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyRules = this._routingPolicyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingPoliciesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyDescription = undefined;
      this._routingPolicyDirection = undefined;
      this._routingPolicyName = undefined;
      this._routingPolicyNumber = undefined;
      this._routingPolicyRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyDescription = value.routingPolicyDescription;
      this._routingPolicyDirection = value.routingPolicyDirection;
      this._routingPolicyName = value.routingPolicyName;
      this._routingPolicyNumber = value.routingPolicyNumber;
      this._routingPolicyRules.internalValue = value.routingPolicyRules;
    }
  }

  // routing_policy_description - computed: false, optional: true, required: false
  private _routingPolicyDescription?: string; 
  public get routingPolicyDescription() {
    return this.getStringAttribute('routing_policy_description');
  }
  public set routingPolicyDescription(value: string) {
    this._routingPolicyDescription = value;
  }
  public resetRoutingPolicyDescription() {
    this._routingPolicyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyDescriptionInput() {
    return this._routingPolicyDescription;
  }

  // routing_policy_direction - computed: false, optional: false, required: true
  private _routingPolicyDirection?: string; 
  public get routingPolicyDirection() {
    return this.getStringAttribute('routing_policy_direction');
  }
  public set routingPolicyDirection(value: string) {
    this._routingPolicyDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyDirectionInput() {
    return this._routingPolicyDirection;
  }

  // routing_policy_name - computed: false, optional: false, required: true
  private _routingPolicyName?: string; 
  public get routingPolicyName() {
    return this.getStringAttribute('routing_policy_name');
  }
  public set routingPolicyName(value: string) {
    this._routingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNameInput() {
    return this._routingPolicyName;
  }

  // routing_policy_number - computed: false, optional: false, required: true
  private _routingPolicyNumber?: number; 
  public get routingPolicyNumber() {
    return this.getNumberAttribute('routing_policy_number');
  }
  public set routingPolicyNumber(value: number) {
    this._routingPolicyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNumberInput() {
    return this._routingPolicyNumber;
  }

  // routing_policy_rules - computed: false, optional: false, required: true
  private _routingPolicyRules = new RoutingPolicyRulesPropertyList(this, "routing_policy_rules", false);
  public get routingPolicyRules() {
    return this._routingPolicyRules;
  }
  public putRoutingPolicyRules(value: RoutingPolicyRulesProperty[] | cdktn.IResolvable) {
    this._routingPolicyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyRulesInput() {
    return this._routingPolicyRules.internalValue;
  }
}

export class RoutingPoliciesPropertyList extends cdktn.ComplexList {
  public internalValue? : RoutingPoliciesProperty[] | cdktn.IResolvable

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
  public get(index: number): RoutingPoliciesPropertyOutputReference {
    return new RoutingPoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeLocationAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_location DataTfCoreNetworkPolicyDocument#edge_location}
  */
  readonly edgeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#peer_edge_location DataTfCoreNetworkPolicyDocument#peer_edge_location}
  */
  readonly peerEdgeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_names DataTfCoreNetworkPolicyDocument#routing_policy_names}
  */
  readonly routingPolicyNames: string[];
}
export class EdgeLocationAssociationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeLocationAssociationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocation = this._edgeLocation;
    }
    if (this._peerEdgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerEdgeLocation = this._peerEdgeLocation;
    }
    if (this._routingPolicyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNames = this._routingPolicyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationAssociationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeLocation = undefined;
      this._peerEdgeLocation = undefined;
      this._routingPolicyNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeLocation = value.edgeLocation;
      this._peerEdgeLocation = value.peerEdgeLocation;
      this._routingPolicyNames = value.routingPolicyNames;
    }
  }

  // edge_location - computed: false, optional: false, required: true
  private _edgeLocation?: string; 
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
  }
  public set edgeLocation(value: string) {
    this._edgeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationInput() {
    return this._edgeLocation;
  }

  // peer_edge_location - computed: false, optional: false, required: true
  private _peerEdgeLocation?: string; 
  public get peerEdgeLocation() {
    return this.getStringAttribute('peer_edge_location');
  }
  public set peerEdgeLocation(value: string) {
    this._peerEdgeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerEdgeLocationInput() {
    return this._peerEdgeLocation;
  }

  // routing_policy_names - computed: false, optional: false, required: true
  private _routingPolicyNames?: string[]; 
  public get routingPolicyNames() {
    return cdktn.Fn.tolist(this.getListAttribute('routing_policy_names'));
  }
  public set routingPolicyNames(value: string[]) {
    this._routingPolicyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNamesInput() {
    return this._routingPolicyNames;
  }
}
export interface WithEdgeOverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataTfCoreNetworkPolicyDocument#edge_sets}
  */
  readonly edgeSets?: string[][] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataTfCoreNetworkPolicyDocument#use_edge}
  */
  readonly useEdge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataTfCoreNetworkPolicyDocument#use_edge_location}
  */
  readonly useEdgeLocation?: string;
}
export class WithEdgeOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WithEdgeOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeSets = this._edgeSets;
    }
    if (this._useEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdge = this._useEdge;
    }
    if (this._useEdgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdgeLocation = this._useEdgeLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WithEdgeOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeSets = undefined;
      this._useEdge = undefined;
      this._useEdgeLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeSets = value.edgeSets;
      this._useEdge = value.useEdge;
      this._useEdgeLocation = value.useEdgeLocation;
    }
  }

  // edge_sets - computed: false, optional: true, required: false
  private _edgeSets?: string[][] | cdktn.IResolvable; 
  public get edgeSets() {
    return cdktn.Token.asAny(cdktn.Fn.tolist(this.interpolationForAttribute('edge_sets')));
  }
  public set edgeSets(value: string[][] | cdktn.IResolvable) {
    this._edgeSets = value;
  }
  public resetEdgeSets() {
    this._edgeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSetsInput() {
    return this._edgeSets;
  }

  // use_edge - computed: false, optional: true, required: false
  private _useEdge?: string; 
  public get useEdge() {
    return this.getStringAttribute('use_edge');
  }
  public set useEdge(value: string) {
    this._useEdge = value;
  }
  public resetUseEdge() {
    this._useEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeInput() {
    return this._useEdge;
  }

  // use_edge_location - computed: false, optional: true, required: false
  private _useEdgeLocation?: string; 
  public get useEdgeLocation() {
    return this.getStringAttribute('use_edge_location');
  }
  public set useEdgeLocation(value: string) {
    this._useEdgeLocation = value;
  }
  public resetUseEdgeLocation() {
    this._useEdgeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeLocationInput() {
    return this._useEdgeLocation;
  }
}

export class WithEdgeOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : WithEdgeOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): WithEdgeOverridePropertyOutputReference {
    return new WithEdgeOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataTfCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: string[];
  /**
  * with_edge_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#with_edge_override DataTfCoreNetworkPolicyDocument#with_edge_override}
  */
  readonly withEdgeOverride?: WithEdgeOverrideProperty[] | cdktn.IResolvable;
}
export class ViaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionGroups = this._networkFunctionGroups;
    }
    if (this._withEdgeOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEdgeOverride = this._withEdgeOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFunctionGroups = undefined;
      this._withEdgeOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFunctionGroups = value.networkFunctionGroups;
      this._withEdgeOverride.internalValue = value.withEdgeOverride;
    }
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups?: string[]; 
  public get networkFunctionGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('network_function_groups'));
  }
  public set networkFunctionGroups(value: string[]) {
    this._networkFunctionGroups = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups;
  }

  // with_edge_override - computed: false, optional: true, required: false
  private _withEdgeOverride = new WithEdgeOverridePropertyList(this, "with_edge_override", false);
  public get withEdgeOverride() {
    return this._withEdgeOverride;
  }
  public putWithEdgeOverride(value: WithEdgeOverrideProperty[] | cdktn.IResolvable) {
    this._withEdgeOverride.internalValue = value;
  }
  public resetWithEdgeOverride() {
    this._withEdgeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEdgeOverrideInput() {
    return this._withEdgeOverride.internalValue;
  }
}
export interface WhenSentToProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataTfCoreNetworkPolicyDocument#segments}
  */
  readonly segments?: string[];
}
export class WhenSentToPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WhenSentToProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WhenSentToProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments = value.segments;
    }
  }

  // segments - computed: false, optional: true, required: false
  private _segments?: string[]; 
  public get segments() {
    return cdktn.Fn.tolist(this.getListAttribute('segments'));
  }
  public set segments(value: string[]) {
    this._segments = value;
  }
  public resetSegments() {
    this._segments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments;
  }
}
export interface SegmentActionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#action DataTfCoreNetworkPolicyDocument#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#description DataTfCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataTfCoreNetworkPolicyDocument#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#destinations DataTfCoreNetworkPolicyDocument#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#mode DataTfCoreNetworkPolicyDocument#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_names DataTfCoreNetworkPolicyDocument#routing_policy_names}
  */
  readonly routingPolicyNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataTfCoreNetworkPolicyDocument#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#share_with DataTfCoreNetworkPolicyDocument#share_with}
  */
  readonly shareWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataTfCoreNetworkPolicyDocument#share_with_except}
  */
  readonly shareWithExcept?: string[];
  /**
  * edge_location_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_location_association DataTfCoreNetworkPolicyDocument#edge_location_association}
  */
  readonly edgeLocationAssociation?: EdgeLocationAssociationProperty;
  /**
  * via block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#via DataTfCoreNetworkPolicyDocument#via}
  */
  readonly via?: ViaProperty;
  /**
  * when_sent_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#when_sent_to DataTfCoreNetworkPolicyDocument#when_sent_to}
  */
  readonly whenSentTo?: WhenSentToProperty;
}
export class SegmentActionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SegmentActionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlocks = this._destinationCidrBlocks;
    }
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._routingPolicyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNames = this._routingPolicyNames;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._shareWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWith = this._shareWith;
    }
    if (this._shareWithExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWithExcept = this._shareWithExcept;
    }
    if (this._edgeLocationAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocationAssociation = this._edgeLocationAssociation?.internalValue;
    }
    if (this._via?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via?.internalValue;
    }
    if (this._whenSentTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenSentTo = this._whenSentTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentActionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationCidrBlocks = undefined;
      this._destinations = undefined;
      this._mode = undefined;
      this._routingPolicyNames = undefined;
      this._segment = undefined;
      this._shareWith = undefined;
      this._shareWithExcept = undefined;
      this._edgeLocationAssociation.internalValue = undefined;
      this._via.internalValue = undefined;
      this._whenSentTo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._destinationCidrBlocks = value.destinationCidrBlocks;
      this._destinations = value.destinations;
      this._mode = value.mode;
      this._routingPolicyNames = value.routingPolicyNames;
      this._segment = value.segment;
      this._shareWith = value.shareWith;
      this._shareWithExcept = value.shareWithExcept;
      this._edgeLocationAssociation.internalValue = value.edgeLocationAssociation;
      this._via.internalValue = value.via;
      this._whenSentTo.internalValue = value.whenSentTo;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_cidr_blocks - computed: false, optional: true, required: false
  private _destinationCidrBlocks?: string[]; 
  public get destinationCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_cidr_blocks'));
  }
  public set destinationCidrBlocks(value: string[]) {
    this._destinationCidrBlocks = value;
  }
  public resetDestinationCidrBlocks() {
    this._destinationCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlocksInput() {
    return this._destinationCidrBlocks;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return cdktn.Fn.tolist(this.getListAttribute('destinations'));
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // routing_policy_names - computed: false, optional: true, required: false
  private _routingPolicyNames?: string[]; 
  public get routingPolicyNames() {
    return cdktn.Fn.tolist(this.getListAttribute('routing_policy_names'));
  }
  public set routingPolicyNames(value: string[]) {
    this._routingPolicyNames = value;
  }
  public resetRoutingPolicyNames() {
    this._routingPolicyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNamesInput() {
    return this._routingPolicyNames;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // share_with - computed: false, optional: true, required: false
  private _shareWith?: string[]; 
  public get shareWith() {
    return cdktn.Fn.tolist(this.getListAttribute('share_with'));
  }
  public set shareWith(value: string[]) {
    this._shareWith = value;
  }
  public resetShareWith() {
    this._shareWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithInput() {
    return this._shareWith;
  }

  // share_with_except - computed: false, optional: true, required: false
  private _shareWithExcept?: string[]; 
  public get shareWithExcept() {
    return cdktn.Fn.tolist(this.getListAttribute('share_with_except'));
  }
  public set shareWithExcept(value: string[]) {
    this._shareWithExcept = value;
  }
  public resetShareWithExcept() {
    this._shareWithExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithExceptInput() {
    return this._shareWithExcept;
  }

  // edge_location_association - computed: false, optional: true, required: false
  private _edgeLocationAssociation = new EdgeLocationAssociationPropertyOutputReference(this, "edge_location_association");
  public get edgeLocationAssociation() {
    return this._edgeLocationAssociation;
  }
  public putEdgeLocationAssociation(value: EdgeLocationAssociationProperty) {
    this._edgeLocationAssociation.internalValue = value;
  }
  public resetEdgeLocationAssociation() {
    this._edgeLocationAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationAssociationInput() {
    return this._edgeLocationAssociation.internalValue;
  }

  // via - computed: false, optional: true, required: false
  private _via = new ViaPropertyOutputReference(this, "via");
  public get via() {
    return this._via;
  }
  public putVia(value: ViaProperty) {
    this._via.internalValue = value;
  }
  public resetVia() {
    this._via.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via.internalValue;
  }

  // when_sent_to - computed: false, optional: true, required: false
  private _whenSentTo = new WhenSentToPropertyOutputReference(this, "when_sent_to");
  public get whenSentTo() {
    return this._whenSentTo;
  }
  public putWhenSentTo(value: WhenSentToProperty) {
    this._whenSentTo.internalValue = value;
  }
  public resetWhenSentTo() {
    this._whenSentTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenSentToInput() {
    return this._whenSentTo.internalValue;
  }
}

export class SegmentActionsPropertyList extends cdktn.ComplexList {
  public internalValue? : SegmentActionsProperty[] | cdktn.IResolvable

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
  public get(index: number): SegmentActionsPropertyOutputReference {
    return new SegmentActionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataTfCoreNetworkPolicyDocument#allow_filter}
  */
  readonly allowFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataTfCoreNetworkPolicyDocument#deny_filter}
  */
  readonly denyFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#description DataTfCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataTfCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataTfCoreNetworkPolicyDocument#isolate_attachments}
  */
  readonly isolateAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#name DataTfCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataTfCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance?: boolean | cdktn.IResolvable;
}
export class SegmentsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SegmentsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFilter = this._allowFilter;
    }
    if (this._denyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFilter = this._denyFilter;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._edgeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations;
    }
    if (this._isolateAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolateAttachments = this._isolateAttachments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFilter = undefined;
      this._denyFilter = undefined;
      this._description = undefined;
      this._edgeLocations = undefined;
      this._isolateAttachments = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFilter = value.allowFilter;
      this._denyFilter = value.denyFilter;
      this._description = value.description;
      this._edgeLocations = value.edgeLocations;
      this._isolateAttachments = value.isolateAttachments;
      this._name = value.name;
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
    }
  }

  // allow_filter - computed: false, optional: true, required: false
  private _allowFilter?: string[]; 
  public get allowFilter() {
    return cdktn.Fn.tolist(this.getListAttribute('allow_filter'));
  }
  public set allowFilter(value: string[]) {
    this._allowFilter = value;
  }
  public resetAllowFilter() {
    this._allowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFilterInput() {
    return this._allowFilter;
  }

  // deny_filter - computed: false, optional: true, required: false
  private _denyFilter?: string[]; 
  public get denyFilter() {
    return cdktn.Fn.tolist(this.getListAttribute('deny_filter'));
  }
  public set denyFilter(value: string[]) {
    this._denyFilter = value;
  }
  public resetDenyFilter() {
    this._denyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFilterInput() {
    return this._denyFilter;
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

  // edge_locations - computed: false, optional: true, required: false
  private _edgeLocations?: string[]; 
  public get edgeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('edge_locations'));
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  public resetEdgeLocations() {
    this._edgeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // isolate_attachments - computed: false, optional: true, required: false
  private _isolateAttachments?: boolean | cdktn.IResolvable; 
  public get isolateAttachments() {
    return this.getBooleanAttribute('isolate_attachments');
  }
  public set isolateAttachments(value: boolean | cdktn.IResolvable) {
    this._isolateAttachments = value;
  }
  public resetIsolateAttachments() {
    this._isolateAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateAttachmentsInput() {
    return this._isolateAttachments;
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

  // require_attachment_acceptance - computed: false, optional: true, required: false
  private _requireAttachmentAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  public resetRequireAttachmentAcceptance() {
    this._requireAttachmentAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class SegmentsPropertyList extends cdktn.ComplexList {
  public internalValue? : SegmentsProperty[] | cdktn.IResolvable

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
  public get(index: number): SegmentsPropertyOutputReference {
    return new SegmentsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
