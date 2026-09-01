// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontFieldLevelEncryptionConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#comment AwsCloudfrontFieldLevelEncryptionConfig#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#id AwsCloudfrontFieldLevelEncryptionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * content_type_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config AwsCloudfrontFieldLevelEncryptionConfig#content_type_profile_config}
  */
  readonly contentTypeProfileConfig: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty;
  /**
  * query_arg_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config AwsCloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}
  */
  readonly queryArgProfileConfig: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}
*/
export class AwsCloudfrontFieldLevelEncryptionConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_field_level_encryption_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontFieldLevelEncryptionConfig to import
  * @param importFromId The id of the existing AwsCloudfrontFieldLevelEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontFieldLevelEncryptionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_field_level_encryption_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontFieldLevelEncryptionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontFieldLevelEncryptionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
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
    this._id = config.id;
    this._contentTypeProfileConfig.internalValue = config.contentTypeProfileConfig;
    this._queryArgProfileConfig.internalValue = config.queryArgProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // content_type_profile_config - computed: false, optional: false, required: true
  private _contentTypeProfileConfig = new AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigPropertyOutputReference(this, "content_type_profile_config");
  public get contentTypeProfileConfig() {
    return this._contentTypeProfileConfig;
  }
  public putContentTypeProfileConfig(value: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty) {
    this._contentTypeProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfileConfigInput() {
    return this._contentTypeProfileConfig.internalValue;
  }

  // query_arg_profile_config - computed: false, optional: false, required: true
  private _queryArgProfileConfig = new AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigPropertyOutputReference(this, "query_arg_profile_config");
  public get queryArgProfileConfig() {
    return this._queryArgProfileConfig;
  }
  public putQueryArgProfileConfig(value: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigProperty) {
    this._queryArgProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfileConfigInput() {
    return this._queryArgProfileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      id: cdktn.stringToTerraform(this._id),
      content_type_profile_config: awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToTerraform(this._contentTypeProfileConfig.internalValue),
      query_arg_profile_config: awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToTerraform(this._queryArgProfileConfig.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type_profile_config: {
        value: awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToHclTerraform(this._contentTypeProfileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigPropertyList",
      },
      query_arg_profile_config: {
        value: awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToHclTerraform(this._queryArgProfileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigContentTypeProfilesItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    format: cdktn.stringToTerraform(struct!.format),
    profile_id: cdktn.stringToTerraform(struct!.profileId),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigContentTypeProfilesItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktn.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfilesPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfilesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfilesPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfilesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "ContentTypeProfileConfigContentTypeProfilesItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward_when_content_type_is_unknown: cdktn.booleanToTerraform(struct!.forwardWhenContentTypeIsUnknown),
    content_type_profiles: awsCloudfrontFieldLevelEncryptionConfigContentTypeProfilesPropertyToTerraform(struct!.contentTypeProfiles),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward_when_content_type_is_unknown: {
      value: cdktn.booleanToHclTerraform(struct!.forwardWhenContentTypeIsUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_type_profiles: {
      value: awsCloudfrontFieldLevelEncryptionConfigContentTypeProfilesPropertyToHclTerraform(struct!.contentTypeProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "ContentTypeProfilesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigQueryArgProfilesItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    profile_id: cdktn.stringToTerraform(struct!.profileId),
    query_arg: cdktn.stringToTerraform(struct!.queryArg),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigQueryArgProfilesItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    profile_id: {
      value: cdktn.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_arg: {
      value: cdktn.stringToHclTerraform(struct!.queryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfilesPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfilesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfilesPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfilesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfilesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "QueryArgProfileConfigQueryArgProfilesItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward_when_query_arg_profile_is_unknown: cdktn.booleanToTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
    query_arg_profiles: awsCloudfrontFieldLevelEncryptionConfigQueryArgProfilesPropertyToTerraform(struct!.queryArgProfiles),
  }
}


export function awsCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionConfig.QueryArgProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward_when_query_arg_profile_is_unknown: {
      value: cdktn.booleanToHclTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_arg_profiles: {
      value: awsCloudfrontFieldLevelEncryptionConfigQueryArgProfilesPropertyToHclTerraform(struct!.queryArgProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "QueryArgProfilesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudfrontFieldLevelEncryptionConfig {
export interface ContentTypeProfileConfigContentTypeProfilesItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#content_type AwsCloudfrontFieldLevelEncryptionConfig#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#format AwsCloudfrontFieldLevelEncryptionConfig#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#profile_id AwsCloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId?: string;
}
export class ContentTypeProfileConfigContentTypeProfilesItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContentTypeProfileConfigContentTypeProfilesItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentTypeProfileConfigContentTypeProfilesItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._format = undefined;
      this._profileId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._format = value.format;
      this._profileId = value.profileId;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}

export class ContentTypeProfileConfigContentTypeProfilesItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : ContentTypeProfileConfigContentTypeProfilesItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): ContentTypeProfileConfigContentTypeProfilesItemsPropertyOutputReference {
    return new ContentTypeProfileConfigContentTypeProfilesItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContentTypeProfilesProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#items AwsCloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items: ContentTypeProfileConfigContentTypeProfilesItemsProperty[] | cdktn.IResolvable;
}
export class ContentTypeProfilesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentTypeProfilesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentTypeProfilesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ContentTypeProfileConfigContentTypeProfilesItemsPropertyList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: ContentTypeProfileConfigContentTypeProfilesItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ContentTypeProfileConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown AwsCloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
  */
  readonly forwardWhenContentTypeIsUnknown: boolean | cdktn.IResolvable;
  /**
  * content_type_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profiles AwsCloudfrontFieldLevelEncryptionConfig#content_type_profiles}
  */
  readonly contentTypeProfiles: ContentTypeProfilesProperty;
}
export class ContentTypeProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentTypeProfileConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardWhenContentTypeIsUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardWhenContentTypeIsUnknown = this._forwardWhenContentTypeIsUnknown;
    }
    if (this._contentTypeProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeProfiles = this._contentTypeProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentTypeProfileConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardWhenContentTypeIsUnknown = undefined;
      this._contentTypeProfiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardWhenContentTypeIsUnknown = value.forwardWhenContentTypeIsUnknown;
      this._contentTypeProfiles.internalValue = value.contentTypeProfiles;
    }
  }

  // forward_when_content_type_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenContentTypeIsUnknown?: boolean | cdktn.IResolvable; 
  public get forwardWhenContentTypeIsUnknown() {
    return this.getBooleanAttribute('forward_when_content_type_is_unknown');
  }
  public set forwardWhenContentTypeIsUnknown(value: boolean | cdktn.IResolvable) {
    this._forwardWhenContentTypeIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenContentTypeIsUnknownInput() {
    return this._forwardWhenContentTypeIsUnknown;
  }

  // content_type_profiles - computed: false, optional: false, required: true
  private _contentTypeProfiles = new ContentTypeProfilesPropertyOutputReference(this, "content_type_profiles");
  public get contentTypeProfiles() {
    return this._contentTypeProfiles;
  }
  public putContentTypeProfiles(value: ContentTypeProfilesProperty) {
    this._contentTypeProfiles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfilesInput() {
    return this._contentTypeProfiles.internalValue;
  }
}
export interface QueryArgProfileConfigQueryArgProfilesItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#profile_id AwsCloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#query_arg AwsCloudfrontFieldLevelEncryptionConfig#query_arg}
  */
  readonly queryArg: string;
}
export class QueryArgProfileConfigQueryArgProfilesItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueryArgProfileConfigQueryArgProfilesItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._queryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryArg = this._queryArg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryArgProfileConfigQueryArgProfilesItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileId = undefined;
      this._queryArg = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileId = value.profileId;
      this._queryArg = value.queryArg;
    }
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // query_arg - computed: false, optional: false, required: true
  private _queryArg?: string; 
  public get queryArg() {
    return this.getStringAttribute('query_arg');
  }
  public set queryArg(value: string) {
    this._queryArg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgInput() {
    return this._queryArg;
  }
}

export class QueryArgProfileConfigQueryArgProfilesItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : QueryArgProfileConfigQueryArgProfilesItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): QueryArgProfileConfigQueryArgProfilesItemsPropertyOutputReference {
    return new QueryArgProfileConfigQueryArgProfilesItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueryArgProfilesProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#items AwsCloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items?: QueryArgProfileConfigQueryArgProfilesItemsProperty[] | cdktn.IResolvable;
}
export class QueryArgProfilesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryArgProfilesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryArgProfilesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new QueryArgProfileConfigQueryArgProfilesItemsPropertyList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: QueryArgProfileConfigQueryArgProfilesItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface QueryArgProfileConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown AwsCloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
  */
  readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktn.IResolvable;
  /**
  * query_arg_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profiles AwsCloudfrontFieldLevelEncryptionConfig#query_arg_profiles}
  */
  readonly queryArgProfiles?: QueryArgProfilesProperty;
}
export class QueryArgProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryArgProfileConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardWhenQueryArgProfileIsUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardWhenQueryArgProfileIsUnknown = this._forwardWhenQueryArgProfileIsUnknown;
    }
    if (this._queryArgProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryArgProfiles = this._queryArgProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryArgProfileConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardWhenQueryArgProfileIsUnknown = undefined;
      this._queryArgProfiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardWhenQueryArgProfileIsUnknown = value.forwardWhenQueryArgProfileIsUnknown;
      this._queryArgProfiles.internalValue = value.queryArgProfiles;
    }
  }

  // forward_when_query_arg_profile_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenQueryArgProfileIsUnknown?: boolean | cdktn.IResolvable; 
  public get forwardWhenQueryArgProfileIsUnknown() {
    return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown');
  }
  public set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktn.IResolvable) {
    this._forwardWhenQueryArgProfileIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenQueryArgProfileIsUnknownInput() {
    return this._forwardWhenQueryArgProfileIsUnknown;
  }

  // query_arg_profiles - computed: false, optional: true, required: false
  private _queryArgProfiles = new QueryArgProfilesPropertyOutputReference(this, "query_arg_profiles");
  public get queryArgProfiles() {
    return this._queryArgProfiles;
  }
  public putQueryArgProfiles(value: QueryArgProfilesProperty) {
    this._queryArgProfiles.internalValue = value;
  }
  public resetQueryArgProfiles() {
    this._queryArgProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfilesInput() {
    return this._queryArgProfiles.internalValue;
  }
}
}
