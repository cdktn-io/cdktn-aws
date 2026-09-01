// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsKinesisAnalyticsApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#code AwsKinesisAnalyticsApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#description AwsKinesisAnalyticsApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#id AwsKinesisAnalyticsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#name AwsKinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#region AwsKinesisAnalyticsApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#start_application AwsKinesisAnalyticsApplication#start_application}
  */
  readonly startApplication?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#tags AwsKinesisAnalyticsApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#tags_all AwsKinesisAnalyticsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#cloudwatch_logging_options AwsKinesisAnalyticsApplication#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsProperty;
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#inputs AwsKinesisAnalyticsApplication#inputs}
  */
  readonly inputs?: AwsKinesisAnalyticsApplication.InputsProperty;
  /**
  * outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#outputs AwsKinesisAnalyticsApplication#outputs}
  */
  readonly outputs?: AwsKinesisAnalyticsApplication.OutputsProperty[] | cdktn.IResolvable;
  /**
  * reference_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#reference_data_sources AwsKinesisAnalyticsApplication#reference_data_sources}
  */
  readonly referenceDataSources?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application aws_kinesis_analytics_application}
*/
export class AwsKinesisAnalyticsApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesis_analytics_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsKinesisAnalyticsApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsKinesisAnalyticsApplication to import
  * @param importFromId The id of the existing AwsKinesisAnalyticsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsKinesisAnalyticsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesis_analytics_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application aws_kinesis_analytics_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsKinesisAnalyticsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsKinesisAnalyticsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_analytics_application',
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
    this._code = config.code;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
    this._inputs.internalValue = config.inputs;
    this._outputs.internalValue = config.outputs;
    this._referenceDataSources.internalValue = config.referenceDataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
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

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
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

  // start_application - computed: false, optional: true, required: false
  private _startApplication?: boolean | cdktn.IResolvable; 
  public get startApplication() {
    return this.getBooleanAttribute('start_application');
  }
  public set startApplication(value: boolean | cdktn.IResolvable) {
    this._startApplication = value;
  }
  public resetStartApplication() {
    this._startApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startApplicationInput() {
    return this._startApplication;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new AwsKinesisAnalyticsApplication.InputsPropertyOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: AwsKinesisAnalyticsApplication.InputsProperty) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new AwsKinesisAnalyticsApplication.OutputsPropertyList(this, "outputs", true);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: AwsKinesisAnalyticsApplication.OutputsProperty[] | cdktn.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // reference_data_sources - computed: false, optional: true, required: false
  private _referenceDataSources = new AwsKinesisAnalyticsApplication.ReferenceDataSourcesPropertyOutputReference(this, "reference_data_sources");
  public get referenceDataSources() {
    return this._referenceDataSources;
  }
  public putReferenceDataSources(value: AwsKinesisAnalyticsApplication.ReferenceDataSourcesProperty) {
    this._referenceDataSources.internalValue = value;
  }
  public resetReferenceDataSources() {
    this._referenceDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataSourcesInput() {
    return this._referenceDataSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktn.stringToTerraform(this._code),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      start_application: cdktn.booleanToTerraform(this._startApplication),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      cloudwatch_logging_options: awsKinesisAnalyticsApplicationCloudwatchLoggingOptionsPropertyToTerraform(this._cloudwatchLoggingOptions.internalValue),
      inputs: awsKinesisAnalyticsApplicationInputsPropertyToTerraform(this._inputs.internalValue),
      outputs: cdktn.listMapper(awsKinesisAnalyticsApplicationOutputsPropertyToTerraform, true)(this._outputs.internalValue),
      reference_data_sources: awsKinesisAnalyticsApplicationReferenceDataSourcesPropertyToTerraform(this._referenceDataSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code: {
        value: cdktn.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      start_application: {
        value: cdktn.booleanToHclTerraform(this._startApplication),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloudwatch_logging_options: {
        value: awsKinesisAnalyticsApplicationCloudwatchLoggingOptionsPropertyToHclTerraform(this._cloudwatchLoggingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsPropertyList",
      },
      inputs: {
        value: awsKinesisAnalyticsApplicationInputsPropertyToHclTerraform(this._inputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKinesisAnalyticsApplication.InputsPropertyList",
      },
      outputs: {
        value: cdktn.listMapperHcl(awsKinesisAnalyticsApplicationOutputsPropertyToHclTerraform, true)(this._outputs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsKinesisAnalyticsApplication.OutputsPropertyList",
      },
      reference_data_sources: {
        value: awsKinesisAnalyticsApplicationReferenceDataSourcesPropertyToHclTerraform(this._referenceDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKinesisAnalyticsApplication.ReferenceDataSourcesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsKinesisAnalyticsApplicationCloudwatchLoggingOptionsPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsPropertyOutputReference | AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_stream_arn: cdktn.stringToTerraform(struct!.logStreamArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsPropertyOutputReference | AwsKinesisAnalyticsApplication.CloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.logStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsKinesisFirehosePropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsKinesisFirehosePropertyOutputReference | AwsKinesisAnalyticsApplication.InputsKinesisFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationInputsKinesisFirehosePropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsKinesisFirehosePropertyOutputReference | AwsKinesisAnalyticsApplication.InputsKinesisFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsKinesisStreamPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsKinesisStreamPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsKinesisStreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationInputsKinesisStreamPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsKinesisStreamPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsKinesisStreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationParallelismPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ParallelismPropertyOutputReference | AwsKinesisAnalyticsApplication.ParallelismProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
  }
}


export function awsKinesisAnalyticsApplicationParallelismPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ParallelismPropertyOutputReference | AwsKinesisAnalyticsApplication.ParallelismProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsProcessingConfigurationLambdaPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsProcessingConfigurationLambdaPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsProcessingConfigurationLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationInputsProcessingConfigurationLambdaPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsProcessingConfigurationLambdaPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsProcessingConfigurationLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationProcessingConfigurationPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ProcessingConfigurationPropertyOutputReference | AwsKinesisAnalyticsApplication.ProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda: awsKinesisAnalyticsApplicationInputsProcessingConfigurationLambdaPropertyToTerraform(struct!.lambda),
  }
}


export function awsKinesisAnalyticsApplicationProcessingConfigurationPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ProcessingConfigurationPropertyOutputReference | AwsKinesisAnalyticsApplication.ProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda: {
      value: awsKinesisAnalyticsApplicationInputsProcessingConfigurationLambdaPropertyToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "InputsProcessingConfigurationLambdaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordColumnsPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping: cdktn.stringToTerraform(struct!.mapping),
    name: cdktn.stringToTerraform(struct!.name),
    sql_type: cdktn.stringToTerraform(struct!.sqlType),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordColumnsPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping: {
      value: cdktn.stringToHclTerraform(struct!.mapping),
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
    sql_type: {
      value: cdktn.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersCsvPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersCsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_column_delimiter: cdktn.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktn.stringToTerraform(struct!.recordRowDelimiter),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersCsvPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersCsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_column_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordColumnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_row_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordRowDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersJsonPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersJsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_row_path: cdktn.stringToTerraform(struct!.recordRowPath),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersJsonPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersJsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_row_path: {
      value: cdktn.stringToHclTerraform(struct!.recordRowPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvPropertyToTerraform(struct!.csv),
    json: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonPropertyToTerraform(struct!.json),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvPropertyToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaRecordFormatMappingParametersCsvPropertyList",
    },
    json: {
      value: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonPropertyToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaRecordFormatMappingParametersJsonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping_parameters: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersPropertyToTerraform(struct!.mappingParameters),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaRecordFormatPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping_parameters: {
      value: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct!.mappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaRecordFormatMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsSchemaPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_encoding: cdktn.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktn.listMapper(awsKinesisAnalyticsApplicationInputsSchemaRecordColumnsPropertyToTerraform, true)(struct!.recordColumns),
    record_format: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatPropertyToTerraform(struct!.recordFormat),
  }
}


export function awsKinesisAnalyticsApplicationInputsSchemaPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_encoding: {
      value: cdktn.stringToHclTerraform(struct!.recordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_columns: {
      value: cdktn.listMapperHcl(awsKinesisAnalyticsApplicationInputsSchemaRecordColumnsPropertyToHclTerraform, true)(struct!.recordColumns),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaRecordColumnsPropertyList",
    },
    record_format: {
      value: awsKinesisAnalyticsApplicationInputsSchemaRecordFormatPropertyToHclTerraform(struct!.recordFormat),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaRecordFormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationStartingPositionConfigurationPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.StartingPositionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    starting_position: cdktn.stringToTerraform(struct!.startingPosition),
  }
}


export function awsKinesisAnalyticsApplicationStartingPositionConfigurationPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.StartingPositionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    starting_position: {
      value: cdktn.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationInputsPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.InputsPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name_prefix: cdktn.stringToTerraform(struct!.namePrefix),
    kinesis_firehose: awsKinesisAnalyticsApplicationInputsKinesisFirehosePropertyToTerraform(struct!.kinesisFirehose),
    kinesis_stream: awsKinesisAnalyticsApplicationInputsKinesisStreamPropertyToTerraform(struct!.kinesisStream),
    parallelism: awsKinesisAnalyticsApplicationParallelismPropertyToTerraform(struct!.parallelism),
    processing_configuration: awsKinesisAnalyticsApplicationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    schema: awsKinesisAnalyticsApplicationInputsSchemaPropertyToTerraform(struct!.schema),
    starting_position_configuration: cdktn.listMapper(awsKinesisAnalyticsApplicationStartingPositionConfigurationPropertyToTerraform, true)(struct!.startingPositionConfiguration),
  }
}


export function awsKinesisAnalyticsApplicationInputsPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.InputsPropertyOutputReference | AwsKinesisAnalyticsApplication.InputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_firehose: {
      value: awsKinesisAnalyticsApplicationInputsKinesisFirehosePropertyToHclTerraform(struct!.kinesisFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "InputsKinesisFirehosePropertyList",
    },
    kinesis_stream: {
      value: awsKinesisAnalyticsApplicationInputsKinesisStreamPropertyToHclTerraform(struct!.kinesisStream),
      isBlock: true,
      type: "list",
      storageClassType: "InputsKinesisStreamPropertyList",
    },
    parallelism: {
      value: awsKinesisAnalyticsApplicationParallelismPropertyToHclTerraform(struct!.parallelism),
      isBlock: true,
      type: "list",
      storageClassType: "ParallelismPropertyList",
    },
    processing_configuration: {
      value: awsKinesisAnalyticsApplicationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessingConfigurationPropertyList",
    },
    schema: {
      value: awsKinesisAnalyticsApplicationInputsSchemaPropertyToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "InputsSchemaPropertyList",
    },
    starting_position_configuration: {
      value: cdktn.listMapperHcl(awsKinesisAnalyticsApplicationStartingPositionConfigurationPropertyToHclTerraform, true)(struct!.startingPositionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "StartingPositionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationOutputsKinesisFirehosePropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsKinesisFirehosePropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsKinesisFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationOutputsKinesisFirehosePropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsKinesisFirehosePropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsKinesisFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationOutputsKinesisStreamPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsKinesisStreamPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsKinesisStreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationOutputsKinesisStreamPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsKinesisStreamPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsKinesisStreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationOutputsLambdaPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsLambdaPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationOutputsLambdaPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsLambdaPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationOutputsSchemaPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
  }
}


export function awsKinesisAnalyticsApplicationOutputsSchemaPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.OutputsSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_format_type: {
      value: cdktn.stringToHclTerraform(struct!.recordFormatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationOutputsPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    kinesis_firehose: awsKinesisAnalyticsApplicationOutputsKinesisFirehosePropertyToTerraform(struct!.kinesisFirehose),
    kinesis_stream: awsKinesisAnalyticsApplicationOutputsKinesisStreamPropertyToTerraform(struct!.kinesisStream),
    lambda: awsKinesisAnalyticsApplicationOutputsLambdaPropertyToTerraform(struct!.lambda),
    schema: awsKinesisAnalyticsApplicationOutputsSchemaPropertyToTerraform(struct!.schema),
  }
}


export function awsKinesisAnalyticsApplicationOutputsPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.OutputsProperty | cdktn.IResolvable): any {
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
    kinesis_firehose: {
      value: awsKinesisAnalyticsApplicationOutputsKinesisFirehosePropertyToHclTerraform(struct!.kinesisFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "OutputsKinesisFirehosePropertyList",
    },
    kinesis_stream: {
      value: awsKinesisAnalyticsApplicationOutputsKinesisStreamPropertyToHclTerraform(struct!.kinesisStream),
      isBlock: true,
      type: "list",
      storageClassType: "OutputsKinesisStreamPropertyList",
    },
    lambda: {
      value: awsKinesisAnalyticsApplicationOutputsLambdaPropertyToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "OutputsLambdaPropertyList",
    },
    schema: {
      value: awsKinesisAnalyticsApplicationOutputsSchemaPropertyToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "OutputsSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationS3PropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.S3PropertyOutputReference | AwsKinesisAnalyticsApplication.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsKinesisAnalyticsApplicationS3PropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.S3PropertyOutputReference | AwsKinesisAnalyticsApplication.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping: cdktn.stringToTerraform(struct!.mapping),
    name: cdktn.stringToTerraform(struct!.name),
    sql_type: cdktn.stringToTerraform(struct!.sqlType),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping: {
      value: cdktn.stringToHclTerraform(struct!.mapping),
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
    sql_type: {
      value: cdktn.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_column_delimiter: cdktn.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktn.stringToTerraform(struct!.recordRowDelimiter),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_column_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordColumnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_row_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordRowDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_row_path: cdktn.stringToTerraform(struct!.recordRowPath),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_row_path: {
      value: cdktn.stringToHclTerraform(struct!.recordRowPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyToTerraform(struct!.csv),
    json: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyToTerraform(struct!.json),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyList",
    },
    json: {
      value: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping_parameters: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyToTerraform(struct!.mappingParameters),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaRecordFormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping_parameters: {
      value: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyToHclTerraform(struct!.mappingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_encoding: cdktn.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktn.listMapper(awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsPropertyToTerraform, true)(struct!.recordColumns),
    record_format: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatPropertyToTerraform(struct!.recordFormat),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesSchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_encoding: {
      value: cdktn.stringToHclTerraform(struct!.recordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_columns: {
      value: cdktn.listMapperHcl(awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsPropertyToHclTerraform, true)(struct!.recordColumns),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaRecordColumnsPropertyList",
    },
    record_format: {
      value: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatPropertyToHclTerraform(struct!.recordFormat),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaRecordFormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesPropertyToTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
    s3: awsKinesisAnalyticsApplicationS3PropertyToTerraform(struct!.s3),
    schema: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaPropertyToTerraform(struct!.schema),
  }
}


export function awsKinesisAnalyticsApplicationReferenceDataSourcesPropertyToHclTerraform(struct?: AwsKinesisAnalyticsApplication.ReferenceDataSourcesPropertyOutputReference | AwsKinesisAnalyticsApplication.ReferenceDataSourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: awsKinesisAnalyticsApplicationS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
    schema: {
      value: awsKinesisAnalyticsApplicationReferenceDataSourcesSchemaPropertyToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceDataSourcesSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsKinesisAnalyticsApplication {
export interface CloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#log_stream_arn AwsKinesisAnalyticsApplication#log_stream_arn}
  */
  readonly logStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class CloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamArn = this._logStreamArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logStreamArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logStreamArn = value.logStreamArn;
      this._roleArn = value.roleArn;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_stream_arn - computed: false, optional: false, required: true
  private _logStreamArn?: string; 
  public get logStreamArn() {
    return this.getStringAttribute('log_stream_arn');
  }
  public set logStreamArn(value: string) {
    this._logStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamArnInput() {
    return this._logStreamArn;
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
}
export interface InputsKinesisFirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class InputsKinesisFirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsKinesisFirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsKinesisFirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface InputsKinesisStreamProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class InputsKinesisStreamPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsKinesisStreamProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsKinesisStreamProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface ParallelismProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#count AwsKinesisAnalyticsApplication#count}
  */
  readonly count?: number;
}
export class ParallelismPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParallelismProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParallelismProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface InputsProcessingConfigurationLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class InputsProcessingConfigurationLambdaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsProcessingConfigurationLambdaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsProcessingConfigurationLambdaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface ProcessingConfigurationProperty {
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#lambda AwsKinesisAnalyticsApplication#lambda}
  */
  readonly lambda: InputsProcessingConfigurationLambdaProperty;
}
export class ProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambda.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambda.internalValue = value.lambda;
    }
  }

  // lambda - computed: false, optional: false, required: true
  private _lambda = new InputsProcessingConfigurationLambdaPropertyOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: InputsProcessingConfigurationLambdaProperty) {
    this._lambda.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }
}
export interface InputsSchemaRecordColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#mapping AwsKinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#name AwsKinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#sql_type AwsKinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}
export class InputsSchemaRecordColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputsSchemaRecordColumnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsSchemaRecordColumnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class InputsSchemaRecordColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : InputsSchemaRecordColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): InputsSchemaRecordColumnsPropertyOutputReference {
    return new InputsSchemaRecordColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputsSchemaRecordFormatMappingParametersCsvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_column_delimiter AwsKinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_row_delimiter AwsKinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}
export class InputsSchemaRecordFormatMappingParametersCsvPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsSchemaRecordFormatMappingParametersCsvProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsSchemaRecordFormatMappingParametersCsvProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface InputsSchemaRecordFormatMappingParametersJsonProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_row_path AwsKinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}
export class InputsSchemaRecordFormatMappingParametersJsonPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsSchemaRecordFormatMappingParametersJsonProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsSchemaRecordFormatMappingParametersJsonProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface InputsSchemaRecordFormatMappingParametersProperty {
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#csv AwsKinesisAnalyticsApplication#csv}
  */
  readonly csv?: InputsSchemaRecordFormatMappingParametersCsvProperty;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#json AwsKinesisAnalyticsApplication#json}
  */
  readonly json?: InputsSchemaRecordFormatMappingParametersJsonProperty;
}
export class InputsSchemaRecordFormatMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsSchemaRecordFormatMappingParametersProperty | undefined {
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

  public set internalValue(value: InputsSchemaRecordFormatMappingParametersProperty | undefined) {
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
  private _csv = new InputsSchemaRecordFormatMappingParametersCsvPropertyOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: InputsSchemaRecordFormatMappingParametersCsvProperty) {
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
  private _json = new InputsSchemaRecordFormatMappingParametersJsonPropertyOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: InputsSchemaRecordFormatMappingParametersJsonProperty) {
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
export interface InputsSchemaRecordFormatProperty {
  /**
  * mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#mapping_parameters AwsKinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: InputsSchemaRecordFormatMappingParametersProperty;
}
export class InputsSchemaRecordFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsSchemaRecordFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsSchemaRecordFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters = new InputsSchemaRecordFormatMappingParametersPropertyOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: InputsSchemaRecordFormatMappingParametersProperty) {
    this._mappingParameters.internalValue = value;
  }
  public resetMappingParameters() {
    this._mappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface InputsSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_encoding AwsKinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_columns AwsKinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: InputsSchemaRecordColumnsProperty[] | cdktn.IResolvable;
  /**
  * record_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_format AwsKinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: InputsSchemaRecordFormatProperty;
}
export class InputsSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumns = this._recordColumns?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumns.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumns.internalValue = value.recordColumns;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns = new InputsSchemaRecordColumnsPropertyList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }
  public putRecordColumns(value: InputsSchemaRecordColumnsProperty[] | cdktn.IResolvable) {
    this._recordColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new InputsSchemaRecordFormatPropertyOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: InputsSchemaRecordFormatProperty) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface StartingPositionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#starting_position AwsKinesisAnalyticsApplication#starting_position}
  */
  readonly startingPosition?: string;
}
export class StartingPositionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StartingPositionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StartingPositionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startingPosition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startingPosition = value.startingPosition;
    }
  }

  // starting_position - computed: true, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }
}

export class StartingPositionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : StartingPositionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): StartingPositionConfigurationPropertyOutputReference {
    return new StartingPositionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#name_prefix AwsKinesisAnalyticsApplication#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * kinesis_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#kinesis_firehose AwsKinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: InputsKinesisFirehoseProperty;
  /**
  * kinesis_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#kinesis_stream AwsKinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: InputsKinesisStreamProperty;
  /**
  * parallelism block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#parallelism AwsKinesisAnalyticsApplication#parallelism}
  */
  readonly parallelism?: ParallelismProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#processing_configuration AwsKinesisAnalyticsApplication#processing_configuration}
  */
  readonly processingConfiguration?: ProcessingConfigurationProperty;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#schema AwsKinesisAnalyticsApplication#schema}
  */
  readonly schema: InputsSchemaProperty;
  /**
  * starting_position_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#starting_position_configuration AwsKinesisAnalyticsApplication#starting_position_configuration}
  */
  readonly startingPositionConfiguration?: StartingPositionConfigurationProperty[] | cdktn.IResolvable;
}
export class InputsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._kinesisFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehose = this._kinesisFirehose?.internalValue;
    }
    if (this._kinesisStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStream = this._kinesisStream?.internalValue;
    }
    if (this._parallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._startingPositionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPositionConfiguration = this._startingPositionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namePrefix = undefined;
      this._kinesisFirehose.internalValue = undefined;
      this._kinesisStream.internalValue = undefined;
      this._parallelism.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._startingPositionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namePrefix = value.namePrefix;
      this._kinesisFirehose.internalValue = value.kinesisFirehose;
      this._kinesisStream.internalValue = value.kinesisStream;
      this._parallelism.internalValue = value.parallelism;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._schema.internalValue = value.schema;
      this._startingPositionConfiguration.internalValue = value.startingPositionConfiguration;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // stream_names - computed: true, optional: false, required: false
  public get streamNames() {
    return this.getListAttribute('stream_names');
  }

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose = new InputsKinesisFirehosePropertyOutputReference(this, "kinesis_firehose");
  public get kinesisFirehose() {
    return this._kinesisFirehose;
  }
  public putKinesisFirehose(value: InputsKinesisFirehoseProperty) {
    this._kinesisFirehose.internalValue = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose.internalValue;
  }

  // kinesis_stream - computed: false, optional: true, required: false
  private _kinesisStream = new InputsKinesisStreamPropertyOutputReference(this, "kinesis_stream");
  public get kinesisStream() {
    return this._kinesisStream;
  }
  public putKinesisStream(value: InputsKinesisStreamProperty) {
    this._kinesisStream.internalValue = value;
  }
  public resetKinesisStream() {
    this._kinesisStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamInput() {
    return this._kinesisStream.internalValue;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism = new ParallelismPropertyOutputReference(this, "parallelism");
  public get parallelism() {
    return this._parallelism;
  }
  public putParallelism(value: ParallelismProperty) {
    this._parallelism.internalValue = value;
  }
  public resetParallelism() {
    this._parallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new ProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: ProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new InputsSchemaPropertyOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: InputsSchemaProperty) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // starting_position_configuration - computed: false, optional: true, required: false
  private _startingPositionConfiguration = new StartingPositionConfigurationPropertyList(this, "starting_position_configuration", false);
  public get startingPositionConfiguration() {
    return this._startingPositionConfiguration;
  }
  public putStartingPositionConfiguration(value: StartingPositionConfigurationProperty[] | cdktn.IResolvable) {
    this._startingPositionConfiguration.internalValue = value;
  }
  public resetStartingPositionConfiguration() {
    this._startingPositionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionConfigurationInput() {
    return this._startingPositionConfiguration.internalValue;
  }
}
export interface OutputsKinesisFirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class OutputsKinesisFirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputsKinesisFirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsKinesisFirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface OutputsKinesisStreamProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class OutputsKinesisStreamPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputsKinesisStreamProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsKinesisStreamProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface OutputsLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#resource_arn AwsKinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class OutputsLambdaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputsLambdaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsLambdaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface OutputsSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_format_type AwsKinesisAnalyticsApplication#record_format_type}
  */
  readonly recordFormatType: string;
}
export class OutputsSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputsSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordFormatType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordFormatType = value.recordFormatType;
    }
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }
}
export interface OutputsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#name AwsKinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * kinesis_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#kinesis_firehose AwsKinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: OutputsKinesisFirehoseProperty;
  /**
  * kinesis_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#kinesis_stream AwsKinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: OutputsKinesisStreamProperty;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#lambda AwsKinesisAnalyticsApplication#lambda}
  */
  readonly lambda?: OutputsLambdaProperty;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#schema AwsKinesisAnalyticsApplication#schema}
  */
  readonly schema: OutputsSchemaProperty;
}
export class OutputsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._kinesisFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehose = this._kinesisFirehose?.internalValue;
    }
    if (this._kinesisStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStream = this._kinesisStream?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._kinesisFirehose.internalValue = undefined;
      this._kinesisStream.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._kinesisFirehose.internalValue = value.kinesisFirehose;
      this._kinesisStream.internalValue = value.kinesisStream;
      this._lambda.internalValue = value.lambda;
      this._schema.internalValue = value.schema;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose = new OutputsKinesisFirehosePropertyOutputReference(this, "kinesis_firehose");
  public get kinesisFirehose() {
    return this._kinesisFirehose;
  }
  public putKinesisFirehose(value: OutputsKinesisFirehoseProperty) {
    this._kinesisFirehose.internalValue = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose.internalValue;
  }

  // kinesis_stream - computed: false, optional: true, required: false
  private _kinesisStream = new OutputsKinesisStreamPropertyOutputReference(this, "kinesis_stream");
  public get kinesisStream() {
    return this._kinesisStream;
  }
  public putKinesisStream(value: OutputsKinesisStreamProperty) {
    this._kinesisStream.internalValue = value;
  }
  public resetKinesisStream() {
    this._kinesisStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamInput() {
    return this._kinesisStream.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new OutputsLambdaPropertyOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: OutputsLambdaProperty) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new OutputsSchemaPropertyOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: OutputsSchemaProperty) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class OutputsPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputsProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputsPropertyOutputReference {
    return new OutputsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#bucket_arn AwsKinesisAnalyticsApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#file_key AwsKinesisAnalyticsApplication#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#role_arn AwsKinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
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
}
export interface ReferenceDataSourcesSchemaRecordColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#mapping AwsKinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#name AwsKinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#sql_type AwsKinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}
export class ReferenceDataSourcesSchemaRecordColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReferenceDataSourcesSchemaRecordColumnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesSchemaRecordColumnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class ReferenceDataSourcesSchemaRecordColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : ReferenceDataSourcesSchemaRecordColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): ReferenceDataSourcesSchemaRecordColumnsPropertyOutputReference {
    return new ReferenceDataSourcesSchemaRecordColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_column_delimiter AwsKinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_row_delimiter AwsKinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}
export class ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_row_path AwsKinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}
export class ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty {
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#csv AwsKinesisAnalyticsApplication#csv}
  */
  readonly csv?: ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#json AwsKinesisAnalyticsApplication#json}
  */
  readonly json?: ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty;
}
export class ReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty | undefined {
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

  public set internalValue(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty | undefined) {
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
  private _csv = new ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvPropertyOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersCsvProperty) {
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
  private _json = new ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonPropertyOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersJsonProperty) {
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
export interface ReferenceDataSourcesSchemaRecordFormatProperty {
  /**
  * mapping_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#mapping_parameters AwsKinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty;
}
export class ReferenceDataSourcesSchemaRecordFormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesSchemaRecordFormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesSchemaRecordFormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters = new ReferenceDataSourcesSchemaRecordFormatMappingParametersPropertyOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: ReferenceDataSourcesSchemaRecordFormatMappingParametersProperty) {
    this._mappingParameters.internalValue = value;
  }
  public resetMappingParameters() {
    this._mappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface ReferenceDataSourcesSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_encoding AwsKinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_columns AwsKinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: ReferenceDataSourcesSchemaRecordColumnsProperty[] | cdktn.IResolvable;
  /**
  * record_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#record_format AwsKinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: ReferenceDataSourcesSchemaRecordFormatProperty;
}
export class ReferenceDataSourcesSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesSchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumns = this._recordColumns?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesSchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumns.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumns.internalValue = value.recordColumns;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns = new ReferenceDataSourcesSchemaRecordColumnsPropertyList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }
  public putRecordColumns(value: ReferenceDataSourcesSchemaRecordColumnsProperty[] | cdktn.IResolvable) {
    this._recordColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new ReferenceDataSourcesSchemaRecordFormatPropertyOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: ReferenceDataSourcesSchemaRecordFormatProperty) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface ReferenceDataSourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#table_name AwsKinesisAnalyticsApplication#table_name}
  */
  readonly tableName: string;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#s3 AwsKinesisAnalyticsApplication#s3}
  */
  readonly s3: S3Property;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_analytics_application#schema AwsKinesisAnalyticsApplication#schema}
  */
  readonly schema: ReferenceDataSourcesSchemaProperty;
}
export class ReferenceDataSourcesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferenceDataSourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceDataSourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
      this._s3.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
      this._s3.internalValue = value.s3;
      this._schema.internalValue = value.schema;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new ReferenceDataSourcesSchemaPropertyOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ReferenceDataSourcesSchemaProperty) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
}
