// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#delete_all_policy_resources AwsPolicy#delete_all_policy_resources}
  */
  readonly deleteAllPolicyResources?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#delete_unused_fm_managed_resources AwsPolicy#delete_unused_fm_managed_resources}
  */
  readonly deleteUnusedFmManagedResources?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#description AwsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#exclude_resource_tags AwsPolicy#exclude_resource_tags}
  */
  readonly excludeResourceTags: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#id AwsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#name AwsPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#region AwsPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#remediation_enabled AwsPolicy#remediation_enabled}
  */
  readonly remediationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#resource_set_ids AwsPolicy#resource_set_ids}
  */
  readonly resourceSetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#resource_tag_logical_operator AwsPolicy#resource_tag_logical_operator}
  */
  readonly resourceTagLogicalOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#resource_tags AwsPolicy#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#resource_type AwsPolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#resource_type_list AwsPolicy#resource_type_list}
  */
  readonly resourceTypeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#tags AwsPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#tags_all AwsPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * exclude_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#exclude_map AwsPolicy#exclude_map}
  */
  readonly excludeMap?: AwsPolicy.ExcludeMapProperty;
  /**
  * include_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#include_map AwsPolicy#include_map}
  */
  readonly includeMap?: AwsPolicy.IncludeMapProperty;
  /**
  * security_service_policy_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#security_service_policy_data AwsPolicy#security_service_policy_data}
  */
  readonly securityServicePolicyData: AwsPolicy.SecurityServicePolicyDataProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy aws_fms_policy}
*/
export class AwsPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fms_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPolicy to import
  * @param importFromId The id of the existing AwsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fms_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy aws_fms_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fms_policy',
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
    this._deleteAllPolicyResources = config.deleteAllPolicyResources;
    this._deleteUnusedFmManagedResources = config.deleteUnusedFmManagedResources;
    this._description = config.description;
    this._excludeResourceTags = config.excludeResourceTags;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._remediationEnabled = config.remediationEnabled;
    this._resourceSetIds = config.resourceSetIds;
    this._resourceTagLogicalOperator = config.resourceTagLogicalOperator;
    this._resourceTags = config.resourceTags;
    this._resourceType = config.resourceType;
    this._resourceTypeList = config.resourceTypeList;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludeMap.internalValue = config.excludeMap;
    this._includeMap.internalValue = config.includeMap;
    this._securityServicePolicyData.internalValue = config.securityServicePolicyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_all_policy_resources - computed: false, optional: true, required: false
  private _deleteAllPolicyResources?: boolean | cdktn.IResolvable; 
  public get deleteAllPolicyResources() {
    return this.getBooleanAttribute('delete_all_policy_resources');
  }
  public set deleteAllPolicyResources(value: boolean | cdktn.IResolvable) {
    this._deleteAllPolicyResources = value;
  }
  public resetDeleteAllPolicyResources() {
    this._deleteAllPolicyResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllPolicyResourcesInput() {
    return this._deleteAllPolicyResources;
  }

  // delete_unused_fm_managed_resources - computed: false, optional: true, required: false
  private _deleteUnusedFmManagedResources?: boolean | cdktn.IResolvable; 
  public get deleteUnusedFmManagedResources() {
    return this.getBooleanAttribute('delete_unused_fm_managed_resources');
  }
  public set deleteUnusedFmManagedResources(value: boolean | cdktn.IResolvable) {
    this._deleteUnusedFmManagedResources = value;
  }
  public resetDeleteUnusedFmManagedResources() {
    this._deleteUnusedFmManagedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUnusedFmManagedResourcesInput() {
    return this._deleteUnusedFmManagedResources;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // exclude_resource_tags - computed: false, optional: false, required: true
  private _excludeResourceTags?: boolean | cdktn.IResolvable; 
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
  }
  public set excludeResourceTags(value: boolean | cdktn.IResolvable) {
    this._excludeResourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTagsInput() {
    return this._excludeResourceTags;
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

  // policy_update_token - computed: true, optional: false, required: false
  public get policyUpdateToken() {
    return this.getStringAttribute('policy_update_token');
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

  // remediation_enabled - computed: false, optional: true, required: false
  private _remediationEnabled?: boolean | cdktn.IResolvable; 
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean | cdktn.IResolvable) {
    this._remediationEnabled = value;
  }
  public resetRemediationEnabled() {
    this._remediationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationEnabledInput() {
    return this._remediationEnabled;
  }

  // resource_set_ids - computed: true, optional: true, required: false
  private _resourceSetIds?: string[]; 
  public get resourceSetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_set_ids'));
  }
  public set resourceSetIds(value: string[]) {
    this._resourceSetIds = value;
  }
  public resetResourceSetIds() {
    this._resourceSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdsInput() {
    return this._resourceSetIds;
  }

  // resource_tag_logical_operator - computed: true, optional: true, required: false
  private _resourceTagLogicalOperator?: string; 
  public get resourceTagLogicalOperator() {
    return this.getStringAttribute('resource_tag_logical_operator');
  }
  public set resourceTagLogicalOperator(value: string) {
    this._resourceTagLogicalOperator = value;
  }
  public resetResourceTagLogicalOperator() {
    this._resourceTagLogicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagLogicalOperatorInput() {
    return this._resourceTagLogicalOperator;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_type_list - computed: true, optional: true, required: false
  private _resourceTypeList?: string[]; 
  public get resourceTypeList() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_type_list'));
  }
  public set resourceTypeList(value: string[]) {
    this._resourceTypeList = value;
  }
  public resetResourceTypeList() {
    this._resourceTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeListInput() {
    return this._resourceTypeList;
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

  // exclude_map - computed: false, optional: true, required: false
  private _excludeMap = new AwsPolicy.ExcludeMapPropertyOutputReference(this, "exclude_map");
  public get excludeMap() {
    return this._excludeMap;
  }
  public putExcludeMap(value: AwsPolicy.ExcludeMapProperty) {
    this._excludeMap.internalValue = value;
  }
  public resetExcludeMap() {
    this._excludeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMapInput() {
    return this._excludeMap.internalValue;
  }

  // include_map - computed: false, optional: true, required: false
  private _includeMap = new AwsPolicy.IncludeMapPropertyOutputReference(this, "include_map");
  public get includeMap() {
    return this._includeMap;
  }
  public putIncludeMap(value: AwsPolicy.IncludeMapProperty) {
    this._includeMap.internalValue = value;
  }
  public resetIncludeMap() {
    this._includeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMapInput() {
    return this._includeMap.internalValue;
  }

  // security_service_policy_data - computed: false, optional: false, required: true
  private _securityServicePolicyData = new AwsPolicy.SecurityServicePolicyDataPropertyOutputReference(this, "security_service_policy_data");
  public get securityServicePolicyData() {
    return this._securityServicePolicyData;
  }
  public putSecurityServicePolicyData(value: AwsPolicy.SecurityServicePolicyDataProperty) {
    this._securityServicePolicyData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServicePolicyDataInput() {
    return this._securityServicePolicyData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_all_policy_resources: cdktn.booleanToTerraform(this._deleteAllPolicyResources),
      delete_unused_fm_managed_resources: cdktn.booleanToTerraform(this._deleteUnusedFmManagedResources),
      description: cdktn.stringToTerraform(this._description),
      exclude_resource_tags: cdktn.booleanToTerraform(this._excludeResourceTags),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      remediation_enabled: cdktn.booleanToTerraform(this._remediationEnabled),
      resource_set_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceSetIds),
      resource_tag_logical_operator: cdktn.stringToTerraform(this._resourceTagLogicalOperator),
      resource_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._resourceTags),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      resource_type_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceTypeList),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      exclude_map: awsPolicyExcludeMapPropertyToTerraform(this._excludeMap.internalValue),
      include_map: awsPolicyIncludeMapPropertyToTerraform(this._includeMap.internalValue),
      security_service_policy_data: awsPolicySecurityServicePolicyDataPropertyToTerraform(this._securityServicePolicyData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_all_policy_resources: {
        value: cdktn.booleanToHclTerraform(this._deleteAllPolicyResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_unused_fm_managed_resources: {
        value: cdktn.booleanToHclTerraform(this._deleteUnusedFmManagedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_resource_tags: {
        value: cdktn.booleanToHclTerraform(this._excludeResourceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_enabled: {
        value: cdktn.booleanToHclTerraform(this._remediationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_set_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceSetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_tag_logical_operator: {
        value: cdktn.stringToHclTerraform(this._resourceTagLogicalOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceTypeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      exclude_map: {
        value: awsPolicyExcludeMapPropertyToHclTerraform(this._excludeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.ExcludeMapPropertyList",
      },
      include_map: {
        value: awsPolicyIncludeMapPropertyToHclTerraform(this._includeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.IncludeMapPropertyList",
      },
      security_service_policy_data: {
        value: awsPolicySecurityServicePolicyDataPropertyToHclTerraform(this._securityServicePolicyData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.SecurityServicePolicyDataPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPolicyExcludeMapPropertyToTerraform(struct?: AwsPolicy.ExcludeMapPropertyOutputReference | AwsPolicy.ExcludeMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.account),
    orgunit: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.orgunit),
  }
}


export function awsPolicyExcludeMapPropertyToHclTerraform(struct?: AwsPolicy.ExcludeMapPropertyOutputReference | AwsPolicy.ExcludeMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.account),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    orgunit: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.orgunit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyIncludeMapPropertyToTerraform(struct?: AwsPolicy.IncludeMapPropertyOutputReference | AwsPolicy.IncludeMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.account),
    orgunit: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.orgunit),
  }
}


export function awsPolicyIncludeMapPropertyToHclTerraform(struct?: AwsPolicy.IncludeMapPropertyOutputReference | AwsPolicy.IncludeMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.account),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    orgunit: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.orgunit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyToTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    type: cdktn.numberToTerraform(struct!.type),
  }
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyToHclTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyToTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyToHclTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktn.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyFirstEntryPropertyToTerraform(struct?: AwsPolicy.FirstEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
    egress: cdktn.booleanToTerraform(struct!.egress),
    ipv6_cidr_block: cdktn.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    rule_action: cdktn.stringToTerraform(struct!.ruleAction),
    icmp_type_code: cdktn.listMapper(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyToTerraform, true)(struct!.icmpTypeCode),
    port_range: cdktn.listMapper(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyToTerraform, true)(struct!.portRange),
  }
}


export function awsPolicyFirstEntryPropertyToHclTerraform(struct?: AwsPolicy.FirstEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktn.booleanToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.ipv6CidrBlock),
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
    rule_action: {
      value: cdktn.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type_code: {
      value: cdktn.listMapperHcl(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyToHclTerraform, true)(struct!.icmpTypeCode),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyList",
    },
    port_range: {
      value: cdktn.listMapperHcl(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyToTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    type: cdktn.numberToTerraform(struct!.type),
  }
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyToHclTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyToTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyToHclTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktn.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyLastEntryPropertyToTerraform(struct?: AwsPolicy.LastEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
    egress: cdktn.booleanToTerraform(struct!.egress),
    ipv6_cidr_block: cdktn.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    rule_action: cdktn.stringToTerraform(struct!.ruleAction),
    icmp_type_code: cdktn.listMapper(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyToTerraform, true)(struct!.icmpTypeCode),
    port_range: cdktn.listMapper(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyToTerraform, true)(struct!.portRange),
  }
}


export function awsPolicyLastEntryPropertyToHclTerraform(struct?: AwsPolicy.LastEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktn.booleanToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.ipv6CidrBlock),
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
    rule_action: {
      value: cdktn.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type_code: {
      value: cdktn.listMapperHcl(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyToHclTerraform, true)(struct!.icmpTypeCode),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyList",
    },
    port_range: {
      value: cdktn.listMapperHcl(awsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyNetworkAclEntrySetPropertyToTerraform(struct?: AwsPolicy.NetworkAclEntrySetPropertyOutputReference | AwsPolicy.NetworkAclEntrySetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    force_remediate_for_first_entries: cdktn.booleanToTerraform(struct!.forceRemediateForFirstEntries),
    force_remediate_for_last_entries: cdktn.booleanToTerraform(struct!.forceRemediateForLastEntries),
    first_entry: cdktn.listMapper(awsPolicyFirstEntryPropertyToTerraform, true)(struct!.firstEntry),
    last_entry: cdktn.listMapper(awsPolicyLastEntryPropertyToTerraform, true)(struct!.lastEntry),
  }
}


export function awsPolicyNetworkAclEntrySetPropertyToHclTerraform(struct?: AwsPolicy.NetworkAclEntrySetPropertyOutputReference | AwsPolicy.NetworkAclEntrySetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    force_remediate_for_first_entries: {
      value: cdktn.booleanToHclTerraform(struct!.forceRemediateForFirstEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_remediate_for_last_entries: {
      value: cdktn.booleanToHclTerraform(struct!.forceRemediateForLastEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    first_entry: {
      value: cdktn.listMapperHcl(awsPolicyFirstEntryPropertyToHclTerraform, true)(struct!.firstEntry),
      isBlock: true,
      type: "set",
      storageClassType: "FirstEntryPropertyList",
    },
    last_entry: {
      value: cdktn.listMapperHcl(awsPolicyLastEntryPropertyToHclTerraform, true)(struct!.lastEntry),
      isBlock: true,
      type: "set",
      storageClassType: "LastEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyNetworkAclCommonPolicyPropertyToTerraform(struct?: AwsPolicy.NetworkAclCommonPolicyPropertyOutputReference | AwsPolicy.NetworkAclCommonPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_acl_entry_set: awsPolicyNetworkAclEntrySetPropertyToTerraform(struct!.networkAclEntrySet),
  }
}


export function awsPolicyNetworkAclCommonPolicyPropertyToHclTerraform(struct?: AwsPolicy.NetworkAclCommonPolicyPropertyOutputReference | AwsPolicy.NetworkAclCommonPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_acl_entry_set: {
      value: awsPolicyNetworkAclEntrySetPropertyToHclTerraform(struct!.networkAclEntrySet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAclEntrySetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyNetworkFirewallPolicyPropertyToTerraform(struct?: AwsPolicy.NetworkFirewallPolicyPropertyOutputReference | AwsPolicy.NetworkFirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firewall_deployment_model: cdktn.stringToTerraform(struct!.firewallDeploymentModel),
  }
}


export function awsPolicyNetworkFirewallPolicyPropertyToHclTerraform(struct?: AwsPolicy.NetworkFirewallPolicyPropertyOutputReference | AwsPolicy.NetworkFirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firewall_deployment_model: {
      value: cdktn.stringToHclTerraform(struct!.firewallDeploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyThirdPartyFirewallPolicyPropertyToTerraform(struct?: AwsPolicy.ThirdPartyFirewallPolicyPropertyOutputReference | AwsPolicy.ThirdPartyFirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firewall_deployment_model: cdktn.stringToTerraform(struct!.firewallDeploymentModel),
  }
}


export function awsPolicyThirdPartyFirewallPolicyPropertyToHclTerraform(struct?: AwsPolicy.ThirdPartyFirewallPolicyPropertyOutputReference | AwsPolicy.ThirdPartyFirewallPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firewall_deployment_model: {
      value: cdktn.stringToHclTerraform(struct!.firewallDeploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyPolicyOptionPropertyToTerraform(struct?: AwsPolicy.PolicyOptionPropertyOutputReference | AwsPolicy.PolicyOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_acl_common_policy: awsPolicyNetworkAclCommonPolicyPropertyToTerraform(struct!.networkAclCommonPolicy),
    network_firewall_policy: awsPolicyNetworkFirewallPolicyPropertyToTerraform(struct!.networkFirewallPolicy),
    third_party_firewall_policy: awsPolicyThirdPartyFirewallPolicyPropertyToTerraform(struct!.thirdPartyFirewallPolicy),
  }
}


export function awsPolicyPolicyOptionPropertyToHclTerraform(struct?: AwsPolicy.PolicyOptionPropertyOutputReference | AwsPolicy.PolicyOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_acl_common_policy: {
      value: awsPolicyNetworkAclCommonPolicyPropertyToHclTerraform(struct!.networkAclCommonPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAclCommonPolicyPropertyList",
    },
    network_firewall_policy: {
      value: awsPolicyNetworkFirewallPolicyPropertyToHclTerraform(struct!.networkFirewallPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkFirewallPolicyPropertyList",
    },
    third_party_firewall_policy: {
      value: awsPolicyThirdPartyFirewallPolicyPropertyToHclTerraform(struct!.thirdPartyFirewallPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ThirdPartyFirewallPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicySecurityServicePolicyDataPropertyToTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPropertyOutputReference | AwsPolicy.SecurityServicePolicyDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_service_data: cdktn.stringToTerraform(struct!.managedServiceData),
    type: cdktn.stringToTerraform(struct!.type),
    policy_option: awsPolicyPolicyOptionPropertyToTerraform(struct!.policyOption),
  }
}


export function awsPolicySecurityServicePolicyDataPropertyToHclTerraform(struct?: AwsPolicy.SecurityServicePolicyDataPropertyOutputReference | AwsPolicy.SecurityServicePolicyDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_service_data: {
      value: cdktn.stringToHclTerraform(struct!.managedServiceData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_option: {
      value: awsPolicyPolicyOptionPropertyToHclTerraform(struct!.policyOption),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyOptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPolicy {
export interface ExcludeMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#account AwsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#orgunit AwsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}
export class ExcludeMapPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExcludeMapProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._orgunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgunit = this._orgunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludeMapProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._orgunit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._orgunit = value.orgunit;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string[]; 
  public get account() {
    return cdktn.Fn.tolist(this.getListAttribute('account'));
  }
  public set account(value: string[]) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // orgunit - computed: false, optional: true, required: false
  private _orgunit?: string[]; 
  public get orgunit() {
    return cdktn.Fn.tolist(this.getListAttribute('orgunit'));
  }
  public set orgunit(value: string[]) {
    this._orgunit = value;
  }
  public resetOrgunit() {
    this._orgunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgunitInput() {
    return this._orgunit;
  }
}
export interface IncludeMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#account AwsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#orgunit AwsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}
export class IncludeMapPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncludeMapProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._orgunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgunit = this._orgunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncludeMapProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._orgunit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._orgunit = value.orgunit;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string[]; 
  public get account() {
    return cdktn.Fn.tolist(this.getListAttribute('account'));
  }
  public set account(value: string[]) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // orgunit - computed: false, optional: true, required: false
  private _orgunit?: string[]; 
  public get orgunit() {
    return cdktn.Fn.tolist(this.getListAttribute('orgunit'));
  }
  public set orgunit(value: string[]) {
    this._orgunit = value;
  }
  public resetOrgunit() {
    this._orgunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgunitInput() {
    return this._orgunit;
  }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#code AwsPolicy#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#type AwsPolicy#type}
  */
  readonly type?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyList extends cdktn.ComplexList {
  public internalValue? : SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty[] | cdktn.IResolvable

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
  public get(index: number): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyOutputReference {
    return new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#from AwsPolicy#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#to AwsPolicy#to}
  */
  readonly to?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyList extends cdktn.ComplexList {
  public internalValue? : SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyOutputReference {
    return new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirstEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#cidr_block AwsPolicy#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#egress AwsPolicy#egress}
  */
  readonly egress: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#ipv6_cidr_block AwsPolicy#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#protocol AwsPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#rule_action AwsPolicy#rule_action}
  */
  readonly ruleAction: string;
  /**
  * icmp_type_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#icmp_type_code AwsPolicy#icmp_type_code}
  */
  readonly icmpTypeCode?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty[] | cdktn.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#port_range AwsPolicy#port_range}
  */
  readonly portRange?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty[] | cdktn.IResolvable;
}
export class FirstEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirstEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._icmpTypeCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCode = this._icmpTypeCode?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirstEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._egress = undefined;
      this._ipv6CidrBlock = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._icmpTypeCode.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._egress = value.egress;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._icmpTypeCode.internalValue = value.icmpTypeCode;
      this._portRange.internalValue = value.portRange;
    }
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // egress - computed: false, optional: false, required: true
  private _egress?: boolean | cdktn.IResolvable; 
  public get egress() {
    return this.getBooleanAttribute('egress');
  }
  public set egress(value: boolean | cdktn.IResolvable) {
    this._egress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // icmp_type_code - computed: false, optional: true, required: false
  private _icmpTypeCode = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodePropertyList(this, "icmp_type_code", false);
  public get icmpTypeCode() {
    return this._icmpTypeCode;
  }
  public putIcmpTypeCode(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeProperty[] | cdktn.IResolvable) {
    this._icmpTypeCode.internalValue = value;
  }
  public resetIcmpTypeCode() {
    this._icmpTypeCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeInput() {
    return this._icmpTypeCode.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangePropertyList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeProperty[] | cdktn.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class FirstEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : FirstEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): FirstEntryPropertyOutputReference {
    return new FirstEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#code AwsPolicy#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#type AwsPolicy#type}
  */
  readonly type?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyList extends cdktn.ComplexList {
  public internalValue? : SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty[] | cdktn.IResolvable

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
  public get(index: number): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyOutputReference {
    return new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#from AwsPolicy#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#to AwsPolicy#to}
  */
  readonly to?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyList extends cdktn.ComplexList {
  public internalValue? : SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyOutputReference {
    return new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#cidr_block AwsPolicy#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#egress AwsPolicy#egress}
  */
  readonly egress: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#ipv6_cidr_block AwsPolicy#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#protocol AwsPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#rule_action AwsPolicy#rule_action}
  */
  readonly ruleAction: string;
  /**
  * icmp_type_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#icmp_type_code AwsPolicy#icmp_type_code}
  */
  readonly icmpTypeCode?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty[] | cdktn.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#port_range AwsPolicy#port_range}
  */
  readonly portRange?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty[] | cdktn.IResolvable;
}
export class LastEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._icmpTypeCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCode = this._icmpTypeCode?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._egress = undefined;
      this._ipv6CidrBlock = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._icmpTypeCode.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._egress = value.egress;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._icmpTypeCode.internalValue = value.icmpTypeCode;
      this._portRange.internalValue = value.portRange;
    }
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // egress - computed: false, optional: false, required: true
  private _egress?: boolean | cdktn.IResolvable; 
  public get egress() {
    return this.getBooleanAttribute('egress');
  }
  public set egress(value: boolean | cdktn.IResolvable) {
    this._egress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // icmp_type_code - computed: false, optional: true, required: false
  private _icmpTypeCode = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodePropertyList(this, "icmp_type_code", false);
  public get icmpTypeCode() {
    return this._icmpTypeCode;
  }
  public putIcmpTypeCode(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeProperty[] | cdktn.IResolvable) {
    this._icmpTypeCode.internalValue = value;
  }
  public resetIcmpTypeCode() {
    this._icmpTypeCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeInput() {
    return this._icmpTypeCode.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangePropertyList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeProperty[] | cdktn.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class LastEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : LastEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): LastEntryPropertyOutputReference {
    return new LastEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAclEntrySetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#force_remediate_for_first_entries AwsPolicy#force_remediate_for_first_entries}
  */
  readonly forceRemediateForFirstEntries: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#force_remediate_for_last_entries AwsPolicy#force_remediate_for_last_entries}
  */
  readonly forceRemediateForLastEntries: boolean | cdktn.IResolvable;
  /**
  * first_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#first_entry AwsPolicy#first_entry}
  */
  readonly firstEntry?: FirstEntryProperty[] | cdktn.IResolvable;
  /**
  * last_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#last_entry AwsPolicy#last_entry}
  */
  readonly lastEntry?: LastEntryProperty[] | cdktn.IResolvable;
}
export class NetworkAclEntrySetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclEntrySetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceRemediateForFirstEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRemediateForFirstEntries = this._forceRemediateForFirstEntries;
    }
    if (this._forceRemediateForLastEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRemediateForLastEntries = this._forceRemediateForLastEntries;
    }
    if (this._firstEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstEntry = this._firstEntry?.internalValue;
    }
    if (this._lastEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastEntry = this._lastEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclEntrySetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceRemediateForFirstEntries = undefined;
      this._forceRemediateForLastEntries = undefined;
      this._firstEntry.internalValue = undefined;
      this._lastEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceRemediateForFirstEntries = value.forceRemediateForFirstEntries;
      this._forceRemediateForLastEntries = value.forceRemediateForLastEntries;
      this._firstEntry.internalValue = value.firstEntry;
      this._lastEntry.internalValue = value.lastEntry;
    }
  }

  // force_remediate_for_first_entries - computed: false, optional: false, required: true
  private _forceRemediateForFirstEntries?: boolean | cdktn.IResolvable; 
  public get forceRemediateForFirstEntries() {
    return this.getBooleanAttribute('force_remediate_for_first_entries');
  }
  public set forceRemediateForFirstEntries(value: boolean | cdktn.IResolvable) {
    this._forceRemediateForFirstEntries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemediateForFirstEntriesInput() {
    return this._forceRemediateForFirstEntries;
  }

  // force_remediate_for_last_entries - computed: false, optional: false, required: true
  private _forceRemediateForLastEntries?: boolean | cdktn.IResolvable; 
  public get forceRemediateForLastEntries() {
    return this.getBooleanAttribute('force_remediate_for_last_entries');
  }
  public set forceRemediateForLastEntries(value: boolean | cdktn.IResolvable) {
    this._forceRemediateForLastEntries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemediateForLastEntriesInput() {
    return this._forceRemediateForLastEntries;
  }

  // first_entry - computed: false, optional: true, required: false
  private _firstEntry = new FirstEntryPropertyList(this, "first_entry", true);
  public get firstEntry() {
    return this._firstEntry;
  }
  public putFirstEntry(value: FirstEntryProperty[] | cdktn.IResolvable) {
    this._firstEntry.internalValue = value;
  }
  public resetFirstEntry() {
    this._firstEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstEntryInput() {
    return this._firstEntry.internalValue;
  }

  // last_entry - computed: false, optional: true, required: false
  private _lastEntry = new LastEntryPropertyList(this, "last_entry", true);
  public get lastEntry() {
    return this._lastEntry;
  }
  public putLastEntry(value: LastEntryProperty[] | cdktn.IResolvable) {
    this._lastEntry.internalValue = value;
  }
  public resetLastEntry() {
    this._lastEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastEntryInput() {
    return this._lastEntry.internalValue;
  }
}
export interface NetworkAclCommonPolicyProperty {
  /**
  * network_acl_entry_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#network_acl_entry_set AwsPolicy#network_acl_entry_set}
  */
  readonly networkAclEntrySet?: NetworkAclEntrySetProperty;
}
export class NetworkAclCommonPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclCommonPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAclEntrySet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclEntrySet = this._networkAclEntrySet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclCommonPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAclEntrySet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAclEntrySet.internalValue = value.networkAclEntrySet;
    }
  }

  // network_acl_entry_set - computed: false, optional: true, required: false
  private _networkAclEntrySet = new NetworkAclEntrySetPropertyOutputReference(this, "network_acl_entry_set");
  public get networkAclEntrySet() {
    return this._networkAclEntrySet;
  }
  public putNetworkAclEntrySet(value: NetworkAclEntrySetProperty) {
    this._networkAclEntrySet.internalValue = value;
  }
  public resetNetworkAclEntrySet() {
    this._networkAclEntrySet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclEntrySetInput() {
    return this._networkAclEntrySet.internalValue;
  }
}
export interface NetworkFirewallPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#firewall_deployment_model AwsPolicy#firewall_deployment_model}
  */
  readonly firewallDeploymentModel?: string;
}
export class NetworkFirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallDeploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewallDeploymentModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewallDeploymentModel = value.firewallDeploymentModel;
    }
  }

  // firewall_deployment_model - computed: false, optional: true, required: false
  private _firewallDeploymentModel?: string; 
  public get firewallDeploymentModel() {
    return this.getStringAttribute('firewall_deployment_model');
  }
  public set firewallDeploymentModel(value: string) {
    this._firewallDeploymentModel = value;
  }
  public resetFirewallDeploymentModel() {
    this._firewallDeploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDeploymentModelInput() {
    return this._firewallDeploymentModel;
  }
}
export interface ThirdPartyFirewallPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#firewall_deployment_model AwsPolicy#firewall_deployment_model}
  */
  readonly firewallDeploymentModel?: string;
}
export class ThirdPartyFirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThirdPartyFirewallPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallDeploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThirdPartyFirewallPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewallDeploymentModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewallDeploymentModel = value.firewallDeploymentModel;
    }
  }

  // firewall_deployment_model - computed: false, optional: true, required: false
  private _firewallDeploymentModel?: string; 
  public get firewallDeploymentModel() {
    return this.getStringAttribute('firewall_deployment_model');
  }
  public set firewallDeploymentModel(value: string) {
    this._firewallDeploymentModel = value;
  }
  public resetFirewallDeploymentModel() {
    this._firewallDeploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDeploymentModelInput() {
    return this._firewallDeploymentModel;
  }
}
export interface PolicyOptionProperty {
  /**
  * network_acl_common_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#network_acl_common_policy AwsPolicy#network_acl_common_policy}
  */
  readonly networkAclCommonPolicy?: NetworkAclCommonPolicyProperty;
  /**
  * network_firewall_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#network_firewall_policy AwsPolicy#network_firewall_policy}
  */
  readonly networkFirewallPolicy?: NetworkFirewallPolicyProperty;
  /**
  * third_party_firewall_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#third_party_firewall_policy AwsPolicy#third_party_firewall_policy}
  */
  readonly thirdPartyFirewallPolicy?: ThirdPartyFirewallPolicyProperty;
}
export class PolicyOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAclCommonPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclCommonPolicy = this._networkAclCommonPolicy?.internalValue;
    }
    if (this._networkFirewallPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFirewallPolicy = this._networkFirewallPolicy?.internalValue;
    }
    if (this._thirdPartyFirewallPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyFirewallPolicy = this._thirdPartyFirewallPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAclCommonPolicy.internalValue = undefined;
      this._networkFirewallPolicy.internalValue = undefined;
      this._thirdPartyFirewallPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAclCommonPolicy.internalValue = value.networkAclCommonPolicy;
      this._networkFirewallPolicy.internalValue = value.networkFirewallPolicy;
      this._thirdPartyFirewallPolicy.internalValue = value.thirdPartyFirewallPolicy;
    }
  }

  // network_acl_common_policy - computed: false, optional: true, required: false
  private _networkAclCommonPolicy = new NetworkAclCommonPolicyPropertyOutputReference(this, "network_acl_common_policy");
  public get networkAclCommonPolicy() {
    return this._networkAclCommonPolicy;
  }
  public putNetworkAclCommonPolicy(value: NetworkAclCommonPolicyProperty) {
    this._networkAclCommonPolicy.internalValue = value;
  }
  public resetNetworkAclCommonPolicy() {
    this._networkAclCommonPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclCommonPolicyInput() {
    return this._networkAclCommonPolicy.internalValue;
  }

  // network_firewall_policy - computed: false, optional: true, required: false
  private _networkFirewallPolicy = new NetworkFirewallPolicyPropertyOutputReference(this, "network_firewall_policy");
  public get networkFirewallPolicy() {
    return this._networkFirewallPolicy;
  }
  public putNetworkFirewallPolicy(value: NetworkFirewallPolicyProperty) {
    this._networkFirewallPolicy.internalValue = value;
  }
  public resetNetworkFirewallPolicy() {
    this._networkFirewallPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyInput() {
    return this._networkFirewallPolicy.internalValue;
  }

  // third_party_firewall_policy - computed: false, optional: true, required: false
  private _thirdPartyFirewallPolicy = new ThirdPartyFirewallPolicyPropertyOutputReference(this, "third_party_firewall_policy");
  public get thirdPartyFirewallPolicy() {
    return this._thirdPartyFirewallPolicy;
  }
  public putThirdPartyFirewallPolicy(value: ThirdPartyFirewallPolicyProperty) {
    this._thirdPartyFirewallPolicy.internalValue = value;
  }
  public resetThirdPartyFirewallPolicy() {
    this._thirdPartyFirewallPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyFirewallPolicyInput() {
    return this._thirdPartyFirewallPolicy.internalValue;
  }
}
export interface SecurityServicePolicyDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#managed_service_data AwsPolicy#managed_service_data}
  */
  readonly managedServiceData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#type AwsPolicy#type}
  */
  readonly type: string;
  /**
  * policy_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fms_policy#policy_option AwsPolicy#policy_option}
  */
  readonly policyOption?: PolicyOptionProperty;
}
export class SecurityServicePolicyDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityServicePolicyDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedServiceData !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedServiceData = this._managedServiceData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._policyOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyOption = this._policyOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityServicePolicyDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedServiceData = undefined;
      this._type = undefined;
      this._policyOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedServiceData = value.managedServiceData;
      this._type = value.type;
      this._policyOption.internalValue = value.policyOption;
    }
  }

  // managed_service_data - computed: false, optional: true, required: false
  private _managedServiceData?: string; 
  public get managedServiceData() {
    return this.getStringAttribute('managed_service_data');
  }
  public set managedServiceData(value: string) {
    this._managedServiceData = value;
  }
  public resetManagedServiceData() {
    this._managedServiceData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceDataInput() {
    return this._managedServiceData;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // policy_option - computed: false, optional: true, required: false
  private _policyOption = new PolicyOptionPropertyOutputReference(this, "policy_option");
  public get policyOption() {
    return this._policyOption;
  }
  public putPolicyOption(value: PolicyOptionProperty) {
    this._policyOption.internalValue = value;
  }
  public resetPolicyOption() {
    this._policyOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionInput() {
    return this._policyOption.internalValue;
  }
}
}
