// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMacie2ClassificationJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#custom_data_identifier_ids AwsMacie2ClassificationJob#custom_data_identifier_ids}
  */
  readonly customDataIdentifierIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#description AwsMacie2ClassificationJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#id AwsMacie2ClassificationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#initial_run AwsMacie2ClassificationJob#initial_run}
  */
  readonly initialRun?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#job_status AwsMacie2ClassificationJob#job_status}
  */
  readonly jobStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#job_type AwsMacie2ClassificationJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#name AwsMacie2ClassificationJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#name_prefix AwsMacie2ClassificationJob#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#region AwsMacie2ClassificationJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#sampling_percentage AwsMacie2ClassificationJob#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tags AwsMacie2ClassificationJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tags_all AwsMacie2ClassificationJob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3_job_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#s3_job_definition AwsMacie2ClassificationJob#s3_job_definition}
  */
  readonly s3JobDefinition: AwsMacie2ClassificationJob.S3JobDefinitionProperty;
  /**
  * schedule_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#schedule_frequency AwsMacie2ClassificationJob#schedule_frequency}
  */
  readonly scheduleFrequency?: AwsMacie2ClassificationJob.ScheduleFrequencyProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#timeouts AwsMacie2ClassificationJob#timeouts}
  */
  readonly timeouts?: AwsMacie2ClassificationJob.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job aws_macie2_classification_job}
*/
export class AwsMacie2ClassificationJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie2_classification_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMacie2ClassificationJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMacie2ClassificationJob to import
  * @param importFromId The id of the existing AwsMacie2ClassificationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMacie2ClassificationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie2_classification_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job aws_macie2_classification_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMacie2ClassificationJobConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMacie2ClassificationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_classification_job',
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
    this._customDataIdentifierIds = config.customDataIdentifierIds;
    this._description = config.description;
    this._id = config.id;
    this._initialRun = config.initialRun;
    this._jobStatus = config.jobStatus;
    this._jobType = config.jobType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3JobDefinition.internalValue = config.s3JobDefinition;
    this._scheduleFrequency.internalValue = config.scheduleFrequency;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_data_identifier_ids - computed: true, optional: true, required: false
  private _customDataIdentifierIds?: string[]; 
  public get customDataIdentifierIds() {
    return this.getListAttribute('custom_data_identifier_ids');
  }
  public set customDataIdentifierIds(value: string[]) {
    this._customDataIdentifierIds = value;
  }
  public resetCustomDataIdentifierIds() {
    this._customDataIdentifierIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataIdentifierIdsInput() {
    return this._customDataIdentifierIds;
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

  // initial_run - computed: false, optional: true, required: false
  private _initialRun?: boolean | cdktn.IResolvable; 
  public get initialRun() {
    return this.getBooleanAttribute('initial_run');
  }
  public set initialRun(value: boolean | cdktn.IResolvable) {
    this._initialRun = value;
  }
  public resetInitialRun() {
    this._initialRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRunInput() {
    return this._initialRun;
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_status - computed: true, optional: true, required: false
  private _jobStatus?: string; 
  public get jobStatus() {
    return this.getStringAttribute('job_status');
  }
  public set jobStatus(value: string) {
    this._jobStatus = value;
  }
  public resetJobStatus() {
    this._jobStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStatusInput() {
    return this._jobStatus;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
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

  // user_paused_details - computed: true, optional: false, required: false
  private _userPausedDetails = new AwsMacie2ClassificationJob.UserPausedDetailsPropertyList(this, "user_paused_details", false);
  public get userPausedDetails() {
    return this._userPausedDetails;
  }

  // s3_job_definition - computed: false, optional: false, required: true
  private _s3JobDefinition = new AwsMacie2ClassificationJob.S3JobDefinitionPropertyOutputReference(this, "s3_job_definition");
  public get s3JobDefinition() {
    return this._s3JobDefinition;
  }
  public putS3JobDefinition(value: AwsMacie2ClassificationJob.S3JobDefinitionProperty) {
    this._s3JobDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3JobDefinitionInput() {
    return this._s3JobDefinition.internalValue;
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency = new AwsMacie2ClassificationJob.ScheduleFrequencyPropertyOutputReference(this, "schedule_frequency");
  public get scheduleFrequency() {
    return this._scheduleFrequency;
  }
  public putScheduleFrequency(value: AwsMacie2ClassificationJob.ScheduleFrequencyProperty) {
    this._scheduleFrequency.internalValue = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsMacie2ClassificationJob.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsMacie2ClassificationJob.TimeoutsProperty) {
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
      custom_data_identifier_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._customDataIdentifierIds),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      initial_run: cdktn.booleanToTerraform(this._initialRun),
      job_status: cdktn.stringToTerraform(this._jobStatus),
      job_type: cdktn.stringToTerraform(this._jobType),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      region: cdktn.stringToTerraform(this._region),
      sampling_percentage: cdktn.numberToTerraform(this._samplingPercentage),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      s3_job_definition: awsMacie2ClassificationJobS3JobDefinitionPropertyToTerraform(this._s3JobDefinition.internalValue),
      schedule_frequency: awsMacie2ClassificationJobScheduleFrequencyPropertyToTerraform(this._scheduleFrequency.internalValue),
      timeouts: awsMacie2ClassificationJobTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_data_identifier_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._customDataIdentifierIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      initial_run: {
        value: cdktn.booleanToHclTerraform(this._initialRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_status: {
        value: cdktn.stringToHclTerraform(this._jobStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktn.stringToHclTerraform(this._jobType),
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
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      sampling_percentage: {
        value: cdktn.numberToHclTerraform(this._samplingPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      s3_job_definition: {
        value: awsMacie2ClassificationJobS3JobDefinitionPropertyToHclTerraform(this._s3JobDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMacie2ClassificationJob.S3JobDefinitionPropertyList",
      },
      schedule_frequency: {
        value: awsMacie2ClassificationJobScheduleFrequencyPropertyToHclTerraform(this._scheduleFrequency.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMacie2ClassificationJob.ScheduleFrequencyPropertyList",
      },
      timeouts: {
        value: awsMacie2ClassificationJobTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsMacie2ClassificationJob.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMacie2ClassificationJobUserPausedDetailsPropertyToTerraform(struct?: AwsMacie2ClassificationJob.UserPausedDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMacie2ClassificationJobUserPausedDetailsPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.UserPausedDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty | cdktn.IResolvable): any {
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


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    tag_values: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyToTerraform, true)(struct!.tagValues),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyToHclTerraform, true)(struct!.tagValues),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    simple_criterion: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyToTerraform(struct!.simpleCriterion),
    tag_criterion: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyToTerraform(struct!.tagCriterion),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    simple_criterion: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyToHclTerraform(struct!.simpleCriterion),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyList",
    },
    tag_criterion: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyToHclTerraform(struct!.tagCriterion),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndPropertyToTerraform, true)(struct!.and),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaExcludesAndPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty | cdktn.IResolvable): any {
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


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    tag_values: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyToTerraform, true)(struct!.tagValues),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyToHclTerraform, true)(struct!.tagValues),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    simple_criterion: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyToTerraform(struct!.simpleCriterion),
    tag_criterion: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyToTerraform(struct!.tagCriterion),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    simple_criterion: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyToHclTerraform(struct!.simpleCriterion),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyList",
    },
    tag_criterion: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyToHclTerraform(struct!.tagCriterion),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndPropertyToTerraform, true)(struct!.and),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionBucketCriteriaIncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaIncludesAndPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobBucketCriteriaPropertyToTerraform(struct?: AwsMacie2ClassificationJob.BucketCriteriaPropertyOutputReference | AwsMacie2ClassificationJob.BucketCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesPropertyToTerraform(struct!.excludes),
    includes: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesPropertyToTerraform(struct!.includes),
  }
}


export function awsMacie2ClassificationJobBucketCriteriaPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.BucketCriteriaPropertyOutputReference | AwsMacie2ClassificationJob.BucketCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesPropertyToHclTerraform(struct!.excludes),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaExcludesPropertyList",
    },
    includes: {
      value: awsMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesPropertyToHclTerraform(struct!.includes),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionBucketCriteriaIncludesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobBucketDefinitionsPropertyToTerraform(struct?: AwsMacie2ClassificationJob.BucketDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
  }
}


export function awsMacie2ClassificationJobBucketDefinitionsPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.BucketDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buckets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable): any {
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


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    target: cdktn.stringToTerraform(struct!.target),
    tag_values: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyToTerraform, true)(struct!.tagValues),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndTagScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyToHclTerraform, true)(struct!.tagValues),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    simple_scope_term: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermPropertyToTerraform(struct!.tagScopeTerm),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    simple_scope_term: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyToHclTerraform(struct!.simpleScopeTerm),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyList",
    },
    tag_scope_term: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermPropertyToHclTerraform(struct!.tagScopeTerm),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingExcludesAndTagScopeTermPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndPropertyToTerraform, true)(struct!.and),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingExcludesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionScopingExcludesAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingExcludesAndPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable): any {
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


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    key: cdktn.stringToTerraform(struct!.key),
    target: cdktn.stringToTerraform(struct!.target),
    tag_values: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyToTerraform, true)(struct!.tagValues),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndTagScopeTermProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
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
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyToHclTerraform, true)(struct!.tagValues),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    simple_scope_term: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermPropertyToTerraform(struct!.tagScopeTerm),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    simple_scope_term: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyToHclTerraform(struct!.simpleScopeTerm),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyList",
    },
    tag_scope_term: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermPropertyToHclTerraform(struct!.tagScopeTerm),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingIncludesAndTagScopeTermPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndPropertyToTerraform, true)(struct!.and),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionScopingIncludesPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionScopingIncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobS3JobDefinitionScopingIncludesAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingIncludesAndPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobScopingPropertyToTerraform(struct?: AwsMacie2ClassificationJob.ScopingPropertyOutputReference | AwsMacie2ClassificationJob.ScopingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesPropertyToTerraform(struct!.excludes),
    includes: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesPropertyToTerraform(struct!.includes),
  }
}


export function awsMacie2ClassificationJobScopingPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.ScopingPropertyOutputReference | AwsMacie2ClassificationJob.ScopingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingExcludesPropertyToHclTerraform(struct!.excludes),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingExcludesPropertyList",
    },
    includes: {
      value: awsMacie2ClassificationJobS3JobDefinitionScopingIncludesPropertyToHclTerraform(struct!.includes),
      isBlock: true,
      type: "list",
      storageClassType: "S3JobDefinitionScopingIncludesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobS3JobDefinitionPropertyToTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_criteria: awsMacie2ClassificationJobBucketCriteriaPropertyToTerraform(struct!.bucketCriteria),
    bucket_definitions: cdktn.listMapper(awsMacie2ClassificationJobBucketDefinitionsPropertyToTerraform, true)(struct!.bucketDefinitions),
    scoping: awsMacie2ClassificationJobScopingPropertyToTerraform(struct!.scoping),
  }
}


export function awsMacie2ClassificationJobS3JobDefinitionPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.S3JobDefinitionPropertyOutputReference | AwsMacie2ClassificationJob.S3JobDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_criteria: {
      value: awsMacie2ClassificationJobBucketCriteriaPropertyToHclTerraform(struct!.bucketCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "BucketCriteriaPropertyList",
    },
    bucket_definitions: {
      value: cdktn.listMapperHcl(awsMacie2ClassificationJobBucketDefinitionsPropertyToHclTerraform, true)(struct!.bucketDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "BucketDefinitionsPropertyList",
    },
    scoping: {
      value: awsMacie2ClassificationJobScopingPropertyToHclTerraform(struct!.scoping),
      isBlock: true,
      type: "list",
      storageClassType: "ScopingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobScheduleFrequencyPropertyToTerraform(struct?: AwsMacie2ClassificationJob.ScheduleFrequencyPropertyOutputReference | AwsMacie2ClassificationJob.ScheduleFrequencyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_schedule: cdktn.booleanToTerraform(struct!.dailySchedule),
    monthly_schedule: cdktn.numberToTerraform(struct!.monthlySchedule),
    weekly_schedule: cdktn.stringToTerraform(struct!.weeklySchedule),
  }
}


export function awsMacie2ClassificationJobScheduleFrequencyPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.ScheduleFrequencyPropertyOutputReference | AwsMacie2ClassificationJob.ScheduleFrequencyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_schedule: {
      value: cdktn.booleanToHclTerraform(struct!.dailySchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthly_schedule: {
      value: cdktn.numberToHclTerraform(struct!.monthlySchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly_schedule: {
      value: cdktn.stringToHclTerraform(struct!.weeklySchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMacie2ClassificationJobTimeoutsPropertyToTerraform(struct?: AwsMacie2ClassificationJob.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsMacie2ClassificationJobTimeoutsPropertyToHclTerraform(struct?: AwsMacie2ClassificationJob.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsMacie2ClassificationJob {
export interface UserPausedDetailsProperty {
}
export class UserPausedDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserPausedDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPausedDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_expires_at - computed: true, optional: false, required: false
  public get jobExpiresAt() {
    return this.getStringAttribute('job_expires_at');
  }

  // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
  public get jobImminentExpirationHealthEventArn() {
    return this.getStringAttribute('job_imminent_expiration_health_event_arn');
  }

  // job_paused_at - computed: true, optional: false, required: false
  public get jobPausedAt() {
    return this.getStringAttribute('job_paused_at');
  }
}

export class UserPausedDetailsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): UserPausedDetailsPropertyOutputReference {
    return new UserPausedDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#values AwsMacie2ClassificationJob#values}
  */
  readonly values?: string[];
}
export class S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#value AwsMacie2ClassificationJob#value}
  */
  readonly value?: string;
}
export class S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyOutputReference {
    return new S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * tag_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_values AwsMacie2ClassificationJob#tag_values}
  */
  readonly tagValues?: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesPropertyList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface S3JobDefinitionBucketCriteriaExcludesAndProperty {
  /**
  * simple_criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#simple_criterion AwsMacie2ClassificationJob#simple_criterion}
  */
  readonly simpleCriterion?: S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty;
  /**
  * tag_criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_criterion AwsMacie2ClassificationJob#tag_criterion}
  */
  readonly tagCriterion?: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty;
}
export class S3JobDefinitionBucketCriteriaExcludesAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionBucketCriteriaExcludesAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleCriterion = this._simpleCriterion?.internalValue;
    }
    if (this._tagCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCriterion = this._tagCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaExcludesAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = undefined;
      this._tagCriterion.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = value.simpleCriterion;
      this._tagCriterion.internalValue = value.tagCriterion;
    }
  }

  // simple_criterion - computed: false, optional: true, required: false
  private _simpleCriterion = new S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionPropertyOutputReference(this, "simple_criterion");
  public get simpleCriterion() {
    return this._simpleCriterion;
  }
  public putSimpleCriterion(value: S3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionProperty) {
    this._simpleCriterion.internalValue = value;
  }
  public resetSimpleCriterion() {
    this._simpleCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleCriterionInput() {
    return this._simpleCriterion.internalValue;
  }

  // tag_criterion - computed: false, optional: true, required: false
  private _tagCriterion = new S3JobDefinitionBucketCriteriaExcludesAndTagCriterionPropertyOutputReference(this, "tag_criterion");
  public get tagCriterion() {
    return this._tagCriterion;
  }
  public putTagCriterion(value: S3JobDefinitionBucketCriteriaExcludesAndTagCriterionProperty) {
    this._tagCriterion.internalValue = value;
  }
  public resetTagCriterion() {
    this._tagCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCriterionInput() {
    return this._tagCriterion.internalValue;
  }
}

export class S3JobDefinitionBucketCriteriaExcludesAndPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionBucketCriteriaExcludesAndProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionBucketCriteriaExcludesAndPropertyOutputReference {
    return new S3JobDefinitionBucketCriteriaExcludesAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionBucketCriteriaExcludesProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#and AwsMacie2ClassificationJob#and}
  */
  readonly and?: S3JobDefinitionBucketCriteriaExcludesAndProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionBucketCriteriaExcludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaExcludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaExcludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new S3JobDefinitionBucketCriteriaExcludesAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: S3JobDefinitionBucketCriteriaExcludesAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#values AwsMacie2ClassificationJob#values}
  */
  readonly values?: string[];
}
export class S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#value AwsMacie2ClassificationJob#value}
  */
  readonly value?: string;
}
export class S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyOutputReference {
    return new S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * tag_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_values AwsMacie2ClassificationJob#tag_values}
  */
  readonly tagValues?: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesPropertyList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesProperty[] | cdktn.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface S3JobDefinitionBucketCriteriaIncludesAndProperty {
  /**
  * simple_criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#simple_criterion AwsMacie2ClassificationJob#simple_criterion}
  */
  readonly simpleCriterion?: S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty;
  /**
  * tag_criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_criterion AwsMacie2ClassificationJob#tag_criterion}
  */
  readonly tagCriterion?: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty;
}
export class S3JobDefinitionBucketCriteriaIncludesAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionBucketCriteriaIncludesAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleCriterion = this._simpleCriterion?.internalValue;
    }
    if (this._tagCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCriterion = this._tagCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaIncludesAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = undefined;
      this._tagCriterion.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = value.simpleCriterion;
      this._tagCriterion.internalValue = value.tagCriterion;
    }
  }

  // simple_criterion - computed: false, optional: true, required: false
  private _simpleCriterion = new S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionPropertyOutputReference(this, "simple_criterion");
  public get simpleCriterion() {
    return this._simpleCriterion;
  }
  public putSimpleCriterion(value: S3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionProperty) {
    this._simpleCriterion.internalValue = value;
  }
  public resetSimpleCriterion() {
    this._simpleCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleCriterionInput() {
    return this._simpleCriterion.internalValue;
  }

  // tag_criterion - computed: false, optional: true, required: false
  private _tagCriterion = new S3JobDefinitionBucketCriteriaIncludesAndTagCriterionPropertyOutputReference(this, "tag_criterion");
  public get tagCriterion() {
    return this._tagCriterion;
  }
  public putTagCriterion(value: S3JobDefinitionBucketCriteriaIncludesAndTagCriterionProperty) {
    this._tagCriterion.internalValue = value;
  }
  public resetTagCriterion() {
    this._tagCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCriterionInput() {
    return this._tagCriterion.internalValue;
  }
}

export class S3JobDefinitionBucketCriteriaIncludesAndPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionBucketCriteriaIncludesAndProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionBucketCriteriaIncludesAndPropertyOutputReference {
    return new S3JobDefinitionBucketCriteriaIncludesAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionBucketCriteriaIncludesProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#and AwsMacie2ClassificationJob#and}
  */
  readonly and?: S3JobDefinitionBucketCriteriaIncludesAndProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionBucketCriteriaIncludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionBucketCriteriaIncludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionBucketCriteriaIncludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new S3JobDefinitionBucketCriteriaIncludesAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: S3JobDefinitionBucketCriteriaIncludesAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface BucketCriteriaProperty {
  /**
  * excludes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#excludes AwsMacie2ClassificationJob#excludes}
  */
  readonly excludes?: S3JobDefinitionBucketCriteriaExcludesProperty;
  /**
  * includes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#includes AwsMacie2ClassificationJob#includes}
  */
  readonly includes?: S3JobDefinitionBucketCriteriaIncludesProperty;
}
export class BucketCriteriaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketCriteriaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes?.internalValue;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketCriteriaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes.internalValue = undefined;
      this._includes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes.internalValue = value.excludes;
      this._includes.internalValue = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new S3JobDefinitionBucketCriteriaExcludesPropertyOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: S3JobDefinitionBucketCriteriaExcludesProperty) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new S3JobDefinitionBucketCriteriaIncludesPropertyOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: S3JobDefinitionBucketCriteriaIncludesProperty) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }
}
export interface BucketDefinitionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#account_id AwsMacie2ClassificationJob#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#buckets AwsMacie2ClassificationJob#buckets}
  */
  readonly buckets: string[];
}
export class BucketDefinitionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BucketDefinitionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketDefinitionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._buckets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._buckets = value.buckets;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // buckets - computed: false, optional: false, required: true
  private _buckets?: string[]; 
  public get buckets() {
    return this.getListAttribute('buckets');
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }
}

export class BucketDefinitionsPropertyList extends cdktn.ComplexList {
  public internalValue? : BucketDefinitionsProperty[] | cdktn.IResolvable

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
  public get(index: number): BucketDefinitionsPropertyOutputReference {
    return new BucketDefinitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#values AwsMacie2ClassificationJob#values}
  */
  readonly values?: string[];
}
export class S3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#value AwsMacie2ClassificationJob#value}
  */
  readonly value?: string;
}
export class S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyOutputReference {
    return new S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionScopingExcludesAndTagScopeTermProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#target AwsMacie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_values AwsMacie2ClassificationJob#tag_values}
  */
  readonly tagValues?: S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionScopingExcludesAndTagScopeTermPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingExcludesAndTagScopeTermProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingExcludesAndTagScopeTermProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._target = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._target = value.target;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesPropertyList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: S3JobDefinitionScopingExcludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface S3JobDefinitionScopingExcludesAndProperty {
  /**
  * simple_scope_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#simple_scope_term AwsMacie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty;
  /**
  * tag_scope_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_scope_term AwsMacie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: S3JobDefinitionScopingExcludesAndTagScopeTermProperty;
}
export class S3JobDefinitionScopingExcludesAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionScopingExcludesAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
    }
    if (this._tagScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingExcludesAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = undefined;
      this._tagScopeTerm.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
      this._tagScopeTerm.internalValue = value.tagScopeTerm;
    }
  }

  // simple_scope_term - computed: false, optional: true, required: false
  private _simpleScopeTerm = new S3JobDefinitionScopingExcludesAndSimpleScopeTermPropertyOutputReference(this, "simple_scope_term");
  public get simpleScopeTerm() {
    return this._simpleScopeTerm;
  }
  public putSimpleScopeTerm(value: S3JobDefinitionScopingExcludesAndSimpleScopeTermProperty) {
    this._simpleScopeTerm.internalValue = value;
  }
  public resetSimpleScopeTerm() {
    this._simpleScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleScopeTermInput() {
    return this._simpleScopeTerm.internalValue;
  }

  // tag_scope_term - computed: false, optional: true, required: false
  private _tagScopeTerm = new S3JobDefinitionScopingExcludesAndTagScopeTermPropertyOutputReference(this, "tag_scope_term");
  public get tagScopeTerm() {
    return this._tagScopeTerm;
  }
  public putTagScopeTerm(value: S3JobDefinitionScopingExcludesAndTagScopeTermProperty) {
    this._tagScopeTerm.internalValue = value;
  }
  public resetTagScopeTerm() {
    this._tagScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagScopeTermInput() {
    return this._tagScopeTerm.internalValue;
  }
}

export class S3JobDefinitionScopingExcludesAndPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionScopingExcludesAndProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionScopingExcludesAndPropertyOutputReference {
    return new S3JobDefinitionScopingExcludesAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionScopingExcludesProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#and AwsMacie2ClassificationJob#and}
  */
  readonly and?: S3JobDefinitionScopingExcludesAndProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionScopingExcludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingExcludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingExcludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new S3JobDefinitionScopingExcludesAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: S3JobDefinitionScopingExcludesAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#values AwsMacie2ClassificationJob#values}
  */
  readonly values?: string[];
}
export class S3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#value AwsMacie2ClassificationJob#value}
  */
  readonly value?: string;
}
export class S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyOutputReference {
    return new S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionScopingIncludesAndTagScopeTermProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#comparator AwsMacie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#key AwsMacie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#target AwsMacie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_values AwsMacie2ClassificationJob#tag_values}
  */
  readonly tagValues?: S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionScopingIncludesAndTagScopeTermPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingIncludesAndTagScopeTermProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingIncludesAndTagScopeTermProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._target = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._target = value.target;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesPropertyList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: S3JobDefinitionScopingIncludesAndTagScopeTermTagValuesProperty[] | cdktn.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface S3JobDefinitionScopingIncludesAndProperty {
  /**
  * simple_scope_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#simple_scope_term AwsMacie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty;
  /**
  * tag_scope_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#tag_scope_term AwsMacie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: S3JobDefinitionScopingIncludesAndTagScopeTermProperty;
}
export class S3JobDefinitionScopingIncludesAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3JobDefinitionScopingIncludesAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
    }
    if (this._tagScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingIncludesAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = undefined;
      this._tagScopeTerm.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
      this._tagScopeTerm.internalValue = value.tagScopeTerm;
    }
  }

  // simple_scope_term - computed: false, optional: true, required: false
  private _simpleScopeTerm = new S3JobDefinitionScopingIncludesAndSimpleScopeTermPropertyOutputReference(this, "simple_scope_term");
  public get simpleScopeTerm() {
    return this._simpleScopeTerm;
  }
  public putSimpleScopeTerm(value: S3JobDefinitionScopingIncludesAndSimpleScopeTermProperty) {
    this._simpleScopeTerm.internalValue = value;
  }
  public resetSimpleScopeTerm() {
    this._simpleScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleScopeTermInput() {
    return this._simpleScopeTerm.internalValue;
  }

  // tag_scope_term - computed: false, optional: true, required: false
  private _tagScopeTerm = new S3JobDefinitionScopingIncludesAndTagScopeTermPropertyOutputReference(this, "tag_scope_term");
  public get tagScopeTerm() {
    return this._tagScopeTerm;
  }
  public putTagScopeTerm(value: S3JobDefinitionScopingIncludesAndTagScopeTermProperty) {
    this._tagScopeTerm.internalValue = value;
  }
  public resetTagScopeTerm() {
    this._tagScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagScopeTermInput() {
    return this._tagScopeTerm.internalValue;
  }
}

export class S3JobDefinitionScopingIncludesAndPropertyList extends cdktn.ComplexList {
  public internalValue? : S3JobDefinitionScopingIncludesAndProperty[] | cdktn.IResolvable

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
  public get(index: number): S3JobDefinitionScopingIncludesAndPropertyOutputReference {
    return new S3JobDefinitionScopingIncludesAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3JobDefinitionScopingIncludesProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#and AwsMacie2ClassificationJob#and}
  */
  readonly and?: S3JobDefinitionScopingIncludesAndProperty[] | cdktn.IResolvable;
}
export class S3JobDefinitionScopingIncludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionScopingIncludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionScopingIncludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new S3JobDefinitionScopingIncludesAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: S3JobDefinitionScopingIncludesAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface ScopingProperty {
  /**
  * excludes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#excludes AwsMacie2ClassificationJob#excludes}
  */
  readonly excludes?: S3JobDefinitionScopingExcludesProperty;
  /**
  * includes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#includes AwsMacie2ClassificationJob#includes}
  */
  readonly includes?: S3JobDefinitionScopingIncludesProperty;
}
export class ScopingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScopingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes?.internalValue;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScopingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes.internalValue = undefined;
      this._includes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes.internalValue = value.excludes;
      this._includes.internalValue = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new S3JobDefinitionScopingExcludesPropertyOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: S3JobDefinitionScopingExcludesProperty) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new S3JobDefinitionScopingIncludesPropertyOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: S3JobDefinitionScopingIncludesProperty) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }
}
export interface S3JobDefinitionProperty {
  /**
  * bucket_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#bucket_criteria AwsMacie2ClassificationJob#bucket_criteria}
  */
  readonly bucketCriteria?: BucketCriteriaProperty;
  /**
  * bucket_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#bucket_definitions AwsMacie2ClassificationJob#bucket_definitions}
  */
  readonly bucketDefinitions?: BucketDefinitionsProperty[] | cdktn.IResolvable;
  /**
  * scoping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#scoping AwsMacie2ClassificationJob#scoping}
  */
  readonly scoping?: ScopingProperty;
}
export class S3JobDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3JobDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketCriteria = this._bucketCriteria?.internalValue;
    }
    if (this._bucketDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketDefinitions = this._bucketDefinitions?.internalValue;
    }
    if (this._scoping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoping = this._scoping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3JobDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketCriteria.internalValue = undefined;
      this._bucketDefinitions.internalValue = undefined;
      this._scoping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketCriteria.internalValue = value.bucketCriteria;
      this._bucketDefinitions.internalValue = value.bucketDefinitions;
      this._scoping.internalValue = value.scoping;
    }
  }

  // bucket_criteria - computed: false, optional: true, required: false
  private _bucketCriteria = new BucketCriteriaPropertyOutputReference(this, "bucket_criteria");
  public get bucketCriteria() {
    return this._bucketCriteria;
  }
  public putBucketCriteria(value: BucketCriteriaProperty) {
    this._bucketCriteria.internalValue = value;
  }
  public resetBucketCriteria() {
    this._bucketCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketCriteriaInput() {
    return this._bucketCriteria.internalValue;
  }

  // bucket_definitions - computed: false, optional: true, required: false
  private _bucketDefinitions = new BucketDefinitionsPropertyList(this, "bucket_definitions", false);
  public get bucketDefinitions() {
    return this._bucketDefinitions;
  }
  public putBucketDefinitions(value: BucketDefinitionsProperty[] | cdktn.IResolvable) {
    this._bucketDefinitions.internalValue = value;
  }
  public resetBucketDefinitions() {
    this._bucketDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketDefinitionsInput() {
    return this._bucketDefinitions.internalValue;
  }

  // scoping - computed: false, optional: true, required: false
  private _scoping = new ScopingPropertyOutputReference(this, "scoping");
  public get scoping() {
    return this._scoping;
  }
  public putScoping(value: ScopingProperty) {
    this._scoping.internalValue = value;
  }
  public resetScoping() {
    this._scoping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopingInput() {
    return this._scoping.internalValue;
  }
}
export interface ScheduleFrequencyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#daily_schedule AwsMacie2ClassificationJob#daily_schedule}
  */
  readonly dailySchedule?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#monthly_schedule AwsMacie2ClassificationJob#monthly_schedule}
  */
  readonly monthlySchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#weekly_schedule AwsMacie2ClassificationJob#weekly_schedule}
  */
  readonly weeklySchedule?: string;
}
export class ScheduleFrequencyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleFrequencyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule;
    }
    if (this._monthlySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule;
    }
    if (this._weeklySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleFrequencyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailySchedule = undefined;
      this._monthlySchedule = undefined;
      this._weeklySchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailySchedule = value.dailySchedule;
      this._monthlySchedule = value.monthlySchedule;
      this._weeklySchedule = value.weeklySchedule;
    }
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule?: boolean | cdktn.IResolvable; 
  public get dailySchedule() {
    return this.getBooleanAttribute('daily_schedule');
  }
  public set dailySchedule(value: boolean | cdktn.IResolvable) {
    this._dailySchedule = value;
  }
  public resetDailySchedule() {
    this._dailySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: true, required: false
  private _monthlySchedule?: number; 
  public get monthlySchedule() {
    return this.getNumberAttribute('monthly_schedule');
  }
  public set monthlySchedule(value: number) {
    this._monthlySchedule = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: true, required: false
  private _weeklySchedule?: string; 
  public get weeklySchedule() {
    return this.getStringAttribute('weekly_schedule');
  }
  public set weeklySchedule(value: string) {
    this._weeklySchedule = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#create AwsMacie2ClassificationJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_job#update AwsMacie2ClassificationJob#update}
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
