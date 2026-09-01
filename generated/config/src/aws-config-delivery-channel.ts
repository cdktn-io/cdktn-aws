// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsConfigDeliveryChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#id AwsConfigDeliveryChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#name AwsConfigDeliveryChannel#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#region AwsConfigDeliveryChannel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#s3_bucket_name AwsConfigDeliveryChannel#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#s3_key_prefix AwsConfigDeliveryChannel#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#s3_kms_key_arn AwsConfigDeliveryChannel#s3_kms_key_arn}
  */
  readonly s3KmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#sns_topic_arn AwsConfigDeliveryChannel#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * snapshot_delivery_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#snapshot_delivery_properties AwsConfigDeliveryChannel#snapshot_delivery_properties}
  */
  readonly snapshotDeliveryProperties?: AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel aws_config_delivery_channel}
*/
export class AwsConfigDeliveryChannel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_delivery_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConfigDeliveryChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConfigDeliveryChannel to import
  * @param importFromId The id of the existing AwsConfigDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConfigDeliveryChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_delivery_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel aws_config_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConfigDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConfigDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_delivery_channel',
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
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._s3KmsKeyArn = config.s3KmsKeyArn;
    this._snsTopicArn = config.snsTopicArn;
    this._snapshotDeliveryProperties.internalValue = config.snapshotDeliveryProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
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

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // s3_kms_key_arn - computed: false, optional: true, required: false
  private _s3KmsKeyArn?: string; 
  public get s3KmsKeyArn() {
    return this.getStringAttribute('s3_kms_key_arn');
  }
  public set s3KmsKeyArn(value: string) {
    this._s3KmsKeyArn = value;
  }
  public resetS3KmsKeyArn() {
    this._s3KmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyArnInput() {
    return this._s3KmsKeyArn;
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

  // snapshot_delivery_properties - computed: false, optional: true, required: false
  private _snapshotDeliveryProperties = new AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesPropertyOutputReference(this, "snapshot_delivery_properties");
  public get snapshotDeliveryProperties() {
    return this._snapshotDeliveryProperties;
  }
  public putSnapshotDeliveryProperties(value: AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesProperty) {
    this._snapshotDeliveryProperties.internalValue = value;
  }
  public resetSnapshotDeliveryProperties() {
    this._snapshotDeliveryProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDeliveryPropertiesInput() {
    return this._snapshotDeliveryProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      s3_bucket_name: cdktn.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktn.stringToTerraform(this._s3KeyPrefix),
      s3_kms_key_arn: cdktn.stringToTerraform(this._s3KmsKeyArn),
      sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
      snapshot_delivery_properties: awsConfigDeliveryChannelSnapshotDeliveryPropertiesPropertyToTerraform(this._snapshotDeliveryProperties.internalValue),
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
      s3_bucket_name: {
        value: cdktn.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktn.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._s3KmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktn.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_delivery_properties: {
        value: awsConfigDeliveryChannelSnapshotDeliveryPropertiesPropertyToHclTerraform(this._snapshotDeliveryProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsConfigDeliveryChannelSnapshotDeliveryPropertiesPropertyToTerraform(struct?: AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesPropertyOutputReference | AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_frequency: cdktn.stringToTerraform(struct!.deliveryFrequency),
  }
}


export function awsConfigDeliveryChannelSnapshotDeliveryPropertiesPropertyToHclTerraform(struct?: AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesPropertyOutputReference | AwsConfigDeliveryChannel.SnapshotDeliveryPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_frequency: {
      value: cdktn.stringToHclTerraform(struct!.deliveryFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsConfigDeliveryChannel {
export interface SnapshotDeliveryPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_delivery_channel#delivery_frequency AwsConfigDeliveryChannel#delivery_frequency}
  */
  readonly deliveryFrequency?: string;
}
export class SnapshotDeliveryPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnapshotDeliveryPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryFrequency = this._deliveryFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotDeliveryPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryFrequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryFrequency = value.deliveryFrequency;
    }
  }

  // delivery_frequency - computed: false, optional: true, required: false
  private _deliveryFrequency?: string; 
  public get deliveryFrequency() {
    return this.getStringAttribute('delivery_frequency');
  }
  public set deliveryFrequency(value: string) {
    this._deliveryFrequency = value;
  }
  public resetDeliveryFrequency() {
    this._deliveryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryFrequencyInput() {
    return this._deliveryFrequency;
  }
}
}
