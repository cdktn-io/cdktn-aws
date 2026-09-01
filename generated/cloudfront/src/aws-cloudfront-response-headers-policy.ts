// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontResponseHeadersPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#comment AwsCloudfrontResponseHeadersPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#id AwsCloudfrontResponseHeadersPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#name AwsCloudfrontResponseHeadersPolicy#name}
  */
  readonly name: string;
  /**
  * cors_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#cors_config AwsCloudfrontResponseHeadersPolicy#cors_config}
  */
  readonly corsConfig?: AwsCloudfrontResponseHeadersPolicy.CorsConfigProperty;
  /**
  * custom_headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#custom_headers_config AwsCloudfrontResponseHeadersPolicy#custom_headers_config}
  */
  readonly customHeadersConfig?: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigProperty;
  /**
  * remove_headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#remove_headers_config AwsCloudfrontResponseHeadersPolicy#remove_headers_config}
  */
  readonly removeHeadersConfig?: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigProperty;
  /**
  * security_headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#security_headers_config AwsCloudfrontResponseHeadersPolicy#security_headers_config}
  */
  readonly securityHeadersConfig?: AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigProperty;
  /**
  * server_timing_headers_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#server_timing_headers_config AwsCloudfrontResponseHeadersPolicy#server_timing_headers_config}
  */
  readonly serverTimingHeadersConfig?: AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
export class AwsCloudfrontResponseHeadersPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_response_headers_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontResponseHeadersPolicy to import
  * @param importFromId The id of the existing AwsCloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontResponseHeadersPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_response_headers_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontResponseHeadersPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
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
    this._corsConfig.internalValue = config.corsConfig;
    this._customHeadersConfig.internalValue = config.customHeadersConfig;
    this._removeHeadersConfig.internalValue = config.removeHeadersConfig;
    this._securityHeadersConfig.internalValue = config.securityHeadersConfig;
    this._serverTimingHeadersConfig.internalValue = config.serverTimingHeadersConfig;
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

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig = new AwsCloudfrontResponseHeadersPolicy.CorsConfigPropertyOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }
  public putCorsConfig(value: AwsCloudfrontResponseHeadersPolicy.CorsConfigProperty) {
    this._corsConfig.internalValue = value;
  }
  public resetCorsConfig() {
    this._corsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig.internalValue;
  }

  // custom_headers_config - computed: false, optional: true, required: false
  private _customHeadersConfig = new AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigPropertyOutputReference(this, "custom_headers_config");
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }
  public putCustomHeadersConfig(value: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigProperty) {
    this._customHeadersConfig.internalValue = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig.internalValue;
  }

  // remove_headers_config - computed: false, optional: true, required: false
  private _removeHeadersConfig = new AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigPropertyOutputReference(this, "remove_headers_config");
  public get removeHeadersConfig() {
    return this._removeHeadersConfig;
  }
  public putRemoveHeadersConfig(value: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigProperty) {
    this._removeHeadersConfig.internalValue = value;
  }
  public resetRemoveHeadersConfig() {
    this._removeHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeadersConfigInput() {
    return this._removeHeadersConfig.internalValue;
  }

  // security_headers_config - computed: false, optional: true, required: false
  private _securityHeadersConfig = new AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigPropertyOutputReference(this, "security_headers_config");
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }
  public putSecurityHeadersConfig(value: AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigProperty) {
    this._securityHeadersConfig.internalValue = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig.internalValue;
  }

  // server_timing_headers_config - computed: false, optional: true, required: false
  private _serverTimingHeadersConfig = new AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigPropertyOutputReference(this, "server_timing_headers_config");
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }
  public putServerTimingHeadersConfig(value: AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigProperty) {
    this._serverTimingHeadersConfig.internalValue = value;
  }
  public resetServerTimingHeadersConfig() {
    this._serverTimingHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimingHeadersConfigInput() {
    return this._serverTimingHeadersConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      cors_config: awsCloudfrontResponseHeadersPolicyCorsConfigPropertyToTerraform(this._corsConfig.internalValue),
      custom_headers_config: awsCloudfrontResponseHeadersPolicyCustomHeadersConfigPropertyToTerraform(this._customHeadersConfig.internalValue),
      remove_headers_config: awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigPropertyToTerraform(this._removeHeadersConfig.internalValue),
      security_headers_config: awsCloudfrontResponseHeadersPolicySecurityHeadersConfigPropertyToTerraform(this._securityHeadersConfig.internalValue),
      server_timing_headers_config: awsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigPropertyToTerraform(this._serverTimingHeadersConfig.internalValue),
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
      cors_config: {
        value: awsCloudfrontResponseHeadersPolicyCorsConfigPropertyToHclTerraform(this._corsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontResponseHeadersPolicy.CorsConfigPropertyList",
      },
      custom_headers_config: {
        value: awsCloudfrontResponseHeadersPolicyCustomHeadersConfigPropertyToHclTerraform(this._customHeadersConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigPropertyList",
      },
      remove_headers_config: {
        value: awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigPropertyToHclTerraform(this._removeHeadersConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigPropertyList",
      },
      security_headers_config: {
        value: awsCloudfrontResponseHeadersPolicySecurityHeadersConfigPropertyToHclTerraform(this._securityHeadersConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigPropertyList",
      },
      server_timing_headers_config: {
        value: awsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigPropertyToHclTerraform(this._serverTimingHeadersConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontResponseHeadersPolicyAccessControlAllowHeadersPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowHeadersPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowHeadersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyAccessControlAllowHeadersPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowHeadersPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowHeadersProperty): any {
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


export function awsCloudfrontResponseHeadersPolicyAccessControlAllowMethodsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowMethodsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowMethodsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyAccessControlAllowMethodsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowMethodsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowMethodsProperty): any {
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


export function awsCloudfrontResponseHeadersPolicyAccessControlAllowOriginsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowOriginsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowOriginsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyAccessControlAllowOriginsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlAllowOriginsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlAllowOriginsProperty): any {
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


export function awsCloudfrontResponseHeadersPolicyAccessControlExposeHeadersPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlExposeHeadersPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlExposeHeadersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyAccessControlExposeHeadersPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.AccessControlExposeHeadersPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.AccessControlExposeHeadersProperty): any {
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


export function awsCloudfrontResponseHeadersPolicyCorsConfigPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CorsConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.CorsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_allow_credentials: cdktn.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktn.booleanToTerraform(struct!.originOverride),
    access_control_allow_headers: awsCloudfrontResponseHeadersPolicyAccessControlAllowHeadersPropertyToTerraform(struct!.accessControlAllowHeaders),
    access_control_allow_methods: awsCloudfrontResponseHeadersPolicyAccessControlAllowMethodsPropertyToTerraform(struct!.accessControlAllowMethods),
    access_control_allow_origins: awsCloudfrontResponseHeadersPolicyAccessControlAllowOriginsPropertyToTerraform(struct!.accessControlAllowOrigins),
    access_control_expose_headers: awsCloudfrontResponseHeadersPolicyAccessControlExposeHeadersPropertyToTerraform(struct!.accessControlExposeHeaders),
  }
}


export function awsCloudfrontResponseHeadersPolicyCorsConfigPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CorsConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.CorsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.accessControlAllowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_control_max_age_sec: {
      value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_override: {
      value: cdktn.booleanToHclTerraform(struct!.originOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_control_allow_headers: {
      value: awsCloudfrontResponseHeadersPolicyAccessControlAllowHeadersPropertyToHclTerraform(struct!.accessControlAllowHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlAllowHeadersPropertyList",
    },
    access_control_allow_methods: {
      value: awsCloudfrontResponseHeadersPolicyAccessControlAllowMethodsPropertyToHclTerraform(struct!.accessControlAllowMethods),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlAllowMethodsPropertyList",
    },
    access_control_allow_origins: {
      value: awsCloudfrontResponseHeadersPolicyAccessControlAllowOriginsPropertyToHclTerraform(struct!.accessControlAllowOrigins),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlAllowOriginsPropertyList",
    },
    access_control_expose_headers: {
      value: awsCloudfrontResponseHeadersPolicyAccessControlExposeHeadersPropertyToHclTerraform(struct!.accessControlExposeHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "AccessControlExposeHeadersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    override: cdktn.booleanToTerraform(struct!.override),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyCustomHeadersConfigPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyCustomHeadersConfigPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.CustomHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "CustomHeadersConfigItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
  }
}


export function awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.RemoveHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "RemoveHeadersConfigItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyContentSecurityPolicyPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ContentSecurityPolicyPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ContentSecurityPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_security_policy: cdktn.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function awsCloudfrontResponseHeadersPolicyContentSecurityPolicyPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ContentSecurityPolicyPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ContentSecurityPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_security_policy: {
      value: cdktn.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyContentTypeOptionsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ContentTypeOptionsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ContentTypeOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function awsCloudfrontResponseHeadersPolicyContentTypeOptionsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ContentTypeOptionsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ContentTypeOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyFrameOptionsPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.FrameOptionsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.FrameOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frame_option: cdktn.stringToTerraform(struct!.frameOption),
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function awsCloudfrontResponseHeadersPolicyFrameOptionsPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.FrameOptionsPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.FrameOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frame_option: {
      value: cdktn.stringToHclTerraform(struct!.frameOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyReferrerPolicyPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ReferrerPolicyPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ReferrerPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override: cdktn.booleanToTerraform(struct!.override),
    referrer_policy: cdktn.stringToTerraform(struct!.referrerPolicy),
  }
}


export function awsCloudfrontResponseHeadersPolicyReferrerPolicyPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ReferrerPolicyPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ReferrerPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referrer_policy: {
      value: cdktn.stringToHclTerraform(struct!.referrerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyStrictTransportSecurityPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.StrictTransportSecurityPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.StrictTransportSecurityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktn.booleanToTerraform(struct!.includeSubdomains),
    override: cdktn.booleanToTerraform(struct!.override),
    preload: cdktn.booleanToTerraform(struct!.preload),
  }
}


export function awsCloudfrontResponseHeadersPolicyStrictTransportSecurityPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.StrictTransportSecurityPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.StrictTransportSecurityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_max_age_sec: {
      value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_subdomains: {
      value: cdktn.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preload: {
      value: cdktn.booleanToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyXssProtectionPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.XssProtectionPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.XssProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode_block: cdktn.booleanToTerraform(struct!.modeBlock),
    override: cdktn.booleanToTerraform(struct!.override),
    protection: cdktn.booleanToTerraform(struct!.protection),
    report_uri: cdktn.stringToTerraform(struct!.reportUri),
  }
}


export function awsCloudfrontResponseHeadersPolicyXssProtectionPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.XssProtectionPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.XssProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode_block: {
      value: cdktn.booleanToHclTerraform(struct!.modeBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protection: {
      value: cdktn.booleanToHclTerraform(struct!.protection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report_uri: {
      value: cdktn.stringToHclTerraform(struct!.reportUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicySecurityHeadersConfigPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_security_policy: awsCloudfrontResponseHeadersPolicyContentSecurityPolicyPropertyToTerraform(struct!.contentSecurityPolicy),
    content_type_options: awsCloudfrontResponseHeadersPolicyContentTypeOptionsPropertyToTerraform(struct!.contentTypeOptions),
    frame_options: awsCloudfrontResponseHeadersPolicyFrameOptionsPropertyToTerraform(struct!.frameOptions),
    referrer_policy: awsCloudfrontResponseHeadersPolicyReferrerPolicyPropertyToTerraform(struct!.referrerPolicy),
    strict_transport_security: awsCloudfrontResponseHeadersPolicyStrictTransportSecurityPropertyToTerraform(struct!.strictTransportSecurity),
    xss_protection: awsCloudfrontResponseHeadersPolicyXssProtectionPropertyToTerraform(struct!.xssProtection),
  }
}


export function awsCloudfrontResponseHeadersPolicySecurityHeadersConfigPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.SecurityHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_security_policy: {
      value: awsCloudfrontResponseHeadersPolicyContentSecurityPolicyPropertyToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContentSecurityPolicyPropertyList",
    },
    content_type_options: {
      value: awsCloudfrontResponseHeadersPolicyContentTypeOptionsPropertyToHclTerraform(struct!.contentTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContentTypeOptionsPropertyList",
    },
    frame_options: {
      value: awsCloudfrontResponseHeadersPolicyFrameOptionsPropertyToHclTerraform(struct!.frameOptions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameOptionsPropertyList",
    },
    referrer_policy: {
      value: awsCloudfrontResponseHeadersPolicyReferrerPolicyPropertyToHclTerraform(struct!.referrerPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ReferrerPolicyPropertyList",
    },
    strict_transport_security: {
      value: awsCloudfrontResponseHeadersPolicyStrictTransportSecurityPropertyToHclTerraform(struct!.strictTransportSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "StrictTransportSecurityPropertyList",
    },
    xss_protection: {
      value: awsCloudfrontResponseHeadersPolicyXssProtectionPropertyToHclTerraform(struct!.xssProtection),
      isBlock: true,
      type: "list",
      storageClassType: "XssProtectionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigPropertyToTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
  }
}


export function awsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigPropertyToHclTerraform(struct?: AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigPropertyOutputReference | AwsCloudfrontResponseHeadersPolicy.ServerTimingHeadersConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling_rate: {
      value: cdktn.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudfrontResponseHeadersPolicy {
export interface AccessControlAllowHeadersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}
export class AccessControlAllowHeadersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlAllowHeadersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlAllowHeadersProperty | undefined) {
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
export interface AccessControlAllowMethodsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}
export class AccessControlAllowMethodsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlAllowMethodsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlAllowMethodsProperty | undefined) {
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
export interface AccessControlAllowOriginsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}
export class AccessControlAllowOriginsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlAllowOriginsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlAllowOriginsProperty | undefined) {
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
export interface AccessControlExposeHeadersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}
export class AccessControlExposeHeadersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessControlExposeHeadersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessControlExposeHeadersProperty | undefined) {
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
export interface CorsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_credentials AwsCloudfrontResponseHeadersPolicy#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec AwsCloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#origin_override AwsCloudfrontResponseHeadersPolicy#origin_override}
  */
  readonly originOverride: boolean | cdktn.IResolvable;
  /**
  * access_control_allow_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_headers AwsCloudfrontResponseHeadersPolicy#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders: AccessControlAllowHeadersProperty;
  /**
  * access_control_allow_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_methods AwsCloudfrontResponseHeadersPolicy#access_control_allow_methods}
  */
  readonly accessControlAllowMethods: AccessControlAllowMethodsProperty;
  /**
  * access_control_allow_origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_origins AwsCloudfrontResponseHeadersPolicy#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins: AccessControlAllowOriginsProperty;
  /**
  * access_control_expose_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_expose_headers AwsCloudfrontResponseHeadersPolicy#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: AccessControlExposeHeadersProperty;
}
export class CorsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CorsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
    }
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._originOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.originOverride = this._originOverride;
    }
    if (this._accessControlAllowHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
    }
    if (this._accessControlAllowMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
    }
    if (this._accessControlAllowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
    }
    if (this._accessControlExposeHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlAllowCredentials = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._originOverride = undefined;
      this._accessControlAllowHeaders.internalValue = undefined;
      this._accessControlAllowMethods.internalValue = undefined;
      this._accessControlAllowOrigins.internalValue = undefined;
      this._accessControlExposeHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlAllowCredentials = value.accessControlAllowCredentials;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._originOverride = value.originOverride;
      this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
      this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
      this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
      this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
    }
  }

  // access_control_allow_credentials - computed: false, optional: false, required: true
  private _accessControlAllowCredentials?: boolean | cdktn.IResolvable; 
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }
  public set accessControlAllowCredentials(value: boolean | cdktn.IResolvable) {
    this._accessControlAllowCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowCredentialsInput() {
    return this._accessControlAllowCredentials;
  }

  // access_control_max_age_sec - computed: false, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // origin_override - computed: false, optional: false, required: true
  private _originOverride?: boolean | cdktn.IResolvable; 
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
  public set originOverride(value: boolean | cdktn.IResolvable) {
    this._originOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideInput() {
    return this._originOverride;
  }

  // access_control_allow_headers - computed: false, optional: false, required: true
  private _accessControlAllowHeaders = new AccessControlAllowHeadersPropertyOutputReference(this, "access_control_allow_headers");
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }
  public putAccessControlAllowHeaders(value: AccessControlAllowHeadersProperty) {
    this._accessControlAllowHeaders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders.internalValue;
  }

  // access_control_allow_methods - computed: false, optional: false, required: true
  private _accessControlAllowMethods = new AccessControlAllowMethodsPropertyOutputReference(this, "access_control_allow_methods");
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }
  public putAccessControlAllowMethods(value: AccessControlAllowMethodsProperty) {
    this._accessControlAllowMethods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods.internalValue;
  }

  // access_control_allow_origins - computed: false, optional: false, required: true
  private _accessControlAllowOrigins = new AccessControlAllowOriginsPropertyOutputReference(this, "access_control_allow_origins");
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }
  public putAccessControlAllowOrigins(value: AccessControlAllowOriginsProperty) {
    this._accessControlAllowOrigins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginsInput() {
    return this._accessControlAllowOrigins.internalValue;
  }

  // access_control_expose_headers - computed: false, optional: true, required: false
  private _accessControlExposeHeaders = new AccessControlExposeHeadersPropertyOutputReference(this, "access_control_expose_headers");
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }
  public putAccessControlExposeHeaders(value: AccessControlExposeHeadersProperty) {
    this._accessControlExposeHeaders.internalValue = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders.internalValue;
  }
}
export interface CustomHeadersConfigItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#header AwsCloudfrontResponseHeadersPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#value AwsCloudfrontResponseHeadersPolicy#value}
  */
  readonly value: string;
}
export class CustomHeadersConfigItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomHeadersConfigItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHeadersConfigItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._override = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._override = value.override;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CustomHeadersConfigItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomHeadersConfigItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomHeadersConfigItemsPropertyOutputReference {
    return new CustomHeadersConfigItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHeadersConfigProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CustomHeadersConfigItemsProperty[] | cdktn.IResolvable;
}
export class CustomHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomHeadersConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHeadersConfigProperty | undefined) {
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
  private _items = new CustomHeadersConfigItemsPropertyList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: CustomHeadersConfigItemsProperty[] | cdktn.IResolvable) {
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
export interface RemoveHeadersConfigItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#header AwsCloudfrontResponseHeadersPolicy#header}
  */
  readonly header: string;
}
export class RemoveHeadersConfigItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RemoveHeadersConfigItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoveHeadersConfigItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class RemoveHeadersConfigItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : RemoveHeadersConfigItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): RemoveHeadersConfigItemsPropertyOutputReference {
    return new RemoveHeadersConfigItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RemoveHeadersConfigProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#items AwsCloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: RemoveHeadersConfigItemsProperty[] | cdktn.IResolvable;
}
export class RemoveHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RemoveHeadersConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoveHeadersConfigProperty | undefined) {
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
  private _items = new RemoveHeadersConfigItemsPropertyList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: RemoveHeadersConfigItemsProperty[] | cdktn.IResolvable) {
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
export interface ContentSecurityPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#content_security_policy AwsCloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
}
export class ContentSecurityPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentSecurityPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentSecurityPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSecurityPolicy = undefined;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._override = value.override;
    }
  }

  // content_security_policy - computed: false, optional: false, required: true
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface ContentTypeOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
}
export class ContentTypeOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentTypeOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentTypeOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._override = value.override;
    }
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface FrameOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#frame_option AwsCloudfrontResponseHeadersPolicy#frame_option}
  */
  readonly frameOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
}
export class FrameOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOption = this._frameOption;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frameOption = undefined;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frameOption = value.frameOption;
      this._override = value.override;
    }
  }

  // frame_option - computed: false, optional: false, required: true
  private _frameOption?: string; 
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }
  public set frameOption(value: string) {
    this._frameOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionInput() {
    return this._frameOption;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface ReferrerPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#referrer_policy AwsCloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy: string;
}
export class ReferrerPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReferrerPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferrerPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._override = undefined;
      this._referrerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._override = value.override;
      this._referrerPolicy = value.referrerPolicy;
    }
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // referrer_policy - computed: false, optional: false, required: true
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy;
  }
}
export interface StrictTransportSecurityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec AwsCloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#include_subdomains AwsCloudfrontResponseHeadersPolicy#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#preload AwsCloudfrontResponseHeadersPolicy#preload}
  */
  readonly preload?: boolean | cdktn.IResolvable;
}
export class StrictTransportSecurityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StrictTransportSecurityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StrictTransportSecurityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlMaxAgeSec = undefined;
      this._includeSubdomains = undefined;
      this._override = undefined;
      this._preload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._includeSubdomains = value.includeSubdomains;
      this._override = value.override;
      this._preload = value.preload;
    }
  }

  // access_control_max_age_sec - computed: false, optional: false, required: true
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktn.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktn.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: boolean | cdktn.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktn.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface XssProtectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#mode_block AwsCloudfrontResponseHeadersPolicy#mode_block}
  */
  readonly modeBlock?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#override AwsCloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#protection AwsCloudfrontResponseHeadersPolicy#protection}
  */
  readonly protection: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#report_uri AwsCloudfrontResponseHeadersPolicy#report_uri}
  */
  readonly reportUri?: string;
}
export class XssProtectionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): XssProtectionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeBlock = this._modeBlock;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._protection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection;
    }
    if (this._reportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUri = this._reportUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XssProtectionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modeBlock = undefined;
      this._override = undefined;
      this._protection = undefined;
      this._reportUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modeBlock = value.modeBlock;
      this._override = value.override;
      this._protection = value.protection;
      this._reportUri = value.reportUri;
    }
  }

  // mode_block - computed: false, optional: true, required: false
  private _modeBlock?: boolean | cdktn.IResolvable; 
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }
  public set modeBlock(value: boolean | cdktn.IResolvable) {
    this._modeBlock = value;
  }
  public resetModeBlock() {
    this._modeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeBlockInput() {
    return this._modeBlock;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // protection - computed: false, optional: false, required: true
  private _protection?: boolean | cdktn.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktn.IResolvable) {
    this._protection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // report_uri - computed: false, optional: true, required: false
  private _reportUri?: string; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri;
  }
}
export interface SecurityHeadersConfigProperty {
  /**
  * content_security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#content_security_policy AwsCloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: ContentSecurityPolicyProperty;
  /**
  * content_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#content_type_options AwsCloudfrontResponseHeadersPolicy#content_type_options}
  */
  readonly contentTypeOptions?: ContentTypeOptionsProperty;
  /**
  * frame_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#frame_options AwsCloudfrontResponseHeadersPolicy#frame_options}
  */
  readonly frameOptions?: FrameOptionsProperty;
  /**
  * referrer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#referrer_policy AwsCloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: ReferrerPolicyProperty;
  /**
  * strict_transport_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#strict_transport_security AwsCloudfrontResponseHeadersPolicy#strict_transport_security}
  */
  readonly strictTransportSecurity?: StrictTransportSecurityProperty;
  /**
  * xss_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#xss_protection AwsCloudfrontResponseHeadersPolicy#xss_protection}
  */
  readonly xssProtection?: XssProtectionProperty;
}
export class SecurityHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityHeadersConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
    }
    if (this._contentTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
    }
    if (this._frameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOptions = this._frameOptions?.internalValue;
    }
    if (this._referrerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
    }
    if (this._strictTransportSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
    }
    if (this._xssProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssProtection = this._xssProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityHeadersConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSecurityPolicy.internalValue = undefined;
      this._contentTypeOptions.internalValue = undefined;
      this._frameOptions.internalValue = undefined;
      this._referrerPolicy.internalValue = undefined;
      this._strictTransportSecurity.internalValue = undefined;
      this._xssProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
      this._contentTypeOptions.internalValue = value.contentTypeOptions;
      this._frameOptions.internalValue = value.frameOptions;
      this._referrerPolicy.internalValue = value.referrerPolicy;
      this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
      this._xssProtection.internalValue = value.xssProtection;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy = new ContentSecurityPolicyPropertyOutputReference(this, "content_security_policy");
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }
  public putContentSecurityPolicy(value: ContentSecurityPolicyProperty) {
    this._contentSecurityPolicy.internalValue = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy.internalValue;
  }

  // content_type_options - computed: false, optional: true, required: false
  private _contentTypeOptions = new ContentTypeOptionsPropertyOutputReference(this, "content_type_options");
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }
  public putContentTypeOptions(value: ContentTypeOptionsProperty) {
    this._contentTypeOptions.internalValue = value;
  }
  public resetContentTypeOptions() {
    this._contentTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeOptionsInput() {
    return this._contentTypeOptions.internalValue;
  }

  // frame_options - computed: false, optional: true, required: false
  private _frameOptions = new FrameOptionsPropertyOutputReference(this, "frame_options");
  public get frameOptions() {
    return this._frameOptions;
  }
  public putFrameOptions(value: FrameOptionsProperty) {
    this._frameOptions.internalValue = value;
  }
  public resetFrameOptions() {
    this._frameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionsInput() {
    return this._frameOptions.internalValue;
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy = new ReferrerPolicyPropertyOutputReference(this, "referrer_policy");
  public get referrerPolicy() {
    return this._referrerPolicy;
  }
  public putReferrerPolicy(value: ReferrerPolicyProperty) {
    this._referrerPolicy.internalValue = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy.internalValue;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity = new StrictTransportSecurityPropertyOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }
  public putStrictTransportSecurity(value: StrictTransportSecurityProperty) {
    this._strictTransportSecurity.internalValue = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity.internalValue;
  }

  // xss_protection - computed: false, optional: true, required: false
  private _xssProtection = new XssProtectionPropertyOutputReference(this, "xss_protection");
  public get xssProtection() {
    return this._xssProtection;
  }
  public putXssProtection(value: XssProtectionProperty) {
    this._xssProtection.internalValue = value;
  }
  public resetXssProtection() {
    this._xssProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssProtectionInput() {
    return this._xssProtection.internalValue;
  }
}
export interface ServerTimingHeadersConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#enabled AwsCloudfrontResponseHeadersPolicy#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_response_headers_policy#sampling_rate AwsCloudfrontResponseHeadersPolicy#sampling_rate}
  */
  readonly samplingRate: number;
}
export class ServerTimingHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerTimingHeadersConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimingHeadersConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
}
