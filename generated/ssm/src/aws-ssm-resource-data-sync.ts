// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResourceDataSyncConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#id AwsResourceDataSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#name AwsResourceDataSync#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#region AwsResourceDataSync#region}
  */
  readonly region?: string;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#s3_destination AwsResourceDataSync#s3_destination}
  */
  readonly s3Destination: AwsResourceDataSync.S3DestinationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync aws_ssm_resource_data_sync}
*/
export class AwsResourceDataSync extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_resource_data_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResourceDataSync resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResourceDataSync to import
  * @param importFromId The id of the existing AwsResourceDataSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResourceDataSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_resource_data_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync aws_ssm_resource_data_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResourceDataSyncConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResourceDataSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_resource_data_sync',
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
    this._s3Destination.internalValue = config.s3Destination;
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

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination = new AwsResourceDataSync.S3DestinationPropertyOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: AwsResourceDataSync.S3DestinationProperty) {
    this._s3Destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      s3_destination: awsResourceDataSyncS3DestinationPropertyToTerraform(this._s3Destination.internalValue),
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
      s3_destination: {
        value: awsResourceDataSyncS3DestinationPropertyToHclTerraform(this._s3Destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResourceDataSync.S3DestinationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResourceDataSyncDestinationDataSharingPropertyToTerraform(struct?: AwsResourceDataSync.DestinationDataSharingPropertyOutputReference | AwsResourceDataSync.DestinationDataSharingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_data_sharing_type: cdktn.stringToTerraform(struct!.destinationDataSharingType),
  }
}


export function awsResourceDataSyncDestinationDataSharingPropertyToHclTerraform(struct?: AwsResourceDataSync.DestinationDataSharingPropertyOutputReference | AwsResourceDataSync.DestinationDataSharingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_data_sharing_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationDataSharingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceDataSyncS3DestinationPropertyToTerraform(struct?: AwsResourceDataSync.S3DestinationPropertyOutputReference | AwsResourceDataSync.S3DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    region: cdktn.stringToTerraform(struct!.region),
    sync_format: cdktn.stringToTerraform(struct!.syncFormat),
    destination_data_sharing: awsResourceDataSyncDestinationDataSharingPropertyToTerraform(struct!.destinationDataSharing),
  }
}


export function awsResourceDataSyncS3DestinationPropertyToHclTerraform(struct?: AwsResourceDataSync.S3DestinationPropertyOutputReference | AwsResourceDataSync.S3DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_format: {
      value: cdktn.stringToHclTerraform(struct!.syncFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_sharing: {
      value: awsResourceDataSyncDestinationDataSharingPropertyToHclTerraform(struct!.destinationDataSharing),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationDataSharingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsResourceDataSync {
export interface DestinationDataSharingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#destination_data_sharing_type AwsResourceDataSync#destination_data_sharing_type}
  */
  readonly destinationDataSharingType?: string;
}
export class DestinationDataSharingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationDataSharingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDataSharingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataSharingType = this._destinationDataSharingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDataSharingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationDataSharingType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationDataSharingType = value.destinationDataSharingType;
    }
  }

  // destination_data_sharing_type - computed: false, optional: true, required: false
  private _destinationDataSharingType?: string; 
  public get destinationDataSharingType() {
    return this.getStringAttribute('destination_data_sharing_type');
  }
  public set destinationDataSharingType(value: string) {
    this._destinationDataSharingType = value;
  }
  public resetDestinationDataSharingType() {
    this._destinationDataSharingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataSharingTypeInput() {
    return this._destinationDataSharingType;
  }
}
export interface S3DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#bucket_name AwsResourceDataSync#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#kms_key_arn AwsResourceDataSync#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#prefix AwsResourceDataSync#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#region AwsResourceDataSync#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#sync_format AwsResourceDataSync#sync_format}
  */
  readonly syncFormat?: string;
  /**
  * destination_data_sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_resource_data_sync#destination_data_sharing AwsResourceDataSync#destination_data_sharing}
  */
  readonly destinationDataSharing?: DestinationDataSharingProperty;
}
export class S3DestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3DestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._syncFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncFormat = this._syncFormat;
    }
    if (this._destinationDataSharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataSharing = this._destinationDataSharing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._region = undefined;
      this._syncFormat = undefined;
      this._destinationDataSharing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._region = value.region;
      this._syncFormat = value.syncFormat;
      this._destinationDataSharing.internalValue = value.destinationDataSharing;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sync_format - computed: false, optional: true, required: false
  private _syncFormat?: string; 
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }
  public set syncFormat(value: string) {
    this._syncFormat = value;
  }
  public resetSyncFormat() {
    this._syncFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFormatInput() {
    return this._syncFormat;
  }

  // destination_data_sharing - computed: false, optional: true, required: false
  private _destinationDataSharing = new DestinationDataSharingPropertyOutputReference(this, "destination_data_sharing");
  public get destinationDataSharing() {
    return this._destinationDataSharing;
  }
  public putDestinationDataSharing(value: DestinationDataSharingProperty) {
    this._destinationDataSharing.internalValue = value;
  }
  public resetDestinationDataSharing() {
    this._destinationDataSharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataSharingInput() {
    return this._destinationDataSharing.internalValue;
  }
}
}
