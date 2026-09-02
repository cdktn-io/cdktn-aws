// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfLabelingJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#label_attribute_name TfLabelingJob#label_attribute_name}
  */
  readonly labelAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri TfLabelingJob#label_category_config_s3_uri}
  */
  readonly labelCategoryConfigS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#labeling_job_name TfLabelingJob#labeling_job_name}
  */
  readonly labelingJobName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#region TfLabelingJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#role_arn TfLabelingJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#stopping_conditions TfLabelingJob#stopping_conditions}
  */
  readonly stoppingConditions?: TfLabelingJob.StoppingConditionsProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#tags TfLabelingJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * human_task_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#human_task_config TfLabelingJob#human_task_config}
  */
  readonly humanTaskConfig?: TfLabelingJob.HumanTaskConfigProperty[] | cdktn.IResolvable;
  /**
  * input_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#input_config TfLabelingJob#input_config}
  */
  readonly inputConfig?: TfLabelingJob.InputConfigProperty[] | cdktn.IResolvable;
  /**
  * labeling_job_algorithms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config TfLabelingJob#labeling_job_algorithms_config}
  */
  readonly labelingJobAlgorithmsConfig?: TfLabelingJob.LabelingJobAlgorithmsConfigProperty[] | cdktn.IResolvable;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#output_config TfLabelingJob#output_config}
  */
  readonly outputConfig?: TfLabelingJob.OutputConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}
*/
export class TfLabelingJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_labeling_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfLabelingJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfLabelingJob to import
  * @param importFromId The id of the existing TfLabelingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfLabelingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_labeling_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfLabelingJobConfig
  */
  public constructor(scope: Construct, id: string, config: TfLabelingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_labeling_job',
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
    this._labelAttributeName = config.labelAttributeName;
    this._labelCategoryConfigS3Uri = config.labelCategoryConfigS3Uri;
    this._labelingJobName = config.labelingJobName;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._stoppingConditions.internalValue = config.stoppingConditions;
    this._tags = config.tags;
    this._humanTaskConfig.internalValue = config.humanTaskConfig;
    this._inputConfig.internalValue = config.inputConfig;
    this._labelingJobAlgorithmsConfig.internalValue = config.labelingJobAlgorithmsConfig;
    this._outputConfig.internalValue = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // job_reference_code - computed: true, optional: false, required: false
  public get jobReferenceCode() {
    return this.getStringAttribute('job_reference_code');
  }

  // label_attribute_name - computed: false, optional: false, required: true
  private _labelAttributeName?: string; 
  public get labelAttributeName() {
    return this.getStringAttribute('label_attribute_name');
  }
  public set labelAttributeName(value: string) {
    this._labelAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAttributeNameInput() {
    return this._labelAttributeName;
  }

  // label_category_config_s3_uri - computed: false, optional: true, required: false
  private _labelCategoryConfigS3Uri?: string; 
  public get labelCategoryConfigS3Uri() {
    return this.getStringAttribute('label_category_config_s3_uri');
  }
  public set labelCategoryConfigS3Uri(value: string) {
    this._labelCategoryConfigS3Uri = value;
  }
  public resetLabelCategoryConfigS3Uri() {
    this._labelCategoryConfigS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelCategoryConfigS3UriInput() {
    return this._labelCategoryConfigS3Uri;
  }

  // label_counters - computed: true, optional: false, required: false
  private _labelCounters = new TfLabelingJob.LabelCountersPropertyList(this, "label_counters", false);
  public get labelCounters() {
    return this._labelCounters;
  }

  // labeling_job_arn - computed: true, optional: false, required: false
  public get labelingJobArn() {
    return this.getStringAttribute('labeling_job_arn');
  }

  // labeling_job_name - computed: false, optional: false, required: true
  private _labelingJobName?: string; 
  public get labelingJobName() {
    return this.getStringAttribute('labeling_job_name');
  }
  public set labelingJobName(value: string) {
    this._labelingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobNameInput() {
    return this._labelingJobName;
  }

  // labeling_job_status - computed: true, optional: false, required: false
  public get labelingJobStatus() {
    return this.getStringAttribute('labeling_job_status');
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

  // stopping_conditions - computed: true, optional: true, required: false
  private _stoppingConditions = new TfLabelingJob.StoppingConditionsPropertyList(this, "stopping_conditions", false);
  public get stoppingConditions() {
    return this._stoppingConditions;
  }
  public putStoppingConditions(value: TfLabelingJob.StoppingConditionsProperty[] | cdktn.IResolvable) {
    this._stoppingConditions.internalValue = value;
  }
  public resetStoppingConditions() {
    this._stoppingConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionsInput() {
    return this._stoppingConditions.internalValue;
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

  // human_task_config - computed: false, optional: true, required: false
  private _humanTaskConfig = new TfLabelingJob.HumanTaskConfigPropertyList(this, "human_task_config", false);
  public get humanTaskConfig() {
    return this._humanTaskConfig;
  }
  public putHumanTaskConfig(value: TfLabelingJob.HumanTaskConfigProperty[] | cdktn.IResolvable) {
    this._humanTaskConfig.internalValue = value;
  }
  public resetHumanTaskConfig() {
    this._humanTaskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskConfigInput() {
    return this._humanTaskConfig.internalValue;
  }

  // input_config - computed: false, optional: true, required: false
  private _inputConfig = new TfLabelingJob.InputConfigPropertyList(this, "input_config", false);
  public get inputConfig() {
    return this._inputConfig;
  }
  public putInputConfig(value: TfLabelingJob.InputConfigProperty[] | cdktn.IResolvable) {
    this._inputConfig.internalValue = value;
  }
  public resetInputConfig() {
    this._inputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigInput() {
    return this._inputConfig.internalValue;
  }

  // labeling_job_algorithms_config - computed: false, optional: true, required: false
  private _labelingJobAlgorithmsConfig = new TfLabelingJob.LabelingJobAlgorithmsConfigPropertyList(this, "labeling_job_algorithms_config", false);
  public get labelingJobAlgorithmsConfig() {
    return this._labelingJobAlgorithmsConfig;
  }
  public putLabelingJobAlgorithmsConfig(value: TfLabelingJob.LabelingJobAlgorithmsConfigProperty[] | cdktn.IResolvable) {
    this._labelingJobAlgorithmsConfig.internalValue = value;
  }
  public resetLabelingJobAlgorithmsConfig() {
    this._labelingJobAlgorithmsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobAlgorithmsConfigInput() {
    return this._labelingJobAlgorithmsConfig.internalValue;
  }

  // output_config - computed: false, optional: true, required: false
  private _outputConfig = new TfLabelingJob.OutputConfigPropertyList(this, "output_config", false);
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: TfLabelingJob.OutputConfigProperty[] | cdktn.IResolvable) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label_attribute_name: cdktn.stringToTerraform(this._labelAttributeName),
      label_category_config_s3_uri: cdktn.stringToTerraform(this._labelCategoryConfigS3Uri),
      labeling_job_name: cdktn.stringToTerraform(this._labelingJobName),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      stopping_conditions: cdktn.listMapper(tfLabelingJobStoppingConditionsPropertyToTerraform, false)(this._stoppingConditions.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      human_task_config: cdktn.listMapper(tfLabelingJobHumanTaskConfigPropertyToTerraform, true)(this._humanTaskConfig.internalValue),
      input_config: cdktn.listMapper(tfLabelingJobInputConfigPropertyToTerraform, true)(this._inputConfig.internalValue),
      labeling_job_algorithms_config: cdktn.listMapper(tfLabelingJobLabelingJobAlgorithmsConfigPropertyToTerraform, true)(this._labelingJobAlgorithmsConfig.internalValue),
      output_config: cdktn.listMapper(tfLabelingJobOutputConfigPropertyToTerraform, true)(this._outputConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label_attribute_name: {
        value: cdktn.stringToHclTerraform(this._labelAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_category_config_s3_uri: {
        value: cdktn.stringToHclTerraform(this._labelCategoryConfigS3Uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labeling_job_name: {
        value: cdktn.stringToHclTerraform(this._labelingJobName),
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
      stopping_conditions: {
        value: cdktn.listMapperHcl(tfLabelingJobStoppingConditionsPropertyToHclTerraform, false)(this._stoppingConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLabelingJob.StoppingConditionsPropertyList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      human_task_config: {
        value: cdktn.listMapperHcl(tfLabelingJobHumanTaskConfigPropertyToHclTerraform, true)(this._humanTaskConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLabelingJob.HumanTaskConfigPropertyList",
      },
      input_config: {
        value: cdktn.listMapperHcl(tfLabelingJobInputConfigPropertyToHclTerraform, true)(this._inputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLabelingJob.InputConfigPropertyList",
      },
      labeling_job_algorithms_config: {
        value: cdktn.listMapperHcl(tfLabelingJobLabelingJobAlgorithmsConfigPropertyToHclTerraform, true)(this._labelingJobAlgorithmsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLabelingJob.LabelingJobAlgorithmsConfigPropertyList",
      },
      output_config: {
        value: cdktn.listMapperHcl(tfLabelingJobOutputConfigPropertyToHclTerraform, true)(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLabelingJob.OutputConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfLabelingJobLabelCountersPropertyToTerraform(struct?: TfLabelingJob.LabelCountersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfLabelingJobLabelCountersPropertyToHclTerraform(struct?: TfLabelingJob.LabelCountersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfLabelingJobStoppingConditionsPropertyToTerraform(struct?: TfLabelingJob.StoppingConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_human_labeled_object_count: cdktn.numberToTerraform(struct!.maxHumanLabeledObjectCount),
    max_percentage_of_input_dataset_labeled: cdktn.numberToTerraform(struct!.maxPercentageOfInputDatasetLabeled),
  }
}


export function tfLabelingJobStoppingConditionsPropertyToHclTerraform(struct?: TfLabelingJob.StoppingConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_human_labeled_object_count: {
      value: cdktn.numberToHclTerraform(struct!.maxHumanLabeledObjectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_percentage_of_input_dataset_labeled: {
      value: cdktn.numberToHclTerraform(struct!.maxPercentageOfInputDatasetLabeled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobAnnotationConsolidationConfigPropertyToTerraform(struct?: TfLabelingJob.AnnotationConsolidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    annotation_consolidation_lambda_arn: cdktn.stringToTerraform(struct!.annotationConsolidationLambdaArn),
  }
}


export function tfLabelingJobAnnotationConsolidationConfigPropertyToHclTerraform(struct?: TfLabelingJob.AnnotationConsolidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    annotation_consolidation_lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.annotationConsolidationLambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobAmountInUsdPropertyToTerraform(struct?: TfLabelingJob.AmountInUsdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cents: cdktn.numberToTerraform(struct!.cents),
    dollars: cdktn.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktn.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}


export function tfLabelingJobAmountInUsdPropertyToHclTerraform(struct?: TfLabelingJob.AmountInUsdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cents: {
      value: cdktn.numberToHclTerraform(struct!.cents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dollars: {
      value: cdktn.numberToHclTerraform(struct!.dollars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenth_fractions_of_a_cent: {
      value: cdktn.numberToHclTerraform(struct!.tenthFractionsOfACent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobPublicWorkforceTaskPricePropertyToTerraform(struct?: TfLabelingJob.PublicWorkforceTaskPriceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount_in_usd: cdktn.listMapper(tfLabelingJobAmountInUsdPropertyToTerraform, true)(struct!.amountInUsd),
  }
}


export function tfLabelingJobPublicWorkforceTaskPricePropertyToHclTerraform(struct?: TfLabelingJob.PublicWorkforceTaskPriceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount_in_usd: {
      value: cdktn.listMapperHcl(tfLabelingJobAmountInUsdPropertyToHclTerraform, true)(struct!.amountInUsd),
      isBlock: true,
      type: "list",
      storageClassType: "AmountInUsdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobUiConfigPropertyToTerraform(struct?: TfLabelingJob.UiConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    human_task_ui_arn: cdktn.stringToTerraform(struct!.humanTaskUiArn),
    ui_template_s3_uri: cdktn.stringToTerraform(struct!.uiTemplateS3Uri),
  }
}


export function tfLabelingJobUiConfigPropertyToHclTerraform(struct?: TfLabelingJob.UiConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    human_task_ui_arn: {
      value: cdktn.stringToHclTerraform(struct!.humanTaskUiArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_template_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.uiTemplateS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobHumanTaskConfigPropertyToTerraform(struct?: TfLabelingJob.HumanTaskConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_task_count: cdktn.numberToTerraform(struct!.maxConcurrentTaskCount),
    number_of_human_workers_per_data_object: cdktn.numberToTerraform(struct!.numberOfHumanWorkersPerDataObject),
    pre_human_task_lambda_arn: cdktn.stringToTerraform(struct!.preHumanTaskLambdaArn),
    task_availability_lifetime_in_seconds: cdktn.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_description: cdktn.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktn.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktn.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktn.stringToTerraform(struct!.workteamArn),
    annotation_consolidation_config: cdktn.listMapper(tfLabelingJobAnnotationConsolidationConfigPropertyToTerraform, true)(struct!.annotationConsolidationConfig),
    public_workforce_task_price: cdktn.listMapper(tfLabelingJobPublicWorkforceTaskPricePropertyToTerraform, true)(struct!.publicWorkforceTaskPrice),
    ui_config: cdktn.listMapper(tfLabelingJobUiConfigPropertyToTerraform, true)(struct!.uiConfig),
  }
}


export function tfLabelingJobHumanTaskConfigPropertyToHclTerraform(struct?: TfLabelingJob.HumanTaskConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrent_task_count: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_human_workers_per_data_object: {
      value: cdktn.numberToHclTerraform(struct!.numberOfHumanWorkersPerDataObject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_human_task_lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.preHumanTaskLambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_availability_lifetime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.taskAvailabilityLifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_description: {
      value: cdktn.stringToHclTerraform(struct!.taskDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.taskKeywords),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    task_time_limit_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.taskTimeLimitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_title: {
      value: cdktn.stringToHclTerraform(struct!.taskTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workteam_arn: {
      value: cdktn.stringToHclTerraform(struct!.workteamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation_consolidation_config: {
      value: cdktn.listMapperHcl(tfLabelingJobAnnotationConsolidationConfigPropertyToHclTerraform, true)(struct!.annotationConsolidationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AnnotationConsolidationConfigPropertyList",
    },
    public_workforce_task_price: {
      value: cdktn.listMapperHcl(tfLabelingJobPublicWorkforceTaskPricePropertyToHclTerraform, true)(struct!.publicWorkforceTaskPrice),
      isBlock: true,
      type: "list",
      storageClassType: "PublicWorkforceTaskPricePropertyList",
    },
    ui_config: {
      value: cdktn.listMapperHcl(tfLabelingJobUiConfigPropertyToHclTerraform, true)(struct!.uiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "UiConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobDataAttributesPropertyToTerraform(struct?: TfLabelingJob.DataAttributesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_classifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contentClassifiers),
  }
}


export function tfLabelingJobDataAttributesPropertyToHclTerraform(struct?: TfLabelingJob.DataAttributesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_classifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contentClassifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobS3DataSourcePropertyToTerraform(struct?: TfLabelingJob.S3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_s3_uri: cdktn.stringToTerraform(struct!.manifestS3Uri),
  }
}


export function tfLabelingJobS3DataSourcePropertyToHclTerraform(struct?: TfLabelingJob.S3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.manifestS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobSnsDataSourcePropertyToTerraform(struct?: TfLabelingJob.SnsDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function tfLabelingJobSnsDataSourcePropertyToHclTerraform(struct?: TfLabelingJob.SnsDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobDataSourcePropertyToTerraform(struct?: TfLabelingJob.DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: cdktn.listMapper(tfLabelingJobS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
    sns_data_source: cdktn.listMapper(tfLabelingJobSnsDataSourcePropertyToTerraform, true)(struct!.snsDataSource),
  }
}


export function tfLabelingJobDataSourcePropertyToHclTerraform(struct?: TfLabelingJob.DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: cdktn.listMapperHcl(tfLabelingJobS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "S3DataSourcePropertyList",
    },
    sns_data_source: {
      value: cdktn.listMapperHcl(tfLabelingJobSnsDataSourcePropertyToHclTerraform, true)(struct!.snsDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SnsDataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobInputConfigPropertyToTerraform(struct?: TfLabelingJob.InputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_attributes: cdktn.listMapper(tfLabelingJobDataAttributesPropertyToTerraform, true)(struct!.dataAttributes),
    data_source: cdktn.listMapper(tfLabelingJobDataSourcePropertyToTerraform, true)(struct!.dataSource),
  }
}


export function tfLabelingJobInputConfigPropertyToHclTerraform(struct?: TfLabelingJob.InputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_attributes: {
      value: cdktn.listMapperHcl(tfLabelingJobDataAttributesPropertyToHclTerraform, true)(struct!.dataAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataAttributesPropertyList",
    },
    data_source: {
      value: cdktn.listMapperHcl(tfLabelingJobDataSourcePropertyToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobVpcConfigPropertyToTerraform(struct?: TfLabelingJob.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function tfLabelingJobVpcConfigPropertyToHclTerraform(struct?: TfLabelingJob.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobLabelingJobResourceConfigPropertyToTerraform(struct?: TfLabelingJob.LabelingJobResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    vpc_config: cdktn.listMapper(tfLabelingJobVpcConfigPropertyToTerraform, true)(struct!.vpcConfig),
  }
}


export function tfLabelingJobLabelingJobResourceConfigPropertyToHclTerraform(struct?: TfLabelingJob.LabelingJobResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_config: {
      value: cdktn.listMapperHcl(tfLabelingJobVpcConfigPropertyToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobLabelingJobAlgorithmsConfigPropertyToTerraform(struct?: TfLabelingJob.LabelingJobAlgorithmsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    initial_active_learning_model_arn: cdktn.stringToTerraform(struct!.initialActiveLearningModelArn),
    labeling_job_algorithm_specification_arn: cdktn.stringToTerraform(struct!.labelingJobAlgorithmSpecificationArn),
    labeling_job_resource_config: cdktn.listMapper(tfLabelingJobLabelingJobResourceConfigPropertyToTerraform, true)(struct!.labelingJobResourceConfig),
  }
}


export function tfLabelingJobLabelingJobAlgorithmsConfigPropertyToHclTerraform(struct?: TfLabelingJob.LabelingJobAlgorithmsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    initial_active_learning_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.initialActiveLearningModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeling_job_algorithm_specification_arn: {
      value: cdktn.stringToHclTerraform(struct!.labelingJobAlgorithmSpecificationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeling_job_resource_config: {
      value: cdktn.listMapperHcl(tfLabelingJobLabelingJobResourceConfigPropertyToHclTerraform, true)(struct!.labelingJobResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LabelingJobResourceConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLabelingJobOutputConfigPropertyToTerraform(struct?: TfLabelingJob.OutputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function tfLabelingJobOutputConfigPropertyToHclTerraform(struct?: TfLabelingJob.OutputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfLabelingJob {
export interface LabelCountersProperty {
}
export class LabelCountersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LabelCountersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabelCountersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_non_retryable_error - computed: true, optional: false, required: false
  public get failedNonRetryableError() {
    return this.getNumberAttribute('failed_non_retryable_error');
  }

  // human_labeled - computed: true, optional: false, required: false
  public get humanLabeled() {
    return this.getNumberAttribute('human_labeled');
  }

  // machine_labeled - computed: true, optional: false, required: false
  public get machineLabeled() {
    return this.getNumberAttribute('machine_labeled');
  }

  // total_labeled - computed: true, optional: false, required: false
  public get totalLabeled() {
    return this.getNumberAttribute('total_labeled');
  }

  // unlabeled - computed: true, optional: false, required: false
  public get unlabeled() {
    return this.getNumberAttribute('unlabeled');
  }
}

export class LabelCountersPropertyList extends cdktn.ComplexList {

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
  public get(index: number): LabelCountersPropertyOutputReference {
    return new LabelCountersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoppingConditionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count TfLabelingJob#max_human_labeled_object_count}
  */
  readonly maxHumanLabeledObjectCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled TfLabelingJob#max_percentage_of_input_dataset_labeled}
  */
  readonly maxPercentageOfInputDatasetLabeled?: number;
}
export class StoppingConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StoppingConditionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHumanLabeledObjectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHumanLabeledObjectCount = this._maxHumanLabeledObjectCount;
    }
    if (this._maxPercentageOfInputDatasetLabeled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPercentageOfInputDatasetLabeled = this._maxPercentageOfInputDatasetLabeled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoppingConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxHumanLabeledObjectCount = undefined;
      this._maxPercentageOfInputDatasetLabeled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxHumanLabeledObjectCount = value.maxHumanLabeledObjectCount;
      this._maxPercentageOfInputDatasetLabeled = value.maxPercentageOfInputDatasetLabeled;
    }
  }

  // max_human_labeled_object_count - computed: true, optional: true, required: false
  private _maxHumanLabeledObjectCount?: number; 
  public get maxHumanLabeledObjectCount() {
    return this.getNumberAttribute('max_human_labeled_object_count');
  }
  public set maxHumanLabeledObjectCount(value: number) {
    this._maxHumanLabeledObjectCount = value;
  }
  public resetMaxHumanLabeledObjectCount() {
    this._maxHumanLabeledObjectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHumanLabeledObjectCountInput() {
    return this._maxHumanLabeledObjectCount;
  }

  // max_percentage_of_input_dataset_labeled - computed: true, optional: true, required: false
  private _maxPercentageOfInputDatasetLabeled?: number; 
  public get maxPercentageOfInputDatasetLabeled() {
    return this.getNumberAttribute('max_percentage_of_input_dataset_labeled');
  }
  public set maxPercentageOfInputDatasetLabeled(value: number) {
    this._maxPercentageOfInputDatasetLabeled = value;
  }
  public resetMaxPercentageOfInputDatasetLabeled() {
    this._maxPercentageOfInputDatasetLabeled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPercentageOfInputDatasetLabeledInput() {
    return this._maxPercentageOfInputDatasetLabeled;
  }
}

export class StoppingConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : StoppingConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): StoppingConditionsPropertyOutputReference {
    return new StoppingConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnnotationConsolidationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn TfLabelingJob#annotation_consolidation_lambda_arn}
  */
  readonly annotationConsolidationLambdaArn: string;
}
export class AnnotationConsolidationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AnnotationConsolidationConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationConsolidationLambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationConsolidationLambdaArn = this._annotationConsolidationLambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnnotationConsolidationConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationConsolidationLambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationConsolidationLambdaArn = value.annotationConsolidationLambdaArn;
    }
  }

  // annotation_consolidation_lambda_arn - computed: false, optional: false, required: true
  private _annotationConsolidationLambdaArn?: string; 
  public get annotationConsolidationLambdaArn() {
    return this.getStringAttribute('annotation_consolidation_lambda_arn');
  }
  public set annotationConsolidationLambdaArn(value: string) {
    this._annotationConsolidationLambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationConsolidationLambdaArnInput() {
    return this._annotationConsolidationLambdaArn;
  }
}

export class AnnotationConsolidationConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : AnnotationConsolidationConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): AnnotationConsolidationConfigPropertyOutputReference {
    return new AnnotationConsolidationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmountInUsdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#cents TfLabelingJob#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#dollars TfLabelingJob#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent TfLabelingJob#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}
export class AmountInUsdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmountInUsdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cents = this._cents;
    }
    if (this._dollars !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollars = this._dollars;
    }
    if (this._tenthFractionsOfACent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmountInUsdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cents = undefined;
      this._dollars = undefined;
      this._tenthFractionsOfACent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cents = value.cents;
      this._dollars = value.dollars;
      this._tenthFractionsOfACent = value.tenthFractionsOfACent;
    }
  }

  // cents - computed: false, optional: true, required: false
  private _cents?: number; 
  public get cents() {
    return this.getNumberAttribute('cents');
  }
  public set cents(value: number) {
    this._cents = value;
  }
  public resetCents() {
    this._cents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centsInput() {
    return this._cents;
  }

  // dollars - computed: false, optional: true, required: false
  private _dollars?: number; 
  public get dollars() {
    return this.getNumberAttribute('dollars');
  }
  public set dollars(value: number) {
    this._dollars = value;
  }
  public resetDollars() {
    this._dollars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarsInput() {
    return this._dollars;
  }

  // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
  private _tenthFractionsOfACent?: number; 
  public get tenthFractionsOfACent() {
    return this.getNumberAttribute('tenth_fractions_of_a_cent');
  }
  public set tenthFractionsOfACent(value: number) {
    this._tenthFractionsOfACent = value;
  }
  public resetTenthFractionsOfACent() {
    this._tenthFractionsOfACent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenthFractionsOfACentInput() {
    return this._tenthFractionsOfACent;
  }
}

export class AmountInUsdPropertyList extends cdktn.ComplexList {
  public internalValue? : AmountInUsdProperty[] | cdktn.IResolvable

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
  public get(index: number): AmountInUsdPropertyOutputReference {
    return new AmountInUsdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PublicWorkforceTaskPriceProperty {
  /**
  * amount_in_usd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#amount_in_usd TfLabelingJob#amount_in_usd}
  */
  readonly amountInUsd?: AmountInUsdProperty[] | cdktn.IResolvable;
}
export class PublicWorkforceTaskPricePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PublicWorkforceTaskPriceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amountInUsd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountInUsd = this._amountInUsd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublicWorkforceTaskPriceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amountInUsd.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amountInUsd.internalValue = value.amountInUsd;
    }
  }

  // amount_in_usd - computed: false, optional: true, required: false
  private _amountInUsd = new AmountInUsdPropertyList(this, "amount_in_usd", false);
  public get amountInUsd() {
    return this._amountInUsd;
  }
  public putAmountInUsd(value: AmountInUsdProperty[] | cdktn.IResolvable) {
    this._amountInUsd.internalValue = value;
  }
  public resetAmountInUsd() {
    this._amountInUsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInUsdInput() {
    return this._amountInUsd.internalValue;
  }
}

export class PublicWorkforceTaskPricePropertyList extends cdktn.ComplexList {
  public internalValue? : PublicWorkforceTaskPriceProperty[] | cdktn.IResolvable

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
  public get(index: number): PublicWorkforceTaskPricePropertyOutputReference {
    return new PublicWorkforceTaskPricePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UiConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn TfLabelingJob#human_task_ui_arn}
  */
  readonly humanTaskUiArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri TfLabelingJob#ui_template_s3_uri}
  */
  readonly uiTemplateS3Uri?: string;
}
export class UiConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UiConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanTaskUiArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
    }
    if (this._uiTemplateS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiTemplateS3Uri = this._uiTemplateS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UiConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._humanTaskUiArn = undefined;
      this._uiTemplateS3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._humanTaskUiArn = value.humanTaskUiArn;
      this._uiTemplateS3Uri = value.uiTemplateS3Uri;
    }
  }

  // human_task_ui_arn - computed: false, optional: true, required: false
  private _humanTaskUiArn?: string; 
  public get humanTaskUiArn() {
    return this.getStringAttribute('human_task_ui_arn');
  }
  public set humanTaskUiArn(value: string) {
    this._humanTaskUiArn = value;
  }
  public resetHumanTaskUiArn() {
    this._humanTaskUiArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiArnInput() {
    return this._humanTaskUiArn;
  }

  // ui_template_s3_uri - computed: false, optional: true, required: false
  private _uiTemplateS3Uri?: string; 
  public get uiTemplateS3Uri() {
    return this.getStringAttribute('ui_template_s3_uri');
  }
  public set uiTemplateS3Uri(value: string) {
    this._uiTemplateS3Uri = value;
  }
  public resetUiTemplateS3Uri() {
    this._uiTemplateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiTemplateS3UriInput() {
    return this._uiTemplateS3Uri;
  }
}

export class UiConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : UiConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): UiConfigPropertyOutputReference {
    return new UiConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HumanTaskConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count TfLabelingJob#max_concurrent_task_count}
  */
  readonly maxConcurrentTaskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object TfLabelingJob#number_of_human_workers_per_data_object}
  */
  readonly numberOfHumanWorkersPerDataObject: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn TfLabelingJob#pre_human_task_lambda_arn}
  */
  readonly preHumanTaskLambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds TfLabelingJob#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#task_description TfLabelingJob#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#task_keywords TfLabelingJob#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds TfLabelingJob#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#task_title TfLabelingJob#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#workteam_arn TfLabelingJob#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * annotation_consolidation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config TfLabelingJob#annotation_consolidation_config}
  */
  readonly annotationConsolidationConfig?: AnnotationConsolidationConfigProperty[] | cdktn.IResolvable;
  /**
  * public_workforce_task_price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price TfLabelingJob#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: PublicWorkforceTaskPriceProperty[] | cdktn.IResolvable;
  /**
  * ui_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#ui_config TfLabelingJob#ui_config}
  */
  readonly uiConfig?: UiConfigProperty[] | cdktn.IResolvable;
}
export class HumanTaskConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HumanTaskConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTaskCount = this._maxConcurrentTaskCount;
    }
    if (this._numberOfHumanWorkersPerDataObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfHumanWorkersPerDataObject = this._numberOfHumanWorkersPerDataObject;
    }
    if (this._preHumanTaskLambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHumanTaskLambdaArn = this._preHumanTaskLambdaArn;
    }
    if (this._taskAvailabilityLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
    }
    if (this._taskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDescription = this._taskDescription;
    }
    if (this._taskKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKeywords = this._taskKeywords;
    }
    if (this._taskTimeLimitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
    }
    if (this._taskTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTitle = this._taskTitle;
    }
    if (this._workteamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workteamArn = this._workteamArn;
    }
    if (this._annotationConsolidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationConsolidationConfig = this._annotationConsolidationConfig?.internalValue;
    }
    if (this._publicWorkforceTaskPrice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicWorkforceTaskPrice = this._publicWorkforceTaskPrice?.internalValue;
    }
    if (this._uiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiConfig = this._uiConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanTaskConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentTaskCount = undefined;
      this._numberOfHumanWorkersPerDataObject = undefined;
      this._preHumanTaskLambdaArn = undefined;
      this._taskAvailabilityLifetimeInSeconds = undefined;
      this._taskDescription = undefined;
      this._taskKeywords = undefined;
      this._taskTimeLimitInSeconds = undefined;
      this._taskTitle = undefined;
      this._workteamArn = undefined;
      this._annotationConsolidationConfig.internalValue = undefined;
      this._publicWorkforceTaskPrice.internalValue = undefined;
      this._uiConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentTaskCount = value.maxConcurrentTaskCount;
      this._numberOfHumanWorkersPerDataObject = value.numberOfHumanWorkersPerDataObject;
      this._preHumanTaskLambdaArn = value.preHumanTaskLambdaArn;
      this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
      this._taskDescription = value.taskDescription;
      this._taskKeywords = value.taskKeywords;
      this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
      this._taskTitle = value.taskTitle;
      this._workteamArn = value.workteamArn;
      this._annotationConsolidationConfig.internalValue = value.annotationConsolidationConfig;
      this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
      this._uiConfig.internalValue = value.uiConfig;
    }
  }

  // max_concurrent_task_count - computed: true, optional: true, required: false
  private _maxConcurrentTaskCount?: number; 
  public get maxConcurrentTaskCount() {
    return this.getNumberAttribute('max_concurrent_task_count');
  }
  public set maxConcurrentTaskCount(value: number) {
    this._maxConcurrentTaskCount = value;
  }
  public resetMaxConcurrentTaskCount() {
    this._maxConcurrentTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTaskCountInput() {
    return this._maxConcurrentTaskCount;
  }

  // number_of_human_workers_per_data_object - computed: false, optional: false, required: true
  private _numberOfHumanWorkersPerDataObject?: number; 
  public get numberOfHumanWorkersPerDataObject() {
    return this.getNumberAttribute('number_of_human_workers_per_data_object');
  }
  public set numberOfHumanWorkersPerDataObject(value: number) {
    this._numberOfHumanWorkersPerDataObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHumanWorkersPerDataObjectInput() {
    return this._numberOfHumanWorkersPerDataObject;
  }

  // pre_human_task_lambda_arn - computed: false, optional: true, required: false
  private _preHumanTaskLambdaArn?: string; 
  public get preHumanTaskLambdaArn() {
    return this.getStringAttribute('pre_human_task_lambda_arn');
  }
  public set preHumanTaskLambdaArn(value: string) {
    this._preHumanTaskLambdaArn = value;
  }
  public resetPreHumanTaskLambdaArn() {
    this._preHumanTaskLambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHumanTaskLambdaArnInput() {
    return this._preHumanTaskLambdaArn;
  }

  // task_availability_lifetime_in_seconds - computed: true, optional: true, required: false
  private _taskAvailabilityLifetimeInSeconds?: number; 
  public get taskAvailabilityLifetimeInSeconds() {
    return this.getNumberAttribute('task_availability_lifetime_in_seconds');
  }
  public set taskAvailabilityLifetimeInSeconds(value: number) {
    this._taskAvailabilityLifetimeInSeconds = value;
  }
  public resetTaskAvailabilityLifetimeInSeconds() {
    this._taskAvailabilityLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAvailabilityLifetimeInSecondsInput() {
    return this._taskAvailabilityLifetimeInSeconds;
  }

  // task_description - computed: false, optional: false, required: true
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription;
  }

  // task_keywords - computed: false, optional: true, required: false
  private _taskKeywords?: string[]; 
  public get taskKeywords() {
    return cdktn.Fn.tolist(this.getListAttribute('task_keywords'));
  }
  public set taskKeywords(value: string[]) {
    this._taskKeywords = value;
  }
  public resetTaskKeywords() {
    this._taskKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeywordsInput() {
    return this._taskKeywords;
  }

  // task_time_limit_in_seconds - computed: false, optional: false, required: true
  private _taskTimeLimitInSeconds?: number; 
  public get taskTimeLimitInSeconds() {
    return this.getNumberAttribute('task_time_limit_in_seconds');
  }
  public set taskTimeLimitInSeconds(value: number) {
    this._taskTimeLimitInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeLimitInSecondsInput() {
    return this._taskTimeLimitInSeconds;
  }

  // task_title - computed: false, optional: false, required: true
  private _taskTitle?: string; 
  public get taskTitle() {
    return this.getStringAttribute('task_title');
  }
  public set taskTitle(value: string) {
    this._taskTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTitleInput() {
    return this._taskTitle;
  }

  // workteam_arn - computed: false, optional: false, required: true
  private _workteamArn?: string; 
  public get workteamArn() {
    return this.getStringAttribute('workteam_arn');
  }
  public set workteamArn(value: string) {
    this._workteamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamArnInput() {
    return this._workteamArn;
  }

  // annotation_consolidation_config - computed: false, optional: true, required: false
  private _annotationConsolidationConfig = new AnnotationConsolidationConfigPropertyList(this, "annotation_consolidation_config", false);
  public get annotationConsolidationConfig() {
    return this._annotationConsolidationConfig;
  }
  public putAnnotationConsolidationConfig(value: AnnotationConsolidationConfigProperty[] | cdktn.IResolvable) {
    this._annotationConsolidationConfig.internalValue = value;
  }
  public resetAnnotationConsolidationConfig() {
    this._annotationConsolidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationConsolidationConfigInput() {
    return this._annotationConsolidationConfig.internalValue;
  }

  // public_workforce_task_price - computed: false, optional: true, required: false
  private _publicWorkforceTaskPrice = new PublicWorkforceTaskPricePropertyList(this, "public_workforce_task_price", false);
  public get publicWorkforceTaskPrice() {
    return this._publicWorkforceTaskPrice;
  }
  public putPublicWorkforceTaskPrice(value: PublicWorkforceTaskPriceProperty[] | cdktn.IResolvable) {
    this._publicWorkforceTaskPrice.internalValue = value;
  }
  public resetPublicWorkforceTaskPrice() {
    this._publicWorkforceTaskPrice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWorkforceTaskPriceInput() {
    return this._publicWorkforceTaskPrice.internalValue;
  }

  // ui_config - computed: false, optional: true, required: false
  private _uiConfig = new UiConfigPropertyList(this, "ui_config", false);
  public get uiConfig() {
    return this._uiConfig;
  }
  public putUiConfig(value: UiConfigProperty[] | cdktn.IResolvable) {
    this._uiConfig.internalValue = value;
  }
  public resetUiConfig() {
    this._uiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiConfigInput() {
    return this._uiConfig.internalValue;
  }
}

export class HumanTaskConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HumanTaskConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HumanTaskConfigPropertyOutputReference {
    return new HumanTaskConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#content_classifiers TfLabelingJob#content_classifiers}
  */
  readonly contentClassifiers?: string[];
}
export class DataAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAttributesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentClassifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentClassifiers = this._contentClassifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAttributesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentClassifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentClassifiers = value.contentClassifiers;
    }
  }

  // content_classifiers - computed: false, optional: true, required: false
  private _contentClassifiers?: string[]; 
  public get contentClassifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('content_classifiers'));
  }
  public set contentClassifiers(value: string[]) {
    this._contentClassifiers = value;
  }
  public resetContentClassifiers() {
    this._contentClassifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentClassifiersInput() {
    return this._contentClassifiers;
  }
}

export class DataAttributesPropertyList extends cdktn.ComplexList {
  public internalValue? : DataAttributesProperty[] | cdktn.IResolvable

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
  public get(index: number): DataAttributesPropertyOutputReference {
    return new DataAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri TfLabelingJob#manifest_s3_uri}
  */
  readonly manifestS3Uri: string;
}
export class S3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestS3Uri = this._manifestS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestS3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestS3Uri = value.manifestS3Uri;
    }
  }

  // manifest_s3_uri - computed: false, optional: false, required: true
  private _manifestS3Uri?: string; 
  public get manifestS3Uri() {
    return this.getStringAttribute('manifest_s3_uri');
  }
  public set manifestS3Uri(value: string) {
    this._manifestS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestS3UriInput() {
    return this._manifestS3Uri;
  }
}

export class S3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : S3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): S3DataSourcePropertyOutputReference {
    return new S3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnsDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#sns_topic_arn TfLabelingJob#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}
export class SnsDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnsDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class SnsDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SnsDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SnsDataSourcePropertyOutputReference {
    return new SnsDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceProperty {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#s3_data_source TfLabelingJob#s3_data_source}
  */
  readonly s3DataSource?: S3DataSourceProperty[] | cdktn.IResolvable;
  /**
  * sns_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#sns_data_source TfLabelingJob#sns_data_source}
  */
  readonly snsDataSource?: SnsDataSourceProperty[] | cdktn.IResolvable;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    if (this._snsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsDataSource = this._snsDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
      this._snsDataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
      this._snsDataSource.internalValue = value.snsDataSource;
    }
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new S3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: S3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }

  // sns_data_source - computed: false, optional: true, required: false
  private _snsDataSource = new SnsDataSourcePropertyList(this, "sns_data_source", false);
  public get snsDataSource() {
    return this._snsDataSource;
  }
  public putSnsDataSource(value: SnsDataSourceProperty[] | cdktn.IResolvable) {
    this._snsDataSource.internalValue = value;
  }
  public resetSnsDataSource() {
    this._snsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDataSourceInput() {
    return this._snsDataSource.internalValue;
  }
}

export class DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourcePropertyOutputReference {
    return new DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputConfigProperty {
  /**
  * data_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#data_attributes TfLabelingJob#data_attributes}
  */
  readonly dataAttributes?: DataAttributesProperty[] | cdktn.IResolvable;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#data_source TfLabelingJob#data_source}
  */
  readonly dataSource?: DataSourceProperty[] | cdktn.IResolvable;
}
export class InputConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAttributes = this._dataAttributes?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataAttributes.internalValue = undefined;
      this._dataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataAttributes.internalValue = value.dataAttributes;
      this._dataSource.internalValue = value.dataSource;
    }
  }

  // data_attributes - computed: false, optional: true, required: false
  private _dataAttributes = new DataAttributesPropertyList(this, "data_attributes", false);
  public get dataAttributes() {
    return this._dataAttributes;
  }
  public putDataAttributes(value: DataAttributesProperty[] | cdktn.IResolvable) {
    this._dataAttributes.internalValue = value;
  }
  public resetDataAttributes() {
    this._dataAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAttributesInput() {
    return this._dataAttributes.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataSourcePropertyList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataSourceProperty[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }
}

export class InputConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : InputConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): InputConfigPropertyOutputReference {
    return new InputConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#security_group_ids TfLabelingJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#subnets TfLabelingJob#subnets}
  */
  readonly subnets: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class VpcConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcConfigPropertyOutputReference {
    return new VpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LabelingJobResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id TfLabelingJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#vpc_config TfLabelingJob#vpc_config}
  */
  readonly vpcConfig?: VpcConfigProperty[] | cdktn.IResolvable;
}
export class LabelingJobResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LabelingJobResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabelingJobResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeKmsKeyId = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new VpcConfigPropertyList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: VpcConfigProperty[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class LabelingJobResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LabelingJobResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LabelingJobResourceConfigPropertyOutputReference {
    return new LabelingJobResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LabelingJobAlgorithmsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn TfLabelingJob#initial_active_learning_model_arn}
  */
  readonly initialActiveLearningModelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn TfLabelingJob#labeling_job_algorithm_specification_arn}
  */
  readonly labelingJobAlgorithmSpecificationArn: string;
  /**
  * labeling_job_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config TfLabelingJob#labeling_job_resource_config}
  */
  readonly labelingJobResourceConfig?: LabelingJobResourceConfigProperty[] | cdktn.IResolvable;
}
export class LabelingJobAlgorithmsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LabelingJobAlgorithmsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialActiveLearningModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialActiveLearningModelArn = this._initialActiveLearningModelArn;
    }
    if (this._labelingJobAlgorithmSpecificationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelingJobAlgorithmSpecificationArn = this._labelingJobAlgorithmSpecificationArn;
    }
    if (this._labelingJobResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelingJobResourceConfig = this._labelingJobResourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabelingJobAlgorithmsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialActiveLearningModelArn = undefined;
      this._labelingJobAlgorithmSpecificationArn = undefined;
      this._labelingJobResourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialActiveLearningModelArn = value.initialActiveLearningModelArn;
      this._labelingJobAlgorithmSpecificationArn = value.labelingJobAlgorithmSpecificationArn;
      this._labelingJobResourceConfig.internalValue = value.labelingJobResourceConfig;
    }
  }

  // initial_active_learning_model_arn - computed: false, optional: true, required: false
  private _initialActiveLearningModelArn?: string; 
  public get initialActiveLearningModelArn() {
    return this.getStringAttribute('initial_active_learning_model_arn');
  }
  public set initialActiveLearningModelArn(value: string) {
    this._initialActiveLearningModelArn = value;
  }
  public resetInitialActiveLearningModelArn() {
    this._initialActiveLearningModelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialActiveLearningModelArnInput() {
    return this._initialActiveLearningModelArn;
  }

  // labeling_job_algorithm_specification_arn - computed: false, optional: false, required: true
  private _labelingJobAlgorithmSpecificationArn?: string; 
  public get labelingJobAlgorithmSpecificationArn() {
    return this.getStringAttribute('labeling_job_algorithm_specification_arn');
  }
  public set labelingJobAlgorithmSpecificationArn(value: string) {
    this._labelingJobAlgorithmSpecificationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobAlgorithmSpecificationArnInput() {
    return this._labelingJobAlgorithmSpecificationArn;
  }

  // labeling_job_resource_config - computed: false, optional: true, required: false
  private _labelingJobResourceConfig = new LabelingJobResourceConfigPropertyList(this, "labeling_job_resource_config", false);
  public get labelingJobResourceConfig() {
    return this._labelingJobResourceConfig;
  }
  public putLabelingJobResourceConfig(value: LabelingJobResourceConfigProperty[] | cdktn.IResolvable) {
    this._labelingJobResourceConfig.internalValue = value;
  }
  public resetLabelingJobResourceConfig() {
    this._labelingJobResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobResourceConfigInput() {
    return this._labelingJobResourceConfig.internalValue;
  }
}

export class LabelingJobAlgorithmsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LabelingJobAlgorithmsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LabelingJobAlgorithmsConfigPropertyOutputReference {
    return new LabelingJobAlgorithmsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#kms_key_id TfLabelingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#s3_output_path TfLabelingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_labeling_job#sns_topic_arn TfLabelingJob#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}
export class OutputConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class OutputConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputConfigPropertyOutputReference {
    return new OutputConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
