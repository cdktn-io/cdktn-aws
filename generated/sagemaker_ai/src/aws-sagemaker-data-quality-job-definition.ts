// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDataQualityJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#id TfDataQualityJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#name TfDataQualityJobDefinition#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#region TfDataQualityJobDefinition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#role_arn TfDataQualityJobDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#tags TfDataQualityJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#tags_all TfDataQualityJobDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * data_quality_app_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification TfDataQualityJobDefinition#data_quality_app_specification}
  */
  readonly dataQualityAppSpecification: TfDataQualityJobDefinition.DataQualityAppSpecificationProperty;
  /**
  * data_quality_baseline_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config TfDataQualityJobDefinition#data_quality_baseline_config}
  */
  readonly dataQualityBaselineConfig?: TfDataQualityJobDefinition.DataQualityBaselineConfigProperty;
  /**
  * data_quality_job_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input TfDataQualityJobDefinition#data_quality_job_input}
  */
  readonly dataQualityJobInput: TfDataQualityJobDefinition.DataQualityJobInputProperty;
  /**
  * data_quality_job_output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config TfDataQualityJobDefinition#data_quality_job_output_config}
  */
  readonly dataQualityJobOutputConfig: TfDataQualityJobDefinition.DataQualityJobOutputConfigProperty;
  /**
  * job_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#job_resources TfDataQualityJobDefinition#job_resources}
  */
  readonly jobResources: TfDataQualityJobDefinition.JobResourcesProperty;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#network_config TfDataQualityJobDefinition#network_config}
  */
  readonly networkConfig?: TfDataQualityJobDefinition.NetworkConfigProperty;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition TfDataQualityJobDefinition#stopping_condition}
  */
  readonly stoppingCondition?: TfDataQualityJobDefinition.StoppingConditionProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition aws_sagemaker_data_quality_job_definition}
*/
export class TfDataQualityJobDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_data_quality_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDataQualityJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDataQualityJobDefinition to import
  * @param importFromId The id of the existing TfDataQualityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDataQualityJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_data_quality_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition aws_sagemaker_data_quality_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDataQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TfDataQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_data_quality_job_definition',
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
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._dataQualityAppSpecification.internalValue = config.dataQualityAppSpecification;
    this._dataQualityBaselineConfig.internalValue = config.dataQualityBaselineConfig;
    this._dataQualityJobInput.internalValue = config.dataQualityJobInput;
    this._dataQualityJobOutputConfig.internalValue = config.dataQualityJobOutputConfig;
    this._jobResources.internalValue = config.jobResources;
    this._networkConfig.internalValue = config.networkConfig;
    this._stoppingCondition.internalValue = config.stoppingCondition;
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

  // data_quality_app_specification - computed: false, optional: false, required: true
  private _dataQualityAppSpecification = new TfDataQualityJobDefinition.DataQualityAppSpecificationPropertyOutputReference(this, "data_quality_app_specification");
  public get dataQualityAppSpecification() {
    return this._dataQualityAppSpecification;
  }
  public putDataQualityAppSpecification(value: TfDataQualityJobDefinition.DataQualityAppSpecificationProperty) {
    this._dataQualityAppSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityAppSpecificationInput() {
    return this._dataQualityAppSpecification.internalValue;
  }

  // data_quality_baseline_config - computed: false, optional: true, required: false
  private _dataQualityBaselineConfig = new TfDataQualityJobDefinition.DataQualityBaselineConfigPropertyOutputReference(this, "data_quality_baseline_config");
  public get dataQualityBaselineConfig() {
    return this._dataQualityBaselineConfig;
  }
  public putDataQualityBaselineConfig(value: TfDataQualityJobDefinition.DataQualityBaselineConfigProperty) {
    this._dataQualityBaselineConfig.internalValue = value;
  }
  public resetDataQualityBaselineConfig() {
    this._dataQualityBaselineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityBaselineConfigInput() {
    return this._dataQualityBaselineConfig.internalValue;
  }

  // data_quality_job_input - computed: false, optional: false, required: true
  private _dataQualityJobInput = new TfDataQualityJobDefinition.DataQualityJobInputPropertyOutputReference(this, "data_quality_job_input");
  public get dataQualityJobInput() {
    return this._dataQualityJobInput;
  }
  public putDataQualityJobInput(value: TfDataQualityJobDefinition.DataQualityJobInputProperty) {
    this._dataQualityJobInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobInputInput() {
    return this._dataQualityJobInput.internalValue;
  }

  // data_quality_job_output_config - computed: false, optional: false, required: true
  private _dataQualityJobOutputConfig = new TfDataQualityJobDefinition.DataQualityJobOutputConfigPropertyOutputReference(this, "data_quality_job_output_config");
  public get dataQualityJobOutputConfig() {
    return this._dataQualityJobOutputConfig;
  }
  public putDataQualityJobOutputConfig(value: TfDataQualityJobDefinition.DataQualityJobOutputConfigProperty) {
    this._dataQualityJobOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobOutputConfigInput() {
    return this._dataQualityJobOutputConfig.internalValue;
  }

  // job_resources - computed: false, optional: false, required: true
  private _jobResources = new TfDataQualityJobDefinition.JobResourcesPropertyOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }
  public putJobResources(value: TfDataQualityJobDefinition.JobResourcesProperty) {
    this._jobResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new TfDataQualityJobDefinition.NetworkConfigPropertyOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: TfDataQualityJobDefinition.NetworkConfigProperty) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new TfDataQualityJobDefinition.StoppingConditionPropertyOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: TfDataQualityJobDefinition.StoppingConditionProperty) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      data_quality_app_specification: tfDataQualityJobDefinitionDataQualityAppSpecificationPropertyToTerraform(this._dataQualityAppSpecification.internalValue),
      data_quality_baseline_config: tfDataQualityJobDefinitionDataQualityBaselineConfigPropertyToTerraform(this._dataQualityBaselineConfig.internalValue),
      data_quality_job_input: tfDataQualityJobDefinitionDataQualityJobInputPropertyToTerraform(this._dataQualityJobInput.internalValue),
      data_quality_job_output_config: tfDataQualityJobDefinitionDataQualityJobOutputConfigPropertyToTerraform(this._dataQualityJobOutputConfig.internalValue),
      job_resources: tfDataQualityJobDefinitionJobResourcesPropertyToTerraform(this._jobResources.internalValue),
      network_config: tfDataQualityJobDefinitionNetworkConfigPropertyToTerraform(this._networkConfig.internalValue),
      stopping_condition: tfDataQualityJobDefinitionStoppingConditionPropertyToTerraform(this._stoppingCondition.internalValue),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      data_quality_app_specification: {
        value: tfDataQualityJobDefinitionDataQualityAppSpecificationPropertyToHclTerraform(this._dataQualityAppSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.DataQualityAppSpecificationPropertyList",
      },
      data_quality_baseline_config: {
        value: tfDataQualityJobDefinitionDataQualityBaselineConfigPropertyToHclTerraform(this._dataQualityBaselineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.DataQualityBaselineConfigPropertyList",
      },
      data_quality_job_input: {
        value: tfDataQualityJobDefinitionDataQualityJobInputPropertyToHclTerraform(this._dataQualityJobInput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.DataQualityJobInputPropertyList",
      },
      data_quality_job_output_config: {
        value: tfDataQualityJobDefinitionDataQualityJobOutputConfigPropertyToHclTerraform(this._dataQualityJobOutputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.DataQualityJobOutputConfigPropertyList",
      },
      job_resources: {
        value: tfDataQualityJobDefinitionJobResourcesPropertyToHclTerraform(this._jobResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.JobResourcesPropertyList",
      },
      network_config: {
        value: tfDataQualityJobDefinitionNetworkConfigPropertyToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.NetworkConfigPropertyList",
      },
      stopping_condition: {
        value: tfDataQualityJobDefinitionStoppingConditionPropertyToHclTerraform(this._stoppingCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataQualityJobDefinition.StoppingConditionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDataQualityJobDefinitionDataQualityAppSpecificationPropertyToTerraform(struct?: TfDataQualityJobDefinition.DataQualityAppSpecificationPropertyOutputReference | TfDataQualityJobDefinition.DataQualityAppSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktn.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktn.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}


export function tfDataQualityJobDefinitionDataQualityAppSpecificationPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.DataQualityAppSpecificationPropertyOutputReference | TfDataQualityJobDefinition.DataQualityAppSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_analytics_processor_source_uri: {
      value: cdktn.stringToHclTerraform(struct!.postAnalyticsProcessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_preprocessor_source_uri: {
      value: cdktn.stringToHclTerraform(struct!.recordPreprocessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionConstraintsResourcePropertyToTerraform(struct?: TfDataQualityJobDefinition.ConstraintsResourcePropertyOutputReference | TfDataQualityJobDefinition.ConstraintsResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function tfDataQualityJobDefinitionConstraintsResourcePropertyToHclTerraform(struct?: TfDataQualityJobDefinition.ConstraintsResourcePropertyOutputReference | TfDataQualityJobDefinition.ConstraintsResourceProperty): any {
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


export function tfDataQualityJobDefinitionStatisticsResourcePropertyToTerraform(struct?: TfDataQualityJobDefinition.StatisticsResourcePropertyOutputReference | TfDataQualityJobDefinition.StatisticsResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function tfDataQualityJobDefinitionStatisticsResourcePropertyToHclTerraform(struct?: TfDataQualityJobDefinition.StatisticsResourcePropertyOutputReference | TfDataQualityJobDefinition.StatisticsResourceProperty): any {
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


export function tfDataQualityJobDefinitionDataQualityBaselineConfigPropertyToTerraform(struct?: TfDataQualityJobDefinition.DataQualityBaselineConfigPropertyOutputReference | TfDataQualityJobDefinition.DataQualityBaselineConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraints_resource: tfDataQualityJobDefinitionConstraintsResourcePropertyToTerraform(struct!.constraintsResource),
    statistics_resource: tfDataQualityJobDefinitionStatisticsResourcePropertyToTerraform(struct!.statisticsResource),
  }
}


export function tfDataQualityJobDefinitionDataQualityBaselineConfigPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.DataQualityBaselineConfigPropertyOutputReference | TfDataQualityJobDefinition.DataQualityBaselineConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraints_resource: {
      value: tfDataQualityJobDefinitionConstraintsResourcePropertyToHclTerraform(struct!.constraintsResource),
      isBlock: true,
      type: "list",
      storageClassType: "ConstraintsResourcePropertyList",
    },
    statistics_resource: {
      value: tfDataQualityJobDefinitionStatisticsResourcePropertyToHclTerraform(struct!.statisticsResource),
      isBlock: true,
      type: "list",
      storageClassType: "StatisticsResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionCsvPropertyToTerraform(struct?: TfDataQualityJobDefinition.CsvPropertyOutputReference | TfDataQualityJobDefinition.CsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.booleanToTerraform(struct!.header),
  }
}


export function tfDataQualityJobDefinitionCsvPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.CsvPropertyOutputReference | TfDataQualityJobDefinition.CsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.booleanToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionJsonPropertyToTerraform(struct?: TfDataQualityJobDefinition.JsonPropertyOutputReference | TfDataQualityJobDefinition.JsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    line: cdktn.booleanToTerraform(struct!.line),
  }
}


export function tfDataQualityJobDefinitionJsonPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.JsonPropertyOutputReference | TfDataQualityJobDefinition.JsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    line: {
      value: cdktn.booleanToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionDatasetFormatPropertyToTerraform(struct?: TfDataQualityJobDefinition.DatasetFormatPropertyOutputReference | TfDataQualityJobDefinition.DatasetFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: tfDataQualityJobDefinitionCsvPropertyToTerraform(struct!.csv),
    json: tfDataQualityJobDefinitionJsonPropertyToTerraform(struct!.json),
  }
}


export function tfDataQualityJobDefinitionDatasetFormatPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.DatasetFormatPropertyOutputReference | TfDataQualityJobDefinition.DatasetFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: tfDataQualityJobDefinitionCsvPropertyToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "CsvPropertyList",
    },
    json: {
      value: tfDataQualityJobDefinitionJsonPropertyToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "JsonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionBatchTransformInputPropertyToTerraform(struct?: TfDataQualityJobDefinition.BatchTransformInputPropertyOutputReference | TfDataQualityJobDefinition.BatchTransformInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_captured_destination_s3_uri: cdktn.stringToTerraform(struct!.dataCapturedDestinationS3Uri),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    dataset_format: tfDataQualityJobDefinitionDatasetFormatPropertyToTerraform(struct!.datasetFormat),
  }
}


export function tfDataQualityJobDefinitionBatchTransformInputPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.BatchTransformInputPropertyOutputReference | TfDataQualityJobDefinition.BatchTransformInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_captured_destination_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.dataCapturedDestinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3InputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_format: {
      value: tfDataQualityJobDefinitionDatasetFormatPropertyToHclTerraform(struct!.datasetFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetFormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionEndpointInputPropertyToTerraform(struct?: TfDataQualityJobDefinition.EndpointInputPropertyOutputReference | TfDataQualityJobDefinition.EndpointInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_name: cdktn.stringToTerraform(struct!.endpointName),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
  }
}


export function tfDataQualityJobDefinitionEndpointInputPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.EndpointInputPropertyOutputReference | TfDataQualityJobDefinition.EndpointInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_name: {
      value: cdktn.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3InputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionDataQualityJobInputPropertyToTerraform(struct?: TfDataQualityJobDefinition.DataQualityJobInputPropertyOutputReference | TfDataQualityJobDefinition.DataQualityJobInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_transform_input: tfDataQualityJobDefinitionBatchTransformInputPropertyToTerraform(struct!.batchTransformInput),
    endpoint_input: tfDataQualityJobDefinitionEndpointInputPropertyToTerraform(struct!.endpointInput),
  }
}


export function tfDataQualityJobDefinitionDataQualityJobInputPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.DataQualityJobInputPropertyOutputReference | TfDataQualityJobDefinition.DataQualityJobInputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_transform_input: {
      value: tfDataQualityJobDefinitionBatchTransformInputPropertyToHclTerraform(struct!.batchTransformInput),
      isBlock: true,
      type: "list",
      storageClassType: "BatchTransformInputPropertyList",
    },
    endpoint_input: {
      value: tfDataQualityJobDefinitionEndpointInputPropertyToHclTerraform(struct!.endpointInput),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointInputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionS3OutputPropertyToTerraform(struct?: TfDataQualityJobDefinition.S3OutputPropertyOutputReference | TfDataQualityJobDefinition.S3OutputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktn.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function tfDataQualityJobDefinitionS3OutputPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.S3OutputPropertyOutputReference | TfDataQualityJobDefinition.S3OutputProperty): any {
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
    s3_upload_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3UploadMode),
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


export function tfDataQualityJobDefinitionMonitoringOutputsPropertyToTerraform(struct?: TfDataQualityJobDefinition.MonitoringOutputsPropertyOutputReference | TfDataQualityJobDefinition.MonitoringOutputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_output: tfDataQualityJobDefinitionS3OutputPropertyToTerraform(struct!.s3Output),
  }
}


export function tfDataQualityJobDefinitionMonitoringOutputsPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.MonitoringOutputsPropertyOutputReference | TfDataQualityJobDefinition.MonitoringOutputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_output: {
      value: tfDataQualityJobDefinitionS3OutputPropertyToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "list",
      storageClassType: "S3OutputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionDataQualityJobOutputConfigPropertyToTerraform(struct?: TfDataQualityJobDefinition.DataQualityJobOutputConfigPropertyOutputReference | TfDataQualityJobDefinition.DataQualityJobOutputConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: tfDataQualityJobDefinitionMonitoringOutputsPropertyToTerraform(struct!.monitoringOutputs),
  }
}


export function tfDataQualityJobDefinitionDataQualityJobOutputConfigPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.DataQualityJobOutputConfigPropertyOutputReference | TfDataQualityJobDefinition.DataQualityJobOutputConfigProperty): any {
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
    monitoring_outputs: {
      value: tfDataQualityJobDefinitionMonitoringOutputsPropertyToHclTerraform(struct!.monitoringOutputs),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringOutputsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionClusterConfigPropertyToTerraform(struct?: TfDataQualityJobDefinition.ClusterConfigPropertyOutputReference | TfDataQualityJobDefinition.ClusterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function tfDataQualityJobDefinitionClusterConfigPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.ClusterConfigPropertyOutputReference | TfDataQualityJobDefinition.ClusterConfigProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionJobResourcesPropertyToTerraform(struct?: TfDataQualityJobDefinition.JobResourcesPropertyOutputReference | TfDataQualityJobDefinition.JobResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_config: tfDataQualityJobDefinitionClusterConfigPropertyToTerraform(struct!.clusterConfig),
  }
}


export function tfDataQualityJobDefinitionJobResourcesPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.JobResourcesPropertyOutputReference | TfDataQualityJobDefinition.JobResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_config: {
      value: tfDataQualityJobDefinitionClusterConfigPropertyToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionVpcConfigPropertyToTerraform(struct?: TfDataQualityJobDefinition.VpcConfigPropertyOutputReference | TfDataQualityJobDefinition.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function tfDataQualityJobDefinitionVpcConfigPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.VpcConfigPropertyOutputReference | TfDataQualityJobDefinition.VpcConfigProperty): any {
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


export function tfDataQualityJobDefinitionNetworkConfigPropertyToTerraform(struct?: TfDataQualityJobDefinition.NetworkConfigPropertyOutputReference | TfDataQualityJobDefinition.NetworkConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: tfDataQualityJobDefinitionVpcConfigPropertyToTerraform(struct!.vpcConfig),
  }
}


export function tfDataQualityJobDefinitionNetworkConfigPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.NetworkConfigPropertyOutputReference | TfDataQualityJobDefinition.NetworkConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
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
    vpc_config: {
      value: tfDataQualityJobDefinitionVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDataQualityJobDefinitionStoppingConditionPropertyToTerraform(struct?: TfDataQualityJobDefinition.StoppingConditionPropertyOutputReference | TfDataQualityJobDefinition.StoppingConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function tfDataQualityJobDefinitionStoppingConditionPropertyToHclTerraform(struct?: TfDataQualityJobDefinition.StoppingConditionPropertyOutputReference | TfDataQualityJobDefinition.StoppingConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export namespace TfDataQualityJobDefinition {
export interface DataQualityAppSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#environment TfDataQualityJobDefinition#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#image_uri TfDataQualityJobDefinition#image_uri}
  */
  readonly imageUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri TfDataQualityJobDefinition#post_analytics_processor_source_uri}
  */
  readonly postAnalyticsProcessorSourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri TfDataQualityJobDefinition#record_preprocessor_source_uri}
  */
  readonly recordPreprocessorSourceUri?: string;
}
export class DataQualityAppSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataQualityAppSpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._postAnalyticsProcessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAnalyticsProcessorSourceUri = this._postAnalyticsProcessorSourceUri;
    }
    if (this._recordPreprocessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordPreprocessorSourceUri = this._recordPreprocessorSourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataQualityAppSpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._imageUri = undefined;
      this._postAnalyticsProcessorSourceUri = undefined;
      this._recordPreprocessorSourceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._imageUri = value.imageUri;
      this._postAnalyticsProcessorSourceUri = value.postAnalyticsProcessorSourceUri;
      this._recordPreprocessorSourceUri = value.recordPreprocessorSourceUri;
    }
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

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // post_analytics_processor_source_uri - computed: false, optional: true, required: false
  private _postAnalyticsProcessorSourceUri?: string; 
  public get postAnalyticsProcessorSourceUri() {
    return this.getStringAttribute('post_analytics_processor_source_uri');
  }
  public set postAnalyticsProcessorSourceUri(value: string) {
    this._postAnalyticsProcessorSourceUri = value;
  }
  public resetPostAnalyticsProcessorSourceUri() {
    this._postAnalyticsProcessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAnalyticsProcessorSourceUriInput() {
    return this._postAnalyticsProcessorSourceUri;
  }

  // record_preprocessor_source_uri - computed: false, optional: true, required: false
  private _recordPreprocessorSourceUri?: string; 
  public get recordPreprocessorSourceUri() {
    return this.getStringAttribute('record_preprocessor_source_uri');
  }
  public set recordPreprocessorSourceUri(value: string) {
    this._recordPreprocessorSourceUri = value;
  }
  public resetRecordPreprocessorSourceUri() {
    this._recordPreprocessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPreprocessorSourceUriInput() {
    return this._recordPreprocessorSourceUri;
  }
}
export interface ConstraintsResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri TfDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}
export class ConstraintsResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConstraintsResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConstraintsResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface StatisticsResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri TfDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}
export class StatisticsResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatisticsResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatisticsResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataQualityBaselineConfigProperty {
  /**
  * constraints_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource TfDataQualityJobDefinition#constraints_resource}
  */
  readonly constraintsResource?: ConstraintsResourceProperty;
  /**
  * statistics_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource TfDataQualityJobDefinition#statistics_resource}
  */
  readonly statisticsResource?: StatisticsResourceProperty;
}
export class DataQualityBaselineConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataQualityBaselineConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraintsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
    }
    if (this._statisticsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsResource = this._statisticsResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataQualityBaselineConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constraintsResource.internalValue = undefined;
      this._statisticsResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constraintsResource.internalValue = value.constraintsResource;
      this._statisticsResource.internalValue = value.statisticsResource;
    }
  }

  // constraints_resource - computed: false, optional: true, required: false
  private _constraintsResource = new ConstraintsResourcePropertyOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
  public putConstraintsResource(value: ConstraintsResourceProperty) {
    this._constraintsResource.internalValue = value;
  }
  public resetConstraintsResource() {
    this._constraintsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsResourceInput() {
    return this._constraintsResource.internalValue;
  }

  // statistics_resource - computed: false, optional: true, required: false
  private _statisticsResource = new StatisticsResourcePropertyOutputReference(this, "statistics_resource");
  public get statisticsResource() {
    return this._statisticsResource;
  }
  public putStatisticsResource(value: StatisticsResourceProperty) {
    this._statisticsResource.internalValue = value;
  }
  public resetStatisticsResource() {
    this._statisticsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsResourceInput() {
    return this._statisticsResource.internalValue;
  }
}
export interface CsvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#header TfDataQualityJobDefinition#header}
  */
  readonly header?: boolean | cdktn.IResolvable;
}
export class CsvPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsvProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsvProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: boolean | cdktn.IResolvable; 
  public get header() {
    return this.getBooleanAttribute('header');
  }
  public set header(value: boolean | cdktn.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}
export interface JsonProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#line TfDataQualityJobDefinition#line}
  */
  readonly line?: boolean | cdktn.IResolvable;
}
export class JsonPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JsonProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._line = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._line = value.line;
    }
  }

  // line - computed: false, optional: true, required: false
  private _line?: boolean | cdktn.IResolvable; 
  public get line() {
    return this.getBooleanAttribute('line');
  }
  public set line(value: boolean | cdktn.IResolvable) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }
}
export interface DatasetFormatProperty {
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#csv TfDataQualityJobDefinition#csv}
  */
  readonly csv?: CsvProperty;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#json TfDataQualityJobDefinition#json}
  */
  readonly json?: JsonProperty;
}
export class DatasetFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
    }
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new CsvPropertyOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: CsvProperty) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new JsonPropertyOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: JsonProperty) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface BatchTransformInputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri TfDataQualityJobDefinition#data_captured_destination_s3_uri}
  */
  readonly dataCapturedDestinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#local_path TfDataQualityJobDefinition#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type TfDataQualityJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode TfDataQualityJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * dataset_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format TfDataQualityJobDefinition#dataset_format}
  */
  readonly datasetFormat: DatasetFormatProperty;
}
export class BatchTransformInputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchTransformInputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCapturedDestinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCapturedDestinationS3Uri = this._dataCapturedDestinationS3Uri;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    if (this._datasetFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetFormat = this._datasetFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchTransformInputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCapturedDestinationS3Uri = undefined;
      this._localPath = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
      this._datasetFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCapturedDestinationS3Uri = value.dataCapturedDestinationS3Uri;
      this._localPath = value.localPath;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
      this._datasetFormat.internalValue = value.datasetFormat;
    }
  }

  // data_captured_destination_s3_uri - computed: false, optional: false, required: true
  private _dataCapturedDestinationS3Uri?: string; 
  public get dataCapturedDestinationS3Uri() {
    return this.getStringAttribute('data_captured_destination_s3_uri');
  }
  public set dataCapturedDestinationS3Uri(value: string) {
    this._dataCapturedDestinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCapturedDestinationS3UriInput() {
    return this._dataCapturedDestinationS3Uri;
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

  // s3_data_distribution_type - computed: true, optional: true, required: false
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

  // s3_input_mode - computed: true, optional: true, required: false
  private _s3InputMode?: string; 
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
  public set s3InputMode(value: string) {
    this._s3InputMode = value;
  }
  public resetS3InputMode() {
    this._s3InputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputModeInput() {
    return this._s3InputMode;
  }

  // dataset_format - computed: false, optional: false, required: true
  private _datasetFormat = new DatasetFormatPropertyOutputReference(this, "dataset_format");
  public get datasetFormat() {
    return this._datasetFormat;
  }
  public putDatasetFormat(value: DatasetFormatProperty) {
    this._datasetFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetFormatInput() {
    return this._datasetFormat.internalValue;
  }
}
export interface EndpointInputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name TfDataQualityJobDefinition#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#local_path TfDataQualityJobDefinition#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type TfDataQualityJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode TfDataQualityJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
}
export class EndpointInputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointInputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointInputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointName = undefined;
      this._localPath = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointName = value.endpointName;
      this._localPath = value.localPath;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
    }
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
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

  // s3_data_distribution_type - computed: true, optional: true, required: false
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

  // s3_input_mode - computed: true, optional: true, required: false
  private _s3InputMode?: string; 
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
  public set s3InputMode(value: string) {
    this._s3InputMode = value;
  }
  public resetS3InputMode() {
    this._s3InputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputModeInput() {
    return this._s3InputMode;
  }
}
export interface DataQualityJobInputProperty {
  /**
  * batch_transform_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input TfDataQualityJobDefinition#batch_transform_input}
  */
  readonly batchTransformInput?: BatchTransformInputProperty;
  /**
  * endpoint_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input TfDataQualityJobDefinition#endpoint_input}
  */
  readonly endpointInput?: EndpointInputProperty;
}
export class DataQualityJobInputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataQualityJobInputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchTransformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchTransformInput = this._batchTransformInput?.internalValue;
    }
    if (this._endpointInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointInput = this._endpointInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataQualityJobInputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchTransformInput.internalValue = undefined;
      this._endpointInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchTransformInput.internalValue = value.batchTransformInput;
      this._endpointInput.internalValue = value.endpointInput;
    }
  }

  // batch_transform_input - computed: false, optional: true, required: false
  private _batchTransformInput = new BatchTransformInputPropertyOutputReference(this, "batch_transform_input");
  public get batchTransformInput() {
    return this._batchTransformInput;
  }
  public putBatchTransformInput(value: BatchTransformInputProperty) {
    this._batchTransformInput.internalValue = value;
  }
  public resetBatchTransformInput() {
    this._batchTransformInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTransformInputInput() {
    return this._batchTransformInput.internalValue;
  }

  // endpoint_input - computed: false, optional: true, required: false
  private _endpointInput = new EndpointInputPropertyOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }
  public putEndpointInput(value: EndpointInputProperty) {
    this._endpointInput.internalValue = value;
  }
  public resetEndpointInput() {
    this._endpointInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInputInput() {
    return this._endpointInput.internalValue;
  }
}
export interface S3OutputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#local_path TfDataQualityJobDefinition#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode TfDataQualityJobDefinition#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri TfDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}
export class S3OutputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3OutputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3UploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UploadMode = this._s3UploadMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localPath = undefined;
      this._s3UploadMode = undefined;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localPath = value.localPath;
      this._s3UploadMode = value.s3UploadMode;
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

  // s3_upload_mode - computed: true, optional: true, required: false
  private _s3UploadMode?: string; 
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }
  public set s3UploadMode(value: string) {
    this._s3UploadMode = value;
  }
  public resetS3UploadMode() {
    this._s3UploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UploadModeInput() {
    return this._s3UploadMode;
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
export interface MonitoringOutputsProperty {
  /**
  * s3_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#s3_output TfDataQualityJobDefinition#s3_output}
  */
  readonly s3Output: S3OutputProperty;
}
export class MonitoringOutputsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringOutputsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringOutputsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Output.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // s3_output - computed: false, optional: false, required: true
  private _s3Output = new S3OutputPropertyOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: S3OutputProperty) {
    this._s3Output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputInput() {
    return this._s3Output.internalValue;
  }
}
export interface DataQualityJobOutputConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id TfDataQualityJobDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * monitoring_outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs TfDataQualityJobDefinition#monitoring_outputs}
  */
  readonly monitoringOutputs: MonitoringOutputsProperty;
}
export class DataQualityJobOutputConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataQualityJobOutputConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._monitoringOutputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataQualityJobOutputConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._monitoringOutputs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._monitoringOutputs.internalValue = value.monitoringOutputs;
    }
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

  // monitoring_outputs - computed: false, optional: false, required: true
  private _monitoringOutputs = new MonitoringOutputsPropertyOutputReference(this, "monitoring_outputs");
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
  public putMonitoringOutputs(value: MonitoringOutputsProperty) {
    this._monitoringOutputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputsInput() {
    return this._monitoringOutputs.internalValue;
  }
}
export interface ClusterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#instance_count TfDataQualityJobDefinition#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#instance_type TfDataQualityJobDefinition#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id TfDataQualityJobDefinition#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb TfDataQualityJobDefinition#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}
export class ClusterConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterConfigProperty | undefined {
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
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
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

  // volume_size_in_gb - computed: false, optional: false, required: true
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface JobResourcesProperty {
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config TfDataQualityJobDefinition#cluster_config}
  */
  readonly clusterConfig: ClusterConfigProperty;
}
export class JobResourcesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobResourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobResourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterConfig.internalValue = value.clusterConfig;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new ClusterConfigPropertyOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: ClusterConfigProperty) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids TfDataQualityJobDefinition#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#subnets TfDataQualityJobDefinition#subnets}
  */
  readonly subnets: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigProperty | undefined {
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

  public set internalValue(value: VpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface NetworkConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption TfDataQualityJobDefinition#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation TfDataQualityJobDefinition#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config TfDataQualityJobDefinition#vpc_config}
  */
  readonly vpcConfig?: VpcConfigProperty;
}
export class NetworkConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableNetworkIsolation = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // enable_inter_container_traffic_encryption - computed: false, optional: true, required: false
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

  // enable_network_isolation - computed: false, optional: true, required: false
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

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: VpcConfigProperty) {
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
export interface StoppingConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds TfDataQualityJobDefinition#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}
export class StoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StoppingConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoppingConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRuntimeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
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
}
