// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontCachePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#comment AwsCloudfrontCachePolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#default_ttl AwsCloudfrontCachePolicy#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#id AwsCloudfrontCachePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#max_ttl AwsCloudfrontCachePolicy#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#min_ttl AwsCloudfrontCachePolicy#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#name AwsCloudfrontCachePolicy#name}
  */
  readonly name: string;
  /**
  * parameters_in_cache_key_and_forwarded_to_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin AwsCloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
  */
  readonly parametersInCacheKeyAndForwardedToOrigin: AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy}
*/
export class AwsCloudfrontCachePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_cache_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontCachePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontCachePolicy to import
  * @param importFromId The id of the existing AwsCloudfrontCachePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontCachePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_cache_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontCachePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_cache_policy',
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
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._minTtl = config.minTtl;
    this._name = config.name;
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = config.parametersInCacheKeyAndForwardedToOrigin;
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

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
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

  // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
  private _parametersInCacheKeyAndForwardedToOrigin = new AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this._parametersInCacheKeyAndForwardedToOrigin;
  }
  public putParametersInCacheKeyAndForwardedToOrigin(value: AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty) {
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInCacheKeyAndForwardedToOriginInput() {
    return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      default_ttl: cdktn.numberToTerraform(this._defaultTtl),
      id: cdktn.stringToTerraform(this._id),
      max_ttl: cdktn.numberToTerraform(this._maxTtl),
      min_ttl: cdktn.numberToTerraform(this._minTtl),
      name: cdktn.stringToTerraform(this._name),
      parameters_in_cache_key_and_forwarded_to_origin: awsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
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
      default_ttl: {
        value: cdktn.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktn.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ttl: {
        value: cdktn.numberToHclTerraform(this._minTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters_in_cache_key_and_forwarded_to_origin: {
        value: awsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToHclTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontCachePolicyCookiesPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.CookiesPropertyOutputReference | AwsCloudfrontCachePolicy.CookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontCachePolicyCookiesPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.CookiesPropertyOutputReference | AwsCloudfrontCachePolicy.CookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyCookiesConfigPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.CookiesConfigPropertyOutputReference | AwsCloudfrontCachePolicy.CookiesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cookie_behavior: cdktn.stringToTerraform(struct!.cookieBehavior),
    cookies: awsCloudfrontCachePolicyCookiesPropertyToTerraform(struct!.cookies),
  }
}


export function awsCloudfrontCachePolicyCookiesConfigPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.CookiesConfigPropertyOutputReference | AwsCloudfrontCachePolicy.CookiesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cookie_behavior: {
      value: cdktn.stringToHclTerraform(struct!.cookieBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookies: {
      value: awsCloudfrontCachePolicyCookiesPropertyToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "CookiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyHeadersPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.HeadersPropertyOutputReference | AwsCloudfrontCachePolicy.HeadersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontCachePolicyHeadersPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.HeadersPropertyOutputReference | AwsCloudfrontCachePolicy.HeadersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyHeadersConfigPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.HeadersConfigPropertyOutputReference | AwsCloudfrontCachePolicy.HeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_behavior: cdktn.stringToTerraform(struct!.headerBehavior),
    headers: awsCloudfrontCachePolicyHeadersPropertyToTerraform(struct!.headers),
  }
}


export function awsCloudfrontCachePolicyHeadersConfigPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.HeadersConfigPropertyOutputReference | AwsCloudfrontCachePolicy.HeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_behavior: {
      value: cdktn.stringToHclTerraform(struct!.headerBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: awsCloudfrontCachePolicyHeadersPropertyToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HeadersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyQueryStringsPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.QueryStringsPropertyOutputReference | AwsCloudfrontCachePolicy.QueryStringsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontCachePolicyQueryStringsPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.QueryStringsPropertyOutputReference | AwsCloudfrontCachePolicy.QueryStringsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyQueryStringsConfigPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.QueryStringsConfigPropertyOutputReference | AwsCloudfrontCachePolicy.QueryStringsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_string_behavior: cdktn.stringToTerraform(struct!.queryStringBehavior),
    query_strings: awsCloudfrontCachePolicyQueryStringsPropertyToTerraform(struct!.queryStrings),
  }
}


export function awsCloudfrontCachePolicyQueryStringsConfigPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.QueryStringsConfigPropertyOutputReference | AwsCloudfrontCachePolicy.QueryStringsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_string_behavior: {
      value: cdktn.stringToHclTerraform(struct!.queryStringBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_strings: {
      value: awsCloudfrontCachePolicyQueryStringsPropertyToHclTerraform(struct!.queryStrings),
      isBlock: true,
      type: "list",
      storageClassType: "QueryStringsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToTerraform(struct?: AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference | AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_accept_encoding_brotli: cdktn.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktn.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    cookies_config: awsCloudfrontCachePolicyCookiesConfigPropertyToTerraform(struct!.cookiesConfig),
    headers_config: awsCloudfrontCachePolicyHeadersConfigPropertyToTerraform(struct!.headersConfig),
    query_strings_config: awsCloudfrontCachePolicyQueryStringsConfigPropertyToTerraform(struct!.queryStringsConfig),
  }
}


export function awsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToHclTerraform(struct?: AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference | AwsCloudfrontCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_accept_encoding_brotli: {
      value: cdktn.booleanToHclTerraform(struct!.enableAcceptEncodingBrotli),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_accept_encoding_gzip: {
      value: cdktn.booleanToHclTerraform(struct!.enableAcceptEncodingGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookies_config: {
      value: awsCloudfrontCachePolicyCookiesConfigPropertyToHclTerraform(struct!.cookiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CookiesConfigPropertyList",
    },
    headers_config: {
      value: awsCloudfrontCachePolicyHeadersConfigPropertyToHclTerraform(struct!.headersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HeadersConfigPropertyList",
    },
    query_strings_config: {
      value: awsCloudfrontCachePolicyQueryStringsConfigPropertyToHclTerraform(struct!.queryStringsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "QueryStringsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudfrontCachePolicy {
export interface CookiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#items AwsCloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}
export class CookiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CookiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CookiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CookiesConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#cookie_behavior AwsCloudfrontCachePolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#cookies AwsCloudfrontCachePolicy#cookies}
  */
  readonly cookies?: CookiesProperty;
}
export class CookiesConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CookiesConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieBehavior = this._cookieBehavior;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CookiesConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieBehavior = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieBehavior = value.cookieBehavior;
      this._cookies.internalValue = value.cookies;
    }
  }

  // cookie_behavior - computed: false, optional: false, required: true
  private _cookieBehavior?: string; 
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }
  public set cookieBehavior(value: string) {
    this._cookieBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBehaviorInput() {
    return this._cookieBehavior;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new CookiesPropertyOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CookiesProperty) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface HeadersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#items AwsCloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}
export class HeadersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeadersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeadersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface HeadersConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#header_behavior AwsCloudfrontCachePolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#headers AwsCloudfrontCachePolicy#headers}
  */
  readonly headers?: HeadersProperty;
}
export class HeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeadersConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBehavior = this._headerBehavior;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeadersConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerBehavior = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerBehavior = value.headerBehavior;
      this._headers.internalValue = value.headers;
    }
  }

  // header_behavior - computed: false, optional: true, required: false
  private _headerBehavior?: string; 
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }
  public set headerBehavior(value: string) {
    this._headerBehavior = value;
  }
  public resetHeaderBehavior() {
    this._headerBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBehaviorInput() {
    return this._headerBehavior;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HeadersPropertyOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HeadersProperty) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface QueryStringsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#items AwsCloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}
export class QueryStringsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryStringsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryStringsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface QueryStringsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#query_string_behavior AwsCloudfrontCachePolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#query_strings AwsCloudfrontCachePolicy#query_strings}
  */
  readonly queryStrings?: QueryStringsProperty;
}
export class QueryStringsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QueryStringsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStringBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBehavior = this._queryStringBehavior;
    }
    if (this._queryStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStrings = this._queryStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryStringsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryStringBehavior = undefined;
      this._queryStrings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryStringBehavior = value.queryStringBehavior;
      this._queryStrings.internalValue = value.queryStrings;
    }
  }

  // query_string_behavior - computed: false, optional: false, required: true
  private _queryStringBehavior?: string; 
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }
  public set queryStringBehavior(value: string) {
    this._queryStringBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviorInput() {
    return this._queryStringBehavior;
  }

  // query_strings - computed: false, optional: true, required: false
  private _queryStrings = new QueryStringsPropertyOutputReference(this, "query_strings");
  public get queryStrings() {
    return this._queryStrings;
  }
  public putQueryStrings(value: QueryStringsProperty) {
    this._queryStrings.internalValue = value;
  }
  public resetQueryStrings() {
    this._queryStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings.internalValue;
  }
}
export interface ParametersInCacheKeyAndForwardedToOriginProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli AwsCloudfrontCachePolicy#enable_accept_encoding_brotli}
  */
  readonly enableAcceptEncodingBrotli?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip AwsCloudfrontCachePolicy#enable_accept_encoding_gzip}
  */
  readonly enableAcceptEncodingGzip?: boolean | cdktn.IResolvable;
  /**
  * cookies_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#cookies_config AwsCloudfrontCachePolicy#cookies_config}
  */
  readonly cookiesConfig: CookiesConfigProperty;
  /**
  * headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#headers_config AwsCloudfrontCachePolicy#headers_config}
  */
  readonly headersConfig: HeadersConfigProperty;
  /**
  * query_strings_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_cache_policy#query_strings_config AwsCloudfrontCachePolicy#query_strings_config}
  */
  readonly queryStringsConfig: QueryStringsConfigProperty;
}
export class ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParametersInCacheKeyAndForwardedToOriginProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAcceptEncodingBrotli !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
    }
    if (this._enableAcceptEncodingGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
    }
    if (this._cookiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
    }
    if (this._headersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersConfig = this._headersConfig?.internalValue;
    }
    if (this._queryStringsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParametersInCacheKeyAndForwardedToOriginProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAcceptEncodingBrotli = undefined;
      this._enableAcceptEncodingGzip = undefined;
      this._cookiesConfig.internalValue = undefined;
      this._headersConfig.internalValue = undefined;
      this._queryStringsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
      this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
      this._cookiesConfig.internalValue = value.cookiesConfig;
      this._headersConfig.internalValue = value.headersConfig;
      this._queryStringsConfig.internalValue = value.queryStringsConfig;
    }
  }

  // enable_accept_encoding_brotli - computed: false, optional: true, required: false
  private _enableAcceptEncodingBrotli?: boolean | cdktn.IResolvable; 
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli');
  }
  public set enableAcceptEncodingBrotli(value: boolean | cdktn.IResolvable) {
    this._enableAcceptEncodingBrotli = value;
  }
  public resetEnableAcceptEncodingBrotli() {
    this._enableAcceptEncodingBrotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingBrotliInput() {
    return this._enableAcceptEncodingBrotli;
  }

  // enable_accept_encoding_gzip - computed: false, optional: true, required: false
  private _enableAcceptEncodingGzip?: boolean | cdktn.IResolvable; 
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip');
  }
  public set enableAcceptEncodingGzip(value: boolean | cdktn.IResolvable) {
    this._enableAcceptEncodingGzip = value;
  }
  public resetEnableAcceptEncodingGzip() {
    this._enableAcceptEncodingGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingGzipInput() {
    return this._enableAcceptEncodingGzip;
  }

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig = new CookiesConfigPropertyOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: CookiesConfigProperty) {
    this._cookiesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig = new HeadersConfigPropertyOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: HeadersConfigProperty) {
    this._headersConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig = new QueryStringsConfigPropertyOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: QueryStringsConfigProperty) {
    this._queryStringsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }
}
}
