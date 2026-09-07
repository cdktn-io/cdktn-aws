// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsHyperParameterTuningJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#region AwsHyperParameterTuningJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#tags AwsHyperParameterTuningJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * autotune block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#autotune AwsHyperParameterTuningJob#autotune}
  */
  readonly autotune?: AwsHyperParameterTuningJob.AutotuneProperty[] | cdktn.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#config AwsHyperParameterTuningJob#config}
  */
  readonly config?: AwsHyperParameterTuningJob.ConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#timeouts AwsHyperParameterTuningJob#timeouts}
  */
  readonly timeouts?: AwsHyperParameterTuningJob.TimeoutsProperty;
  /**
  * training_job_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_definition AwsHyperParameterTuningJob#training_job_definition}
  */
  readonly trainingJobDefinition?: AwsHyperParameterTuningJob.TrainingJobDefinitionProperty[] | cdktn.IResolvable;
  /**
  * training_job_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_definitions AwsHyperParameterTuningJob#training_job_definitions}
  */
  readonly trainingJobDefinitions?: AwsHyperParameterTuningJob.TrainingJobDefinitionsProperty[] | cdktn.IResolvable;
  /**
  * warm_start_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#warm_start_config AwsHyperParameterTuningJob#warm_start_config}
  */
  readonly warmStartConfig?: AwsHyperParameterTuningJob.WarmStartConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job aws_sagemaker_hyper_parameter_tuning_job}
*/
export class AwsHyperParameterTuningJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hyper_parameter_tuning_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsHyperParameterTuningJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsHyperParameterTuningJob to import
  * @param importFromId The id of the existing AwsHyperParameterTuningJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsHyperParameterTuningJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hyper_parameter_tuning_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job aws_sagemaker_hyper_parameter_tuning_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsHyperParameterTuningJobConfig
  */
  public constructor(scope: Construct, id: string, config: AwsHyperParameterTuningJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hyper_parameter_tuning_job',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._autotune.internalValue = config.autotune;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
    this._trainingJobDefinition.internalValue = config.trainingJobDefinition;
    this._trainingJobDefinitions.internalValue = config.trainingJobDefinitions;
    this._warmStartConfig.internalValue = config.warmStartConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // autotune - computed: false, optional: true, required: false
  private _autotune = new AwsHyperParameterTuningJob.AutotunePropertyList(this, "autotune", false);
  public get autotune() {
    return this._autotune;
  }
  public putAutotune(value: AwsHyperParameterTuningJob.AutotuneProperty[] | cdktn.IResolvable) {
    this._autotune.internalValue = value;
  }
  public resetAutotune() {
    this._autotune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneInput() {
    return this._autotune.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AwsHyperParameterTuningJob.ConfigPropertyList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: AwsHyperParameterTuningJob.ConfigProperty[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsHyperParameterTuningJob.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsHyperParameterTuningJob.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_job_definition - computed: false, optional: true, required: false
  private _trainingJobDefinition = new AwsHyperParameterTuningJob.TrainingJobDefinitionPropertyList(this, "training_job_definition", false);
  public get trainingJobDefinition() {
    return this._trainingJobDefinition;
  }
  public putTrainingJobDefinition(value: AwsHyperParameterTuningJob.TrainingJobDefinitionProperty[] | cdktn.IResolvable) {
    this._trainingJobDefinition.internalValue = value;
  }
  public resetTrainingJobDefinition() {
    this._trainingJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionInput() {
    return this._trainingJobDefinition.internalValue;
  }

  // training_job_definitions - computed: false, optional: true, required: false
  private _trainingJobDefinitions = new AwsHyperParameterTuningJob.TrainingJobDefinitionsPropertyList(this, "training_job_definitions", false);
  public get trainingJobDefinitions() {
    return this._trainingJobDefinitions;
  }
  public putTrainingJobDefinitions(value: AwsHyperParameterTuningJob.TrainingJobDefinitionsProperty[] | cdktn.IResolvable) {
    this._trainingJobDefinitions.internalValue = value;
  }
  public resetTrainingJobDefinitions() {
    this._trainingJobDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionsInput() {
    return this._trainingJobDefinitions.internalValue;
  }

  // warm_start_config - computed: false, optional: true, required: false
  private _warmStartConfig = new AwsHyperParameterTuningJob.WarmStartConfigPropertyList(this, "warm_start_config", false);
  public get warmStartConfig() {
    return this._warmStartConfig;
  }
  public putWarmStartConfig(value: AwsHyperParameterTuningJob.WarmStartConfigProperty[] | cdktn.IResolvable) {
    this._warmStartConfig.internalValue = value;
  }
  public resetWarmStartConfig() {
    this._warmStartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartConfigInput() {
    return this._warmStartConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      autotune: cdktn.listMapper(awsHyperParameterTuningJobAutotunePropertyToTerraform, true)(this._autotune.internalValue),
      config: cdktn.listMapper(awsHyperParameterTuningJobConfigPropertyToTerraform, true)(this._config.internalValue),
      timeouts: awsHyperParameterTuningJobTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      training_job_definition: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionPropertyToTerraform, true)(this._trainingJobDefinition.internalValue),
      training_job_definitions: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsPropertyToTerraform, true)(this._trainingJobDefinitions.internalValue),
      warm_start_config: cdktn.listMapper(awsHyperParameterTuningJobWarmStartConfigPropertyToTerraform, true)(this._warmStartConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      autotune: {
        value: cdktn.listMapperHcl(awsHyperParameterTuningJobAutotunePropertyToHclTerraform, true)(this._autotune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHyperParameterTuningJob.AutotunePropertyList",
      },
      config: {
        value: cdktn.listMapperHcl(awsHyperParameterTuningJobConfigPropertyToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHyperParameterTuningJob.ConfigPropertyList",
      },
      timeouts: {
        value: awsHyperParameterTuningJobTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsHyperParameterTuningJob.TimeoutsProperty",
      },
      training_job_definition: {
        value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionPropertyToHclTerraform, true)(this._trainingJobDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHyperParameterTuningJob.TrainingJobDefinitionPropertyList",
      },
      training_job_definitions: {
        value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsPropertyToHclTerraform, true)(this._trainingJobDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHyperParameterTuningJob.TrainingJobDefinitionsPropertyList",
      },
      warm_start_config: {
        value: cdktn.listMapperHcl(awsHyperParameterTuningJobWarmStartConfigPropertyToHclTerraform, true)(this._warmStartConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHyperParameterTuningJob.WarmStartConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsHyperParameterTuningJobAutotunePropertyToTerraform(struct?: AwsHyperParameterTuningJob.AutotuneProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function awsHyperParameterTuningJobAutotunePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.AutotuneProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobObjectivePropertyToTerraform(struct?: AwsHyperParameterTuningJob.ObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsHyperParameterTuningJobObjectivePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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


export function awsHyperParameterTuningJobConfigParameterRangesAutoParametersPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function awsHyperParameterTuningJobConfigParameterRangesAutoParametersPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
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
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConfigParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(awsHyperParameterTuningJobConfigParameterRangesAutoParametersPropertyToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesPropertyToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesPropertyToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesPropertyToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function awsHyperParameterTuningJobParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobConfigParameterRangesAutoParametersPropertyToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigParameterRangesAutoParametersPropertyList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesPropertyToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigParameterRangesCategoricalParameterRangesPropertyList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesPropertyToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigParameterRangesContinuousParameterRangesPropertyList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesPropertyToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigParameterRangesIntegerParameterRangesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobResourceLimitsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ResourceLimitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_number_of_training_jobs: cdktn.numberToTerraform(struct!.maxNumberOfTrainingJobs),
    max_parallel_training_jobs: cdktn.numberToTerraform(struct!.maxParallelTrainingJobs),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function awsHyperParameterTuningJobResourceLimitsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ResourceLimitsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_number_of_training_jobs: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_training_jobs: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobHyperbandStrategyConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.HyperbandStrategyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_resource: cdktn.numberToTerraform(struct!.maxResource),
    min_resource: cdktn.numberToTerraform(struct!.minResource),
  }
}


export function awsHyperParameterTuningJobHyperbandStrategyConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.HyperbandStrategyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_resource: {
      value: cdktn.numberToHclTerraform(struct!.maxResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_resource: {
      value: cdktn.numberToHclTerraform(struct!.minResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobStrategyConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.StrategyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hyperband_strategy_config: cdktn.listMapper(awsHyperParameterTuningJobHyperbandStrategyConfigPropertyToTerraform, true)(struct!.hyperbandStrategyConfig),
  }
}


export function awsHyperParameterTuningJobStrategyConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.StrategyConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hyperband_strategy_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobHyperbandStrategyConfigPropertyToHclTerraform, true)(struct!.hyperbandStrategyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HyperbandStrategyConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobBestObjectiveNotImprovingPropertyToTerraform(struct?: AwsHyperParameterTuningJob.BestObjectiveNotImprovingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_number_of_training_jobs_not_improving: cdktn.numberToTerraform(struct!.maxNumberOfTrainingJobsNotImproving),
  }
}


export function awsHyperParameterTuningJobBestObjectiveNotImprovingPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.BestObjectiveNotImprovingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_number_of_training_jobs_not_improving: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfTrainingJobsNotImproving),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobConvergenceDetectedPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConvergenceDetectedProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    complete_on_convergence: cdktn.stringToTerraform(struct!.completeOnConvergence),
  }
}


export function awsHyperParameterTuningJobConvergenceDetectedPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConvergenceDetectedProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    complete_on_convergence: {
      value: cdktn.stringToHclTerraform(struct!.completeOnConvergence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTuningJobCompletionCriteriaPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TuningJobCompletionCriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_objective_metric_value: cdktn.numberToTerraform(struct!.targetObjectiveMetricValue),
    best_objective_not_improving: cdktn.listMapper(awsHyperParameterTuningJobBestObjectiveNotImprovingPropertyToTerraform, true)(struct!.bestObjectiveNotImproving),
    convergence_detected: cdktn.listMapper(awsHyperParameterTuningJobConvergenceDetectedPropertyToTerraform, true)(struct!.convergenceDetected),
  }
}


export function awsHyperParameterTuningJobTuningJobCompletionCriteriaPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TuningJobCompletionCriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_objective_metric_value: {
      value: cdktn.numberToHclTerraform(struct!.targetObjectiveMetricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    best_objective_not_improving: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobBestObjectiveNotImprovingPropertyToHclTerraform, true)(struct!.bestObjectiveNotImproving),
      isBlock: true,
      type: "list",
      storageClassType: "BestObjectiveNotImprovingPropertyList",
    },
    convergence_detected: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobConvergenceDetectedPropertyToHclTerraform, true)(struct!.convergenceDetected),
      isBlock: true,
      type: "list",
      storageClassType: "ConvergenceDetectedPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    random_seed: cdktn.numberToTerraform(struct!.randomSeed),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    training_job_early_stopping_type: cdktn.stringToTerraform(struct!.trainingJobEarlyStoppingType),
    objective: cdktn.listMapper(awsHyperParameterTuningJobObjectivePropertyToTerraform, true)(struct!.objective),
    parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobParameterRangesPropertyToTerraform, true)(struct!.parameterRanges),
    resource_limits: cdktn.listMapper(awsHyperParameterTuningJobResourceLimitsPropertyToTerraform, true)(struct!.resourceLimits),
    strategy_config: cdktn.listMapper(awsHyperParameterTuningJobStrategyConfigPropertyToTerraform, true)(struct!.strategyConfig),
    tuning_job_completion_criteria: cdktn.listMapper(awsHyperParameterTuningJobTuningJobCompletionCriteriaPropertyToTerraform, true)(struct!.tuningJobCompletionCriteria),
  }
}


export function awsHyperParameterTuningJobConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    random_seed: {
      value: cdktn.numberToHclTerraform(struct!.randomSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_job_early_stopping_type: {
      value: cdktn.stringToHclTerraform(struct!.trainingJobEarlyStoppingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objective: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobObjectivePropertyToHclTerraform, true)(struct!.objective),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectivePropertyList",
    },
    parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobParameterRangesPropertyToHclTerraform, true)(struct!.parameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ParameterRangesPropertyList",
    },
    resource_limits: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobResourceLimitsPropertyToHclTerraform, true)(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceLimitsPropertyList",
    },
    strategy_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobStrategyConfigPropertyToHclTerraform, true)(struct!.strategyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StrategyConfigPropertyList",
    },
    tuning_job_completion_criteria: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTuningJobCompletionCriteriaPropertyToHclTerraform, true)(struct!.tuningJobCompletionCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "TuningJobCompletionCriteriaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTimeoutsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsHyperParameterTuningJobTimeoutsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsHyperParameterTuningJobTrainingJobDefinitionRetryStrategyPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionRetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionRetryStrategyPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionRetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable): any {
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
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionAlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyToTerraform, true)(struct!.metricDefinitions),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionAlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionCheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionCheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
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
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersPropertyToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersPropertyToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterTuningResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_configs: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyToTerraform, true)(struct!.instanceConfigs),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionHyperParameterTuningResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_configs: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyToHclTerraform, true)(struct!.instanceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourcePropertyToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigPropertyToTerraform, true)(struct!.shuffleConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionInputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourcePropertyToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigDataSourcePropertyList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigPropertyToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigShuffleConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionOutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionOutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToTerraform, true)(struct!.placementSpecifications),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsPropertyToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsPropertyToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionResourceConfigInstanceGroupsPropertyList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionStoppingConditionPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionStoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionStoppingConditionPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionStoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionTuningObjectivePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionTuningObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionTuningObjectivePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionTuningObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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


export function awsHyperParameterTuningJobTrainingJobDefinitionVpcConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionVpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionVpcConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionVpcConfigProperty | cdktn.IResolvable): any {
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


export function awsHyperParameterTuningJobTrainingJobDefinitionPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition_name: cdktn.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktn.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    retry_strategy: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionRetryStrategyPropertyToTerraform, false)(struct!.retryStrategy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.staticHyperParameters),
    algorithm_specification: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationPropertyToTerraform, true)(struct!.algorithmSpecification),
    checkpoint_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigPropertyToTerraform, true)(struct!.checkpointConfig),
    hyper_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesPropertyToTerraform, true)(struct!.hyperParameterRanges),
    hyper_parameter_tuning_resource_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigPropertyToTerraform, true)(struct!.hyperParameterTuningResourceConfig),
    input_data_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigPropertyToTerraform, true)(struct!.inputDataConfig),
    output_data_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigPropertyToTerraform, true)(struct!.outputDataConfig),
    resource_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigPropertyToTerraform, true)(struct!.resourceConfig),
    stopping_condition: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionStoppingConditionPropertyToTerraform, true)(struct!.stoppingCondition),
    tuning_objective: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionTuningObjectivePropertyToTerraform, true)(struct!.tuningObjective),
    vpc_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionVpcConfigPropertyToTerraform, true)(struct!.vpcConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition_name: {
      value: cdktn.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktn.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retry_strategy: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionRetryStrategyPropertyToHclTerraform, false)(struct!.retryStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionRetryStrategyPropertyList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    algorithm_specification: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationPropertyToHclTerraform, true)(struct!.algorithmSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionAlgorithmSpecificationPropertyList",
    },
    checkpoint_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigPropertyToHclTerraform, true)(struct!.checkpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionCheckpointConfigPropertyList",
    },
    hyper_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesPropertyToHclTerraform, true)(struct!.hyperParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterRangesPropertyList",
    },
    hyper_parameter_tuning_resource_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigPropertyToHclTerraform, true)(struct!.hyperParameterTuningResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyList",
    },
    input_data_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionInputDataConfigPropertyToHclTerraform, true)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionInputDataConfigPropertyList",
    },
    output_data_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigPropertyToHclTerraform, true)(struct!.outputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionOutputDataConfigPropertyList",
    },
    resource_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionResourceConfigPropertyToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionResourceConfigPropertyList",
    },
    stopping_condition: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionStoppingConditionPropertyToHclTerraform, true)(struct!.stoppingCondition),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionStoppingConditionPropertyList",
    },
    tuning_objective: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionTuningObjectivePropertyToHclTerraform, true)(struct!.tuningObjective),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionTuningObjectivePropertyList",
    },
    vpc_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionVpcConfigPropertyToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionVpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsRetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsRetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable): any {
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
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsAlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyToTerraform, true)(struct!.metricDefinitions),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsAlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsCheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsCheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty | cdktn.IResolvable): any {
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
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterRangesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_configs: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyToTerraform, true)(struct!.instanceConfigs),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_configs: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyToHclTerraform, true)(struct!.instanceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourcePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourcePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourcePropertyToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigPropertyToTerraform, true)(struct!.shuffleConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsInputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourcePropertyToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigDataSourcePropertyList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigPropertyToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsOutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsOutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToTerraform, true)(struct!.placementSpecifications),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsPropertyToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsPropertyToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsStoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsStoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsTuningObjectivePropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsTuningObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsTuningObjectivePropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsTuningObjectiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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


export function awsHyperParameterTuningJobTrainingJobDefinitionsVpcConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsVpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsVpcConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsVpcConfigProperty | cdktn.IResolvable): any {
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


export function awsHyperParameterTuningJobTrainingJobDefinitionsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition_name: cdktn.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktn.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    retry_strategy: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyPropertyToTerraform, false)(struct!.retryStrategy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.staticHyperParameters),
    algorithm_specification: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationPropertyToTerraform, true)(struct!.algorithmSpecification),
    checkpoint_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigPropertyToTerraform, true)(struct!.checkpointConfig),
    hyper_parameter_ranges: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesPropertyToTerraform, true)(struct!.hyperParameterRanges),
    hyper_parameter_tuning_resource_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyToTerraform, true)(struct!.hyperParameterTuningResourceConfig),
    input_data_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigPropertyToTerraform, true)(struct!.inputDataConfig),
    output_data_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigPropertyToTerraform, true)(struct!.outputDataConfig),
    resource_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigPropertyToTerraform, true)(struct!.resourceConfig),
    stopping_condition: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionPropertyToTerraform, true)(struct!.stoppingCondition),
    tuning_objective: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsTuningObjectivePropertyToTerraform, true)(struct!.tuningObjective),
    vpc_config: cdktn.listMapper(awsHyperParameterTuningJobTrainingJobDefinitionsVpcConfigPropertyToTerraform, true)(struct!.vpcConfig),
  }
}


export function awsHyperParameterTuningJobTrainingJobDefinitionsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.TrainingJobDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition_name: {
      value: cdktn.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktn.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retry_strategy: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyPropertyToHclTerraform, false)(struct!.retryStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsRetryStrategyPropertyList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    algorithm_specification: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationPropertyToHclTerraform, true)(struct!.algorithmSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsAlgorithmSpecificationPropertyList",
    },
    checkpoint_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigPropertyToHclTerraform, true)(struct!.checkpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsCheckpointConfigPropertyList",
    },
    hyper_parameter_ranges: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesPropertyToHclTerraform, true)(struct!.hyperParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterRangesPropertyList",
    },
    hyper_parameter_tuning_resource_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyToHclTerraform, true)(struct!.hyperParameterTuningResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyList",
    },
    input_data_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigPropertyToHclTerraform, true)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsInputDataConfigPropertyList",
    },
    output_data_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigPropertyToHclTerraform, true)(struct!.outputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsOutputDataConfigPropertyList",
    },
    resource_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsResourceConfigPropertyToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsResourceConfigPropertyList",
    },
    stopping_condition: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionPropertyToHclTerraform, true)(struct!.stoppingCondition),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsStoppingConditionPropertyList",
    },
    tuning_objective: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsTuningObjectivePropertyToHclTerraform, true)(struct!.tuningObjective),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsTuningObjectivePropertyList",
    },
    vpc_config: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobTrainingJobDefinitionsVpcConfigPropertyToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingJobDefinitionsVpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobParentHyperParameterTuningJobsPropertyToTerraform(struct?: AwsHyperParameterTuningJob.ParentHyperParameterTuningJobsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsHyperParameterTuningJobParentHyperParameterTuningJobsPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.ParentHyperParameterTuningJobsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsHyperParameterTuningJobWarmStartConfigPropertyToTerraform(struct?: AwsHyperParameterTuningJob.WarmStartConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    warm_start_type: cdktn.stringToTerraform(struct!.warmStartType),
    parent_hyper_parameter_tuning_jobs: cdktn.listMapper(awsHyperParameterTuningJobParentHyperParameterTuningJobsPropertyToTerraform, true)(struct!.parentHyperParameterTuningJobs),
  }
}


export function awsHyperParameterTuningJobWarmStartConfigPropertyToHclTerraform(struct?: AwsHyperParameterTuningJob.WarmStartConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    warm_start_type: {
      value: cdktn.stringToHclTerraform(struct!.warmStartType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_hyper_parameter_tuning_jobs: {
      value: cdktn.listMapperHcl(awsHyperParameterTuningJobParentHyperParameterTuningJobsPropertyToHclTerraform, true)(struct!.parentHyperParameterTuningJobs),
      isBlock: true,
      type: "list",
      storageClassType: "ParentHyperParameterTuningJobsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsHyperParameterTuningJob {
export interface AutotuneProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#mode AwsHyperParameterTuningJob#mode}
  */
  readonly mode: string;
}
export class AutotunePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutotuneProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutotuneProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class AutotunePropertyList extends cdktn.ComplexList {
  public internalValue? : AutotuneProperty[] | cdktn.IResolvable

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
  public get(index: number): AutotunePropertyOutputReference {
    return new AutotunePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectiveProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name AwsHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#type AwsHyperParameterTuningJob#type}
  */
  readonly type: string;
}
export class ObjectivePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObjectiveProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectiveProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

export class ObjectivePropertyList extends cdktn.ComplexList {
  public internalValue? : ObjectiveProperty[] | cdktn.IResolvable

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
  public get(index: number): ObjectivePropertyOutputReference {
    return new ObjectivePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigParameterRangesAutoParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint AwsHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}
export class ConfigParameterRangesAutoParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class ConfigParameterRangesAutoParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigParameterRangesAutoParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigParameterRangesAutoParametersPropertyOutputReference {
    return new ConfigParameterRangesAutoParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigParameterRangesCategoricalParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#values AwsHyperParameterTuningJob#values}
  */
  readonly values: string[];
}
export class ConfigParameterRangesCategoricalParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ConfigParameterRangesCategoricalParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigParameterRangesCategoricalParameterRangesPropertyOutputReference {
    return new ConfigParameterRangesCategoricalParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigParameterRangesContinuousParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class ConfigParameterRangesContinuousParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class ConfigParameterRangesContinuousParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigParameterRangesContinuousParameterRangesPropertyOutputReference {
    return new ConfigParameterRangesContinuousParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigParameterRangesIntegerParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class ConfigParameterRangesIntegerParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class ConfigParameterRangesIntegerParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigParameterRangesIntegerParameterRangesPropertyOutputReference {
    return new ConfigParameterRangesIntegerParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParameterRangesProperty {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters AwsHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: ConfigParameterRangesAutoParametersProperty[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges AwsHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: ConfigParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges AwsHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: ConfigParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges AwsHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: ConfigParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable;
}
export class ParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new ConfigParameterRangesAutoParametersPropertyList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: ConfigParameterRangesAutoParametersProperty[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new ConfigParameterRangesCategoricalParameterRangesPropertyList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: ConfigParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new ConfigParameterRangesContinuousParameterRangesPropertyList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: ConfigParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new ConfigParameterRangesIntegerParameterRangesPropertyList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: ConfigParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class ParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : ParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): ParameterRangesPropertyOutputReference {
    return new ParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceLimitsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_number_of_training_jobs AwsHyperParameterTuningJob#max_number_of_training_jobs}
  */
  readonly maxNumberOfTrainingJobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_parallel_training_jobs AwsHyperParameterTuningJob#max_parallel_training_jobs}
  */
  readonly maxParallelTrainingJobs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds AwsHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}
export class ResourceLimitsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceLimitsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNumberOfTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfTrainingJobs = this._maxNumberOfTrainingJobs;
    }
    if (this._maxParallelTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelTrainingJobs = this._maxParallelTrainingJobs;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceLimitsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = undefined;
      this._maxParallelTrainingJobs = undefined;
      this._maxRuntimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = value.maxNumberOfTrainingJobs;
      this._maxParallelTrainingJobs = value.maxParallelTrainingJobs;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
  }

  // max_number_of_training_jobs - computed: true, optional: true, required: false
  private _maxNumberOfTrainingJobs?: number; 
  public get maxNumberOfTrainingJobs() {
    return this.getNumberAttribute('max_number_of_training_jobs');
  }
  public set maxNumberOfTrainingJobs(value: number) {
    this._maxNumberOfTrainingJobs = value;
  }
  public resetMaxNumberOfTrainingJobs() {
    this._maxNumberOfTrainingJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTrainingJobsInput() {
    return this._maxNumberOfTrainingJobs;
  }

  // max_parallel_training_jobs - computed: false, optional: false, required: true
  private _maxParallelTrainingJobs?: number; 
  public get maxParallelTrainingJobs() {
    return this.getNumberAttribute('max_parallel_training_jobs');
  }
  public set maxParallelTrainingJobs(value: number) {
    this._maxParallelTrainingJobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelTrainingJobsInput() {
    return this._maxParallelTrainingJobs;
  }

  // max_runtime_in_seconds - computed: true, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }
}

export class ResourceLimitsPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceLimitsProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceLimitsPropertyOutputReference {
    return new ResourceLimitsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HyperbandStrategyConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_resource AwsHyperParameterTuningJob#max_resource}
  */
  readonly maxResource?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_resource AwsHyperParameterTuningJob#min_resource}
  */
  readonly minResource?: number;
}
export class HyperbandStrategyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HyperbandStrategyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResource = this._maxResource;
    }
    if (this._minResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResource = this._minResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HyperbandStrategyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxResource = undefined;
      this._minResource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxResource = value.maxResource;
      this._minResource = value.minResource;
    }
  }

  // max_resource - computed: false, optional: true, required: false
  private _maxResource?: number; 
  public get maxResource() {
    return this.getNumberAttribute('max_resource');
  }
  public set maxResource(value: number) {
    this._maxResource = value;
  }
  public resetMaxResource() {
    this._maxResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourceInput() {
    return this._maxResource;
  }

  // min_resource - computed: false, optional: true, required: false
  private _minResource?: number; 
  public get minResource() {
    return this.getNumberAttribute('min_resource');
  }
  public set minResource(value: number) {
    this._minResource = value;
  }
  public resetMinResource() {
    this._minResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourceInput() {
    return this._minResource;
  }
}

export class HyperbandStrategyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HyperbandStrategyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HyperbandStrategyConfigPropertyOutputReference {
    return new HyperbandStrategyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StrategyConfigProperty {
  /**
  * hyperband_strategy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hyperband_strategy_config AwsHyperParameterTuningJob#hyperband_strategy_config}
  */
  readonly hyperbandStrategyConfig?: HyperbandStrategyConfigProperty[] | cdktn.IResolvable;
}
export class StrategyConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StrategyConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperbandStrategyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperbandStrategyConfig = this._hyperbandStrategyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StrategyConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hyperbandStrategyConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hyperbandStrategyConfig.internalValue = value.hyperbandStrategyConfig;
    }
  }

  // hyperband_strategy_config - computed: false, optional: true, required: false
  private _hyperbandStrategyConfig = new HyperbandStrategyConfigPropertyList(this, "hyperband_strategy_config", false);
  public get hyperbandStrategyConfig() {
    return this._hyperbandStrategyConfig;
  }
  public putHyperbandStrategyConfig(value: HyperbandStrategyConfigProperty[] | cdktn.IResolvable) {
    this._hyperbandStrategyConfig.internalValue = value;
  }
  public resetHyperbandStrategyConfig() {
    this._hyperbandStrategyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperbandStrategyConfigInput() {
    return this._hyperbandStrategyConfig.internalValue;
  }
}

export class StrategyConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : StrategyConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): StrategyConfigPropertyOutputReference {
    return new StrategyConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BestObjectiveNotImprovingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_number_of_training_jobs_not_improving AwsHyperParameterTuningJob#max_number_of_training_jobs_not_improving}
  */
  readonly maxNumberOfTrainingJobsNotImproving?: number;
}
export class BestObjectiveNotImprovingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BestObjectiveNotImprovingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNumberOfTrainingJobsNotImproving !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfTrainingJobsNotImproving = this._maxNumberOfTrainingJobsNotImproving;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BestObjectiveNotImprovingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobsNotImproving = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobsNotImproving = value.maxNumberOfTrainingJobsNotImproving;
    }
  }

  // max_number_of_training_jobs_not_improving - computed: true, optional: true, required: false
  private _maxNumberOfTrainingJobsNotImproving?: number; 
  public get maxNumberOfTrainingJobsNotImproving() {
    return this.getNumberAttribute('max_number_of_training_jobs_not_improving');
  }
  public set maxNumberOfTrainingJobsNotImproving(value: number) {
    this._maxNumberOfTrainingJobsNotImproving = value;
  }
  public resetMaxNumberOfTrainingJobsNotImproving() {
    this._maxNumberOfTrainingJobsNotImproving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTrainingJobsNotImprovingInput() {
    return this._maxNumberOfTrainingJobsNotImproving;
  }
}

export class BestObjectiveNotImprovingPropertyList extends cdktn.ComplexList {
  public internalValue? : BestObjectiveNotImprovingProperty[] | cdktn.IResolvable

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
  public get(index: number): BestObjectiveNotImprovingPropertyOutputReference {
    return new BestObjectiveNotImprovingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConvergenceDetectedProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#complete_on_convergence AwsHyperParameterTuningJob#complete_on_convergence}
  */
  readonly completeOnConvergence?: string;
}
export class ConvergenceDetectedPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConvergenceDetectedProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completeOnConvergence !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeOnConvergence = this._completeOnConvergence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConvergenceDetectedProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completeOnConvergence = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completeOnConvergence = value.completeOnConvergence;
    }
  }

  // complete_on_convergence - computed: false, optional: true, required: false
  private _completeOnConvergence?: string; 
  public get completeOnConvergence() {
    return this.getStringAttribute('complete_on_convergence');
  }
  public set completeOnConvergence(value: string) {
    this._completeOnConvergence = value;
  }
  public resetCompleteOnConvergence() {
    this._completeOnConvergence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeOnConvergenceInput() {
    return this._completeOnConvergence;
  }
}

export class ConvergenceDetectedPropertyList extends cdktn.ComplexList {
  public internalValue? : ConvergenceDetectedProperty[] | cdktn.IResolvable

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
  public get(index: number): ConvergenceDetectedPropertyOutputReference {
    return new ConvergenceDetectedPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TuningJobCompletionCriteriaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#target_objective_metric_value AwsHyperParameterTuningJob#target_objective_metric_value}
  */
  readonly targetObjectiveMetricValue?: number;
  /**
  * best_objective_not_improving block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#best_objective_not_improving AwsHyperParameterTuningJob#best_objective_not_improving}
  */
  readonly bestObjectiveNotImproving?: BestObjectiveNotImprovingProperty[] | cdktn.IResolvable;
  /**
  * convergence_detected block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#convergence_detected AwsHyperParameterTuningJob#convergence_detected}
  */
  readonly convergenceDetected?: ConvergenceDetectedProperty[] | cdktn.IResolvable;
}
export class TuningJobCompletionCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TuningJobCompletionCriteriaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetObjectiveMetricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectiveMetricValue = this._targetObjectiveMetricValue;
    }
    if (this._bestObjectiveNotImproving?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestObjectiveNotImproving = this._bestObjectiveNotImproving?.internalValue;
    }
    if (this._convergenceDetected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convergenceDetected = this._convergenceDetected?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TuningJobCompletionCriteriaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = undefined;
      this._bestObjectiveNotImproving.internalValue = undefined;
      this._convergenceDetected.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = value.targetObjectiveMetricValue;
      this._bestObjectiveNotImproving.internalValue = value.bestObjectiveNotImproving;
      this._convergenceDetected.internalValue = value.convergenceDetected;
    }
  }

  // target_objective_metric_value - computed: false, optional: true, required: false
  private _targetObjectiveMetricValue?: number; 
  public get targetObjectiveMetricValue() {
    return this.getNumberAttribute('target_objective_metric_value');
  }
  public set targetObjectiveMetricValue(value: number) {
    this._targetObjectiveMetricValue = value;
  }
  public resetTargetObjectiveMetricValue() {
    this._targetObjectiveMetricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectiveMetricValueInput() {
    return this._targetObjectiveMetricValue;
  }

  // best_objective_not_improving - computed: false, optional: true, required: false
  private _bestObjectiveNotImproving = new BestObjectiveNotImprovingPropertyList(this, "best_objective_not_improving", false);
  public get bestObjectiveNotImproving() {
    return this._bestObjectiveNotImproving;
  }
  public putBestObjectiveNotImproving(value: BestObjectiveNotImprovingProperty[] | cdktn.IResolvable) {
    this._bestObjectiveNotImproving.internalValue = value;
  }
  public resetBestObjectiveNotImproving() {
    this._bestObjectiveNotImproving.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestObjectiveNotImprovingInput() {
    return this._bestObjectiveNotImproving.internalValue;
  }

  // convergence_detected - computed: false, optional: true, required: false
  private _convergenceDetected = new ConvergenceDetectedPropertyList(this, "convergence_detected", false);
  public get convergenceDetected() {
    return this._convergenceDetected;
  }
  public putConvergenceDetected(value: ConvergenceDetectedProperty[] | cdktn.IResolvable) {
    this._convergenceDetected.internalValue = value;
  }
  public resetConvergenceDetected() {
    this._convergenceDetected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergenceDetectedInput() {
    return this._convergenceDetected.internalValue;
  }
}

export class TuningJobCompletionCriteriaPropertyList extends cdktn.ComplexList {
  public internalValue? : TuningJobCompletionCriteriaProperty[] | cdktn.IResolvable

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
  public get(index: number): TuningJobCompletionCriteriaPropertyOutputReference {
    return new TuningJobCompletionCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#random_seed AwsHyperParameterTuningJob#random_seed}
  */
  readonly randomSeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#strategy AwsHyperParameterTuningJob#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_early_stopping_type AwsHyperParameterTuningJob#training_job_early_stopping_type}
  */
  readonly trainingJobEarlyStoppingType?: string;
  /**
  * objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#objective AwsHyperParameterTuningJob#objective}
  */
  readonly objective?: ObjectiveProperty[] | cdktn.IResolvable;
  /**
  * parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#parameter_ranges AwsHyperParameterTuningJob#parameter_ranges}
  */
  readonly parameterRanges?: ParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_limits AwsHyperParameterTuningJob#resource_limits}
  */
  readonly resourceLimits?: ResourceLimitsProperty[] | cdktn.IResolvable;
  /**
  * strategy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#strategy_config AwsHyperParameterTuningJob#strategy_config}
  */
  readonly strategyConfig?: StrategyConfigProperty[] | cdktn.IResolvable;
  /**
  * tuning_job_completion_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_job_completion_criteria AwsHyperParameterTuningJob#tuning_job_completion_criteria}
  */
  readonly tuningJobCompletionCriteria?: TuningJobCompletionCriteriaProperty[] | cdktn.IResolvable;
}
export class ConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._randomSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSeed = this._randomSeed;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._trainingJobEarlyStoppingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobEarlyStoppingType = this._trainingJobEarlyStoppingType;
    }
    if (this._objective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective?.internalValue;
    }
    if (this._parameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterRanges = this._parameterRanges?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    if (this._strategyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyConfig = this._strategyConfig?.internalValue;
    }
    if (this._tuningJobCompletionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningJobCompletionCriteria = this._tuningJobCompletionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._randomSeed = undefined;
      this._strategy = undefined;
      this._trainingJobEarlyStoppingType = undefined;
      this._objective.internalValue = undefined;
      this._parameterRanges.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
      this._strategyConfig.internalValue = undefined;
      this._tuningJobCompletionCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._randomSeed = value.randomSeed;
      this._strategy = value.strategy;
      this._trainingJobEarlyStoppingType = value.trainingJobEarlyStoppingType;
      this._objective.internalValue = value.objective;
      this._parameterRanges.internalValue = value.parameterRanges;
      this._resourceLimits.internalValue = value.resourceLimits;
      this._strategyConfig.internalValue = value.strategyConfig;
      this._tuningJobCompletionCriteria.internalValue = value.tuningJobCompletionCriteria;
    }
  }

  // random_seed - computed: false, optional: true, required: false
  private _randomSeed?: number; 
  public get randomSeed() {
    return this.getNumberAttribute('random_seed');
  }
  public set randomSeed(value: number) {
    this._randomSeed = value;
  }
  public resetRandomSeed() {
    this._randomSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSeedInput() {
    return this._randomSeed;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // training_job_early_stopping_type - computed: true, optional: true, required: false
  private _trainingJobEarlyStoppingType?: string; 
  public get trainingJobEarlyStoppingType() {
    return this.getStringAttribute('training_job_early_stopping_type');
  }
  public set trainingJobEarlyStoppingType(value: string) {
    this._trainingJobEarlyStoppingType = value;
  }
  public resetTrainingJobEarlyStoppingType() {
    this._trainingJobEarlyStoppingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobEarlyStoppingTypeInput() {
    return this._trainingJobEarlyStoppingType;
  }

  // objective - computed: false, optional: true, required: false
  private _objective = new ObjectivePropertyList(this, "objective", false);
  public get objective() {
    return this._objective;
  }
  public putObjective(value: ObjectiveProperty[] | cdktn.IResolvable) {
    this._objective.internalValue = value;
  }
  public resetObjective() {
    this._objective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }

  // parameter_ranges - computed: false, optional: true, required: false
  private _parameterRanges = new ParameterRangesPropertyList(this, "parameter_ranges", false);
  public get parameterRanges() {
    return this._parameterRanges;
  }
  public putParameterRanges(value: ParameterRangesProperty[] | cdktn.IResolvable) {
    this._parameterRanges.internalValue = value;
  }
  public resetParameterRanges() {
    this._parameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterRangesInput() {
    return this._parameterRanges.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new ResourceLimitsPropertyList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: ResourceLimitsProperty[] | cdktn.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // strategy_config - computed: false, optional: true, required: false
  private _strategyConfig = new StrategyConfigPropertyList(this, "strategy_config", false);
  public get strategyConfig() {
    return this._strategyConfig;
  }
  public putStrategyConfig(value: StrategyConfigProperty[] | cdktn.IResolvable) {
    this._strategyConfig.internalValue = value;
  }
  public resetStrategyConfig() {
    this._strategyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyConfigInput() {
    return this._strategyConfig.internalValue;
  }

  // tuning_job_completion_criteria - computed: false, optional: true, required: false
  private _tuningJobCompletionCriteria = new TuningJobCompletionCriteriaPropertyList(this, "tuning_job_completion_criteria", false);
  public get tuningJobCompletionCriteria() {
    return this._tuningJobCompletionCriteria;
  }
  public putTuningJobCompletionCriteria(value: TuningJobCompletionCriteriaProperty[] | cdktn.IResolvable) {
    this._tuningJobCompletionCriteria.internalValue = value;
  }
  public resetTuningJobCompletionCriteria() {
    this._tuningJobCompletionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningJobCompletionCriteriaInput() {
    return this._tuningJobCompletionCriteria.internalValue;
  }
}

export class ConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigPropertyOutputReference {
    return new ConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#create AwsHyperParameterTuningJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#delete AwsHyperParameterTuningJob#delete}
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
export interface TrainingJobDefinitionRetryStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#maximum_retry_attempts AwsHyperParameterTuningJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}
export class TrainingJobDefinitionRetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionRetryStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionRetryStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class TrainingJobDefinitionRetryStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionRetryStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionRetryStrategyPropertyOutputReference {
    return new TrainingJobDefinitionRetryStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#regex AwsHyperParameterTuningJob#regex}
  */
  readonly regex: string;
}
export class TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyOutputReference {
    return new TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionAlgorithmSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_name AwsHyperParameterTuningJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_image AwsHyperParameterTuningJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_input_mode AwsHyperParameterTuningJob#training_input_mode}
  */
  readonly trainingInputMode: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_definitions AwsHyperParameterTuningJob#metric_definitions}
  */
  readonly metricDefinitions?: TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionAlgorithmSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionAlgorithmSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionAlgorithmSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
    }
  }

  // algorithm_name - computed: true, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // training_image - computed: true, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: false, required: true
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsPropertyList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: TrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }
}

export class TrainingJobDefinitionAlgorithmSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionAlgorithmSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionAlgorithmSpecificationPropertyOutputReference {
    return new TrainingJobDefinitionAlgorithmSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionCheckpointConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#local_path AwsHyperParameterTuningJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri AwsHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class TrainingJobDefinitionCheckpointConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionCheckpointConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionCheckpointConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

export class TrainingJobDefinitionCheckpointConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionCheckpointConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionCheckpointConfigPropertyOutputReference {
    return new TrainingJobDefinitionCheckpointConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterRangesAutoParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint AwsHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}
export class TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#values AwsHyperParameterTuningJob#values}
  */
  readonly values: string[];
}
export class TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterRangesProperty {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters AwsHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: TrainingJobDefinitionHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges AwsHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges AwsHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges AwsHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionHyperParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new TrainingJobDefinitionHyperParameterRangesAutoParametersPropertyList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: TrainingJobDefinitionHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesPropertyList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: TrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesPropertyList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: TrainingJobDefinitionHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesPropertyList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: TrainingJobDefinitionHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class TrainingJobDefinitionHyperParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}
export class TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionHyperParameterTuningResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#allocation_strategy AwsHyperParameterTuningJob#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id AwsHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_configs AwsHyperParameterTuningJob#instance_configs}
  */
  readonly instanceConfigs?: TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionHyperParameterTuningResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigs = this._instanceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionHyperParameterTuningResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceConfigs.internalValue = value.instanceConfigs;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_configs - computed: false, optional: true, required: false
  private _instanceConfigs = new TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsPropertyList(this, "instance_configs", false);
  public get instanceConfigs() {
    return this._instanceConfigs;
  }
  public putInstanceConfigs(value: TrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable) {
    this._instanceConfigs.internalValue = value;
  }
  public resetInstanceConfigs() {
    this._instanceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigsInput() {
    return this._instanceConfigs.internalValue;
  }
}

export class TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyOutputReference {
    return new TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#directory_path AwsHyperParameterTuningJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_access_mode AwsHyperParameterTuningJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_id AwsHyperParameterTuningJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_type AwsHyperParameterTuningJob#file_system_type}
  */
  readonly fileSystemType: string;
}
export class TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_content_arn AwsHyperParameterTuningJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}
export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#accept_eula AwsHyperParameterTuningJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#attribute_names AwsHyperParameterTuningJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_names AwsHyperParameterTuningJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_distribution_type AwsHyperParameterTuningJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_type AwsHyperParameterTuningJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri AwsHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_access_config AwsHyperParameterTuningJob#hub_access_config}
  */
  readonly hubAccessConfig?: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#model_access_config AwsHyperParameterTuningJob#model_access_config}
  */
  readonly modelAccessConfig?: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_group_names'));
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
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

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigDataSourceProperty {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_data_source AwsHyperParameterTuningJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_source AwsHyperParameterTuningJob#s3_data_source}
  */
  readonly s3DataSource?: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionInputDataConfigDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourcePropertyList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: TrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new TrainingJobDefinitionInputDataConfigDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: TrainingJobDefinitionInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class TrainingJobDefinitionInputDataConfigDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigDataSourcePropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigShuffleConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#seed AwsHyperParameterTuningJob#seed}
  */
  readonly seed: number;
}
export class TrainingJobDefinitionInputDataConfigShuffleConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigShuffleConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigShuffleConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class TrainingJobDefinitionInputDataConfigShuffleConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigShuffleConfigPropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigShuffleConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionInputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#channel_name AwsHyperParameterTuningJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type AwsHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#content_type AwsHyperParameterTuningJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#input_mode AwsHyperParameterTuningJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#record_wrapper_type AwsHyperParameterTuningJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#data_source AwsHyperParameterTuningJob#data_source}
  */
  readonly dataSource?: TrainingJobDefinitionInputDataConfigDataSourceProperty[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#shuffle_config AwsHyperParameterTuningJob#shuffle_config}
  */
  readonly shuffleConfig?: TrainingJobDefinitionInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionInputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionInputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionInputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new TrainingJobDefinitionInputDataConfigDataSourcePropertyList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: TrainingJobDefinitionInputDataConfigDataSourceProperty[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new TrainingJobDefinitionInputDataConfigShuffleConfigPropertyList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: TrainingJobDefinitionInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class TrainingJobDefinitionInputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionInputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionInputDataConfigPropertyOutputReference {
    return new TrainingJobDefinitionInputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionOutputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type AwsHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#kms_key_id AwsHyperParameterTuningJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_output_path AwsHyperParameterTuningJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}
export class TrainingJobDefinitionOutputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionOutputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionOutputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
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
}

export class TrainingJobDefinitionOutputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionOutputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionOutputDataConfigPropertyOutputReference {
    return new TrainingJobDefinitionOutputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionResourceConfigInstanceGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_name AwsHyperParameterTuningJob#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType: string;
}
export class TrainingJobDefinitionResourceConfigInstanceGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionResourceConfigInstanceGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionResourceConfigInstanceGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class TrainingJobDefinitionResourceConfigInstanceGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionResourceConfigInstanceGroupsPropertyOutputReference {
    return new TrainingJobDefinitionResourceConfigInstanceGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#ultra_server_id AwsHyperParameterTuningJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}
export class TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference {
    return new TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_multiple_jobs AwsHyperParameterTuningJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#placement_specifications AwsHyperParameterTuningJob#placement_specifications}
  */
  readonly placementSpecifications?: TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: TrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyOutputReference {
    return new TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#keep_alive_period_in_seconds AwsHyperParameterTuningJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_plan_arn AwsHyperParameterTuningJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id AwsHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_groups AwsHyperParameterTuningJob#instance_groups}
  */
  readonly instanceGroups?: TrainingJobDefinitionResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_placement_config AwsHyperParameterTuningJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
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

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new TrainingJobDefinitionResourceConfigInstanceGroupsPropertyList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: TrainingJobDefinitionResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new TrainingJobDefinitionResourceConfigInstancePlacementConfigPropertyList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: TrainingJobDefinitionResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class TrainingJobDefinitionResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionResourceConfigPropertyOutputReference {
    return new TrainingJobDefinitionResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionStoppingConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_pending_time_in_seconds AwsHyperParameterTuningJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds AwsHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_wait_time_in_seconds AwsHyperParameterTuningJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}
export class TrainingJobDefinitionStoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionStoppingConditionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionStoppingConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class TrainingJobDefinitionStoppingConditionPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionStoppingConditionProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionStoppingConditionPropertyOutputReference {
    return new TrainingJobDefinitionStoppingConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionTuningObjectiveProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name AwsHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#type AwsHyperParameterTuningJob#type}
  */
  readonly type: string;
}
export class TrainingJobDefinitionTuningObjectivePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionTuningObjectiveProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionTuningObjectiveProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

export class TrainingJobDefinitionTuningObjectivePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionTuningObjectiveProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionTuningObjectivePropertyOutputReference {
    return new TrainingJobDefinitionTuningObjectivePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionVpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#security_group_ids AwsHyperParameterTuningJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#subnets AwsHyperParameterTuningJob#subnets}
  */
  readonly subnets: string[];
}
export class TrainingJobDefinitionVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionVpcConfigProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TrainingJobDefinitionVpcConfigProperty | cdktn.IResolvable | undefined) {
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

export class TrainingJobDefinitionVpcConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionVpcConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionVpcConfigPropertyOutputReference {
    return new TrainingJobDefinitionVpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#definition_name AwsHyperParameterTuningJob#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_inter_container_traffic_encryption AwsHyperParameterTuningJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_managed_spot_training AwsHyperParameterTuningJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_network_isolation AwsHyperParameterTuningJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#environment AwsHyperParameterTuningJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#retry_strategy AwsHyperParameterTuningJob#retry_strategy}
  */
  readonly retryStrategy?: TrainingJobDefinitionRetryStrategyProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#role_arn AwsHyperParameterTuningJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#static_hyper_parameters AwsHyperParameterTuningJob#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_specification AwsHyperParameterTuningJob#algorithm_specification}
  */
  readonly algorithmSpecification?: TrainingJobDefinitionAlgorithmSpecificationProperty[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#checkpoint_config AwsHyperParameterTuningJob#checkpoint_config}
  */
  readonly checkpointConfig?: TrainingJobDefinitionCheckpointConfigProperty[] | cdktn.IResolvable;
  /**
  * hyper_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_ranges AwsHyperParameterTuningJob#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: TrainingJobDefinitionHyperParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * hyper_parameter_tuning_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_tuning_resource_config AwsHyperParameterTuningJob#hyper_parameter_tuning_resource_config}
  */
  readonly hyperParameterTuningResourceConfig?: TrainingJobDefinitionHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#input_data_config AwsHyperParameterTuningJob#input_data_config}
  */
  readonly inputDataConfig?: TrainingJobDefinitionInputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#output_data_config AwsHyperParameterTuningJob#output_data_config}
  */
  readonly outputDataConfig?: TrainingJobDefinitionOutputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_config AwsHyperParameterTuningJob#resource_config}
  */
  readonly resourceConfig?: TrainingJobDefinitionResourceConfigProperty[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#stopping_condition AwsHyperParameterTuningJob#stopping_condition}
  */
  readonly stoppingCondition?: TrainingJobDefinitionStoppingConditionProperty[] | cdktn.IResolvable;
  /**
  * tuning_objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_objective AwsHyperParameterTuningJob#tuning_objective}
  */
  readonly tuningObjective?: TrainingJobDefinitionTuningObjectiveProperty[] | cdktn.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#vpc_config AwsHyperParameterTuningJob#vpc_config}
  */
  readonly vpcConfig?: TrainingJobDefinitionVpcConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._hyperParameterTuningResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningResourceConfig = this._hyperParameterTuningResourceConfig?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._environment = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._hyperParameterTuningResourceConfig.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._environment = value.environment;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._hyperParameterTuningResourceConfig.internalValue = value.hyperParameterTuningResourceConfig;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // retry_strategy - computed: true, optional: true, required: false
  private _retryStrategy = new TrainingJobDefinitionRetryStrategyPropertyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: TrainingJobDefinitionRetryStrategyProperty[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
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

  // static_hyper_parameters - computed: true, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new TrainingJobDefinitionAlgorithmSpecificationPropertyList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: TrainingJobDefinitionAlgorithmSpecificationProperty[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new TrainingJobDefinitionCheckpointConfigPropertyList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: TrainingJobDefinitionCheckpointConfigProperty[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new TrainingJobDefinitionHyperParameterRangesPropertyList(this, "hyper_parameter_ranges", false);
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: TrainingJobDefinitionHyperParameterRangesProperty[] | cdktn.IResolvable) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // hyper_parameter_tuning_resource_config - computed: false, optional: true, required: false
  private _hyperParameterTuningResourceConfig = new TrainingJobDefinitionHyperParameterTuningResourceConfigPropertyList(this, "hyper_parameter_tuning_resource_config", false);
  public get hyperParameterTuningResourceConfig() {
    return this._hyperParameterTuningResourceConfig;
  }
  public putHyperParameterTuningResourceConfig(value: TrainingJobDefinitionHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable) {
    this._hyperParameterTuningResourceConfig.internalValue = value;
  }
  public resetHyperParameterTuningResourceConfig() {
    this._hyperParameterTuningResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningResourceConfigInput() {
    return this._hyperParameterTuningResourceConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new TrainingJobDefinitionInputDataConfigPropertyList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: TrainingJobDefinitionInputDataConfigProperty[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new TrainingJobDefinitionOutputDataConfigPropertyList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: TrainingJobDefinitionOutputDataConfigProperty[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new TrainingJobDefinitionResourceConfigPropertyList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: TrainingJobDefinitionResourceConfigProperty[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new TrainingJobDefinitionStoppingConditionPropertyList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: TrainingJobDefinitionStoppingConditionProperty[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new TrainingJobDefinitionTuningObjectivePropertyList(this, "tuning_objective", false);
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: TrainingJobDefinitionTuningObjectiveProperty[] | cdktn.IResolvable) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new TrainingJobDefinitionVpcConfigPropertyList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: TrainingJobDefinitionVpcConfigProperty[] | cdktn.IResolvable) {
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

export class TrainingJobDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionPropertyOutputReference {
    return new TrainingJobDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsRetryStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#maximum_retry_attempts AwsHyperParameterTuningJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}
export class TrainingJobDefinitionsRetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsRetryStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsRetryStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class TrainingJobDefinitionsRetryStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsRetryStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsRetryStrategyPropertyOutputReference {
    return new TrainingJobDefinitionsRetryStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#regex AwsHyperParameterTuningJob#regex}
  */
  readonly regex: string;
}
export class TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyOutputReference {
    return new TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsAlgorithmSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_name AwsHyperParameterTuningJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_image AwsHyperParameterTuningJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_input_mode AwsHyperParameterTuningJob#training_input_mode}
  */
  readonly trainingInputMode: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_definitions AwsHyperParameterTuningJob#metric_definitions}
  */
  readonly metricDefinitions?: TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsAlgorithmSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsAlgorithmSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsAlgorithmSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
    }
  }

  // algorithm_name - computed: true, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // training_image - computed: true, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: false, required: true
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsPropertyList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: TrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsProperty[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }
}

export class TrainingJobDefinitionsAlgorithmSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsAlgorithmSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsAlgorithmSpecificationPropertyOutputReference {
    return new TrainingJobDefinitionsAlgorithmSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsCheckpointConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#local_path AwsHyperParameterTuningJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri AwsHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class TrainingJobDefinitionsCheckpointConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsCheckpointConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsCheckpointConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

export class TrainingJobDefinitionsCheckpointConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsCheckpointConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsCheckpointConfigPropertyOutputReference {
    return new TrainingJobDefinitionsCheckpointConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint AwsHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}
export class TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#values AwsHyperParameterTuningJob#values}
  */
  readonly values: string[];
}
export class TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value AwsHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value AwsHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type AwsHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}
export class TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterRangesProperty {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters AwsHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges AwsHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges AwsHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges AwsHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsHyperParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterRangesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterRangesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new TrainingJobDefinitionsHyperParameterRangesAutoParametersPropertyList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: TrainingJobDefinitionsHyperParameterRangesAutoParametersProperty[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesPropertyList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: TrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesProperty[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesPropertyList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: TrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesProperty[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesPropertyList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: TrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesProperty[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class TrainingJobDefinitionsHyperParameterRangesPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterRangesProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterRangesPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}
export class TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#allocation_strategy AwsHyperParameterTuningJob#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id AwsHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_configs AwsHyperParameterTuningJob#instance_configs}
  */
  readonly instanceConfigs?: TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigs = this._instanceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceConfigs.internalValue = value.instanceConfigs;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_configs - computed: false, optional: true, required: false
  private _instanceConfigs = new TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsPropertyList(this, "instance_configs", false);
  public get instanceConfigs() {
    return this._instanceConfigs;
  }
  public putInstanceConfigs(value: TrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsProperty[] | cdktn.IResolvable) {
    this._instanceConfigs.internalValue = value;
  }
  public resetInstanceConfigs() {
    this._instanceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigsInput() {
    return this._instanceConfigs.internalValue;
  }
}

export class TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyOutputReference {
    return new TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#directory_path AwsHyperParameterTuningJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_access_mode AwsHyperParameterTuningJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_id AwsHyperParameterTuningJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_type AwsHyperParameterTuningJob#file_system_type}
  */
  readonly fileSystemType: string;
}
export class TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_content_arn AwsHyperParameterTuningJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}
export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#accept_eula AwsHyperParameterTuningJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#attribute_names AwsHyperParameterTuningJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_names AwsHyperParameterTuningJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_distribution_type AwsHyperParameterTuningJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_type AwsHyperParameterTuningJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri AwsHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_access_config AwsHyperParameterTuningJob#hub_access_config}
  */
  readonly hubAccessConfig?: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#model_access_config AwsHyperParameterTuningJob#model_access_config}
  */
  readonly modelAccessConfig?: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_group_names'));
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
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

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigPropertyList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigProperty[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigPropertyList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigProperty[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigDataSourceProperty {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_data_source AwsHyperParameterTuningJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_source AwsHyperParameterTuningJob#s3_data_source}
  */
  readonly s3DataSource?: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsInputDataConfigDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourcePropertyList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: TrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceProperty[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: TrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class TrainingJobDefinitionsInputDataConfigDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigDataSourcePropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigShuffleConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#seed AwsHyperParameterTuningJob#seed}
  */
  readonly seed: number;
}
export class TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigShuffleConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigShuffleConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsInputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#channel_name AwsHyperParameterTuningJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type AwsHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#content_type AwsHyperParameterTuningJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#input_mode AwsHyperParameterTuningJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#record_wrapper_type AwsHyperParameterTuningJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#data_source AwsHyperParameterTuningJob#data_source}
  */
  readonly dataSource?: TrainingJobDefinitionsInputDataConfigDataSourceProperty[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#shuffle_config AwsHyperParameterTuningJob#shuffle_config}
  */
  readonly shuffleConfig?: TrainingJobDefinitionsInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsInputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsInputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsInputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new TrainingJobDefinitionsInputDataConfigDataSourcePropertyList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: TrainingJobDefinitionsInputDataConfigDataSourceProperty[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new TrainingJobDefinitionsInputDataConfigShuffleConfigPropertyList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: TrainingJobDefinitionsInputDataConfigShuffleConfigProperty[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class TrainingJobDefinitionsInputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsInputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsInputDataConfigPropertyOutputReference {
    return new TrainingJobDefinitionsInputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsOutputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type AwsHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#kms_key_id AwsHyperParameterTuningJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_output_path AwsHyperParameterTuningJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}
export class TrainingJobDefinitionsOutputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsOutputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsOutputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
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
}

export class TrainingJobDefinitionsOutputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsOutputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsOutputDataConfigPropertyOutputReference {
    return new TrainingJobDefinitionsOutputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsResourceConfigInstanceGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_name AwsHyperParameterTuningJob#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType: string;
}
export class TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsResourceConfigInstanceGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsResourceConfigInstanceGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyOutputReference {
    return new TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#ultra_server_id AwsHyperParameterTuningJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}
export class TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference {
    return new TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_multiple_jobs AwsHyperParameterTuningJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#placement_specifications AwsHyperParameterTuningJob#placement_specifications}
  */
  readonly placementSpecifications?: TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsPropertyList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: TrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsProperty[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyOutputReference {
    return new TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count AwsHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type AwsHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#keep_alive_period_in_seconds AwsHyperParameterTuningJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#training_plan_arn AwsHyperParameterTuningJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id AwsHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb AwsHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_groups AwsHyperParameterTuningJob#instance_groups}
  */
  readonly instanceGroups?: TrainingJobDefinitionsResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_placement_config AwsHyperParameterTuningJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
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

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new TrainingJobDefinitionsResourceConfigInstanceGroupsPropertyList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: TrainingJobDefinitionsResourceConfigInstanceGroupsProperty[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new TrainingJobDefinitionsResourceConfigInstancePlacementConfigPropertyList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: TrainingJobDefinitionsResourceConfigInstancePlacementConfigProperty[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class TrainingJobDefinitionsResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsResourceConfigPropertyOutputReference {
    return new TrainingJobDefinitionsResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsStoppingConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_pending_time_in_seconds AwsHyperParameterTuningJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds AwsHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#max_wait_time_in_seconds AwsHyperParameterTuningJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}
export class TrainingJobDefinitionsStoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsStoppingConditionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsStoppingConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class TrainingJobDefinitionsStoppingConditionPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsStoppingConditionProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsStoppingConditionPropertyOutputReference {
    return new TrainingJobDefinitionsStoppingConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsTuningObjectiveProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name AwsHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#type AwsHyperParameterTuningJob#type}
  */
  readonly type: string;
}
export class TrainingJobDefinitionsTuningObjectivePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsTuningObjectiveProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsTuningObjectiveProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

export class TrainingJobDefinitionsTuningObjectivePropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsTuningObjectiveProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsTuningObjectivePropertyOutputReference {
    return new TrainingJobDefinitionsTuningObjectivePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsVpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#security_group_ids AwsHyperParameterTuningJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#subnets AwsHyperParameterTuningJob#subnets}
  */
  readonly subnets: string[];
}
export class TrainingJobDefinitionsVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsVpcConfigProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TrainingJobDefinitionsVpcConfigProperty | cdktn.IResolvable | undefined) {
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

export class TrainingJobDefinitionsVpcConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsVpcConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsVpcConfigPropertyOutputReference {
    return new TrainingJobDefinitionsVpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingJobDefinitionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#definition_name AwsHyperParameterTuningJob#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_inter_container_traffic_encryption AwsHyperParameterTuningJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_managed_spot_training AwsHyperParameterTuningJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_network_isolation AwsHyperParameterTuningJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#environment AwsHyperParameterTuningJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#retry_strategy AwsHyperParameterTuningJob#retry_strategy}
  */
  readonly retryStrategy?: TrainingJobDefinitionsRetryStrategyProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#role_arn AwsHyperParameterTuningJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#static_hyper_parameters AwsHyperParameterTuningJob#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_specification AwsHyperParameterTuningJob#algorithm_specification}
  */
  readonly algorithmSpecification?: TrainingJobDefinitionsAlgorithmSpecificationProperty[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#checkpoint_config AwsHyperParameterTuningJob#checkpoint_config}
  */
  readonly checkpointConfig?: TrainingJobDefinitionsCheckpointConfigProperty[] | cdktn.IResolvable;
  /**
  * hyper_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_ranges AwsHyperParameterTuningJob#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: TrainingJobDefinitionsHyperParameterRangesProperty[] | cdktn.IResolvable;
  /**
  * hyper_parameter_tuning_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_tuning_resource_config AwsHyperParameterTuningJob#hyper_parameter_tuning_resource_config}
  */
  readonly hyperParameterTuningResourceConfig?: TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#input_data_config AwsHyperParameterTuningJob#input_data_config}
  */
  readonly inputDataConfig?: TrainingJobDefinitionsInputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#output_data_config AwsHyperParameterTuningJob#output_data_config}
  */
  readonly outputDataConfig?: TrainingJobDefinitionsOutputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_config AwsHyperParameterTuningJob#resource_config}
  */
  readonly resourceConfig?: TrainingJobDefinitionsResourceConfigProperty[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#stopping_condition AwsHyperParameterTuningJob#stopping_condition}
  */
  readonly stoppingCondition?: TrainingJobDefinitionsStoppingConditionProperty[] | cdktn.IResolvable;
  /**
  * tuning_objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_objective AwsHyperParameterTuningJob#tuning_objective}
  */
  readonly tuningObjective?: TrainingJobDefinitionsTuningObjectiveProperty[] | cdktn.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#vpc_config AwsHyperParameterTuningJob#vpc_config}
  */
  readonly vpcConfig?: TrainingJobDefinitionsVpcConfigProperty[] | cdktn.IResolvable;
}
export class TrainingJobDefinitionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingJobDefinitionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._hyperParameterTuningResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningResourceConfig = this._hyperParameterTuningResourceConfig?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingJobDefinitionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._environment = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._hyperParameterTuningResourceConfig.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._environment = value.environment;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._hyperParameterTuningResourceConfig.internalValue = value.hyperParameterTuningResourceConfig;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // retry_strategy - computed: true, optional: true, required: false
  private _retryStrategy = new TrainingJobDefinitionsRetryStrategyPropertyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: TrainingJobDefinitionsRetryStrategyProperty[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
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

  // static_hyper_parameters - computed: true, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new TrainingJobDefinitionsAlgorithmSpecificationPropertyList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: TrainingJobDefinitionsAlgorithmSpecificationProperty[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new TrainingJobDefinitionsCheckpointConfigPropertyList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: TrainingJobDefinitionsCheckpointConfigProperty[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new TrainingJobDefinitionsHyperParameterRangesPropertyList(this, "hyper_parameter_ranges", false);
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: TrainingJobDefinitionsHyperParameterRangesProperty[] | cdktn.IResolvable) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // hyper_parameter_tuning_resource_config - computed: false, optional: true, required: false
  private _hyperParameterTuningResourceConfig = new TrainingJobDefinitionsHyperParameterTuningResourceConfigPropertyList(this, "hyper_parameter_tuning_resource_config", false);
  public get hyperParameterTuningResourceConfig() {
    return this._hyperParameterTuningResourceConfig;
  }
  public putHyperParameterTuningResourceConfig(value: TrainingJobDefinitionsHyperParameterTuningResourceConfigProperty[] | cdktn.IResolvable) {
    this._hyperParameterTuningResourceConfig.internalValue = value;
  }
  public resetHyperParameterTuningResourceConfig() {
    this._hyperParameterTuningResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningResourceConfigInput() {
    return this._hyperParameterTuningResourceConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new TrainingJobDefinitionsInputDataConfigPropertyList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: TrainingJobDefinitionsInputDataConfigProperty[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new TrainingJobDefinitionsOutputDataConfigPropertyList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: TrainingJobDefinitionsOutputDataConfigProperty[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new TrainingJobDefinitionsResourceConfigPropertyList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: TrainingJobDefinitionsResourceConfigProperty[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new TrainingJobDefinitionsStoppingConditionPropertyList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: TrainingJobDefinitionsStoppingConditionProperty[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new TrainingJobDefinitionsTuningObjectivePropertyList(this, "tuning_objective", false);
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: TrainingJobDefinitionsTuningObjectiveProperty[] | cdktn.IResolvable) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new TrainingJobDefinitionsVpcConfigPropertyList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: TrainingJobDefinitionsVpcConfigProperty[] | cdktn.IResolvable) {
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

export class TrainingJobDefinitionsPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingJobDefinitionsProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingJobDefinitionsPropertyOutputReference {
    return new TrainingJobDefinitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParentHyperParameterTuningJobsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#name AwsHyperParameterTuningJob#name}
  */
  readonly name: string;
}
export class ParentHyperParameterTuningJobsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParentHyperParameterTuningJobsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParentHyperParameterTuningJobsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ParentHyperParameterTuningJobsPropertyList extends cdktn.ComplexList {
  public internalValue? : ParentHyperParameterTuningJobsProperty[] | cdktn.IResolvable

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
  public get(index: number): ParentHyperParameterTuningJobsPropertyOutputReference {
    return new ParentHyperParameterTuningJobsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WarmStartConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#warm_start_type AwsHyperParameterTuningJob#warm_start_type}
  */
  readonly warmStartType?: string;
  /**
  * parent_hyper_parameter_tuning_jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hyper_parameter_tuning_job#parent_hyper_parameter_tuning_jobs AwsHyperParameterTuningJob#parent_hyper_parameter_tuning_jobs}
  */
  readonly parentHyperParameterTuningJobs?: ParentHyperParameterTuningJobsProperty[] | cdktn.IResolvable;
}
export class WarmStartConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WarmStartConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._warmStartType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmStartType = this._warmStartType;
    }
    if (this._parentHyperParameterTuningJobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentHyperParameterTuningJobs = this._parentHyperParameterTuningJobs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WarmStartConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._warmStartType = undefined;
      this._parentHyperParameterTuningJobs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._warmStartType = value.warmStartType;
      this._parentHyperParameterTuningJobs.internalValue = value.parentHyperParameterTuningJobs;
    }
  }

  // warm_start_type - computed: false, optional: true, required: false
  private _warmStartType?: string; 
  public get warmStartType() {
    return this.getStringAttribute('warm_start_type');
  }
  public set warmStartType(value: string) {
    this._warmStartType = value;
  }
  public resetWarmStartType() {
    this._warmStartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartTypeInput() {
    return this._warmStartType;
  }

  // parent_hyper_parameter_tuning_jobs - computed: false, optional: true, required: false
  private _parentHyperParameterTuningJobs = new ParentHyperParameterTuningJobsPropertyList(this, "parent_hyper_parameter_tuning_jobs", false);
  public get parentHyperParameterTuningJobs() {
    return this._parentHyperParameterTuningJobs;
  }
  public putParentHyperParameterTuningJobs(value: ParentHyperParameterTuningJobsProperty[] | cdktn.IResolvable) {
    this._parentHyperParameterTuningJobs.internalValue = value;
  }
  public resetParentHyperParameterTuningJobs() {
    this._parentHyperParameterTuningJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentHyperParameterTuningJobsInput() {
    return this._parentHyperParameterTuningJobs.internalValue;
  }
}

export class WarmStartConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WarmStartConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WarmStartConfigPropertyOutputReference {
    return new WarmStartConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
