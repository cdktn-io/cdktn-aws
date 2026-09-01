// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBedrockEvaluationJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#application_type AwsBedrockEvaluationJob#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#customer_encryption_key_id AwsBedrockEvaluationJob#customer_encryption_key_id}
  */
  readonly customerEncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#job_description AwsBedrockEvaluationJob#job_description}
  */
  readonly jobDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#job_name AwsBedrockEvaluationJob#job_name}
  */
  readonly jobName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#region AwsBedrockEvaluationJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#role_arn AwsBedrockEvaluationJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#skip_destroy AwsBedrockEvaluationJob#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#tags AwsBedrockEvaluationJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * evaluation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#evaluation_config AwsBedrockEvaluationJob#evaluation_config}
  */
  readonly evaluationConfig?: AwsBedrockEvaluationJob.EvaluationConfigProperty[] | cdktn.IResolvable;
  /**
  * inference_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#inference_config AwsBedrockEvaluationJob#inference_config}
  */
  readonly inferenceConfig?: AwsBedrockEvaluationJob.InferenceConfigProperty[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#output_data_config AwsBedrockEvaluationJob#output_data_config}
  */
  readonly outputDataConfig?: AwsBedrockEvaluationJob.OutputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#timeouts AwsBedrockEvaluationJob#timeouts}
  */
  readonly timeouts?: AwsBedrockEvaluationJob.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job aws_bedrock_evaluation_job}
*/
export class AwsBedrockEvaluationJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_evaluation_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBedrockEvaluationJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBedrockEvaluationJob to import
  * @param importFromId The id of the existing AwsBedrockEvaluationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBedrockEvaluationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_evaluation_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job aws_bedrock_evaluation_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBedrockEvaluationJobConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBedrockEvaluationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_evaluation_job',
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
    this._applicationType = config.applicationType;
    this._customerEncryptionKeyId = config.customerEncryptionKeyId;
    this._jobDescription = config.jobDescription;
    this._jobName = config.jobName;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._skipDestroy = config.skipDestroy;
    this._tags = config.tags;
    this._evaluationConfig.internalValue = config.evaluationConfig;
    this._inferenceConfig.internalValue = config.inferenceConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_id - computed: false, optional: true, required: false
  private _customerEncryptionKeyId?: string; 
  public get customerEncryptionKeyId() {
    return this.getStringAttribute('customer_encryption_key_id');
  }
  public set customerEncryptionKeyId(value: string) {
    this._customerEncryptionKeyId = value;
  }
  public resetCustomerEncryptionKeyId() {
    this._customerEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionKeyIdInput() {
    return this._customerEncryptionKeyId;
  }

  // failure_messages - computed: true, optional: false, required: false
  public get failureMessages() {
    return this.getListAttribute('failure_messages');
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_description - computed: false, optional: true, required: false
  private _jobDescription?: string; 
  public get jobDescription() {
    return this.getStringAttribute('job_description');
  }
  public set jobDescription(value: string) {
    this._jobDescription = value;
  }
  public resetJobDescription() {
    this._jobDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDescriptionInput() {
    return this._jobDescription;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktn.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktn.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // evaluation_config - computed: false, optional: true, required: false
  private _evaluationConfig = new AwsBedrockEvaluationJob.EvaluationConfigPropertyList(this, "evaluation_config", false);
  public get evaluationConfig() {
    return this._evaluationConfig;
  }
  public putEvaluationConfig(value: AwsBedrockEvaluationJob.EvaluationConfigProperty[] | cdktn.IResolvable) {
    this._evaluationConfig.internalValue = value;
  }
  public resetEvaluationConfig() {
    this._evaluationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationConfigInput() {
    return this._evaluationConfig.internalValue;
  }

  // inference_config - computed: false, optional: true, required: false
  private _inferenceConfig = new AwsBedrockEvaluationJob.InferenceConfigPropertyList(this, "inference_config", false);
  public get inferenceConfig() {
    return this._inferenceConfig;
  }
  public putInferenceConfig(value: AwsBedrockEvaluationJob.InferenceConfigProperty[] | cdktn.IResolvable) {
    this._inferenceConfig.internalValue = value;
  }
  public resetInferenceConfig() {
    this._inferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigInput() {
    return this._inferenceConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new AwsBedrockEvaluationJob.OutputDataConfigPropertyList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: AwsBedrockEvaluationJob.OutputDataConfigProperty[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBedrockEvaluationJob.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBedrockEvaluationJob.TimeoutsProperty) {
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
      application_type: cdktn.stringToTerraform(this._applicationType),
      customer_encryption_key_id: cdktn.stringToTerraform(this._customerEncryptionKeyId),
      job_description: cdktn.stringToTerraform(this._jobDescription),
      job_name: cdktn.stringToTerraform(this._jobName),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      skip_destroy: cdktn.booleanToTerraform(this._skipDestroy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      evaluation_config: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigPropertyToTerraform, true)(this._evaluationConfig.internalValue),
      inference_config: cdktn.listMapper(awsBedrockEvaluationJobInferenceConfigPropertyToTerraform, true)(this._inferenceConfig.internalValue),
      output_data_config: cdktn.listMapper(awsBedrockEvaluationJobOutputDataConfigPropertyToTerraform, true)(this._outputDataConfig.internalValue),
      timeouts: awsBedrockEvaluationJobTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktn.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_encryption_key_id: {
        value: cdktn.stringToHclTerraform(this._customerEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_description: {
        value: cdktn.stringToHclTerraform(this._jobDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktn.stringToHclTerraform(this._jobName),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktn.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      evaluation_config: {
        value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigPropertyToHclTerraform, true)(this._evaluationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockEvaluationJob.EvaluationConfigPropertyList",
      },
      inference_config: {
        value: cdktn.listMapperHcl(awsBedrockEvaluationJobInferenceConfigPropertyToHclTerraform, true)(this._inferenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockEvaluationJob.InferenceConfigPropertyList",
      },
      output_data_config: {
        value: cdktn.listMapperHcl(awsBedrockEvaluationJobOutputDataConfigPropertyToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockEvaluationJob.OutputDataConfigPropertyList",
      },
      timeouts: {
        value: awsBedrockEvaluationJobTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBedrockEvaluationJob.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBedrockEvaluationJobValuePropertyToTerraform(struct?: AwsBedrockEvaluationJob.ValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    float_value: cdktn.numberToTerraform(struct!.floatValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function awsBedrockEvaluationJobValuePropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.ValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    float_value: {
      value: cdktn.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRatingScalePropertyToTerraform(struct?: AwsBedrockEvaluationJob.RatingScaleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    value: cdktn.listMapper(awsBedrockEvaluationJobValuePropertyToTerraform, true)(struct!.value),
  }
}


export function awsBedrockEvaluationJobRatingScalePropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RatingScaleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobValuePropertyToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobCustomMetricDefinitionPropertyToTerraform(struct?: AwsBedrockEvaluationJob.CustomMetricDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instructions: cdktn.stringToTerraform(struct!.instructions),
    name: cdktn.stringToTerraform(struct!.name),
    rating_scale: cdktn.listMapper(awsBedrockEvaluationJobRatingScalePropertyToTerraform, true)(struct!.ratingScale),
  }
}


export function awsBedrockEvaluationJobCustomMetricDefinitionPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.CustomMetricDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instructions: {
      value: cdktn.stringToHclTerraform(struct!.instructions),
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
    rating_scale: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRatingScalePropertyToHclTerraform, true)(struct!.ratingScale),
      isBlock: true,
      type: "list",
      storageClassType: "RatingScalePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric_definition: cdktn.listMapper(awsBedrockEvaluationJobCustomMetricDefinitionPropertyToTerraform, true)(struct!.customMetricDefinition),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric_definition: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobCustomMetricDefinitionPropertyToHclTerraform, true)(struct!.customMetricDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "CustomMetricDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_evaluator_model: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyToTerraform, true)(struct!.bedrockEvaluatorModel),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_evaluator_model: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyToHclTerraform, true)(struct!.bedrockEvaluatorModel),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobCustomMetricConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.CustomMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyToTerraform, true)(struct!.customMetric),
    evaluator_model_config: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyToTerraform, true)(struct!.evaluatorModelConfig),
  }
}


export function awsBedrockEvaluationJobCustomMetricConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.CustomMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyToHclTerraform, true)(struct!.customMetric),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyList",
    },
    evaluator_model_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyToHclTerraform, true)(struct!.evaluatorModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    dataset_location: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyToTerraform, true)(struct!.datasetLocation),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty | cdktn.IResolvable): any {
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
    dataset_location: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyToHclTerraform, true)(struct!.datasetLocation),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    dataset: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyToTerraform, true)(struct!.dataset),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedDatasetMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyToHclTerraform, true)(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedEvaluatorModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_evaluator_model: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyToTerraform, true)(struct!.bedrockEvaluatorModel),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigAutomatedEvaluatorModelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_evaluator_model: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyToHclTerraform, true)(struct!.bedrockEvaluatorModel),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobAutomatedPropertyToTerraform(struct?: AwsBedrockEvaluationJob.AutomatedProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric_config: cdktn.listMapper(awsBedrockEvaluationJobCustomMetricConfigPropertyToTerraform, true)(struct!.customMetricConfig),
    dataset_metric_config: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigPropertyToTerraform, true)(struct!.datasetMetricConfig),
    evaluator_model_config: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigPropertyToTerraform, true)(struct!.evaluatorModelConfig),
  }
}


export function awsBedrockEvaluationJobAutomatedPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.AutomatedProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobCustomMetricConfigPropertyToHclTerraform, true)(struct!.customMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomMetricConfigPropertyList",
    },
    dataset_metric_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigPropertyToHclTerraform, true)(struct!.datasetMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedDatasetMetricConfigPropertyList",
    },
    evaluator_model_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigPropertyToHclTerraform, true)(struct!.evaluatorModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigAutomatedEvaluatorModelConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigHumanCustomMetricPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanCustomMetricProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    rating_method: cdktn.stringToTerraform(struct!.ratingMethod),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigHumanCustomMetricPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanCustomMetricProperty | cdktn.IResolvable): any {
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
    rating_method: {
      value: cdktn.stringToHclTerraform(struct!.ratingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigDatasetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    dataset_location: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyToTerraform, true)(struct!.datasetLocation),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigDatasetProperty | cdktn.IResolvable): any {
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
    dataset_location: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyToHclTerraform, true)(struct!.datasetLocation),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    dataset: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetPropertyToTerraform, true)(struct!.dataset),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigHumanDatasetMetricConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetPropertyToHclTerraform, true)(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigHumanDatasetMetricConfigDatasetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobHumanWorkflowConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.HumanWorkflowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_definition_arn: cdktn.stringToTerraform(struct!.flowDefinitionArn),
    instructions: cdktn.stringToTerraform(struct!.instructions),
  }
}


export function awsBedrockEvaluationJobHumanWorkflowConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.HumanWorkflowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_definition_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktn.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobHumanPropertyToTerraform(struct?: AwsBedrockEvaluationJob.HumanProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigHumanCustomMetricPropertyToTerraform, true)(struct!.customMetric),
    dataset_metric_config: cdktn.listMapper(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigPropertyToTerraform, true)(struct!.datasetMetricConfig),
    human_workflow_config: cdktn.listMapper(awsBedrockEvaluationJobHumanWorkflowConfigPropertyToTerraform, true)(struct!.humanWorkflowConfig),
  }
}


export function awsBedrockEvaluationJobHumanPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.HumanProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigHumanCustomMetricPropertyToHclTerraform, true)(struct!.customMetric),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigHumanCustomMetricPropertyList",
    },
    dataset_metric_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigPropertyToHclTerraform, true)(struct!.datasetMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluationConfigHumanDatasetMetricConfigPropertyList",
    },
    human_workflow_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobHumanWorkflowConfigPropertyToHclTerraform, true)(struct!.humanWorkflowConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HumanWorkflowConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobEvaluationConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automated: cdktn.listMapper(awsBedrockEvaluationJobAutomatedPropertyToTerraform, true)(struct!.automated),
    human: cdktn.listMapper(awsBedrockEvaluationJobHumanPropertyToTerraform, true)(struct!.human),
  }
}


export function awsBedrockEvaluationJobEvaluationConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.EvaluationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automated: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobAutomatedPropertyToHclTerraform, true)(struct!.automated),
      isBlock: true,
      type: "list",
      storageClassType: "AutomatedPropertyList",
    },
    human: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobHumanPropertyToHclTerraform, true)(struct!.human),
      isBlock: true,
      type: "list",
      storageClassType: "HumanPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobPerformanceConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.PerformanceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    latency: cdktn.stringToTerraform(struct!.latency),
  }
}


export function awsBedrockEvaluationJobPerformanceConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.PerformanceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    latency: {
      value: cdktn.stringToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobBedrockModelPropertyToTerraform(struct?: AwsBedrockEvaluationJob.BedrockModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_params: cdktn.stringToTerraform(struct!.inferenceParams),
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
    performance_config: cdktn.listMapper(awsBedrockEvaluationJobPerformanceConfigPropertyToTerraform, true)(struct!.performanceConfig),
  }
}


export function awsBedrockEvaluationJobBedrockModelPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.BedrockModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_params: {
      value: cdktn.stringToHclTerraform(struct!.inferenceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobPerformanceConfigPropertyToHclTerraform, true)(struct!.performanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PerformanceConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobPrecomputedInferenceSourcePropertyToTerraform(struct?: AwsBedrockEvaluationJob.PrecomputedInferenceSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_source_identifier: cdktn.stringToTerraform(struct!.inferenceSourceIdentifier),
  }
}


export function awsBedrockEvaluationJobPrecomputedInferenceSourcePropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.PrecomputedInferenceSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.inferenceSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobModelPropertyToTerraform(struct?: AwsBedrockEvaluationJob.ModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_model: cdktn.listMapper(awsBedrockEvaluationJobBedrockModelPropertyToTerraform, true)(struct!.bedrockModel),
    precomputed_inference_source: cdktn.listMapper(awsBedrockEvaluationJobPrecomputedInferenceSourcePropertyToTerraform, true)(struct!.precomputedInferenceSource),
  }
}


export function awsBedrockEvaluationJobModelPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.ModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_model: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobBedrockModelPropertyToHclTerraform, true)(struct!.bedrockModel),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockModelPropertyList",
    },
    precomputed_inference_source: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobPrecomputedInferenceSourcePropertyToHclTerraform, true)(struct!.precomputedInferenceSource),
      isBlock: true,
      type: "list",
      storageClassType: "PrecomputedInferenceSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_results: cdktn.numberToTerraform(struct!.numberOfResults),
  }
}


export function awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_results: {
      value: cdktn.numberToHclTerraform(struct!.numberOfResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRetrievalConfigurationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RetrievalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vector_search_configuration: cdktn.listMapper(awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyToTerraform, true)(struct!.vectorSearchConfiguration),
  }
}


export function awsBedrockEvaluationJobRetrievalConfigurationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RetrievalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vector_search_configuration: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyToHclTerraform, true)(struct!.vectorSearchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRetrieveAndGenerateConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RetrieveAndGenerateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    retrieval_configuration: cdktn.listMapper(awsBedrockEvaluationJobRetrievalConfigurationPropertyToTerraform, true)(struct!.retrievalConfiguration),
  }
}


export function awsBedrockEvaluationJobRetrieveAndGenerateConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RetrieveAndGenerateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_configuration: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRetrievalConfigurationPropertyToHclTerraform, true)(struct!.retrievalConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RetrievalConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_results: cdktn.numberToTerraform(struct!.numberOfResults),
  }
}


export function awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_results: {
      value: cdktn.numberToHclTerraform(struct!.numberOfResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobKnowledgeBaseRetrievalConfigurationPropertyToTerraform(struct?: AwsBedrockEvaluationJob.KnowledgeBaseRetrievalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vector_search_configuration: cdktn.listMapper(awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyToTerraform, true)(struct!.vectorSearchConfiguration),
  }
}


export function awsBedrockEvaluationJobKnowledgeBaseRetrievalConfigurationPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.KnowledgeBaseRetrievalConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vector_search_configuration: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyToHclTerraform, true)(struct!.vectorSearchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRetrieveConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RetrieveConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
    knowledge_base_retrieval_configuration: cdktn.listMapper(awsBedrockEvaluationJobKnowledgeBaseRetrievalConfigurationPropertyToTerraform, true)(struct!.knowledgeBaseRetrievalConfiguration),
  }
}


export function awsBedrockEvaluationJobRetrieveConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RetrieveConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knowledge_base_retrieval_configuration: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobKnowledgeBaseRetrievalConfigurationPropertyToHclTerraform, true)(struct!.knowledgeBaseRetrievalConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseRetrievalConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobKnowledgeBaseConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.KnowledgeBaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieve_and_generate_config: cdktn.listMapper(awsBedrockEvaluationJobRetrieveAndGenerateConfigPropertyToTerraform, true)(struct!.retrieveAndGenerateConfig),
    retrieve_config: cdktn.listMapper(awsBedrockEvaluationJobRetrieveConfigPropertyToTerraform, true)(struct!.retrieveConfig),
  }
}


export function awsBedrockEvaluationJobKnowledgeBaseConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.KnowledgeBaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieve_and_generate_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRetrieveAndGenerateConfigPropertyToHclTerraform, true)(struct!.retrieveAndGenerateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RetrieveAndGenerateConfigPropertyList",
    },
    retrieve_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRetrieveConfigPropertyToHclTerraform, true)(struct!.retrieveConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RetrieveConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRetrieveAndGenerateSourceConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RetrieveAndGenerateSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rag_source_identifier: cdktn.stringToTerraform(struct!.ragSourceIdentifier),
  }
}


export function awsBedrockEvaluationJobRetrieveAndGenerateSourceConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RetrieveAndGenerateSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rag_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.ragSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRetrieveSourceConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RetrieveSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rag_source_identifier: cdktn.stringToTerraform(struct!.ragSourceIdentifier),
  }
}


export function awsBedrockEvaluationJobRetrieveSourceConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RetrieveSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rag_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.ragSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobPrecomputedRagSourceConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.PrecomputedRagSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieve_and_generate_source_config: cdktn.listMapper(awsBedrockEvaluationJobRetrieveAndGenerateSourceConfigPropertyToTerraform, true)(struct!.retrieveAndGenerateSourceConfig),
    retrieve_source_config: cdktn.listMapper(awsBedrockEvaluationJobRetrieveSourceConfigPropertyToTerraform, true)(struct!.retrieveSourceConfig),
  }
}


export function awsBedrockEvaluationJobPrecomputedRagSourceConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.PrecomputedRagSourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieve_and_generate_source_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRetrieveAndGenerateSourceConfigPropertyToHclTerraform, true)(struct!.retrieveAndGenerateSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RetrieveAndGenerateSourceConfigPropertyList",
    },
    retrieve_source_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRetrieveSourceConfigPropertyToHclTerraform, true)(struct!.retrieveSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RetrieveSourceConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobRagConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.RagConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_config: cdktn.listMapper(awsBedrockEvaluationJobKnowledgeBaseConfigPropertyToTerraform, true)(struct!.knowledgeBaseConfig),
    precomputed_rag_source_config: cdktn.listMapper(awsBedrockEvaluationJobPrecomputedRagSourceConfigPropertyToTerraform, true)(struct!.precomputedRagSourceConfig),
  }
}


export function awsBedrockEvaluationJobRagConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.RagConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobKnowledgeBaseConfigPropertyToHclTerraform, true)(struct!.knowledgeBaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeBaseConfigPropertyList",
    },
    precomputed_rag_source_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobPrecomputedRagSourceConfigPropertyToHclTerraform, true)(struct!.precomputedRagSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PrecomputedRagSourceConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobInferenceConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.listMapper(awsBedrockEvaluationJobModelPropertyToTerraform, true)(struct!.model),
    rag_config: cdktn.listMapper(awsBedrockEvaluationJobRagConfigPropertyToTerraform, true)(struct!.ragConfig),
  }
}


export function awsBedrockEvaluationJobInferenceConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.InferenceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobModelPropertyToHclTerraform, true)(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "ModelPropertyList",
    },
    rag_config: {
      value: cdktn.listMapperHcl(awsBedrockEvaluationJobRagConfigPropertyToHclTerraform, true)(struct!.ragConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RagConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobOutputDataConfigPropertyToTerraform(struct?: AwsBedrockEvaluationJob.OutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsBedrockEvaluationJobOutputDataConfigPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.OutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockEvaluationJobTimeoutsPropertyToTerraform(struct?: AwsBedrockEvaluationJob.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsBedrockEvaluationJobTimeoutsPropertyToHclTerraform(struct?: AwsBedrockEvaluationJob.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBedrockEvaluationJob {
export interface ValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#float_value AwsBedrockEvaluationJob#float_value}
  */
  readonly floatValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#string_value AwsBedrockEvaluationJob#string_value}
  */
  readonly stringValue?: string;
}
export class ValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatValue = value.floatValue;
      this._stringValue = value.stringValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class ValuePropertyList extends cdktn.ComplexList {
  public internalValue? : ValueProperty[] | cdktn.IResolvable

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
  public get(index: number): ValuePropertyOutputReference {
    return new ValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RatingScaleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#definition AwsBedrockEvaluationJob#definition}
  */
  readonly definition: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#value AwsBedrockEvaluationJob#value}
  */
  readonly value?: ValueProperty[] | cdktn.IResolvable;
}
export class RatingScalePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RatingScaleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RatingScaleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._value.internalValue = value.value;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ValuePropertyList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ValueProperty[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class RatingScalePropertyList extends cdktn.ComplexList {
  public internalValue? : RatingScaleProperty[] | cdktn.IResolvable

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
  public get(index: number): RatingScalePropertyOutputReference {
    return new RatingScalePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomMetricDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#instructions AwsBedrockEvaluationJob#instructions}
  */
  readonly instructions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#name AwsBedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * rating_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#rating_scale AwsBedrockEvaluationJob#rating_scale}
  */
  readonly ratingScale?: RatingScaleProperty[] | cdktn.IResolvable;
}
export class CustomMetricDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomMetricDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ratingScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingScale = this._ratingScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomMetricDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instructions = undefined;
      this._name = undefined;
      this._ratingScale.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instructions = value.instructions;
      this._name = value.name;
      this._ratingScale.internalValue = value.ratingScale;
    }
  }

  // instructions - computed: false, optional: false, required: true
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
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

  // rating_scale - computed: false, optional: true, required: false
  private _ratingScale = new RatingScalePropertyList(this, "rating_scale", false);
  public get ratingScale() {
    return this._ratingScale;
  }
  public putRatingScale(value: RatingScaleProperty[] | cdktn.IResolvable) {
    this._ratingScale.internalValue = value;
  }
  public resetRatingScale() {
    this._ratingScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingScaleInput() {
    return this._ratingScale.internalValue;
  }
}

export class CustomMetricDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomMetricDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomMetricDefinitionPropertyOutputReference {
    return new CustomMetricDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty {
  /**
  * custom_metric_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#custom_metric_definition AwsBedrockEvaluationJob#custom_metric_definition}
  */
  readonly customMetricDefinition?: CustomMetricDefinitionProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetricDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricDefinition = this._customMetricDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetricDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetricDefinition.internalValue = value.customMetricDefinition;
    }
  }

  // custom_metric_definition - computed: false, optional: true, required: false
  private _customMetricDefinition = new CustomMetricDefinitionPropertyList(this, "custom_metric_definition", false);
  public get customMetricDefinition() {
    return this._customMetricDefinition;
  }
  public putCustomMetricDefinition(value: CustomMetricDefinitionProperty[] | cdktn.IResolvable) {
    this._customMetricDefinition.internalValue = value;
  }
  public resetCustomMetricDefinition() {
    this._customMetricDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricDefinitionInput() {
    return this._customMetricDefinition.internalValue;
  }
}

export class EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyOutputReference {
    return new EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#model_identifier AwsBedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
}
export class EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelIdentifier = value.modelIdentifier;
    }
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }
}

export class EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference {
    return new EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty {
  /**
  * bedrock_evaluator_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#bedrock_evaluator_model AwsBedrockEvaluationJob#bedrock_evaluator_model}
  */
  readonly bedrockEvaluatorModel?: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEvaluatorModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEvaluatorModel = this._bedrockEvaluatorModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = value.bedrockEvaluatorModel;
    }
  }

  // bedrock_evaluator_model - computed: false, optional: true, required: false
  private _bedrockEvaluatorModel = new EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelPropertyList(this, "bedrock_evaluator_model", false);
  public get bedrockEvaluatorModel() {
    return this._bedrockEvaluatorModel;
  }
  public putBedrockEvaluatorModel(value: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable) {
    this._bedrockEvaluatorModel.internalValue = value;
  }
  public resetBedrockEvaluatorModel() {
    this._bedrockEvaluatorModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEvaluatorModelInput() {
    return this._bedrockEvaluatorModel.internalValue;
  }
}

export class EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyOutputReference {
    return new EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomMetricConfigProperty {
  /**
  * custom_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#custom_metric AwsBedrockEvaluationJob#custom_metric}
  */
  readonly customMetric?: EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty[] | cdktn.IResolvable;
  /**
  * evaluator_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#evaluator_model_config AwsBedrockEvaluationJob#evaluator_model_config}
  */
  readonly evaluatorModelConfig?: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty[] | cdktn.IResolvable;
}
export class CustomMetricConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomMetricConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric?.internalValue;
    }
    if (this._evaluatorModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorModelConfig = this._evaluatorModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomMetricConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = undefined;
      this._evaluatorModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = value.customMetric;
      this._evaluatorModelConfig.internalValue = value.evaluatorModelConfig;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric = new EvaluationConfigAutomatedCustomMetricConfigCustomMetricPropertyList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }
  public putCustomMetric(value: EvaluationConfigAutomatedCustomMetricConfigCustomMetricProperty[] | cdktn.IResolvable) {
    this._customMetric.internalValue = value;
  }
  public resetCustomMetric() {
    this._customMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric.internalValue;
  }

  // evaluator_model_config - computed: false, optional: true, required: false
  private _evaluatorModelConfig = new EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigPropertyList(this, "evaluator_model_config", false);
  public get evaluatorModelConfig() {
    return this._evaluatorModelConfig;
  }
  public putEvaluatorModelConfig(value: EvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigProperty[] | cdktn.IResolvable) {
    this._evaluatorModelConfig.internalValue = value;
  }
  public resetEvaluatorModelConfig() {
    this._evaluatorModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorModelConfigInput() {
    return this._evaluatorModelConfig.internalValue;
  }
}

export class CustomMetricConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomMetricConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomMetricConfigPropertyOutputReference {
    return new CustomMetricConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#s3_uri AwsBedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference {
    return new EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#name AwsBedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * dataset_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset_location AwsBedrockEvaluationJob#dataset_location}
  */
  readonly datasetLocation?: EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._datasetLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetLocation = this._datasetLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._datasetLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._datasetLocation.internalValue = value.datasetLocation;
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

  // dataset_location - computed: false, optional: true, required: false
  private _datasetLocation = new EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationPropertyList(this, "dataset_location", false);
  public get datasetLocation() {
    return this._datasetLocation;
  }
  public putDatasetLocation(value: EvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable) {
    this._datasetLocation.internalValue = value;
  }
  public resetDatasetLocation() {
    this._datasetLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetLocationInput() {
    return this._datasetLocation.internalValue;
  }
}

export class EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyOutputReference {
    return new EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedDatasetMetricConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#metric_names AwsBedrockEvaluationJob#metric_names}
  */
  readonly metricNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#task_type AwsBedrockEvaluationJob#task_type}
  */
  readonly taskType: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset AwsBedrockEvaluationJob#dataset}
  */
  readonly dataset?: EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigAutomatedDatasetMetricConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedDatasetMetricConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedDatasetMetricConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._taskType = undefined;
      this._dataset.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._taskType = value.taskType;
      this._dataset.internalValue = value.dataset;
    }
  }

  // metric_names - computed: false, optional: false, required: true
  private _metricNames?: string[]; 
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new EvaluationConfigAutomatedDatasetMetricConfigDatasetPropertyList(this, "dataset", false);
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: EvaluationConfigAutomatedDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}

export class EvaluationConfigAutomatedDatasetMetricConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedDatasetMetricConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedDatasetMetricConfigPropertyOutputReference {
    return new EvaluationConfigAutomatedDatasetMetricConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#model_identifier AwsBedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
}
export class EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelIdentifier = value.modelIdentifier;
    }
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }
}

export class EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference {
    return new EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigAutomatedEvaluatorModelConfigProperty {
  /**
  * bedrock_evaluator_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#bedrock_evaluator_model AwsBedrockEvaluationJob#bedrock_evaluator_model}
  */
  readonly bedrockEvaluatorModel?: EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigAutomatedEvaluatorModelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigAutomatedEvaluatorModelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEvaluatorModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEvaluatorModel = this._bedrockEvaluatorModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigAutomatedEvaluatorModelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = value.bedrockEvaluatorModel;
    }
  }

  // bedrock_evaluator_model - computed: false, optional: true, required: false
  private _bedrockEvaluatorModel = new EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelPropertyList(this, "bedrock_evaluator_model", false);
  public get bedrockEvaluatorModel() {
    return this._bedrockEvaluatorModel;
  }
  public putBedrockEvaluatorModel(value: EvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelProperty[] | cdktn.IResolvable) {
    this._bedrockEvaluatorModel.internalValue = value;
  }
  public resetBedrockEvaluatorModel() {
    this._bedrockEvaluatorModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEvaluatorModelInput() {
    return this._bedrockEvaluatorModel.internalValue;
  }
}

export class EvaluationConfigAutomatedEvaluatorModelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigAutomatedEvaluatorModelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigAutomatedEvaluatorModelConfigPropertyOutputReference {
    return new EvaluationConfigAutomatedEvaluatorModelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomatedProperty {
  /**
  * custom_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#custom_metric_config AwsBedrockEvaluationJob#custom_metric_config}
  */
  readonly customMetricConfig?: CustomMetricConfigProperty[] | cdktn.IResolvable;
  /**
  * dataset_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset_metric_config AwsBedrockEvaluationJob#dataset_metric_config}
  */
  readonly datasetMetricConfig?: EvaluationConfigAutomatedDatasetMetricConfigProperty[] | cdktn.IResolvable;
  /**
  * evaluator_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#evaluator_model_config AwsBedrockEvaluationJob#evaluator_model_config}
  */
  readonly evaluatorModelConfig?: EvaluationConfigAutomatedEvaluatorModelConfigProperty[] | cdktn.IResolvable;
}
export class AutomatedPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutomatedProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricConfig = this._customMetricConfig?.internalValue;
    }
    if (this._datasetMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetMetricConfig = this._datasetMetricConfig?.internalValue;
    }
    if (this._evaluatorModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorModelConfig = this._evaluatorModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomatedProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetricConfig.internalValue = undefined;
      this._datasetMetricConfig.internalValue = undefined;
      this._evaluatorModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetricConfig.internalValue = value.customMetricConfig;
      this._datasetMetricConfig.internalValue = value.datasetMetricConfig;
      this._evaluatorModelConfig.internalValue = value.evaluatorModelConfig;
    }
  }

  // custom_metric_config - computed: false, optional: true, required: false
  private _customMetricConfig = new CustomMetricConfigPropertyList(this, "custom_metric_config", false);
  public get customMetricConfig() {
    return this._customMetricConfig;
  }
  public putCustomMetricConfig(value: CustomMetricConfigProperty[] | cdktn.IResolvable) {
    this._customMetricConfig.internalValue = value;
  }
  public resetCustomMetricConfig() {
    this._customMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricConfigInput() {
    return this._customMetricConfig.internalValue;
  }

  // dataset_metric_config - computed: false, optional: true, required: false
  private _datasetMetricConfig = new EvaluationConfigAutomatedDatasetMetricConfigPropertyList(this, "dataset_metric_config", false);
  public get datasetMetricConfig() {
    return this._datasetMetricConfig;
  }
  public putDatasetMetricConfig(value: EvaluationConfigAutomatedDatasetMetricConfigProperty[] | cdktn.IResolvable) {
    this._datasetMetricConfig.internalValue = value;
  }
  public resetDatasetMetricConfig() {
    this._datasetMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetMetricConfigInput() {
    return this._datasetMetricConfig.internalValue;
  }

  // evaluator_model_config - computed: false, optional: true, required: false
  private _evaluatorModelConfig = new EvaluationConfigAutomatedEvaluatorModelConfigPropertyList(this, "evaluator_model_config", false);
  public get evaluatorModelConfig() {
    return this._evaluatorModelConfig;
  }
  public putEvaluatorModelConfig(value: EvaluationConfigAutomatedEvaluatorModelConfigProperty[] | cdktn.IResolvable) {
    this._evaluatorModelConfig.internalValue = value;
  }
  public resetEvaluatorModelConfig() {
    this._evaluatorModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorModelConfigInput() {
    return this._evaluatorModelConfig.internalValue;
  }
}

export class AutomatedPropertyList extends cdktn.ComplexList {
  public internalValue? : AutomatedProperty[] | cdktn.IResolvable

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
  public get(index: number): AutomatedPropertyOutputReference {
    return new AutomatedPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigHumanCustomMetricProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#description AwsBedrockEvaluationJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#name AwsBedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#rating_method AwsBedrockEvaluationJob#rating_method}
  */
  readonly ratingMethod: string;
}
export class EvaluationConfigHumanCustomMetricPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigHumanCustomMetricProperty | cdktn.IResolvable | undefined {
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
    if (this._ratingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingMethod = this._ratingMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigHumanCustomMetricProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._ratingMethod = undefined;
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
      this._ratingMethod = value.ratingMethod;
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

  // rating_method - computed: false, optional: false, required: true
  private _ratingMethod?: string; 
  public get ratingMethod() {
    return this.getStringAttribute('rating_method');
  }
  public set ratingMethod(value: string) {
    this._ratingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingMethodInput() {
    return this._ratingMethod;
  }
}

export class EvaluationConfigHumanCustomMetricPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigHumanCustomMetricProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigHumanCustomMetricPropertyOutputReference {
    return new EvaluationConfigHumanCustomMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#s3_uri AwsBedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference {
    return new EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigHumanDatasetMetricConfigDatasetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#name AwsBedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * dataset_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset_location AwsBedrockEvaluationJob#dataset_location}
  */
  readonly datasetLocation?: EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigHumanDatasetMetricConfigDatasetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigHumanDatasetMetricConfigDatasetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._datasetLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetLocation = this._datasetLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigHumanDatasetMetricConfigDatasetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._datasetLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._datasetLocation.internalValue = value.datasetLocation;
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

  // dataset_location - computed: false, optional: true, required: false
  private _datasetLocation = new EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationPropertyList(this, "dataset_location", false);
  public get datasetLocation() {
    return this._datasetLocation;
  }
  public putDatasetLocation(value: EvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationProperty[] | cdktn.IResolvable) {
    this._datasetLocation.internalValue = value;
  }
  public resetDatasetLocation() {
    this._datasetLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetLocationInput() {
    return this._datasetLocation.internalValue;
  }
}

export class EvaluationConfigHumanDatasetMetricConfigDatasetPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigHumanDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigHumanDatasetMetricConfigDatasetPropertyOutputReference {
    return new EvaluationConfigHumanDatasetMetricConfigDatasetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigHumanDatasetMetricConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#metric_names AwsBedrockEvaluationJob#metric_names}
  */
  readonly metricNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#task_type AwsBedrockEvaluationJob#task_type}
  */
  readonly taskType: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset AwsBedrockEvaluationJob#dataset}
  */
  readonly dataset?: EvaluationConfigHumanDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigHumanDatasetMetricConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigHumanDatasetMetricConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigHumanDatasetMetricConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._taskType = undefined;
      this._dataset.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._taskType = value.taskType;
      this._dataset.internalValue = value.dataset;
    }
  }

  // metric_names - computed: false, optional: false, required: true
  private _metricNames?: string[]; 
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new EvaluationConfigHumanDatasetMetricConfigDatasetPropertyList(this, "dataset", false);
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: EvaluationConfigHumanDatasetMetricConfigDatasetProperty[] | cdktn.IResolvable) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}

export class EvaluationConfigHumanDatasetMetricConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigHumanDatasetMetricConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigHumanDatasetMetricConfigPropertyOutputReference {
    return new EvaluationConfigHumanDatasetMetricConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HumanWorkflowConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#flow_definition_arn AwsBedrockEvaluationJob#flow_definition_arn}
  */
  readonly flowDefinitionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#instructions AwsBedrockEvaluationJob#instructions}
  */
  readonly instructions?: string;
}
export class HumanWorkflowConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HumanWorkflowConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowDefinitionArn = this._flowDefinitionArn;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanWorkflowConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowDefinitionArn = undefined;
      this._instructions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowDefinitionArn = value.flowDefinitionArn;
      this._instructions = value.instructions;
    }
  }

  // flow_definition_arn - computed: false, optional: false, required: true
  private _flowDefinitionArn?: string; 
  public get flowDefinitionArn() {
    return this.getStringAttribute('flow_definition_arn');
  }
  public set flowDefinitionArn(value: string) {
    this._flowDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionArnInput() {
    return this._flowDefinitionArn;
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }
}

export class HumanWorkflowConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HumanWorkflowConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HumanWorkflowConfigPropertyOutputReference {
    return new HumanWorkflowConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HumanProperty {
  /**
  * custom_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#custom_metric AwsBedrockEvaluationJob#custom_metric}
  */
  readonly customMetric?: EvaluationConfigHumanCustomMetricProperty[] | cdktn.IResolvable;
  /**
  * dataset_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#dataset_metric_config AwsBedrockEvaluationJob#dataset_metric_config}
  */
  readonly datasetMetricConfig?: EvaluationConfigHumanDatasetMetricConfigProperty[] | cdktn.IResolvable;
  /**
  * human_workflow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#human_workflow_config AwsBedrockEvaluationJob#human_workflow_config}
  */
  readonly humanWorkflowConfig?: HumanWorkflowConfigProperty[] | cdktn.IResolvable;
}
export class HumanPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HumanProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric?.internalValue;
    }
    if (this._datasetMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetMetricConfig = this._datasetMetricConfig?.internalValue;
    }
    if (this._humanWorkflowConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanWorkflowConfig = this._humanWorkflowConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = undefined;
      this._datasetMetricConfig.internalValue = undefined;
      this._humanWorkflowConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = value.customMetric;
      this._datasetMetricConfig.internalValue = value.datasetMetricConfig;
      this._humanWorkflowConfig.internalValue = value.humanWorkflowConfig;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric = new EvaluationConfigHumanCustomMetricPropertyList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }
  public putCustomMetric(value: EvaluationConfigHumanCustomMetricProperty[] | cdktn.IResolvable) {
    this._customMetric.internalValue = value;
  }
  public resetCustomMetric() {
    this._customMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric.internalValue;
  }

  // dataset_metric_config - computed: false, optional: true, required: false
  private _datasetMetricConfig = new EvaluationConfigHumanDatasetMetricConfigPropertyList(this, "dataset_metric_config", false);
  public get datasetMetricConfig() {
    return this._datasetMetricConfig;
  }
  public putDatasetMetricConfig(value: EvaluationConfigHumanDatasetMetricConfigProperty[] | cdktn.IResolvable) {
    this._datasetMetricConfig.internalValue = value;
  }
  public resetDatasetMetricConfig() {
    this._datasetMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetMetricConfigInput() {
    return this._datasetMetricConfig.internalValue;
  }

  // human_workflow_config - computed: false, optional: true, required: false
  private _humanWorkflowConfig = new HumanWorkflowConfigPropertyList(this, "human_workflow_config", false);
  public get humanWorkflowConfig() {
    return this._humanWorkflowConfig;
  }
  public putHumanWorkflowConfig(value: HumanWorkflowConfigProperty[] | cdktn.IResolvable) {
    this._humanWorkflowConfig.internalValue = value;
  }
  public resetHumanWorkflowConfig() {
    this._humanWorkflowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanWorkflowConfigInput() {
    return this._humanWorkflowConfig.internalValue;
  }
}

export class HumanPropertyList extends cdktn.ComplexList {
  public internalValue? : HumanProperty[] | cdktn.IResolvable

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
  public get(index: number): HumanPropertyOutputReference {
    return new HumanPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvaluationConfigProperty {
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#automated AwsBedrockEvaluationJob#automated}
  */
  readonly automated?: AutomatedProperty[] | cdktn.IResolvable;
  /**
  * human block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#human AwsBedrockEvaluationJob#human}
  */
  readonly human?: HumanProperty[] | cdktn.IResolvable;
}
export class EvaluationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluationConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._human?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.human = this._human?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluationConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automated.internalValue = undefined;
      this._human.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automated.internalValue = value.automated;
      this._human.internalValue = value.human;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new AutomatedPropertyList(this, "automated", false);
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: AutomatedProperty[] | cdktn.IResolvable) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // human - computed: false, optional: true, required: false
  private _human = new HumanPropertyList(this, "human", false);
  public get human() {
    return this._human;
  }
  public putHuman(value: HumanProperty[] | cdktn.IResolvable) {
    this._human.internalValue = value;
  }
  public resetHuman() {
    this._human.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanInput() {
    return this._human.internalValue;
  }
}

export class EvaluationConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluationConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluationConfigPropertyOutputReference {
    return new EvaluationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PerformanceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#latency AwsBedrockEvaluationJob#latency}
  */
  readonly latency?: string;
}
export class PerformanceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PerformanceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PerformanceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latency = value.latency;
    }
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }
}

export class PerformanceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : PerformanceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): PerformanceConfigPropertyOutputReference {
    return new PerformanceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#inference_params AwsBedrockEvaluationJob#inference_params}
  */
  readonly inferenceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#model_identifier AwsBedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
  /**
  * performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#performance_config AwsBedrockEvaluationJob#performance_config}
  */
  readonly performanceConfig?: PerformanceConfigProperty[] | cdktn.IResolvable;
}
export class BedrockModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceParams = this._inferenceParams;
    }
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    if (this._performanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceConfig = this._performanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceParams = undefined;
      this._modelIdentifier = undefined;
      this._performanceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceParams = value.inferenceParams;
      this._modelIdentifier = value.modelIdentifier;
      this._performanceConfig.internalValue = value.performanceConfig;
    }
  }

  // inference_params - computed: false, optional: true, required: false
  private _inferenceParams?: string; 
  public get inferenceParams() {
    return this.getStringAttribute('inference_params');
  }
  public set inferenceParams(value: string) {
    this._inferenceParams = value;
  }
  public resetInferenceParams() {
    this._inferenceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceParamsInput() {
    return this._inferenceParams;
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }

  // performance_config - computed: false, optional: true, required: false
  private _performanceConfig = new PerformanceConfigPropertyList(this, "performance_config", false);
  public get performanceConfig() {
    return this._performanceConfig;
  }
  public putPerformanceConfig(value: PerformanceConfigProperty[] | cdktn.IResolvable) {
    this._performanceConfig.internalValue = value;
  }
  public resetPerformanceConfig() {
    this._performanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigInput() {
    return this._performanceConfig.internalValue;
  }
}

export class BedrockModelPropertyList extends cdktn.ComplexList {
  public internalValue? : BedrockModelProperty[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelPropertyOutputReference {
    return new BedrockModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrecomputedInferenceSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#inference_source_identifier AwsBedrockEvaluationJob#inference_source_identifier}
  */
  readonly inferenceSourceIdentifier: string;
}
export class PrecomputedInferenceSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrecomputedInferenceSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSourceIdentifier = this._inferenceSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrecomputedInferenceSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceSourceIdentifier = value.inferenceSourceIdentifier;
    }
  }

  // inference_source_identifier - computed: false, optional: false, required: true
  private _inferenceSourceIdentifier?: string; 
  public get inferenceSourceIdentifier() {
    return this.getStringAttribute('inference_source_identifier');
  }
  public set inferenceSourceIdentifier(value: string) {
    this._inferenceSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSourceIdentifierInput() {
    return this._inferenceSourceIdentifier;
  }
}

export class PrecomputedInferenceSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : PrecomputedInferenceSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): PrecomputedInferenceSourcePropertyOutputReference {
    return new PrecomputedInferenceSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelProperty {
  /**
  * bedrock_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#bedrock_model AwsBedrockEvaluationJob#bedrock_model}
  */
  readonly bedrockModel?: BedrockModelProperty[] | cdktn.IResolvable;
  /**
  * precomputed_inference_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#precomputed_inference_source AwsBedrockEvaluationJob#precomputed_inference_source}
  */
  readonly precomputedInferenceSource?: PrecomputedInferenceSourceProperty[] | cdktn.IResolvable;
}
export class ModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockModel = this._bedrockModel?.internalValue;
    }
    if (this._precomputedInferenceSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.precomputedInferenceSource = this._precomputedInferenceSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockModel.internalValue = undefined;
      this._precomputedInferenceSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockModel.internalValue = value.bedrockModel;
      this._precomputedInferenceSource.internalValue = value.precomputedInferenceSource;
    }
  }

  // bedrock_model - computed: false, optional: true, required: false
  private _bedrockModel = new BedrockModelPropertyList(this, "bedrock_model", false);
  public get bedrockModel() {
    return this._bedrockModel;
  }
  public putBedrockModel(value: BedrockModelProperty[] | cdktn.IResolvable) {
    this._bedrockModel.internalValue = value;
  }
  public resetBedrockModel() {
    this._bedrockModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockModelInput() {
    return this._bedrockModel.internalValue;
  }

  // precomputed_inference_source - computed: false, optional: true, required: false
  private _precomputedInferenceSource = new PrecomputedInferenceSourcePropertyList(this, "precomputed_inference_source", false);
  public get precomputedInferenceSource() {
    return this._precomputedInferenceSource;
  }
  public putPrecomputedInferenceSource(value: PrecomputedInferenceSourceProperty[] | cdktn.IResolvable) {
    this._precomputedInferenceSource.internalValue = value;
  }
  public resetPrecomputedInferenceSource() {
    this._precomputedInferenceSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precomputedInferenceSourceInput() {
    return this._precomputedInferenceSource.internalValue;
  }
}

export class ModelPropertyList extends cdktn.ComplexList {
  public internalValue? : ModelProperty[] | cdktn.IResolvable

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
  public get(index: number): ModelPropertyOutputReference {
    return new ModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#number_of_results AwsBedrockEvaluationJob#number_of_results}
  */
  readonly numberOfResults?: number;
}
export class InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfResults = this._numberOfResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfResults = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfResults = value.numberOfResults;
    }
  }

  // number_of_results - computed: false, optional: true, required: false
  private _numberOfResults?: number; 
  public get numberOfResults() {
    return this.getNumberAttribute('number_of_results');
  }
  public set numberOfResults(value: number) {
    this._numberOfResults = value;
  }
  public resetNumberOfResults() {
    this._numberOfResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfResultsInput() {
    return this._numberOfResults;
  }
}

export class InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference {
    return new InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetrievalConfigurationProperty {
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#vector_search_configuration AwsBedrockEvaluationJob#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable;
}
export class RetrievalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetrievalConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchConfiguration = this._vectorSearchConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrievalConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = value.vectorSearchConfiguration;
    }
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationPropertyList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }
}

export class RetrievalConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RetrievalConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RetrievalConfigurationPropertyOutputReference {
    return new RetrievalConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetrieveAndGenerateConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#knowledge_base_id AwsBedrockEvaluationJob#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#model_arn AwsBedrockEvaluationJob#model_arn}
  */
  readonly modelArn: string;
  /**
  * retrieval_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#retrieval_configuration AwsBedrockEvaluationJob#retrieval_configuration}
  */
  readonly retrievalConfiguration?: RetrievalConfigurationProperty[] | cdktn.IResolvable;
}
export class RetrieveAndGenerateConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetrieveAndGenerateConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._retrievalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalConfiguration = this._retrievalConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrieveAndGenerateConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
      this._modelArn = undefined;
      this._retrievalConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._modelArn = value.modelArn;
      this._retrievalConfiguration.internalValue = value.retrievalConfiguration;
    }
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // retrieval_configuration - computed: false, optional: true, required: false
  private _retrievalConfiguration = new RetrievalConfigurationPropertyList(this, "retrieval_configuration", false);
  public get retrievalConfiguration() {
    return this._retrievalConfiguration;
  }
  public putRetrievalConfiguration(value: RetrievalConfigurationProperty[] | cdktn.IResolvable) {
    this._retrievalConfiguration.internalValue = value;
  }
  public resetRetrievalConfiguration() {
    this._retrievalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalConfigurationInput() {
    return this._retrievalConfiguration.internalValue;
  }
}

export class RetrieveAndGenerateConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RetrieveAndGenerateConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RetrieveAndGenerateConfigPropertyOutputReference {
    return new RetrieveAndGenerateConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#number_of_results AwsBedrockEvaluationJob#number_of_results}
  */
  readonly numberOfResults?: number;
}
export class InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfResults = this._numberOfResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfResults = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfResults = value.numberOfResults;
    }
  }

  // number_of_results - computed: false, optional: true, required: false
  private _numberOfResults?: number; 
  public get numberOfResults() {
    return this.getNumberAttribute('number_of_results');
  }
  public set numberOfResults(value: number) {
    this._numberOfResults = value;
  }
  public resetNumberOfResults() {
    this._numberOfResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfResultsInput() {
    return this._numberOfResults;
  }
}

export class InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference {
    return new InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseRetrievalConfigurationProperty {
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#vector_search_configuration AwsBedrockEvaluationJob#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseRetrievalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseRetrievalConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchConfiguration = this._vectorSearchConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseRetrievalConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = value.vectorSearchConfiguration;
    }
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationPropertyList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: InferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationProperty[] | cdktn.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }
}

export class KnowledgeBaseRetrievalConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseRetrievalConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseRetrievalConfigurationPropertyOutputReference {
    return new KnowledgeBaseRetrievalConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetrieveConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#knowledge_base_id AwsBedrockEvaluationJob#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * knowledge_base_retrieval_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#knowledge_base_retrieval_configuration AwsBedrockEvaluationJob#knowledge_base_retrieval_configuration}
  */
  readonly knowledgeBaseRetrievalConfiguration?: KnowledgeBaseRetrievalConfigurationProperty[] | cdktn.IResolvable;
}
export class RetrieveConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetrieveConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._knowledgeBaseRetrievalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseRetrievalConfiguration = this._knowledgeBaseRetrievalConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrieveConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
      this._knowledgeBaseRetrievalConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._knowledgeBaseRetrievalConfiguration.internalValue = value.knowledgeBaseRetrievalConfiguration;
    }
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // knowledge_base_retrieval_configuration - computed: false, optional: true, required: false
  private _knowledgeBaseRetrievalConfiguration = new KnowledgeBaseRetrievalConfigurationPropertyList(this, "knowledge_base_retrieval_configuration", false);
  public get knowledgeBaseRetrievalConfiguration() {
    return this._knowledgeBaseRetrievalConfiguration;
  }
  public putKnowledgeBaseRetrievalConfiguration(value: KnowledgeBaseRetrievalConfigurationProperty[] | cdktn.IResolvable) {
    this._knowledgeBaseRetrievalConfiguration.internalValue = value;
  }
  public resetKnowledgeBaseRetrievalConfiguration() {
    this._knowledgeBaseRetrievalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseRetrievalConfigurationInput() {
    return this._knowledgeBaseRetrievalConfiguration.internalValue;
  }
}

export class RetrieveConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RetrieveConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RetrieveConfigPropertyOutputReference {
    return new RetrieveConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeBaseConfigProperty {
  /**
  * retrieve_and_generate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#retrieve_and_generate_config AwsBedrockEvaluationJob#retrieve_and_generate_config}
  */
  readonly retrieveAndGenerateConfig?: RetrieveAndGenerateConfigProperty[] | cdktn.IResolvable;
  /**
  * retrieve_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#retrieve_config AwsBedrockEvaluationJob#retrieve_config}
  */
  readonly retrieveConfig?: RetrieveConfigProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KnowledgeBaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrieveAndGenerateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveAndGenerateConfig = this._retrieveAndGenerateConfig?.internalValue;
    }
    if (this._retrieveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveConfig = this._retrieveConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeBaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateConfig.internalValue = undefined;
      this._retrieveConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateConfig.internalValue = value.retrieveAndGenerateConfig;
      this._retrieveConfig.internalValue = value.retrieveConfig;
    }
  }

  // retrieve_and_generate_config - computed: false, optional: true, required: false
  private _retrieveAndGenerateConfig = new RetrieveAndGenerateConfigPropertyList(this, "retrieve_and_generate_config", false);
  public get retrieveAndGenerateConfig() {
    return this._retrieveAndGenerateConfig;
  }
  public putRetrieveAndGenerateConfig(value: RetrieveAndGenerateConfigProperty[] | cdktn.IResolvable) {
    this._retrieveAndGenerateConfig.internalValue = value;
  }
  public resetRetrieveAndGenerateConfig() {
    this._retrieveAndGenerateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveAndGenerateConfigInput() {
    return this._retrieveAndGenerateConfig.internalValue;
  }

  // retrieve_config - computed: false, optional: true, required: false
  private _retrieveConfig = new RetrieveConfigPropertyList(this, "retrieve_config", false);
  public get retrieveConfig() {
    return this._retrieveConfig;
  }
  public putRetrieveConfig(value: RetrieveConfigProperty[] | cdktn.IResolvable) {
    this._retrieveConfig.internalValue = value;
  }
  public resetRetrieveConfig() {
    this._retrieveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveConfigInput() {
    return this._retrieveConfig.internalValue;
  }
}

export class KnowledgeBaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : KnowledgeBaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): KnowledgeBaseConfigPropertyOutputReference {
    return new KnowledgeBaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetrieveAndGenerateSourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#rag_source_identifier AwsBedrockEvaluationJob#rag_source_identifier}
  */
  readonly ragSourceIdentifier: string;
}
export class RetrieveAndGenerateSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetrieveAndGenerateSourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragSourceIdentifier = this._ragSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrieveAndGenerateSourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = value.ragSourceIdentifier;
    }
  }

  // rag_source_identifier - computed: false, optional: false, required: true
  private _ragSourceIdentifier?: string; 
  public get ragSourceIdentifier() {
    return this.getStringAttribute('rag_source_identifier');
  }
  public set ragSourceIdentifier(value: string) {
    this._ragSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragSourceIdentifierInput() {
    return this._ragSourceIdentifier;
  }
}

export class RetrieveAndGenerateSourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RetrieveAndGenerateSourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RetrieveAndGenerateSourceConfigPropertyOutputReference {
    return new RetrieveAndGenerateSourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetrieveSourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#rag_source_identifier AwsBedrockEvaluationJob#rag_source_identifier}
  */
  readonly ragSourceIdentifier: string;
}
export class RetrieveSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetrieveSourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragSourceIdentifier = this._ragSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrieveSourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = value.ragSourceIdentifier;
    }
  }

  // rag_source_identifier - computed: false, optional: false, required: true
  private _ragSourceIdentifier?: string; 
  public get ragSourceIdentifier() {
    return this.getStringAttribute('rag_source_identifier');
  }
  public set ragSourceIdentifier(value: string) {
    this._ragSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragSourceIdentifierInput() {
    return this._ragSourceIdentifier;
  }
}

export class RetrieveSourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RetrieveSourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RetrieveSourceConfigPropertyOutputReference {
    return new RetrieveSourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrecomputedRagSourceConfigProperty {
  /**
  * retrieve_and_generate_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#retrieve_and_generate_source_config AwsBedrockEvaluationJob#retrieve_and_generate_source_config}
  */
  readonly retrieveAndGenerateSourceConfig?: RetrieveAndGenerateSourceConfigProperty[] | cdktn.IResolvable;
  /**
  * retrieve_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#retrieve_source_config AwsBedrockEvaluationJob#retrieve_source_config}
  */
  readonly retrieveSourceConfig?: RetrieveSourceConfigProperty[] | cdktn.IResolvable;
}
export class PrecomputedRagSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrecomputedRagSourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrieveAndGenerateSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveAndGenerateSourceConfig = this._retrieveAndGenerateSourceConfig?.internalValue;
    }
    if (this._retrieveSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveSourceConfig = this._retrieveSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrecomputedRagSourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateSourceConfig.internalValue = undefined;
      this._retrieveSourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateSourceConfig.internalValue = value.retrieveAndGenerateSourceConfig;
      this._retrieveSourceConfig.internalValue = value.retrieveSourceConfig;
    }
  }

  // retrieve_and_generate_source_config - computed: false, optional: true, required: false
  private _retrieveAndGenerateSourceConfig = new RetrieveAndGenerateSourceConfigPropertyList(this, "retrieve_and_generate_source_config", false);
  public get retrieveAndGenerateSourceConfig() {
    return this._retrieveAndGenerateSourceConfig;
  }
  public putRetrieveAndGenerateSourceConfig(value: RetrieveAndGenerateSourceConfigProperty[] | cdktn.IResolvable) {
    this._retrieveAndGenerateSourceConfig.internalValue = value;
  }
  public resetRetrieveAndGenerateSourceConfig() {
    this._retrieveAndGenerateSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveAndGenerateSourceConfigInput() {
    return this._retrieveAndGenerateSourceConfig.internalValue;
  }

  // retrieve_source_config - computed: false, optional: true, required: false
  private _retrieveSourceConfig = new RetrieveSourceConfigPropertyList(this, "retrieve_source_config", false);
  public get retrieveSourceConfig() {
    return this._retrieveSourceConfig;
  }
  public putRetrieveSourceConfig(value: RetrieveSourceConfigProperty[] | cdktn.IResolvable) {
    this._retrieveSourceConfig.internalValue = value;
  }
  public resetRetrieveSourceConfig() {
    this._retrieveSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveSourceConfigInput() {
    return this._retrieveSourceConfig.internalValue;
  }
}

export class PrecomputedRagSourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : PrecomputedRagSourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): PrecomputedRagSourceConfigPropertyOutputReference {
    return new PrecomputedRagSourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RagConfigProperty {
  /**
  * knowledge_base_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#knowledge_base_config AwsBedrockEvaluationJob#knowledge_base_config}
  */
  readonly knowledgeBaseConfig?: KnowledgeBaseConfigProperty[] | cdktn.IResolvable;
  /**
  * precomputed_rag_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#precomputed_rag_source_config AwsBedrockEvaluationJob#precomputed_rag_source_config}
  */
  readonly precomputedRagSourceConfig?: PrecomputedRagSourceConfigProperty[] | cdktn.IResolvable;
}
export class RagConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RagConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseConfig = this._knowledgeBaseConfig?.internalValue;
    }
    if (this._precomputedRagSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.precomputedRagSourceConfig = this._precomputedRagSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RagConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseConfig.internalValue = undefined;
      this._precomputedRagSourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseConfig.internalValue = value.knowledgeBaseConfig;
      this._precomputedRagSourceConfig.internalValue = value.precomputedRagSourceConfig;
    }
  }

  // knowledge_base_config - computed: false, optional: true, required: false
  private _knowledgeBaseConfig = new KnowledgeBaseConfigPropertyList(this, "knowledge_base_config", false);
  public get knowledgeBaseConfig() {
    return this._knowledgeBaseConfig;
  }
  public putKnowledgeBaseConfig(value: KnowledgeBaseConfigProperty[] | cdktn.IResolvable) {
    this._knowledgeBaseConfig.internalValue = value;
  }
  public resetKnowledgeBaseConfig() {
    this._knowledgeBaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseConfigInput() {
    return this._knowledgeBaseConfig.internalValue;
  }

  // precomputed_rag_source_config - computed: false, optional: true, required: false
  private _precomputedRagSourceConfig = new PrecomputedRagSourceConfigPropertyList(this, "precomputed_rag_source_config", false);
  public get precomputedRagSourceConfig() {
    return this._precomputedRagSourceConfig;
  }
  public putPrecomputedRagSourceConfig(value: PrecomputedRagSourceConfigProperty[] | cdktn.IResolvable) {
    this._precomputedRagSourceConfig.internalValue = value;
  }
  public resetPrecomputedRagSourceConfig() {
    this._precomputedRagSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precomputedRagSourceConfigInput() {
    return this._precomputedRagSourceConfig.internalValue;
  }
}

export class RagConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RagConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RagConfigPropertyOutputReference {
    return new RagConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InferenceConfigProperty {
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#model AwsBedrockEvaluationJob#model}
  */
  readonly model?: ModelProperty[] | cdktn.IResolvable;
  /**
  * rag_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#rag_config AwsBedrockEvaluationJob#rag_config}
  */
  readonly ragConfig?: RagConfigProperty[] | cdktn.IResolvable;
}
export class InferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InferenceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._ragConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragConfig = this._ragConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model.internalValue = undefined;
      this._ragConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model.internalValue = value.model;
      this._ragConfig.internalValue = value.ragConfig;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model = new ModelPropertyList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: ModelProperty[] | cdktn.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // rag_config - computed: false, optional: true, required: false
  private _ragConfig = new RagConfigPropertyList(this, "rag_config", false);
  public get ragConfig() {
    return this._ragConfig;
  }
  public putRagConfig(value: RagConfigProperty[] | cdktn.IResolvable) {
    this._ragConfig.internalValue = value;
  }
  public resetRagConfig() {
    this._ragConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragConfigInput() {
    return this._ragConfig.internalValue;
  }
}

export class InferenceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : InferenceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): InferenceConfigPropertyOutputReference {
    return new InferenceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#s3_uri AwsBedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class OutputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class OutputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputDataConfigPropertyOutputReference {
    return new OutputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#create AwsBedrockEvaluationJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrock_evaluation_job#delete AwsBedrockEvaluationJob#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
