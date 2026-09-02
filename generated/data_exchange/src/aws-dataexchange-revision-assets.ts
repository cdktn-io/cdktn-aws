// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRevisionAssetsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#comment TfRevisionAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#data_set_id TfRevisionAssets#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#finalized TfRevisionAssets#finalized}
  */
  readonly finalized?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#force_destroy TfRevisionAssets#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#region TfRevisionAssets#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#tags TfRevisionAssets#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#asset TfRevisionAssets#asset}
  */
  readonly asset?: TfRevisionAssets.AssetProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#timeouts TfRevisionAssets#timeouts}
  */
  readonly timeouts?: TfRevisionAssets.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets}
*/
export class TfRevisionAssets extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dataexchange_revision_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRevisionAssets resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRevisionAssets to import
  * @param importFromId The id of the existing TfRevisionAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRevisionAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dataexchange_revision_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRevisionAssetsConfig
  */
  public constructor(scope: Construct, id: string, config: TfRevisionAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dataexchange_revision_assets',
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
    this._comment = config.comment;
    this._dataSetId = config.dataSetId;
    this._finalized = config.finalized;
    this._forceDestroy = config.forceDestroy;
    this._region = config.region;
    this._tags = config.tags;
    this._asset.internalValue = config.asset;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

  // finalized - computed: true, optional: true, required: false
  private _finalized?: boolean | cdktn.IResolvable; 
  public get finalized() {
    return this.getBooleanAttribute('finalized');
  }
  public set finalized(value: boolean | cdktn.IResolvable) {
    this._finalized = value;
  }
  public resetFinalized() {
    this._finalized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizedInput() {
    return this._finalized;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // asset - computed: false, optional: true, required: false
  private _asset = new TfRevisionAssets.AssetPropertyList(this, "asset", true);
  public get asset() {
    return this._asset;
  }
  public putAsset(value: TfRevisionAssets.AssetProperty[] | cdktn.IResolvable) {
    this._asset.internalValue = value;
  }
  public resetAsset() {
    this._asset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfRevisionAssets.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfRevisionAssets.TimeoutsProperty) {
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
      comment: cdktn.stringToTerraform(this._comment),
      data_set_id: cdktn.stringToTerraform(this._dataSetId),
      finalized: cdktn.booleanToTerraform(this._finalized),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      asset: cdktn.listMapper(tfRevisionAssetsAssetPropertyToTerraform, true)(this._asset.internalValue),
      timeouts: tfRevisionAssetsTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_set_id: {
        value: cdktn.stringToHclTerraform(this._dataSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finalized: {
        value: cdktn.booleanToHclTerraform(this._finalized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
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
      asset: {
        value: cdktn.listMapperHcl(tfRevisionAssetsAssetPropertyToHclTerraform, true)(this._asset.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfRevisionAssets.AssetPropertyList",
      },
      timeouts: {
        value: tfRevisionAssetsTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfRevisionAssets.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRevisionAssetsKmsKeysToGrantPropertyToTerraform(struct?: TfRevisionAssets.KmsKeysToGrantProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfRevisionAssetsKmsKeysToGrantPropertyToHclTerraform(struct?: TfRevisionAssets.KmsKeysToGrantProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourcePropertyToTerraform(struct?: TfRevisionAssets.AssetCreateS3DataAccessFromS3BucketAssetSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keys),
    kms_keys_to_grant: cdktn.listMapper(tfRevisionAssetsKmsKeysToGrantPropertyToTerraform, true)(struct!.kmsKeysToGrant),
  }
}


export function tfRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourcePropertyToHclTerraform(struct?: TfRevisionAssets.AssetCreateS3DataAccessFromS3BucketAssetSourceProperty | cdktn.IResolvable): any {
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
    key_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kms_keys_to_grant: {
      value: cdktn.listMapperHcl(tfRevisionAssetsKmsKeysToGrantPropertyToHclTerraform, true)(struct!.kmsKeysToGrant),
      isBlock: true,
      type: "list",
      storageClassType: "KmsKeysToGrantPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsCreateS3DataAccessFromS3BucketPropertyToTerraform(struct?: TfRevisionAssets.CreateS3DataAccessFromS3BucketProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_source: cdktn.listMapper(tfRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourcePropertyToTerraform, true)(struct!.assetSource),
  }
}


export function tfRevisionAssetsCreateS3DataAccessFromS3BucketPropertyToHclTerraform(struct?: TfRevisionAssets.CreateS3DataAccessFromS3BucketProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_source: {
      value: cdktn.listMapperHcl(tfRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourcePropertyToHclTerraform, true)(struct!.assetSource),
      isBlock: true,
      type: "list",
      storageClassType: "AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsAssetImportAssetsFromS3AssetSourcePropertyToTerraform(struct?: TfRevisionAssets.AssetImportAssetsFromS3AssetSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function tfRevisionAssetsAssetImportAssetsFromS3AssetSourcePropertyToHclTerraform(struct?: TfRevisionAssets.AssetImportAssetsFromS3AssetSourceProperty | cdktn.IResolvable): any {
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
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsImportAssetsFromS3PropertyToTerraform(struct?: TfRevisionAssets.ImportAssetsFromS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_source: cdktn.listMapper(tfRevisionAssetsAssetImportAssetsFromS3AssetSourcePropertyToTerraform, true)(struct!.assetSource),
  }
}


export function tfRevisionAssetsImportAssetsFromS3PropertyToHclTerraform(struct?: TfRevisionAssets.ImportAssetsFromS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_source: {
      value: cdktn.listMapperHcl(tfRevisionAssetsAssetImportAssetsFromS3AssetSourcePropertyToHclTerraform, true)(struct!.assetSource),
      isBlock: true,
      type: "list",
      storageClassType: "AssetImportAssetsFromS3AssetSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsImportAssetsFromSignedUrlPropertyToTerraform(struct?: TfRevisionAssets.ImportAssetsFromSignedUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filename: cdktn.stringToTerraform(struct!.filename),
  }
}


export function tfRevisionAssetsImportAssetsFromSignedUrlPropertyToHclTerraform(struct?: TfRevisionAssets.ImportAssetsFromSignedUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsAssetPropertyToTerraform(struct?: TfRevisionAssets.AssetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_s3_data_access_from_s3_bucket: cdktn.listMapper(tfRevisionAssetsCreateS3DataAccessFromS3BucketPropertyToTerraform, true)(struct!.createS3DataAccessFromS3Bucket),
    import_assets_from_s3: cdktn.listMapper(tfRevisionAssetsImportAssetsFromS3PropertyToTerraform, true)(struct!.importAssetsFromS3),
    import_assets_from_signed_url: cdktn.listMapper(tfRevisionAssetsImportAssetsFromSignedUrlPropertyToTerraform, true)(struct!.importAssetsFromSignedUrl),
  }
}


export function tfRevisionAssetsAssetPropertyToHclTerraform(struct?: TfRevisionAssets.AssetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_s3_data_access_from_s3_bucket: {
      value: cdktn.listMapperHcl(tfRevisionAssetsCreateS3DataAccessFromS3BucketPropertyToHclTerraform, true)(struct!.createS3DataAccessFromS3Bucket),
      isBlock: true,
      type: "list",
      storageClassType: "CreateS3DataAccessFromS3BucketPropertyList",
    },
    import_assets_from_s3: {
      value: cdktn.listMapperHcl(tfRevisionAssetsImportAssetsFromS3PropertyToHclTerraform, true)(struct!.importAssetsFromS3),
      isBlock: true,
      type: "list",
      storageClassType: "ImportAssetsFromS3PropertyList",
    },
    import_assets_from_signed_url: {
      value: cdktn.listMapperHcl(tfRevisionAssetsImportAssetsFromSignedUrlPropertyToHclTerraform, true)(struct!.importAssetsFromSignedUrl),
      isBlock: true,
      type: "list",
      storageClassType: "ImportAssetsFromSignedUrlPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRevisionAssetsTimeoutsPropertyToTerraform(struct?: TfRevisionAssets.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function tfRevisionAssetsTimeoutsPropertyToHclTerraform(struct?: TfRevisionAssets.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfRevisionAssets {
export interface KmsKeysToGrantProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#kms_key_arn TfRevisionAssets#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}
export class KmsKeysToGrantPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsKeysToGrantProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeysToGrantProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
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

export class KmsKeysToGrantPropertyList extends cdktn.ComplexList {
  public internalValue? : KmsKeysToGrantProperty[] | cdktn.IResolvable

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
  public get(index: number): KmsKeysToGrantPropertyOutputReference {
    return new KmsKeysToGrantPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetCreateS3DataAccessFromS3BucketAssetSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#bucket TfRevisionAssets#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#key_prefixes TfRevisionAssets#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#keys TfRevisionAssets#keys}
  */
  readonly keys?: string[];
  /**
  * kms_keys_to_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#kms_keys_to_grant TfRevisionAssets#kms_keys_to_grant}
  */
  readonly kmsKeysToGrant?: KmsKeysToGrantProperty[] | cdktn.IResolvable;
}
export class AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AssetCreateS3DataAccessFromS3BucketAssetSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixes = this._keyPrefixes;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._kmsKeysToGrant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeysToGrant = this._kmsKeysToGrant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetCreateS3DataAccessFromS3BucketAssetSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefixes = undefined;
      this._keys = undefined;
      this._kmsKeysToGrant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefixes = value.keyPrefixes;
      this._keys = value.keys;
      this._kmsKeysToGrant.internalValue = value.kmsKeysToGrant;
    }
  }

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

  // key_prefixes - computed: false, optional: true, required: false
  private _keyPrefixes?: string[]; 
  public get keyPrefixes() {
    return cdktn.Fn.tolist(this.getListAttribute('key_prefixes'));
  }
  public set keyPrefixes(value: string[]) {
    this._keyPrefixes = value;
  }
  public resetKeyPrefixes() {
    this._keyPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixesInput() {
    return this._keyPrefixes;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktn.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // kms_keys_to_grant - computed: false, optional: true, required: false
  private _kmsKeysToGrant = new KmsKeysToGrantPropertyList(this, "kms_keys_to_grant", false);
  public get kmsKeysToGrant() {
    return this._kmsKeysToGrant;
  }
  public putKmsKeysToGrant(value: KmsKeysToGrantProperty[] | cdktn.IResolvable) {
    this._kmsKeysToGrant.internalValue = value;
  }
  public resetKmsKeysToGrant() {
    this._kmsKeysToGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeysToGrantInput() {
    return this._kmsKeysToGrant.internalValue;
  }
}

export class AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AssetCreateS3DataAccessFromS3BucketAssetSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyOutputReference {
    return new AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateS3DataAccessFromS3BucketProperty {
  /**
  * asset_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#asset_source TfRevisionAssets#asset_source}
  */
  readonly assetSource?: AssetCreateS3DataAccessFromS3BucketAssetSourceProperty[] | cdktn.IResolvable;
}
export class CreateS3DataAccessFromS3BucketPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CreateS3DataAccessFromS3BucketProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetSource = this._assetSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateS3DataAccessFromS3BucketProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = value.assetSource;
    }
  }

  // access_point_alias - computed: true, optional: false, required: false
  public get accessPointAlias() {
    return this.getStringAttribute('access_point_alias');
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // asset_source - computed: false, optional: true, required: false
  private _assetSource = new AssetCreateS3DataAccessFromS3BucketAssetSourcePropertyList(this, "asset_source", false);
  public get assetSource() {
    return this._assetSource;
  }
  public putAssetSource(value: AssetCreateS3DataAccessFromS3BucketAssetSourceProperty[] | cdktn.IResolvable) {
    this._assetSource.internalValue = value;
  }
  public resetAssetSource() {
    this._assetSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceInput() {
    return this._assetSource.internalValue;
  }
}

export class CreateS3DataAccessFromS3BucketPropertyList extends cdktn.ComplexList {
  public internalValue? : CreateS3DataAccessFromS3BucketProperty[] | cdktn.IResolvable

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
  public get(index: number): CreateS3DataAccessFromS3BucketPropertyOutputReference {
    return new CreateS3DataAccessFromS3BucketPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetImportAssetsFromS3AssetSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#bucket TfRevisionAssets#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#key TfRevisionAssets#key}
  */
  readonly key: string;
}
export class AssetImportAssetsFromS3AssetSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AssetImportAssetsFromS3AssetSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetImportAssetsFromS3AssetSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class AssetImportAssetsFromS3AssetSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AssetImportAssetsFromS3AssetSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AssetImportAssetsFromS3AssetSourcePropertyOutputReference {
    return new AssetImportAssetsFromS3AssetSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImportAssetsFromS3Property {
  /**
  * asset_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#asset_source TfRevisionAssets#asset_source}
  */
  readonly assetSource?: AssetImportAssetsFromS3AssetSourceProperty[] | cdktn.IResolvable;
}
export class ImportAssetsFromS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImportAssetsFromS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetSource = this._assetSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportAssetsFromS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = value.assetSource;
    }
  }

  // asset_source - computed: false, optional: true, required: false
  private _assetSource = new AssetImportAssetsFromS3AssetSourcePropertyList(this, "asset_source", false);
  public get assetSource() {
    return this._assetSource;
  }
  public putAssetSource(value: AssetImportAssetsFromS3AssetSourceProperty[] | cdktn.IResolvable) {
    this._assetSource.internalValue = value;
  }
  public resetAssetSource() {
    this._assetSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceInput() {
    return this._assetSource.internalValue;
  }
}

export class ImportAssetsFromS3PropertyList extends cdktn.ComplexList {
  public internalValue? : ImportAssetsFromS3Property[] | cdktn.IResolvable

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
  public get(index: number): ImportAssetsFromS3PropertyOutputReference {
    return new ImportAssetsFromS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImportAssetsFromSignedUrlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#filename TfRevisionAssets#filename}
  */
  readonly filename: string;
}
export class ImportAssetsFromSignedUrlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImportAssetsFromSignedUrlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportAssetsFromSignedUrlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}

export class ImportAssetsFromSignedUrlPropertyList extends cdktn.ComplexList {
  public internalValue? : ImportAssetsFromSignedUrlProperty[] | cdktn.IResolvable

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
  public get(index: number): ImportAssetsFromSignedUrlPropertyOutputReference {
    return new ImportAssetsFromSignedUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetProperty {
  /**
  * create_s3_data_access_from_s3_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#create_s3_data_access_from_s3_bucket TfRevisionAssets#create_s3_data_access_from_s3_bucket}
  */
  readonly createS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketProperty[] | cdktn.IResolvable;
  /**
  * import_assets_from_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#import_assets_from_s3 TfRevisionAssets#import_assets_from_s3}
  */
  readonly importAssetsFromS3?: ImportAssetsFromS3Property[] | cdktn.IResolvable;
  /**
  * import_assets_from_signed_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#import_assets_from_signed_url TfRevisionAssets#import_assets_from_signed_url}
  */
  readonly importAssetsFromSignedUrl?: ImportAssetsFromSignedUrlProperty[] | cdktn.IResolvable;
}
export class AssetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AssetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createS3DataAccessFromS3Bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createS3DataAccessFromS3Bucket = this._createS3DataAccessFromS3Bucket?.internalValue;
    }
    if (this._importAssetsFromS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importAssetsFromS3 = this._importAssetsFromS3?.internalValue;
    }
    if (this._importAssetsFromSignedUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importAssetsFromSignedUrl = this._importAssetsFromSignedUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createS3DataAccessFromS3Bucket.internalValue = undefined;
      this._importAssetsFromS3.internalValue = undefined;
      this._importAssetsFromSignedUrl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createS3DataAccessFromS3Bucket.internalValue = value.createS3DataAccessFromS3Bucket;
      this._importAssetsFromS3.internalValue = value.importAssetsFromS3;
      this._importAssetsFromSignedUrl.internalValue = value.importAssetsFromSignedUrl;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // create_s3_data_access_from_s3_bucket - computed: false, optional: true, required: false
  private _createS3DataAccessFromS3Bucket = new CreateS3DataAccessFromS3BucketPropertyList(this, "create_s3_data_access_from_s3_bucket", false);
  public get createS3DataAccessFromS3Bucket() {
    return this._createS3DataAccessFromS3Bucket;
  }
  public putCreateS3DataAccessFromS3Bucket(value: CreateS3DataAccessFromS3BucketProperty[] | cdktn.IResolvable) {
    this._createS3DataAccessFromS3Bucket.internalValue = value;
  }
  public resetCreateS3DataAccessFromS3Bucket() {
    this._createS3DataAccessFromS3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createS3DataAccessFromS3BucketInput() {
    return this._createS3DataAccessFromS3Bucket.internalValue;
  }

  // import_assets_from_s3 - computed: false, optional: true, required: false
  private _importAssetsFromS3 = new ImportAssetsFromS3PropertyList(this, "import_assets_from_s3", false);
  public get importAssetsFromS3() {
    return this._importAssetsFromS3;
  }
  public putImportAssetsFromS3(value: ImportAssetsFromS3Property[] | cdktn.IResolvable) {
    this._importAssetsFromS3.internalValue = value;
  }
  public resetImportAssetsFromS3() {
    this._importAssetsFromS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAssetsFromS3Input() {
    return this._importAssetsFromS3.internalValue;
  }

  // import_assets_from_signed_url - computed: false, optional: true, required: false
  private _importAssetsFromSignedUrl = new ImportAssetsFromSignedUrlPropertyList(this, "import_assets_from_signed_url", false);
  public get importAssetsFromSignedUrl() {
    return this._importAssetsFromSignedUrl;
  }
  public putImportAssetsFromSignedUrl(value: ImportAssetsFromSignedUrlProperty[] | cdktn.IResolvable) {
    this._importAssetsFromSignedUrl.internalValue = value;
  }
  public resetImportAssetsFromSignedUrl() {
    this._importAssetsFromSignedUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAssetsFromSignedUrlInput() {
    return this._importAssetsFromSignedUrl.internalValue;
  }
}

export class AssetPropertyList extends cdktn.ComplexList {
  public internalValue? : AssetProperty[] | cdktn.IResolvable

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
  public get(index: number): AssetPropertyOutputReference {
    return new AssetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/dataexchange_revision_assets#create TfRevisionAssets#create}
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
