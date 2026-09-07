// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMediaInsightsPipelineConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#name AwsMediaInsightsPipelineConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#region AwsMediaInsightsPipelineConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#resource_access_role_arn AwsMediaInsightsPipelineConfiguration#resource_access_role_arn}
  */
  readonly resourceAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags AwsMediaInsightsPipelineConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags_all AwsMediaInsightsPipelineConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * elements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#elements AwsMediaInsightsPipelineConfiguration#elements}
  */
  readonly elements: AwsMediaInsightsPipelineConfiguration.ElementsProperty[] | cdktn.IResolvable;
  /**
  * real_time_alert_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#real_time_alert_configuration AwsMediaInsightsPipelineConfiguration#real_time_alert_configuration}
  */
  readonly realTimeAlertConfiguration?: AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#timeouts AwsMediaInsightsPipelineConfiguration#timeouts}
  */
  readonly timeouts?: AwsMediaInsightsPipelineConfiguration.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration}
*/
export class AwsMediaInsightsPipelineConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chimesdkmediapipelines_media_insights_pipeline_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMediaInsightsPipelineConfiguration to import
  * @param importFromId The id of the existing AwsMediaInsightsPipelineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMediaInsightsPipelineConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_chimesdkmediapipelines_media_insights_pipeline_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMediaInsightsPipelineConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMediaInsightsPipelineConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chimesdkmediapipelines_media_insights_pipeline_configuration',
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
    this._resourceAccessRoleArn = config.resourceAccessRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._elements.internalValue = config.elements;
    this._realTimeAlertConfiguration.internalValue = config.realTimeAlertConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // resource_access_role_arn - computed: false, optional: false, required: true
  private _resourceAccessRoleArn?: string; 
  public get resourceAccessRoleArn() {
    return this.getStringAttribute('resource_access_role_arn');
  }
  public set resourceAccessRoleArn(value: string) {
    this._resourceAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessRoleArnInput() {
    return this._resourceAccessRoleArn;
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

  // elements - computed: false, optional: false, required: true
  private _elements = new AwsMediaInsightsPipelineConfiguration.ElementsPropertyList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: AwsMediaInsightsPipelineConfiguration.ElementsProperty[] | cdktn.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }

  // real_time_alert_configuration - computed: false, optional: true, required: false
  private _realTimeAlertConfiguration = new AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationPropertyOutputReference(this, "real_time_alert_configuration");
  public get realTimeAlertConfiguration() {
    return this._realTimeAlertConfiguration;
  }
  public putRealTimeAlertConfiguration(value: AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty) {
    this._realTimeAlertConfiguration.internalValue = value;
  }
  public resetRealTimeAlertConfiguration() {
    this._realTimeAlertConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeAlertConfigurationInput() {
    return this._realTimeAlertConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsMediaInsightsPipelineConfiguration.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsMediaInsightsPipelineConfiguration.TimeoutsProperty) {
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
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      resource_access_role_arn: cdktn.stringToTerraform(this._resourceAccessRoleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      elements: cdktn.listMapper(awsMediaInsightsPipelineConfigurationElementsPropertyToTerraform, true)(this._elements.internalValue),
      real_time_alert_configuration: awsMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToTerraform(this._realTimeAlertConfiguration.internalValue),
      timeouts: awsMediaInsightsPipelineConfigurationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      resource_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._resourceAccessRoleArn),
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
      elements: {
        value: cdktn.listMapperHcl(awsMediaInsightsPipelineConfigurationElementsPropertyToHclTerraform, true)(this._elements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMediaInsightsPipelineConfiguration.ElementsPropertyList",
      },
      real_time_alert_configuration: {
        value: awsMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToHclTerraform(this._realTimeAlertConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationPropertyList",
      },
      timeouts: {
        value: awsMediaInsightsPipelineConfigurationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsMediaInsightsPipelineConfiguration.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_redaction_output: cdktn.stringToTerraform(struct!.contentRedactionOutput),
    data_access_role_arn: cdktn.stringToTerraform(struct!.dataAccessRoleArn),
    output_encryption_kms_key_id: cdktn.stringToTerraform(struct!.outputEncryptionKmsKeyId),
    output_location: cdktn.stringToTerraform(struct!.outputLocation),
  }
}


export function awsMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_redaction_output: {
      value: cdktn.stringToHclTerraform(struct!.contentRedactionOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_encryption_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.outputEncryptionKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location: {
      value: cdktn.stringToHclTerraform(struct!.outputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    call_analytics_stream_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.callAnalyticsStreamCategories),
    content_identification_type: cdktn.stringToTerraform(struct!.contentIdentificationType),
    content_redaction_type: cdktn.stringToTerraform(struct!.contentRedactionType),
    enable_partial_results_stabilization: cdktn.booleanToTerraform(struct!.enablePartialResultsStabilization),
    filter_partial_results: cdktn.booleanToTerraform(struct!.filterPartialResults),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    language_model_name: cdktn.stringToTerraform(struct!.languageModelName),
    partial_results_stability: cdktn.stringToTerraform(struct!.partialResultsStability),
    pii_entity_types: cdktn.stringToTerraform(struct!.piiEntityTypes),
    vocabulary_filter_method: cdktn.stringToTerraform(struct!.vocabularyFilterMethod),
    vocabulary_filter_name: cdktn.stringToTerraform(struct!.vocabularyFilterName),
    vocabulary_name: cdktn.stringToTerraform(struct!.vocabularyName),
    post_call_analytics_settings: awsMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToTerraform(struct!.postCallAnalyticsSettings),
  }
}


export function awsMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    call_analytics_stream_categories: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.callAnalyticsStreamCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    content_identification_type: {
      value: cdktn.stringToHclTerraform(struct!.contentIdentificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_redaction_type: {
      value: cdktn.stringToHclTerraform(struct!.contentRedactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_partial_results_stabilization: {
      value: cdktn.booleanToHclTerraform(struct!.enablePartialResultsStabilization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_partial_results: {
      value: cdktn.booleanToHclTerraform(struct!.filterPartialResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_model_name: {
      value: cdktn.stringToHclTerraform(struct!.languageModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_results_stability: {
      value: cdktn.stringToHclTerraform(struct!.partialResultsStability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pii_entity_types: {
      value: cdktn.stringToHclTerraform(struct!.piiEntityTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vocabulary_filter_method: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyFilterMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vocabulary_filter_name: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vocabulary_name: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_call_analytics_settings: {
      value: awsMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToHclTerraform(struct!.postCallAnalyticsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PostCallAnalyticsSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_identification_type: cdktn.stringToTerraform(struct!.contentIdentificationType),
    content_redaction_type: cdktn.stringToTerraform(struct!.contentRedactionType),
    enable_partial_results_stabilization: cdktn.booleanToTerraform(struct!.enablePartialResultsStabilization),
    filter_partial_results: cdktn.booleanToTerraform(struct!.filterPartialResults),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    language_model_name: cdktn.stringToTerraform(struct!.languageModelName),
    partial_results_stability: cdktn.stringToTerraform(struct!.partialResultsStability),
    pii_entity_types: cdktn.stringToTerraform(struct!.piiEntityTypes),
    show_speaker_label: cdktn.booleanToTerraform(struct!.showSpeakerLabel),
    vocabulary_filter_method: cdktn.stringToTerraform(struct!.vocabularyFilterMethod),
    vocabulary_filter_name: cdktn.stringToTerraform(struct!.vocabularyFilterName),
    vocabulary_name: cdktn.stringToTerraform(struct!.vocabularyName),
  }
}


export function awsMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_identification_type: {
      value: cdktn.stringToHclTerraform(struct!.contentIdentificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_redaction_type: {
      value: cdktn.stringToHclTerraform(struct!.contentRedactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_partial_results_stabilization: {
      value: cdktn.booleanToHclTerraform(struct!.enablePartialResultsStabilization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_partial_results: {
      value: cdktn.booleanToHclTerraform(struct!.filterPartialResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_model_name: {
      value: cdktn.stringToHclTerraform(struct!.languageModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_results_stability: {
      value: cdktn.stringToHclTerraform(struct!.partialResultsStability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pii_entity_types: {
      value: cdktn.stringToHclTerraform(struct!.piiEntityTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_speaker_label: {
      value: cdktn.booleanToHclTerraform(struct!.showSpeakerLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vocabulary_filter_method: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyFilterMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vocabulary_filter_name: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vocabulary_name: {
      value: cdktn.stringToHclTerraform(struct!.vocabularyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insights_target: cdktn.stringToTerraform(struct!.insightsTarget),
  }
}


export function awsMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insights_target: {
      value: cdktn.stringToHclTerraform(struct!.insightsTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationLambdaFunctionSinkConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.LambdaFunctionSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.LambdaFunctionSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insights_target: cdktn.stringToTerraform(struct!.insightsTarget),
  }
}


export function awsMediaInsightsPipelineConfigurationLambdaFunctionSinkConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.LambdaFunctionSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.LambdaFunctionSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insights_target: {
      value: cdktn.stringToHclTerraform(struct!.insightsTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function awsMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationSnsTopicSinkConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SnsTopicSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SnsTopicSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insights_target: cdktn.stringToTerraform(struct!.insightsTarget),
  }
}


export function awsMediaInsightsPipelineConfigurationSnsTopicSinkConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SnsTopicSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SnsTopicSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insights_target: {
      value: cdktn.stringToHclTerraform(struct!.insightsTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationSqsQueueSinkConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SqsQueueSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SqsQueueSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insights_target: cdktn.stringToTerraform(struct!.insightsTarget),
  }
}


export function awsMediaInsightsPipelineConfigurationSqsQueueSinkConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SqsQueueSinkConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SqsQueueSinkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insights_target: {
      value: cdktn.stringToHclTerraform(struct!.insightsTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationVoiceAnalyticsProcessorConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.VoiceAnalyticsProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.VoiceAnalyticsProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    speaker_search_status: cdktn.stringToTerraform(struct!.speakerSearchStatus),
    voice_tone_analysis_status: cdktn.stringToTerraform(struct!.voiceToneAnalysisStatus),
  }
}


export function awsMediaInsightsPipelineConfigurationVoiceAnalyticsProcessorConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.VoiceAnalyticsProcessorConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.VoiceAnalyticsProcessorConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    speaker_search_status: {
      value: cdktn.stringToHclTerraform(struct!.speakerSearchStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_tone_analysis_status: {
      value: cdktn.stringToHclTerraform(struct!.voiceToneAnalysisStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationElementsPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.ElementsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    amazon_transcribe_call_analytics_processor_configuration: awsMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToTerraform(struct!.amazonTranscribeCallAnalyticsProcessorConfiguration),
    amazon_transcribe_processor_configuration: awsMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToTerraform(struct!.amazonTranscribeProcessorConfiguration),
    kinesis_data_stream_sink_configuration: awsMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToTerraform(struct!.kinesisDataStreamSinkConfiguration),
    lambda_function_sink_configuration: awsMediaInsightsPipelineConfigurationLambdaFunctionSinkConfigurationPropertyToTerraform(struct!.lambdaFunctionSinkConfiguration),
    s3_recording_sink_configuration: awsMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToTerraform(struct!.s3RecordingSinkConfiguration),
    sns_topic_sink_configuration: awsMediaInsightsPipelineConfigurationSnsTopicSinkConfigurationPropertyToTerraform(struct!.snsTopicSinkConfiguration),
    sqs_queue_sink_configuration: awsMediaInsightsPipelineConfigurationSqsQueueSinkConfigurationPropertyToTerraform(struct!.sqsQueueSinkConfiguration),
    voice_analytics_processor_configuration: awsMediaInsightsPipelineConfigurationVoiceAnalyticsProcessorConfigurationPropertyToTerraform(struct!.voiceAnalyticsProcessorConfiguration),
  }
}


export function awsMediaInsightsPipelineConfigurationElementsPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.ElementsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_transcribe_call_analytics_processor_configuration: {
      value: awsMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToHclTerraform(struct!.amazonTranscribeCallAnalyticsProcessorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyList",
    },
    amazon_transcribe_processor_configuration: {
      value: awsMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToHclTerraform(struct!.amazonTranscribeProcessorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AmazonTranscribeProcessorConfigurationPropertyList",
    },
    kinesis_data_stream_sink_configuration: {
      value: awsMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToHclTerraform(struct!.kinesisDataStreamSinkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisDataStreamSinkConfigurationPropertyList",
    },
    lambda_function_sink_configuration: {
      value: awsMediaInsightsPipelineConfigurationLambdaFunctionSinkConfigurationPropertyToHclTerraform(struct!.lambdaFunctionSinkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaFunctionSinkConfigurationPropertyList",
    },
    s3_recording_sink_configuration: {
      value: awsMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToHclTerraform(struct!.s3RecordingSinkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3RecordingSinkConfigurationPropertyList",
    },
    sns_topic_sink_configuration: {
      value: awsMediaInsightsPipelineConfigurationSnsTopicSinkConfigurationPropertyToHclTerraform(struct!.snsTopicSinkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnsTopicSinkConfigurationPropertyList",
    },
    sqs_queue_sink_configuration: {
      value: awsMediaInsightsPipelineConfigurationSqsQueueSinkConfigurationPropertyToHclTerraform(struct!.sqsQueueSinkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SqsQueueSinkConfigurationPropertyList",
    },
    voice_analytics_processor_configuration: {
      value: awsMediaInsightsPipelineConfigurationVoiceAnalyticsProcessorConfigurationPropertyToHclTerraform(struct!.voiceAnalyticsProcessorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VoiceAnalyticsProcessorConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.IssueDetectionConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.IssueDetectionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
  }
}


export function awsMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.IssueDetectionConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.IssueDetectionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.KeywordMatchConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.KeywordMatchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keywords),
    negate: cdktn.booleanToTerraform(struct!.negate),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
  }
}


export function awsMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.KeywordMatchConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.KeywordMatchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SentimentConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SentimentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
    sentiment_type: cdktn.stringToTerraform(struct!.sentimentType),
    time_period: cdktn.numberToTerraform(struct!.timePeriod),
  }
}


export function awsMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.SentimentConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.SentimentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentiment_type: {
      value: cdktn.stringToHclTerraform(struct!.sentimentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_period: {
      value: cdktn.numberToHclTerraform(struct!.timePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationRulesPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.RulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    issue_detection_configuration: awsMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToTerraform(struct!.issueDetectionConfiguration),
    keyword_match_configuration: awsMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToTerraform(struct!.keywordMatchConfiguration),
    sentiment_configuration: awsMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToTerraform(struct!.sentimentConfiguration),
  }
}


export function awsMediaInsightsPipelineConfigurationRulesPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.RulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_detection_configuration: {
      value: awsMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToHclTerraform(struct!.issueDetectionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "IssueDetectionConfigurationPropertyList",
    },
    keyword_match_configuration: {
      value: awsMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToHclTerraform(struct!.keywordMatchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KeywordMatchConfigurationPropertyList",
    },
    sentiment_configuration: {
      value: awsMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToHclTerraform(struct!.sentimentConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SentimentConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    rules: cdktn.listMapper(awsMediaInsightsPipelineConfigurationRulesPropertyToTerraform, true)(struct!.rules),
  }
}


export function awsMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationPropertyOutputReference | AwsMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktn.listMapperHcl(awsMediaInsightsPipelineConfigurationRulesPropertyToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "RulesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMediaInsightsPipelineConfigurationTimeoutsPropertyToTerraform(struct?: AwsMediaInsightsPipelineConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsMediaInsightsPipelineConfigurationTimeoutsPropertyToHclTerraform(struct?: AwsMediaInsightsPipelineConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsMediaInsightsPipelineConfiguration {
export interface PostCallAnalyticsSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_output AwsMediaInsightsPipelineConfiguration#content_redaction_output}
  */
  readonly contentRedactionOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#data_access_role_arn AwsMediaInsightsPipelineConfiguration#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_encryption_kms_key_id AwsMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}
  */
  readonly outputEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_location AwsMediaInsightsPipelineConfiguration#output_location}
  */
  readonly outputLocation: string;
}
export class PostCallAnalyticsSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostCallAnalyticsSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentRedactionOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionOutput = this._contentRedactionOutput;
    }
    if (this._dataAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessRoleArn = this._dataAccessRoleArn;
    }
    if (this._outputEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEncryptionKmsKeyId = this._outputEncryptionKmsKeyId;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostCallAnalyticsSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentRedactionOutput = undefined;
      this._dataAccessRoleArn = undefined;
      this._outputEncryptionKmsKeyId = undefined;
      this._outputLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentRedactionOutput = value.contentRedactionOutput;
      this._dataAccessRoleArn = value.dataAccessRoleArn;
      this._outputEncryptionKmsKeyId = value.outputEncryptionKmsKeyId;
      this._outputLocation = value.outputLocation;
    }
  }

  // content_redaction_output - computed: false, optional: true, required: false
  private _contentRedactionOutput?: string; 
  public get contentRedactionOutput() {
    return this.getStringAttribute('content_redaction_output');
  }
  public set contentRedactionOutput(value: string) {
    this._contentRedactionOutput = value;
  }
  public resetContentRedactionOutput() {
    this._contentRedactionOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionOutputInput() {
    return this._contentRedactionOutput;
  }

  // data_access_role_arn - computed: false, optional: false, required: true
  private _dataAccessRoleArn?: string; 
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }
  public set dataAccessRoleArn(value: string) {
    this._dataAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessRoleArnInput() {
    return this._dataAccessRoleArn;
  }

  // output_encryption_kms_key_id - computed: false, optional: true, required: false
  private _outputEncryptionKmsKeyId?: string; 
  public get outputEncryptionKmsKeyId() {
    return this.getStringAttribute('output_encryption_kms_key_id');
  }
  public set outputEncryptionKmsKeyId(value: string) {
    this._outputEncryptionKmsKeyId = value;
  }
  public resetOutputEncryptionKmsKeyId() {
    this._outputEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEncryptionKmsKeyIdInput() {
    return this._outputEncryptionKmsKeyId;
  }

  // output_location - computed: false, optional: false, required: true
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }
}
export interface AmazonTranscribeCallAnalyticsProcessorConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#call_analytics_stream_categories AwsMediaInsightsPipelineConfiguration#call_analytics_stream_categories}
  */
  readonly callAnalyticsStreamCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type AwsMediaInsightsPipelineConfiguration#content_identification_type}
  */
  readonly contentIdentificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type AwsMediaInsightsPipelineConfiguration#content_redaction_type}
  */
  readonly contentRedactionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization AwsMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
  */
  readonly enablePartialResultsStabilization?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results AwsMediaInsightsPipelineConfiguration#filter_partial_results}
  */
  readonly filterPartialResults?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code AwsMediaInsightsPipelineConfiguration#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name AwsMediaInsightsPipelineConfiguration#language_model_name}
  */
  readonly languageModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability AwsMediaInsightsPipelineConfiguration#partial_results_stability}
  */
  readonly partialResultsStability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types AwsMediaInsightsPipelineConfiguration#pii_entity_types}
  */
  readonly piiEntityTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method AwsMediaInsightsPipelineConfiguration#vocabulary_filter_method}
  */
  readonly vocabularyFilterMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name AwsMediaInsightsPipelineConfiguration#vocabulary_filter_name}
  */
  readonly vocabularyFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name AwsMediaInsightsPipelineConfiguration#vocabulary_name}
  */
  readonly vocabularyName?: string;
  /**
  * post_call_analytics_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#post_call_analytics_settings AwsMediaInsightsPipelineConfiguration#post_call_analytics_settings}
  */
  readonly postCallAnalyticsSettings?: PostCallAnalyticsSettingsProperty;
}
export class AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callAnalyticsStreamCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAnalyticsStreamCategories = this._callAnalyticsStreamCategories;
    }
    if (this._contentIdentificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentificationType = this._contentIdentificationType;
    }
    if (this._contentRedactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionType = this._contentRedactionType;
    }
    if (this._enablePartialResultsStabilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
    }
    if (this._filterPartialResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPartialResults = this._filterPartialResults;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageModelName = this._languageModelName;
    }
    if (this._partialResultsStability !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialResultsStability = this._partialResultsStability;
    }
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._vocabularyFilterMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
    }
    if (this._vocabularyFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
    }
    if (this._vocabularyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyName = this._vocabularyName;
    }
    if (this._postCallAnalyticsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCallAnalyticsSettings = this._postCallAnalyticsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callAnalyticsStreamCategories = undefined;
      this._contentIdentificationType = undefined;
      this._contentRedactionType = undefined;
      this._enablePartialResultsStabilization = undefined;
      this._filterPartialResults = undefined;
      this._languageCode = undefined;
      this._languageModelName = undefined;
      this._partialResultsStability = undefined;
      this._piiEntityTypes = undefined;
      this._vocabularyFilterMethod = undefined;
      this._vocabularyFilterName = undefined;
      this._vocabularyName = undefined;
      this._postCallAnalyticsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callAnalyticsStreamCategories = value.callAnalyticsStreamCategories;
      this._contentIdentificationType = value.contentIdentificationType;
      this._contentRedactionType = value.contentRedactionType;
      this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
      this._filterPartialResults = value.filterPartialResults;
      this._languageCode = value.languageCode;
      this._languageModelName = value.languageModelName;
      this._partialResultsStability = value.partialResultsStability;
      this._piiEntityTypes = value.piiEntityTypes;
      this._vocabularyFilterMethod = value.vocabularyFilterMethod;
      this._vocabularyFilterName = value.vocabularyFilterName;
      this._vocabularyName = value.vocabularyName;
      this._postCallAnalyticsSettings.internalValue = value.postCallAnalyticsSettings;
    }
  }

  // call_analytics_stream_categories - computed: false, optional: true, required: false
  private _callAnalyticsStreamCategories?: string[]; 
  public get callAnalyticsStreamCategories() {
    return this.getListAttribute('call_analytics_stream_categories');
  }
  public set callAnalyticsStreamCategories(value: string[]) {
    this._callAnalyticsStreamCategories = value;
  }
  public resetCallAnalyticsStreamCategories() {
    this._callAnalyticsStreamCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalyticsStreamCategoriesInput() {
    return this._callAnalyticsStreamCategories;
  }

  // content_identification_type - computed: false, optional: true, required: false
  private _contentIdentificationType?: string; 
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }
  public set contentIdentificationType(value: string) {
    this._contentIdentificationType = value;
  }
  public resetContentIdentificationType() {
    this._contentIdentificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdentificationTypeInput() {
    return this._contentIdentificationType;
  }

  // content_redaction_type - computed: false, optional: true, required: false
  private _contentRedactionType?: string; 
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }
  public set contentRedactionType(value: string) {
    this._contentRedactionType = value;
  }
  public resetContentRedactionType() {
    this._contentRedactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionTypeInput() {
    return this._contentRedactionType;
  }

  // enable_partial_results_stabilization - computed: false, optional: true, required: false
  private _enablePartialResultsStabilization?: boolean | cdktn.IResolvable; 
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }
  public set enablePartialResultsStabilization(value: boolean | cdktn.IResolvable) {
    this._enablePartialResultsStabilization = value;
  }
  public resetEnablePartialResultsStabilization() {
    this._enablePartialResultsStabilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartialResultsStabilizationInput() {
    return this._enablePartialResultsStabilization;
  }

  // filter_partial_results - computed: false, optional: true, required: false
  private _filterPartialResults?: boolean | cdktn.IResolvable; 
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }
  public set filterPartialResults(value: boolean | cdktn.IResolvable) {
    this._filterPartialResults = value;
  }
  public resetFilterPartialResults() {
    this._filterPartialResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPartialResultsInput() {
    return this._filterPartialResults;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // language_model_name - computed: false, optional: true, required: false
  private _languageModelName?: string; 
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }
  public set languageModelName(value: string) {
    this._languageModelName = value;
  }
  public resetLanguageModelName() {
    this._languageModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageModelNameInput() {
    return this._languageModelName;
  }

  // partial_results_stability - computed: false, optional: true, required: false
  private _partialResultsStability?: string; 
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }
  public set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  public resetPartialResultsStability() {
    this._partialResultsStability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResultsStabilityInput() {
    return this._partialResultsStability;
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string; 
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // vocabulary_filter_method - computed: false, optional: true, required: false
  private _vocabularyFilterMethod?: string; 
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }
  public set vocabularyFilterMethod(value: string) {
    this._vocabularyFilterMethod = value;
  }
  public resetVocabularyFilterMethod() {
    this._vocabularyFilterMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterMethodInput() {
    return this._vocabularyFilterMethod;
  }

  // vocabulary_filter_name - computed: false, optional: true, required: false
  private _vocabularyFilterName?: string; 
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }
  public set vocabularyFilterName(value: string) {
    this._vocabularyFilterName = value;
  }
  public resetVocabularyFilterName() {
    this._vocabularyFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterNameInput() {
    return this._vocabularyFilterName;
  }

  // vocabulary_name - computed: false, optional: true, required: false
  private _vocabularyName?: string; 
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }
  public set vocabularyName(value: string) {
    this._vocabularyName = value;
  }
  public resetVocabularyName() {
    this._vocabularyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyNameInput() {
    return this._vocabularyName;
  }

  // post_call_analytics_settings - computed: false, optional: true, required: false
  private _postCallAnalyticsSettings = new PostCallAnalyticsSettingsPropertyOutputReference(this, "post_call_analytics_settings");
  public get postCallAnalyticsSettings() {
    return this._postCallAnalyticsSettings;
  }
  public putPostCallAnalyticsSettings(value: PostCallAnalyticsSettingsProperty) {
    this._postCallAnalyticsSettings.internalValue = value;
  }
  public resetPostCallAnalyticsSettings() {
    this._postCallAnalyticsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCallAnalyticsSettingsInput() {
    return this._postCallAnalyticsSettings.internalValue;
  }
}
export interface AmazonTranscribeProcessorConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type AwsMediaInsightsPipelineConfiguration#content_identification_type}
  */
  readonly contentIdentificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type AwsMediaInsightsPipelineConfiguration#content_redaction_type}
  */
  readonly contentRedactionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization AwsMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
  */
  readonly enablePartialResultsStabilization?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results AwsMediaInsightsPipelineConfiguration#filter_partial_results}
  */
  readonly filterPartialResults?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code AwsMediaInsightsPipelineConfiguration#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name AwsMediaInsightsPipelineConfiguration#language_model_name}
  */
  readonly languageModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability AwsMediaInsightsPipelineConfiguration#partial_results_stability}
  */
  readonly partialResultsStability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types AwsMediaInsightsPipelineConfiguration#pii_entity_types}
  */
  readonly piiEntityTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#show_speaker_label AwsMediaInsightsPipelineConfiguration#show_speaker_label}
  */
  readonly showSpeakerLabel?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method AwsMediaInsightsPipelineConfiguration#vocabulary_filter_method}
  */
  readonly vocabularyFilterMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name AwsMediaInsightsPipelineConfiguration#vocabulary_filter_name}
  */
  readonly vocabularyFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name AwsMediaInsightsPipelineConfiguration#vocabulary_name}
  */
  readonly vocabularyName?: string;
}
export class AmazonTranscribeProcessorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmazonTranscribeProcessorConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentIdentificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentificationType = this._contentIdentificationType;
    }
    if (this._contentRedactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionType = this._contentRedactionType;
    }
    if (this._enablePartialResultsStabilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
    }
    if (this._filterPartialResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPartialResults = this._filterPartialResults;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageModelName = this._languageModelName;
    }
    if (this._partialResultsStability !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialResultsStability = this._partialResultsStability;
    }
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._showSpeakerLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSpeakerLabel = this._showSpeakerLabel;
    }
    if (this._vocabularyFilterMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
    }
    if (this._vocabularyFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
    }
    if (this._vocabularyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyName = this._vocabularyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonTranscribeProcessorConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentIdentificationType = undefined;
      this._contentRedactionType = undefined;
      this._enablePartialResultsStabilization = undefined;
      this._filterPartialResults = undefined;
      this._languageCode = undefined;
      this._languageModelName = undefined;
      this._partialResultsStability = undefined;
      this._piiEntityTypes = undefined;
      this._showSpeakerLabel = undefined;
      this._vocabularyFilterMethod = undefined;
      this._vocabularyFilterName = undefined;
      this._vocabularyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentIdentificationType = value.contentIdentificationType;
      this._contentRedactionType = value.contentRedactionType;
      this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
      this._filterPartialResults = value.filterPartialResults;
      this._languageCode = value.languageCode;
      this._languageModelName = value.languageModelName;
      this._partialResultsStability = value.partialResultsStability;
      this._piiEntityTypes = value.piiEntityTypes;
      this._showSpeakerLabel = value.showSpeakerLabel;
      this._vocabularyFilterMethod = value.vocabularyFilterMethod;
      this._vocabularyFilterName = value.vocabularyFilterName;
      this._vocabularyName = value.vocabularyName;
    }
  }

  // content_identification_type - computed: false, optional: true, required: false
  private _contentIdentificationType?: string; 
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }
  public set contentIdentificationType(value: string) {
    this._contentIdentificationType = value;
  }
  public resetContentIdentificationType() {
    this._contentIdentificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdentificationTypeInput() {
    return this._contentIdentificationType;
  }

  // content_redaction_type - computed: false, optional: true, required: false
  private _contentRedactionType?: string; 
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }
  public set contentRedactionType(value: string) {
    this._contentRedactionType = value;
  }
  public resetContentRedactionType() {
    this._contentRedactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionTypeInput() {
    return this._contentRedactionType;
  }

  // enable_partial_results_stabilization - computed: false, optional: true, required: false
  private _enablePartialResultsStabilization?: boolean | cdktn.IResolvable; 
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }
  public set enablePartialResultsStabilization(value: boolean | cdktn.IResolvable) {
    this._enablePartialResultsStabilization = value;
  }
  public resetEnablePartialResultsStabilization() {
    this._enablePartialResultsStabilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartialResultsStabilizationInput() {
    return this._enablePartialResultsStabilization;
  }

  // filter_partial_results - computed: false, optional: true, required: false
  private _filterPartialResults?: boolean | cdktn.IResolvable; 
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }
  public set filterPartialResults(value: boolean | cdktn.IResolvable) {
    this._filterPartialResults = value;
  }
  public resetFilterPartialResults() {
    this._filterPartialResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPartialResultsInput() {
    return this._filterPartialResults;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // language_model_name - computed: false, optional: true, required: false
  private _languageModelName?: string; 
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }
  public set languageModelName(value: string) {
    this._languageModelName = value;
  }
  public resetLanguageModelName() {
    this._languageModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageModelNameInput() {
    return this._languageModelName;
  }

  // partial_results_stability - computed: false, optional: true, required: false
  private _partialResultsStability?: string; 
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }
  public set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  public resetPartialResultsStability() {
    this._partialResultsStability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResultsStabilityInput() {
    return this._partialResultsStability;
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string; 
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // show_speaker_label - computed: false, optional: true, required: false
  private _showSpeakerLabel?: boolean | cdktn.IResolvable; 
  public get showSpeakerLabel() {
    return this.getBooleanAttribute('show_speaker_label');
  }
  public set showSpeakerLabel(value: boolean | cdktn.IResolvable) {
    this._showSpeakerLabel = value;
  }
  public resetShowSpeakerLabel() {
    this._showSpeakerLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSpeakerLabelInput() {
    return this._showSpeakerLabel;
  }

  // vocabulary_filter_method - computed: false, optional: true, required: false
  private _vocabularyFilterMethod?: string; 
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }
  public set vocabularyFilterMethod(value: string) {
    this._vocabularyFilterMethod = value;
  }
  public resetVocabularyFilterMethod() {
    this._vocabularyFilterMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterMethodInput() {
    return this._vocabularyFilterMethod;
  }

  // vocabulary_filter_name - computed: false, optional: true, required: false
  private _vocabularyFilterName?: string; 
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }
  public set vocabularyFilterName(value: string) {
    this._vocabularyFilterName = value;
  }
  public resetVocabularyFilterName() {
    this._vocabularyFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterNameInput() {
    return this._vocabularyFilterName;
  }

  // vocabulary_name - computed: false, optional: true, required: false
  private _vocabularyName?: string; 
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }
  public set vocabularyName(value: string) {
    this._vocabularyName = value;
  }
  public resetVocabularyName() {
    this._vocabularyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyNameInput() {
    return this._vocabularyName;
  }
}
export interface KinesisDataStreamSinkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target AwsMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}
export class KinesisDataStreamSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisDataStreamSinkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisDataStreamSinkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface LambdaFunctionSinkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target AwsMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}
export class LambdaFunctionSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionSinkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionSinkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface S3RecordingSinkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#destination AwsMediaInsightsPipelineConfiguration#destination}
  */
  readonly destination?: string;
}
export class S3RecordingSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3RecordingSinkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3RecordingSinkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface SnsTopicSinkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target AwsMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}
export class SnsTopicSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnsTopicSinkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsTopicSinkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface SqsQueueSinkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target AwsMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}
export class SqsQueueSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqsQueueSinkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqsQueueSinkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface VoiceAnalyticsProcessorConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#speaker_search_status AwsMediaInsightsPipelineConfiguration#speaker_search_status}
  */
  readonly speakerSearchStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_tone_analysis_status AwsMediaInsightsPipelineConfiguration#voice_tone_analysis_status}
  */
  readonly voiceToneAnalysisStatus: string;
}
export class VoiceAnalyticsProcessorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoiceAnalyticsProcessorConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._speakerSearchStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerSearchStatus = this._speakerSearchStatus;
    }
    if (this._voiceToneAnalysisStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceToneAnalysisStatus = this._voiceToneAnalysisStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoiceAnalyticsProcessorConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._speakerSearchStatus = undefined;
      this._voiceToneAnalysisStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._speakerSearchStatus = value.speakerSearchStatus;
      this._voiceToneAnalysisStatus = value.voiceToneAnalysisStatus;
    }
  }

  // speaker_search_status - computed: false, optional: false, required: true
  private _speakerSearchStatus?: string; 
  public get speakerSearchStatus() {
    return this.getStringAttribute('speaker_search_status');
  }
  public set speakerSearchStatus(value: string) {
    this._speakerSearchStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerSearchStatusInput() {
    return this._speakerSearchStatus;
  }

  // voice_tone_analysis_status - computed: false, optional: false, required: true
  private _voiceToneAnalysisStatus?: string; 
  public get voiceToneAnalysisStatus() {
    return this.getStringAttribute('voice_tone_analysis_status');
  }
  public set voiceToneAnalysisStatus(value: string) {
    this._voiceToneAnalysisStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceToneAnalysisStatusInput() {
    return this._voiceToneAnalysisStatus;
  }
}
export interface ElementsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type AwsMediaInsightsPipelineConfiguration#type}
  */
  readonly type: string;
  /**
  * amazon_transcribe_call_analytics_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration AwsMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}
  */
  readonly amazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty;
  /**
  * amazon_transcribe_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration AwsMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}
  */
  readonly amazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfigurationProperty;
  /**
  * kinesis_data_stream_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration AwsMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}
  */
  readonly kinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfigurationProperty;
  /**
  * lambda_function_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#lambda_function_sink_configuration AwsMediaInsightsPipelineConfiguration#lambda_function_sink_configuration}
  */
  readonly lambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfigurationProperty;
  /**
  * s3_recording_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#s3_recording_sink_configuration AwsMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}
  */
  readonly s3RecordingSinkConfiguration?: S3RecordingSinkConfigurationProperty;
  /**
  * sns_topic_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sns_topic_sink_configuration AwsMediaInsightsPipelineConfiguration#sns_topic_sink_configuration}
  */
  readonly snsTopicSinkConfiguration?: SnsTopicSinkConfigurationProperty;
  /**
  * sqs_queue_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sqs_queue_sink_configuration AwsMediaInsightsPipelineConfiguration#sqs_queue_sink_configuration}
  */
  readonly sqsQueueSinkConfiguration?: SqsQueueSinkConfigurationProperty;
  /**
  * voice_analytics_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_analytics_processor_configuration AwsMediaInsightsPipelineConfiguration#voice_analytics_processor_configuration}
  */
  readonly voiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfigurationProperty;
}
export class ElementsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElementsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonTranscribeCallAnalyticsProcessorConfiguration = this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue;
    }
    if (this._amazonTranscribeProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonTranscribeProcessorConfiguration = this._amazonTranscribeProcessorConfiguration?.internalValue;
    }
    if (this._kinesisDataStreamSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStreamSinkConfiguration = this._kinesisDataStreamSinkConfiguration?.internalValue;
    }
    if (this._lambdaFunctionSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionSinkConfiguration = this._lambdaFunctionSinkConfiguration?.internalValue;
    }
    if (this._s3RecordingSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3RecordingSinkConfiguration = this._s3RecordingSinkConfiguration?.internalValue;
    }
    if (this._snsTopicSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicSinkConfiguration = this._snsTopicSinkConfiguration?.internalValue;
    }
    if (this._sqsQueueSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueSinkConfiguration = this._sqsQueueSinkConfiguration?.internalValue;
    }
    if (this._voiceAnalyticsProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceAnalyticsProcessorConfiguration = this._voiceAnalyticsProcessorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
      this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
      this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
      this._lambdaFunctionSinkConfiguration.internalValue = undefined;
      this._s3RecordingSinkConfiguration.internalValue = undefined;
      this._snsTopicSinkConfiguration.internalValue = undefined;
      this._sqsQueueSinkConfiguration.internalValue = undefined;
      this._voiceAnalyticsProcessorConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value.amazonTranscribeCallAnalyticsProcessorConfiguration;
      this._amazonTranscribeProcessorConfiguration.internalValue = value.amazonTranscribeProcessorConfiguration;
      this._kinesisDataStreamSinkConfiguration.internalValue = value.kinesisDataStreamSinkConfiguration;
      this._lambdaFunctionSinkConfiguration.internalValue = value.lambdaFunctionSinkConfiguration;
      this._s3RecordingSinkConfiguration.internalValue = value.s3RecordingSinkConfiguration;
      this._snsTopicSinkConfiguration.internalValue = value.snsTopicSinkConfiguration;
      this._sqsQueueSinkConfiguration.internalValue = value.sqsQueueSinkConfiguration;
      this._voiceAnalyticsProcessorConfiguration.internalValue = value.voiceAnalyticsProcessorConfiguration;
    }
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

  // amazon_transcribe_call_analytics_processor_configuration - computed: false, optional: true, required: false
  private _amazonTranscribeCallAnalyticsProcessorConfiguration = new AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference(this, "amazon_transcribe_call_analytics_processor_configuration");
  public get amazonTranscribeCallAnalyticsProcessorConfiguration() {
    return this._amazonTranscribeCallAnalyticsProcessorConfiguration;
  }
  public putAmazonTranscribeCallAnalyticsProcessorConfiguration(value: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty) {
    this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value;
  }
  public resetAmazonTranscribeCallAnalyticsProcessorConfiguration() {
    this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonTranscribeCallAnalyticsProcessorConfigurationInput() {
    return this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue;
  }

  // amazon_transcribe_processor_configuration - computed: false, optional: true, required: false
  private _amazonTranscribeProcessorConfiguration = new AmazonTranscribeProcessorConfigurationPropertyOutputReference(this, "amazon_transcribe_processor_configuration");
  public get amazonTranscribeProcessorConfiguration() {
    return this._amazonTranscribeProcessorConfiguration;
  }
  public putAmazonTranscribeProcessorConfiguration(value: AmazonTranscribeProcessorConfigurationProperty) {
    this._amazonTranscribeProcessorConfiguration.internalValue = value;
  }
  public resetAmazonTranscribeProcessorConfiguration() {
    this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonTranscribeProcessorConfigurationInput() {
    return this._amazonTranscribeProcessorConfiguration.internalValue;
  }

  // kinesis_data_stream_sink_configuration - computed: false, optional: true, required: false
  private _kinesisDataStreamSinkConfiguration = new KinesisDataStreamSinkConfigurationPropertyOutputReference(this, "kinesis_data_stream_sink_configuration");
  public get kinesisDataStreamSinkConfiguration() {
    return this._kinesisDataStreamSinkConfiguration;
  }
  public putKinesisDataStreamSinkConfiguration(value: KinesisDataStreamSinkConfigurationProperty) {
    this._kinesisDataStreamSinkConfiguration.internalValue = value;
  }
  public resetKinesisDataStreamSinkConfiguration() {
    this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamSinkConfigurationInput() {
    return this._kinesisDataStreamSinkConfiguration.internalValue;
  }

  // lambda_function_sink_configuration - computed: false, optional: true, required: false
  private _lambdaFunctionSinkConfiguration = new LambdaFunctionSinkConfigurationPropertyOutputReference(this, "lambda_function_sink_configuration");
  public get lambdaFunctionSinkConfiguration() {
    return this._lambdaFunctionSinkConfiguration;
  }
  public putLambdaFunctionSinkConfiguration(value: LambdaFunctionSinkConfigurationProperty) {
    this._lambdaFunctionSinkConfiguration.internalValue = value;
  }
  public resetLambdaFunctionSinkConfiguration() {
    this._lambdaFunctionSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionSinkConfigurationInput() {
    return this._lambdaFunctionSinkConfiguration.internalValue;
  }

  // s3_recording_sink_configuration - computed: false, optional: true, required: false
  private _s3RecordingSinkConfiguration = new S3RecordingSinkConfigurationPropertyOutputReference(this, "s3_recording_sink_configuration");
  public get s3RecordingSinkConfiguration() {
    return this._s3RecordingSinkConfiguration;
  }
  public putS3RecordingSinkConfiguration(value: S3RecordingSinkConfigurationProperty) {
    this._s3RecordingSinkConfiguration.internalValue = value;
  }
  public resetS3RecordingSinkConfiguration() {
    this._s3RecordingSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RecordingSinkConfigurationInput() {
    return this._s3RecordingSinkConfiguration.internalValue;
  }

  // sns_topic_sink_configuration - computed: false, optional: true, required: false
  private _snsTopicSinkConfiguration = new SnsTopicSinkConfigurationPropertyOutputReference(this, "sns_topic_sink_configuration");
  public get snsTopicSinkConfiguration() {
    return this._snsTopicSinkConfiguration;
  }
  public putSnsTopicSinkConfiguration(value: SnsTopicSinkConfigurationProperty) {
    this._snsTopicSinkConfiguration.internalValue = value;
  }
  public resetSnsTopicSinkConfiguration() {
    this._snsTopicSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicSinkConfigurationInput() {
    return this._snsTopicSinkConfiguration.internalValue;
  }

  // sqs_queue_sink_configuration - computed: false, optional: true, required: false
  private _sqsQueueSinkConfiguration = new SqsQueueSinkConfigurationPropertyOutputReference(this, "sqs_queue_sink_configuration");
  public get sqsQueueSinkConfiguration() {
    return this._sqsQueueSinkConfiguration;
  }
  public putSqsQueueSinkConfiguration(value: SqsQueueSinkConfigurationProperty) {
    this._sqsQueueSinkConfiguration.internalValue = value;
  }
  public resetSqsQueueSinkConfiguration() {
    this._sqsQueueSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueSinkConfigurationInput() {
    return this._sqsQueueSinkConfiguration.internalValue;
  }

  // voice_analytics_processor_configuration - computed: false, optional: true, required: false
  private _voiceAnalyticsProcessorConfiguration = new VoiceAnalyticsProcessorConfigurationPropertyOutputReference(this, "voice_analytics_processor_configuration");
  public get voiceAnalyticsProcessorConfiguration() {
    return this._voiceAnalyticsProcessorConfiguration;
  }
  public putVoiceAnalyticsProcessorConfiguration(value: VoiceAnalyticsProcessorConfigurationProperty) {
    this._voiceAnalyticsProcessorConfiguration.internalValue = value;
  }
  public resetVoiceAnalyticsProcessorConfiguration() {
    this._voiceAnalyticsProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceAnalyticsProcessorConfigurationInput() {
    return this._voiceAnalyticsProcessorConfiguration.internalValue;
  }
}

export class ElementsPropertyList extends cdktn.ComplexList {
  public internalValue? : ElementsProperty[] | cdktn.IResolvable

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
  public get(index: number): ElementsPropertyOutputReference {
    return new ElementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IssueDetectionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name AwsMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
}
export class IssueDetectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IssueDetectionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueDetectionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleName = value.ruleName;
    }
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
}
export interface KeywordMatchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keywords AwsMediaInsightsPipelineConfiguration#keywords}
  */
  readonly keywords: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#negate AwsMediaInsightsPipelineConfiguration#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name AwsMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
}
export class KeywordMatchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeywordMatchConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeywordMatchConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keywords = undefined;
      this._negate = undefined;
      this._ruleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keywords = value.keywords;
      this._negate = value.negate;
      this._ruleName = value.ruleName;
    }
  }

  // keywords - computed: false, optional: false, required: true
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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
}
export interface SentimentConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name AwsMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_type AwsMediaInsightsPipelineConfiguration#sentiment_type}
  */
  readonly sentimentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#time_period AwsMediaInsightsPipelineConfiguration#time_period}
  */
  readonly timePeriod: number;
}
export class SentimentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentimentConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sentimentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentType = this._sentimentType;
    }
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentimentConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleName = undefined;
      this._sentimentType = undefined;
      this._timePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleName = value.ruleName;
      this._sentimentType = value.sentimentType;
      this._timePeriod = value.timePeriod;
    }
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

  // sentiment_type - computed: false, optional: false, required: true
  private _sentimentType?: string; 
  public get sentimentType() {
    return this.getStringAttribute('sentiment_type');
  }
  public set sentimentType(value: string) {
    this._sentimentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentTypeInput() {
    return this._sentimentType;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod?: number; 
  public get timePeriod() {
    return this.getNumberAttribute('time_period');
  }
  public set timePeriod(value: number) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }
}
export interface RulesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type AwsMediaInsightsPipelineConfiguration#type}
  */
  readonly type: string;
  /**
  * issue_detection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#issue_detection_configuration AwsMediaInsightsPipelineConfiguration#issue_detection_configuration}
  */
  readonly issueDetectionConfiguration?: IssueDetectionConfigurationProperty;
  /**
  * keyword_match_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keyword_match_configuration AwsMediaInsightsPipelineConfiguration#keyword_match_configuration}
  */
  readonly keywordMatchConfiguration?: KeywordMatchConfigurationProperty;
  /**
  * sentiment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_configuration AwsMediaInsightsPipelineConfiguration#sentiment_configuration}
  */
  readonly sentimentConfiguration?: SentimentConfigurationProperty;
}
export class RulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._issueDetectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueDetectionConfiguration = this._issueDetectionConfiguration?.internalValue;
    }
    if (this._keywordMatchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordMatchConfiguration = this._keywordMatchConfiguration?.internalValue;
    }
    if (this._sentimentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentConfiguration = this._sentimentConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._issueDetectionConfiguration.internalValue = undefined;
      this._keywordMatchConfiguration.internalValue = undefined;
      this._sentimentConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._issueDetectionConfiguration.internalValue = value.issueDetectionConfiguration;
      this._keywordMatchConfiguration.internalValue = value.keywordMatchConfiguration;
      this._sentimentConfiguration.internalValue = value.sentimentConfiguration;
    }
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

  // issue_detection_configuration - computed: false, optional: true, required: false
  private _issueDetectionConfiguration = new IssueDetectionConfigurationPropertyOutputReference(this, "issue_detection_configuration");
  public get issueDetectionConfiguration() {
    return this._issueDetectionConfiguration;
  }
  public putIssueDetectionConfiguration(value: IssueDetectionConfigurationProperty) {
    this._issueDetectionConfiguration.internalValue = value;
  }
  public resetIssueDetectionConfiguration() {
    this._issueDetectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueDetectionConfigurationInput() {
    return this._issueDetectionConfiguration.internalValue;
  }

  // keyword_match_configuration - computed: false, optional: true, required: false
  private _keywordMatchConfiguration = new KeywordMatchConfigurationPropertyOutputReference(this, "keyword_match_configuration");
  public get keywordMatchConfiguration() {
    return this._keywordMatchConfiguration;
  }
  public putKeywordMatchConfiguration(value: KeywordMatchConfigurationProperty) {
    this._keywordMatchConfiguration.internalValue = value;
  }
  public resetKeywordMatchConfiguration() {
    this._keywordMatchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMatchConfigurationInput() {
    return this._keywordMatchConfiguration.internalValue;
  }

  // sentiment_configuration - computed: false, optional: true, required: false
  private _sentimentConfiguration = new SentimentConfigurationPropertyOutputReference(this, "sentiment_configuration");
  public get sentimentConfiguration() {
    return this._sentimentConfiguration;
  }
  public putSentimentConfiguration(value: SentimentConfigurationProperty) {
    this._sentimentConfiguration.internalValue = value;
  }
  public resetSentimentConfiguration() {
    this._sentimentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentConfigurationInput() {
    return this._sentimentConfiguration.internalValue;
  }
}

export class RulesPropertyList extends cdktn.ComplexList {
  public internalValue? : RulesProperty[] | cdktn.IResolvable

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
  public get(index: number): RulesPropertyOutputReference {
    return new RulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealTimeAlertConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#disabled AwsMediaInsightsPipelineConfiguration#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rules AwsMediaInsightsPipelineConfiguration#rules}
  */
  readonly rules: RulesProperty[] | cdktn.IResolvable;
}
export class RealTimeAlertConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealTimeAlertConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealTimeAlertConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._rules.internalValue = value.rules;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RulesPropertyList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RulesProperty[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#create AwsMediaInsightsPipelineConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#delete AwsMediaInsightsPipelineConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#update AwsMediaInsightsPipelineConfiguration#update}
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
