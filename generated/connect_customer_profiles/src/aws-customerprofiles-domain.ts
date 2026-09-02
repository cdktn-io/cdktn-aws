// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#dead_letter_queue_url TfDomain#dead_letter_queue_url}
  */
  readonly deadLetterQueueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#default_encryption_key TfDomain#default_encryption_key}
  */
  readonly defaultEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#default_expiration_days TfDomain#default_expiration_days}
  */
  readonly defaultExpirationDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#domain_name TfDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#id TfDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#region TfDomain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#tags TfDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#tags_all TfDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * matching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#matching TfDomain#matching}
  */
  readonly matching?: TfDomain.MatchingProperty;
  /**
  * rule_based_matching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#rule_based_matching TfDomain#rule_based_matching}
  */
  readonly ruleBasedMatching?: TfDomain.RuleBasedMatchingProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}
*/
export class TfDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_customerprofiles_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDomain to import
  * @param importFromId The id of the existing TfDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_customerprofiles_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDomainConfig
  */
  public constructor(scope: Construct, id: string, config: TfDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_customerprofiles_domain',
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
    this._deadLetterQueueUrl = config.deadLetterQueueUrl;
    this._defaultEncryptionKey = config.defaultEncryptionKey;
    this._defaultExpirationDays = config.defaultExpirationDays;
    this._domainName = config.domainName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._matching.internalValue = config.matching;
    this._ruleBasedMatching.internalValue = config.ruleBasedMatching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dead_letter_queue_url - computed: false, optional: true, required: false
  private _deadLetterQueueUrl?: string; 
  public get deadLetterQueueUrl() {
    return this.getStringAttribute('dead_letter_queue_url');
  }
  public set deadLetterQueueUrl(value: string) {
    this._deadLetterQueueUrl = value;
  }
  public resetDeadLetterQueueUrl() {
    this._deadLetterQueueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueUrlInput() {
    return this._deadLetterQueueUrl;
  }

  // default_encryption_key - computed: false, optional: true, required: false
  private _defaultEncryptionKey?: string; 
  public get defaultEncryptionKey() {
    return this.getStringAttribute('default_encryption_key');
  }
  public set defaultEncryptionKey(value: string) {
    this._defaultEncryptionKey = value;
  }
  public resetDefaultEncryptionKey() {
    this._defaultEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionKeyInput() {
    return this._defaultEncryptionKey;
  }

  // default_expiration_days - computed: false, optional: false, required: true
  private _defaultExpirationDays?: number; 
  public get defaultExpirationDays() {
    return this.getNumberAttribute('default_expiration_days');
  }
  public set defaultExpirationDays(value: number) {
    this._defaultExpirationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationDaysInput() {
    return this._defaultExpirationDays;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // matching - computed: false, optional: true, required: false
  private _matching = new TfDomain.MatchingPropertyOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: TfDomain.MatchingProperty) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
  }

  // rule_based_matching - computed: false, optional: true, required: false
  private _ruleBasedMatching = new TfDomain.RuleBasedMatchingPropertyOutputReference(this, "rule_based_matching");
  public get ruleBasedMatching() {
    return this._ruleBasedMatching;
  }
  public putRuleBasedMatching(value: TfDomain.RuleBasedMatchingProperty) {
    this._ruleBasedMatching.internalValue = value;
  }
  public resetRuleBasedMatching() {
    this._ruleBasedMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleBasedMatchingInput() {
    return this._ruleBasedMatching.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dead_letter_queue_url: cdktn.stringToTerraform(this._deadLetterQueueUrl),
      default_encryption_key: cdktn.stringToTerraform(this._defaultEncryptionKey),
      default_expiration_days: cdktn.numberToTerraform(this._defaultExpirationDays),
      domain_name: cdktn.stringToTerraform(this._domainName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      matching: tfDomainMatchingPropertyToTerraform(this._matching.internalValue),
      rule_based_matching: tfDomainRuleBasedMatchingPropertyToTerraform(this._ruleBasedMatching.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dead_letter_queue_url: {
        value: cdktn.stringToHclTerraform(this._deadLetterQueueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_encryption_key: {
        value: cdktn.stringToHclTerraform(this._defaultEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_expiration_days: {
        value: cdktn.numberToHclTerraform(this._defaultExpirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
      matching: {
        value: tfDomainMatchingPropertyToHclTerraform(this._matching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDomain.MatchingPropertyList",
      },
      rule_based_matching: {
        value: tfDomainRuleBasedMatchingPropertyToHclTerraform(this._ruleBasedMatching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDomain.RuleBasedMatchingPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDomainMatchingAutoMergingConflictResolutionPropertyToTerraform(struct?: TfDomain.MatchingAutoMergingConflictResolutionPropertyOutputReference | TfDomain.MatchingAutoMergingConflictResolutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_resolving_model: cdktn.stringToTerraform(struct!.conflictResolvingModel),
    source_name: cdktn.stringToTerraform(struct!.sourceName),
  }
}


export function tfDomainMatchingAutoMergingConflictResolutionPropertyToHclTerraform(struct?: TfDomain.MatchingAutoMergingConflictResolutionPropertyOutputReference | TfDomain.MatchingAutoMergingConflictResolutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_resolving_model: {
      value: cdktn.stringToHclTerraform(struct!.conflictResolvingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainConsolidationPropertyToTerraform(struct?: TfDomain.ConsolidationPropertyOutputReference | TfDomain.ConsolidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_attributes_list: cdktn.listMapper(cdktn.listMapper(cdktn.stringToTerraform, false), false)(struct!.matchingAttributesList),
  }
}


export function tfDomainConsolidationPropertyToHclTerraform(struct?: TfDomain.ConsolidationPropertyOutputReference | TfDomain.ConsolidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_attributes_list: {
      value: cdktn.listMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false), false)(struct!.matchingAttributesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainAutoMergingPropertyToTerraform(struct?: TfDomain.AutoMergingPropertyOutputReference | TfDomain.AutoMergingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    min_allowed_confidence_score_for_merging: cdktn.numberToTerraform(struct!.minAllowedConfidenceScoreForMerging),
    conflict_resolution: tfDomainMatchingAutoMergingConflictResolutionPropertyToTerraform(struct!.conflictResolution),
    consolidation: tfDomainConsolidationPropertyToTerraform(struct!.consolidation),
  }
}


export function tfDomainAutoMergingPropertyToHclTerraform(struct?: TfDomain.AutoMergingPropertyOutputReference | TfDomain.AutoMergingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_allowed_confidence_score_for_merging: {
      value: cdktn.numberToHclTerraform(struct!.minAllowedConfidenceScoreForMerging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conflict_resolution: {
      value: tfDomainMatchingAutoMergingConflictResolutionPropertyToHclTerraform(struct!.conflictResolution),
      isBlock: true,
      type: "list",
      storageClassType: "MatchingAutoMergingConflictResolutionPropertyList",
    },
    consolidation: {
      value: tfDomainConsolidationPropertyToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "list",
      storageClassType: "ConsolidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainMatchingExportingConfigS3ExportingPropertyToTerraform(struct?: TfDomain.MatchingExportingConfigS3ExportingPropertyOutputReference | TfDomain.MatchingExportingConfigS3ExportingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_key_name: cdktn.stringToTerraform(struct!.s3KeyName),
  }
}


export function tfDomainMatchingExportingConfigS3ExportingPropertyToHclTerraform(struct?: TfDomain.MatchingExportingConfigS3ExportingPropertyOutputReference | TfDomain.MatchingExportingConfigS3ExportingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_name: {
      value: cdktn.stringToHclTerraform(struct!.s3KeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainMatchingExportingConfigPropertyToTerraform(struct?: TfDomain.MatchingExportingConfigPropertyOutputReference | TfDomain.MatchingExportingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_exporting: tfDomainMatchingExportingConfigS3ExportingPropertyToTerraform(struct!.s3Exporting),
  }
}


export function tfDomainMatchingExportingConfigPropertyToHclTerraform(struct?: TfDomain.MatchingExportingConfigPropertyOutputReference | TfDomain.MatchingExportingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_exporting: {
      value: tfDomainMatchingExportingConfigS3ExportingPropertyToHclTerraform(struct!.s3Exporting),
      isBlock: true,
      type: "list",
      storageClassType: "MatchingExportingConfigS3ExportingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainJobSchedulePropertyToTerraform(struct?: TfDomain.JobSchedulePropertyOutputReference | TfDomain.JobScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_the_week: cdktn.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function tfDomainJobSchedulePropertyToHclTerraform(struct?: TfDomain.JobSchedulePropertyOutputReference | TfDomain.JobScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_the_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfTheWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainMatchingPropertyToTerraform(struct?: TfDomain.MatchingPropertyOutputReference | TfDomain.MatchingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    auto_merging: tfDomainAutoMergingPropertyToTerraform(struct!.autoMerging),
    exporting_config: tfDomainMatchingExportingConfigPropertyToTerraform(struct!.exportingConfig),
    job_schedule: tfDomainJobSchedulePropertyToTerraform(struct!.jobSchedule),
  }
}


export function tfDomainMatchingPropertyToHclTerraform(struct?: TfDomain.MatchingPropertyOutputReference | TfDomain.MatchingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_merging: {
      value: tfDomainAutoMergingPropertyToHclTerraform(struct!.autoMerging),
      isBlock: true,
      type: "list",
      storageClassType: "AutoMergingPropertyList",
    },
    exporting_config: {
      value: tfDomainMatchingExportingConfigPropertyToHclTerraform(struct!.exportingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MatchingExportingConfigPropertyList",
    },
    job_schedule: {
      value: tfDomainJobSchedulePropertyToHclTerraform(struct!.jobSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "JobSchedulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainAttributeTypesSelectorPropertyToTerraform(struct?: TfDomain.AttributeTypesSelectorPropertyOutputReference | TfDomain.AttributeTypesSelectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.address),
    attribute_matching_model: cdktn.stringToTerraform(struct!.attributeMatchingModel),
    email_address: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.emailAddress),
    phone_number: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.phoneNumber),
  }
}


export function tfDomainAttributeTypesSelectorPropertyToHclTerraform(struct?: TfDomain.AttributeTypesSelectorPropertyOutputReference | TfDomain.AttributeTypesSelectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute_matching_model: {
      value: cdktn.stringToHclTerraform(struct!.attributeMatchingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.emailAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phone_number: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.phoneNumber),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainRuleBasedMatchingConflictResolutionPropertyToTerraform(struct?: TfDomain.RuleBasedMatchingConflictResolutionPropertyOutputReference | TfDomain.RuleBasedMatchingConflictResolutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_resolving_model: cdktn.stringToTerraform(struct!.conflictResolvingModel),
    source_name: cdktn.stringToTerraform(struct!.sourceName),
  }
}


export function tfDomainRuleBasedMatchingConflictResolutionPropertyToHclTerraform(struct?: TfDomain.RuleBasedMatchingConflictResolutionPropertyOutputReference | TfDomain.RuleBasedMatchingConflictResolutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_resolving_model: {
      value: cdktn.stringToHclTerraform(struct!.conflictResolvingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainRuleBasedMatchingExportingConfigS3ExportingPropertyToTerraform(struct?: TfDomain.RuleBasedMatchingExportingConfigS3ExportingPropertyOutputReference | TfDomain.RuleBasedMatchingExportingConfigS3ExportingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_key_name: cdktn.stringToTerraform(struct!.s3KeyName),
  }
}


export function tfDomainRuleBasedMatchingExportingConfigS3ExportingPropertyToHclTerraform(struct?: TfDomain.RuleBasedMatchingExportingConfigS3ExportingPropertyOutputReference | TfDomain.RuleBasedMatchingExportingConfigS3ExportingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_name: {
      value: cdktn.stringToHclTerraform(struct!.s3KeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainRuleBasedMatchingExportingConfigPropertyToTerraform(struct?: TfDomain.RuleBasedMatchingExportingConfigPropertyOutputReference | TfDomain.RuleBasedMatchingExportingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_exporting: tfDomainRuleBasedMatchingExportingConfigS3ExportingPropertyToTerraform(struct!.s3Exporting),
  }
}


export function tfDomainRuleBasedMatchingExportingConfigPropertyToHclTerraform(struct?: TfDomain.RuleBasedMatchingExportingConfigPropertyOutputReference | TfDomain.RuleBasedMatchingExportingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_exporting: {
      value: tfDomainRuleBasedMatchingExportingConfigS3ExportingPropertyToHclTerraform(struct!.s3Exporting),
      isBlock: true,
      type: "list",
      storageClassType: "RuleBasedMatchingExportingConfigS3ExportingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainMatchingRulesPropertyToTerraform(struct?: TfDomain.MatchingRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rule),
  }
}


export function tfDomainMatchingRulesPropertyToHclTerraform(struct?: TfDomain.MatchingRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainRuleBasedMatchingPropertyToTerraform(struct?: TfDomain.RuleBasedMatchingPropertyOutputReference | TfDomain.RuleBasedMatchingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    max_allowed_rule_level_for_matching: cdktn.numberToTerraform(struct!.maxAllowedRuleLevelForMatching),
    max_allowed_rule_level_for_merging: cdktn.numberToTerraform(struct!.maxAllowedRuleLevelForMerging),
    status: cdktn.stringToTerraform(struct!.status),
    attribute_types_selector: tfDomainAttributeTypesSelectorPropertyToTerraform(struct!.attributeTypesSelector),
    conflict_resolution: tfDomainRuleBasedMatchingConflictResolutionPropertyToTerraform(struct!.conflictResolution),
    exporting_config: tfDomainRuleBasedMatchingExportingConfigPropertyToTerraform(struct!.exportingConfig),
    matching_rules: cdktn.listMapper(tfDomainMatchingRulesPropertyToTerraform, true)(struct!.matchingRules),
  }
}


export function tfDomainRuleBasedMatchingPropertyToHclTerraform(struct?: TfDomain.RuleBasedMatchingPropertyOutputReference | TfDomain.RuleBasedMatchingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_allowed_rule_level_for_matching: {
      value: cdktn.numberToHclTerraform(struct!.maxAllowedRuleLevelForMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_allowed_rule_level_for_merging: {
      value: cdktn.numberToHclTerraform(struct!.maxAllowedRuleLevelForMerging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_types_selector: {
      value: tfDomainAttributeTypesSelectorPropertyToHclTerraform(struct!.attributeTypesSelector),
      isBlock: true,
      type: "list",
      storageClassType: "AttributeTypesSelectorPropertyList",
    },
    conflict_resolution: {
      value: tfDomainRuleBasedMatchingConflictResolutionPropertyToHclTerraform(struct!.conflictResolution),
      isBlock: true,
      type: "list",
      storageClassType: "RuleBasedMatchingConflictResolutionPropertyList",
    },
    exporting_config: {
      value: tfDomainRuleBasedMatchingExportingConfigPropertyToHclTerraform(struct!.exportingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RuleBasedMatchingExportingConfigPropertyList",
    },
    matching_rules: {
      value: cdktn.listMapperHcl(tfDomainMatchingRulesPropertyToHclTerraform, true)(struct!.matchingRules),
      isBlock: true,
      type: "set",
      storageClassType: "MatchingRulesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfDomain {
export interface MatchingAutoMergingConflictResolutionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#conflict_resolving_model TfDomain#conflict_resolving_model}
  */
  readonly conflictResolvingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#source_name TfDomain#source_name}
  */
  readonly sourceName?: string;
}
export class MatchingAutoMergingConflictResolutionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MatchingAutoMergingConflictResolutionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolvingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolvingModel = this._conflictResolvingModel;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchingAutoMergingConflictResolutionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolvingModel = undefined;
      this._sourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolvingModel = value.conflictResolvingModel;
      this._sourceName = value.sourceName;
    }
  }

  // conflict_resolving_model - computed: false, optional: false, required: true
  private _conflictResolvingModel?: string; 
  public get conflictResolvingModel() {
    return this.getStringAttribute('conflict_resolving_model');
  }
  public set conflictResolvingModel(value: string) {
    this._conflictResolvingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolvingModelInput() {
    return this._conflictResolvingModel;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface ConsolidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#matching_attributes_list TfDomain#matching_attributes_list}
  */
  readonly matchingAttributesList: string[][] | cdktn.IResolvable;
}
export class ConsolidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsolidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingAttributesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingAttributesList = this._matchingAttributesList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingAttributesList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingAttributesList = value.matchingAttributesList;
    }
  }

  // matching_attributes_list - computed: false, optional: false, required: true
  private _matchingAttributesList?: string[][] | cdktn.IResolvable; 
  public get matchingAttributesList() {
    return this.interpolationForAttribute('matching_attributes_list');
  }
  public set matchingAttributesList(value: string[][] | cdktn.IResolvable) {
    this._matchingAttributesList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingAttributesListInput() {
    return this._matchingAttributesList;
  }
}
export interface AutoMergingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#enabled TfDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging TfDomain#min_allowed_confidence_score_for_merging}
  */
  readonly minAllowedConfidenceScoreForMerging?: number;
  /**
  * conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#conflict_resolution TfDomain#conflict_resolution}
  */
  readonly conflictResolution?: MatchingAutoMergingConflictResolutionProperty;
  /**
  * consolidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#consolidation TfDomain#consolidation}
  */
  readonly consolidation?: ConsolidationProperty;
}
export class AutoMergingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoMergingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minAllowedConfidenceScoreForMerging !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedConfidenceScoreForMerging = this._minAllowedConfidenceScoreForMerging;
    }
    if (this._conflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution?.internalValue;
    }
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoMergingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._minAllowedConfidenceScoreForMerging = undefined;
      this._conflictResolution.internalValue = undefined;
      this._consolidation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._minAllowedConfidenceScoreForMerging = value.minAllowedConfidenceScoreForMerging;
      this._conflictResolution.internalValue = value.conflictResolution;
      this._consolidation.internalValue = value.consolidation;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_allowed_confidence_score_for_merging - computed: false, optional: true, required: false
  private _minAllowedConfidenceScoreForMerging?: number; 
  public get minAllowedConfidenceScoreForMerging() {
    return this.getNumberAttribute('min_allowed_confidence_score_for_merging');
  }
  public set minAllowedConfidenceScoreForMerging(value: number) {
    this._minAllowedConfidenceScoreForMerging = value;
  }
  public resetMinAllowedConfidenceScoreForMerging() {
    this._minAllowedConfidenceScoreForMerging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedConfidenceScoreForMergingInput() {
    return this._minAllowedConfidenceScoreForMerging;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution = new MatchingAutoMergingConflictResolutionPropertyOutputReference(this, "conflict_resolution");
  public get conflictResolution() {
    return this._conflictResolution;
  }
  public putConflictResolution(value: MatchingAutoMergingConflictResolutionProperty) {
    this._conflictResolution.internalValue = value;
  }
  public resetConflictResolution() {
    this._conflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution.internalValue;
  }

  // consolidation - computed: false, optional: true, required: false
  private _consolidation = new ConsolidationPropertyOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: ConsolidationProperty) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }
}
export interface MatchingExportingConfigS3ExportingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_bucket_name TfDomain#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_key_name TfDomain#s3_key_name}
  */
  readonly s3KeyName?: string;
}
export class MatchingExportingConfigS3ExportingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MatchingExportingConfigS3ExportingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyName = this._s3KeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchingExportingConfigS3ExportingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3KeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyName = value.s3KeyName;
    }
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_name - computed: false, optional: true, required: false
  private _s3KeyName?: string; 
  public get s3KeyName() {
    return this.getStringAttribute('s3_key_name');
  }
  public set s3KeyName(value: string) {
    this._s3KeyName = value;
  }
  public resetS3KeyName() {
    this._s3KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyNameInput() {
    return this._s3KeyName;
  }
}
export interface MatchingExportingConfigProperty {
  /**
  * s3_exporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_exporting TfDomain#s3_exporting}
  */
  readonly s3Exporting?: MatchingExportingConfigS3ExportingProperty;
}
export class MatchingExportingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MatchingExportingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Exporting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Exporting = this._s3Exporting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchingExportingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Exporting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Exporting.internalValue = value.s3Exporting;
    }
  }

  // s3_exporting - computed: false, optional: true, required: false
  private _s3Exporting = new MatchingExportingConfigS3ExportingPropertyOutputReference(this, "s3_exporting");
  public get s3Exporting() {
    return this._s3Exporting;
  }
  public putS3Exporting(value: MatchingExportingConfigS3ExportingProperty) {
    this._s3Exporting.internalValue = value;
  }
  public resetS3Exporting() {
    this._s3Exporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportingInput() {
    return this._s3Exporting.internalValue;
  }
}
export interface JobScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#day_of_the_week TfDomain#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#time TfDomain#time}
  */
  readonly time: string;
}
export class JobSchedulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobScheduleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobScheduleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface MatchingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#enabled TfDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * auto_merging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#auto_merging TfDomain#auto_merging}
  */
  readonly autoMerging?: AutoMergingProperty;
  /**
  * exporting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#exporting_config TfDomain#exporting_config}
  */
  readonly exportingConfig?: MatchingExportingConfigProperty;
  /**
  * job_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#job_schedule TfDomain#job_schedule}
  */
  readonly jobSchedule?: JobScheduleProperty;
}
export class MatchingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MatchingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoMerging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMerging = this._autoMerging?.internalValue;
    }
    if (this._exportingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportingConfig = this._exportingConfig?.internalValue;
    }
    if (this._jobSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSchedule = this._jobSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._autoMerging.internalValue = undefined;
      this._exportingConfig.internalValue = undefined;
      this._jobSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._autoMerging.internalValue = value.autoMerging;
      this._exportingConfig.internalValue = value.exportingConfig;
      this._jobSchedule.internalValue = value.jobSchedule;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // auto_merging - computed: false, optional: true, required: false
  private _autoMerging = new AutoMergingPropertyOutputReference(this, "auto_merging");
  public get autoMerging() {
    return this._autoMerging;
  }
  public putAutoMerging(value: AutoMergingProperty) {
    this._autoMerging.internalValue = value;
  }
  public resetAutoMerging() {
    this._autoMerging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMergingInput() {
    return this._autoMerging.internalValue;
  }

  // exporting_config - computed: false, optional: true, required: false
  private _exportingConfig = new MatchingExportingConfigPropertyOutputReference(this, "exporting_config");
  public get exportingConfig() {
    return this._exportingConfig;
  }
  public putExportingConfig(value: MatchingExportingConfigProperty) {
    this._exportingConfig.internalValue = value;
  }
  public resetExportingConfig() {
    this._exportingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportingConfigInput() {
    return this._exportingConfig.internalValue;
  }

  // job_schedule - computed: false, optional: true, required: false
  private _jobSchedule = new JobSchedulePropertyOutputReference(this, "job_schedule");
  public get jobSchedule() {
    return this._jobSchedule;
  }
  public putJobSchedule(value: JobScheduleProperty) {
    this._jobSchedule.internalValue = value;
  }
  public resetJobSchedule() {
    this._jobSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleInput() {
    return this._jobSchedule.internalValue;
  }
}
export interface AttributeTypesSelectorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#address TfDomain#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#attribute_matching_model TfDomain#attribute_matching_model}
  */
  readonly attributeMatchingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#email_address TfDomain#email_address}
  */
  readonly emailAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#phone_number TfDomain#phone_number}
  */
  readonly phoneNumber?: string[];
}
export class AttributeTypesSelectorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttributeTypesSelectorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._attributeMatchingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttributeTypesSelectorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._attributeMatchingModel = undefined;
      this._emailAddress = undefined;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._attributeMatchingModel = value.attributeMatchingModel;
      this._emailAddress = value.emailAddress;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // attribute_matching_model - computed: false, optional: false, required: true
  private _attributeMatchingModel?: string; 
  public get attributeMatchingModel() {
    return this.getStringAttribute('attribute_matching_model');
  }
  public set attributeMatchingModel(value: string) {
    this._attributeMatchingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchingModelInput() {
    return this._attributeMatchingModel;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string[]; 
  public get emailAddress() {
    return this.getListAttribute('email_address');
  }
  public set emailAddress(value: string[]) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string[]; 
  public get phoneNumber() {
    return this.getListAttribute('phone_number');
  }
  public set phoneNumber(value: string[]) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface RuleBasedMatchingConflictResolutionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#conflict_resolving_model TfDomain#conflict_resolving_model}
  */
  readonly conflictResolvingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#source_name TfDomain#source_name}
  */
  readonly sourceName?: string;
}
export class RuleBasedMatchingConflictResolutionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleBasedMatchingConflictResolutionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolvingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolvingModel = this._conflictResolvingModel;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleBasedMatchingConflictResolutionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolvingModel = undefined;
      this._sourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolvingModel = value.conflictResolvingModel;
      this._sourceName = value.sourceName;
    }
  }

  // conflict_resolving_model - computed: false, optional: false, required: true
  private _conflictResolvingModel?: string; 
  public get conflictResolvingModel() {
    return this.getStringAttribute('conflict_resolving_model');
  }
  public set conflictResolvingModel(value: string) {
    this._conflictResolvingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolvingModelInput() {
    return this._conflictResolvingModel;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface RuleBasedMatchingExportingConfigS3ExportingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_bucket_name TfDomain#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_key_name TfDomain#s3_key_name}
  */
  readonly s3KeyName?: string;
}
export class RuleBasedMatchingExportingConfigS3ExportingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleBasedMatchingExportingConfigS3ExportingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyName = this._s3KeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleBasedMatchingExportingConfigS3ExportingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3KeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyName = value.s3KeyName;
    }
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_name - computed: false, optional: true, required: false
  private _s3KeyName?: string; 
  public get s3KeyName() {
    return this.getStringAttribute('s3_key_name');
  }
  public set s3KeyName(value: string) {
    this._s3KeyName = value;
  }
  public resetS3KeyName() {
    this._s3KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyNameInput() {
    return this._s3KeyName;
  }
}
export interface RuleBasedMatchingExportingConfigProperty {
  /**
  * s3_exporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#s3_exporting TfDomain#s3_exporting}
  */
  readonly s3Exporting?: RuleBasedMatchingExportingConfigS3ExportingProperty;
}
export class RuleBasedMatchingExportingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleBasedMatchingExportingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Exporting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Exporting = this._s3Exporting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleBasedMatchingExportingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Exporting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Exporting.internalValue = value.s3Exporting;
    }
  }

  // s3_exporting - computed: false, optional: true, required: false
  private _s3Exporting = new RuleBasedMatchingExportingConfigS3ExportingPropertyOutputReference(this, "s3_exporting");
  public get s3Exporting() {
    return this._s3Exporting;
  }
  public putS3Exporting(value: RuleBasedMatchingExportingConfigS3ExportingProperty) {
    this._s3Exporting.internalValue = value;
  }
  public resetS3Exporting() {
    this._s3Exporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportingInput() {
    return this._s3Exporting.internalValue;
  }
}
export interface MatchingRulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#rule TfDomain#rule}
  */
  readonly rule: string[];
}
export class MatchingRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchingRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchingRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string[]; 
  public get rule() {
    return this.getListAttribute('rule');
  }
  public set rule(value: string[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class MatchingRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchingRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchingRulesPropertyOutputReference {
    return new MatchingRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleBasedMatchingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#enabled TfDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching TfDomain#max_allowed_rule_level_for_matching}
  */
  readonly maxAllowedRuleLevelForMatching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging TfDomain#max_allowed_rule_level_for_merging}
  */
  readonly maxAllowedRuleLevelForMerging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#status TfDomain#status}
  */
  readonly status?: string;
  /**
  * attribute_types_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#attribute_types_selector TfDomain#attribute_types_selector}
  */
  readonly attributeTypesSelector?: AttributeTypesSelectorProperty;
  /**
  * conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#conflict_resolution TfDomain#conflict_resolution}
  */
  readonly conflictResolution?: RuleBasedMatchingConflictResolutionProperty;
  /**
  * exporting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#exporting_config TfDomain#exporting_config}
  */
  readonly exportingConfig?: RuleBasedMatchingExportingConfigProperty;
  /**
  * matching_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/customerprofiles_domain#matching_rules TfDomain#matching_rules}
  */
  readonly matchingRules?: MatchingRulesProperty[] | cdktn.IResolvable;
}
export class RuleBasedMatchingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleBasedMatchingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxAllowedRuleLevelForMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedRuleLevelForMatching = this._maxAllowedRuleLevelForMatching;
    }
    if (this._maxAllowedRuleLevelForMerging !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedRuleLevelForMerging = this._maxAllowedRuleLevelForMerging;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._attributeTypesSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeTypesSelector = this._attributeTypesSelector?.internalValue;
    }
    if (this._conflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution?.internalValue;
    }
    if (this._exportingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportingConfig = this._exportingConfig?.internalValue;
    }
    if (this._matchingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRules = this._matchingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleBasedMatchingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxAllowedRuleLevelForMatching = undefined;
      this._maxAllowedRuleLevelForMerging = undefined;
      this._status = undefined;
      this._attributeTypesSelector.internalValue = undefined;
      this._conflictResolution.internalValue = undefined;
      this._exportingConfig.internalValue = undefined;
      this._matchingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxAllowedRuleLevelForMatching = value.maxAllowedRuleLevelForMatching;
      this._maxAllowedRuleLevelForMerging = value.maxAllowedRuleLevelForMerging;
      this._status = value.status;
      this._attributeTypesSelector.internalValue = value.attributeTypesSelector;
      this._conflictResolution.internalValue = value.conflictResolution;
      this._exportingConfig.internalValue = value.exportingConfig;
      this._matchingRules.internalValue = value.matchingRules;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_allowed_rule_level_for_matching - computed: false, optional: true, required: false
  private _maxAllowedRuleLevelForMatching?: number; 
  public get maxAllowedRuleLevelForMatching() {
    return this.getNumberAttribute('max_allowed_rule_level_for_matching');
  }
  public set maxAllowedRuleLevelForMatching(value: number) {
    this._maxAllowedRuleLevelForMatching = value;
  }
  public resetMaxAllowedRuleLevelForMatching() {
    this._maxAllowedRuleLevelForMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedRuleLevelForMatchingInput() {
    return this._maxAllowedRuleLevelForMatching;
  }

  // max_allowed_rule_level_for_merging - computed: false, optional: true, required: false
  private _maxAllowedRuleLevelForMerging?: number; 
  public get maxAllowedRuleLevelForMerging() {
    return this.getNumberAttribute('max_allowed_rule_level_for_merging');
  }
  public set maxAllowedRuleLevelForMerging(value: number) {
    this._maxAllowedRuleLevelForMerging = value;
  }
  public resetMaxAllowedRuleLevelForMerging() {
    this._maxAllowedRuleLevelForMerging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedRuleLevelForMergingInput() {
    return this._maxAllowedRuleLevelForMerging;
  }

  // status - computed: true, optional: true, required: false
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

  // attribute_types_selector - computed: false, optional: true, required: false
  private _attributeTypesSelector = new AttributeTypesSelectorPropertyOutputReference(this, "attribute_types_selector");
  public get attributeTypesSelector() {
    return this._attributeTypesSelector;
  }
  public putAttributeTypesSelector(value: AttributeTypesSelectorProperty) {
    this._attributeTypesSelector.internalValue = value;
  }
  public resetAttributeTypesSelector() {
    this._attributeTypesSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypesSelectorInput() {
    return this._attributeTypesSelector.internalValue;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution = new RuleBasedMatchingConflictResolutionPropertyOutputReference(this, "conflict_resolution");
  public get conflictResolution() {
    return this._conflictResolution;
  }
  public putConflictResolution(value: RuleBasedMatchingConflictResolutionProperty) {
    this._conflictResolution.internalValue = value;
  }
  public resetConflictResolution() {
    this._conflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution.internalValue;
  }

  // exporting_config - computed: false, optional: true, required: false
  private _exportingConfig = new RuleBasedMatchingExportingConfigPropertyOutputReference(this, "exporting_config");
  public get exportingConfig() {
    return this._exportingConfig;
  }
  public putExportingConfig(value: RuleBasedMatchingExportingConfigProperty) {
    this._exportingConfig.internalValue = value;
  }
  public resetExportingConfig() {
    this._exportingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportingConfigInput() {
    return this._exportingConfig.internalValue;
  }

  // matching_rules - computed: false, optional: true, required: false
  private _matchingRules = new MatchingRulesPropertyList(this, "matching_rules", true);
  public get matchingRules() {
    return this._matchingRules;
  }
  public putMatchingRules(value: MatchingRulesProperty[] | cdktn.IResolvable) {
    this._matchingRules.internalValue = value;
  }
  public resetMatchingRules() {
    this._matchingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRulesInput() {
    return this._matchingRules.internalValue;
  }
}
}
