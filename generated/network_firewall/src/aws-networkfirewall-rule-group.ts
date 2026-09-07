// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRuleGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#capacity AwsRuleGroup#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#description AwsRuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#id AwsRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#name AwsRuleGroup#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#region AwsRuleGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rules AwsRuleGroup#rules}
  */
  readonly rules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#tags AwsRuleGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#tags_all AwsRuleGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#type AwsRuleGroup#type}
  */
  readonly type: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#encryption_configuration AwsRuleGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AwsRuleGroup.EncryptionConfigurationProperty;
  /**
  * rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rule_group AwsRuleGroup#rule_group}
  */
  readonly ruleGroup?: AwsRuleGroup.RuleGroupProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group}
*/
export class AwsRuleGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRuleGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRuleGroup to import
  * @param importFromId The id of the existing AwsRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_rule_group',
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
    this._capacity = config.capacity;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._rules = config.rules;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._ruleGroup.internalValue = config.ruleGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // rules - computed: false, optional: true, required: false
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
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

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AwsRuleGroup.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AwsRuleGroup.EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new AwsRuleGroup.RuleGroupPropertyOutputReference(this, "rule_group");
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: AwsRuleGroup.RuleGroupProperty) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktn.numberToTerraform(this._capacity),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      rules: cdktn.stringToTerraform(this._rules),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      encryption_configuration: awsRuleGroupEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
      rule_group: awsRuleGroupRuleGroupPropertyToTerraform(this._ruleGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktn.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.stringToHclTerraform(this._rules),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_configuration: {
        value: awsRuleGroupEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRuleGroup.EncryptionConfigurationPropertyList",
      },
      rule_group: {
        value: awsRuleGroupRuleGroupPropertyToHclTerraform(this._ruleGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRuleGroup.RuleGroupPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRuleGroupEncryptionConfigurationPropertyToTerraform(struct?: AwsRuleGroup.EncryptionConfigurationPropertyOutputReference | AwsRuleGroup.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsRuleGroupEncryptionConfigurationPropertyToHclTerraform(struct?: AwsRuleGroup.EncryptionConfigurationPropertyOutputReference | AwsRuleGroup.EncryptionConfigurationProperty): any {
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


export function awsRuleGroupIpSetReferencePropertyToTerraform(struct?: AwsRuleGroup.IpSetReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_arn: cdktn.stringToTerraform(struct!.referenceArn),
  }
}


export function awsRuleGroupIpSetReferencePropertyToHclTerraform(struct?: AwsRuleGroup.IpSetReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_arn: {
      value: cdktn.stringToHclTerraform(struct!.referenceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupIpSetReferencesPropertyToTerraform(struct?: AwsRuleGroup.IpSetReferencesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    ip_set_reference: cdktn.listMapper(awsRuleGroupIpSetReferencePropertyToTerraform, true)(struct!.ipSetReference),
  }
}


export function awsRuleGroupIpSetReferencesPropertyToHclTerraform(struct?: AwsRuleGroup.IpSetReferencesProperty | cdktn.IResolvable): any {
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
    ip_set_reference: {
      value: cdktn.listMapperHcl(awsRuleGroupIpSetReferencePropertyToHclTerraform, true)(struct!.ipSetReference),
      isBlock: true,
      type: "list",
      storageClassType: "IpSetReferencePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupReferenceSetsPropertyToTerraform(struct?: AwsRuleGroup.ReferenceSetsPropertyOutputReference | AwsRuleGroup.ReferenceSetsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_set_references: cdktn.listMapper(awsRuleGroupIpSetReferencesPropertyToTerraform, true)(struct!.ipSetReferences),
  }
}


export function awsRuleGroupReferenceSetsPropertyToHclTerraform(struct?: AwsRuleGroup.ReferenceSetsPropertyOutputReference | AwsRuleGroup.ReferenceSetsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_set_references: {
      value: cdktn.listMapperHcl(awsRuleGroupIpSetReferencesPropertyToHclTerraform, true)(struct!.ipSetReferences),
      isBlock: true,
      type: "set",
      storageClassType: "IpSetReferencesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupIpSetPropertyToTerraform(struct?: AwsRuleGroup.IpSetPropertyOutputReference | AwsRuleGroup.IpSetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
  }
}


export function awsRuleGroupIpSetPropertyToHclTerraform(struct?: AwsRuleGroup.IpSetPropertyOutputReference | AwsRuleGroup.IpSetProperty): any {
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


export function awsRuleGroupIpSetsPropertyToTerraform(struct?: AwsRuleGroup.IpSetsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    ip_set: awsRuleGroupIpSetPropertyToTerraform(struct!.ipSet),
  }
}


export function awsRuleGroupIpSetsPropertyToHclTerraform(struct?: AwsRuleGroup.IpSetsProperty | cdktn.IResolvable): any {
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
      value: awsRuleGroupIpSetPropertyToHclTerraform(struct!.ipSet),
      isBlock: true,
      type: "list",
      storageClassType: "IpSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupPortSetPropertyToTerraform(struct?: AwsRuleGroup.PortSetPropertyOutputReference | AwsRuleGroup.PortSetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
  }
}


export function awsRuleGroupPortSetPropertyToHclTerraform(struct?: AwsRuleGroup.PortSetPropertyOutputReference | AwsRuleGroup.PortSetProperty): any {
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


export function awsRuleGroupPortSetsPropertyToTerraform(struct?: AwsRuleGroup.PortSetsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    port_set: awsRuleGroupPortSetPropertyToTerraform(struct!.portSet),
  }
}


export function awsRuleGroupPortSetsPropertyToHclTerraform(struct?: AwsRuleGroup.PortSetsProperty | cdktn.IResolvable): any {
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
    port_set: {
      value: awsRuleGroupPortSetPropertyToHclTerraform(struct!.portSet),
      isBlock: true,
      type: "list",
      storageClassType: "PortSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRuleVariablesPropertyToTerraform(struct?: AwsRuleGroup.RuleVariablesPropertyOutputReference | AwsRuleGroup.RuleVariablesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_sets: cdktn.listMapper(awsRuleGroupIpSetsPropertyToTerraform, true)(struct!.ipSets),
    port_sets: cdktn.listMapper(awsRuleGroupPortSetsPropertyToTerraform, true)(struct!.portSets),
  }
}


export function awsRuleGroupRuleVariablesPropertyToHclTerraform(struct?: AwsRuleGroup.RuleVariablesPropertyOutputReference | AwsRuleGroup.RuleVariablesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_sets: {
      value: cdktn.listMapperHcl(awsRuleGroupIpSetsPropertyToHclTerraform, true)(struct!.ipSets),
      isBlock: true,
      type: "set",
      storageClassType: "IpSetsPropertyList",
    },
    port_sets: {
      value: cdktn.listMapperHcl(awsRuleGroupPortSetsPropertyToHclTerraform, true)(struct!.portSets),
      isBlock: true,
      type: "set",
      storageClassType: "PortSetsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRulesSourceListPropertyToTerraform(struct?: AwsRuleGroup.RulesSourceListPropertyOutputReference | AwsRuleGroup.RulesSourceListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generated_rules_type: cdktn.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetTypes),
    targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
  }
}


export function awsRuleGroupRulesSourceListPropertyToHclTerraform(struct?: AwsRuleGroup.RulesSourceListPropertyOutputReference | AwsRuleGroup.RulesSourceListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generated_rules_type: {
      value: cdktn.stringToHclTerraform(struct!.generatedRulesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    targets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupHeaderPropertyToTerraform(struct?: AwsRuleGroup.HeaderPropertyOutputReference | AwsRuleGroup.HeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    destination_port: cdktn.stringToTerraform(struct!.destinationPort),
    direction: cdktn.stringToTerraform(struct!.direction),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    source: cdktn.stringToTerraform(struct!.source),
    source_port: cdktn.stringToTerraform(struct!.sourcePort),
  }
}


export function awsRuleGroupHeaderPropertyToHclTerraform(struct?: AwsRuleGroup.HeaderPropertyOutputReference | AwsRuleGroup.HeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktn.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktn.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRuleOptionPropertyToTerraform(struct?: AwsRuleGroup.RuleOptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keyword: cdktn.stringToTerraform(struct!.keyword),
    settings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.settings),
  }
}


export function awsRuleGroupRuleOptionPropertyToHclTerraform(struct?: AwsRuleGroup.RuleOptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keyword: {
      value: cdktn.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.settings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupStatefulRulePropertyToTerraform(struct?: AwsRuleGroup.StatefulRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    header: awsRuleGroupHeaderPropertyToTerraform(struct!.header),
    rule_option: cdktn.listMapper(awsRuleGroupRuleOptionPropertyToTerraform, true)(struct!.ruleOption),
  }
}


export function awsRuleGroupStatefulRulePropertyToHclTerraform(struct?: AwsRuleGroup.StatefulRuleProperty | cdktn.IResolvable): any {
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
    header: {
      value: awsRuleGroupHeaderPropertyToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "HeaderPropertyList",
    },
    rule_option: {
      value: cdktn.listMapperHcl(awsRuleGroupRuleOptionPropertyToHclTerraform, true)(struct!.ruleOption),
      isBlock: true,
      type: "set",
      storageClassType: "RuleOptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupDimensionPropertyToTerraform(struct?: AwsRuleGroup.DimensionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsRuleGroupDimensionPropertyToHclTerraform(struct?: AwsRuleGroup.DimensionProperty | cdktn.IResolvable): any {
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


export function awsRuleGroupPublishMetricActionPropertyToTerraform(struct?: AwsRuleGroup.PublishMetricActionPropertyOutputReference | AwsRuleGroup.PublishMetricActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension: cdktn.listMapper(awsRuleGroupDimensionPropertyToTerraform, true)(struct!.dimension),
  }
}


export function awsRuleGroupPublishMetricActionPropertyToHclTerraform(struct?: AwsRuleGroup.PublishMetricActionPropertyOutputReference | AwsRuleGroup.PublishMetricActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension: {
      value: cdktn.listMapperHcl(awsRuleGroupDimensionPropertyToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "DimensionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupActionDefinitionPropertyToTerraform(struct?: AwsRuleGroup.ActionDefinitionPropertyOutputReference | AwsRuleGroup.ActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    publish_metric_action: awsRuleGroupPublishMetricActionPropertyToTerraform(struct!.publishMetricAction),
  }
}


export function awsRuleGroupActionDefinitionPropertyToHclTerraform(struct?: AwsRuleGroup.ActionDefinitionPropertyOutputReference | AwsRuleGroup.ActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    publish_metric_action: {
      value: awsRuleGroupPublishMetricActionPropertyToHclTerraform(struct!.publishMetricAction),
      isBlock: true,
      type: "list",
      storageClassType: "PublishMetricActionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupCustomActionPropertyToTerraform(struct?: AwsRuleGroup.CustomActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_name: cdktn.stringToTerraform(struct!.actionName),
    action_definition: awsRuleGroupActionDefinitionPropertyToTerraform(struct!.actionDefinition),
  }
}


export function awsRuleGroupCustomActionPropertyToHclTerraform(struct?: AwsRuleGroup.CustomActionProperty | cdktn.IResolvable): any {
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
      value: awsRuleGroupActionDefinitionPropertyToHclTerraform(struct!.actionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "ActionDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupDestinationPropertyToTerraform(struct?: AwsRuleGroup.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function awsRuleGroupDestinationPropertyToHclTerraform(struct?: AwsRuleGroup.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupDestinationPortPropertyToTerraform(struct?: AwsRuleGroup.DestinationPortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function awsRuleGroupDestinationPortPropertyToHclTerraform(struct?: AwsRuleGroup.DestinationPortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupSourcePropertyToTerraform(struct?: AwsRuleGroup.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function awsRuleGroupSourcePropertyToHclTerraform(struct?: AwsRuleGroup.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupSourcePortPropertyToTerraform(struct?: AwsRuleGroup.SourcePortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function awsRuleGroupSourcePortPropertyToHclTerraform(struct?: AwsRuleGroup.SourcePortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupTcpFlagPropertyToTerraform(struct?: AwsRuleGroup.TcpFlagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.flags),
    masks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.masks),
  }
}


export function awsRuleGroupTcpFlagPropertyToHclTerraform(struct?: AwsRuleGroup.TcpFlagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    masks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.masks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupMatchAttributesPropertyToTerraform(struct?: AwsRuleGroup.MatchAttributesPropertyOutputReference | AwsRuleGroup.MatchAttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    protocols: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.protocols),
    destination: cdktn.listMapper(awsRuleGroupDestinationPropertyToTerraform, true)(struct!.destination),
    destination_port: cdktn.listMapper(awsRuleGroupDestinationPortPropertyToTerraform, true)(struct!.destinationPort),
    source: cdktn.listMapper(awsRuleGroupSourcePropertyToTerraform, true)(struct!.source),
    source_port: cdktn.listMapper(awsRuleGroupSourcePortPropertyToTerraform, true)(struct!.sourcePort),
    tcp_flag: cdktn.listMapper(awsRuleGroupTcpFlagPropertyToTerraform, true)(struct!.tcpFlag),
  }
}


export function awsRuleGroupMatchAttributesPropertyToHclTerraform(struct?: AwsRuleGroup.MatchAttributesPropertyOutputReference | AwsRuleGroup.MatchAttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    protocols: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    destination: {
      value: cdktn.listMapperHcl(awsRuleGroupDestinationPropertyToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "DestinationPropertyList",
    },
    destination_port: {
      value: cdktn.listMapperHcl(awsRuleGroupDestinationPortPropertyToHclTerraform, true)(struct!.destinationPort),
      isBlock: true,
      type: "set",
      storageClassType: "DestinationPortPropertyList",
    },
    source: {
      value: cdktn.listMapperHcl(awsRuleGroupSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "set",
      storageClassType: "SourcePropertyList",
    },
    source_port: {
      value: cdktn.listMapperHcl(awsRuleGroupSourcePortPropertyToHclTerraform, true)(struct!.sourcePort),
      isBlock: true,
      type: "set",
      storageClassType: "SourcePortPropertyList",
    },
    tcp_flag: {
      value: cdktn.listMapperHcl(awsRuleGroupTcpFlagPropertyToHclTerraform, true)(struct!.tcpFlag),
      isBlock: true,
      type: "set",
      storageClassType: "TcpFlagPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRuleDefinitionPropertyToTerraform(struct?: AwsRuleGroup.RuleDefinitionPropertyOutputReference | AwsRuleGroup.RuleDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    match_attributes: awsRuleGroupMatchAttributesPropertyToTerraform(struct!.matchAttributes),
  }
}


export function awsRuleGroupRuleDefinitionPropertyToHclTerraform(struct?: AwsRuleGroup.RuleDefinitionPropertyOutputReference | AwsRuleGroup.RuleDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_attributes: {
      value: awsRuleGroupMatchAttributesPropertyToHclTerraform(struct!.matchAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "MatchAttributesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupStatelessRulePropertyToTerraform(struct?: AwsRuleGroup.StatelessRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    rule_definition: awsRuleGroupRuleDefinitionPropertyToTerraform(struct!.ruleDefinition),
  }
}


export function awsRuleGroupStatelessRulePropertyToHclTerraform(struct?: AwsRuleGroup.StatelessRuleProperty | cdktn.IResolvable): any {
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
    rule_definition: {
      value: awsRuleGroupRuleDefinitionPropertyToHclTerraform(struct!.ruleDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "RuleDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupStatelessRulesAndCustomActionsPropertyToTerraform(struct?: AwsRuleGroup.StatelessRulesAndCustomActionsPropertyOutputReference | AwsRuleGroup.StatelessRulesAndCustomActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_action: cdktn.listMapper(awsRuleGroupCustomActionPropertyToTerraform, true)(struct!.customAction),
    stateless_rule: cdktn.listMapper(awsRuleGroupStatelessRulePropertyToTerraform, true)(struct!.statelessRule),
  }
}


export function awsRuleGroupStatelessRulesAndCustomActionsPropertyToHclTerraform(struct?: AwsRuleGroup.StatelessRulesAndCustomActionsPropertyOutputReference | AwsRuleGroup.StatelessRulesAndCustomActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_action: {
      value: cdktn.listMapperHcl(awsRuleGroupCustomActionPropertyToHclTerraform, true)(struct!.customAction),
      isBlock: true,
      type: "set",
      storageClassType: "CustomActionPropertyList",
    },
    stateless_rule: {
      value: cdktn.listMapperHcl(awsRuleGroupStatelessRulePropertyToHclTerraform, true)(struct!.statelessRule),
      isBlock: true,
      type: "set",
      storageClassType: "StatelessRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRulesSourcePropertyToTerraform(struct?: AwsRuleGroup.RulesSourcePropertyOutputReference | AwsRuleGroup.RulesSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules_string: cdktn.stringToTerraform(struct!.rulesString),
    rules_source_list: awsRuleGroupRulesSourceListPropertyToTerraform(struct!.rulesSourceList),
    stateful_rule: cdktn.listMapper(awsRuleGroupStatefulRulePropertyToTerraform, true)(struct!.statefulRule),
    stateless_rules_and_custom_actions: awsRuleGroupStatelessRulesAndCustomActionsPropertyToTerraform(struct!.statelessRulesAndCustomActions),
  }
}


export function awsRuleGroupRulesSourcePropertyToHclTerraform(struct?: AwsRuleGroup.RulesSourcePropertyOutputReference | AwsRuleGroup.RulesSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules_string: {
      value: cdktn.stringToHclTerraform(struct!.rulesString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_source_list: {
      value: awsRuleGroupRulesSourceListPropertyToHclTerraform(struct!.rulesSourceList),
      isBlock: true,
      type: "list",
      storageClassType: "RulesSourceListPropertyList",
    },
    stateful_rule: {
      value: cdktn.listMapperHcl(awsRuleGroupStatefulRulePropertyToHclTerraform, true)(struct!.statefulRule),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulRulePropertyList",
    },
    stateless_rules_and_custom_actions: {
      value: awsRuleGroupStatelessRulesAndCustomActionsPropertyToHclTerraform(struct!.statelessRulesAndCustomActions),
      isBlock: true,
      type: "list",
      storageClassType: "StatelessRulesAndCustomActionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupStatefulRuleOptionsPropertyToTerraform(struct?: AwsRuleGroup.StatefulRuleOptionsPropertyOutputReference | AwsRuleGroup.StatefulRuleOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_order: cdktn.stringToTerraform(struct!.ruleOrder),
  }
}


export function awsRuleGroupStatefulRuleOptionsPropertyToHclTerraform(struct?: AwsRuleGroup.StatefulRuleOptionsPropertyOutputReference | AwsRuleGroup.StatefulRuleOptionsProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRuleGroupRuleGroupPropertyToTerraform(struct?: AwsRuleGroup.RuleGroupPropertyOutputReference | AwsRuleGroup.RuleGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_sets: awsRuleGroupReferenceSetsPropertyToTerraform(struct!.referenceSets),
    rule_variables: awsRuleGroupRuleVariablesPropertyToTerraform(struct!.ruleVariables),
    rules_source: awsRuleGroupRulesSourcePropertyToTerraform(struct!.rulesSource),
    stateful_rule_options: awsRuleGroupStatefulRuleOptionsPropertyToTerraform(struct!.statefulRuleOptions),
  }
}


export function awsRuleGroupRuleGroupPropertyToHclTerraform(struct?: AwsRuleGroup.RuleGroupPropertyOutputReference | AwsRuleGroup.RuleGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_sets: {
      value: awsRuleGroupReferenceSetsPropertyToHclTerraform(struct!.referenceSets),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceSetsPropertyList",
    },
    rule_variables: {
      value: awsRuleGroupRuleVariablesPropertyToHclTerraform(struct!.ruleVariables),
      isBlock: true,
      type: "list",
      storageClassType: "RuleVariablesPropertyList",
    },
    rules_source: {
      value: awsRuleGroupRulesSourcePropertyToHclTerraform(struct!.rulesSource),
      isBlock: true,
      type: "list",
      storageClassType: "RulesSourcePropertyList",
    },
    stateful_rule_options: {
      value: awsRuleGroupStatefulRuleOptionsPropertyToHclTerraform(struct!.statefulRuleOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulRuleOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRuleGroup {
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#key_id AwsRuleGroup#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#type AwsRuleGroup#type}
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
export interface IpSetReferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#reference_arn AwsRuleGroup#reference_arn}
  */
  readonly referenceArn: string;
}
export class IpSetReferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IpSetReferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceArn = this._referenceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSetReferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceArn = value.referenceArn;
    }
  }

  // reference_arn - computed: false, optional: false, required: true
  private _referenceArn?: string; 
  public get referenceArn() {
    return this.getStringAttribute('reference_arn');
  }
  public set referenceArn(value: string) {
    this._referenceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceArnInput() {
    return this._referenceArn;
  }
}

export class IpSetReferencePropertyList extends cdktn.ComplexList {
  public internalValue? : IpSetReferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): IpSetReferencePropertyOutputReference {
    return new IpSetReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpSetReferencesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#key AwsRuleGroup#key}
  */
  readonly key: string;
  /**
  * ip_set_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#ip_set_reference AwsRuleGroup#ip_set_reference}
  */
  readonly ipSetReference: IpSetReferenceProperty[] | cdktn.IResolvable;
}
export class IpSetReferencesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IpSetReferencesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ipSetReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReference = this._ipSetReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSetReferencesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._ipSetReference.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._ipSetReference.internalValue = value.ipSetReference;
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

  // ip_set_reference - computed: false, optional: false, required: true
  private _ipSetReference = new IpSetReferencePropertyList(this, "ip_set_reference", false);
  public get ipSetReference() {
    return this._ipSetReference;
  }
  public putIpSetReference(value: IpSetReferenceProperty[] | cdktn.IResolvable) {
    this._ipSetReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceInput() {
    return this._ipSetReference.internalValue;
  }
}

export class IpSetReferencesPropertyList extends cdktn.ComplexList {
  public internalValue? : IpSetReferencesProperty[] | cdktn.IResolvable

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
  public get(index: number): IpSetReferencesPropertyOutputReference {
    return new IpSetReferencesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReferenceSetsProperty {
  /**
  * ip_set_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#ip_set_references AwsRuleGroup#ip_set_references}
  */
  readonly ipSetReferences?: IpSetReferencesProperty[] | cdktn.IResolvable;
}
export class ReferenceSetsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceSetsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferences = this._ipSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceSetsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipSetReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipSetReferences.internalValue = value.ipSetReferences;
    }
  }

  // ip_set_references - computed: false, optional: true, required: false
  private _ipSetReferences = new IpSetReferencesPropertyList(this, "ip_set_references", true);
  public get ipSetReferences() {
    return this._ipSetReferences;
  }
  public putIpSetReferences(value: IpSetReferencesProperty[] | cdktn.IResolvable) {
    this._ipSetReferences.internalValue = value;
  }
  public resetIpSetReferences() {
    this._ipSetReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferencesInput() {
    return this._ipSetReferences.internalValue;
  }
}
export interface IpSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#definition AwsRuleGroup#definition}
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
export interface IpSetsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#key AwsRuleGroup#key}
  */
  readonly key: string;
  /**
  * ip_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#ip_set AwsRuleGroup#ip_set}
  */
  readonly ipSet: IpSetProperty;
}
export class IpSetsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IpSetsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IpSetsProperty | cdktn.IResolvable | undefined) {
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

export class IpSetsPropertyList extends cdktn.ComplexList {
  public internalValue? : IpSetsProperty[] | cdktn.IResolvable

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
  public get(index: number): IpSetsPropertyOutputReference {
    return new IpSetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#definition AwsRuleGroup#definition}
  */
  readonly definition: string[];
}
export class PortSetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortSetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortSetProperty | undefined) {
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
export interface PortSetsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#key AwsRuleGroup#key}
  */
  readonly key: string;
  /**
  * port_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#port_set AwsRuleGroup#port_set}
  */
  readonly portSet: PortSetProperty;
}
export class PortSetsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PortSetsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._portSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSet = this._portSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortSetsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._portSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._portSet.internalValue = value.portSet;
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

  // port_set - computed: false, optional: false, required: true
  private _portSet = new PortSetPropertyOutputReference(this, "port_set");
  public get portSet() {
    return this._portSet;
  }
  public putPortSet(value: PortSetProperty) {
    this._portSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetInput() {
    return this._portSet.internalValue;
  }
}

export class PortSetsPropertyList extends cdktn.ComplexList {
  public internalValue? : PortSetsProperty[] | cdktn.IResolvable

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
  public get(index: number): PortSetsPropertyOutputReference {
    return new PortSetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleVariablesProperty {
  /**
  * ip_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#ip_sets AwsRuleGroup#ip_sets}
  */
  readonly ipSets?: IpSetsProperty[] | cdktn.IResolvable;
  /**
  * port_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#port_sets AwsRuleGroup#port_sets}
  */
  readonly portSets?: PortSetsProperty[] | cdktn.IResolvable;
}
export class RuleVariablesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleVariablesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets?.internalValue;
    }
    if (this._portSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleVariablesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipSets.internalValue = undefined;
      this._portSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipSets.internalValue = value.ipSets;
      this._portSets.internalValue = value.portSets;
    }
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets = new IpSetsPropertyList(this, "ip_sets", true);
  public get ipSets() {
    return this._ipSets;
  }
  public putIpSets(value: IpSetsProperty[] | cdktn.IResolvable) {
    this._ipSets.internalValue = value;
  }
  public resetIpSets() {
    this._ipSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets.internalValue;
  }

  // port_sets - computed: false, optional: true, required: false
  private _portSets = new PortSetsPropertyList(this, "port_sets", true);
  public get portSets() {
    return this._portSets;
  }
  public putPortSets(value: PortSetsProperty[] | cdktn.IResolvable) {
    this._portSets.internalValue = value;
  }
  public resetPortSets() {
    this._portSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets.internalValue;
  }
}
export interface RulesSourceListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#generated_rules_type AwsRuleGroup#generated_rules_type}
  */
  readonly generatedRulesType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#target_types AwsRuleGroup#target_types}
  */
  readonly targetTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#targets AwsRuleGroup#targets}
  */
  readonly targets: string[];
}
export class RulesSourceListPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesSourceListProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedRulesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedRulesType = this._generatedRulesType;
    }
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesSourceListProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedRulesType = undefined;
      this._targetTypes = undefined;
      this._targets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedRulesType = value.generatedRulesType;
      this._targetTypes = value.targetTypes;
      this._targets = value.targets;
    }
  }

  // generated_rules_type - computed: false, optional: false, required: true
  private _generatedRulesType?: string; 
  public get generatedRulesType() {
    return this.getStringAttribute('generated_rules_type');
  }
  public set generatedRulesType(value: string) {
    this._generatedRulesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRulesTypeInput() {
    return this._generatedRulesType;
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('target_types'));
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktn.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}
export interface HeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#destination AwsRuleGroup#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#destination_port AwsRuleGroup#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#direction AwsRuleGroup#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#protocol AwsRuleGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#source AwsRuleGroup#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#source_port AwsRuleGroup#source_port}
  */
  readonly sourcePort: string;
}
export class HeaderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeaderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeaderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._destinationPort = undefined;
      this._direction = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._direction = value.direction;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface RuleOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#keyword AwsRuleGroup#keyword}
  */
  readonly keyword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#settings AwsRuleGroup#settings}
  */
  readonly settings?: string[];
}
export class RuleOptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleOptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleOptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._settings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._settings = value.settings;
    }
  }

  // keyword - computed: false, optional: false, required: true
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string[]; 
  public get settings() {
    return cdktn.Fn.tolist(this.getListAttribute('settings'));
  }
  public set settings(value: string[]) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class RuleOptionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleOptionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleOptionPropertyOutputReference {
    return new RuleOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#action AwsRuleGroup#action}
  */
  readonly action: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#header AwsRuleGroup#header}
  */
  readonly header: HeaderProperty;
  /**
  * rule_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rule_option AwsRuleGroup#rule_option}
  */
  readonly ruleOption: RuleOptionProperty[] | cdktn.IResolvable;
}
export class StatefulRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatefulRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._ruleOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOption = this._ruleOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._header.internalValue = undefined;
      this._ruleOption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._header.internalValue = value.header;
      this._ruleOption.internalValue = value.ruleOption;
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

  // header - computed: false, optional: false, required: true
  private _header = new HeaderPropertyOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: HeaderProperty) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // rule_option - computed: false, optional: false, required: true
  private _ruleOption = new RuleOptionPropertyList(this, "rule_option", true);
  public get ruleOption() {
    return this._ruleOption;
  }
  public putRuleOption(value: RuleOptionProperty[] | cdktn.IResolvable) {
    this._ruleOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOptionInput() {
    return this._ruleOption.internalValue;
  }
}

export class StatefulRulePropertyList extends cdktn.ComplexList {
  public internalValue? : StatefulRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): StatefulRulePropertyOutputReference {
    return new StatefulRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#value AwsRuleGroup#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#dimension AwsRuleGroup#dimension}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#publish_metric_action AwsRuleGroup#publish_metric_action}
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
export interface CustomActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#action_name AwsRuleGroup#action_name}
  */
  readonly actionName: string;
  /**
  * action_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#action_definition AwsRuleGroup#action_definition}
  */
  readonly actionDefinition: ActionDefinitionProperty;
}
export class CustomActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomActionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomActionProperty | cdktn.IResolvable | undefined) {
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

export class CustomActionPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomActionProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomActionPropertyOutputReference {
    return new CustomActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#address_definition AwsRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class DestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationPropertyOutputReference {
    return new DestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationPortProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#from_port AwsRuleGroup#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#to_port AwsRuleGroup#to_port}
  */
  readonly toPort?: number;
}
export class DestinationPortPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationPortProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPortProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class DestinationPortPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationPortProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationPortPropertyOutputReference {
    return new DestinationPortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#address_definition AwsRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcePortProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#from_port AwsRuleGroup#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#to_port AwsRuleGroup#to_port}
  */
  readonly toPort?: number;
}
export class SourcePortPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourcePortProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePortProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class SourcePortPropertyList extends cdktn.ComplexList {
  public internalValue? : SourcePortProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePortPropertyOutputReference {
    return new SourcePortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcpFlagProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#flags AwsRuleGroup#flags}
  */
  readonly flags: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#masks AwsRuleGroup#masks}
  */
  readonly masks?: string[];
}
export class TcpFlagPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TcpFlagProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._masks !== undefined) {
      hasAnyValues = true;
      internalValueResult.masks = this._masks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcpFlagProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._masks = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._masks = value.masks;
    }
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: string[]; 
  public get flags() {
    return cdktn.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // masks - computed: false, optional: true, required: false
  private _masks?: string[]; 
  public get masks() {
    return cdktn.Fn.tolist(this.getListAttribute('masks'));
  }
  public set masks(value: string[]) {
    this._masks = value;
  }
  public resetMasks() {
    this._masks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masksInput() {
    return this._masks;
  }
}

export class TcpFlagPropertyList extends cdktn.ComplexList {
  public internalValue? : TcpFlagProperty[] | cdktn.IResolvable

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
  public get(index: number): TcpFlagPropertyOutputReference {
    return new TcpFlagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchAttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#protocols AwsRuleGroup#protocols}
  */
  readonly protocols?: number[];
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#destination AwsRuleGroup#destination}
  */
  readonly destination?: DestinationProperty[] | cdktn.IResolvable;
  /**
  * destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#destination_port AwsRuleGroup#destination_port}
  */
  readonly destinationPort?: DestinationPortProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#source AwsRuleGroup#source}
  */
  readonly source?: SourceProperty[] | cdktn.IResolvable;
  /**
  * source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#source_port AwsRuleGroup#source_port}
  */
  readonly sourcePort?: SourcePortProperty[] | cdktn.IResolvable;
  /**
  * tcp_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#tcp_flag AwsRuleGroup#tcp_flag}
  */
  readonly tcpFlag?: TcpFlagProperty[] | cdktn.IResolvable;
}
export class MatchAttributesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MatchAttributesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._destinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort?.internalValue;
    }
    if (this._tcpFlag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlag = this._tcpFlag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchAttributesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocols = undefined;
      this._destination.internalValue = undefined;
      this._destinationPort.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sourcePort.internalValue = undefined;
      this._tcpFlag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocols = value.protocols;
      this._destination.internalValue = value.destination;
      this._destinationPort.internalValue = value.destinationPort;
      this._source.internalValue = value.source;
      this._sourcePort.internalValue = value.sourcePort;
      this._tcpFlag.internalValue = value.tcpFlag;
    }
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DestinationPropertyList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DestinationProperty[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort = new DestinationPortPropertyList(this, "destination_port", true);
  public get destinationPort() {
    return this._destinationPort;
  }
  public putDestinationPort(value: DestinationPortProperty[] | cdktn.IResolvable) {
    this._destinationPort.internalValue = value;
  }
  public resetDestinationPort() {
    this._destinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new SourcePropertyList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort = new SourcePortPropertyList(this, "source_port", true);
  public get sourcePort() {
    return this._sourcePort;
  }
  public putSourcePort(value: SourcePortProperty[] | cdktn.IResolvable) {
    this._sourcePort.internalValue = value;
  }
  public resetSourcePort() {
    this._sourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort.internalValue;
  }

  // tcp_flag - computed: false, optional: true, required: false
  private _tcpFlag = new TcpFlagPropertyList(this, "tcp_flag", true);
  public get tcpFlag() {
    return this._tcpFlag;
  }
  public putTcpFlag(value: TcpFlagProperty[] | cdktn.IResolvable) {
    this._tcpFlag.internalValue = value;
  }
  public resetTcpFlag() {
    this._tcpFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagInput() {
    return this._tcpFlag.internalValue;
  }
}
export interface RuleDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#actions AwsRuleGroup#actions}
  */
  readonly actions: string[];
  /**
  * match_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#match_attributes AwsRuleGroup#match_attributes}
  */
  readonly matchAttributes: MatchAttributesProperty;
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
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._matchAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._matchAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._matchAttributes.internalValue = value.matchAttributes;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // match_attributes - computed: false, optional: false, required: true
  private _matchAttributes = new MatchAttributesPropertyOutputReference(this, "match_attributes");
  public get matchAttributes() {
    return this._matchAttributes;
  }
  public putMatchAttributes(value: MatchAttributesProperty) {
    this._matchAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributesInput() {
    return this._matchAttributes.internalValue;
  }
}
export interface StatelessRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#priority AwsRuleGroup#priority}
  */
  readonly priority: number;
  /**
  * rule_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rule_definition AwsRuleGroup#rule_definition}
  */
  readonly ruleDefinition: RuleDefinitionProperty;
}
export class StatelessRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatelessRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatelessRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._ruleDefinition.internalValue = value.ruleDefinition;
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

export class StatelessRulePropertyList extends cdktn.ComplexList {
  public internalValue? : StatelessRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): StatelessRulePropertyOutputReference {
    return new StatelessRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatelessRulesAndCustomActionsProperty {
  /**
  * custom_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#custom_action AwsRuleGroup#custom_action}
  */
  readonly customAction?: CustomActionProperty[] | cdktn.IResolvable;
  /**
  * stateless_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#stateless_rule AwsRuleGroup#stateless_rule}
  */
  readonly statelessRule: StatelessRuleProperty[] | cdktn.IResolvable;
}
export class StatelessRulesAndCustomActionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatelessRulesAndCustomActionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAction = this._customAction?.internalValue;
    }
    if (this._statelessRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRule = this._statelessRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatelessRulesAndCustomActionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAction.internalValue = undefined;
      this._statelessRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAction.internalValue = value.customAction;
      this._statelessRule.internalValue = value.statelessRule;
    }
  }

  // custom_action - computed: false, optional: true, required: false
  private _customAction = new CustomActionPropertyList(this, "custom_action", true);
  public get customAction() {
    return this._customAction;
  }
  public putCustomAction(value: CustomActionProperty[] | cdktn.IResolvable) {
    this._customAction.internalValue = value;
  }
  public resetCustomAction() {
    this._customAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionInput() {
    return this._customAction.internalValue;
  }

  // stateless_rule - computed: false, optional: false, required: true
  private _statelessRule = new StatelessRulePropertyList(this, "stateless_rule", true);
  public get statelessRule() {
    return this._statelessRule;
  }
  public putStatelessRule(value: StatelessRuleProperty[] | cdktn.IResolvable) {
    this._statelessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRuleInput() {
    return this._statelessRule.internalValue;
  }
}
export interface RulesSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rules_string AwsRuleGroup#rules_string}
  */
  readonly rulesString?: string;
  /**
  * rules_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rules_source_list AwsRuleGroup#rules_source_list}
  */
  readonly rulesSourceList?: RulesSourceListProperty;
  /**
  * stateful_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#stateful_rule AwsRuleGroup#stateful_rule}
  */
  readonly statefulRule?: StatefulRuleProperty[] | cdktn.IResolvable;
  /**
  * stateless_rules_and_custom_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions AwsRuleGroup#stateless_rules_and_custom_actions}
  */
  readonly statelessRulesAndCustomActions?: StatelessRulesAndCustomActionsProperty;
}
export class RulesSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulesString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesString = this._rulesString;
    }
    if (this._rulesSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
    }
    if (this._statefulRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRule = this._statefulRule?.internalValue;
    }
    if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rulesString = undefined;
      this._rulesSourceList.internalValue = undefined;
      this._statefulRule.internalValue = undefined;
      this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rulesString = value.rulesString;
      this._rulesSourceList.internalValue = value.rulesSourceList;
      this._statefulRule.internalValue = value.statefulRule;
      this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
    }
  }

  // rules_string - computed: false, optional: true, required: false
  private _rulesString?: string; 
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }
  public set rulesString(value: string) {
    this._rulesString = value;
  }
  public resetRulesString() {
    this._rulesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesStringInput() {
    return this._rulesString;
  }

  // rules_source_list - computed: false, optional: true, required: false
  private _rulesSourceList = new RulesSourceListPropertyOutputReference(this, "rules_source_list");
  public get rulesSourceList() {
    return this._rulesSourceList;
  }
  public putRulesSourceList(value: RulesSourceListProperty) {
    this._rulesSourceList.internalValue = value;
  }
  public resetRulesSourceList() {
    this._rulesSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceListInput() {
    return this._rulesSourceList.internalValue;
  }

  // stateful_rule - computed: false, optional: true, required: false
  private _statefulRule = new StatefulRulePropertyList(this, "stateful_rule", false);
  public get statefulRule() {
    return this._statefulRule;
  }
  public putStatefulRule(value: StatefulRuleProperty[] | cdktn.IResolvable) {
    this._statefulRule.internalValue = value;
  }
  public resetStatefulRule() {
    this._statefulRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleInput() {
    return this._statefulRule.internalValue;
  }

  // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
  private _statelessRulesAndCustomActions = new StatelessRulesAndCustomActionsPropertyOutputReference(this, "stateless_rules_and_custom_actions");
  public get statelessRulesAndCustomActions() {
    return this._statelessRulesAndCustomActions;
  }
  public putStatelessRulesAndCustomActions(value: StatelessRulesAndCustomActionsProperty) {
    this._statelessRulesAndCustomActions.internalValue = value;
  }
  public resetStatelessRulesAndCustomActions() {
    this._statelessRulesAndCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesAndCustomActionsInput() {
    return this._statelessRulesAndCustomActions.internalValue;
  }
}
export interface StatefulRuleOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rule_order AwsRuleGroup#rule_order}
  */
  readonly ruleOrder: string;
}
export class StatefulRuleOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulRuleOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulRuleOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleOrder = value.ruleOrder;
    }
  }

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }
}
export interface RuleGroupProperty {
  /**
  * reference_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#reference_sets AwsRuleGroup#reference_sets}
  */
  readonly referenceSets?: ReferenceSetsProperty;
  /**
  * rule_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rule_variables AwsRuleGroup#rule_variables}
  */
  readonly ruleVariables?: RuleVariablesProperty;
  /**
  * rules_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#rules_source AwsRuleGroup#rules_source}
  */
  readonly rulesSource: RulesSourceProperty;
  /**
  * stateful_rule_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_rule_group#stateful_rule_options AwsRuleGroup#stateful_rule_options}
  */
  readonly statefulRuleOptions?: StatefulRuleOptionsProperty;
}
export class RuleGroupPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleGroupProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSets = this._referenceSets?.internalValue;
    }
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    if (this._rulesSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSource = this._rulesSource?.internalValue;
    }
    if (this._statefulRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referenceSets.internalValue = undefined;
      this._ruleVariables.internalValue = undefined;
      this._rulesSource.internalValue = undefined;
      this._statefulRuleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referenceSets.internalValue = value.referenceSets;
      this._ruleVariables.internalValue = value.ruleVariables;
      this._rulesSource.internalValue = value.rulesSource;
      this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
    }
  }

  // reference_sets - computed: false, optional: true, required: false
  private _referenceSets = new ReferenceSetsPropertyOutputReference(this, "reference_sets");
  public get referenceSets() {
    return this._referenceSets;
  }
  public putReferenceSets(value: ReferenceSetsProperty) {
    this._referenceSets.internalValue = value;
  }
  public resetReferenceSets() {
    this._referenceSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSetsInput() {
    return this._referenceSets.internalValue;
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new RuleVariablesPropertyOutputReference(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: RuleVariablesProperty) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }

  // rules_source - computed: false, optional: false, required: true
  private _rulesSource = new RulesSourcePropertyOutputReference(this, "rules_source");
  public get rulesSource() {
    return this._rulesSource;
  }
  public putRulesSource(value: RulesSourceProperty) {
    this._rulesSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceInput() {
    return this._rulesSource.internalValue;
  }

  // stateful_rule_options - computed: false, optional: true, required: false
  private _statefulRuleOptions = new StatefulRuleOptionsPropertyOutputReference(this, "stateful_rule_options");
  public get statefulRuleOptions() {
    return this._statefulRuleOptions;
  }
  public putStatefulRuleOptions(value: StatefulRuleOptionsProperty) {
    this._statefulRuleOptions.internalValue = value;
  }
  public resetStatefulRuleOptions() {
    this._statefulRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleOptionsInput() {
    return this._statefulRuleOptions.internalValue;
  }
}
}
