// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDistributionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#aliases AwsDistribution#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#anycast_ip_list_id AwsDistribution#anycast_ip_list_id}
  */
  readonly anycastIpListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#comment AwsDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#continuous_deployment_policy_id AwsDistribution#continuous_deployment_policy_id}
  */
  readonly continuousDeploymentPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#default_root_object AwsDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#enabled AwsDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#http_version AwsDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#id AwsDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#is_ipv6_enabled AwsDistribution#is_ipv6_enabled}
  */
  readonly isIpv6Enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#price_class AwsDistribution#price_class}
  */
  readonly priceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#retain_on_delete AwsDistribution#retain_on_delete}
  */
  readonly retainOnDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#staging AwsDistribution#staging}
  */
  readonly staging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#tags AwsDistribution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#tags_all AwsDistribution#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#wait_for_deployment AwsDistribution#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#web_acl_id AwsDistribution#web_acl_id}
  */
  readonly webAclId?: string;
  /**
  * cache_tag_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cache_tag_config AwsDistribution#cache_tag_config}
  */
  readonly cacheTagConfig?: AwsDistribution.CacheTagConfigProperty;
  /**
  * connection_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#connection_function_association AwsDistribution#connection_function_association}
  */
  readonly connectionFunctionAssociation?: AwsDistribution.ConnectionFunctionAssociationProperty;
  /**
  * custom_error_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#custom_error_response AwsDistribution#custom_error_response}
  */
  readonly customErrorResponse?: AwsDistribution.CustomErrorResponseProperty[] | cdktn.IResolvable;
  /**
  * default_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#default_cache_behavior AwsDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior: AwsDistribution.DefaultCacheBehaviorProperty;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#logging_config AwsDistribution#logging_config}
  */
  readonly loggingConfig?: AwsDistribution.LoggingConfigProperty;
  /**
  * ordered_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#ordered_cache_behavior AwsDistribution#ordered_cache_behavior}
  */
  readonly orderedCacheBehavior?: AwsDistribution.OrderedCacheBehaviorProperty[] | cdktn.IResolvable;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin AwsDistribution#origin}
  */
  readonly origin: AwsDistribution.OriginProperty[] | cdktn.IResolvable;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_group AwsDistribution#origin_group}
  */
  readonly originGroup?: AwsDistribution.OriginGroupProperty[] | cdktn.IResolvable;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#restrictions AwsDistribution#restrictions}
  */
  readonly restrictions: AwsDistribution.RestrictionsProperty;
  /**
  * viewer_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#viewer_certificate AwsDistribution#viewer_certificate}
  */
  readonly viewerCertificate: AwsDistribution.ViewerCertificateProperty;
  /**
  * viewer_mtls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#viewer_mtls_config AwsDistribution#viewer_mtls_config}
  */
  readonly viewerMtlsConfig?: AwsDistribution.ViewerMtlsConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution}
*/
export class AwsDistribution extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDistribution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDistribution to import
  * @param importFromId The id of the existing AwsDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_distribution',
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
    this._aliases = config.aliases;
    this._anycastIpListId = config.anycastIpListId;
    this._comment = config.comment;
    this._continuousDeploymentPolicyId = config.continuousDeploymentPolicyId;
    this._defaultRootObject = config.defaultRootObject;
    this._enabled = config.enabled;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._isIpv6Enabled = config.isIpv6Enabled;
    this._priceClass = config.priceClass;
    this._retainOnDelete = config.retainOnDelete;
    this._staging = config.staging;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._waitForDeployment = config.waitForDeployment;
    this._webAclId = config.webAclId;
    this._cacheTagConfig.internalValue = config.cacheTagConfig;
    this._connectionFunctionAssociation.internalValue = config.connectionFunctionAssociation;
    this._customErrorResponse.internalValue = config.customErrorResponse;
    this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._orderedCacheBehavior.internalValue = config.orderedCacheBehavior;
    this._origin.internalValue = config.origin;
    this._originGroup.internalValue = config.originGroup;
    this._restrictions.internalValue = config.restrictions;
    this._viewerCertificate.internalValue = config.viewerCertificate;
    this._viewerMtlsConfig.internalValue = config.viewerMtlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktn.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // anycast_ip_list_id - computed: false, optional: true, required: false
  private _anycastIpListId?: string; 
  public get anycastIpListId() {
    return this.getStringAttribute('anycast_ip_list_id');
  }
  public set anycastIpListId(value: string) {
    this._anycastIpListId = value;
  }
  public resetAnycastIpListId() {
    this._anycastIpListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastIpListIdInput() {
    return this._anycastIpListId;
  }

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

  // continuous_deployment_policy_id - computed: true, optional: true, required: false
  private _continuousDeploymentPolicyId?: string; 
  public get continuousDeploymentPolicyId() {
    return this.getStringAttribute('continuous_deployment_policy_id');
  }
  public set continuousDeploymentPolicyId(value: string) {
    this._continuousDeploymentPolicyId = value;
  }
  public resetContinuousDeploymentPolicyId() {
    this._continuousDeploymentPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDeploymentPolicyIdInput() {
    return this._continuousDeploymentPolicyId;
  }

  // default_root_object - computed: false, optional: true, required: false
  private _defaultRootObject?: string; 
  public get defaultRootObject() {
    return this.getStringAttribute('default_root_object');
  }
  public set defaultRootObject(value: string) {
    this._defaultRootObject = value;
  }
  public resetDefaultRootObject() {
    this._defaultRootObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootObjectInput() {
    return this._defaultRootObject;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // in_progress_validation_batches - computed: true, optional: false, required: false
  public get inProgressValidationBatches() {
    return this.getNumberAttribute('in_progress_validation_batches');
  }

  // is_ipv6_enabled - computed: false, optional: true, required: false
  private _isIpv6Enabled?: boolean | cdktn.IResolvable; 
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6_enabled');
  }
  public set isIpv6Enabled(value: boolean | cdktn.IResolvable) {
    this._isIpv6Enabled = value;
  }
  public resetIsIpv6Enabled() {
    this._isIpv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6EnabledInput() {
    return this._isIpv6Enabled;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // logging_v1_enabled - computed: true, optional: false, required: false
  public get loggingV1Enabled() {
    return this.getBooleanAttribute('logging_v1_enabled');
  }

  // price_class - computed: false, optional: true, required: false
  private _priceClass?: string; 
  public get priceClass() {
    return this.getStringAttribute('price_class');
  }
  public set priceClass(value: string) {
    this._priceClass = value;
  }
  public resetPriceClass() {
    this._priceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceClassInput() {
    return this._priceClass;
  }

  // retain_on_delete - computed: false, optional: true, required: false
  private _retainOnDelete?: boolean | cdktn.IResolvable; 
  public get retainOnDelete() {
    return this.getBooleanAttribute('retain_on_delete');
  }
  public set retainOnDelete(value: boolean | cdktn.IResolvable) {
    this._retainOnDelete = value;
  }
  public resetRetainOnDelete() {
    this._retainOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOnDeleteInput() {
    return this._retainOnDelete;
  }

  // staging - computed: false, optional: true, required: false
  private _staging?: boolean | cdktn.IResolvable; 
  public get staging() {
    return this.getBooleanAttribute('staging');
  }
  public set staging(value: boolean | cdktn.IResolvable) {
    this._staging = value;
  }
  public resetStaging() {
    this._staging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // trusted_key_groups - computed: true, optional: false, required: false
  private _trustedKeyGroups = new AwsDistribution.TrustedKeyGroupsPropertyList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: true, optional: false, required: false
  private _trustedSigners = new AwsDistribution.TrustedSignersPropertyList(this, "trusted_signers", false);
  public get trustedSigners() {
    return this._trustedSigners;
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktn.IResolvable; 
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktn.IResolvable) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment;
  }

  // web_acl_id - computed: false, optional: true, required: false
  private _webAclId?: string; 
  public get webAclId() {
    return this.getStringAttribute('web_acl_id');
  }
  public set webAclId(value: string) {
    this._webAclId = value;
  }
  public resetWebAclId() {
    this._webAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclIdInput() {
    return this._webAclId;
  }

  // cache_tag_config - computed: false, optional: true, required: false
  private _cacheTagConfig = new AwsDistribution.CacheTagConfigPropertyOutputReference(this, "cache_tag_config");
  public get cacheTagConfig() {
    return this._cacheTagConfig;
  }
  public putCacheTagConfig(value: AwsDistribution.CacheTagConfigProperty) {
    this._cacheTagConfig.internalValue = value;
  }
  public resetCacheTagConfig() {
    this._cacheTagConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTagConfigInput() {
    return this._cacheTagConfig.internalValue;
  }

  // connection_function_association - computed: false, optional: true, required: false
  private _connectionFunctionAssociation = new AwsDistribution.ConnectionFunctionAssociationPropertyOutputReference(this, "connection_function_association");
  public get connectionFunctionAssociation() {
    return this._connectionFunctionAssociation;
  }
  public putConnectionFunctionAssociation(value: AwsDistribution.ConnectionFunctionAssociationProperty) {
    this._connectionFunctionAssociation.internalValue = value;
  }
  public resetConnectionFunctionAssociation() {
    this._connectionFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFunctionAssociationInput() {
    return this._connectionFunctionAssociation.internalValue;
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse = new AwsDistribution.CustomErrorResponsePropertyList(this, "custom_error_response", true);
  public get customErrorResponse() {
    return this._customErrorResponse;
  }
  public putCustomErrorResponse(value: AwsDistribution.CustomErrorResponseProperty[] | cdktn.IResolvable) {
    this._customErrorResponse.internalValue = value;
  }
  public resetCustomErrorResponse() {
    this._customErrorResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponseInput() {
    return this._customErrorResponse.internalValue;
  }

  // default_cache_behavior - computed: false, optional: false, required: true
  private _defaultCacheBehavior = new AwsDistribution.DefaultCacheBehaviorPropertyOutputReference(this, "default_cache_behavior");
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: AwsDistribution.DefaultCacheBehaviorProperty) {
    this._defaultCacheBehavior.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new AwsDistribution.LoggingConfigPropertyOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: AwsDistribution.LoggingConfigProperty) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // ordered_cache_behavior - computed: false, optional: true, required: false
  private _orderedCacheBehavior = new AwsDistribution.OrderedCacheBehaviorPropertyList(this, "ordered_cache_behavior", false);
  public get orderedCacheBehavior() {
    return this._orderedCacheBehavior;
  }
  public putOrderedCacheBehavior(value: AwsDistribution.OrderedCacheBehaviorProperty[] | cdktn.IResolvable) {
    this._orderedCacheBehavior.internalValue = value;
  }
  public resetOrderedCacheBehavior() {
    this._orderedCacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedCacheBehaviorInput() {
    return this._orderedCacheBehavior.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new AwsDistribution.OriginPropertyList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AwsDistribution.OriginProperty[] | cdktn.IResolvable) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new AwsDistribution.OriginGroupPropertyList(this, "origin_group", true);
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: AwsDistribution.OriginGroupProperty[] | cdktn.IResolvable) {
    this._originGroup.internalValue = value;
  }
  public resetOriginGroup() {
    this._originGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions = new AwsDistribution.RestrictionsPropertyOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: AwsDistribution.RestrictionsProperty) {
    this._restrictions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // viewer_certificate - computed: false, optional: false, required: true
  private _viewerCertificate = new AwsDistribution.ViewerCertificatePropertyOutputReference(this, "viewer_certificate");
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public putViewerCertificate(value: AwsDistribution.ViewerCertificateProperty) {
    this._viewerCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate.internalValue;
  }

  // viewer_mtls_config - computed: false, optional: true, required: false
  private _viewerMtlsConfig = new AwsDistribution.ViewerMtlsConfigPropertyOutputReference(this, "viewer_mtls_config");
  public get viewerMtlsConfig() {
    return this._viewerMtlsConfig;
  }
  public putViewerMtlsConfig(value: AwsDistribution.ViewerMtlsConfigProperty) {
    this._viewerMtlsConfig.internalValue = value;
  }
  public resetViewerMtlsConfig() {
    this._viewerMtlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerMtlsConfigInput() {
    return this._viewerMtlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._aliases),
      anycast_ip_list_id: cdktn.stringToTerraform(this._anycastIpListId),
      comment: cdktn.stringToTerraform(this._comment),
      continuous_deployment_policy_id: cdktn.stringToTerraform(this._continuousDeploymentPolicyId),
      default_root_object: cdktn.stringToTerraform(this._defaultRootObject),
      enabled: cdktn.booleanToTerraform(this._enabled),
      http_version: cdktn.stringToTerraform(this._httpVersion),
      id: cdktn.stringToTerraform(this._id),
      is_ipv6_enabled: cdktn.booleanToTerraform(this._isIpv6Enabled),
      price_class: cdktn.stringToTerraform(this._priceClass),
      retain_on_delete: cdktn.booleanToTerraform(this._retainOnDelete),
      staging: cdktn.booleanToTerraform(this._staging),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      wait_for_deployment: cdktn.booleanToTerraform(this._waitForDeployment),
      web_acl_id: cdktn.stringToTerraform(this._webAclId),
      cache_tag_config: awsDistributionCacheTagConfigPropertyToTerraform(this._cacheTagConfig.internalValue),
      connection_function_association: awsDistributionConnectionFunctionAssociationPropertyToTerraform(this._connectionFunctionAssociation.internalValue),
      custom_error_response: cdktn.listMapper(awsDistributionCustomErrorResponsePropertyToTerraform, true)(this._customErrorResponse.internalValue),
      default_cache_behavior: awsDistributionDefaultCacheBehaviorPropertyToTerraform(this._defaultCacheBehavior.internalValue),
      logging_config: awsDistributionLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
      ordered_cache_behavior: cdktn.listMapper(awsDistributionOrderedCacheBehaviorPropertyToTerraform, true)(this._orderedCacheBehavior.internalValue),
      origin: cdktn.listMapper(awsDistributionOriginPropertyToTerraform, true)(this._origin.internalValue),
      origin_group: cdktn.listMapper(awsDistributionOriginGroupPropertyToTerraform, true)(this._originGroup.internalValue),
      restrictions: awsDistributionRestrictionsPropertyToTerraform(this._restrictions.internalValue),
      viewer_certificate: awsDistributionViewerCertificatePropertyToTerraform(this._viewerCertificate.internalValue),
      viewer_mtls_config: awsDistributionViewerMtlsConfigPropertyToTerraform(this._viewerMtlsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      anycast_ip_list_id: {
        value: cdktn.stringToHclTerraform(this._anycastIpListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuous_deployment_policy_id: {
        value: cdktn.stringToHclTerraform(this._continuousDeploymentPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_root_object: {
        value: cdktn.stringToHclTerraform(this._defaultRootObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_version: {
        value: cdktn.stringToHclTerraform(this._httpVersion),
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
      is_ipv6_enabled: {
        value: cdktn.booleanToHclTerraform(this._isIpv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      price_class: {
        value: cdktn.stringToHclTerraform(this._priceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_on_delete: {
        value: cdktn.booleanToHclTerraform(this._retainOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      staging: {
        value: cdktn.booleanToHclTerraform(this._staging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      wait_for_deployment: {
        value: cdktn.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_acl_id: {
        value: cdktn.stringToHclTerraform(this._webAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_tag_config: {
        value: awsDistributionCacheTagConfigPropertyToHclTerraform(this._cacheTagConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.CacheTagConfigPropertyList",
      },
      connection_function_association: {
        value: awsDistributionConnectionFunctionAssociationPropertyToHclTerraform(this._connectionFunctionAssociation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.ConnectionFunctionAssociationPropertyList",
      },
      custom_error_response: {
        value: cdktn.listMapperHcl(awsDistributionCustomErrorResponsePropertyToHclTerraform, true)(this._customErrorResponse.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDistribution.CustomErrorResponsePropertyList",
      },
      default_cache_behavior: {
        value: awsDistributionDefaultCacheBehaviorPropertyToHclTerraform(this._defaultCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.DefaultCacheBehaviorPropertyList",
      },
      logging_config: {
        value: awsDistributionLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.LoggingConfigPropertyList",
      },
      ordered_cache_behavior: {
        value: cdktn.listMapperHcl(awsDistributionOrderedCacheBehaviorPropertyToHclTerraform, true)(this._orderedCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.OrderedCacheBehaviorPropertyList",
      },
      origin: {
        value: cdktn.listMapperHcl(awsDistributionOriginPropertyToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDistribution.OriginPropertyList",
      },
      origin_group: {
        value: cdktn.listMapperHcl(awsDistributionOriginGroupPropertyToHclTerraform, true)(this._originGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDistribution.OriginGroupPropertyList",
      },
      restrictions: {
        value: awsDistributionRestrictionsPropertyToHclTerraform(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.RestrictionsPropertyList",
      },
      viewer_certificate: {
        value: awsDistributionViewerCertificatePropertyToHclTerraform(this._viewerCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.ViewerCertificatePropertyList",
      },
      viewer_mtls_config: {
        value: awsDistributionViewerMtlsConfigPropertyToHclTerraform(this._viewerMtlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDistribution.ViewerMtlsConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDistributionTrustedKeyGroupsItemsPropertyToTerraform(struct?: AwsDistribution.TrustedKeyGroupsItemsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsDistributionTrustedKeyGroupsItemsPropertyToHclTerraform(struct?: AwsDistribution.TrustedKeyGroupsItemsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsDistributionTrustedKeyGroupsPropertyToTerraform(struct?: AwsDistribution.TrustedKeyGroupsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsDistributionTrustedKeyGroupsPropertyToHclTerraform(struct?: AwsDistribution.TrustedKeyGroupsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsDistributionTrustedSignersItemsPropertyToTerraform(struct?: AwsDistribution.TrustedSignersItemsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsDistributionTrustedSignersItemsPropertyToHclTerraform(struct?: AwsDistribution.TrustedSignersItemsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsDistributionTrustedSignersPropertyToTerraform(struct?: AwsDistribution.TrustedSignersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsDistributionTrustedSignersPropertyToHclTerraform(struct?: AwsDistribution.TrustedSignersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsDistributionCacheTagConfigPropertyToTerraform(struct?: AwsDistribution.CacheTagConfigPropertyOutputReference | AwsDistribution.CacheTagConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
  }
}


export function awsDistributionCacheTagConfigPropertyToHclTerraform(struct?: AwsDistribution.CacheTagConfigPropertyOutputReference | AwsDistribution.CacheTagConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionConnectionFunctionAssociationPropertyToTerraform(struct?: AwsDistribution.ConnectionFunctionAssociationPropertyOutputReference | AwsDistribution.ConnectionFunctionAssociationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function awsDistributionConnectionFunctionAssociationPropertyToHclTerraform(struct?: AwsDistribution.ConnectionFunctionAssociationPropertyOutputReference | AwsDistribution.ConnectionFunctionAssociationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionCustomErrorResponsePropertyToTerraform(struct?: AwsDistribution.CustomErrorResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_caching_min_ttl: cdktn.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktn.numberToTerraform(struct!.errorCode),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_page_path: cdktn.stringToTerraform(struct!.responsePagePath),
  }
}


export function awsDistributionCustomErrorResponsePropertyToHclTerraform(struct?: AwsDistribution.CustomErrorResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_caching_min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.errorCachingMinTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_code: {
      value: cdktn.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_page_path: {
      value: cdktn.stringToHclTerraform(struct!.responsePagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorForwardedValuesCookiesPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorForwardedValuesCookiesPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorForwardedValuesCookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward: cdktn.stringToTerraform(struct!.forward),
    whitelisted_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.whitelistedNames),
  }
}


export function awsDistributionDefaultCacheBehaviorForwardedValuesCookiesPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorForwardedValuesCookiesPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorForwardedValuesCookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward: {
      value: cdktn.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.whitelistedNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorForwardedValuesPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorForwardedValuesPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorForwardedValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
    query_string: cdktn.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringCacheKeys),
    cookies: awsDistributionDefaultCacheBehaviorForwardedValuesCookiesPropertyToTerraform(struct!.cookies),
  }
}


export function awsDistributionDefaultCacheBehaviorForwardedValuesPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorForwardedValuesPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorForwardedValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string: {
      value: cdktn.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringCacheKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookies: {
      value: awsDistributionDefaultCacheBehaviorForwardedValuesCookiesPropertyToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultCacheBehaviorForwardedValuesCookiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorFunctionAssociationPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsDistributionDefaultCacheBehaviorFunctionAssociationPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorGrpcConfigPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorGrpcConfigPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorGrpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsDistributionDefaultCacheBehaviorGrpcConfigPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorGrpcConfigPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorGrpcConfigProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function awsDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktn.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionDefaultCacheBehaviorPropertyToTerraform(struct?: AwsDistribution.DefaultCacheBehaviorPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    compress: cdktn.booleanToTerraform(struct!.compress),
    default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktn.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktn.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedKeyGroups),
    trusted_signers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedSigners),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: awsDistributionDefaultCacheBehaviorForwardedValuesPropertyToTerraform(struct!.forwardedValues),
    function_association: cdktn.listMapper(awsDistributionDefaultCacheBehaviorFunctionAssociationPropertyToTerraform, true)(struct!.functionAssociation),
    grpc_config: awsDistributionDefaultCacheBehaviorGrpcConfigPropertyToTerraform(struct!.grpcConfig),
    lambda_function_association: cdktn.listMapper(awsDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToTerraform, true)(struct!.lambdaFunctionAssociation),
  }
}


export function awsDistributionDefaultCacheBehaviorPropertyToHclTerraform(struct?: AwsDistribution.DefaultCacheBehaviorPropertyOutputReference | AwsDistribution.DefaultCacheBehaviorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktn.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktn.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedKeyGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_signers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedSigners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: awsDistributionDefaultCacheBehaviorForwardedValuesPropertyToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultCacheBehaviorForwardedValuesPropertyList",
    },
    function_association: {
      value: cdktn.listMapperHcl(awsDistributionDefaultCacheBehaviorFunctionAssociationPropertyToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultCacheBehaviorFunctionAssociationPropertyList",
    },
    grpc_config: {
      value: awsDistributionDefaultCacheBehaviorGrpcConfigPropertyToHclTerraform(struct!.grpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultCacheBehaviorGrpcConfigPropertyList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(awsDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultCacheBehaviorLambdaFunctionAssociationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionLoggingConfigPropertyToTerraform(struct?: AwsDistribution.LoggingConfigPropertyOutputReference | AwsDistribution.LoggingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    include_cookies: cdktn.booleanToTerraform(struct!.includeCookies),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function awsDistributionLoggingConfigPropertyToHclTerraform(struct?: AwsDistribution.LoggingConfigPropertyOutputReference | AwsDistribution.LoggingConfigProperty): any {
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
    include_cookies: {
      value: cdktn.booleanToHclTerraform(struct!.includeCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorForwardedValuesCookiesPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorForwardedValuesCookiesPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorForwardedValuesCookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward: cdktn.stringToTerraform(struct!.forward),
    whitelisted_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.whitelistedNames),
  }
}


export function awsDistributionOrderedCacheBehaviorForwardedValuesCookiesPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorForwardedValuesCookiesPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorForwardedValuesCookiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward: {
      value: cdktn.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.whitelistedNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorForwardedValuesPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorForwardedValuesPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorForwardedValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
    query_string: cdktn.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringCacheKeys),
    cookies: awsDistributionOrderedCacheBehaviorForwardedValuesCookiesPropertyToTerraform(struct!.cookies),
  }
}


export function awsDistributionOrderedCacheBehaviorForwardedValuesPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorForwardedValuesPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorForwardedValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string: {
      value: cdktn.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringCacheKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookies: {
      value: awsDistributionOrderedCacheBehaviorForwardedValuesCookiesPropertyToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "OrderedCacheBehaviorForwardedValuesCookiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorFunctionAssociationPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsDistributionOrderedCacheBehaviorFunctionAssociationPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorGrpcConfigPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorGrpcConfigPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorGrpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsDistributionOrderedCacheBehaviorGrpcConfigPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorGrpcConfigPropertyOutputReference | AwsDistribution.OrderedCacheBehaviorGrpcConfigProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorLambdaFunctionAssociationPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function awsDistributionOrderedCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktn.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOrderedCacheBehaviorPropertyToTerraform(struct?: AwsDistribution.OrderedCacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    compress: cdktn.booleanToTerraform(struct!.compress),
    default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktn.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktn.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktn.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedKeyGroups),
    trusted_signers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedSigners),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: awsDistributionOrderedCacheBehaviorForwardedValuesPropertyToTerraform(struct!.forwardedValues),
    function_association: cdktn.listMapper(awsDistributionOrderedCacheBehaviorFunctionAssociationPropertyToTerraform, true)(struct!.functionAssociation),
    grpc_config: awsDistributionOrderedCacheBehaviorGrpcConfigPropertyToTerraform(struct!.grpcConfig),
    lambda_function_association: cdktn.listMapper(awsDistributionOrderedCacheBehaviorLambdaFunctionAssociationPropertyToTerraform, true)(struct!.lambdaFunctionAssociation),
  }
}


export function awsDistributionOrderedCacheBehaviorPropertyToHclTerraform(struct?: AwsDistribution.OrderedCacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktn.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_pattern: {
      value: cdktn.stringToHclTerraform(struct!.pathPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktn.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedKeyGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_signers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedSigners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: awsDistributionOrderedCacheBehaviorForwardedValuesPropertyToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "list",
      storageClassType: "OrderedCacheBehaviorForwardedValuesPropertyList",
    },
    function_association: {
      value: cdktn.listMapperHcl(awsDistributionOrderedCacheBehaviorFunctionAssociationPropertyToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "OrderedCacheBehaviorFunctionAssociationPropertyList",
    },
    grpc_config: {
      value: awsDistributionOrderedCacheBehaviorGrpcConfigPropertyToHclTerraform(struct!.grpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OrderedCacheBehaviorGrpcConfigPropertyList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(awsDistributionOrderedCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "OrderedCacheBehaviorLambdaFunctionAssociationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionCustomHeaderPropertyToTerraform(struct?: AwsDistribution.CustomHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDistributionCustomHeaderPropertyToHclTerraform(struct?: AwsDistribution.CustomHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDistributionOriginMtlsConfigPropertyToTerraform(struct?: AwsDistribution.OriginMtlsConfigPropertyOutputReference | AwsDistribution.OriginMtlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_certificate_arn: cdktn.stringToTerraform(struct!.clientCertificateArn),
  }
}


export function awsDistributionOriginMtlsConfigPropertyToHclTerraform(struct?: AwsDistribution.OriginMtlsConfigPropertyOutputReference | AwsDistribution.OriginMtlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionCustomOriginConfigPropertyToTerraform(struct?: AwsDistribution.CustomOriginConfigPropertyOutputReference | AwsDistribution.CustomOriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_port: cdktn.numberToTerraform(struct!.httpPort),
    https_port: cdktn.numberToTerraform(struct!.httpsPort),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    origin_keepalive_timeout: cdktn.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktn.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktn.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.originSslProtocols),
    origin_mtls_config: awsDistributionOriginMtlsConfigPropertyToTerraform(struct!.originMtlsConfig),
  }
}


export function awsDistributionCustomOriginConfigPropertyToHclTerraform(struct?: AwsDistribution.CustomOriginConfigPropertyOutputReference | AwsDistribution.CustomOriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_port: {
      value: cdktn.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktn.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_keepalive_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.originProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_read_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_ssl_protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.originSslProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    origin_mtls_config: {
      value: awsDistributionOriginMtlsConfigPropertyToHclTerraform(struct!.originMtlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OriginMtlsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOriginShieldPropertyToTerraform(struct?: AwsDistribution.OriginShieldPropertyOutputReference | AwsDistribution.OriginShieldProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktn.stringToTerraform(struct!.originShieldRegion),
  }
}


export function awsDistributionOriginShieldPropertyToHclTerraform(struct?: AwsDistribution.OriginShieldPropertyOutputReference | AwsDistribution.OriginShieldProperty): any {
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
    origin_shield_region: {
      value: cdktn.stringToHclTerraform(struct!.originShieldRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionS3OriginConfigPropertyToTerraform(struct?: AwsDistribution.S3OriginConfigPropertyOutputReference | AwsDistribution.S3OriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_access_identity: cdktn.stringToTerraform(struct!.originAccessIdentity),
  }
}


export function awsDistributionS3OriginConfigPropertyToHclTerraform(struct?: AwsDistribution.S3OriginConfigPropertyOutputReference | AwsDistribution.S3OriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    origin_access_identity: {
      value: cdktn.stringToHclTerraform(struct!.originAccessIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionVpcOriginConfigPropertyToTerraform(struct?: AwsDistribution.VpcOriginConfigPropertyOutputReference | AwsDistribution.VpcOriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_keepalive_timeout: cdktn.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_read_timeout: cdktn.numberToTerraform(struct!.originReadTimeout),
    owner_account_id: cdktn.stringToTerraform(struct!.ownerAccountId),
    vpc_origin_id: cdktn.stringToTerraform(struct!.vpcOriginId),
  }
}


export function awsDistributionVpcOriginConfigPropertyToHclTerraform(struct?: AwsDistribution.VpcOriginConfigPropertyOutputReference | AwsDistribution.VpcOriginConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    origin_keepalive_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_read_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOriginPropertyToTerraform(struct?: AwsDistribution.OriginProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_attempts: cdktn.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktn.numberToTerraform(struct!.connectionTimeout),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    origin_access_control_id: cdktn.stringToTerraform(struct!.originAccessControlId),
    origin_id: cdktn.stringToTerraform(struct!.originId),
    origin_path: cdktn.stringToTerraform(struct!.originPath),
    response_completion_timeout: cdktn.numberToTerraform(struct!.responseCompletionTimeout),
    custom_header: cdktn.listMapper(awsDistributionCustomHeaderPropertyToTerraform, true)(struct!.customHeader),
    custom_origin_config: awsDistributionCustomOriginConfigPropertyToTerraform(struct!.customOriginConfig),
    origin_shield: awsDistributionOriginShieldPropertyToTerraform(struct!.originShield),
    s3_origin_config: awsDistributionS3OriginConfigPropertyToTerraform(struct!.s3OriginConfig),
    vpc_origin_config: awsDistributionVpcOriginConfigPropertyToTerraform(struct!.vpcOriginConfig),
  }
}


export function awsDistributionOriginPropertyToHclTerraform(struct?: AwsDistribution.OriginProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_attempts: {
      value: cdktn.numberToHclTerraform(struct!.connectionAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_timeout: {
      value: cdktn.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_access_control_id: {
      value: cdktn.stringToHclTerraform(struct!.originAccessControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_path: {
      value: cdktn.stringToHclTerraform(struct!.originPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_completion_timeout: {
      value: cdktn.numberToHclTerraform(struct!.responseCompletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header: {
      value: cdktn.listMapperHcl(awsDistributionCustomHeaderPropertyToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "set",
      storageClassType: "CustomHeaderPropertyList",
    },
    custom_origin_config: {
      value: awsDistributionCustomOriginConfigPropertyToHclTerraform(struct!.customOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomOriginConfigPropertyList",
    },
    origin_shield: {
      value: awsDistributionOriginShieldPropertyToHclTerraform(struct!.originShield),
      isBlock: true,
      type: "list",
      storageClassType: "OriginShieldPropertyList",
    },
    s3_origin_config: {
      value: awsDistributionS3OriginConfigPropertyToHclTerraform(struct!.s3OriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "S3OriginConfigPropertyList",
    },
    vpc_origin_config: {
      value: awsDistributionVpcOriginConfigPropertyToHclTerraform(struct!.vpcOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcOriginConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionFailoverCriteriaPropertyToTerraform(struct?: AwsDistribution.FailoverCriteriaPropertyOutputReference | AwsDistribution.FailoverCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.statusCodes),
  }
}


export function awsDistributionFailoverCriteriaPropertyToHclTerraform(struct?: AwsDistribution.FailoverCriteriaPropertyOutputReference | AwsDistribution.FailoverCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionMemberPropertyToTerraform(struct?: AwsDistribution.MemberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_id: cdktn.stringToTerraform(struct!.originId),
  }
}


export function awsDistributionMemberPropertyToHclTerraform(struct?: AwsDistribution.MemberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionOriginGroupPropertyToTerraform(struct?: AwsDistribution.OriginGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_id: cdktn.stringToTerraform(struct!.originId),
    failover_criteria: awsDistributionFailoverCriteriaPropertyToTerraform(struct!.failoverCriteria),
    member: cdktn.listMapper(awsDistributionMemberPropertyToTerraform, true)(struct!.member),
  }
}


export function awsDistributionOriginGroupPropertyToHclTerraform(struct?: AwsDistribution.OriginGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_criteria: {
      value: awsDistributionFailoverCriteriaPropertyToHclTerraform(struct!.failoverCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "FailoverCriteriaPropertyList",
    },
    member: {
      value: cdktn.listMapperHcl(awsDistributionMemberPropertyToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "MemberPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionGeoRestrictionPropertyToTerraform(struct?: AwsDistribution.GeoRestrictionPropertyOutputReference | AwsDistribution.GeoRestrictionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
    restriction_type: cdktn.stringToTerraform(struct!.restrictionType),
  }
}


export function awsDistributionGeoRestrictionPropertyToHclTerraform(struct?: AwsDistribution.GeoRestrictionPropertyOutputReference | AwsDistribution.GeoRestrictionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restriction_type: {
      value: cdktn.stringToHclTerraform(struct!.restrictionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionRestrictionsPropertyToTerraform(struct?: AwsDistribution.RestrictionsPropertyOutputReference | AwsDistribution.RestrictionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_restriction: awsDistributionGeoRestrictionPropertyToTerraform(struct!.geoRestriction),
  }
}


export function awsDistributionRestrictionsPropertyToHclTerraform(struct?: AwsDistribution.RestrictionsPropertyOutputReference | AwsDistribution.RestrictionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_restriction: {
      value: awsDistributionGeoRestrictionPropertyToHclTerraform(struct!.geoRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "GeoRestrictionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionViewerCertificatePropertyToTerraform(struct?: AwsDistribution.ViewerCertificatePropertyOutputReference | AwsDistribution.ViewerCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm_certificate_arn: cdktn.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktn.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    iam_certificate_id: cdktn.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktn.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktn.stringToTerraform(struct!.sslSupportMethod),
  }
}


export function awsDistributionViewerCertificatePropertyToHclTerraform(struct?: AwsDistribution.ViewerCertificatePropertyOutputReference | AwsDistribution.ViewerCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.acmCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_default_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.cloudfrontDefaultCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_certificate_id: {
      value: cdktn.stringToHclTerraform(struct!.iamCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktn.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_support_method: {
      value: cdktn.stringToHclTerraform(struct!.sslSupportMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionTrustStoreConfigPropertyToTerraform(struct?: AwsDistribution.TrustStoreConfigPropertyOutputReference | AwsDistribution.TrustStoreConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advertise_trust_store_ca_names: cdktn.booleanToTerraform(struct!.advertiseTrustStoreCaNames),
    ignore_certificate_expiry: cdktn.booleanToTerraform(struct!.ignoreCertificateExpiry),
    trust_store_id: cdktn.stringToTerraform(struct!.trustStoreId),
  }
}


export function awsDistributionTrustStoreConfigPropertyToHclTerraform(struct?: AwsDistribution.TrustStoreConfigPropertyOutputReference | AwsDistribution.TrustStoreConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advertise_trust_store_ca_names: {
      value: cdktn.booleanToHclTerraform(struct!.advertiseTrustStoreCaNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_certificate_expiry: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreCertificateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_store_id: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDistributionViewerMtlsConfigPropertyToTerraform(struct?: AwsDistribution.ViewerMtlsConfigPropertyOutputReference | AwsDistribution.ViewerMtlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    trust_store_config: awsDistributionTrustStoreConfigPropertyToTerraform(struct!.trustStoreConfig),
  }
}


export function awsDistributionViewerMtlsConfigPropertyToHclTerraform(struct?: AwsDistribution.ViewerMtlsConfigPropertyOutputReference | AwsDistribution.ViewerMtlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_config: {
      value: awsDistributionTrustStoreConfigPropertyToHclTerraform(struct!.trustStoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrustStoreConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDistribution {
export interface TrustedKeyGroupsItemsProperty {
}
export class TrustedKeyGroupsItemsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TrustedKeyGroupsItemsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustedKeyGroupsItemsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_group_id - computed: true, optional: false, required: false
  public get keyGroupId() {
    return this.getStringAttribute('key_group_id');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return cdktn.Fn.tolist(this.getListAttribute('key_pair_ids'));
  }
}

export class TrustedKeyGroupsItemsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TrustedKeyGroupsItemsPropertyOutputReference {
    return new TrustedKeyGroupsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrustedKeyGroupsProperty {
}
export class TrustedKeyGroupsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TrustedKeyGroupsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustedKeyGroupsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  private _items = new TrustedKeyGroupsItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class TrustedKeyGroupsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TrustedKeyGroupsPropertyOutputReference {
    return new TrustedKeyGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrustedSignersItemsProperty {
}
export class TrustedSignersItemsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TrustedSignersItemsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustedSignersItemsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_number - computed: true, optional: false, required: false
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return cdktn.Fn.tolist(this.getListAttribute('key_pair_ids'));
  }
}

export class TrustedSignersItemsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TrustedSignersItemsPropertyOutputReference {
    return new TrustedSignersItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrustedSignersProperty {
}
export class TrustedSignersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TrustedSignersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustedSignersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  private _items = new TrustedSignersItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class TrustedSignersPropertyList extends cdktn.ComplexList {

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
  public get(index: number): TrustedSignersPropertyOutputReference {
    return new TrustedSignersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheTagConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#header_name AwsDistribution#header_name}
  */
  readonly headerName: string;
}
export class CacheTagConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CacheTagConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheTagConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface ConnectionFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#id AwsDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export class ConnectionFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionFunctionAssociationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionFunctionAssociationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CustomErrorResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#error_caching_min_ttl AwsDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#error_code AwsDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#response_code AwsDistribution#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#response_page_path AwsDistribution#response_page_path}
  */
  readonly responsePagePath?: string;
}
export class CustomErrorResponsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomErrorResponseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorCachingMinTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCachingMinTtl = this._errorCachingMinTtl;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responsePagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePagePath = this._responsePagePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomErrorResponseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = undefined;
      this._errorCode = undefined;
      this._responseCode = undefined;
      this._responsePagePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = value.errorCachingMinTtl;
      this._errorCode = value.errorCode;
      this._responseCode = value.responseCode;
      this._responsePagePath = value.responsePagePath;
    }
  }

  // error_caching_min_ttl - computed: false, optional: true, required: false
  private _errorCachingMinTtl?: number; 
  public get errorCachingMinTtl() {
    return this.getNumberAttribute('error_caching_min_ttl');
  }
  public set errorCachingMinTtl(value: number) {
    this._errorCachingMinTtl = value;
  }
  public resetErrorCachingMinTtl() {
    this._errorCachingMinTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCachingMinTtlInput() {
    return this._errorCachingMinTtl;
  }

  // error_code - computed: false, optional: false, required: true
  private _errorCode?: number; 
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }
  public set errorCode(value: number) {
    this._errorCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_page_path - computed: false, optional: true, required: false
  private _responsePagePath?: string; 
  public get responsePagePath() {
    return this.getStringAttribute('response_page_path');
  }
  public set responsePagePath(value: string) {
    this._responsePagePath = value;
  }
  public resetResponsePagePath() {
    this._responsePagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePagePathInput() {
    return this._responsePagePath;
  }
}

export class CustomErrorResponsePropertyList extends cdktn.ComplexList {
  public internalValue? : CustomErrorResponseProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomErrorResponsePropertyOutputReference {
    return new CustomErrorResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultCacheBehaviorForwardedValuesCookiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#forward AwsDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#whitelisted_names AwsDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}
export class DefaultCacheBehaviorForwardedValuesCookiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultCacheBehaviorForwardedValuesCookiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorForwardedValuesCookiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forward = undefined;
      this._whitelistedNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forward = value.forward;
      this._whitelistedNames = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: false, required: true
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: true, optional: true, required: false
  private _whitelistedNames?: string[]; 
  public get whitelistedNames() {
    return cdktn.Fn.tolist(this.getListAttribute('whitelisted_names'));
  }
  public set whitelistedNames(value: string[]) {
    this._whitelistedNames = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames;
  }
}
export interface DefaultCacheBehaviorForwardedValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#headers AwsDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#query_string AwsDistribution#query_string}
  */
  readonly queryString: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#query_string_cache_keys AwsDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cookies AwsDistribution#cookies}
  */
  readonly cookies: DefaultCacheBehaviorForwardedValuesCookiesProperty;
}
export class DefaultCacheBehaviorForwardedValuesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultCacheBehaviorForwardedValuesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorForwardedValuesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys = value.queryStringCacheKeys;
      this._cookies.internalValue = value.cookies;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktn.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: boolean | cdktn.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktn.IResolvable) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: true, optional: true, required: false
  private _queryStringCacheKeys?: string[]; 
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
  public set queryStringCacheKeys(value: string[]) {
    this._queryStringCacheKeys = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys;
  }

  // cookies - computed: false, optional: false, required: true
  private _cookies = new DefaultCacheBehaviorForwardedValuesCookiesPropertyOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: DefaultCacheBehaviorForwardedValuesCookiesProperty) {
    this._cookies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface DefaultCacheBehaviorFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#event_type AwsDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#function_arn AwsDistribution#function_arn}
  */
  readonly functionArn: string;
}
export class DefaultCacheBehaviorFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class DefaultCacheBehaviorFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultCacheBehaviorFunctionAssociationPropertyOutputReference {
    return new DefaultCacheBehaviorFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultCacheBehaviorGrpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#enabled AwsDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class DefaultCacheBehaviorGrpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultCacheBehaviorGrpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorGrpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DefaultCacheBehaviorLambdaFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#event_type AwsDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#include_body AwsDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#lambda_arn AwsDistribution#lambda_arn}
  */
  readonly lambdaArn: string;
}
export class DefaultCacheBehaviorLambdaFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktn.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktn.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class DefaultCacheBehaviorLambdaFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultCacheBehaviorLambdaFunctionAssociationPropertyOutputReference {
    return new DefaultCacheBehaviorLambdaFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultCacheBehaviorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#allowed_methods AwsDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cache_policy_id AwsDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cached_methods AwsDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#compress AwsDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#default_ttl AwsDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#field_level_encryption_id AwsDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#max_ttl AwsDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#min_ttl AwsDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_request_policy_id AwsDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#realtime_log_config_arn AwsDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#response_headers_policy_id AwsDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#smooth_streaming AwsDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#target_origin_id AwsDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trusted_key_groups AwsDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trusted_signers AwsDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#viewer_protocol_policy AwsDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#forwarded_values AwsDistribution#forwarded_values}
  */
  readonly forwardedValues?: DefaultCacheBehaviorForwardedValuesProperty;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#function_association AwsDistribution#function_association}
  */
  readonly functionAssociation?: DefaultCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * grpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#grpc_config AwsDistribution#grpc_config}
  */
  readonly grpcConfig?: DefaultCacheBehaviorGrpcConfigProperty;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#lambda_function_association AwsDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: DefaultCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable;
}
export class DefaultCacheBehaviorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultCacheBehaviorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
    }
    if (this._trustedSigners !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._grpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcConfig = this._grpcConfig?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMethods = undefined;
      this._cachePolicyId = undefined;
      this._cachedMethods = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups = undefined;
      this._trustedSigners = undefined;
      this._viewerProtocolPolicy = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._grpcConfig.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMethods = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._cachedMethods = value.cachedMethods;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups = value.trustedKeyGroups;
      this._trustedSigners = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._grpcConfig.internalValue = value.grpcConfig;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
    }
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktn.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktn.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: true, optional: true, required: false
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

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // max_ttl - computed: true, optional: true, required: false
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

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktn.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktn.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: false, required: true
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: true, optional: true, required: false
  private _trustedKeyGroups?: string[]; 
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }
  public set trustedKeyGroups(value: string[]) {
    this._trustedKeyGroups = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: true, optional: true, required: false
  private _trustedSigners?: string[]; 
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }
  public set trustedSigners(value: string[]) {
    this._trustedSigners = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners;
  }

  // viewer_protocol_policy - computed: false, optional: false, required: true
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new DefaultCacheBehaviorForwardedValuesPropertyOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: DefaultCacheBehaviorForwardedValuesProperty) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new DefaultCacheBehaviorFunctionAssociationPropertyList(this, "function_association", true);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: DefaultCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // grpc_config - computed: false, optional: true, required: false
  private _grpcConfig = new DefaultCacheBehaviorGrpcConfigPropertyOutputReference(this, "grpc_config");
  public get grpcConfig() {
    return this._grpcConfig;
  }
  public putGrpcConfig(value: DefaultCacheBehaviorGrpcConfigProperty) {
    this._grpcConfig.internalValue = value;
  }
  public resetGrpcConfig() {
    this._grpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcConfigInput() {
    return this._grpcConfig.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new DefaultCacheBehaviorLambdaFunctionAssociationPropertyList(this, "lambda_function_association", true);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: DefaultCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }
}
export interface LoggingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#bucket AwsDistribution#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#include_cookies AwsDistribution#include_cookies}
  */
  readonly includeCookies?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#prefix AwsDistribution#prefix}
  */
  readonly prefix?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._includeCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCookies = this._includeCookies;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._includeCookies = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._includeCookies = value.includeCookies;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // include_cookies - computed: false, optional: true, required: false
  private _includeCookies?: boolean | cdktn.IResolvable; 
  public get includeCookies() {
    return this.getBooleanAttribute('include_cookies');
  }
  public set includeCookies(value: boolean | cdktn.IResolvable) {
    this._includeCookies = value;
  }
  public resetIncludeCookies() {
    this._includeCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCookiesInput() {
    return this._includeCookies;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface OrderedCacheBehaviorForwardedValuesCookiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#forward AwsDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#whitelisted_names AwsDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}
export class OrderedCacheBehaviorForwardedValuesCookiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrderedCacheBehaviorForwardedValuesCookiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorForwardedValuesCookiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forward = undefined;
      this._whitelistedNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forward = value.forward;
      this._whitelistedNames = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: false, required: true
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: false, optional: true, required: false
  private _whitelistedNames?: string[]; 
  public get whitelistedNames() {
    return cdktn.Fn.tolist(this.getListAttribute('whitelisted_names'));
  }
  public set whitelistedNames(value: string[]) {
    this._whitelistedNames = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames;
  }
}
export interface OrderedCacheBehaviorForwardedValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#headers AwsDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#query_string AwsDistribution#query_string}
  */
  readonly queryString: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#query_string_cache_keys AwsDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cookies AwsDistribution#cookies}
  */
  readonly cookies: OrderedCacheBehaviorForwardedValuesCookiesProperty;
}
export class OrderedCacheBehaviorForwardedValuesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrderedCacheBehaviorForwardedValuesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorForwardedValuesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys = value.queryStringCacheKeys;
      this._cookies.internalValue = value.cookies;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktn.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: boolean | cdktn.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktn.IResolvable) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: true, optional: true, required: false
  private _queryStringCacheKeys?: string[]; 
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
  public set queryStringCacheKeys(value: string[]) {
    this._queryStringCacheKeys = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys;
  }

  // cookies - computed: false, optional: false, required: true
  private _cookies = new OrderedCacheBehaviorForwardedValuesCookiesPropertyOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: OrderedCacheBehaviorForwardedValuesCookiesProperty) {
    this._cookies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface OrderedCacheBehaviorFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#event_type AwsDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#function_arn AwsDistribution#function_arn}
  */
  readonly functionArn: string;
}
export class OrderedCacheBehaviorFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrderedCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class OrderedCacheBehaviorFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : OrderedCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): OrderedCacheBehaviorFunctionAssociationPropertyOutputReference {
    return new OrderedCacheBehaviorFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrderedCacheBehaviorGrpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#enabled AwsDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class OrderedCacheBehaviorGrpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrderedCacheBehaviorGrpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorGrpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrderedCacheBehaviorLambdaFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#event_type AwsDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#include_body AwsDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#lambda_arn AwsDistribution#lambda_arn}
  */
  readonly lambdaArn: string;
}
export class OrderedCacheBehaviorLambdaFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrderedCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktn.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktn.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class OrderedCacheBehaviorLambdaFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : OrderedCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): OrderedCacheBehaviorLambdaFunctionAssociationPropertyOutputReference {
    return new OrderedCacheBehaviorLambdaFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrderedCacheBehaviorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#allowed_methods AwsDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cache_policy_id AwsDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cached_methods AwsDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#compress AwsDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#default_ttl AwsDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#field_level_encryption_id AwsDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#max_ttl AwsDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#min_ttl AwsDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_request_policy_id AwsDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#path_pattern AwsDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#realtime_log_config_arn AwsDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#response_headers_policy_id AwsDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#smooth_streaming AwsDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#target_origin_id AwsDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trusted_key_groups AwsDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trusted_signers AwsDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#viewer_protocol_policy AwsDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#forwarded_values AwsDistribution#forwarded_values}
  */
  readonly forwardedValues?: OrderedCacheBehaviorForwardedValuesProperty;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#function_association AwsDistribution#function_association}
  */
  readonly functionAssociation?: OrderedCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * grpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#grpc_config AwsDistribution#grpc_config}
  */
  readonly grpcConfig?: OrderedCacheBehaviorGrpcConfigProperty;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#lambda_function_association AwsDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: OrderedCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable;
}
export class OrderedCacheBehaviorPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrderedCacheBehaviorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._pathPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
    }
    if (this._trustedSigners !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._grpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcConfig = this._grpcConfig?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedCacheBehaviorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedMethods = undefined;
      this._cachePolicyId = undefined;
      this._cachedMethods = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._pathPattern = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups = undefined;
      this._trustedSigners = undefined;
      this._viewerProtocolPolicy = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._grpcConfig.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedMethods = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._cachedMethods = value.cachedMethods;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._pathPattern = value.pathPattern;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups = value.trustedKeyGroups;
      this._trustedSigners = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._grpcConfig.internalValue = value.grpcConfig;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
    }
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktn.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktn.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: true, optional: true, required: false
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

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // max_ttl - computed: true, optional: true, required: false
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

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktn.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktn.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: false, required: true
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups?: string[]; 
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }
  public set trustedKeyGroups(value: string[]) {
    this._trustedKeyGroups = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: false, optional: true, required: false
  private _trustedSigners?: string[]; 
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }
  public set trustedSigners(value: string[]) {
    this._trustedSigners = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners;
  }

  // viewer_protocol_policy - computed: false, optional: false, required: true
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new OrderedCacheBehaviorForwardedValuesPropertyOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: OrderedCacheBehaviorForwardedValuesProperty) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new OrderedCacheBehaviorFunctionAssociationPropertyList(this, "function_association", true);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: OrderedCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // grpc_config - computed: false, optional: true, required: false
  private _grpcConfig = new OrderedCacheBehaviorGrpcConfigPropertyOutputReference(this, "grpc_config");
  public get grpcConfig() {
    return this._grpcConfig;
  }
  public putGrpcConfig(value: OrderedCacheBehaviorGrpcConfigProperty) {
    this._grpcConfig.internalValue = value;
  }
  public resetGrpcConfig() {
    this._grpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcConfigInput() {
    return this._grpcConfig.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new OrderedCacheBehaviorLambdaFunctionAssociationPropertyList(this, "lambda_function_association", true);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: OrderedCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }
}

export class OrderedCacheBehaviorPropertyList extends cdktn.ComplexList {
  public internalValue? : OrderedCacheBehaviorProperty[] | cdktn.IResolvable

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
  public get(index: number): OrderedCacheBehaviorPropertyOutputReference {
    return new OrderedCacheBehaviorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#name AwsDistribution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#value AwsDistribution#value}
  */
  readonly value: string;
}
export class CustomHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class CustomHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomHeaderPropertyOutputReference {
    return new CustomHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginMtlsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#client_certificate_arn AwsDistribution#client_certificate_arn}
  */
  readonly clientCertificateArn: string;
}
export class OriginMtlsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginMtlsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateArn = this._clientCertificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginMtlsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateArn = value.clientCertificateArn;
    }
  }

  // client_certificate_arn - computed: false, optional: false, required: true
  private _clientCertificateArn?: string; 
  public get clientCertificateArn() {
    return this.getStringAttribute('client_certificate_arn');
  }
  public set clientCertificateArn(value: string) {
    this._clientCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateArnInput() {
    return this._clientCertificateArn;
  }
}
export interface CustomOriginConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#http_port AwsDistribution#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#https_port AwsDistribution#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#ip_address_type AwsDistribution#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout AwsDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_protocol_policy AwsDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_read_timeout AwsDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_ssl_protocols AwsDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols: string[];
  /**
  * origin_mtls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_mtls_config AwsDistribution#origin_mtls_config}
  */
  readonly originMtlsConfig?: OriginMtlsConfigProperty;
}
export class CustomOriginConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomOriginConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._originKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
    }
    if (this._originProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
    }
    if (this._originReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originReadTimeout = this._originReadTimeout;
    }
    if (this._originSslProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSslProtocols = this._originSslProtocols;
    }
    if (this._originMtlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originMtlsConfig = this._originMtlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomOriginConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._ipAddressType = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originProtocolPolicy = undefined;
      this._originReadTimeout = undefined;
      this._originSslProtocols = undefined;
      this._originMtlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._ipAddressType = value.ipAddressType;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originProtocolPolicy = value.originProtocolPolicy;
      this._originReadTimeout = value.originReadTimeout;
      this._originSslProtocols = value.originSslProtocols;
      this._originMtlsConfig.internalValue = value.originMtlsConfig;
    }
  }

  // http_port - computed: false, optional: false, required: true
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: false, required: true
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // origin_keepalive_timeout - computed: false, optional: true, required: false
  private _originKeepaliveTimeout?: number; 
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }
  public set originKeepaliveTimeout(value: number) {
    this._originKeepaliveTimeout = value;
  }
  public resetOriginKeepaliveTimeout() {
    this._originKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originKeepaliveTimeoutInput() {
    return this._originKeepaliveTimeout;
  }

  // origin_protocol_policy - computed: false, optional: false, required: true
  private _originProtocolPolicy?: string; 
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }
  public set originProtocolPolicy(value: string) {
    this._originProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolPolicyInput() {
    return this._originProtocolPolicy;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: number; 
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: number) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // origin_ssl_protocols - computed: false, optional: false, required: true
  private _originSslProtocols?: string[]; 
  public get originSslProtocols() {
    return cdktn.Fn.tolist(this.getListAttribute('origin_ssl_protocols'));
  }
  public set originSslProtocols(value: string[]) {
    this._originSslProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslProtocolsInput() {
    return this._originSslProtocols;
  }

  // origin_mtls_config - computed: false, optional: true, required: false
  private _originMtlsConfig = new OriginMtlsConfigPropertyOutputReference(this, "origin_mtls_config");
  public get originMtlsConfig() {
    return this._originMtlsConfig;
  }
  public putOriginMtlsConfig(value: OriginMtlsConfigProperty) {
    this._originMtlsConfig.internalValue = value;
  }
  public resetOriginMtlsConfig() {
    this._originMtlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originMtlsConfigInput() {
    return this._originMtlsConfig.internalValue;
  }
}
export interface OriginShieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#enabled AwsDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_shield_region AwsDistribution#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}
export class OriginShieldPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginShieldProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._originShieldRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShieldRegion = this._originShieldRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginShieldProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._originShieldRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._originShieldRegion = value.originShieldRegion;
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

  // origin_shield_region - computed: false, optional: true, required: false
  private _originShieldRegion?: string; 
  public get originShieldRegion() {
    return this.getStringAttribute('origin_shield_region');
  }
  public set originShieldRegion(value: string) {
    this._originShieldRegion = value;
  }
  public resetOriginShieldRegion() {
    this._originShieldRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldRegionInput() {
    return this._originShieldRegion;
  }
}
export interface S3OriginConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_access_identity AwsDistribution#origin_access_identity}
  */
  readonly originAccessIdentity: string;
}
export class S3OriginConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3OriginConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originAccessIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessIdentity = this._originAccessIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OriginConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originAccessIdentity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originAccessIdentity = value.originAccessIdentity;
    }
  }

  // origin_access_identity - computed: false, optional: false, required: true
  private _originAccessIdentity?: string; 
  public get originAccessIdentity() {
    return this.getStringAttribute('origin_access_identity');
  }
  public set originAccessIdentity(value: string) {
    this._originAccessIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessIdentityInput() {
    return this._originAccessIdentity;
  }
}
export interface VpcOriginConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout AwsDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_read_timeout AwsDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#owner_account_id AwsDistribution#owner_account_id}
  */
  readonly ownerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#vpc_origin_id AwsDistribution#vpc_origin_id}
  */
  readonly vpcOriginId: string;
}
export class VpcOriginConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcOriginConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
    }
    if (this._originReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originReadTimeout = this._originReadTimeout;
    }
    if (this._ownerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerAccountId = this._ownerAccountId;
    }
    if (this._vpcOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginId = this._vpcOriginId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcOriginConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originKeepaliveTimeout = undefined;
      this._originReadTimeout = undefined;
      this._ownerAccountId = undefined;
      this._vpcOriginId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originReadTimeout = value.originReadTimeout;
      this._ownerAccountId = value.ownerAccountId;
      this._vpcOriginId = value.vpcOriginId;
    }
  }

  // origin_keepalive_timeout - computed: false, optional: true, required: false
  private _originKeepaliveTimeout?: number; 
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }
  public set originKeepaliveTimeout(value: number) {
    this._originKeepaliveTimeout = value;
  }
  public resetOriginKeepaliveTimeout() {
    this._originKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originKeepaliveTimeoutInput() {
    return this._originKeepaliveTimeout;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: number; 
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: number) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // owner_account_id - computed: false, optional: true, required: false
  private _ownerAccountId?: string; 
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }
  public set ownerAccountId(value: string) {
    this._ownerAccountId = value;
  }
  public resetOwnerAccountId() {
    this._ownerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountIdInput() {
    return this._ownerAccountId;
  }

  // vpc_origin_id - computed: false, optional: false, required: true
  private _vpcOriginId?: string; 
  public get vpcOriginId() {
    return this.getStringAttribute('vpc_origin_id');
  }
  public set vpcOriginId(value: string) {
    this._vpcOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOriginIdInput() {
    return this._vpcOriginId;
  }
}
export interface OriginProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#connection_attempts AwsDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#connection_timeout AwsDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#domain_name AwsDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_access_control_id AwsDistribution#origin_access_control_id}
  */
  readonly originAccessControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_id AwsDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_path AwsDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#response_completion_timeout AwsDistribution#response_completion_timeout}
  */
  readonly responseCompletionTimeout?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#custom_header AwsDistribution#custom_header}
  */
  readonly customHeader?: CustomHeaderProperty[] | cdktn.IResolvable;
  /**
  * custom_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#custom_origin_config AwsDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CustomOriginConfigProperty;
  /**
  * origin_shield block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_shield AwsDistribution#origin_shield}
  */
  readonly originShield?: OriginShieldProperty;
  /**
  * s3_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#s3_origin_config AwsDistribution#s3_origin_config}
  */
  readonly s3OriginConfig?: S3OriginConfigProperty;
  /**
  * vpc_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#vpc_origin_config AwsDistribution#vpc_origin_config}
  */
  readonly vpcOriginConfig?: VpcOriginConfigProperty;
}
export class OriginPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OriginProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAttempts = this._connectionAttempts;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._originAccessControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlId = this._originAccessControlId;
    }
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    if (this._originPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPath = this._originPath;
    }
    if (this._responseCompletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCompletionTimeout = this._responseCompletionTimeout;
    }
    if (this._customHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader?.internalValue;
    }
    if (this._customOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOriginConfig = this._customOriginConfig?.internalValue;
    }
    if (this._originShield?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShield = this._originShield?.internalValue;
    }
    if (this._s3OriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OriginConfig = this._s3OriginConfig?.internalValue;
    }
    if (this._vpcOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginConfig = this._vpcOriginConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionAttempts = undefined;
      this._connectionTimeout = undefined;
      this._domainName = undefined;
      this._originAccessControlId = undefined;
      this._originId = undefined;
      this._originPath = undefined;
      this._responseCompletionTimeout = undefined;
      this._customHeader.internalValue = undefined;
      this._customOriginConfig.internalValue = undefined;
      this._originShield.internalValue = undefined;
      this._s3OriginConfig.internalValue = undefined;
      this._vpcOriginConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionAttempts = value.connectionAttempts;
      this._connectionTimeout = value.connectionTimeout;
      this._domainName = value.domainName;
      this._originAccessControlId = value.originAccessControlId;
      this._originId = value.originId;
      this._originPath = value.originPath;
      this._responseCompletionTimeout = value.responseCompletionTimeout;
      this._customHeader.internalValue = value.customHeader;
      this._customOriginConfig.internalValue = value.customOriginConfig;
      this._originShield.internalValue = value.originShield;
      this._s3OriginConfig.internalValue = value.s3OriginConfig;
      this._vpcOriginConfig.internalValue = value.vpcOriginConfig;
    }
  }

  // connection_attempts - computed: false, optional: true, required: false
  private _connectionAttempts?: number; 
  public get connectionAttempts() {
    return this.getNumberAttribute('connection_attempts');
  }
  public set connectionAttempts(value: number) {
    this._connectionAttempts = value;
  }
  public resetConnectionAttempts() {
    this._connectionAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAttemptsInput() {
    return this._connectionAttempts;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // origin_access_control_id - computed: false, optional: true, required: false
  private _originAccessControlId?: string; 
  public get originAccessControlId() {
    return this.getStringAttribute('origin_access_control_id');
  }
  public set originAccessControlId(value: string) {
    this._originAccessControlId = value;
  }
  public resetOriginAccessControlId() {
    this._originAccessControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlIdInput() {
    return this._originAccessControlId;
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // origin_path - computed: false, optional: true, required: false
  private _originPath?: string; 
  public get originPath() {
    return this.getStringAttribute('origin_path');
  }
  public set originPath(value: string) {
    this._originPath = value;
  }
  public resetOriginPath() {
    this._originPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPathInput() {
    return this._originPath;
  }

  // response_completion_timeout - computed: true, optional: true, required: false
  private _responseCompletionTimeout?: number; 
  public get responseCompletionTimeout() {
    return this.getNumberAttribute('response_completion_timeout');
  }
  public set responseCompletionTimeout(value: number) {
    this._responseCompletionTimeout = value;
  }
  public resetResponseCompletionTimeout() {
    this._responseCompletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCompletionTimeoutInput() {
    return this._responseCompletionTimeout;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new CustomHeaderPropertyList(this, "custom_header", true);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: CustomHeaderProperty[] | cdktn.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }

  // custom_origin_config - computed: false, optional: true, required: false
  private _customOriginConfig = new CustomOriginConfigPropertyOutputReference(this, "custom_origin_config");
  public get customOriginConfig() {
    return this._customOriginConfig;
  }
  public putCustomOriginConfig(value: CustomOriginConfigProperty) {
    this._customOriginConfig.internalValue = value;
  }
  public resetCustomOriginConfig() {
    this._customOriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginConfigInput() {
    return this._customOriginConfig.internalValue;
  }

  // origin_shield - computed: false, optional: true, required: false
  private _originShield = new OriginShieldPropertyOutputReference(this, "origin_shield");
  public get originShield() {
    return this._originShield;
  }
  public putOriginShield(value: OriginShieldProperty) {
    this._originShield.internalValue = value;
  }
  public resetOriginShield() {
    this._originShield.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldInput() {
    return this._originShield.internalValue;
  }

  // s3_origin_config - computed: false, optional: true, required: false
  private _s3OriginConfig = new S3OriginConfigPropertyOutputReference(this, "s3_origin_config");
  public get s3OriginConfig() {
    return this._s3OriginConfig;
  }
  public putS3OriginConfig(value: S3OriginConfigProperty) {
    this._s3OriginConfig.internalValue = value;
  }
  public resetS3OriginConfig() {
    this._s3OriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OriginConfigInput() {
    return this._s3OriginConfig.internalValue;
  }

  // vpc_origin_config - computed: false, optional: true, required: false
  private _vpcOriginConfig = new VpcOriginConfigPropertyOutputReference(this, "vpc_origin_config");
  public get vpcOriginConfig() {
    return this._vpcOriginConfig;
  }
  public putVpcOriginConfig(value: VpcOriginConfigProperty) {
    this._vpcOriginConfig.internalValue = value;
  }
  public resetVpcOriginConfig() {
    this._vpcOriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOriginConfigInput() {
    return this._vpcOriginConfig.internalValue;
  }
}

export class OriginPropertyList extends cdktn.ComplexList {
  public internalValue? : OriginProperty[] | cdktn.IResolvable

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
  public get(index: number): OriginPropertyOutputReference {
    return new OriginPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailoverCriteriaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#status_codes AwsDistribution#status_codes}
  */
  readonly statusCodes: number[];
}
export class FailoverCriteriaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverCriteriaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverCriteriaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: number[]; 
  public get statusCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('status_codes')));
  }
  public set statusCodes(value: number[]) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface MemberProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_id AwsDistribution#origin_id}
  */
  readonly originId: string;
}
export class MemberPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemberProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemberProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originId = value.originId;
    }
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }
}

export class MemberPropertyList extends cdktn.ComplexList {
  public internalValue? : MemberProperty[] | cdktn.IResolvable

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
  public get(index: number): MemberPropertyOutputReference {
    return new MemberPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#origin_id AwsDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * failover_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#failover_criteria AwsDistribution#failover_criteria}
  */
  readonly failoverCriteria: FailoverCriteriaProperty;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#member AwsDistribution#member}
  */
  readonly member: MemberProperty[] | cdktn.IResolvable;
}
export class OriginGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OriginGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    if (this._failoverCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverCriteria = this._failoverCriteria?.internalValue;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
      this._failoverCriteria.internalValue = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originId = value.originId;
      this._failoverCriteria.internalValue = value.failoverCriteria;
      this._member.internalValue = value.member;
    }
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // failover_criteria - computed: false, optional: false, required: true
  private _failoverCriteria = new FailoverCriteriaPropertyOutputReference(this, "failover_criteria");
  public get failoverCriteria() {
    return this._failoverCriteria;
  }
  public putFailoverCriteria(value: FailoverCriteriaProperty) {
    this._failoverCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria.internalValue;
  }

  // member - computed: false, optional: false, required: true
  private _member = new MemberPropertyList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: MemberProperty[] | cdktn.IResolvable) {
    this._member.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class OriginGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : OriginGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): OriginGroupPropertyOutputReference {
    return new OriginGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeoRestrictionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#locations AwsDistribution#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#restriction_type AwsDistribution#restriction_type}
  */
  readonly restrictionType: string;
}
export class GeoRestrictionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeoRestrictionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeoRestrictionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
      this._restrictionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
      this._restrictionType = value.restrictionType;
    }
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktn.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // restriction_type - computed: false, optional: false, required: true
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }
}
export interface RestrictionsProperty {
  /**
  * geo_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#geo_restriction AwsDistribution#geo_restriction}
  */
  readonly geoRestriction: GeoRestrictionProperty;
}
export class RestrictionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RestrictionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoRestriction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoRestriction.internalValue = value.geoRestriction;
    }
  }

  // geo_restriction - computed: false, optional: false, required: true
  private _geoRestriction = new GeoRestrictionPropertyOutputReference(this, "geo_restriction");
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: GeoRestrictionProperty) {
    this._geoRestriction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }
}
export interface ViewerCertificateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#acm_certificate_arn AwsDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#cloudfront_default_certificate AwsDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#iam_certificate_id AwsDistribution#iam_certificate_id}
  */
  readonly iamCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#minimum_protocol_version AwsDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#ssl_support_method AwsDistribution#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}
export class ViewerCertificatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewerCertificateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmCertificateArn = this._acmCertificateArn;
    }
    if (this._cloudfrontDefaultCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfrontDefaultCertificate = this._cloudfrontDefaultCertificate;
    }
    if (this._iamCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamCertificateId = this._iamCertificateId;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._sslSupportMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSupportMethod = this._sslSupportMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewerCertificateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmCertificateArn = undefined;
      this._cloudfrontDefaultCertificate = undefined;
      this._iamCertificateId = undefined;
      this._minimumProtocolVersion = undefined;
      this._sslSupportMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmCertificateArn = value.acmCertificateArn;
      this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
      this._iamCertificateId = value.iamCertificateId;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._sslSupportMethod = value.sslSupportMethod;
    }
  }

  // acm_certificate_arn - computed: false, optional: true, required: false
  private _acmCertificateArn?: string; 
  public get acmCertificateArn() {
    return this.getStringAttribute('acm_certificate_arn');
  }
  public set acmCertificateArn(value: string) {
    this._acmCertificateArn = value;
  }
  public resetAcmCertificateArn() {
    this._acmCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmCertificateArnInput() {
    return this._acmCertificateArn;
  }

  // cloudfront_default_certificate - computed: false, optional: true, required: false
  private _cloudfrontDefaultCertificate?: boolean | cdktn.IResolvable; 
  public get cloudfrontDefaultCertificate() {
    return this.getBooleanAttribute('cloudfront_default_certificate');
  }
  public set cloudfrontDefaultCertificate(value: boolean | cdktn.IResolvable) {
    this._cloudfrontDefaultCertificate = value;
  }
  public resetCloudfrontDefaultCertificate() {
    this._cloudfrontDefaultCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontDefaultCertificateInput() {
    return this._cloudfrontDefaultCertificate;
  }

  // iam_certificate_id - computed: false, optional: true, required: false
  private _iamCertificateId?: string; 
  public get iamCertificateId() {
    return this.getStringAttribute('iam_certificate_id');
  }
  public set iamCertificateId(value: string) {
    this._iamCertificateId = value;
  }
  public resetIamCertificateId() {
    this._iamCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCertificateIdInput() {
    return this._iamCertificateId;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }

  // ssl_support_method - computed: false, optional: true, required: false
  private _sslSupportMethod?: string; 
  public get sslSupportMethod() {
    return this.getStringAttribute('ssl_support_method');
  }
  public set sslSupportMethod(value: string) {
    this._sslSupportMethod = value;
  }
  public resetSslSupportMethod() {
    this._sslSupportMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSupportMethodInput() {
    return this._sslSupportMethod;
  }
}
export interface TrustStoreConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#advertise_trust_store_ca_names AwsDistribution#advertise_trust_store_ca_names}
  */
  readonly advertiseTrustStoreCaNames?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#ignore_certificate_expiry AwsDistribution#ignore_certificate_expiry}
  */
  readonly ignoreCertificateExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trust_store_id AwsDistribution#trust_store_id}
  */
  readonly trustStoreId: string;
}
export class TrustStoreConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrustStoreConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseTrustStoreCaNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseTrustStoreCaNames = this._advertiseTrustStoreCaNames;
    }
    if (this._ignoreCertificateExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateExpiry = this._ignoreCertificateExpiry;
    }
    if (this._trustStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreId = this._trustStoreId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustStoreConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseTrustStoreCaNames = undefined;
      this._ignoreCertificateExpiry = undefined;
      this._trustStoreId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseTrustStoreCaNames = value.advertiseTrustStoreCaNames;
      this._ignoreCertificateExpiry = value.ignoreCertificateExpiry;
      this._trustStoreId = value.trustStoreId;
    }
  }

  // advertise_trust_store_ca_names - computed: false, optional: true, required: false
  private _advertiseTrustStoreCaNames?: boolean | cdktn.IResolvable; 
  public get advertiseTrustStoreCaNames() {
    return this.getBooleanAttribute('advertise_trust_store_ca_names');
  }
  public set advertiseTrustStoreCaNames(value: boolean | cdktn.IResolvable) {
    this._advertiseTrustStoreCaNames = value;
  }
  public resetAdvertiseTrustStoreCaNames() {
    this._advertiseTrustStoreCaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseTrustStoreCaNamesInput() {
    return this._advertiseTrustStoreCaNames;
  }

  // ignore_certificate_expiry - computed: false, optional: true, required: false
  private _ignoreCertificateExpiry?: boolean | cdktn.IResolvable; 
  public get ignoreCertificateExpiry() {
    return this.getBooleanAttribute('ignore_certificate_expiry');
  }
  public set ignoreCertificateExpiry(value: boolean | cdktn.IResolvable) {
    this._ignoreCertificateExpiry = value;
  }
  public resetIgnoreCertificateExpiry() {
    this._ignoreCertificateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateExpiryInput() {
    return this._ignoreCertificateExpiry;
  }

  // trust_store_id - computed: false, optional: false, required: true
  private _trustStoreId?: string; 
  public get trustStoreId() {
    return this.getStringAttribute('trust_store_id');
  }
  public set trustStoreId(value: string) {
    this._trustStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreIdInput() {
    return this._trustStoreId;
  }
}
export interface ViewerMtlsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#mode AwsDistribution#mode}
  */
  readonly mode?: string;
  /**
  * trust_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution#trust_store_config AwsDistribution#trust_store_config}
  */
  readonly trustStoreConfig?: TrustStoreConfigProperty;
}
export class ViewerMtlsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewerMtlsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._trustStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreConfig = this._trustStoreConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewerMtlsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._trustStoreConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._trustStoreConfig.internalValue = value.trustStoreConfig;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // trust_store_config - computed: false, optional: true, required: false
  private _trustStoreConfig = new TrustStoreConfigPropertyOutputReference(this, "trust_store_config");
  public get trustStoreConfig() {
    return this._trustStoreConfig;
  }
  public putTrustStoreConfig(value: TrustStoreConfigProperty) {
    this._trustStoreConfig.internalValue = value;
  }
  public resetTrustStoreConfig() {
    this._trustStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreConfigInput() {
    return this._trustStoreConfig.internalValue;
  }
}
}
