// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsNetworkfirewallFirewallPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#description AwsNetworkfirewallFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#id AwsNetworkfirewallFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#name AwsNetworkfirewallFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#region AwsNetworkfirewallFirewallPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#tags AwsNetworkfirewallFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#tags_all AwsNetworkfirewallFirewallPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#encryption_configuration AwsNetworkfirewallFirewallPolicy#encryption_configuration}
  */
  readonly encryptionConfiguration?: AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationProperty;
  /**
  * firewall_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#firewall_policy AwsNetworkfirewallFirewallPolicy#firewall_policy}
  */
  readonly firewallPolicy: AwsNetworkfirewallFirewallPolicy.FirewallPolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}
*/
export class AwsNetworkfirewallFirewallPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsNetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsNetworkfirewallFirewallPolicy to import
  * @param importFromId The id of the existing AwsNetworkfirewallFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsNetworkfirewallFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsNetworkfirewallFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsNetworkfirewallFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_firewall_policy',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._firewallPolicy.internalValue = config.firewallPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy = new AwsNetworkfirewallFirewallPolicy.FirewallPolicyPropertyOutputReference(this, "firewall_policy");
  public get firewallPolicy() {
    return this._firewallPolicy;
  }
  public putFirewallPolicy(value: AwsNetworkfirewallFirewallPolicy.FirewallPolicyProperty) {
    this._firewallPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      encryption_configuration: awsNetworkfirewallFirewallPolicyEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
      firewall_policy: awsNetworkfirewallFirewallPolicyFirewallPolicyPropertyToTerraform(this._firewallPolicy.internalValue),
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
      encryption_configuration: {
        value: awsNetworkfirewallFirewallPolicyEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationPropertyList",
      },
      firewall_policy: {
        value: awsNetworkfirewallFirewallPolicyFirewallPolicyPropertyToHclTerraform(this._firewallPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsNetworkfirewallFirewallPolicy.FirewallPolicyPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsNetworkfirewallFirewallPolicyEncryptionConfigurationPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsNetworkfirewallFirewallPolicyEncryptionConfigurationPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyIpSetPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.IpSetPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.IpSetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
  }
}


export function awsNetworkfirewallFirewallPolicyIpSetPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.IpSetPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.IpSetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.definition),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyRuleVariablesPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.RuleVariablesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    ip_set: awsNetworkfirewallFirewallPolicyIpSetPropertyToTerraform(struct!.ipSet),
  }
}


export function awsNetworkfirewallFirewallPolicyRuleVariablesPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.RuleVariablesProperty | cdktn.IResolvable): any {
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
    ip_set: {
      value: awsNetworkfirewallFirewallPolicyIpSetPropertyToHclTerraform(struct!.ipSet),
      isBlock: true,
      type: "list",
      storageClassType: "IpSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyPolicyVariablesPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.PolicyVariablesPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.PolicyVariablesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_variables: cdktn.listMapper(awsNetworkfirewallFirewallPolicyRuleVariablesPropertyToTerraform, true)(struct!.ruleVariables),
  }
}


export function awsNetworkfirewallFirewallPolicyPolicyVariablesPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.PolicyVariablesPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.PolicyVariablesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_variables: {
      value: cdktn.listMapperHcl(awsNetworkfirewallFirewallPolicyRuleVariablesPropertyToHclTerraform, true)(struct!.ruleVariables),
      isBlock: true,
      type: "set",
      storageClassType: "RuleVariablesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyFlowTimeoutsPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.FlowTimeoutsPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.FlowTimeoutsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tcp_idle_timeout_seconds: cdktn.numberToTerraform(struct!.tcpIdleTimeoutSeconds),
  }
}


export function awsNetworkfirewallFirewallPolicyFlowTimeoutsPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.FlowTimeoutsPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.FlowTimeoutsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tcp_idle_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.tcpIdleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyStatefulEngineOptionsPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatefulEngineOptionsPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.StatefulEngineOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_order: cdktn.stringToTerraform(struct!.ruleOrder),
    stream_exception_policy: cdktn.stringToTerraform(struct!.streamExceptionPolicy),
    flow_timeouts: awsNetworkfirewallFirewallPolicyFlowTimeoutsPropertyToTerraform(struct!.flowTimeouts),
  }
}


export function awsNetworkfirewallFirewallPolicyStatefulEngineOptionsPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatefulEngineOptionsPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.StatefulEngineOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_order: {
      value: cdktn.stringToHclTerraform(struct!.ruleOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_exception_policy: {
      value: cdktn.stringToHclTerraform(struct!.streamExceptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_timeouts: {
      value: awsNetworkfirewallFirewallPolicyFlowTimeoutsPropertyToHclTerraform(struct!.flowTimeouts),
      isBlock: true,
      type: "list",
      storageClassType: "FlowTimeoutsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyOverridePropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.OverridePropertyOutputReference | AwsNetworkfirewallFirewallPolicy.OverrideProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function awsNetworkfirewallFirewallPolicyOverridePropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.OverridePropertyOutputReference | AwsNetworkfirewallFirewallPolicy.OverrideProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyStatefulRuleGroupReferencePropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatefulRuleGroupReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deep_threat_inspection: cdktn.stringToTerraform(struct!.deepThreatInspection),
    priority: cdktn.numberToTerraform(struct!.priority),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    override: awsNetworkfirewallFirewallPolicyOverridePropertyToTerraform(struct!.override),
  }
}


export function awsNetworkfirewallFirewallPolicyStatefulRuleGroupReferencePropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatefulRuleGroupReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deep_threat_inspection: {
      value: cdktn.stringToHclTerraform(struct!.deepThreatInspection),
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
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: awsNetworkfirewallFirewallPolicyOverridePropertyToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "OverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyDimensionPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.DimensionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsNetworkfirewallFirewallPolicyDimensionPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.DimensionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsNetworkfirewallFirewallPolicyPublishMetricActionPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.PublishMetricActionPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.PublishMetricActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension: cdktn.listMapper(awsNetworkfirewallFirewallPolicyDimensionPropertyToTerraform, true)(struct!.dimension),
  }
}


export function awsNetworkfirewallFirewallPolicyPublishMetricActionPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.PublishMetricActionPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.PublishMetricActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension: {
      value: cdktn.listMapperHcl(awsNetworkfirewallFirewallPolicyDimensionPropertyToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "DimensionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyActionDefinitionPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.ActionDefinitionPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.ActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    publish_metric_action: awsNetworkfirewallFirewallPolicyPublishMetricActionPropertyToTerraform(struct!.publishMetricAction),
  }
}


export function awsNetworkfirewallFirewallPolicyActionDefinitionPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.ActionDefinitionPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.ActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    publish_metric_action: {
      value: awsNetworkfirewallFirewallPolicyPublishMetricActionPropertyToHclTerraform(struct!.publishMetricAction),
      isBlock: true,
      type: "list",
      storageClassType: "PublishMetricActionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyStatelessCustomActionPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatelessCustomActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_name: cdktn.stringToTerraform(struct!.actionName),
    action_definition: awsNetworkfirewallFirewallPolicyActionDefinitionPropertyToTerraform(struct!.actionDefinition),
  }
}


export function awsNetworkfirewallFirewallPolicyStatelessCustomActionPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatelessCustomActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_name: {
      value: cdktn.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_definition: {
      value: awsNetworkfirewallFirewallPolicyActionDefinitionPropertyToHclTerraform(struct!.actionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "ActionDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyStatelessRuleGroupReferencePropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatelessRuleGroupReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function awsNetworkfirewallFirewallPolicyStatelessRuleGroupReferencePropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.StatelessRuleGroupReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsNetworkfirewallFirewallPolicyFirewallPolicyPropertyToTerraform(struct?: AwsNetworkfirewallFirewallPolicy.FirewallPolicyPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.FirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_tls_session_holding: cdktn.booleanToTerraform(struct!.enableTlsSessionHolding),
    stateful_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statefulDefaultActions),
    stateless_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statelessFragmentDefaultActions),
    tls_inspection_configuration_arn: cdktn.stringToTerraform(struct!.tlsInspectionConfigurationArn),
    policy_variables: awsNetworkfirewallFirewallPolicyPolicyVariablesPropertyToTerraform(struct!.policyVariables),
    stateful_engine_options: awsNetworkfirewallFirewallPolicyStatefulEngineOptionsPropertyToTerraform(struct!.statefulEngineOptions),
    stateful_rule_group_reference: cdktn.listMapper(awsNetworkfirewallFirewallPolicyStatefulRuleGroupReferencePropertyToTerraform, true)(struct!.statefulRuleGroupReference),
    stateless_custom_action: cdktn.listMapper(awsNetworkfirewallFirewallPolicyStatelessCustomActionPropertyToTerraform, true)(struct!.statelessCustomAction),
    stateless_rule_group_reference: cdktn.listMapper(awsNetworkfirewallFirewallPolicyStatelessRuleGroupReferencePropertyToTerraform, true)(struct!.statelessRuleGroupReference),
  }
}


export function awsNetworkfirewallFirewallPolicyFirewallPolicyPropertyToHclTerraform(struct?: AwsNetworkfirewallFirewallPolicy.FirewallPolicyPropertyOutputReference | AwsNetworkfirewallFirewallPolicy.FirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_tls_session_holding: {
      value: cdktn.booleanToHclTerraform(struct!.enableTlsSessionHolding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stateful_default_actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statefulDefaultActions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stateless_default_actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statelessDefaultActions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stateless_fragment_default_actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statelessFragmentDefaultActions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_inspection_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.tlsInspectionConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_variables: {
      value: awsNetworkfirewallFirewallPolicyPolicyVariablesPropertyToHclTerraform(struct!.policyVariables),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVariablesPropertyList",
    },
    stateful_engine_options: {
      value: awsNetworkfirewallFirewallPolicyStatefulEngineOptionsPropertyToHclTerraform(struct!.statefulEngineOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulEngineOptionsPropertyList",
    },
    stateful_rule_group_reference: {
      value: cdktn.listMapperHcl(awsNetworkfirewallFirewallPolicyStatefulRuleGroupReferencePropertyToHclTerraform, true)(struct!.statefulRuleGroupReference),
      isBlock: true,
      type: "set",
      storageClassType: "StatefulRuleGroupReferencePropertyList",
    },
    stateless_custom_action: {
      value: cdktn.listMapperHcl(awsNetworkfirewallFirewallPolicyStatelessCustomActionPropertyToHclTerraform, true)(struct!.statelessCustomAction),
      isBlock: true,
      type: "set",
      storageClassType: "StatelessCustomActionPropertyList",
    },
    stateless_rule_group_reference: {
      value: cdktn.listMapperHcl(awsNetworkfirewallFirewallPolicyStatelessRuleGroupReferencePropertyToHclTerraform, true)(struct!.statelessRuleGroupReference),
      isBlock: true,
      type: "set",
      storageClassType: "StatelessRuleGroupReferencePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsNetworkfirewallFirewallPolicy {
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#key_id AwsNetworkfirewallFirewallPolicy#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#type AwsNetworkfirewallFirewallPolicy#type}
  */
  readonly type: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._type = value.type;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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
}
export interface IpSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#definition AwsNetworkfirewallFirewallPolicy#definition}
  */
  readonly definition: string[];
}
export class IpSetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpSetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string[]; 
  public get definition() {
    return cdktn.Fn.tolist(this.getListAttribute('definition'));
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface RuleVariablesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#key AwsNetworkfirewallFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * ip_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#ip_set AwsNetworkfirewallFirewallPolicy#ip_set}
  */
  readonly ipSet: IpSetProperty;
}
export class RuleVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleVariablesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ipSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSet = this._ipSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleVariablesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._ipSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._ipSet.internalValue = value.ipSet;
    }
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

  // ip_set - computed: false, optional: false, required: true
  private _ipSet = new IpSetPropertyOutputReference(this, "ip_set");
  public get ipSet() {
    return this._ipSet;
  }
  public putIpSet(value: IpSetProperty) {
    this._ipSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetInput() {
    return this._ipSet.internalValue;
  }
}

export class RuleVariablesPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleVariablesProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleVariablesPropertyOutputReference {
    return new RuleVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVariablesProperty {
  /**
  * rule_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#rule_variables AwsNetworkfirewallFirewallPolicy#rule_variables}
  */
  readonly ruleVariables?: RuleVariablesProperty[] | cdktn.IResolvable;
}
export class PolicyVariablesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVariablesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVariablesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleVariables.internalValue = value.ruleVariables;
    }
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new RuleVariablesPropertyList(this, "rule_variables", true);
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: RuleVariablesProperty[] | cdktn.IResolvable) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }
}
export interface FlowTimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds AwsNetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}
  */
  readonly tcpIdleTimeoutSeconds?: number;
}
export class FlowTimeoutsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlowTimeoutsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpIdleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIdleTimeoutSeconds = this._tcpIdleTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowTimeoutsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpIdleTimeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpIdleTimeoutSeconds = value.tcpIdleTimeoutSeconds;
    }
  }

  // tcp_idle_timeout_seconds - computed: false, optional: true, required: false
  private _tcpIdleTimeoutSeconds?: number; 
  public get tcpIdleTimeoutSeconds() {
    return this.getNumberAttribute('tcp_idle_timeout_seconds');
  }
  public set tcpIdleTimeoutSeconds(value: number) {
    this._tcpIdleTimeoutSeconds = value;
  }
  public resetTcpIdleTimeoutSeconds() {
    this._tcpIdleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutSecondsInput() {
    return this._tcpIdleTimeoutSeconds;
  }
}
export interface StatefulEngineOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#rule_order AwsNetworkfirewallFirewallPolicy#rule_order}
  */
  readonly ruleOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy AwsNetworkfirewallFirewallPolicy#stream_exception_policy}
  */
  readonly streamExceptionPolicy?: string;
  /**
  * flow_timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts AwsNetworkfirewallFirewallPolicy#flow_timeouts}
  */
  readonly flowTimeouts?: FlowTimeoutsProperty;
}
export class StatefulEngineOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulEngineOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    if (this._streamExceptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamExceptionPolicy = this._streamExceptionPolicy;
    }
    if (this._flowTimeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowTimeouts = this._flowTimeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulEngineOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleOrder = undefined;
      this._streamExceptionPolicy = undefined;
      this._flowTimeouts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleOrder = value.ruleOrder;
      this._streamExceptionPolicy = value.streamExceptionPolicy;
      this._flowTimeouts.internalValue = value.flowTimeouts;
    }
  }

  // rule_order - computed: false, optional: true, required: false
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  public resetRuleOrder() {
    this._ruleOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // stream_exception_policy - computed: false, optional: true, required: false
  private _streamExceptionPolicy?: string; 
  public get streamExceptionPolicy() {
    return this.getStringAttribute('stream_exception_policy');
  }
  public set streamExceptionPolicy(value: string) {
    this._streamExceptionPolicy = value;
  }
  public resetStreamExceptionPolicy() {
    this._streamExceptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamExceptionPolicyInput() {
    return this._streamExceptionPolicy;
  }

  // flow_timeouts - computed: false, optional: true, required: false
  private _flowTimeouts = new FlowTimeoutsPropertyOutputReference(this, "flow_timeouts");
  public get flowTimeouts() {
    return this._flowTimeouts;
  }
  public putFlowTimeouts(value: FlowTimeoutsProperty) {
    this._flowTimeouts.internalValue = value;
  }
  public resetFlowTimeouts() {
    this._flowTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTimeoutsInput() {
    return this._flowTimeouts.internalValue;
  }
}
export interface OverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#action AwsNetworkfirewallFirewallPolicy#action}
  */
  readonly action?: string;
}
export class OverridePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverrideProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverrideProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface StatefulRuleGroupReferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection AwsNetworkfirewallFirewallPolicy#deep_threat_inspection}
  */
  readonly deepThreatInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#priority AwsNetworkfirewallFirewallPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#resource_arn AwsNetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#override AwsNetworkfirewallFirewallPolicy#override}
  */
  readonly override?: OverrideProperty;
}
export class StatefulRuleGroupReferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatefulRuleGroupReferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deepThreatInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepThreatInspection = this._deepThreatInspection;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulRuleGroupReferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deepThreatInspection = undefined;
      this._priority = undefined;
      this._resourceArn = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deepThreatInspection = value.deepThreatInspection;
      this._priority = value.priority;
      this._resourceArn = value.resourceArn;
      this._override.internalValue = value.override;
    }
  }

  // deep_threat_inspection - computed: true, optional: true, required: false
  private _deepThreatInspection?: string; 
  public get deepThreatInspection() {
    return this.getStringAttribute('deep_threat_inspection');
  }
  public set deepThreatInspection(value: string) {
    this._deepThreatInspection = value;
  }
  public resetDeepThreatInspection() {
    this._deepThreatInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepThreatInspectionInput() {
    return this._deepThreatInspection;
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // override - computed: false, optional: true, required: false
  private _override = new OverridePropertyOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: OverrideProperty) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class StatefulRuleGroupReferencePropertyList extends cdktn.ComplexList {
  public internalValue? : StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): StatefulRuleGroupReferencePropertyOutputReference {
    return new StatefulRuleGroupReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#value AwsNetworkfirewallFirewallPolicy#value}
  */
  readonly value: string;
}
export class DimensionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DimensionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class DimensionPropertyList extends cdktn.ComplexList {
  public internalValue? : DimensionProperty[] | cdktn.IResolvable

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
  public get(index: number): DimensionPropertyOutputReference {
    return new DimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PublishMetricActionProperty {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#dimension AwsNetworkfirewallFirewallPolicy#dimension}
  */
  readonly dimension: DimensionProperty[] | cdktn.IResolvable;
}
export class PublishMetricActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PublishMetricActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublishMetricActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new DimensionPropertyList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: DimensionProperty[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface ActionDefinitionProperty {
  /**
  * publish_metric_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action AwsNetworkfirewallFirewallPolicy#publish_metric_action}
  */
  readonly publishMetricAction: PublishMetricActionProperty;
}
export class ActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMetricAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishMetricAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: false, optional: false, required: true
  private _publishMetricAction = new PublishMetricActionPropertyOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: PublishMetricActionProperty) {
    this._publishMetricAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
  }
}
export interface StatelessCustomActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#action_name AwsNetworkfirewallFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * action_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#action_definition AwsNetworkfirewallFirewallPolicy#action_definition}
  */
  readonly actionDefinition: ActionDefinitionProperty;
}
export class StatelessCustomActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatelessCustomActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._actionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatelessCustomActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._actionDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._actionDefinition.internalValue = value.actionDefinition;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // action_definition - computed: false, optional: false, required: true
  private _actionDefinition = new ActionDefinitionPropertyOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }
  public putActionDefinition(value: ActionDefinitionProperty) {
    this._actionDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDefinitionInput() {
    return this._actionDefinition.internalValue;
  }
}

export class StatelessCustomActionPropertyList extends cdktn.ComplexList {
  public internalValue? : StatelessCustomActionProperty[] | cdktn.IResolvable

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
  public get(index: number): StatelessCustomActionPropertyOutputReference {
    return new StatelessCustomActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatelessRuleGroupReferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#priority AwsNetworkfirewallFirewallPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#resource_arn AwsNetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}
export class StatelessRuleGroupReferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatelessRuleGroupReferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatelessRuleGroupReferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._resourceArn = value.resourceArn;
    }
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class StatelessRuleGroupReferencePropertyList extends cdktn.ComplexList {
  public internalValue? : StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): StatelessRuleGroupReferencePropertyOutputReference {
    return new StatelessRuleGroupReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding AwsNetworkfirewallFirewallPolicy#enable_tls_session_holding}
  */
  readonly enableTlsSessionHolding?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions AwsNetworkfirewallFirewallPolicy#stateful_default_actions}
  */
  readonly statefulDefaultActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions AwsNetworkfirewallFirewallPolicy#stateless_default_actions}
  */
  readonly statelessDefaultActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions AwsNetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
  */
  readonly statelessFragmentDefaultActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn AwsNetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}
  */
  readonly tlsInspectionConfigurationArn?: string;
  /**
  * policy_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#policy_variables AwsNetworkfirewallFirewallPolicy#policy_variables}
  */
  readonly policyVariables?: PolicyVariablesProperty;
  /**
  * stateful_engine_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options AwsNetworkfirewallFirewallPolicy#stateful_engine_options}
  */
  readonly statefulEngineOptions?: StatefulEngineOptionsProperty;
  /**
  * stateful_rule_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_reference AwsNetworkfirewallFirewallPolicy#stateful_rule_group_reference}
  */
  readonly statefulRuleGroupReference?: StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable;
  /**
  * stateless_custom_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_action AwsNetworkfirewallFirewallPolicy#stateless_custom_action}
  */
  readonly statelessCustomAction?: StatelessCustomActionProperty[] | cdktn.IResolvable;
  /**
  * stateless_rule_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_reference AwsNetworkfirewallFirewallPolicy#stateless_rule_group_reference}
  */
  readonly statelessRuleGroupReference?: StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable;
}
export class FirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTlsSessionHolding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsSessionHolding = this._enableTlsSessionHolding;
    }
    if (this._statefulDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulDefaultActions = this._statefulDefaultActions;
    }
    if (this._statelessDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
    }
    if (this._statelessFragmentDefaultActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
    }
    if (this._tlsInspectionConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInspectionConfigurationArn = this._tlsInspectionConfigurationArn;
    }
    if (this._policyVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyVariables = this._policyVariables?.internalValue;
    }
    if (this._statefulEngineOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulEngineOptions = this._statefulEngineOptions?.internalValue;
    }
    if (this._statefulRuleGroupReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleGroupReference = this._statefulRuleGroupReference?.internalValue;
    }
    if (this._statelessCustomAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessCustomAction = this._statelessCustomAction?.internalValue;
    }
    if (this._statelessRuleGroupReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRuleGroupReference = this._statelessRuleGroupReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTlsSessionHolding = undefined;
      this._statefulDefaultActions = undefined;
      this._statelessDefaultActions = undefined;
      this._statelessFragmentDefaultActions = undefined;
      this._tlsInspectionConfigurationArn = undefined;
      this._policyVariables.internalValue = undefined;
      this._statefulEngineOptions.internalValue = undefined;
      this._statefulRuleGroupReference.internalValue = undefined;
      this._statelessCustomAction.internalValue = undefined;
      this._statelessRuleGroupReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTlsSessionHolding = value.enableTlsSessionHolding;
      this._statefulDefaultActions = value.statefulDefaultActions;
      this._statelessDefaultActions = value.statelessDefaultActions;
      this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
      this._tlsInspectionConfigurationArn = value.tlsInspectionConfigurationArn;
      this._policyVariables.internalValue = value.policyVariables;
      this._statefulEngineOptions.internalValue = value.statefulEngineOptions;
      this._statefulRuleGroupReference.internalValue = value.statefulRuleGroupReference;
      this._statelessCustomAction.internalValue = value.statelessCustomAction;
      this._statelessRuleGroupReference.internalValue = value.statelessRuleGroupReference;
    }
  }

  // enable_tls_session_holding - computed: true, optional: true, required: false
  private _enableTlsSessionHolding?: boolean | cdktn.IResolvable; 
  public get enableTlsSessionHolding() {
    return this.getBooleanAttribute('enable_tls_session_holding');
  }
  public set enableTlsSessionHolding(value: boolean | cdktn.IResolvable) {
    this._enableTlsSessionHolding = value;
  }
  public resetEnableTlsSessionHolding() {
    this._enableTlsSessionHolding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsSessionHoldingInput() {
    return this._enableTlsSessionHolding;
  }

  // stateful_default_actions - computed: false, optional: true, required: false
  private _statefulDefaultActions?: string[]; 
  public get statefulDefaultActions() {
    return cdktn.Fn.tolist(this.getListAttribute('stateful_default_actions'));
  }
  public set statefulDefaultActions(value: string[]) {
    this._statefulDefaultActions = value;
  }
  public resetStatefulDefaultActions() {
    this._statefulDefaultActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDefaultActionsInput() {
    return this._statefulDefaultActions;
  }

  // stateless_default_actions - computed: false, optional: false, required: true
  private _statelessDefaultActions?: string[]; 
  public get statelessDefaultActions() {
    return cdktn.Fn.tolist(this.getListAttribute('stateless_default_actions'));
  }
  public set statelessDefaultActions(value: string[]) {
    this._statelessDefaultActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessDefaultActionsInput() {
    return this._statelessDefaultActions;
  }

  // stateless_fragment_default_actions - computed: false, optional: false, required: true
  private _statelessFragmentDefaultActions?: string[]; 
  public get statelessFragmentDefaultActions() {
    return cdktn.Fn.tolist(this.getListAttribute('stateless_fragment_default_actions'));
  }
  public set statelessFragmentDefaultActions(value: string[]) {
    this._statelessFragmentDefaultActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessFragmentDefaultActionsInput() {
    return this._statelessFragmentDefaultActions;
  }

  // tls_inspection_configuration_arn - computed: false, optional: true, required: false
  private _tlsInspectionConfigurationArn?: string; 
  public get tlsInspectionConfigurationArn() {
    return this.getStringAttribute('tls_inspection_configuration_arn');
  }
  public set tlsInspectionConfigurationArn(value: string) {
    this._tlsInspectionConfigurationArn = value;
  }
  public resetTlsInspectionConfigurationArn() {
    this._tlsInspectionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectionConfigurationArnInput() {
    return this._tlsInspectionConfigurationArn;
  }

  // policy_variables - computed: false, optional: true, required: false
  private _policyVariables = new PolicyVariablesPropertyOutputReference(this, "policy_variables");
  public get policyVariables() {
    return this._policyVariables;
  }
  public putPolicyVariables(value: PolicyVariablesProperty) {
    this._policyVariables.internalValue = value;
  }
  public resetPolicyVariables() {
    this._policyVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVariablesInput() {
    return this._policyVariables.internalValue;
  }

  // stateful_engine_options - computed: false, optional: true, required: false
  private _statefulEngineOptions = new StatefulEngineOptionsPropertyOutputReference(this, "stateful_engine_options");
  public get statefulEngineOptions() {
    return this._statefulEngineOptions;
  }
  public putStatefulEngineOptions(value: StatefulEngineOptionsProperty) {
    this._statefulEngineOptions.internalValue = value;
  }
  public resetStatefulEngineOptions() {
    this._statefulEngineOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulEngineOptionsInput() {
    return this._statefulEngineOptions.internalValue;
  }

  // stateful_rule_group_reference - computed: false, optional: true, required: false
  private _statefulRuleGroupReference = new StatefulRuleGroupReferencePropertyList(this, "stateful_rule_group_reference", true);
  public get statefulRuleGroupReference() {
    return this._statefulRuleGroupReference;
  }
  public putStatefulRuleGroupReference(value: StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable) {
    this._statefulRuleGroupReference.internalValue = value;
  }
  public resetStatefulRuleGroupReference() {
    this._statefulRuleGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleGroupReferenceInput() {
    return this._statefulRuleGroupReference.internalValue;
  }

  // stateless_custom_action - computed: false, optional: true, required: false
  private _statelessCustomAction = new StatelessCustomActionPropertyList(this, "stateless_custom_action", true);
  public get statelessCustomAction() {
    return this._statelessCustomAction;
  }
  public putStatelessCustomAction(value: StatelessCustomActionProperty[] | cdktn.IResolvable) {
    this._statelessCustomAction.internalValue = value;
  }
  public resetStatelessCustomAction() {
    this._statelessCustomAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessCustomActionInput() {
    return this._statelessCustomAction.internalValue;
  }

  // stateless_rule_group_reference - computed: false, optional: true, required: false
  private _statelessRuleGroupReference = new StatelessRuleGroupReferencePropertyList(this, "stateless_rule_group_reference", true);
  public get statelessRuleGroupReference() {
    return this._statelessRuleGroupReference;
  }
  public putStatelessRuleGroupReference(value: StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable) {
    this._statelessRuleGroupReference.internalValue = value;
  }
  public resetStatelessRuleGroupReference() {
    this._statelessRuleGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRuleGroupReferenceInput() {
    return this._statelessRuleGroupReference.internalValue;
  }
}
}
