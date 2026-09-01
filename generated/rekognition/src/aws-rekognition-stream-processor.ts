// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRekognitionStreamProcessorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#kms_key_id AwsRekognitionStreamProcessor#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * An identifier you assign to the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#name AwsRekognitionStreamProcessor#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#region AwsRekognitionStreamProcessor#region}
  */
  readonly region?: string;
  /**
  * The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#role_arn AwsRekognitionStreamProcessor#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#tags AwsRekognitionStreamProcessor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_sharing_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#data_sharing_preference AwsRekognitionStreamProcessor#data_sharing_preference}
  */
  readonly dataSharingPreference?: AwsRekognitionStreamProcessor.DataSharingPreferenceProperty[] | cdktn.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#input AwsRekognitionStreamProcessor#input}
  */
  readonly input?: AwsRekognitionStreamProcessor.InputProperty[] | cdktn.IResolvable;
  /**
  * notification_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#notification_channel AwsRekognitionStreamProcessor#notification_channel}
  */
  readonly notificationChannel?: AwsRekognitionStreamProcessor.NotificationChannelProperty[] | cdktn.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#output AwsRekognitionStreamProcessor#output}
  */
  readonly output?: AwsRekognitionStreamProcessor.OutputProperty[] | cdktn.IResolvable;
  /**
  * regions_of_interest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#regions_of_interest AwsRekognitionStreamProcessor#regions_of_interest}
  */
  readonly regionsOfInterest?: AwsRekognitionStreamProcessor.RegionsOfInterestProperty[] | cdktn.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#settings AwsRekognitionStreamProcessor#settings}
  */
  readonly settings?: AwsRekognitionStreamProcessor.SettingsProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#timeouts AwsRekognitionStreamProcessor#timeouts}
  */
  readonly timeouts?: AwsRekognitionStreamProcessor.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}
*/
export class AwsRekognitionStreamProcessor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rekognition_stream_processor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRekognitionStreamProcessor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRekognitionStreamProcessor to import
  * @param importFromId The id of the existing AwsRekognitionStreamProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRekognitionStreamProcessor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rekognition_stream_processor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRekognitionStreamProcessorConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRekognitionStreamProcessorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rekognition_stream_processor',
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
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._dataSharingPreference.internalValue = config.dataSharingPreference;
    this._input.internalValue = config.input;
    this._notificationChannel.internalValue = config.notificationChannel;
    this._output.internalValue = config.output;
    this._regionsOfInterest.internalValue = config.regionsOfInterest;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // stream_processor_arn - computed: true, optional: false, required: false
  public get streamProcessorArn() {
    return this.getStringAttribute('stream_processor_arn');
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

  // data_sharing_preference - computed: false, optional: true, required: false
  private _dataSharingPreference = new AwsRekognitionStreamProcessor.DataSharingPreferencePropertyList(this, "data_sharing_preference", false);
  public get dataSharingPreference() {
    return this._dataSharingPreference;
  }
  public putDataSharingPreference(value: AwsRekognitionStreamProcessor.DataSharingPreferenceProperty[] | cdktn.IResolvable) {
    this._dataSharingPreference.internalValue = value;
  }
  public resetDataSharingPreference() {
    this._dataSharingPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSharingPreferenceInput() {
    return this._dataSharingPreference.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new AwsRekognitionStreamProcessor.InputPropertyList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: AwsRekognitionStreamProcessor.InputProperty[] | cdktn.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // notification_channel - computed: false, optional: true, required: false
  private _notificationChannel = new AwsRekognitionStreamProcessor.NotificationChannelPropertyList(this, "notification_channel", false);
  public get notificationChannel() {
    return this._notificationChannel;
  }
  public putNotificationChannel(value: AwsRekognitionStreamProcessor.NotificationChannelProperty[] | cdktn.IResolvable) {
    this._notificationChannel.internalValue = value;
  }
  public resetNotificationChannel() {
    this._notificationChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelInput() {
    return this._notificationChannel.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new AwsRekognitionStreamProcessor.OutputPropertyList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: AwsRekognitionStreamProcessor.OutputProperty[] | cdktn.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // regions_of_interest - computed: false, optional: true, required: false
  private _regionsOfInterest = new AwsRekognitionStreamProcessor.RegionsOfInterestPropertyList(this, "regions_of_interest", false);
  public get regionsOfInterest() {
    return this._regionsOfInterest;
  }
  public putRegionsOfInterest(value: AwsRekognitionStreamProcessor.RegionsOfInterestProperty[] | cdktn.IResolvable) {
    this._regionsOfInterest.internalValue = value;
  }
  public resetRegionsOfInterest() {
    this._regionsOfInterest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsOfInterestInput() {
    return this._regionsOfInterest.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new AwsRekognitionStreamProcessor.SettingsPropertyList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: AwsRekognitionStreamProcessor.SettingsProperty[] | cdktn.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsRekognitionStreamProcessor.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsRekognitionStreamProcessor.TimeoutsProperty) {
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
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      data_sharing_preference: cdktn.listMapper(awsRekognitionStreamProcessorDataSharingPreferencePropertyToTerraform, true)(this._dataSharingPreference.internalValue),
      input: cdktn.listMapper(awsRekognitionStreamProcessorInputPropertyToTerraform, true)(this._input.internalValue),
      notification_channel: cdktn.listMapper(awsRekognitionStreamProcessorNotificationChannelPropertyToTerraform, true)(this._notificationChannel.internalValue),
      output: cdktn.listMapper(awsRekognitionStreamProcessorOutputPropertyToTerraform, true)(this._output.internalValue),
      regions_of_interest: cdktn.listMapper(awsRekognitionStreamProcessorRegionsOfInterestPropertyToTerraform, true)(this._regionsOfInterest.internalValue),
      settings: cdktn.listMapper(awsRekognitionStreamProcessorSettingsPropertyToTerraform, true)(this._settings.internalValue),
      timeouts: awsRekognitionStreamProcessorTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      data_sharing_preference: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorDataSharingPreferencePropertyToHclTerraform, true)(this._dataSharingPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.DataSharingPreferencePropertyList",
      },
      input: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorInputPropertyToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.InputPropertyList",
      },
      notification_channel: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorNotificationChannelPropertyToHclTerraform, true)(this._notificationChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.NotificationChannelPropertyList",
      },
      output: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorOutputPropertyToHclTerraform, true)(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.OutputPropertyList",
      },
      regions_of_interest: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorRegionsOfInterestPropertyToHclTerraform, true)(this._regionsOfInterest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.RegionsOfInterestPropertyList",
      },
      settings: {
        value: cdktn.listMapperHcl(awsRekognitionStreamProcessorSettingsPropertyToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRekognitionStreamProcessor.SettingsPropertyList",
      },
      timeouts: {
        value: awsRekognitionStreamProcessorTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsRekognitionStreamProcessor.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRekognitionStreamProcessorDataSharingPreferencePropertyToTerraform(struct?: AwsRekognitionStreamProcessor.DataSharingPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    opt_in: cdktn.booleanToTerraform(struct!.optIn),
  }
}


export function awsRekognitionStreamProcessorDataSharingPreferencePropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.DataSharingPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    opt_in: {
      value: cdktn.booleanToHclTerraform(struct!.optIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorKinesisVideoStreamPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.KinesisVideoStreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsRekognitionStreamProcessorKinesisVideoStreamPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.KinesisVideoStreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorInputPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.InputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis_video_stream: cdktn.listMapper(awsRekognitionStreamProcessorKinesisVideoStreamPropertyToTerraform, true)(struct!.kinesisVideoStream),
  }
}


export function awsRekognitionStreamProcessorInputPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.InputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis_video_stream: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorKinesisVideoStreamPropertyToHclTerraform, true)(struct!.kinesisVideoStream),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisVideoStreamPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorNotificationChannelPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.NotificationChannelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function awsRekognitionStreamProcessorNotificationChannelPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.NotificationChannelProperty | cdktn.IResolvable): any {
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


export function awsRekognitionStreamProcessorKinesisDataStreamPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.KinesisDataStreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsRekognitionStreamProcessorKinesisDataStreamPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.KinesisDataStreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorS3DestinationPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.S3DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function awsRekognitionStreamProcessorS3DestinationPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.S3DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorOutputPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.OutputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis_data_stream: cdktn.listMapper(awsRekognitionStreamProcessorKinesisDataStreamPropertyToTerraform, true)(struct!.kinesisDataStream),
    s3_destination: cdktn.listMapper(awsRekognitionStreamProcessorS3DestinationPropertyToTerraform, true)(struct!.s3Destination),
  }
}


export function awsRekognitionStreamProcessorOutputPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.OutputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis_data_stream: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorKinesisDataStreamPropertyToHclTerraform, true)(struct!.kinesisDataStream),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisDataStreamPropertyList",
    },
    s3_destination: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorS3DestinationPropertyToHclTerraform, true)(struct!.s3Destination),
      isBlock: true,
      type: "list",
      storageClassType: "S3DestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorBoundingBoxPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.BoundingBoxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    height: cdktn.numberToTerraform(struct!.height),
    left: cdktn.numberToTerraform(struct!.left),
    top: cdktn.numberToTerraform(struct!.top),
    width: cdktn.numberToTerraform(struct!.width),
  }
}


export function awsRekognitionStreamProcessorBoundingBoxPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.BoundingBoxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    left: {
      value: cdktn.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top: {
      value: cdktn.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorPolygonPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.PolygonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
  }
}


export function awsRekognitionStreamProcessorPolygonPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.PolygonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorRegionsOfInterestPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.RegionsOfInterestProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: cdktn.listMapper(awsRekognitionStreamProcessorBoundingBoxPropertyToTerraform, true)(struct!.boundingBox),
    polygon: cdktn.listMapper(awsRekognitionStreamProcessorPolygonPropertyToTerraform, true)(struct!.polygon),
  }
}


export function awsRekognitionStreamProcessorRegionsOfInterestPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.RegionsOfInterestProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorBoundingBoxPropertyToHclTerraform, true)(struct!.boundingBox),
      isBlock: true,
      type: "list",
      storageClassType: "BoundingBoxPropertyList",
    },
    polygon: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorPolygonPropertyToHclTerraform, true)(struct!.polygon),
      isBlock: true,
      type: "list",
      storageClassType: "PolygonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorConnectedHomePropertyToTerraform(struct?: AwsRekognitionStreamProcessor.ConnectedHomeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
    min_confidence: cdktn.numberToTerraform(struct!.minConfidence),
  }
}


export function awsRekognitionStreamProcessorConnectedHomePropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.ConnectedHomeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_confidence: {
      value: cdktn.numberToHclTerraform(struct!.minConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorFaceSearchPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.FaceSearchProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_id: cdktn.stringToTerraform(struct!.collectionId),
    face_match_threshold: cdktn.numberToTerraform(struct!.faceMatchThreshold),
  }
}


export function awsRekognitionStreamProcessorFaceSearchPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.FaceSearchProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_id: {
      value: cdktn.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    face_match_threshold: {
      value: cdktn.numberToHclTerraform(struct!.faceMatchThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorSettingsPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.SettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connected_home: cdktn.listMapper(awsRekognitionStreamProcessorConnectedHomePropertyToTerraform, true)(struct!.connectedHome),
    face_search: cdktn.listMapper(awsRekognitionStreamProcessorFaceSearchPropertyToTerraform, true)(struct!.faceSearch),
  }
}


export function awsRekognitionStreamProcessorSettingsPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.SettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connected_home: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorConnectedHomePropertyToHclTerraform, true)(struct!.connectedHome),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectedHomePropertyList",
    },
    face_search: {
      value: cdktn.listMapperHcl(awsRekognitionStreamProcessorFaceSearchPropertyToHclTerraform, true)(struct!.faceSearch),
      isBlock: true,
      type: "list",
      storageClassType: "FaceSearchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRekognitionStreamProcessorTimeoutsPropertyToTerraform(struct?: AwsRekognitionStreamProcessor.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsRekognitionStreamProcessorTimeoutsPropertyToHclTerraform(struct?: AwsRekognitionStreamProcessor.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsRekognitionStreamProcessor {
export interface DataSharingPreferenceProperty {
  /**
  * Do you want to share data with Rekognition to improve model performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#opt_in AwsRekognitionStreamProcessor#opt_in}
  */
  readonly optIn: boolean | cdktn.IResolvable;
}
export class DataSharingPreferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSharingPreferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.optIn = this._optIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSharingPreferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optIn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optIn = value.optIn;
    }
  }

  // opt_in - computed: false, optional: false, required: true
  private _optIn?: boolean | cdktn.IResolvable; 
  public get optIn() {
    return this.getBooleanAttribute('opt_in');
  }
  public set optIn(value: boolean | cdktn.IResolvable) {
    this._optIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInInput() {
    return this._optIn;
  }
}

export class DataSharingPreferencePropertyList extends cdktn.ComplexList {
  public internalValue? : DataSharingPreferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSharingPreferencePropertyOutputReference {
    return new DataSharingPreferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisVideoStreamProperty {
  /**
  * ARN of the Kinesis video stream stream that streams the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#arn AwsRekognitionStreamProcessor#arn}
  */
  readonly arn: string;
}
export class KinesisVideoStreamPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisVideoStreamProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisVideoStreamProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class KinesisVideoStreamPropertyList extends cdktn.ComplexList {
  public internalValue? : KinesisVideoStreamProperty[] | cdktn.IResolvable

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
  public get(index: number): KinesisVideoStreamPropertyOutputReference {
    return new KinesisVideoStreamPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputProperty {
  /**
  * kinesis_video_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#kinesis_video_stream AwsRekognitionStreamProcessor#kinesis_video_stream}
  */
  readonly kinesisVideoStream?: KinesisVideoStreamProperty[] | cdktn.IResolvable;
}
export class InputPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisVideoStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisVideoStream = this._kinesisVideoStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisVideoStream.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisVideoStream.internalValue = value.kinesisVideoStream;
    }
  }

  // kinesis_video_stream - computed: false, optional: true, required: false
  private _kinesisVideoStream = new KinesisVideoStreamPropertyList(this, "kinesis_video_stream", false);
  public get kinesisVideoStream() {
    return this._kinesisVideoStream;
  }
  public putKinesisVideoStream(value: KinesisVideoStreamProperty[] | cdktn.IResolvable) {
    this._kinesisVideoStream.internalValue = value;
  }
  public resetKinesisVideoStream() {
    this._kinesisVideoStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisVideoStreamInput() {
    return this._kinesisVideoStream.internalValue;
  }
}

export class InputPropertyList extends cdktn.ComplexList {
  public internalValue? : InputProperty[] | cdktn.IResolvable

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
  public get(index: number): InputPropertyOutputReference {
    return new InputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationChannelProperty {
  /**
  * The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#sns_topic_arn AwsRekognitionStreamProcessor#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}
export class NotificationChannelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NotificationChannelProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NotificationChannelProperty | cdktn.IResolvable | undefined) {
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

export class NotificationChannelPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationChannelProperty[] | cdktn.IResolvable

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
  public get(index: number): NotificationChannelPropertyOutputReference {
    return new NotificationChannelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisDataStreamProperty {
  /**
  * ARN of the output Amazon Kinesis Data Streams stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#arn AwsRekognitionStreamProcessor#arn}
  */
  readonly arn?: string;
}
export class KinesisDataStreamPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisDataStreamProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisDataStreamProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class KinesisDataStreamPropertyList extends cdktn.ComplexList {
  public internalValue? : KinesisDataStreamProperty[] | cdktn.IResolvable

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
  public get(index: number): KinesisDataStreamPropertyOutputReference {
    return new KinesisDataStreamPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3DestinationProperty {
  /**
  * The name of the Amazon S3 bucket you want to associate with the streaming video project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#bucket AwsRekognitionStreamProcessor#bucket}
  */
  readonly bucket?: string;
  /**
  * The prefix value of the location within the bucket that you want the information to be published to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#key_prefix AwsRekognitionStreamProcessor#key_prefix}
  */
  readonly keyPrefix?: string;
}
export class S3DestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3DestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}

export class S3DestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3DestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3DestinationPropertyOutputReference {
    return new S3DestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputProperty {
  /**
  * kinesis_data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#kinesis_data_stream AwsRekognitionStreamProcessor#kinesis_data_stream}
  */
  readonly kinesisDataStream?: KinesisDataStreamProperty[] | cdktn.IResolvable;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#s3_destination AwsRekognitionStreamProcessor#s3_destination}
  */
  readonly s3Destination?: S3DestinationProperty[] | cdktn.IResolvable;
}
export class OutputPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisDataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStream = this._kinesisDataStream?.internalValue;
    }
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisDataStream.internalValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisDataStream.internalValue = value.kinesisDataStream;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // kinesis_data_stream - computed: false, optional: true, required: false
  private _kinesisDataStream = new KinesisDataStreamPropertyList(this, "kinesis_data_stream", false);
  public get kinesisDataStream() {
    return this._kinesisDataStream;
  }
  public putKinesisDataStream(value: KinesisDataStreamProperty[] | cdktn.IResolvable) {
    this._kinesisDataStream.internalValue = value;
  }
  public resetKinesisDataStream() {
    this._kinesisDataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamInput() {
    return this._kinesisDataStream.internalValue;
  }

  // s3_destination - computed: false, optional: true, required: false
  private _s3Destination = new S3DestinationPropertyList(this, "s3_destination", false);
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: S3DestinationProperty[] | cdktn.IResolvable) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}

export class OutputPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputPropertyOutputReference {
    return new OutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BoundingBoxProperty {
  /**
  * Height of the bounding box as a ratio of the overall image height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#height AwsRekognitionStreamProcessor#height}
  */
  readonly height?: number;
  /**
  * Left coordinate of the bounding box as a ratio of overall image width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#left AwsRekognitionStreamProcessor#left}
  */
  readonly left?: number;
  /**
  * Top coordinate of the bounding box as a ratio of overall image height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#top AwsRekognitionStreamProcessor#top}
  */
  readonly top?: number;
  /**
  * Width of the bounding box as a ratio of the overall image width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#width AwsRekognitionStreamProcessor#width}
  */
  readonly width?: number;
}
export class BoundingBoxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BoundingBoxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoundingBoxProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._width = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class BoundingBoxPropertyList extends cdktn.ComplexList {
  public internalValue? : BoundingBoxProperty[] | cdktn.IResolvable

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
  public get(index: number): BoundingBoxPropertyOutputReference {
    return new BoundingBoxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolygonProperty {
  /**
  * The value of the X coordinate for a point on a Polygon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#x AwsRekognitionStreamProcessor#x}
  */
  readonly x?: number;
  /**
  * The value of the Y coordinate for a point on a Polygon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#y AwsRekognitionStreamProcessor#y}
  */
  readonly y?: number;
}
export class PolygonPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolygonProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolygonProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class PolygonPropertyList extends cdktn.ComplexList {
  public internalValue? : PolygonProperty[] | cdktn.IResolvable

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
  public get(index: number): PolygonPropertyOutputReference {
    return new PolygonPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegionsOfInterestProperty {
  /**
  * bounding_box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#bounding_box AwsRekognitionStreamProcessor#bounding_box}
  */
  readonly boundingBox?: BoundingBoxProperty[] | cdktn.IResolvable;
  /**
  * polygon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#polygon AwsRekognitionStreamProcessor#polygon}
  */
  readonly polygon?: PolygonProperty[] | cdktn.IResolvable;
}
export class RegionsOfInterestPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RegionsOfInterestProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._polygon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polygon = this._polygon?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegionsOfInterestProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._polygon.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._polygon.internalValue = value.polygon;
    }
  }

  // bounding_box - computed: false, optional: true, required: false
  private _boundingBox = new BoundingBoxPropertyList(this, "bounding_box", false);
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BoundingBoxProperty[] | cdktn.IResolvable) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // polygon - computed: false, optional: true, required: false
  private _polygon = new PolygonPropertyList(this, "polygon", false);
  public get polygon() {
    return this._polygon;
  }
  public putPolygon(value: PolygonProperty[] | cdktn.IResolvable) {
    this._polygon.internalValue = value;
  }
  public resetPolygon() {
    this._polygon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polygonInput() {
    return this._polygon.internalValue;
  }
}

export class RegionsOfInterestPropertyList extends cdktn.ComplexList {
  public internalValue? : RegionsOfInterestProperty[] | cdktn.IResolvable

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
  public get(index: number): RegionsOfInterestPropertyOutputReference {
    return new RegionsOfInterestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectedHomeProperty {
  /**
  * Specifies what you want to detect in the video, such as people, packages, or pets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#labels AwsRekognitionStreamProcessor#labels}
  */
  readonly labels?: string[];
  /**
  * The minimum confidence required to label an object in the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#min_confidence AwsRekognitionStreamProcessor#min_confidence}
  */
  readonly minConfidence?: number;
}
export class ConnectedHomePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectedHomeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._minConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.minConfidence = this._minConfidence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectedHomeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._minConfidence = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._minConfidence = value.minConfidence;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // min_confidence - computed: true, optional: true, required: false
  private _minConfidence?: number; 
  public get minConfidence() {
    return this.getNumberAttribute('min_confidence');
  }
  public set minConfidence(value: number) {
    this._minConfidence = value;
  }
  public resetMinConfidence() {
    this._minConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConfidenceInput() {
    return this._minConfidence;
  }
}

export class ConnectedHomePropertyList extends cdktn.ComplexList {
  public internalValue? : ConnectedHomeProperty[] | cdktn.IResolvable

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
  public get(index: number): ConnectedHomePropertyOutputReference {
    return new ConnectedHomePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FaceSearchProperty {
  /**
  * The ID of a collection that contains faces that you want to search for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#collection_id AwsRekognitionStreamProcessor#collection_id}
  */
  readonly collectionId: string;
  /**
  * Minimum face match confidence score that must be met to return a result for a recognized face.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#face_match_threshold AwsRekognitionStreamProcessor#face_match_threshold}
  */
  readonly faceMatchThreshold?: number;
}
export class FaceSearchPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FaceSearchProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._faceMatchThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceMatchThreshold = this._faceMatchThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FaceSearchProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionId = undefined;
      this._faceMatchThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionId = value.collectionId;
      this._faceMatchThreshold = value.faceMatchThreshold;
    }
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // face_match_threshold - computed: true, optional: true, required: false
  private _faceMatchThreshold?: number; 
  public get faceMatchThreshold() {
    return this.getNumberAttribute('face_match_threshold');
  }
  public set faceMatchThreshold(value: number) {
    this._faceMatchThreshold = value;
  }
  public resetFaceMatchThreshold() {
    this._faceMatchThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceMatchThresholdInput() {
    return this._faceMatchThreshold;
  }
}

export class FaceSearchPropertyList extends cdktn.ComplexList {
  public internalValue? : FaceSearchProperty[] | cdktn.IResolvable

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
  public get(index: number): FaceSearchPropertyOutputReference {
    return new FaceSearchPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingsProperty {
  /**
  * connected_home block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#connected_home AwsRekognitionStreamProcessor#connected_home}
  */
  readonly connectedHome?: ConnectedHomeProperty[] | cdktn.IResolvable;
  /**
  * face_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#face_search AwsRekognitionStreamProcessor#face_search}
  */
  readonly faceSearch?: FaceSearchProperty[] | cdktn.IResolvable;
}
export class SettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectedHome?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedHome = this._connectedHome?.internalValue;
    }
    if (this._faceSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceSearch = this._faceSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectedHome.internalValue = undefined;
      this._faceSearch.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectedHome.internalValue = value.connectedHome;
      this._faceSearch.internalValue = value.faceSearch;
    }
  }

  // connected_home - computed: false, optional: true, required: false
  private _connectedHome = new ConnectedHomePropertyList(this, "connected_home", false);
  public get connectedHome() {
    return this._connectedHome;
  }
  public putConnectedHome(value: ConnectedHomeProperty[] | cdktn.IResolvable) {
    this._connectedHome.internalValue = value;
  }
  public resetConnectedHome() {
    this._connectedHome.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedHomeInput() {
    return this._connectedHome.internalValue;
  }

  // face_search - computed: false, optional: true, required: false
  private _faceSearch = new FaceSearchPropertyList(this, "face_search", false);
  public get faceSearch() {
    return this._faceSearch;
  }
  public putFaceSearch(value: FaceSearchProperty[] | cdktn.IResolvable) {
    this._faceSearch.internalValue = value;
  }
  public resetFaceSearch() {
    this._faceSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceSearchInput() {
    return this._faceSearch.internalValue;
  }
}

export class SettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : SettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): SettingsPropertyOutputReference {
    return new SettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#create AwsRekognitionStreamProcessor#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#delete AwsRekognitionStreamProcessor#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rekognition_stream_processor#update AwsRekognitionStreamProcessor#update}
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
