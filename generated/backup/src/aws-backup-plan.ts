// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBackupPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#id AwsBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#name AwsBackupPlan#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#region AwsBackupPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#tags AwsBackupPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#tags_all AwsBackupPlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * advanced_backup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#advanced_backup_setting AwsBackupPlan#advanced_backup_setting}
  */
  readonly advancedBackupSetting?: AwsBackupPlan.AdvancedBackupSettingProperty[] | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#rule AwsBackupPlan#rule}
  */
  readonly rule: AwsBackupPlan.RuleProperty[] | cdktn.IResolvable;
  /**
  * scan_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#scan_setting AwsBackupPlan#scan_setting}
  */
  readonly scanSetting?: AwsBackupPlan.ScanSettingProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan aws_backup_plan}
*/
export class AwsBackupPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBackupPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBackupPlan to import
  * @param importFromId The id of the existing AwsBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan aws_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_plan',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedBackupSetting.internalValue = config.advancedBackupSetting;
    this._rule.internalValue = config.rule;
    this._scanSetting.internalValue = config.scanSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // advanced_backup_setting - computed: false, optional: true, required: false
  private _advancedBackupSetting = new AwsBackupPlan.AdvancedBackupSettingPropertyList(this, "advanced_backup_setting", true);
  public get advancedBackupSetting() {
    return this._advancedBackupSetting;
  }
  public putAdvancedBackupSetting(value: AwsBackupPlan.AdvancedBackupSettingProperty[] | cdktn.IResolvable) {
    this._advancedBackupSetting.internalValue = value;
  }
  public resetAdvancedBackupSetting() {
    this._advancedBackupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBackupSettingInput() {
    return this._advancedBackupSetting.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new AwsBackupPlan.RulePropertyList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AwsBackupPlan.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // scan_setting - computed: false, optional: true, required: false
  private _scanSetting = new AwsBackupPlan.ScanSettingPropertyList(this, "scan_setting", true);
  public get scanSetting() {
    return this._scanSetting;
  }
  public putScanSetting(value: AwsBackupPlan.ScanSettingProperty[] | cdktn.IResolvable) {
    this._scanSetting.internalValue = value;
  }
  public resetScanSetting() {
    this._scanSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSettingInput() {
    return this._scanSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      advanced_backup_setting: cdktn.listMapper(awsBackupPlanAdvancedBackupSettingPropertyToTerraform, true)(this._advancedBackupSetting.internalValue),
      rule: cdktn.listMapper(awsBackupPlanRulePropertyToTerraform, true)(this._rule.internalValue),
      scan_setting: cdktn.listMapper(awsBackupPlanScanSettingPropertyToTerraform, true)(this._scanSetting.internalValue),
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
      advanced_backup_setting: {
        value: cdktn.listMapperHcl(awsBackupPlanAdvancedBackupSettingPropertyToHclTerraform, true)(this._advancedBackupSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsBackupPlan.AdvancedBackupSettingPropertyList",
      },
      rule: {
        value: cdktn.listMapperHcl(awsBackupPlanRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsBackupPlan.RulePropertyList",
      },
      scan_setting: {
        value: cdktn.listMapperHcl(awsBackupPlanScanSettingPropertyToHclTerraform, true)(this._scanSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsBackupPlan.ScanSettingPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBackupPlanAdvancedBackupSettingPropertyToTerraform(struct?: AwsBackupPlan.AdvancedBackupSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.backupOptions),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function awsBackupPlanAdvancedBackupSettingPropertyToHclTerraform(struct?: AwsBackupPlan.AdvancedBackupSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.backupOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanRuleCopyActionLifecyclePropertyToTerraform(struct?: AwsBackupPlan.RuleCopyActionLifecyclePropertyOutputReference | AwsBackupPlan.RuleCopyActionLifecycleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cold_storage_after: cdktn.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktn.numberToTerraform(struct!.deleteAfter),
    opt_in_to_archive_for_supported_resources: cdktn.booleanToTerraform(struct!.optInToArchiveForSupportedResources),
  }
}


export function awsBackupPlanRuleCopyActionLifecyclePropertyToHclTerraform(struct?: AwsBackupPlan.RuleCopyActionLifecyclePropertyOutputReference | AwsBackupPlan.RuleCopyActionLifecycleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cold_storage_after: {
      value: cdktn.numberToHclTerraform(struct!.coldStorageAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_after: {
      value: cdktn.numberToHclTerraform(struct!.deleteAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_in_to_archive_for_supported_resources: {
      value: cdktn.booleanToHclTerraform(struct!.optInToArchiveForSupportedResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanCopyActionPropertyToTerraform(struct?: AwsBackupPlan.CopyActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_vault_arn: cdktn.stringToTerraform(struct!.destinationVaultArn),
    lifecycle: awsBackupPlanRuleCopyActionLifecyclePropertyToTerraform(struct!.lifecycle),
  }
}


export function awsBackupPlanCopyActionPropertyToHclTerraform(struct?: AwsBackupPlan.CopyActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_vault_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationVaultArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle: {
      value: awsBackupPlanRuleCopyActionLifecyclePropertyToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "RuleCopyActionLifecyclePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanRuleLifecyclePropertyToTerraform(struct?: AwsBackupPlan.RuleLifecyclePropertyOutputReference | AwsBackupPlan.RuleLifecycleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cold_storage_after: cdktn.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktn.numberToTerraform(struct!.deleteAfter),
    opt_in_to_archive_for_supported_resources: cdktn.booleanToTerraform(struct!.optInToArchiveForSupportedResources),
  }
}


export function awsBackupPlanRuleLifecyclePropertyToHclTerraform(struct?: AwsBackupPlan.RuleLifecyclePropertyOutputReference | AwsBackupPlan.RuleLifecycleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cold_storage_after: {
      value: cdktn.numberToHclTerraform(struct!.coldStorageAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_after: {
      value: cdktn.numberToHclTerraform(struct!.deleteAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_in_to_archive_for_supported_resources: {
      value: cdktn.booleanToHclTerraform(struct!.optInToArchiveForSupportedResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanScanActionPropertyToTerraform(struct?: AwsBackupPlan.ScanActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    malware_scanner: cdktn.stringToTerraform(struct!.malwareScanner),
    scan_mode: cdktn.stringToTerraform(struct!.scanMode),
  }
}


export function awsBackupPlanScanActionPropertyToHclTerraform(struct?: AwsBackupPlan.ScanActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    malware_scanner: {
      value: cdktn.stringToHclTerraform(struct!.malwareScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_mode: {
      value: cdktn.stringToHclTerraform(struct!.scanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanRulePropertyToTerraform(struct?: AwsBackupPlan.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    completion_window: cdktn.numberToTerraform(struct!.completionWindow),
    enable_continuous_backup: cdktn.booleanToTerraform(struct!.enableContinuousBackup),
    recovery_point_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
    schedule: cdktn.stringToTerraform(struct!.schedule),
    schedule_expression_timezone: cdktn.stringToTerraform(struct!.scheduleExpressionTimezone),
    start_window: cdktn.numberToTerraform(struct!.startWindow),
    target_logically_air_gapped_backup_vault_arn: cdktn.stringToTerraform(struct!.targetLogicallyAirGappedBackupVaultArn),
    target_vault_name: cdktn.stringToTerraform(struct!.targetVaultName),
    copy_action: cdktn.listMapper(awsBackupPlanCopyActionPropertyToTerraform, true)(struct!.copyAction),
    lifecycle: awsBackupPlanRuleLifecyclePropertyToTerraform(struct!.lifecycle),
    scan_action: cdktn.listMapper(awsBackupPlanScanActionPropertyToTerraform, true)(struct!.scanAction),
  }
}


export function awsBackupPlanRulePropertyToHclTerraform(struct?: AwsBackupPlan.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    completion_window: {
      value: cdktn.numberToHclTerraform(struct!.completionWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_continuous_backup: {
      value: cdktn.booleanToHclTerraform(struct!.enableContinuousBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_point_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.recoveryPointTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktn.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression_timezone: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpressionTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_window: {
      value: cdktn.numberToHclTerraform(struct!.startWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_logically_air_gapped_backup_vault_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetLogicallyAirGappedBackupVaultArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_vault_name: {
      value: cdktn.stringToHclTerraform(struct!.targetVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_action: {
      value: cdktn.listMapperHcl(awsBackupPlanCopyActionPropertyToHclTerraform, true)(struct!.copyAction),
      isBlock: true,
      type: "set",
      storageClassType: "CopyActionPropertyList",
    },
    lifecycle: {
      value: awsBackupPlanRuleLifecyclePropertyToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "RuleLifecyclePropertyList",
    },
    scan_action: {
      value: cdktn.listMapperHcl(awsBackupPlanScanActionPropertyToHclTerraform, true)(struct!.scanAction),
      isBlock: true,
      type: "set",
      storageClassType: "ScanActionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBackupPlanScanSettingPropertyToTerraform(struct?: AwsBackupPlan.ScanSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    malware_scanner: cdktn.stringToTerraform(struct!.malwareScanner),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    scanner_role_arn: cdktn.stringToTerraform(struct!.scannerRoleArn),
  }
}


export function awsBackupPlanScanSettingPropertyToHclTerraform(struct?: AwsBackupPlan.ScanSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    malware_scanner: {
      value: cdktn.stringToHclTerraform(struct!.malwareScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scanner_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.scannerRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBackupPlan {
export interface AdvancedBackupSettingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#backup_options AwsBackupPlan#backup_options}
  */
  readonly backupOptions: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#resource_type AwsBackupPlan#resource_type}
  */
  readonly resourceType: string;
}
export class AdvancedBackupSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AdvancedBackupSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOptions = this._backupOptions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedBackupSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupOptions = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupOptions = value.backupOptions;
      this._resourceType = value.resourceType;
    }
  }

  // backup_options - computed: false, optional: false, required: true
  private _backupOptions?: { [key: string]: string }; 
  public get backupOptions() {
    return this.getStringMapAttribute('backup_options');
  }
  public set backupOptions(value: { [key: string]: string }) {
    this._backupOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOptionsInput() {
    return this._backupOptions;
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
}

export class AdvancedBackupSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : AdvancedBackupSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): AdvancedBackupSettingPropertyOutputReference {
    return new AdvancedBackupSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleCopyActionLifecycleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#cold_storage_after AwsBackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#delete_after AwsBackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources AwsBackupPlan#opt_in_to_archive_for_supported_resources}
  */
  readonly optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable;
}
export class RuleCopyActionLifecyclePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleCopyActionLifecycleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageAfter = this._coldStorageAfter;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    if (this._optInToArchiveForSupportedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInToArchiveForSupportedResources = this._optInToArchiveForSupportedResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleCopyActionLifecycleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coldStorageAfter = undefined;
      this._deleteAfter = undefined;
      this._optInToArchiveForSupportedResources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coldStorageAfter = value.coldStorageAfter;
      this._deleteAfter = value.deleteAfter;
      this._optInToArchiveForSupportedResources = value.optInToArchiveForSupportedResources;
    }
  }

  // cold_storage_after - computed: false, optional: true, required: false
  private _coldStorageAfter?: number; 
  public get coldStorageAfter() {
    return this.getNumberAttribute('cold_storage_after');
  }
  public set coldStorageAfter(value: number) {
    this._coldStorageAfter = value;
  }
  public resetColdStorageAfter() {
    this._coldStorageAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageAfterInput() {
    return this._coldStorageAfter;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: number; 
  public get deleteAfter() {
    return this.getNumberAttribute('delete_after');
  }
  public set deleteAfter(value: number) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: true, required: false
  private _optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable; 
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
  public set optInToArchiveForSupportedResources(value: boolean | cdktn.IResolvable) {
    this._optInToArchiveForSupportedResources = value;
  }
  public resetOptInToArchiveForSupportedResources() {
    this._optInToArchiveForSupportedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInToArchiveForSupportedResourcesInput() {
    return this._optInToArchiveForSupportedResources;
  }
}
export interface CopyActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#destination_vault_arn AwsBackupPlan#destination_vault_arn}
  */
  readonly destinationVaultArn: string;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#lifecycle AwsBackupPlan#lifecycle}
  */
  readonly lifecycle?: RuleCopyActionLifecycleProperty;
}
export class CopyActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CopyActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationVaultArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVaultArn = this._destinationVaultArn;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CopyActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationVaultArn = undefined;
      this._lifecycle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationVaultArn = value.destinationVaultArn;
      this._lifecycle.internalValue = value.lifecycle;
    }
  }

  // destination_vault_arn - computed: false, optional: false, required: true
  private _destinationVaultArn?: string; 
  public get destinationVaultArn() {
    return this.getStringAttribute('destination_vault_arn');
  }
  public set destinationVaultArn(value: string) {
    this._destinationVaultArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVaultArnInput() {
    return this._destinationVaultArn;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new RuleCopyActionLifecyclePropertyOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: RuleCopyActionLifecycleProperty) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }
}

export class CopyActionPropertyList extends cdktn.ComplexList {
  public internalValue? : CopyActionProperty[] | cdktn.IResolvable

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
  public get(index: number): CopyActionPropertyOutputReference {
    return new CopyActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleLifecycleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#cold_storage_after AwsBackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#delete_after AwsBackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources AwsBackupPlan#opt_in_to_archive_for_supported_resources}
  */
  readonly optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable;
}
export class RuleLifecyclePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleLifecycleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageAfter = this._coldStorageAfter;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    if (this._optInToArchiveForSupportedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInToArchiveForSupportedResources = this._optInToArchiveForSupportedResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleLifecycleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coldStorageAfter = undefined;
      this._deleteAfter = undefined;
      this._optInToArchiveForSupportedResources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coldStorageAfter = value.coldStorageAfter;
      this._deleteAfter = value.deleteAfter;
      this._optInToArchiveForSupportedResources = value.optInToArchiveForSupportedResources;
    }
  }

  // cold_storage_after - computed: false, optional: true, required: false
  private _coldStorageAfter?: number; 
  public get coldStorageAfter() {
    return this.getNumberAttribute('cold_storage_after');
  }
  public set coldStorageAfter(value: number) {
    this._coldStorageAfter = value;
  }
  public resetColdStorageAfter() {
    this._coldStorageAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageAfterInput() {
    return this._coldStorageAfter;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: number; 
  public get deleteAfter() {
    return this.getNumberAttribute('delete_after');
  }
  public set deleteAfter(value: number) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: true, required: false
  private _optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable; 
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
  public set optInToArchiveForSupportedResources(value: boolean | cdktn.IResolvable) {
    this._optInToArchiveForSupportedResources = value;
  }
  public resetOptInToArchiveForSupportedResources() {
    this._optInToArchiveForSupportedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInToArchiveForSupportedResourcesInput() {
    return this._optInToArchiveForSupportedResources;
  }
}
export interface ScanActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#malware_scanner AwsBackupPlan#malware_scanner}
  */
  readonly malwareScanner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#scan_mode AwsBackupPlan#scan_mode}
  */
  readonly scanMode: string;
}
export class ScanActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScanActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malwareScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareScanner = this._malwareScanner;
    }
    if (this._scanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanMode = this._scanMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScanActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._malwareScanner = undefined;
      this._scanMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._malwareScanner = value.malwareScanner;
      this._scanMode = value.scanMode;
    }
  }

  // malware_scanner - computed: false, optional: false, required: true
  private _malwareScanner?: string; 
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }
  public set malwareScanner(value: string) {
    this._malwareScanner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScannerInput() {
    return this._malwareScanner;
  }

  // scan_mode - computed: false, optional: false, required: true
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }
}

export class ScanActionPropertyList extends cdktn.ComplexList {
  public internalValue? : ScanActionProperty[] | cdktn.IResolvable

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
  public get(index: number): ScanActionPropertyOutputReference {
    return new ScanActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#completion_window AwsBackupPlan#completion_window}
  */
  readonly completionWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#enable_continuous_backup AwsBackupPlan#enable_continuous_backup}
  */
  readonly enableContinuousBackup?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#recovery_point_tags AwsBackupPlan#recovery_point_tags}
  */
  readonly recoveryPointTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#rule_name AwsBackupPlan#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#schedule AwsBackupPlan#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#schedule_expression_timezone AwsBackupPlan#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#start_window AwsBackupPlan#start_window}
  */
  readonly startWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#target_logically_air_gapped_backup_vault_arn AwsBackupPlan#target_logically_air_gapped_backup_vault_arn}
  */
  readonly targetLogicallyAirGappedBackupVaultArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#target_vault_name AwsBackupPlan#target_vault_name}
  */
  readonly targetVaultName: string;
  /**
  * copy_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#copy_action AwsBackupPlan#copy_action}
  */
  readonly copyAction?: CopyActionProperty[] | cdktn.IResolvable;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#lifecycle AwsBackupPlan#lifecycle}
  */
  readonly lifecycle?: RuleLifecycleProperty;
  /**
  * scan_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#scan_action AwsBackupPlan#scan_action}
  */
  readonly scanAction?: ScanActionProperty[] | cdktn.IResolvable;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionWindow = this._completionWindow;
    }
    if (this._enableContinuousBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableContinuousBackup = this._enableContinuousBackup;
    }
    if (this._recoveryPointTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointTags = this._recoveryPointTags;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._scheduleExpressionTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpressionTimezone = this._scheduleExpressionTimezone;
    }
    if (this._startWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWindow = this._startWindow;
    }
    if (this._targetLogicallyAirGappedBackupVaultArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLogicallyAirGappedBackupVaultArn = this._targetLogicallyAirGappedBackupVaultArn;
    }
    if (this._targetVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVaultName = this._targetVaultName;
    }
    if (this._copyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyAction = this._copyAction?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._scanAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAction = this._scanAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionWindow = undefined;
      this._enableContinuousBackup = undefined;
      this._recoveryPointTags = undefined;
      this._ruleName = undefined;
      this._schedule = undefined;
      this._scheduleExpressionTimezone = undefined;
      this._startWindow = undefined;
      this._targetLogicallyAirGappedBackupVaultArn = undefined;
      this._targetVaultName = undefined;
      this._copyAction.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._scanAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionWindow = value.completionWindow;
      this._enableContinuousBackup = value.enableContinuousBackup;
      this._recoveryPointTags = value.recoveryPointTags;
      this._ruleName = value.ruleName;
      this._schedule = value.schedule;
      this._scheduleExpressionTimezone = value.scheduleExpressionTimezone;
      this._startWindow = value.startWindow;
      this._targetLogicallyAirGappedBackupVaultArn = value.targetLogicallyAirGappedBackupVaultArn;
      this._targetVaultName = value.targetVaultName;
      this._copyAction.internalValue = value.copyAction;
      this._lifecycle.internalValue = value.lifecycle;
      this._scanAction.internalValue = value.scanAction;
    }
  }

  // completion_window - computed: false, optional: true, required: false
  private _completionWindow?: number; 
  public get completionWindow() {
    return this.getNumberAttribute('completion_window');
  }
  public set completionWindow(value: number) {
    this._completionWindow = value;
  }
  public resetCompletionWindow() {
    this._completionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionWindowInput() {
    return this._completionWindow;
  }

  // enable_continuous_backup - computed: false, optional: true, required: false
  private _enableContinuousBackup?: boolean | cdktn.IResolvable; 
  public get enableContinuousBackup() {
    return this.getBooleanAttribute('enable_continuous_backup');
  }
  public set enableContinuousBackup(value: boolean | cdktn.IResolvable) {
    this._enableContinuousBackup = value;
  }
  public resetEnableContinuousBackup() {
    this._enableContinuousBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContinuousBackupInput() {
    return this._enableContinuousBackup;
  }

  // recovery_point_tags - computed: false, optional: true, required: false
  private _recoveryPointTags?: { [key: string]: string }; 
  public get recoveryPointTags() {
    return this.getStringMapAttribute('recovery_point_tags');
  }
  public set recoveryPointTags(value: { [key: string]: string }) {
    this._recoveryPointTags = value;
  }
  public resetRecoveryPointTags() {
    this._recoveryPointTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTagsInput() {
    return this._recoveryPointTags;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schedule_expression_timezone - computed: false, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }

  // start_window - computed: false, optional: true, required: false
  private _startWindow?: number; 
  public get startWindow() {
    return this.getNumberAttribute('start_window');
  }
  public set startWindow(value: number) {
    this._startWindow = value;
  }
  public resetStartWindow() {
    this._startWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWindowInput() {
    return this._startWindow;
  }

  // target_logically_air_gapped_backup_vault_arn - computed: false, optional: true, required: false
  private _targetLogicallyAirGappedBackupVaultArn?: string; 
  public get targetLogicallyAirGappedBackupVaultArn() {
    return this.getStringAttribute('target_logically_air_gapped_backup_vault_arn');
  }
  public set targetLogicallyAirGappedBackupVaultArn(value: string) {
    this._targetLogicallyAirGappedBackupVaultArn = value;
  }
  public resetTargetLogicallyAirGappedBackupVaultArn() {
    this._targetLogicallyAirGappedBackupVaultArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLogicallyAirGappedBackupVaultArnInput() {
    return this._targetLogicallyAirGappedBackupVaultArn;
  }

  // target_vault_name - computed: false, optional: false, required: true
  private _targetVaultName?: string; 
  public get targetVaultName() {
    return this.getStringAttribute('target_vault_name');
  }
  public set targetVaultName(value: string) {
    this._targetVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVaultNameInput() {
    return this._targetVaultName;
  }

  // copy_action - computed: false, optional: true, required: false
  private _copyAction = new CopyActionPropertyList(this, "copy_action", true);
  public get copyAction() {
    return this._copyAction;
  }
  public putCopyAction(value: CopyActionProperty[] | cdktn.IResolvable) {
    this._copyAction.internalValue = value;
  }
  public resetCopyAction() {
    this._copyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyActionInput() {
    return this._copyAction.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new RuleLifecyclePropertyOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: RuleLifecycleProperty) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // scan_action - computed: false, optional: true, required: false
  private _scanAction = new ScanActionPropertyList(this, "scan_action", true);
  public get scanAction() {
    return this._scanAction;
  }
  public putScanAction(value: ScanActionProperty[] | cdktn.IResolvable) {
    this._scanAction.internalValue = value;
  }
  public resetScanAction() {
    this._scanAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanActionInput() {
    return this._scanAction.internalValue;
  }
}

export class RulePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleProperty[] | cdktn.IResolvable

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
  public get(index: number): RulePropertyOutputReference {
    return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScanSettingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#malware_scanner AwsBackupPlan#malware_scanner}
  */
  readonly malwareScanner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#resource_types AwsBackupPlan#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/backup_plan#scanner_role_arn AwsBackupPlan#scanner_role_arn}
  */
  readonly scannerRoleArn: string;
}
export class ScanSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScanSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malwareScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareScanner = this._malwareScanner;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._scannerRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannerRoleArn = this._scannerRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScanSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._malwareScanner = undefined;
      this._resourceTypes = undefined;
      this._scannerRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._malwareScanner = value.malwareScanner;
      this._resourceTypes = value.resourceTypes;
      this._scannerRoleArn = value.scannerRoleArn;
    }
  }

  // malware_scanner - computed: false, optional: false, required: true
  private _malwareScanner?: string; 
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }
  public set malwareScanner(value: string) {
    this._malwareScanner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScannerInput() {
    return this._malwareScanner;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // scanner_role_arn - computed: false, optional: false, required: true
  private _scannerRoleArn?: string; 
  public get scannerRoleArn() {
    return this.getStringAttribute('scanner_role_arn');
  }
  public set scannerRoleArn(value: string) {
    this._scannerRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerRoleArnInput() {
    return this._scannerRoleArn;
  }
}

export class ScanSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : ScanSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): ScanSettingPropertyOutputReference {
    return new ScanSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
