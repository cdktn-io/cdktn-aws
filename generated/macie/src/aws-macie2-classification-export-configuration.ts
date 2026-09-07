// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsClassificationExportConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#id AwsClassificationExportConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#region AwsClassificationExportConfiguration#region}
  */
  readonly region?: string;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#s3_destination AwsClassificationExportConfiguration#s3_destination}
  */
  readonly s3Destination: AwsClassificationExportConfiguration.S3DestinationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration aws_macie2_classification_export_configuration}
*/
export class AwsClassificationExportConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie2_classification_export_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsClassificationExportConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsClassificationExportConfiguration to import
  * @param importFromId The id of the existing AwsClassificationExportConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsClassificationExportConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie2_classification_export_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration aws_macie2_classification_export_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsClassificationExportConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsClassificationExportConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_classification_export_configuration',
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
  private _s3Destination = new AwsClassificationExportConfiguration.S3DestinationPropertyOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: AwsClassificationExportConfiguration.S3DestinationProperty) {
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
      region: cdktn.stringToTerraform(this._region),
      s3_destination: awsClassificationExportConfigurationS3DestinationPropertyToTerraform(this._s3Destination.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_destination: {
        value: awsClassificationExportConfigurationS3DestinationPropertyToHclTerraform(this._s3Destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsClassificationExportConfiguration.S3DestinationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsClassificationExportConfigurationS3DestinationPropertyToTerraform(struct?: AwsClassificationExportConfiguration.S3DestinationPropertyOutputReference | AwsClassificationExportConfiguration.S3DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function awsClassificationExportConfigurationS3DestinationPropertyToHclTerraform(struct?: AwsClassificationExportConfiguration.S3DestinationPropertyOutputReference | AwsClassificationExportConfiguration.S3DestinationProperty): any {
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
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsClassificationExportConfiguration {
export interface S3DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#bucket_name AwsClassificationExportConfiguration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#key_prefix AwsClassificationExportConfiguration#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#kms_key_arn AwsClassificationExportConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn: string;
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
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._keyPrefix = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._keyPrefix = value.keyPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
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

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
}
