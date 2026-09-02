// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfBucketVersioningConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#bucket TfBucketVersioning#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#expected_bucket_owner TfBucketVersioning#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#id TfBucketVersioning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#mfa TfBucketVersioning#mfa}
  */
  readonly mfa?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#region TfBucketVersioning#region}
  */
  readonly region?: string;
  /**
  * versioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#versioning_configuration TfBucketVersioning#versioning_configuration}
  */
  readonly versioningConfiguration: TfBucketVersioning.VersioningConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning aws_s3_bucket_versioning}
*/
export class TfBucketVersioning extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_versioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfBucketVersioning resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfBucketVersioning to import
  * @param importFromId The id of the existing TfBucketVersioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfBucketVersioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_versioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning aws_s3_bucket_versioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfBucketVersioningConfig
  */
  public constructor(scope: Construct, id: string, config: TfBucketVersioningConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_versioning',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._mfa = config.mfa;
    this._region = config.region;
    this._versioningConfiguration.internalValue = config.versioningConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
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

  // mfa - computed: false, optional: true, required: false
  private _mfa?: string; 
  public get mfa() {
    return this.getStringAttribute('mfa');
  }
  public set mfa(value: string) {
    this._mfa = value;
  }
  public resetMfa() {
    this._mfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa;
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

  // versioning_configuration - computed: false, optional: false, required: true
  private _versioningConfiguration = new TfBucketVersioning.VersioningConfigurationPropertyOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }
  public putVersioningConfiguration(value: TfBucketVersioning.VersioningConfigurationProperty) {
    this._versioningConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningConfigurationInput() {
    return this._versioningConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
      id: cdktn.stringToTerraform(this._id),
      mfa: cdktn.stringToTerraform(this._mfa),
      region: cdktn.stringToTerraform(this._region),
      versioning_configuration: tfBucketVersioningVersioningConfigurationPropertyToTerraform(this._versioningConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_bucket_owner: {
        value: cdktn.stringToHclTerraform(this._expectedBucketOwner),
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
      mfa: {
        value: cdktn.stringToHclTerraform(this._mfa),
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
      versioning_configuration: {
        value: tfBucketVersioningVersioningConfigurationPropertyToHclTerraform(this._versioningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBucketVersioning.VersioningConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfBucketVersioningVersioningConfigurationPropertyToTerraform(struct?: TfBucketVersioning.VersioningConfigurationPropertyOutputReference | TfBucketVersioning.VersioningConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mfa_delete: cdktn.stringToTerraform(struct!.mfaDelete),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfBucketVersioningVersioningConfigurationPropertyToHclTerraform(struct?: TfBucketVersioning.VersioningConfigurationPropertyOutputReference | TfBucketVersioning.VersioningConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mfa_delete: {
      value: cdktn.stringToHclTerraform(struct!.mfaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfBucketVersioning {
export interface VersioningConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#mfa_delete TfBucketVersioning#mfa_delete}
  */
  readonly mfaDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_versioning#status TfBucketVersioning#status}
  */
  readonly status: string;
}
export class VersioningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VersioningConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaDelete = this._mfaDelete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VersioningConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mfaDelete = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mfaDelete = value.mfaDelete;
      this._status = value.status;
    }
  }

  // mfa_delete - computed: true, optional: true, required: false
  private _mfaDelete?: string; 
  public get mfaDelete() {
    return this.getStringAttribute('mfa_delete');
  }
  public set mfaDelete(value: string) {
    this._mfaDelete = value;
  }
  public resetMfaDelete() {
    this._mfaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaDeleteInput() {
    return this._mfaDelete;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
}
