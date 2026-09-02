// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOriginRequestPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#comment TfOriginRequestPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#id TfOriginRequestPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#name TfOriginRequestPolicy#name}
  */
  readonly name: string;
  /**
  * cookies_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#cookies_config TfOriginRequestPolicy#cookies_config}
  */
  readonly cookiesConfig: TfOriginRequestPolicy.CookiesConfigProperty;
  /**
  * headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#headers_config TfOriginRequestPolicy#headers_config}
  */
  readonly headersConfig: TfOriginRequestPolicy.HeadersConfigProperty;
  /**
  * query_strings_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#query_strings_config TfOriginRequestPolicy#query_strings_config}
  */
  readonly queryStringsConfig: TfOriginRequestPolicy.QueryStringsConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}
*/
export class TfOriginRequestPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_origin_request_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOriginRequestPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOriginRequestPolicy to import
  * @param importFromId The id of the existing TfOriginRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOriginRequestPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_origin_request_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TfOriginRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_request_policy',
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
    this._name = config.name;
    this._cookiesConfig.internalValue = config.cookiesConfig;
    this._headersConfig.internalValue = config.headersConfig;
    this._queryStringsConfig.internalValue = config.queryStringsConfig;
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

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig = new TfOriginRequestPolicy.CookiesConfigPropertyOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: TfOriginRequestPolicy.CookiesConfigProperty) {
    this._cookiesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig = new TfOriginRequestPolicy.HeadersConfigPropertyOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: TfOriginRequestPolicy.HeadersConfigProperty) {
    this._headersConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig = new TfOriginRequestPolicy.QueryStringsConfigPropertyOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: TfOriginRequestPolicy.QueryStringsConfigProperty) {
    this._queryStringsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      cookies_config: tfOriginRequestPolicyCookiesConfigPropertyToTerraform(this._cookiesConfig.internalValue),
      headers_config: tfOriginRequestPolicyHeadersConfigPropertyToTerraform(this._headersConfig.internalValue),
      query_strings_config: tfOriginRequestPolicyQueryStringsConfigPropertyToTerraform(this._queryStringsConfig.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookies_config: {
        value: tfOriginRequestPolicyCookiesConfigPropertyToHclTerraform(this._cookiesConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOriginRequestPolicy.CookiesConfigPropertyList",
      },
      headers_config: {
        value: tfOriginRequestPolicyHeadersConfigPropertyToHclTerraform(this._headersConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOriginRequestPolicy.HeadersConfigPropertyList",
      },
      query_strings_config: {
        value: tfOriginRequestPolicyQueryStringsConfigPropertyToHclTerraform(this._queryStringsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOriginRequestPolicy.QueryStringsConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOriginRequestPolicyCookiesPropertyToTerraform(struct?: TfOriginRequestPolicy.CookiesPropertyOutputReference | TfOriginRequestPolicy.CookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function tfOriginRequestPolicyCookiesPropertyToHclTerraform(struct?: TfOriginRequestPolicy.CookiesPropertyOutputReference | TfOriginRequestPolicy.CookiesProperty): any {
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


export function tfOriginRequestPolicyCookiesConfigPropertyToTerraform(struct?: TfOriginRequestPolicy.CookiesConfigPropertyOutputReference | TfOriginRequestPolicy.CookiesConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cookie_behavior: cdktn.stringToTerraform(struct!.cookieBehavior),
    cookies: tfOriginRequestPolicyCookiesPropertyToTerraform(struct!.cookies),
  }
}


export function tfOriginRequestPolicyCookiesConfigPropertyToHclTerraform(struct?: TfOriginRequestPolicy.CookiesConfigPropertyOutputReference | TfOriginRequestPolicy.CookiesConfigProperty): any {
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
      value: tfOriginRequestPolicyCookiesPropertyToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "CookiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOriginRequestPolicyHeadersPropertyToTerraform(struct?: TfOriginRequestPolicy.HeadersPropertyOutputReference | TfOriginRequestPolicy.HeadersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function tfOriginRequestPolicyHeadersPropertyToHclTerraform(struct?: TfOriginRequestPolicy.HeadersPropertyOutputReference | TfOriginRequestPolicy.HeadersProperty): any {
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


export function tfOriginRequestPolicyHeadersConfigPropertyToTerraform(struct?: TfOriginRequestPolicy.HeadersConfigPropertyOutputReference | TfOriginRequestPolicy.HeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_behavior: cdktn.stringToTerraform(struct!.headerBehavior),
    headers: tfOriginRequestPolicyHeadersPropertyToTerraform(struct!.headers),
  }
}


export function tfOriginRequestPolicyHeadersConfigPropertyToHclTerraform(struct?: TfOriginRequestPolicy.HeadersConfigPropertyOutputReference | TfOriginRequestPolicy.HeadersConfigProperty): any {
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
      value: tfOriginRequestPolicyHeadersPropertyToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HeadersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOriginRequestPolicyQueryStringsPropertyToTerraform(struct?: TfOriginRequestPolicy.QueryStringsPropertyOutputReference | TfOriginRequestPolicy.QueryStringsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function tfOriginRequestPolicyQueryStringsPropertyToHclTerraform(struct?: TfOriginRequestPolicy.QueryStringsPropertyOutputReference | TfOriginRequestPolicy.QueryStringsProperty): any {
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


export function tfOriginRequestPolicyQueryStringsConfigPropertyToTerraform(struct?: TfOriginRequestPolicy.QueryStringsConfigPropertyOutputReference | TfOriginRequestPolicy.QueryStringsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_string_behavior: cdktn.stringToTerraform(struct!.queryStringBehavior),
    query_strings: tfOriginRequestPolicyQueryStringsPropertyToTerraform(struct!.queryStrings),
  }
}


export function tfOriginRequestPolicyQueryStringsConfigPropertyToHclTerraform(struct?: TfOriginRequestPolicy.QueryStringsConfigPropertyOutputReference | TfOriginRequestPolicy.QueryStringsConfigProperty): any {
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
      value: tfOriginRequestPolicyQueryStringsPropertyToHclTerraform(struct!.queryStrings),
      isBlock: true,
      type: "list",
      storageClassType: "QueryStringsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfOriginRequestPolicy {
export interface CookiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#items TfOriginRequestPolicy#items}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#cookie_behavior TfOriginRequestPolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#cookies TfOriginRequestPolicy#cookies}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#items TfOriginRequestPolicy#items}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#header_behavior TfOriginRequestPolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#headers TfOriginRequestPolicy#headers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#items TfOriginRequestPolicy#items}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#query_string_behavior TfOriginRequestPolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_origin_request_policy#query_strings TfOriginRequestPolicy#query_strings}
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
}
