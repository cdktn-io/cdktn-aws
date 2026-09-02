// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#description TfRule#description}
  */
  readonly description?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#region TfRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_type TfRule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#tags TfRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#tags_all TfRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * exclude_resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#exclude_resource_tags TfRule#exclude_resource_tags}
  */
  readonly excludeResourceTags?: TfRule.ExcludeResourceTagsProperty[] | cdktn.IResolvable;
  /**
  * lock_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#lock_configuration TfRule#lock_configuration}
  */
  readonly lockConfiguration?: TfRule.LockConfigurationProperty;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_tags TfRule#resource_tags}
  */
  readonly resourceTags?: TfRule.ResourceTagsProperty[] | cdktn.IResolvable;
  /**
  * retention_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#retention_period TfRule#retention_period}
  */
  readonly retentionPeriod: TfRule.RetentionPeriodProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#timeouts TfRule#timeouts}
  */
  readonly timeouts?: TfRule.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule aws_rbin_rule}
*/
export class TfRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rbin_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRule to import
  * @param importFromId The id of the existing TfRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rbin_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule aws_rbin_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TfRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rbin_rule',
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
    this._region = config.region;
    this._resourceType = config.resourceType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludeResourceTags.internalValue = config.excludeResourceTags;
    this._lockConfiguration.internalValue = config.lockConfiguration;
    this._resourceTags.internalValue = config.resourceTags;
    this._retentionPeriod.internalValue = config.retentionPeriod;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_end_time - computed: true, optional: false, required: false
  public get lockEndTime() {
    return this.getStringAttribute('lock_end_time');
  }

  // lock_state - computed: true, optional: false, required: false
  public get lockState() {
    return this.getStringAttribute('lock_state');
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // exclude_resource_tags - computed: false, optional: true, required: false
  private _excludeResourceTags = new TfRule.ExcludeResourceTagsPropertyList(this, "exclude_resource_tags", true);
  public get excludeResourceTags() {
    return this._excludeResourceTags;
  }
  public putExcludeResourceTags(value: TfRule.ExcludeResourceTagsProperty[] | cdktn.IResolvable) {
    this._excludeResourceTags.internalValue = value;
  }
  public resetExcludeResourceTags() {
    this._excludeResourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTagsInput() {
    return this._excludeResourceTags.internalValue;
  }

  // lock_configuration - computed: false, optional: true, required: false
  private _lockConfiguration = new TfRule.LockConfigurationPropertyOutputReference(this, "lock_configuration");
  public get lockConfiguration() {
    return this._lockConfiguration;
  }
  public putLockConfiguration(value: TfRule.LockConfigurationProperty) {
    this._lockConfiguration.internalValue = value;
  }
  public resetLockConfiguration() {
    this._lockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockConfigurationInput() {
    return this._lockConfiguration.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new TfRule.ResourceTagsPropertyList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: TfRule.ResourceTagsProperty[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod = new TfRule.RetentionPeriodPropertyOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: TfRule.RetentionPeriodProperty) {
    this._retentionPeriod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfRule.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfRule.TimeoutsProperty) {
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
      description: cdktn.stringToTerraform(this._description),
      region: cdktn.stringToTerraform(this._region),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      exclude_resource_tags: cdktn.listMapper(tfRuleExcludeResourceTagsPropertyToTerraform, true)(this._excludeResourceTags.internalValue),
      lock_configuration: tfRuleLockConfigurationPropertyToTerraform(this._lockConfiguration.internalValue),
      resource_tags: cdktn.listMapper(tfRuleResourceTagsPropertyToTerraform, true)(this._resourceTags.internalValue),
      retention_period: tfRuleRetentionPeriodPropertyToTerraform(this._retentionPeriod.internalValue),
      timeouts: tfRuleTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
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
      exclude_resource_tags: {
        value: cdktn.listMapperHcl(tfRuleExcludeResourceTagsPropertyToHclTerraform, true)(this._excludeResourceTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfRule.ExcludeResourceTagsPropertyList",
      },
      lock_configuration: {
        value: tfRuleLockConfigurationPropertyToHclTerraform(this._lockConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRule.LockConfigurationPropertyList",
      },
      resource_tags: {
        value: cdktn.listMapperHcl(tfRuleResourceTagsPropertyToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfRule.ResourceTagsPropertyList",
      },
      retention_period: {
        value: tfRuleRetentionPeriodPropertyToHclTerraform(this._retentionPeriod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRule.RetentionPeriodPropertyList",
      },
      timeouts: {
        value: tfRuleTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfRule.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRuleExcludeResourceTagsPropertyToTerraform(struct?: TfRule.ExcludeResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_tag_key: cdktn.stringToTerraform(struct!.resourceTagKey),
    resource_tag_value: cdktn.stringToTerraform(struct!.resourceTagValue),
  }
}


export function tfRuleExcludeResourceTagsPropertyToHclTerraform(struct?: TfRule.ExcludeResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_tag_key: {
      value: cdktn.stringToHclTerraform(struct!.resourceTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.resourceTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleUnlockDelayPropertyToTerraform(struct?: TfRule.UnlockDelayPropertyOutputReference | TfRule.UnlockDelayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unlock_delay_unit: cdktn.stringToTerraform(struct!.unlockDelayUnit),
    unlock_delay_value: cdktn.numberToTerraform(struct!.unlockDelayValue),
  }
}


export function tfRuleUnlockDelayPropertyToHclTerraform(struct?: TfRule.UnlockDelayPropertyOutputReference | TfRule.UnlockDelayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unlock_delay_unit: {
      value: cdktn.stringToHclTerraform(struct!.unlockDelayUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlock_delay_value: {
      value: cdktn.numberToHclTerraform(struct!.unlockDelayValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleLockConfigurationPropertyToTerraform(struct?: TfRule.LockConfigurationPropertyOutputReference | TfRule.LockConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unlock_delay: tfRuleUnlockDelayPropertyToTerraform(struct!.unlockDelay),
  }
}


export function tfRuleLockConfigurationPropertyToHclTerraform(struct?: TfRule.LockConfigurationPropertyOutputReference | TfRule.LockConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unlock_delay: {
      value: tfRuleUnlockDelayPropertyToHclTerraform(struct!.unlockDelay),
      isBlock: true,
      type: "list",
      storageClassType: "UnlockDelayPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleResourceTagsPropertyToTerraform(struct?: TfRule.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_tag_key: cdktn.stringToTerraform(struct!.resourceTagKey),
    resource_tag_value: cdktn.stringToTerraform(struct!.resourceTagValue),
  }
}


export function tfRuleResourceTagsPropertyToHclTerraform(struct?: TfRule.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_tag_key: {
      value: cdktn.stringToHclTerraform(struct!.resourceTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.resourceTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleRetentionPeriodPropertyToTerraform(struct?: TfRule.RetentionPeriodPropertyOutputReference | TfRule.RetentionPeriodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_period_unit: cdktn.stringToTerraform(struct!.retentionPeriodUnit),
    retention_period_value: cdktn.numberToTerraform(struct!.retentionPeriodValue),
  }
}


export function tfRuleRetentionPeriodPropertyToHclTerraform(struct?: TfRule.RetentionPeriodPropertyOutputReference | TfRule.RetentionPeriodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_period_unit: {
      value: cdktn.stringToHclTerraform(struct!.retentionPeriodUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_value: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriodValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleTimeoutsPropertyToTerraform(struct?: TfRule.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfRuleTimeoutsPropertyToHclTerraform(struct?: TfRule.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfRule {
export interface ExcludeResourceTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_tag_key TfRule#resource_tag_key}
  */
  readonly resourceTagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_tag_value TfRule#resource_tag_value}
  */
  readonly resourceTagValue?: string;
}
export class ExcludeResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludeResourceTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTagKey = this._resourceTagKey;
    }
    if (this._resourceTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTagValue = this._resourceTagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludeResourceTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTagKey = undefined;
      this._resourceTagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTagKey = value.resourceTagKey;
      this._resourceTagValue = value.resourceTagValue;
    }
  }

  // resource_tag_key - computed: false, optional: false, required: true
  private _resourceTagKey?: string; 
  public get resourceTagKey() {
    return this.getStringAttribute('resource_tag_key');
  }
  public set resourceTagKey(value: string) {
    this._resourceTagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagKeyInput() {
    return this._resourceTagKey;
  }

  // resource_tag_value - computed: false, optional: true, required: false
  private _resourceTagValue?: string; 
  public get resourceTagValue() {
    return this.getStringAttribute('resource_tag_value');
  }
  public set resourceTagValue(value: string) {
    this._resourceTagValue = value;
  }
  public resetResourceTagValue() {
    this._resourceTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagValueInput() {
    return this._resourceTagValue;
  }
}

export class ExcludeResourceTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludeResourceTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludeResourceTagsPropertyOutputReference {
    return new ExcludeResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnlockDelayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#unlock_delay_unit TfRule#unlock_delay_unit}
  */
  readonly unlockDelayUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#unlock_delay_value TfRule#unlock_delay_value}
  */
  readonly unlockDelayValue: number;
}
export class UnlockDelayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnlockDelayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unlockDelayUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockDelayUnit = this._unlockDelayUnit;
    }
    if (this._unlockDelayValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockDelayValue = this._unlockDelayValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnlockDelayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unlockDelayUnit = undefined;
      this._unlockDelayValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unlockDelayUnit = value.unlockDelayUnit;
      this._unlockDelayValue = value.unlockDelayValue;
    }
  }

  // unlock_delay_unit - computed: false, optional: false, required: true
  private _unlockDelayUnit?: string; 
  public get unlockDelayUnit() {
    return this.getStringAttribute('unlock_delay_unit');
  }
  public set unlockDelayUnit(value: string) {
    this._unlockDelayUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockDelayUnitInput() {
    return this._unlockDelayUnit;
  }

  // unlock_delay_value - computed: false, optional: false, required: true
  private _unlockDelayValue?: number; 
  public get unlockDelayValue() {
    return this.getNumberAttribute('unlock_delay_value');
  }
  public set unlockDelayValue(value: number) {
    this._unlockDelayValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockDelayValueInput() {
    return this._unlockDelayValue;
  }
}
export interface LockConfigurationProperty {
  /**
  * unlock_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#unlock_delay TfRule#unlock_delay}
  */
  readonly unlockDelay: UnlockDelayProperty;
}
export class LockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LockConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unlockDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockDelay = this._unlockDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LockConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unlockDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unlockDelay.internalValue = value.unlockDelay;
    }
  }

  // unlock_delay - computed: false, optional: false, required: true
  private _unlockDelay = new UnlockDelayPropertyOutputReference(this, "unlock_delay");
  public get unlockDelay() {
    return this._unlockDelay;
  }
  public putUnlockDelay(value: UnlockDelayProperty) {
    this._unlockDelay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockDelayInput() {
    return this._unlockDelay.internalValue;
  }
}
export interface ResourceTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_tag_key TfRule#resource_tag_key}
  */
  readonly resourceTagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#resource_tag_value TfRule#resource_tag_value}
  */
  readonly resourceTagValue?: string;
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
    if (this._resourceTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTagKey = this._resourceTagKey;
    }
    if (this._resourceTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTagValue = this._resourceTagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTagKey = undefined;
      this._resourceTagValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTagKey = value.resourceTagKey;
      this._resourceTagValue = value.resourceTagValue;
    }
  }

  // resource_tag_key - computed: false, optional: false, required: true
  private _resourceTagKey?: string; 
  public get resourceTagKey() {
    return this.getStringAttribute('resource_tag_key');
  }
  public set resourceTagKey(value: string) {
    this._resourceTagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagKeyInput() {
    return this._resourceTagKey;
  }

  // resource_tag_value - computed: false, optional: true, required: false
  private _resourceTagValue?: string; 
  public get resourceTagValue() {
    return this.getStringAttribute('resource_tag_value');
  }
  public set resourceTagValue(value: string) {
    this._resourceTagValue = value;
  }
  public resetResourceTagValue() {
    this._resourceTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagValueInput() {
    return this._resourceTagValue;
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
export interface RetentionPeriodProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#retention_period_unit TfRule#retention_period_unit}
  */
  readonly retentionPeriodUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#retention_period_value TfRule#retention_period_value}
  */
  readonly retentionPeriodValue: number;
}
export class RetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionPeriodProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPeriodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodUnit = this._retentionPeriodUnit;
    }
    if (this._retentionPeriodValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodValue = this._retentionPeriodValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionPeriodProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPeriodUnit = undefined;
      this._retentionPeriodValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPeriodUnit = value.retentionPeriodUnit;
      this._retentionPeriodValue = value.retentionPeriodValue;
    }
  }

  // retention_period_unit - computed: false, optional: false, required: true
  private _retentionPeriodUnit?: string; 
  public get retentionPeriodUnit() {
    return this.getStringAttribute('retention_period_unit');
  }
  public set retentionPeriodUnit(value: string) {
    this._retentionPeriodUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodUnitInput() {
    return this._retentionPeriodUnit;
  }

  // retention_period_value - computed: false, optional: false, required: true
  private _retentionPeriodValue?: number; 
  public get retentionPeriodValue() {
    return this.getNumberAttribute('retention_period_value');
  }
  public set retentionPeriodValue(value: number) {
    this._retentionPeriodValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodValueInput() {
    return this._retentionPeriodValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#create TfRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#delete TfRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rbin_rule#update TfRule#update}
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
