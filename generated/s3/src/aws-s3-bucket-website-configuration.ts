// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsS3BucketWebsiteConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#bucket AwsS3BucketWebsiteConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#expected_bucket_owner AwsS3BucketWebsiteConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#id AwsS3BucketWebsiteConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#region AwsS3BucketWebsiteConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#routing_rules AwsS3BucketWebsiteConfiguration#routing_rules}
  */
  readonly routingRules?: string;
  /**
  * error_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#error_document AwsS3BucketWebsiteConfiguration#error_document}
  */
  readonly errorDocument?: AwsS3BucketWebsiteConfiguration.ErrorDocumentProperty;
  /**
  * index_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#index_document AwsS3BucketWebsiteConfiguration#index_document}
  */
  readonly indexDocument?: AwsS3BucketWebsiteConfiguration.IndexDocumentProperty;
  /**
  * redirect_all_requests_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#redirect_all_requests_to AwsS3BucketWebsiteConfiguration#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToProperty;
  /**
  * routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#routing_rule AwsS3BucketWebsiteConfiguration#routing_rule}
  */
  readonly routingRule?: AwsS3BucketWebsiteConfiguration.RoutingRuleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration aws_s3_bucket_website_configuration}
*/
export class AwsS3BucketWebsiteConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_website_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsS3BucketWebsiteConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsS3BucketWebsiteConfiguration to import
  * @param importFromId The id of the existing AwsS3BucketWebsiteConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsS3BucketWebsiteConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_website_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration aws_s3_bucket_website_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsS3BucketWebsiteConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsS3BucketWebsiteConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_website_configuration',
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
    this._region = config.region;
    this._routingRules = config.routingRules;
    this._errorDocument.internalValue = config.errorDocument;
    this._indexDocument.internalValue = config.indexDocument;
    this._redirectAllRequestsTo.internalValue = config.redirectAllRequestsTo;
    this._routingRule.internalValue = config.routingRule;
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

  // routing_rules - computed: true, optional: true, required: false
  private _routingRules?: string; 
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
  public set routingRules(value: string) {
    this._routingRules = value;
  }
  public resetRoutingRules() {
    this._routingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules;
  }

  // website_domain - computed: true, optional: false, required: false
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }

  // website_endpoint - computed: true, optional: false, required: false
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument = new AwsS3BucketWebsiteConfiguration.ErrorDocumentPropertyOutputReference(this, "error_document");
  public get errorDocument() {
    return this._errorDocument;
  }
  public putErrorDocument(value: AwsS3BucketWebsiteConfiguration.ErrorDocumentProperty) {
    this._errorDocument.internalValue = value;
  }
  public resetErrorDocument() {
    this._errorDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument.internalValue;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument = new AwsS3BucketWebsiteConfiguration.IndexDocumentPropertyOutputReference(this, "index_document");
  public get indexDocument() {
    return this._indexDocument;
  }
  public putIndexDocument(value: AwsS3BucketWebsiteConfiguration.IndexDocumentProperty) {
    this._indexDocument.internalValue = value;
  }
  public resetIndexDocument() {
    this._indexDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument.internalValue;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo = new AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToPropertyOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }
  public putRedirectAllRequestsTo(value: AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToProperty) {
    this._redirectAllRequestsTo.internalValue = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo.internalValue;
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule = new AwsS3BucketWebsiteConfiguration.RoutingRulePropertyList(this, "routing_rule", false);
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: AwsS3BucketWebsiteConfiguration.RoutingRuleProperty[] | cdktn.IResolvable) {
    this._routingRule.internalValue = value;
  }
  public resetRoutingRule() {
    this._routingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktn.stringToTerraform(this._expectedBucketOwner),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      routing_rules: cdktn.stringToTerraform(this._routingRules),
      error_document: awsS3BucketWebsiteConfigurationErrorDocumentPropertyToTerraform(this._errorDocument.internalValue),
      index_document: awsS3BucketWebsiteConfigurationIndexDocumentPropertyToTerraform(this._indexDocument.internalValue),
      redirect_all_requests_to: awsS3BucketWebsiteConfigurationRedirectAllRequestsToPropertyToTerraform(this._redirectAllRequestsTo.internalValue),
      routing_rule: cdktn.listMapper(awsS3BucketWebsiteConfigurationRoutingRulePropertyToTerraform, true)(this._routingRule.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_rules: {
        value: cdktn.stringToHclTerraform(this._routingRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_document: {
        value: awsS3BucketWebsiteConfigurationErrorDocumentPropertyToHclTerraform(this._errorDocument.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3BucketWebsiteConfiguration.ErrorDocumentPropertyList",
      },
      index_document: {
        value: awsS3BucketWebsiteConfigurationIndexDocumentPropertyToHclTerraform(this._indexDocument.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3BucketWebsiteConfiguration.IndexDocumentPropertyList",
      },
      redirect_all_requests_to: {
        value: awsS3BucketWebsiteConfigurationRedirectAllRequestsToPropertyToHclTerraform(this._redirectAllRequestsTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToPropertyList",
      },
      routing_rule: {
        value: cdktn.listMapperHcl(awsS3BucketWebsiteConfigurationRoutingRulePropertyToHclTerraform, true)(this._routingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3BucketWebsiteConfiguration.RoutingRulePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsS3BucketWebsiteConfigurationErrorDocumentPropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.ErrorDocumentPropertyOutputReference | AwsS3BucketWebsiteConfiguration.ErrorDocumentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsS3BucketWebsiteConfigurationErrorDocumentPropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.ErrorDocumentPropertyOutputReference | AwsS3BucketWebsiteConfiguration.ErrorDocumentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsS3BucketWebsiteConfigurationIndexDocumentPropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.IndexDocumentPropertyOutputReference | AwsS3BucketWebsiteConfiguration.IndexDocumentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function awsS3BucketWebsiteConfigurationIndexDocumentPropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.IndexDocumentPropertyOutputReference | AwsS3BucketWebsiteConfiguration.IndexDocumentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketWebsiteConfigurationRedirectAllRequestsToPropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToPropertyOutputReference | AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_name: cdktn.stringToTerraform(struct!.hostName),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function awsS3BucketWebsiteConfigurationRedirectAllRequestsToPropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToPropertyOutputReference | AwsS3BucketWebsiteConfiguration.RedirectAllRequestsToProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_name: {
      value: cdktn.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketWebsiteConfigurationConditionPropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.ConditionPropertyOutputReference | AwsS3BucketWebsiteConfiguration.ConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_error_code_returned_equals: cdktn.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktn.stringToTerraform(struct!.keyPrefixEquals),
  }
}


export function awsS3BucketWebsiteConfigurationConditionPropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.ConditionPropertyOutputReference | AwsS3BucketWebsiteConfiguration.ConditionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_error_code_returned_equals: {
      value: cdktn.stringToHclTerraform(struct!.httpErrorCodeReturnedEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix_equals: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefixEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketWebsiteConfigurationRedirectPropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.RedirectPropertyOutputReference | AwsS3BucketWebsiteConfiguration.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_name: cdktn.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktn.stringToTerraform(struct!.httpRedirectCode),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    replace_key_prefix_with: cdktn.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktn.stringToTerraform(struct!.replaceKeyWith),
  }
}


export function awsS3BucketWebsiteConfigurationRedirectPropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.RedirectPropertyOutputReference | AwsS3BucketWebsiteConfiguration.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_name: {
      value: cdktn.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_redirect_code: {
      value: cdktn.stringToHclTerraform(struct!.httpRedirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_prefix_with: {
      value: cdktn.stringToHclTerraform(struct!.replaceKeyPrefixWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_with: {
      value: cdktn.stringToHclTerraform(struct!.replaceKeyWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3BucketWebsiteConfigurationRoutingRulePropertyToTerraform(struct?: AwsS3BucketWebsiteConfiguration.RoutingRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: awsS3BucketWebsiteConfigurationConditionPropertyToTerraform(struct!.condition),
    redirect: awsS3BucketWebsiteConfigurationRedirectPropertyToTerraform(struct!.redirect),
  }
}


export function awsS3BucketWebsiteConfigurationRoutingRulePropertyToHclTerraform(struct?: AwsS3BucketWebsiteConfiguration.RoutingRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: awsS3BucketWebsiteConfigurationConditionPropertyToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionPropertyList",
    },
    redirect: {
      value: awsS3BucketWebsiteConfigurationRedirectPropertyToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "RedirectPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsS3BucketWebsiteConfiguration {
export interface ErrorDocumentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#key AwsS3BucketWebsiteConfiguration#key}
  */
  readonly key: string;
}
export class ErrorDocumentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorDocumentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorDocumentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
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
export interface IndexDocumentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#suffix AwsS3BucketWebsiteConfiguration#suffix}
  */
  readonly suffix: string;
}
export class IndexDocumentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IndexDocumentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexDocumentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suffix = value.suffix;
    }
  }

  // suffix - computed: false, optional: false, required: true
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface RedirectAllRequestsToProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#host_name AwsS3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#protocol AwsS3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
}
export class RedirectAllRequestsToPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedirectAllRequestsToProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectAllRequestsToProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._protocol = value.protocol;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface ConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals AwsS3BucketWebsiteConfiguration#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#key_prefix_equals AwsS3BucketWebsiteConfiguration#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConditionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpErrorCodeReturnedEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
    }
    if (this._keyPrefixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
    }
  }

  // http_error_code_returned_equals - computed: false, optional: true, required: false
  private _httpErrorCodeReturnedEquals?: string; 
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }
  public set httpErrorCodeReturnedEquals(value: string) {
    this._httpErrorCodeReturnedEquals = value;
  }
  public resetHttpErrorCodeReturnedEquals() {
    this._httpErrorCodeReturnedEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeReturnedEqualsInput() {
    return this._httpErrorCodeReturnedEquals;
  }

  // key_prefix_equals - computed: false, optional: true, required: false
  private _keyPrefixEquals?: string; 
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
  public set keyPrefixEquals(value: string) {
    this._keyPrefixEquals = value;
  }
  public resetKeyPrefixEquals() {
    this._keyPrefixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixEqualsInput() {
    return this._keyPrefixEquals;
  }
}
export interface RedirectProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#host_name AwsS3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#http_redirect_code AwsS3BucketWebsiteConfiguration#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#protocol AwsS3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with AwsS3BucketWebsiteConfiguration#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#replace_key_with AwsS3BucketWebsiteConfiguration#replace_key_with}
  */
  readonly replaceKeyWith?: string;
}
export class RedirectPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedirectProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._protocol = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._protocol = value.protocol;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_redirect_code - computed: false, optional: true, required: false
  private _httpRedirectCode?: string; 
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }
  public set httpRedirectCode(value: string) {
    this._httpRedirectCode = value;
  }
  public resetHttpRedirectCode() {
    this._httpRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectCodeInput() {
    return this._httpRedirectCode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replace_key_prefix_with - computed: false, optional: true, required: false
  private _replaceKeyPrefixWith?: string; 
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }
  public set replaceKeyPrefixWith(value: string) {
    this._replaceKeyPrefixWith = value;
  }
  public resetReplaceKeyPrefixWith() {
    this._replaceKeyPrefixWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyPrefixWithInput() {
    return this._replaceKeyPrefixWith;
  }

  // replace_key_with - computed: false, optional: true, required: false
  private _replaceKeyWith?: string; 
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
  public set replaceKeyWith(value: string) {
    this._replaceKeyWith = value;
  }
  public resetReplaceKeyWith() {
    this._replaceKeyWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyWithInput() {
    return this._replaceKeyWith;
  }
}
export interface RoutingRuleProperty {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#condition AwsS3BucketWebsiteConfiguration#condition}
  */
  readonly condition?: ConditionProperty;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_website_configuration#redirect AwsS3BucketWebsiteConfiguration#redirect}
  */
  readonly redirect: RedirectProperty;
}
export class RoutingRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RoutingRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._redirect.internalValue = value.redirect;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ConditionPropertyOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ConditionProperty) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // redirect - computed: false, optional: false, required: true
  private _redirect = new RedirectPropertyOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: RedirectProperty) {
    this._redirect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class RoutingRulePropertyList extends cdktn.ComplexList {
  public internalValue? : RoutingRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): RoutingRulePropertyOutputReference {
    return new RoutingRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
