// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBucketAbacConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#bucket AwsBucketAbac#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#expected_bucket_owner AwsBucketAbac#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#region AwsBucketAbac#region}
  */
  readonly region?: string;
  /**
  * abac_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#abac_status AwsBucketAbac#abac_status}
  */
  readonly abacStatus?: AwsBucketAbac.AbacStatusProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac aws_s3_bucket_abac}
*/
export class AwsBucketAbac extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_abac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBucketAbac resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBucketAbac to import
  * @param importFromId The id of the existing AwsBucketAbac that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBucketAbac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_abac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac aws_s3_bucket_abac} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBucketAbacConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBucketAbacConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_abac',
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
    this._region = config.region;
    this._abacStatus.internalValue = config.abacStatus;
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

  // abac_status - computed: false, optional: true, required: false
  private _abacStatus = new AwsBucketAbac.AbacStatusPropertyList(this, "abac_status", false);
  public get abacStatus() {
    return this._abacStatus;
  }
  public putAbacStatus(value: AwsBucketAbac.AbacStatusProperty[] | cdktn.IResolvable) {
    this._abacStatus.internalValue = value;
  }
  public resetAbacStatus() {
    this._abacStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abacStatusInput() {
    return this._abacStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
      region: cdktn.stringToTerraform(this._region),
      abac_status: cdktn.listMapper(awsBucketAbacAbacStatusPropertyToTerraform, true)(this._abacStatus.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      abac_status: {
        value: cdktn.listMapperHcl(awsBucketAbacAbacStatusPropertyToHclTerraform, true)(this._abacStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBucketAbac.AbacStatusPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBucketAbacAbacStatusPropertyToTerraform(struct?: AwsBucketAbac.AbacStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsBucketAbacAbacStatusPropertyToHclTerraform(struct?: AwsBucketAbac.AbacStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export namespace AwsBucketAbac {
export interface AbacStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_abac#status AwsBucketAbac#status}
  */
  readonly status: string;
}
export class AbacStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AbacStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AbacStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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

export class AbacStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : AbacStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): AbacStatusPropertyOutputReference {
    return new AbacStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
