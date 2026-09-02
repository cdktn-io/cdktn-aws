// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DataTfResourcesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#exclude_compliant_resources DataTfResources#exclude_compliant_resources}
  */
  readonly excludeCompliantResources?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#id DataTfResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#include_compliance_details DataTfResources#include_compliance_details}
  */
  readonly includeComplianceDetails?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#region DataTfResources#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_arn_list DataTfResources#resource_arn_list}
  */
  readonly resourceArnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_type_filters DataTfResources#resource_type_filters}
  */
  readonly resourceTypeFilters?: string[];
  /**
  * tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#tag_filter DataTfResources#tag_filter}
  */
  readonly tagFilter?: DataTfResources.TagFilterProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources}
*/
export class DataTfResources extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resourcegroupstaggingapi_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataTfResources resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfResources to import
  * @param importFromId The id of the existing DataTfResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resourcegroupstaggingapi_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
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
    this._excludeCompliantResources = config.excludeCompliantResources;
    this._id = config.id;
    this._includeComplianceDetails = config.includeComplianceDetails;
    this._region = config.region;
    this._resourceArnList = config.resourceArnList;
    this._resourceTypeFilters = config.resourceTypeFilters;
    this._tagFilter.internalValue = config.tagFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_compliant_resources - computed: false, optional: true, required: false
  private _excludeCompliantResources?: boolean | cdktn.IResolvable; 
  public get excludeCompliantResources() {
    return this.getBooleanAttribute('exclude_compliant_resources');
  }
  public set excludeCompliantResources(value: boolean | cdktn.IResolvable) {
    this._excludeCompliantResources = value;
  }
  public resetExcludeCompliantResources() {
    this._excludeCompliantResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCompliantResourcesInput() {
    return this._excludeCompliantResources;
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

  // include_compliance_details - computed: false, optional: true, required: false
  private _includeComplianceDetails?: boolean | cdktn.IResolvable; 
  public get includeComplianceDetails() {
    return this.getBooleanAttribute('include_compliance_details');
  }
  public set includeComplianceDetails(value: boolean | cdktn.IResolvable) {
    this._includeComplianceDetails = value;
  }
  public resetIncludeComplianceDetails() {
    this._includeComplianceDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeComplianceDetailsInput() {
    return this._includeComplianceDetails;
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

  // resource_arn_list - computed: false, optional: true, required: false
  private _resourceArnList?: string[]; 
  public get resourceArnList() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_arn_list'));
  }
  public set resourceArnList(value: string[]) {
    this._resourceArnList = value;
  }
  public resetResourceArnList() {
    this._resourceArnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnListInput() {
    return this._resourceArnList;
  }

  // resource_tag_mapping_list - computed: true, optional: false, required: false
  private _resourceTagMappingList = new DataTfResources.ResourceTagMappingListPropertyList(this, "resource_tag_mapping_list", false);
  public get resourceTagMappingList() {
    return this._resourceTagMappingList;
  }

  // resource_type_filters - computed: false, optional: true, required: false
  private _resourceTypeFilters?: string[]; 
  public get resourceTypeFilters() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_type_filters'));
  }
  public set resourceTypeFilters(value: string[]) {
    this._resourceTypeFilters = value;
  }
  public resetResourceTypeFilters() {
    this._resourceTypeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFiltersInput() {
    return this._resourceTypeFilters;
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter = new DataTfResources.TagFilterPropertyList(this, "tag_filter", false);
  public get tagFilter() {
    return this._tagFilter;
  }
  public putTagFilter(value: DataTfResources.TagFilterProperty[] | cdktn.IResolvable) {
    this._tagFilter.internalValue = value;
  }
  public resetTagFilter() {
    this._tagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_compliant_resources: cdktn.booleanToTerraform(this._excludeCompliantResources),
      id: cdktn.stringToTerraform(this._id),
      include_compliance_details: cdktn.booleanToTerraform(this._includeComplianceDetails),
      region: cdktn.stringToTerraform(this._region),
      resource_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceArnList),
      resource_type_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceTypeFilters),
      tag_filter: cdktn.listMapper(dataTfResourcesTagFilterPropertyToTerraform, true)(this._tagFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_compliant_resources: {
        value: cdktn.booleanToHclTerraform(this._excludeCompliantResources),
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
      include_compliance_details: {
        value: cdktn.booleanToHclTerraform(this._includeComplianceDetails),
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
      resource_arn_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceArnList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_type_filters: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceTypeFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_filter: {
        value: cdktn.listMapperHcl(dataTfResourcesTagFilterPropertyToHclTerraform, true)(this._tagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfResources.TagFilterPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function dataTfResourcesComplianceDetailsPropertyToTerraform(struct?: DataTfResources.ComplianceDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataTfResourcesComplianceDetailsPropertyToHclTerraform(struct?: DataTfResources.ComplianceDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function dataTfResourcesResourceTagMappingListPropertyToTerraform(struct?: DataTfResources.ResourceTagMappingListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataTfResourcesResourceTagMappingListPropertyToHclTerraform(struct?: DataTfResources.ResourceTagMappingListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function dataTfResourcesTagFilterPropertyToTerraform(struct?: DataTfResources.TagFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataTfResourcesTagFilterPropertyToHclTerraform(struct?: DataTfResources.TagFilterProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace DataTfResources {
export interface ComplianceDetailsProperty {
}
export class ComplianceDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getBooleanAttribute('compliance_status');
  }

  // keys_with_noncompliant_values - computed: true, optional: false, required: false
  public get keysWithNoncompliantValues() {
    return cdktn.Fn.tolist(this.getListAttribute('keys_with_noncompliant_values'));
  }

  // non_compliant_keys - computed: true, optional: false, required: false
  public get nonCompliantKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('non_compliant_keys'));
  }
}

export class ComplianceDetailsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ComplianceDetailsPropertyOutputReference {
    return new ComplianceDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTagMappingListProperty {
}
export class ResourceTagMappingListPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTagMappingListProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTagMappingListProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_details - computed: true, optional: false, required: false
  private _complianceDetails = new ComplianceDetailsPropertyList(this, "compliance_details", false);
  public get complianceDetails() {
    return this._complianceDetails;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class ResourceTagMappingListPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ResourceTagMappingListPropertyOutputReference {
    return new ResourceTagMappingListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#key DataTfResources#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resourcegroupstaggingapi_resources#values DataTfResources#values}
  */
  readonly values?: string[];
}
export class TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class TagFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : TagFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): TagFilterPropertyOutputReference {
    return new TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
