// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsObservabilityadminCentralizationRuleForOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region AwsObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#rule_name AwsObservabilityadminCentralizationRuleForOrganization#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tags AwsObservabilityadminCentralizationRuleForOrganization#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#rule AwsObservabilityadminCentralizationRuleForOrganization#rule}
  */
  readonly rule?: AwsObservabilityadminCentralizationRuleForOrganization.RuleProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#timeouts AwsObservabilityadminCentralizationRuleForOrganization#timeouts}
  */
  readonly timeouts?: AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization aws_observabilityadmin_centralization_rule_for_organization}
*/
export class AwsObservabilityadminCentralizationRuleForOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_observabilityadmin_centralization_rule_for_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsObservabilityadminCentralizationRuleForOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsObservabilityadminCentralizationRuleForOrganization to import
  * @param importFromId The id of the existing AwsObservabilityadminCentralizationRuleForOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsObservabilityadminCentralizationRuleForOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_observabilityadmin_centralization_rule_for_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization aws_observabilityadmin_centralization_rule_for_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsObservabilityadminCentralizationRuleForOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsObservabilityadminCentralizationRuleForOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_observabilityadmin_centralization_rule_for_organization',
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
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._tags = config.tags;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
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

  // tag_propagation_failure_reason - computed: true, optional: false, required: false
  public get tagPropagationFailureReason() {
    return this.getStringAttribute('tag_propagation_failure_reason');
  }

  // tag_propagation_status - computed: true, optional: false, required: false
  public get tagPropagationStatus() {
    return this.getStringAttribute('tag_propagation_status');
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

  // rule - computed: false, optional: true, required: false
  private _rule = new AwsObservabilityadminCentralizationRuleForOrganization.RulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AwsObservabilityadminCentralizationRuleForOrganization.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsProperty) {
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
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      rule: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationRulePropertyToTerraform, true)(this._rule.internalValue),
      timeouts: awsObservabilityadminCentralizationRuleForOrganizationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsObservabilityadminCentralizationRuleForOrganization.RulePropertyList",
      },
      timeouts: {
        value: awsObservabilityadminCentralizationRuleForOrganizationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsObservabilityadminCentralizationRuleForOrganizationLogGroupNameConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.LogGroupNameConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_name_pattern: cdktn.stringToTerraform(struct!.logGroupNamePattern),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationLogGroupNameConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.LogGroupNameConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_name_pattern: {
      value: cdktn.stringToHclTerraform(struct!.logGroupNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationLogsEncryptionConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.LogsEncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.encryptionConflictResolutionStrategy),
    encryption_scope: cdktn.stringToTerraform(struct!.encryptionScope),
    encryption_strategy: cdktn.stringToTerraform(struct!.encryptionStrategy),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationLogsEncryptionConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.LogsEncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_conflict_resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionConflictResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_scope: {
      value: cdktn.stringToHclTerraform(struct!.encryptionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationTagPropagationConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.TagPropagationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_role_arn: cdktn.stringToTerraform(struct!.destinationRoleArn),
    tag_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.tagConflictResolutionStrategy),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationTagPropagationConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.TagPropagationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_conflict_resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.tagConflictResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationLogsConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyToTerraform, true)(struct!.backupConfiguration),
    log_group_name_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationLogGroupNameConfigurationPropertyToTerraform, true)(struct!.logGroupNameConfiguration),
    logs_encryption_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationLogsEncryptionConfigurationPropertyToTerraform, true)(struct!.logsEncryptionConfiguration),
    tag_propagation_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationTagPropagationConfigurationPropertyToTerraform, true)(struct!.tagPropagationConfiguration),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationLogsConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyToHclTerraform, true)(struct!.backupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyList",
    },
    log_group_name_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationLogGroupNameConfigurationPropertyToHclTerraform, true)(struct!.logGroupNameConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LogGroupNameConfigurationPropertyList",
    },
    logs_encryption_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationLogsEncryptionConfigurationPropertyToHclTerraform, true)(struct!.logsEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LogsEncryptionConfigurationPropertyList",
    },
    tag_propagation_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationTagPropagationConfigurationPropertyToHclTerraform, true)(struct!.tagPropagationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TagPropagationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationMetricsConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationMetricsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyToTerraform, true)(struct!.backupConfiguration),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationMetricsConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationMetricsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyToHclTerraform, true)(struct!.backupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.stringToTerraform(struct!.account),
    region: cdktn.stringToTerraform(struct!.region),
    destination_logs_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationDestinationLogsConfigurationPropertyToTerraform, true)(struct!.destinationLogsConfiguration),
    destination_metrics_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationDestinationMetricsConfigurationPropertyToTerraform, true)(struct!.destinationMetricsConfiguration),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationDestinationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_logs_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationDestinationLogsConfigurationPropertyToHclTerraform, true)(struct!.destinationLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationLogsConfigurationPropertyList",
    },
    destination_metrics_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationDestinationMetricsConfigurationPropertyToHclTerraform, true)(struct!.destinationMetricsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationMetricsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourceLogsConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_selection_criteria: cdktn.stringToTerraform(struct!.dataSourceSelectionCriteria),
    encrypted_log_group_strategy: cdktn.stringToTerraform(struct!.encryptedLogGroupStrategy),
    log_group_selection_criteria: cdktn.stringToTerraform(struct!.logGroupSelectionCriteria),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourceLogsConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceLogsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_log_group_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptedLogGroupStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.logGroupSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourceMetricsConfigurationPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceMetricsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_selection_criteria: cdktn.stringToTerraform(struct!.metricsSelectionCriteria),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourceMetricsConfigurationPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceMetricsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.metricsSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourcePropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    scope: cdktn.stringToTerraform(struct!.scope),
    source_logs_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationSourceLogsConfigurationPropertyToTerraform, true)(struct!.sourceLogsConfiguration),
    source_metrics_configuration: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationSourceMetricsConfigurationPropertyToTerraform, true)(struct!.sourceMetricsConfiguration),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationSourcePropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_logs_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationSourceLogsConfigurationPropertyToHclTerraform, true)(struct!.sourceLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SourceLogsConfigurationPropertyList",
    },
    source_metrics_configuration: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationSourceMetricsConfigurationPropertyToHclTerraform, true)(struct!.sourceMetricsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SourceMetricsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationRulePropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationDestinationPropertyToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(awsObservabilityadminCentralizationRuleForOrganizationSourcePropertyToTerraform, true)(struct!.source),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationRulePropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationDestinationPropertyToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationPropertyList",
    },
    source: {
      value: cdktn.listMapperHcl(awsObservabilityadminCentralizationRuleForOrganizationSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "SourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsObservabilityadminCentralizationRuleForOrganizationTimeoutsPropertyToTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsObservabilityadminCentralizationRuleForOrganizationTimeoutsPropertyToHclTerraform(struct?: AwsObservabilityadminCentralizationRuleForOrganization.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsObservabilityadminCentralizationRuleForOrganization {
export interface RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#kms_key_arn AwsObservabilityadminCentralizationRuleForOrganization#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region AwsObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region?: string;
}
export class RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._region = value.region;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // region - computed: false, optional: true, required: false
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
}

export class RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyOutputReference {
    return new RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogGroupNameConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_name_pattern AwsObservabilityadminCentralizationRuleForOrganization#log_group_name_pattern}
  */
  readonly logGroupNamePattern: string;
}
export class LogGroupNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogGroupNameConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNamePattern = this._logGroupNamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogGroupNameConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = value.logGroupNamePattern;
    }
  }

  // log_group_name_pattern - computed: false, optional: false, required: true
  private _logGroupNamePattern?: string; 
  public get logGroupNamePattern() {
    return this.getStringAttribute('log_group_name_pattern');
  }
  public set logGroupNamePattern(value: string) {
    this._logGroupNamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamePatternInput() {
    return this._logGroupNamePattern;
  }
}

export class LogGroupNameConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : LogGroupNameConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): LogGroupNameConfigurationPropertyOutputReference {
    return new LogGroupNameConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsEncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_conflict_resolution_strategy AwsObservabilityadminCentralizationRuleForOrganization#encryption_conflict_resolution_strategy}
  */
  readonly encryptionConflictResolutionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_scope AwsObservabilityadminCentralizationRuleForOrganization#encryption_scope}
  */
  readonly encryptionScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_strategy AwsObservabilityadminCentralizationRuleForOrganization#encryption_strategy}
  */
  readonly encryptionStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#kms_key_arn AwsObservabilityadminCentralizationRuleForOrganization#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class LogsEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogsEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConflictResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConflictResolutionStrategy = this._encryptionConflictResolutionStrategy;
    }
    if (this._encryptionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionScope = this._encryptionScope;
    }
    if (this._encryptionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionStrategy = this._encryptionStrategy;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = undefined;
      this._encryptionScope = undefined;
      this._encryptionStrategy = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = value.encryptionConflictResolutionStrategy;
      this._encryptionScope = value.encryptionScope;
      this._encryptionStrategy = value.encryptionStrategy;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_conflict_resolution_strategy - computed: false, optional: true, required: false
  private _encryptionConflictResolutionStrategy?: string; 
  public get encryptionConflictResolutionStrategy() {
    return this.getStringAttribute('encryption_conflict_resolution_strategy');
  }
  public set encryptionConflictResolutionStrategy(value: string) {
    this._encryptionConflictResolutionStrategy = value;
  }
  public resetEncryptionConflictResolutionStrategy() {
    this._encryptionConflictResolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConflictResolutionStrategyInput() {
    return this._encryptionConflictResolutionStrategy;
  }

  // encryption_scope - computed: true, optional: true, required: false
  private _encryptionScope?: string; 
  public get encryptionScope() {
    return this.getStringAttribute('encryption_scope');
  }
  public set encryptionScope(value: string) {
    this._encryptionScope = value;
  }
  public resetEncryptionScope() {
    this._encryptionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionScopeInput() {
    return this._encryptionScope;
  }

  // encryption_strategy - computed: false, optional: false, required: true
  private _encryptionStrategy?: string; 
  public get encryptionStrategy() {
    return this.getStringAttribute('encryption_strategy');
  }
  public set encryptionStrategy(value: string) {
    this._encryptionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStrategyInput() {
    return this._encryptionStrategy;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class LogsEncryptionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : LogsEncryptionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): LogsEncryptionConfigurationPropertyOutputReference {
    return new LogsEncryptionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagPropagationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_role_arn AwsObservabilityadminCentralizationRuleForOrganization#destination_role_arn}
  */
  readonly destinationRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tag_conflict_resolution_strategy AwsObservabilityadminCentralizationRuleForOrganization#tag_conflict_resolution_strategy}
  */
  readonly tagConflictResolutionStrategy?: string;
}
export class TagPropagationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagPropagationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRoleArn = this._destinationRoleArn;
    }
    if (this._tagConflictResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagConflictResolutionStrategy = this._tagConflictResolutionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPropagationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationRoleArn = undefined;
      this._tagConflictResolutionStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationRoleArn = value.destinationRoleArn;
      this._tagConflictResolutionStrategy = value.tagConflictResolutionStrategy;
    }
  }

  // destination_role_arn - computed: false, optional: false, required: true
  private _destinationRoleArn?: string; 
  public get destinationRoleArn() {
    return this.getStringAttribute('destination_role_arn');
  }
  public set destinationRoleArn(value: string) {
    this._destinationRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRoleArnInput() {
    return this._destinationRoleArn;
  }

  // tag_conflict_resolution_strategy - computed: false, optional: true, required: false
  private _tagConflictResolutionStrategy?: string; 
  public get tagConflictResolutionStrategy() {
    return this.getStringAttribute('tag_conflict_resolution_strategy');
  }
  public set tagConflictResolutionStrategy(value: string) {
    this._tagConflictResolutionStrategy = value;
  }
  public resetTagConflictResolutionStrategy() {
    this._tagConflictResolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConflictResolutionStrategyInput() {
    return this._tagConflictResolutionStrategy;
  }
}

export class TagPropagationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TagPropagationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TagPropagationConfigurationPropertyOutputReference {
    return new TagPropagationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationLogsConfigurationProperty {
  /**
  * backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#backup_configuration AwsObservabilityadminCentralizationRuleForOrganization#backup_configuration}
  */
  readonly backupConfiguration?: RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable;
  /**
  * log_group_name_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_name_configuration AwsObservabilityadminCentralizationRuleForOrganization#log_group_name_configuration}
  */
  readonly logGroupNameConfiguration?: LogGroupNameConfigurationProperty[] | cdktn.IResolvable;
  /**
  * logs_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#logs_encryption_configuration AwsObservabilityadminCentralizationRuleForOrganization#logs_encryption_configuration}
  */
  readonly logsEncryptionConfiguration?: LogsEncryptionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * tag_propagation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tag_propagation_configuration AwsObservabilityadminCentralizationRuleForOrganization#tag_propagation_configuration}
  */
  readonly tagPropagationConfiguration?: TagPropagationConfigurationProperty[] | cdktn.IResolvable;
}
export class DestinationLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationLogsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    if (this._logGroupNameConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNameConfiguration = this._logGroupNameConfiguration?.internalValue;
    }
    if (this._logsEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsEncryptionConfiguration = this._logsEncryptionConfiguration?.internalValue;
    }
    if (this._tagPropagationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPropagationConfiguration = this._tagPropagationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationLogsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
      this._logGroupNameConfiguration.internalValue = undefined;
      this._logsEncryptionConfiguration.internalValue = undefined;
      this._tagPropagationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
      this._logGroupNameConfiguration.internalValue = value.logGroupNameConfiguration;
      this._logsEncryptionConfiguration.internalValue = value.logsEncryptionConfiguration;
      this._tagPropagationConfiguration.internalValue = value.tagPropagationConfiguration;
    }
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new RuleDestinationDestinationLogsConfigurationBackupConfigurationPropertyList(this, "backup_configuration", false);
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: RuleDestinationDestinationLogsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // log_group_name_configuration - computed: false, optional: true, required: false
  private _logGroupNameConfiguration = new LogGroupNameConfigurationPropertyList(this, "log_group_name_configuration", false);
  public get logGroupNameConfiguration() {
    return this._logGroupNameConfiguration;
  }
  public putLogGroupNameConfiguration(value: LogGroupNameConfigurationProperty[] | cdktn.IResolvable) {
    this._logGroupNameConfiguration.internalValue = value;
  }
  public resetLogGroupNameConfiguration() {
    this._logGroupNameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameConfigurationInput() {
    return this._logGroupNameConfiguration.internalValue;
  }

  // logs_encryption_configuration - computed: false, optional: true, required: false
  private _logsEncryptionConfiguration = new LogsEncryptionConfigurationPropertyList(this, "logs_encryption_configuration", false);
  public get logsEncryptionConfiguration() {
    return this._logsEncryptionConfiguration;
  }
  public putLogsEncryptionConfiguration(value: LogsEncryptionConfigurationProperty[] | cdktn.IResolvable) {
    this._logsEncryptionConfiguration.internalValue = value;
  }
  public resetLogsEncryptionConfiguration() {
    this._logsEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsEncryptionConfigurationInput() {
    return this._logsEncryptionConfiguration.internalValue;
  }

  // tag_propagation_configuration - computed: false, optional: true, required: false
  private _tagPropagationConfiguration = new TagPropagationConfigurationPropertyList(this, "tag_propagation_configuration", false);
  public get tagPropagationConfiguration() {
    return this._tagPropagationConfiguration;
  }
  public putTagPropagationConfiguration(value: TagPropagationConfigurationProperty[] | cdktn.IResolvable) {
    this._tagPropagationConfiguration.internalValue = value;
  }
  public resetTagPropagationConfiguration() {
    this._tagPropagationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPropagationConfigurationInput() {
    return this._tagPropagationConfiguration.internalValue;
  }
}

export class DestinationLogsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationLogsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationLogsConfigurationPropertyOutputReference {
    return new DestinationLogsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region AwsObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region: string;
}
export class RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
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

export class RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyOutputReference {
    return new RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationMetricsConfigurationProperty {
  /**
  * backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#backup_configuration AwsObservabilityadminCentralizationRuleForOrganization#backup_configuration}
  */
  readonly backupConfiguration?: RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable;
}
export class DestinationMetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationMetricsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMetricsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
    }
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new RuleDestinationDestinationMetricsConfigurationBackupConfigurationPropertyList(this, "backup_configuration", false);
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: RuleDestinationDestinationMetricsConfigurationBackupConfigurationProperty[] | cdktn.IResolvable) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }
}

export class DestinationMetricsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationMetricsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationMetricsConfigurationPropertyOutputReference {
    return new DestinationMetricsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#account AwsObservabilityadminCentralizationRuleForOrganization#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region AwsObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region: string;
  /**
  * destination_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_logs_configuration AwsObservabilityadminCentralizationRuleForOrganization#destination_logs_configuration}
  */
  readonly destinationLogsConfiguration?: DestinationLogsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * destination_metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_metrics_configuration AwsObservabilityadminCentralizationRuleForOrganization#destination_metrics_configuration}
  */
  readonly destinationMetricsConfiguration?: DestinationMetricsConfigurationProperty[] | cdktn.IResolvable;
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
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._destinationLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLogsConfiguration = this._destinationLogsConfiguration?.internalValue;
    }
    if (this._destinationMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMetricsConfiguration = this._destinationMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._region = undefined;
      this._destinationLogsConfiguration.internalValue = undefined;
      this._destinationMetricsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._region = value.region;
      this._destinationLogsConfiguration.internalValue = value.destinationLogsConfiguration;
      this._destinationMetricsConfiguration.internalValue = value.destinationMetricsConfiguration;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
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

  // destination_logs_configuration - computed: false, optional: true, required: false
  private _destinationLogsConfiguration = new DestinationLogsConfigurationPropertyList(this, "destination_logs_configuration", false);
  public get destinationLogsConfiguration() {
    return this._destinationLogsConfiguration;
  }
  public putDestinationLogsConfiguration(value: DestinationLogsConfigurationProperty[] | cdktn.IResolvable) {
    this._destinationLogsConfiguration.internalValue = value;
  }
  public resetDestinationLogsConfiguration() {
    this._destinationLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLogsConfigurationInput() {
    return this._destinationLogsConfiguration.internalValue;
  }

  // destination_metrics_configuration - computed: false, optional: true, required: false
  private _destinationMetricsConfiguration = new DestinationMetricsConfigurationPropertyList(this, "destination_metrics_configuration", false);
  public get destinationMetricsConfiguration() {
    return this._destinationMetricsConfiguration;
  }
  public putDestinationMetricsConfiguration(value: DestinationMetricsConfigurationProperty[] | cdktn.IResolvable) {
    this._destinationMetricsConfiguration.internalValue = value;
  }
  public resetDestinationMetricsConfiguration() {
    this._destinationMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMetricsConfigurationInput() {
    return this._destinationMetricsConfiguration.internalValue;
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
export interface SourceLogsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#data_source_selection_criteria AwsObservabilityadminCentralizationRuleForOrganization#data_source_selection_criteria}
  */
  readonly dataSourceSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encrypted_log_group_strategy AwsObservabilityadminCentralizationRuleForOrganization#encrypted_log_group_strategy}
  */
  readonly encryptedLogGroupStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_selection_criteria AwsObservabilityadminCentralizationRuleForOrganization#log_group_selection_criteria}
  */
  readonly logGroupSelectionCriteria?: string;
}
export class SourceLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceLogsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceSelectionCriteria = this._dataSourceSelectionCriteria;
    }
    if (this._encryptedLogGroupStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedLogGroupStrategy = this._encryptedLogGroupStrategy;
    }
    if (this._logGroupSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupSelectionCriteria = this._logGroupSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLogsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = undefined;
      this._encryptedLogGroupStrategy = undefined;
      this._logGroupSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = value.dataSourceSelectionCriteria;
      this._encryptedLogGroupStrategy = value.encryptedLogGroupStrategy;
      this._logGroupSelectionCriteria = value.logGroupSelectionCriteria;
    }
  }

  // data_source_selection_criteria - computed: true, optional: true, required: false
  private _dataSourceSelectionCriteria?: string; 
  public get dataSourceSelectionCriteria() {
    return this.getStringAttribute('data_source_selection_criteria');
  }
  public set dataSourceSelectionCriteria(value: string) {
    this._dataSourceSelectionCriteria = value;
  }
  public resetDataSourceSelectionCriteria() {
    this._dataSourceSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceSelectionCriteriaInput() {
    return this._dataSourceSelectionCriteria;
  }

  // encrypted_log_group_strategy - computed: false, optional: false, required: true
  private _encryptedLogGroupStrategy?: string; 
  public get encryptedLogGroupStrategy() {
    return this.getStringAttribute('encrypted_log_group_strategy');
  }
  public set encryptedLogGroupStrategy(value: string) {
    this._encryptedLogGroupStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLogGroupStrategyInput() {
    return this._encryptedLogGroupStrategy;
  }

  // log_group_selection_criteria - computed: true, optional: true, required: false
  private _logGroupSelectionCriteria?: string; 
  public get logGroupSelectionCriteria() {
    return this.getStringAttribute('log_group_selection_criteria');
  }
  public set logGroupSelectionCriteria(value: string) {
    this._logGroupSelectionCriteria = value;
  }
  public resetLogGroupSelectionCriteria() {
    this._logGroupSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupSelectionCriteriaInput() {
    return this._logGroupSelectionCriteria;
  }
}

export class SourceLogsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceLogsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceLogsConfigurationPropertyOutputReference {
    return new SourceLogsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMetricsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#metrics_selection_criteria AwsObservabilityadminCentralizationRuleForOrganization#metrics_selection_criteria}
  */
  readonly metricsSelectionCriteria: string;
}
export class SourceMetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceMetricsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsSelectionCriteria = this._metricsSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMetricsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = value.metricsSelectionCriteria;
    }
  }

  // metrics_selection_criteria - computed: false, optional: false, required: true
  private _metricsSelectionCriteria?: string; 
  public get metricsSelectionCriteria() {
    return this.getStringAttribute('metrics_selection_criteria');
  }
  public set metricsSelectionCriteria(value: string) {
    this._metricsSelectionCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsSelectionCriteriaInput() {
    return this._metricsSelectionCriteria;
  }
}

export class SourceMetricsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceMetricsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceMetricsConfigurationPropertyOutputReference {
    return new SourceMetricsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#regions AwsObservabilityadminCentralizationRuleForOrganization#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#scope AwsObservabilityadminCentralizationRuleForOrganization#scope}
  */
  readonly scope: string;
  /**
  * source_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source_logs_configuration AwsObservabilityadminCentralizationRuleForOrganization#source_logs_configuration}
  */
  readonly sourceLogsConfiguration?: SourceLogsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * source_metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source_metrics_configuration AwsObservabilityadminCentralizationRuleForOrganization#source_metrics_configuration}
  */
  readonly sourceMetricsConfiguration?: SourceMetricsConfigurationProperty[] | cdktn.IResolvable;
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
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sourceLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLogsConfiguration = this._sourceLogsConfiguration?.internalValue;
    }
    if (this._sourceMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetricsConfiguration = this._sourceMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regions = undefined;
      this._scope = undefined;
      this._sourceLogsConfiguration.internalValue = undefined;
      this._sourceMetricsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regions = value.regions;
      this._scope = value.scope;
      this._sourceLogsConfiguration.internalValue = value.sourceLogsConfiguration;
      this._sourceMetricsConfiguration.internalValue = value.sourceMetricsConfiguration;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source_logs_configuration - computed: false, optional: true, required: false
  private _sourceLogsConfiguration = new SourceLogsConfigurationPropertyList(this, "source_logs_configuration", false);
  public get sourceLogsConfiguration() {
    return this._sourceLogsConfiguration;
  }
  public putSourceLogsConfiguration(value: SourceLogsConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceLogsConfiguration.internalValue = value;
  }
  public resetSourceLogsConfiguration() {
    this._sourceLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLogsConfigurationInput() {
    return this._sourceLogsConfiguration.internalValue;
  }

  // source_metrics_configuration - computed: false, optional: true, required: false
  private _sourceMetricsConfiguration = new SourceMetricsConfigurationPropertyList(this, "source_metrics_configuration", false);
  public get sourceMetricsConfiguration() {
    return this._sourceMetricsConfiguration;
  }
  public putSourceMetricsConfiguration(value: SourceMetricsConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceMetricsConfiguration.internalValue = value;
  }
  public resetSourceMetricsConfiguration() {
    this._sourceMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetricsConfigurationInput() {
    return this._sourceMetricsConfiguration.internalValue;
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
export interface RuleProperty {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination AwsObservabilityadminCentralizationRuleForOrganization#destination}
  */
  readonly destination?: DestinationProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source AwsObservabilityadminCentralizationRuleForOrganization#source}
  */
  readonly source?: SourceProperty[] | cdktn.IResolvable;
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
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DestinationPropertyList(this, "destination", false);
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

  // source - computed: false, optional: true, required: false
  private _source = new SourcePropertyList(this, "source", false);
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
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#create AwsObservabilityadminCentralizationRuleForOrganization#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#update AwsObservabilityadminCentralizationRuleForOrganization#update}
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
