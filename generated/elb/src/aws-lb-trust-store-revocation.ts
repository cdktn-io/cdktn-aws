// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsLbTrustStoreRevocationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#id AwsLbTrustStoreRevocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#region AwsLbTrustStoreRevocation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket AwsLbTrustStoreRevocation#revocations_s3_bucket}
  */
  readonly revocationsS3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#revocations_s3_key AwsLbTrustStoreRevocation#revocations_s3_key}
  */
  readonly revocationsS3Key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version AwsLbTrustStoreRevocation#revocations_s3_object_version}
  */
  readonly revocationsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#trust_store_arn AwsLbTrustStoreRevocation#trust_store_arn}
  */
  readonly trustStoreArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#timeouts AwsLbTrustStoreRevocation#timeouts}
  */
  readonly timeouts?: AwsLbTrustStoreRevocation.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}
*/
export class AwsLbTrustStoreRevocation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_trust_store_revocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsLbTrustStoreRevocation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLbTrustStoreRevocation to import
  * @param importFromId The id of the existing AwsLbTrustStoreRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLbTrustStoreRevocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_trust_store_revocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLbTrustStoreRevocationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLbTrustStoreRevocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_trust_store_revocation',
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
    this._revocationsS3Bucket = config.revocationsS3Bucket;
    this._revocationsS3Key = config.revocationsS3Key;
    this._revocationsS3ObjectVersion = config.revocationsS3ObjectVersion;
    this._trustStoreArn = config.trustStoreArn;
    this._timeouts.internalValue = config.timeouts;
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

  // revocation_id - computed: true, optional: false, required: false
  public get revocationId() {
    return this.getNumberAttribute('revocation_id');
  }

  // revocations_s3_bucket - computed: false, optional: false, required: true
  private _revocationsS3Bucket?: string; 
  public get revocationsS3Bucket() {
    return this.getStringAttribute('revocations_s3_bucket');
  }
  public set revocationsS3Bucket(value: string) {
    this._revocationsS3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3BucketInput() {
    return this._revocationsS3Bucket;
  }

  // revocations_s3_key - computed: false, optional: false, required: true
  private _revocationsS3Key?: string; 
  public get revocationsS3Key() {
    return this.getStringAttribute('revocations_s3_key');
  }
  public set revocationsS3Key(value: string) {
    this._revocationsS3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3KeyInput() {
    return this._revocationsS3Key;
  }

  // revocations_s3_object_version - computed: false, optional: true, required: false
  private _revocationsS3ObjectVersion?: string; 
  public get revocationsS3ObjectVersion() {
    return this.getStringAttribute('revocations_s3_object_version');
  }
  public set revocationsS3ObjectVersion(value: string) {
    this._revocationsS3ObjectVersion = value;
  }
  public resetRevocationsS3ObjectVersion() {
    this._revocationsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3ObjectVersionInput() {
    return this._revocationsS3ObjectVersion;
  }

  // trust_store_arn - computed: false, optional: false, required: true
  private _trustStoreArn?: string; 
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
  public set trustStoreArn(value: string) {
    this._trustStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreArnInput() {
    return this._trustStoreArn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLbTrustStoreRevocation.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLbTrustStoreRevocation.TimeoutsProperty) {
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
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      revocations_s3_bucket: cdktn.stringToTerraform(this._revocationsS3Bucket),
      revocations_s3_key: cdktn.stringToTerraform(this._revocationsS3Key),
      revocations_s3_object_version: cdktn.stringToTerraform(this._revocationsS3ObjectVersion),
      trust_store_arn: cdktn.stringToTerraform(this._trustStoreArn),
      timeouts: awsLbTrustStoreRevocationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      revocations_s3_bucket: {
        value: cdktn.stringToHclTerraform(this._revocationsS3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocations_s3_key: {
        value: cdktn.stringToHclTerraform(this._revocationsS3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocations_s3_object_version: {
        value: cdktn.stringToHclTerraform(this._revocationsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_arn: {
        value: cdktn.stringToHclTerraform(this._trustStoreArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: awsLbTrustStoreRevocationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLbTrustStoreRevocation.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsLbTrustStoreRevocationTimeoutsPropertyToTerraform(struct?: AwsLbTrustStoreRevocation.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function awsLbTrustStoreRevocationTimeoutsPropertyToHclTerraform(struct?: AwsLbTrustStoreRevocation.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsLbTrustStoreRevocation {
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_trust_store_revocation#create AwsLbTrustStoreRevocation#create}
  */
  readonly create?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
}
