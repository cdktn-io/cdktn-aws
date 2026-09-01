// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMailmanagerTrafficPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#default_action AwsMailmanagerTrafficPolicy#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes AwsMailmanagerTrafficPolicy#max_message_size_bytes}
  */
  readonly maxMessageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#name AwsMailmanagerTrafficPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#region AwsMailmanagerTrafficPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tags AwsMailmanagerTrafficPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * policy_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#policy_statement AwsMailmanagerTrafficPolicy#policy_statement}
  */
  readonly policyStatement?: AwsMailmanagerTrafficPolicy.PolicyStatementProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy}
*/
export class AwsMailmanagerTrafficPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_traffic_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMailmanagerTrafficPolicy to import
  * @param importFromId The id of the existing AwsMailmanagerTrafficPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMailmanagerTrafficPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_traffic_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMailmanagerTrafficPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMailmanagerTrafficPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_traffic_policy',
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
    this._defaultAction = config.defaultAction;
    this._maxMessageSizeBytes = config.maxMessageSizeBytes;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._policyStatement.internalValue = config.policyStatement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // max_message_size_bytes - computed: false, optional: true, required: false
  private _maxMessageSizeBytes?: number; 
  public get maxMessageSizeBytes() {
    return this.getNumberAttribute('max_message_size_bytes');
  }
  public set maxMessageSizeBytes(value: number) {
    this._maxMessageSizeBytes = value;
  }
  public resetMaxMessageSizeBytes() {
    this._maxMessageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeBytesInput() {
    return this._maxMessageSizeBytes;
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

  // policy_statement - computed: false, optional: true, required: false
  private _policyStatement = new AwsMailmanagerTrafficPolicy.PolicyStatementPropertyList(this, "policy_statement", false);
  public get policyStatement() {
    return this._policyStatement;
  }
  public putPolicyStatement(value: AwsMailmanagerTrafficPolicy.PolicyStatementProperty[] | cdktn.IResolvable) {
    this._policyStatement.internalValue = value;
  }
  public resetPolicyStatement() {
    this._policyStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatementInput() {
    return this._policyStatement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktn.stringToTerraform(this._defaultAction),
      max_message_size_bytes: cdktn.numberToTerraform(this._maxMessageSizeBytes),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      policy_statement: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementPropertyToTerraform, true)(this._policyStatement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktn.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_size_bytes: {
        value: cdktn.numberToHclTerraform(this._maxMessageSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      policy_statement: {
        value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementPropertyToHclTerraform, true)(this._policyStatement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMailmanagerTrafficPolicy.PolicyStatementPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyIsInAddressListPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.IsInAddressListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function awsMailmanagerTrafficPolicyIsInAddressListPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.IsInAddressListProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluatePropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(awsMailmanagerTrafficPolicyIsInAddressListPropertyToTerraform, true)(struct!.isInAddressList),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluatePropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyIsInAddressListPropertyToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "IsInAddressListPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyBooleanExpressionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.BooleanExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function awsMailmanagerTrafficPolicyBooleanExpressionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.BooleanExpressionProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionBooleanExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluatePropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionIpExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluatePropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionIpExpressionEvaluateProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyIpExpressionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.IpExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function awsMailmanagerTrafficPolicyIpExpressionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.IpExpressionProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionIpExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluatePropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionIpv6ExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluatePropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionIpv6ExpressionEvaluateProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyIpv6ExpressionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.Ipv6ExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function awsMailmanagerTrafficPolicyIpv6ExpressionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.Ipv6ExpressionProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionIpv6ExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluatePropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionStringExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluatePropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionStringExpressionEvaluateProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyStringExpressionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.StringExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function awsMailmanagerTrafficPolicyStringExpressionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.StringExpressionProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionStringExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluatePropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionTlsExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluatePropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementConditionTlsExpressionEvaluateProperty | cdktn.IResolvable): any {
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


export function awsMailmanagerTrafficPolicyTlsExpressionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.TlsExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
    evaluate: cdktn.listMapper(awsMailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function awsMailmanagerTrafficPolicyTlsExpressionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.TlsExpressionProperty | cdktn.IResolvable): any {
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
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyStatementConditionTlsExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyConditionPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(awsMailmanagerTrafficPolicyBooleanExpressionPropertyToTerraform, true)(struct!.booleanExpression),
    ip_expression: cdktn.listMapper(awsMailmanagerTrafficPolicyIpExpressionPropertyToTerraform, true)(struct!.ipExpression),
    ipv6_expression: cdktn.listMapper(awsMailmanagerTrafficPolicyIpv6ExpressionPropertyToTerraform, true)(struct!.ipv6Expression),
    string_expression: cdktn.listMapper(awsMailmanagerTrafficPolicyStringExpressionPropertyToTerraform, true)(struct!.stringExpression),
    tls_expression: cdktn.listMapper(awsMailmanagerTrafficPolicyTlsExpressionPropertyToTerraform, true)(struct!.tlsExpression),
  }
}


export function awsMailmanagerTrafficPolicyConditionPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyBooleanExpressionPropertyToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "BooleanExpressionPropertyList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyIpExpressionPropertyToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "IpExpressionPropertyList",
    },
    ipv6_expression: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyIpv6ExpressionPropertyToHclTerraform, true)(struct!.ipv6Expression),
      isBlock: true,
      type: "list",
      storageClassType: "Ipv6ExpressionPropertyList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyStringExpressionPropertyToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "StringExpressionPropertyList",
    },
    tls_expression: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyTlsExpressionPropertyToHclTerraform, true)(struct!.tlsExpression),
      isBlock: true,
      type: "list",
      storageClassType: "TlsExpressionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMailmanagerTrafficPolicyPolicyStatementPropertyToTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    condition: cdktn.listMapper(awsMailmanagerTrafficPolicyConditionPropertyToTerraform, true)(struct!.condition),
  }
}


export function awsMailmanagerTrafficPolicyPolicyStatementPropertyToHclTerraform(struct?: AwsMailmanagerTrafficPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
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
    condition: {
      value: cdktn.listMapperHcl(awsMailmanagerTrafficPolicyConditionPropertyToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsMailmanagerTrafficPolicy {
export interface PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer AwsMailmanagerTrafficPolicy#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field AwsMailmanagerTrafficPolicy#result_field}
  */
  readonly resultField: string;
}
export class PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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

export class PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference {
    return new PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IsInAddressListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#address_lists AwsMailmanagerTrafficPolicy#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute AwsMailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}
export class IsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IsInAddressListProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IsInAddressListProperty | cdktn.IResolvable | undefined) {
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

export class IsInAddressListPropertyList extends cdktn.ComplexList {
  public internalValue? : IsInAddressListProperty[] | cdktn.IResolvable

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
  public get(index: number): IsInAddressListPropertyOutputReference {
    return new IsInAddressListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionBooleanExpressionEvaluateProperty {
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analysis AwsMailmanagerTrafficPolicy#analysis}
  */
  readonly analysis?: PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#is_in_address_list AwsMailmanagerTrafficPolicy#is_in_address_list}
  */
  readonly isInAddressList?: IsInAddressListProperty[] | cdktn.IResolvable;
}
export class PolicyStatementConditionBooleanExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: PolicyStatementConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new PolicyStatementConditionBooleanExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: PolicyStatementConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
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
  private _isInAddressList = new IsInAddressListPropertyList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: IsInAddressListProperty[] | cdktn.IResolvable) {
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

export class PolicyStatementConditionBooleanExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionBooleanExpressionEvaluatePropertyOutputReference {
    return new PolicyStatementConditionBooleanExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BooleanExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator AwsMailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate AwsMailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: PolicyStatementConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class BooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BooleanExpressionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BooleanExpressionProperty | cdktn.IResolvable | undefined) {
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
  private _evaluate = new PolicyStatementConditionBooleanExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: PolicyStatementConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable) {
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

export class BooleanExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : BooleanExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): BooleanExpressionPropertyOutputReference {
    return new BooleanExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionIpExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute AwsMailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}
export class PolicyStatementConditionIpExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionIpExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionIpExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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

export class PolicyStatementConditionIpExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionIpExpressionEvaluatePropertyOutputReference {
    return new PolicyStatementConditionIpExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator AwsMailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values AwsMailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate AwsMailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: PolicyStatementConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class IpExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IpExpressionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IpExpressionProperty | cdktn.IResolvable | undefined) {
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
  private _evaluate = new PolicyStatementConditionIpExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: PolicyStatementConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable) {
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

export class IpExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : IpExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): IpExpressionPropertyOutputReference {
    return new IpExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionIpv6ExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute AwsMailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}
export class PolicyStatementConditionIpv6ExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionIpv6ExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionIpv6ExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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

export class PolicyStatementConditionIpv6ExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionIpv6ExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionIpv6ExpressionEvaluatePropertyOutputReference {
    return new PolicyStatementConditionIpv6ExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv6ExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator AwsMailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values AwsMailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate AwsMailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: PolicyStatementConditionIpv6ExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class Ipv6ExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ipv6ExpressionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ipv6ExpressionProperty | cdktn.IResolvable | undefined) {
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
  private _evaluate = new PolicyStatementConditionIpv6ExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: PolicyStatementConditionIpv6ExpressionEvaluateProperty[] | cdktn.IResolvable) {
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

export class Ipv6ExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : Ipv6ExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): Ipv6ExpressionPropertyOutputReference {
    return new Ipv6ExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionStringExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer AwsMailmanagerTrafficPolicy#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field AwsMailmanagerTrafficPolicy#result_field}
  */
  readonly resultField: string;
}
export class PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
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

export class PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyOutputReference {
    return new PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionStringExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute AwsMailmanagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analysis AwsMailmanagerTrafficPolicy#analysis}
  */
  readonly analysis?: PolicyStatementConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
}
export class PolicyStatementConditionStringExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionStringExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionStringExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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
  private _analysis = new PolicyStatementConditionStringExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: PolicyStatementConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
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

export class PolicyStatementConditionStringExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionStringExpressionEvaluatePropertyOutputReference {
    return new PolicyStatementConditionStringExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator AwsMailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values AwsMailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate AwsMailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: PolicyStatementConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class StringExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringExpressionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StringExpressionProperty | cdktn.IResolvable | undefined) {
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
  private _evaluate = new PolicyStatementConditionStringExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: PolicyStatementConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable) {
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

export class StringExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : StringExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): StringExpressionPropertyOutputReference {
    return new StringExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyStatementConditionTlsExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute AwsMailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}
export class PolicyStatementConditionTlsExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementConditionTlsExpressionEvaluateProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PolicyStatementConditionTlsExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
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

export class PolicyStatementConditionTlsExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementConditionTlsExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementConditionTlsExpressionEvaluatePropertyOutputReference {
    return new PolicyStatementConditionTlsExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TlsExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator AwsMailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#value AwsMailmanagerTrafficPolicy#value}
  */
  readonly value: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate AwsMailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: PolicyStatementConditionTlsExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class TlsExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TlsExpressionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TlsExpressionProperty | cdktn.IResolvable | undefined) {
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

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new PolicyStatementConditionTlsExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: PolicyStatementConditionTlsExpressionEvaluateProperty[] | cdktn.IResolvable) {
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

export class TlsExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : TlsExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): TlsExpressionPropertyOutputReference {
    return new TlsExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionProperty {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#boolean_expression AwsMailmanagerTrafficPolicy#boolean_expression}
  */
  readonly booleanExpression?: BooleanExpressionProperty[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#ip_expression AwsMailmanagerTrafficPolicy#ip_expression}
  */
  readonly ipExpression?: IpExpressionProperty[] | cdktn.IResolvable;
  /**
  * ipv6_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#ipv6_expression AwsMailmanagerTrafficPolicy#ipv6_expression}
  */
  readonly ipv6Expression?: Ipv6ExpressionProperty[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#string_expression AwsMailmanagerTrafficPolicy#string_expression}
  */
  readonly stringExpression?: StringExpressionProperty[] | cdktn.IResolvable;
  /**
  * tls_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tls_expression AwsMailmanagerTrafficPolicy#tls_expression}
  */
  readonly tlsExpression?: TlsExpressionProperty[] | cdktn.IResolvable;
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
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._ipv6Expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Expression = this._ipv6Expression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._tlsExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsExpression = this._tlsExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._ipv6Expression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._tlsExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._ipv6Expression.internalValue = value.ipv6Expression;
      this._stringExpression.internalValue = value.stringExpression;
      this._tlsExpression.internalValue = value.tlsExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new BooleanExpressionPropertyList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: BooleanExpressionProperty[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new IpExpressionPropertyList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: IpExpressionProperty[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // ipv6_expression - computed: false, optional: true, required: false
  private _ipv6Expression = new Ipv6ExpressionPropertyList(this, "ipv6_expression", false);
  public get ipv6Expression() {
    return this._ipv6Expression;
  }
  public putIpv6Expression(value: Ipv6ExpressionProperty[] | cdktn.IResolvable) {
    this._ipv6Expression.internalValue = value;
  }
  public resetIpv6Expression() {
    this._ipv6Expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExpressionInput() {
    return this._ipv6Expression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new StringExpressionPropertyList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: StringExpressionProperty[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // tls_expression - computed: false, optional: true, required: false
  private _tlsExpression = new TlsExpressionPropertyList(this, "tls_expression", false);
  public get tlsExpression() {
    return this._tlsExpression;
  }
  public putTlsExpression(value: TlsExpressionProperty[] | cdktn.IResolvable) {
    this._tlsExpression.internalValue = value;
  }
  public resetTlsExpression() {
    this._tlsExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsExpressionInput() {
    return this._tlsExpression.internalValue;
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
export interface PolicyStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#action AwsMailmanagerTrafficPolicy#action}
  */
  readonly action: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#condition AwsMailmanagerTrafficPolicy#condition}
  */
  readonly condition?: ConditionProperty[] | cdktn.IResolvable;
}
export class PolicyStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition.internalValue = value.condition;
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
}

export class PolicyStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : PolicyStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): PolicyStatementPropertyOutputReference {
    return new PolicyStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
