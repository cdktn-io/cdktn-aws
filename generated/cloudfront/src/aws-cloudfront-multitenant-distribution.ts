// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontMultitenantDistributionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#comment AwsCloudfrontMultitenantDistribution#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#default_root_object AwsCloudfrontMultitenantDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#enabled AwsCloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#http_version AwsCloudfrontMultitenantDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#tags AwsCloudfrontMultitenantDistribution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#web_acl_id AwsCloudfrontMultitenantDistribution#web_acl_id}
  */
  readonly webAclId?: string;
  /**
  * active_trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#active_trusted_key_groups AwsCloudfrontMultitenantDistribution#active_trusted_key_groups}
  */
  readonly activeTrustedKeyGroups?: AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsProperty[] | cdktn.IResolvable;
  /**
  * cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cache_behavior AwsCloudfrontMultitenantDistribution#cache_behavior}
  */
  readonly cacheBehavior?: AwsCloudfrontMultitenantDistribution.CacheBehaviorProperty[] | cdktn.IResolvable;
  /**
  * custom_error_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#custom_error_response AwsCloudfrontMultitenantDistribution#custom_error_response}
  */
  readonly customErrorResponse?: AwsCloudfrontMultitenantDistribution.CustomErrorResponseProperty[] | cdktn.IResolvable;
  /**
  * default_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#default_cache_behavior AwsCloudfrontMultitenantDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorProperty[] | cdktn.IResolvable;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin AwsCloudfrontMultitenantDistribution#origin}
  */
  readonly origin?: AwsCloudfrontMultitenantDistribution.OriginProperty[] | cdktn.IResolvable;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_group AwsCloudfrontMultitenantDistribution#origin_group}
  */
  readonly originGroup?: AwsCloudfrontMultitenantDistribution.OriginGroupProperty[] | cdktn.IResolvable;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#restrictions AwsCloudfrontMultitenantDistribution#restrictions}
  */
  readonly restrictions?: AwsCloudfrontMultitenantDistribution.RestrictionsProperty[] | cdktn.IResolvable;
  /**
  * tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#tenant_config AwsCloudfrontMultitenantDistribution#tenant_config}
  */
  readonly tenantConfig?: AwsCloudfrontMultitenantDistribution.TenantConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#timeouts AwsCloudfrontMultitenantDistribution#timeouts}
  */
  readonly timeouts?: AwsCloudfrontMultitenantDistribution.TimeoutsProperty;
  /**
  * viewer_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#viewer_certificate AwsCloudfrontMultitenantDistribution#viewer_certificate}
  */
  readonly viewerCertificate?: AwsCloudfrontMultitenantDistribution.ViewerCertificateProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution aws_cloudfront_multitenant_distribution}
*/
export class AwsCloudfrontMultitenantDistribution extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_multitenant_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontMultitenantDistribution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontMultitenantDistribution to import
  * @param importFromId The id of the existing AwsCloudfrontMultitenantDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontMultitenantDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_multitenant_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution aws_cloudfront_multitenant_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontMultitenantDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontMultitenantDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_multitenant_distribution',
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
    this._defaultRootObject = config.defaultRootObject;
    this._enabled = config.enabled;
    this._httpVersion = config.httpVersion;
    this._tags = config.tags;
    this._webAclId = config.webAclId;
    this._activeTrustedKeyGroups.internalValue = config.activeTrustedKeyGroups;
    this._cacheBehavior.internalValue = config.cacheBehavior;
    this._customErrorResponse.internalValue = config.customErrorResponse;
    this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
    this._origin.internalValue = config.origin;
    this._originGroup.internalValue = config.originGroup;
    this._restrictions.internalValue = config.restrictions;
    this._tenantConfig.internalValue = config.tenantConfig;
    this._timeouts.internalValue = config.timeouts;
    this._viewerCertificate.internalValue = config.viewerCertificate;
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

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
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

  // http_version - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_progress_invalidation_batches - computed: true, optional: false, required: false
  public get inProgressInvalidationBatches() {
    return this.getNumberAttribute('in_progress_invalidation_batches');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
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

  // active_trusted_key_groups - computed: false, optional: true, required: false
  private _activeTrustedKeyGroups = new AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsPropertyList(this, "active_trusted_key_groups", false);
  public get activeTrustedKeyGroups() {
    return this._activeTrustedKeyGroups;
  }
  public putActiveTrustedKeyGroups(value: AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsProperty[] | cdktn.IResolvable) {
    this._activeTrustedKeyGroups.internalValue = value;
  }
  public resetActiveTrustedKeyGroups() {
    this._activeTrustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTrustedKeyGroupsInput() {
    return this._activeTrustedKeyGroups.internalValue;
  }

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior = new AwsCloudfrontMultitenantDistribution.CacheBehaviorPropertyList(this, "cache_behavior", false);
  public get cacheBehavior() {
    return this._cacheBehavior;
  }
  public putCacheBehavior(value: AwsCloudfrontMultitenantDistribution.CacheBehaviorProperty[] | cdktn.IResolvable) {
    this._cacheBehavior.internalValue = value;
  }
  public resetCacheBehavior() {
    this._cacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorInput() {
    return this._cacheBehavior.internalValue;
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse = new AwsCloudfrontMultitenantDistribution.CustomErrorResponsePropertyList(this, "custom_error_response", false);
  public get customErrorResponse() {
    return this._customErrorResponse;
  }
  public putCustomErrorResponse(value: AwsCloudfrontMultitenantDistribution.CustomErrorResponseProperty[] | cdktn.IResolvable) {
    this._customErrorResponse.internalValue = value;
  }
  public resetCustomErrorResponse() {
    this._customErrorResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponseInput() {
    return this._customErrorResponse.internalValue;
  }

  // default_cache_behavior - computed: false, optional: true, required: false
  private _defaultCacheBehavior = new AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorPropertyList(this, "default_cache_behavior", false);
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorProperty[] | cdktn.IResolvable) {
    this._defaultCacheBehavior.internalValue = value;
  }
  public resetDefaultCacheBehavior() {
    this._defaultCacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new AwsCloudfrontMultitenantDistribution.OriginPropertyList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AwsCloudfrontMultitenantDistribution.OriginProperty[] | cdktn.IResolvable) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new AwsCloudfrontMultitenantDistribution.OriginGroupPropertyList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: AwsCloudfrontMultitenantDistribution.OriginGroupProperty[] | cdktn.IResolvable) {
    this._originGroup.internalValue = value;
  }
  public resetOriginGroup() {
    this._originGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new AwsCloudfrontMultitenantDistribution.RestrictionsPropertyList(this, "restrictions", false);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: AwsCloudfrontMultitenantDistribution.RestrictionsProperty[] | cdktn.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // tenant_config - computed: false, optional: true, required: false
  private _tenantConfig = new AwsCloudfrontMultitenantDistribution.TenantConfigPropertyList(this, "tenant_config", false);
  public get tenantConfig() {
    return this._tenantConfig;
  }
  public putTenantConfig(value: AwsCloudfrontMultitenantDistribution.TenantConfigProperty[] | cdktn.IResolvable) {
    this._tenantConfig.internalValue = value;
  }
  public resetTenantConfig() {
    this._tenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigInput() {
    return this._tenantConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsCloudfrontMultitenantDistribution.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsCloudfrontMultitenantDistribution.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // viewer_certificate - computed: false, optional: true, required: false
  private _viewerCertificate = new AwsCloudfrontMultitenantDistribution.ViewerCertificatePropertyList(this, "viewer_certificate", false);
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public putViewerCertificate(value: AwsCloudfrontMultitenantDistribution.ViewerCertificateProperty[] | cdktn.IResolvable) {
    this._viewerCertificate.internalValue = value;
  }
  public resetViewerCertificate() {
    this._viewerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      default_root_object: cdktn.stringToTerraform(this._defaultRootObject),
      enabled: cdktn.booleanToTerraform(this._enabled),
      http_version: cdktn.stringToTerraform(this._httpVersion),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      web_acl_id: cdktn.stringToTerraform(this._webAclId),
      active_trusted_key_groups: cdktn.listMapper(awsCloudfrontMultitenantDistributionActiveTrustedKeyGroupsPropertyToTerraform, true)(this._activeTrustedKeyGroups.internalValue),
      cache_behavior: cdktn.listMapper(awsCloudfrontMultitenantDistributionCacheBehaviorPropertyToTerraform, true)(this._cacheBehavior.internalValue),
      custom_error_response: cdktn.listMapper(awsCloudfrontMultitenantDistributionCustomErrorResponsePropertyToTerraform, true)(this._customErrorResponse.internalValue),
      default_cache_behavior: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorPropertyToTerraform, true)(this._defaultCacheBehavior.internalValue),
      origin: cdktn.listMapper(awsCloudfrontMultitenantDistributionOriginPropertyToTerraform, true)(this._origin.internalValue),
      origin_group: cdktn.listMapper(awsCloudfrontMultitenantDistributionOriginGroupPropertyToTerraform, true)(this._originGroup.internalValue),
      restrictions: cdktn.listMapper(awsCloudfrontMultitenantDistributionRestrictionsPropertyToTerraform, true)(this._restrictions.internalValue),
      tenant_config: cdktn.listMapper(awsCloudfrontMultitenantDistributionTenantConfigPropertyToTerraform, true)(this._tenantConfig.internalValue),
      timeouts: awsCloudfrontMultitenantDistributionTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      viewer_certificate: cdktn.listMapper(awsCloudfrontMultitenantDistributionViewerCertificatePropertyToTerraform, true)(this._viewerCertificate.internalValue),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      web_acl_id: {
        value: cdktn.stringToHclTerraform(this._webAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_trusted_key_groups: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionActiveTrustedKeyGroupsPropertyToHclTerraform, true)(this._activeTrustedKeyGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsPropertyList",
      },
      cache_behavior: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCacheBehaviorPropertyToHclTerraform, true)(this._cacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.CacheBehaviorPropertyList",
      },
      custom_error_response: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCustomErrorResponsePropertyToHclTerraform, true)(this._customErrorResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.CustomErrorResponsePropertyList",
      },
      default_cache_behavior: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorPropertyToHclTerraform, true)(this._defaultCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorPropertyList",
      },
      origin: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionOriginPropertyToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCloudfrontMultitenantDistribution.OriginPropertyList",
      },
      origin_group: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionOriginGroupPropertyToHclTerraform, true)(this._originGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.OriginGroupPropertyList",
      },
      restrictions: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionRestrictionsPropertyToHclTerraform, true)(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.RestrictionsPropertyList",
      },
      tenant_config: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionTenantConfigPropertyToHclTerraform, true)(this._tenantConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.TenantConfigPropertyList",
      },
      timeouts: {
        value: awsCloudfrontMultitenantDistributionTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsCloudfrontMultitenantDistribution.TimeoutsProperty",
      },
      viewer_certificate: {
        value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionViewerCertificatePropertyToHclTerraform, true)(this._viewerCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontMultitenantDistribution.ViewerCertificatePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontMultitenantDistributionItemsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.ItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsCloudfrontMultitenantDistributionItemsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.ItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsCloudfrontMultitenantDistributionActiveTrustedKeyGroupsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontMultitenantDistributionItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontMultitenantDistributionActiveTrustedKeyGroupsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.ActiveTrustedKeyGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorAllowedMethodsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorAllowedMethodsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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


export function awsCloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
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
    lambda_function_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable): any {
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
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    compress: cdktn.booleanToTerraform(struct!.compress),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktn.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    allowed_methods: cdktn.listMapper(awsCloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsPropertyToTerraform, true)(struct!.allowedMethods),
    function_association: cdktn.listMapper(awsCloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationPropertyToTerraform, true)(struct!.functionAssociation),
    lambda_function_association: cdktn.listMapper(awsCloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationPropertyToTerraform, true)(struct!.lambdaFunctionAssociation),
    trusted_key_groups: cdktn.listMapper(awsCloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsPropertyToTerraform, true)(struct!.trustedKeyGroups),
  }
}


export function awsCloudfrontMultitenantDistributionCacheBehaviorPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_methods: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsPropertyToHclTerraform, true)(struct!.allowedMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CacheBehaviorAllowedMethodsPropertyList",
    },
    function_association: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationPropertyToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CacheBehaviorFunctionAssociationPropertyList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CacheBehaviorLambdaFunctionAssociationPropertyList",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsPropertyToHclTerraform, true)(struct!.trustedKeyGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CacheBehaviorTrustedKeyGroupsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionCustomErrorResponsePropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomErrorResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_caching_min_ttl: cdktn.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktn.numberToTerraform(struct!.errorCode),
    response_code: cdktn.stringToTerraform(struct!.responseCode),
    response_page_path: cdktn.stringToTerraform(struct!.responsePagePath),
  }
}


export function awsCloudfrontMultitenantDistributionCustomErrorResponsePropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomErrorResponseProperty | cdktn.IResolvable): any {
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
      value: cdktn.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorAllowedMethodsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorAllowedMethodsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorFunctionAssociationProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable): any {
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
    lambda_function_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable): any {
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
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    compress: cdktn.booleanToTerraform(struct!.compress),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    allowed_methods: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsPropertyToTerraform, true)(struct!.allowedMethods),
    function_association: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationPropertyToTerraform, true)(struct!.functionAssociation),
    lambda_function_association: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToTerraform, true)(struct!.lambdaFunctionAssociation),
    trusted_key_groups: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsPropertyToTerraform, true)(struct!.trustedKeyGroups),
  }
}


export function awsCloudfrontMultitenantDistributionDefaultCacheBehaviorPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefaultCacheBehaviorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_methods: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsPropertyToHclTerraform, true)(struct!.allowedMethods),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultCacheBehaviorAllowedMethodsPropertyList",
    },
    function_association: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationPropertyToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultCacheBehaviorFunctionAssociationPropertyList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationPropertyToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultCacheBehaviorLambdaFunctionAssociationPropertyList",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsPropertyToHclTerraform, true)(struct!.trustedKeyGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultCacheBehaviorTrustedKeyGroupsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionCustomHeaderPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
  }
}


export function awsCloudfrontMultitenantDistributionCustomHeaderPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomHeaderProperty | cdktn.IResolvable): any {
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
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionOriginMtlsConfigPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginMtlsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_certificate_arn: cdktn.stringToTerraform(struct!.clientCertificateArn),
  }
}


export function awsCloudfrontMultitenantDistributionOriginMtlsConfigPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginMtlsConfigProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionCustomOriginConfigPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomOriginConfigProperty | cdktn.IResolvable): any {
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
    origin_mtls_config: cdktn.listMapper(awsCloudfrontMultitenantDistributionOriginMtlsConfigPropertyToTerraform, true)(struct!.originMtlsConfig),
  }
}


export function awsCloudfrontMultitenantDistributionCustomOriginConfigPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.CustomOriginConfigProperty | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionOriginMtlsConfigPropertyToHclTerraform, true)(struct!.originMtlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OriginMtlsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionOriginShieldPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginShieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktn.stringToTerraform(struct!.originShieldRegion),
  }
}


export function awsCloudfrontMultitenantDistributionOriginShieldPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginShieldProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionVpcOriginConfigPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.VpcOriginConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_keepalive_timeout: cdktn.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_read_timeout: cdktn.numberToTerraform(struct!.originReadTimeout),
    vpc_origin_id: cdktn.stringToTerraform(struct!.vpcOriginId),
  }
}


export function awsCloudfrontMultitenantDistributionVpcOriginConfigPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.VpcOriginConfigProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionOriginPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_attempts: cdktn.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktn.numberToTerraform(struct!.connectionTimeout),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    id: cdktn.stringToTerraform(struct!.id),
    origin_access_control_id: cdktn.stringToTerraform(struct!.originAccessControlId),
    origin_path: cdktn.stringToTerraform(struct!.originPath),
    response_completion_timeout: cdktn.numberToTerraform(struct!.responseCompletionTimeout),
    custom_header: cdktn.listMapper(awsCloudfrontMultitenantDistributionCustomHeaderPropertyToTerraform, true)(struct!.customHeader),
    custom_origin_config: cdktn.listMapper(awsCloudfrontMultitenantDistributionCustomOriginConfigPropertyToTerraform, true)(struct!.customOriginConfig),
    origin_shield: cdktn.listMapper(awsCloudfrontMultitenantDistributionOriginShieldPropertyToTerraform, true)(struct!.originShield),
    vpc_origin_config: cdktn.listMapper(awsCloudfrontMultitenantDistributionVpcOriginConfigPropertyToTerraform, true)(struct!.vpcOriginConfig),
  }
}


export function awsCloudfrontMultitenantDistributionOriginPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginProperty | cdktn.IResolvable): any {
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
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCustomHeaderPropertyToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CustomHeaderPropertyList",
    },
    custom_origin_config: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionCustomOriginConfigPropertyToHclTerraform, true)(struct!.customOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomOriginConfigPropertyList",
    },
    origin_shield: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionOriginShieldPropertyToHclTerraform, true)(struct!.originShield),
      isBlock: true,
      type: "list",
      storageClassType: "OriginShieldPropertyList",
    },
    vpc_origin_config: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionVpcOriginConfigPropertyToHclTerraform, true)(struct!.vpcOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcOriginConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionFailoverCriteriaPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.FailoverCriteriaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.statusCodes),
  }
}


export function awsCloudfrontMultitenantDistributionFailoverCriteriaPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.FailoverCriteriaProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionMemberPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.MemberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    origin_id: cdktn.stringToTerraform(struct!.originId),
  }
}


export function awsCloudfrontMultitenantDistributionMemberPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.MemberProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionOriginGroupPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    failover_criteria: cdktn.listMapper(awsCloudfrontMultitenantDistributionFailoverCriteriaPropertyToTerraform, true)(struct!.failoverCriteria),
    member: cdktn.listMapper(awsCloudfrontMultitenantDistributionMemberPropertyToTerraform, true)(struct!.member),
  }
}


export function awsCloudfrontMultitenantDistributionOriginGroupPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.OriginGroupProperty | cdktn.IResolvable): any {
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
    failover_criteria: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionFailoverCriteriaPropertyToHclTerraform, true)(struct!.failoverCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "FailoverCriteriaPropertyList",
    },
    member: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionMemberPropertyToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "MemberPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionGeoRestrictionPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.GeoRestrictionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    restriction_type: cdktn.stringToTerraform(struct!.restrictionType),
  }
}


export function awsCloudfrontMultitenantDistributionGeoRestrictionPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.GeoRestrictionProperty | cdktn.IResolvable): any {
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


export function awsCloudfrontMultitenantDistributionRestrictionsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.RestrictionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_restriction: cdktn.listMapper(awsCloudfrontMultitenantDistributionGeoRestrictionPropertyToTerraform, true)(struct!.geoRestriction),
  }
}


export function awsCloudfrontMultitenantDistributionRestrictionsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.RestrictionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_restriction: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionGeoRestrictionPropertyToHclTerraform, true)(struct!.geoRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "GeoRestrictionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionStringSchemaPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.StringSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function awsCloudfrontMultitenantDistributionStringSchemaPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.StringSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionDefinitionPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_schema: cdktn.listMapper(awsCloudfrontMultitenantDistributionStringSchemaPropertyToTerraform, true)(struct!.stringSchema),
  }
}


export function awsCloudfrontMultitenantDistributionDefinitionPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.DefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_schema: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionStringSchemaPropertyToHclTerraform, true)(struct!.stringSchema),
      isBlock: true,
      type: "list",
      storageClassType: "StringSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionParameterDefinitionPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.ParameterDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    definition: cdktn.listMapper(awsCloudfrontMultitenantDistributionDefinitionPropertyToTerraform, true)(struct!.definition),
  }
}


export function awsCloudfrontMultitenantDistributionParameterDefinitionPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.ParameterDefinitionProperty | cdktn.IResolvable): any {
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
    definition: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionDefinitionPropertyToHclTerraform, true)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionTenantConfigPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.TenantConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_definition: cdktn.listMapper(awsCloudfrontMultitenantDistributionParameterDefinitionPropertyToTerraform, true)(struct!.parameterDefinition),
  }
}


export function awsCloudfrontMultitenantDistributionTenantConfigPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.TenantConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_definition: {
      value: cdktn.listMapperHcl(awsCloudfrontMultitenantDistributionParameterDefinitionPropertyToHclTerraform, true)(struct!.parameterDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "ParameterDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionTimeoutsPropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsCloudfrontMultitenantDistributionTimeoutsPropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.TimeoutsProperty | cdktn.IResolvable): any {
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
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontMultitenantDistributionViewerCertificatePropertyToTerraform(struct?: AwsCloudfrontMultitenantDistribution.ViewerCertificateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm_certificate_arn: cdktn.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktn.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    minimum_protocol_version: cdktn.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktn.stringToTerraform(struct!.sslSupportMethod),
  }
}


export function awsCloudfrontMultitenantDistributionViewerCertificatePropertyToHclTerraform(struct?: AwsCloudfrontMultitenantDistribution.ViewerCertificateProperty | cdktn.IResolvable): any {
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


export namespace AwsCloudfrontMultitenantDistribution {
export interface ItemsProperty {
}
export class ItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key_group_id - computed: true, optional: false, required: false
  public get keyGroupId() {
    return this.getStringAttribute('key_group_id');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return this.getListAttribute('key_pair_ids');
  }
}

export class ItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : ItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): ItemsPropertyOutputReference {
    return new ItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveTrustedKeyGroupsProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items?: ItemsProperty[] | cdktn.IResolvable;
}
export class ActiveTrustedKeyGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActiveTrustedKeyGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveTrustedKeyGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: false, optional: true, required: false
  private _items = new ItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ItemsProperty[] | cdktn.IResolvable) {
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

export class ActiveTrustedKeyGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : ActiveTrustedKeyGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): ActiveTrustedKeyGroupsPropertyOutputReference {
    return new ActiveTrustedKeyGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheBehaviorAllowedMethodsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cached_methods AwsCloudfrontMultitenantDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items: string[];
}
export class CacheBehaviorAllowedMethodsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheBehaviorAllowedMethodsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheBehaviorAllowedMethodsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods = value.cachedMethods;
      this._items = value.items;
    }
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

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class CacheBehaviorAllowedMethodsPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheBehaviorAllowedMethodsPropertyOutputReference {
    return new CacheBehaviorAllowedMethodsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheBehaviorFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#event_type AwsCloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#function_arn AwsCloudfrontMultitenantDistribution#function_arn}
  */
  readonly functionArn: string;
}
export class CacheBehaviorFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CacheBehaviorFunctionAssociationProperty | cdktn.IResolvable | undefined) {
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

export class CacheBehaviorFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheBehaviorFunctionAssociationPropertyOutputReference {
    return new CacheBehaviorFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheBehaviorLambdaFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#event_type AwsCloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#include_body AwsCloudfrontMultitenantDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_arn AwsCloudfrontMultitenantDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn: string;
}
export class CacheBehaviorLambdaFunctionAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined {
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
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
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
      this._lambdaFunctionArn = value.lambdaFunctionArn;
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

  // include_body - computed: true, optional: true, required: false
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

  // lambda_function_arn - computed: false, optional: false, required: true
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class CacheBehaviorLambdaFunctionAssociationPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheBehaviorLambdaFunctionAssociationPropertyOutputReference {
    return new CacheBehaviorLambdaFunctionAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheBehaviorTrustedKeyGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#enabled AwsCloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
}
export class CacheBehaviorTrustedKeyGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
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

export class CacheBehaviorTrustedKeyGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheBehaviorTrustedKeyGroupsPropertyOutputReference {
    return new CacheBehaviorTrustedKeyGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheBehaviorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cache_policy_id AwsCloudfrontMultitenantDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#compress AwsCloudfrontMultitenantDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#field_level_encryption_id AwsCloudfrontMultitenantDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_request_policy_id AwsCloudfrontMultitenantDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#path_pattern AwsCloudfrontMultitenantDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#realtime_log_config_arn AwsCloudfrontMultitenantDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#response_headers_policy_id AwsCloudfrontMultitenantDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#target_origin_id AwsCloudfrontMultitenantDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#viewer_protocol_policy AwsCloudfrontMultitenantDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * allowed_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#allowed_methods AwsCloudfrontMultitenantDistribution#allowed_methods}
  */
  readonly allowedMethods?: CacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#function_association AwsCloudfrontMultitenantDistribution#function_association}
  */
  readonly functionAssociation?: CacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_association AwsCloudfrontMultitenantDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#trusted_key_groups AwsCloudfrontMultitenantDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: CacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable;
}
export class CacheBehaviorPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheBehaviorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
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
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheBehaviorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._originRequestPolicyId = undefined;
      this._pathPattern = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._targetOriginId = undefined;
      this._viewerProtocolPolicy = undefined;
      this._allowedMethods.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
      this._trustedKeyGroups.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._pathPattern = value.pathPattern;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._targetOriginId = value.targetOriginId;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
    }
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

  // compress - computed: true, optional: true, required: false
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

  // field_level_encryption_id - computed: true, optional: true, required: false
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

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new CacheBehaviorAllowedMethodsPropertyList(this, "allowed_methods", false);
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: CacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new CacheBehaviorFunctionAssociationPropertyList(this, "function_association", true);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: CacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new CacheBehaviorLambdaFunctionAssociationPropertyList(this, "lambda_function_association", true);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: CacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new CacheBehaviorTrustedKeyGroupsPropertyList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: CacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }
}

export class CacheBehaviorPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheBehaviorProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheBehaviorPropertyOutputReference {
    return new CacheBehaviorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomErrorResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#error_caching_min_ttl AwsCloudfrontMultitenantDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#error_code AwsCloudfrontMultitenantDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#response_code AwsCloudfrontMultitenantDistribution#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#response_page_path AwsCloudfrontMultitenantDistribution#response_page_path}
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

  // error_caching_min_ttl - computed: true, optional: true, required: false
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
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
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
export interface DefaultCacheBehaviorAllowedMethodsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cached_methods AwsCloudfrontMultitenantDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items: string[];
}
export class DefaultCacheBehaviorAllowedMethodsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultCacheBehaviorAllowedMethodsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorAllowedMethodsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods = value.cachedMethods;
      this._items = value.items;
    }
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

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class DefaultCacheBehaviorAllowedMethodsPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultCacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultCacheBehaviorAllowedMethodsPropertyOutputReference {
    return new DefaultCacheBehaviorAllowedMethodsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultCacheBehaviorFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#event_type AwsCloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#function_arn AwsCloudfrontMultitenantDistribution#function_arn}
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
export interface DefaultCacheBehaviorLambdaFunctionAssociationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#event_type AwsCloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#include_body AwsCloudfrontMultitenantDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_arn AwsCloudfrontMultitenantDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn: string;
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
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorLambdaFunctionAssociationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
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
      this._lambdaFunctionArn = value.lambdaFunctionArn;
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

  // include_body - computed: true, optional: true, required: false
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

  // lambda_function_arn - computed: false, optional: false, required: true
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
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
export interface DefaultCacheBehaviorTrustedKeyGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#enabled AwsCloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
}
export class DefaultCacheBehaviorTrustedKeyGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultCacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorTrustedKeyGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
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

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
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

export class DefaultCacheBehaviorTrustedKeyGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultCacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultCacheBehaviorTrustedKeyGroupsPropertyOutputReference {
    return new DefaultCacheBehaviorTrustedKeyGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultCacheBehaviorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cache_policy_id AwsCloudfrontMultitenantDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#compress AwsCloudfrontMultitenantDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#field_level_encryption_id AwsCloudfrontMultitenantDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_request_policy_id AwsCloudfrontMultitenantDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#realtime_log_config_arn AwsCloudfrontMultitenantDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#response_headers_policy_id AwsCloudfrontMultitenantDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#target_origin_id AwsCloudfrontMultitenantDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#viewer_protocol_policy AwsCloudfrontMultitenantDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * allowed_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#allowed_methods AwsCloudfrontMultitenantDistribution#allowed_methods}
  */
  readonly allowedMethods?: DefaultCacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#function_association AwsCloudfrontMultitenantDistribution#function_association}
  */
  readonly functionAssociation?: DefaultCacheBehaviorFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_association AwsCloudfrontMultitenantDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: DefaultCacheBehaviorLambdaFunctionAssociationProperty[] | cdktn.IResolvable;
  /**
  * trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#trusted_key_groups AwsCloudfrontMultitenantDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: DefaultCacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable;
}
export class DefaultCacheBehaviorPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultCacheBehaviorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
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
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCacheBehaviorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._originRequestPolicyId = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._targetOriginId = undefined;
      this._viewerProtocolPolicy = undefined;
      this._allowedMethods.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
      this._trustedKeyGroups.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._targetOriginId = value.targetOriginId;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
    }
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

  // compress - computed: true, optional: true, required: false
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

  // field_level_encryption_id - computed: true, optional: true, required: false
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

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new DefaultCacheBehaviorAllowedMethodsPropertyList(this, "allowed_methods", false);
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: DefaultCacheBehaviorAllowedMethodsProperty[] | cdktn.IResolvable) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
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

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new DefaultCacheBehaviorTrustedKeyGroupsPropertyList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: DefaultCacheBehaviorTrustedKeyGroupsProperty[] | cdktn.IResolvable) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }
}

export class DefaultCacheBehaviorPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultCacheBehaviorProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultCacheBehaviorPropertyOutputReference {
    return new DefaultCacheBehaviorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#header_name AwsCloudfrontMultitenantDistribution#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#header_value AwsCloudfrontMultitenantDistribution#header_value}
  */
  readonly headerValue: string;
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
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
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

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#client_certificate_arn AwsCloudfrontMultitenantDistribution#client_certificate_arn}
  */
  readonly clientCertificateArn: string;
}
export class OriginMtlsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OriginMtlsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateArn = this._clientCertificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginMtlsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificateArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class OriginMtlsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : OriginMtlsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): OriginMtlsConfigPropertyOutputReference {
    return new OriginMtlsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomOriginConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#http_port AwsCloudfrontMultitenantDistribution#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#https_port AwsCloudfrontMultitenantDistribution#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#ip_address_type AwsCloudfrontMultitenantDistribution#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_keepalive_timeout AwsCloudfrontMultitenantDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_protocol_policy AwsCloudfrontMultitenantDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_read_timeout AwsCloudfrontMultitenantDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_ssl_protocols AwsCloudfrontMultitenantDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols: string[];
  /**
  * origin_mtls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_mtls_config AwsCloudfrontMultitenantDistribution#origin_mtls_config}
  */
  readonly originMtlsConfig?: OriginMtlsConfigProperty[] | cdktn.IResolvable;
}
export class CustomOriginConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomOriginConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CustomOriginConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._ipAddressType = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originProtocolPolicy = undefined;
      this._originReadTimeout = undefined;
      this._originSslProtocols = undefined;
      this._originMtlsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // origin_keepalive_timeout - computed: true, optional: true, required: false
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

  // origin_read_timeout - computed: true, optional: true, required: false
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
  private _originMtlsConfig = new OriginMtlsConfigPropertyList(this, "origin_mtls_config", false);
  public get originMtlsConfig() {
    return this._originMtlsConfig;
  }
  public putOriginMtlsConfig(value: OriginMtlsConfigProperty[] | cdktn.IResolvable) {
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

export class CustomOriginConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomOriginConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomOriginConfigPropertyOutputReference {
    return new CustomOriginConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginShieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#enabled AwsCloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_shield_region AwsCloudfrontMultitenantDistribution#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}
export class OriginShieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OriginShieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: OriginShieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._originShieldRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class OriginShieldPropertyList extends cdktn.ComplexList {
  public internalValue? : OriginShieldProperty[] | cdktn.IResolvable

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
  public get(index: number): OriginShieldPropertyOutputReference {
    return new OriginShieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcOriginConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_keepalive_timeout AwsCloudfrontMultitenantDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_read_timeout AwsCloudfrontMultitenantDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#vpc_origin_id AwsCloudfrontMultitenantDistribution#vpc_origin_id}
  */
  readonly vpcOriginId: string;
}
export class VpcOriginConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcOriginConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._vpcOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginId = this._vpcOriginId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcOriginConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originReadTimeout = undefined;
      this._vpcOriginId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originReadTimeout = value.originReadTimeout;
      this._vpcOriginId = value.vpcOriginId;
    }
  }

  // origin_keepalive_timeout - computed: true, optional: true, required: false
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

  // origin_read_timeout - computed: true, optional: true, required: false
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

export class VpcOriginConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcOriginConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcOriginConfigPropertyOutputReference {
    return new VpcOriginConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#connection_attempts AwsCloudfrontMultitenantDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#connection_timeout AwsCloudfrontMultitenantDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#domain_name AwsCloudfrontMultitenantDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#id AwsCloudfrontMultitenantDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_access_control_id AwsCloudfrontMultitenantDistribution#origin_access_control_id}
  */
  readonly originAccessControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_path AwsCloudfrontMultitenantDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#response_completion_timeout AwsCloudfrontMultitenantDistribution#response_completion_timeout}
  */
  readonly responseCompletionTimeout?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#custom_header AwsCloudfrontMultitenantDistribution#custom_header}
  */
  readonly customHeader?: CustomHeaderProperty[] | cdktn.IResolvable;
  /**
  * custom_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#custom_origin_config AwsCloudfrontMultitenantDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CustomOriginConfigProperty[] | cdktn.IResolvable;
  /**
  * origin_shield block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_shield AwsCloudfrontMultitenantDistribution#origin_shield}
  */
  readonly originShield?: OriginShieldProperty[] | cdktn.IResolvable;
  /**
  * vpc_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#vpc_origin_config AwsCloudfrontMultitenantDistribution#vpc_origin_config}
  */
  readonly vpcOriginConfig?: VpcOriginConfigProperty[] | cdktn.IResolvable;
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._originAccessControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlId = this._originAccessControlId;
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
      this._id = undefined;
      this._originAccessControlId = undefined;
      this._originPath = undefined;
      this._responseCompletionTimeout = undefined;
      this._customHeader.internalValue = undefined;
      this._customOriginConfig.internalValue = undefined;
      this._originShield.internalValue = undefined;
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
      this._id = value.id;
      this._originAccessControlId = value.originAccessControlId;
      this._originPath = value.originPath;
      this._responseCompletionTimeout = value.responseCompletionTimeout;
      this._customHeader.internalValue = value.customHeader;
      this._customOriginConfig.internalValue = value.customOriginConfig;
      this._originShield.internalValue = value.originShield;
      this._vpcOriginConfig.internalValue = value.vpcOriginConfig;
    }
  }

  // connection_attempts - computed: true, optional: true, required: false
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

  // connection_timeout - computed: true, optional: true, required: false
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

  // origin_path - computed: true, optional: true, required: false
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
  private _customHeader = new CustomHeaderPropertyList(this, "custom_header", false);
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
  private _customOriginConfig = new CustomOriginConfigPropertyList(this, "custom_origin_config", false);
  public get customOriginConfig() {
    return this._customOriginConfig;
  }
  public putCustomOriginConfig(value: CustomOriginConfigProperty[] | cdktn.IResolvable) {
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
  private _originShield = new OriginShieldPropertyList(this, "origin_shield", false);
  public get originShield() {
    return this._originShield;
  }
  public putOriginShield(value: OriginShieldProperty[] | cdktn.IResolvable) {
    this._originShield.internalValue = value;
  }
  public resetOriginShield() {
    this._originShield.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldInput() {
    return this._originShield.internalValue;
  }

  // vpc_origin_config - computed: false, optional: true, required: false
  private _vpcOriginConfig = new VpcOriginConfigPropertyList(this, "vpc_origin_config", false);
  public get vpcOriginConfig() {
    return this._vpcOriginConfig;
  }
  public putVpcOriginConfig(value: VpcOriginConfigProperty[] | cdktn.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#status_codes AwsCloudfrontMultitenantDistribution#status_codes}
  */
  readonly statusCodes: number[];
}
export class FailoverCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FailoverCriteriaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverCriteriaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class FailoverCriteriaPropertyList extends cdktn.ComplexList {
  public internalValue? : FailoverCriteriaProperty[] | cdktn.IResolvable

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
  public get(index: number): FailoverCriteriaPropertyOutputReference {
    return new FailoverCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemberProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#origin_id AwsCloudfrontMultitenantDistribution#origin_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#id AwsCloudfrontMultitenantDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * failover_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#failover_criteria AwsCloudfrontMultitenantDistribution#failover_criteria}
  */
  readonly failoverCriteria?: FailoverCriteriaProperty[] | cdktn.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#member AwsCloudfrontMultitenantDistribution#member}
  */
  readonly member?: MemberProperty[] | cdktn.IResolvable;
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
      this._id = undefined;
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
      this._id = value.id;
      this._failoverCriteria.internalValue = value.failoverCriteria;
      this._member.internalValue = value.member;
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

  // failover_criteria - computed: false, optional: true, required: false
  private _failoverCriteria = new FailoverCriteriaPropertyList(this, "failover_criteria", false);
  public get failoverCriteria() {
    return this._failoverCriteria;
  }
  public putFailoverCriteria(value: FailoverCriteriaProperty[] | cdktn.IResolvable) {
    this._failoverCriteria.internalValue = value;
  }
  public resetFailoverCriteria() {
    this._failoverCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new MemberPropertyList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: MemberProperty[] | cdktn.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#items AwsCloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#restriction_type AwsCloudfrontMultitenantDistribution#restriction_type}
  */
  readonly restrictionType: string;
}
export class GeoRestrictionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeoRestrictionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeoRestrictionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._restrictionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._restrictionType = value.restrictionType;
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

export class GeoRestrictionPropertyList extends cdktn.ComplexList {
  public internalValue? : GeoRestrictionProperty[] | cdktn.IResolvable

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
  public get(index: number): GeoRestrictionPropertyOutputReference {
    return new GeoRestrictionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RestrictionsProperty {
  /**
  * geo_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#geo_restriction AwsCloudfrontMultitenantDistribution#geo_restriction}
  */
  readonly geoRestriction?: GeoRestrictionProperty[] | cdktn.IResolvable;
}
export class RestrictionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RestrictionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = value.geoRestriction;
    }
  }

  // geo_restriction - computed: false, optional: true, required: false
  private _geoRestriction = new GeoRestrictionPropertyList(this, "geo_restriction", false);
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: GeoRestrictionProperty[] | cdktn.IResolvable) {
    this._geoRestriction.internalValue = value;
  }
  public resetGeoRestriction() {
    this._geoRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }
}

export class RestrictionsPropertyList extends cdktn.ComplexList {
  public internalValue? : RestrictionsProperty[] | cdktn.IResolvable

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
  public get(index: number): RestrictionsPropertyOutputReference {
    return new RestrictionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StringSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#comment AwsCloudfrontMultitenantDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#default_value AwsCloudfrontMultitenantDistribution#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#required AwsCloudfrontMultitenantDistribution#required}
  */
  readonly required: boolean | cdktn.IResolvable;
}
export class StringSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StringSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._defaultValue = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._defaultValue = value.defaultValue;
      this._required = value.required;
    }
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

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class StringSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : StringSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): StringSchemaPropertyOutputReference {
    return new StringSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefinitionProperty {
  /**
  * string_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#string_schema AwsCloudfrontMultitenantDistribution#string_schema}
  */
  readonly stringSchema?: StringSchemaProperty[] | cdktn.IResolvable;
}
export class DefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringSchema = this._stringSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringSchema.internalValue = value.stringSchema;
    }
  }

  // string_schema - computed: false, optional: true, required: false
  private _stringSchema = new StringSchemaPropertyList(this, "string_schema", false);
  public get stringSchema() {
    return this._stringSchema;
  }
  public putStringSchema(value: StringSchemaProperty[] | cdktn.IResolvable) {
    this._stringSchema.internalValue = value;
  }
  public resetStringSchema() {
    this._stringSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringSchemaInput() {
    return this._stringSchema.internalValue;
  }
}

export class DefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : DefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): DefinitionPropertyOutputReference {
    return new DefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParameterDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#name AwsCloudfrontMultitenantDistribution#name}
  */
  readonly name: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#definition AwsCloudfrontMultitenantDistribution#definition}
  */
  readonly definition?: DefinitionProperty[] | cdktn.IResolvable;
}
export class ParameterDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParameterDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParameterDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._definition.internalValue = value.definition;
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

  // definition - computed: false, optional: true, required: false
  private _definition = new DefinitionPropertyList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DefinitionProperty[] | cdktn.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class ParameterDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : ParameterDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): ParameterDefinitionPropertyOutputReference {
    return new ParameterDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantConfigProperty {
  /**
  * parameter_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#parameter_definition AwsCloudfrontMultitenantDistribution#parameter_definition}
  */
  readonly parameterDefinition?: ParameterDefinitionProperty[] | cdktn.IResolvable;
}
export class TenantConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TenantConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterDefinition = this._parameterDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterDefinition.internalValue = value.parameterDefinition;
    }
  }

  // parameter_definition - computed: false, optional: true, required: false
  private _parameterDefinition = new ParameterDefinitionPropertyList(this, "parameter_definition", false);
  public get parameterDefinition() {
    return this._parameterDefinition;
  }
  public putParameterDefinition(value: ParameterDefinitionProperty[] | cdktn.IResolvable) {
    this._parameterDefinition.internalValue = value;
  }
  public resetParameterDefinition() {
    this._parameterDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterDefinitionInput() {
    return this._parameterDefinition.internalValue;
  }
}

export class TenantConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TenantConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TenantConfigPropertyOutputReference {
    return new TenantConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#create AwsCloudfrontMultitenantDistribution#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#delete AwsCloudfrontMultitenantDistribution#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#update AwsCloudfrontMultitenantDistribution#update}
  */
  readonly update?: string;
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
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ViewerCertificateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#acm_certificate_arn AwsCloudfrontMultitenantDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#cloudfront_default_certificate AwsCloudfrontMultitenantDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#minimum_protocol_version AwsCloudfrontMultitenantDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_multitenant_distribution#ssl_support_method AwsCloudfrontMultitenantDistribution#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}
export class ViewerCertificatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ViewerCertificateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ViewerCertificateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmCertificateArn = undefined;
      this._cloudfrontDefaultCertificate = undefined;
      this._minimumProtocolVersion = undefined;
      this._sslSupportMethod = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmCertificateArn = value.acmCertificateArn;
      this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
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

  // cloudfront_default_certificate - computed: true, optional: true, required: false
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

  // minimum_protocol_version - computed: true, optional: true, required: false
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

  // ssl_support_method - computed: true, optional: true, required: false
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

export class ViewerCertificatePropertyList extends cdktn.ComplexList {
  public internalValue? : ViewerCertificateProperty[] | cdktn.IResolvable

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
  public get(index: number): ViewerCertificatePropertyOutputReference {
    return new ViewerCertificatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
