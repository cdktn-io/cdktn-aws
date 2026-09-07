// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResourceDiscoveryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#description AwsResourceDiscovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#id AwsResourceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#region AwsResourceDiscovery#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#tags AwsResourceDiscovery#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#tags_all AwsResourceDiscovery#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * operating_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#operating_regions AwsResourceDiscovery#operating_regions}
  */
  readonly operatingRegions: AwsResourceDiscovery.OperatingRegionsProperty[] | cdktn.IResolvable;
  /**
  * organizational_unit_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#organizational_unit_exclusion AwsResourceDiscovery#organizational_unit_exclusion}
  */
  readonly organizationalUnitExclusion?: AwsResourceDiscovery.OrganizationalUnitExclusionProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#timeouts AwsResourceDiscovery#timeouts}
  */
  readonly timeouts?: AwsResourceDiscovery.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery}
*/
export class AwsResourceDiscovery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_resource_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResourceDiscovery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResourceDiscovery to import
  * @param importFromId The id of the existing AwsResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResourceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_ipam_resource_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResourceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResourceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_resource_discovery',
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
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._operatingRegions.internalValue = config.operatingRegions;
    this._organizationalUnitExclusion.internalValue = config.organizationalUnitExclusion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // ipam_resource_discovery_region - computed: true, optional: false, required: false
  public get ipamResourceDiscoveryRegion() {
    return this.getStringAttribute('ipam_resource_discovery_region');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // operating_regions - computed: false, optional: false, required: true
  private _operatingRegions = new AwsResourceDiscovery.OperatingRegionsPropertyList(this, "operating_regions", true);
  public get operatingRegions() {
    return this._operatingRegions;
  }
  public putOperatingRegions(value: AwsResourceDiscovery.OperatingRegionsProperty[] | cdktn.IResolvable) {
    this._operatingRegions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingRegionsInput() {
    return this._operatingRegions.internalValue;
  }

  // organizational_unit_exclusion - computed: false, optional: true, required: false
  private _organizationalUnitExclusion = new AwsResourceDiscovery.OrganizationalUnitExclusionPropertyList(this, "organizational_unit_exclusion", true);
  public get organizationalUnitExclusion() {
    return this._organizationalUnitExclusion;
  }
  public putOrganizationalUnitExclusion(value: AwsResourceDiscovery.OrganizationalUnitExclusionProperty[] | cdktn.IResolvable) {
    this._organizationalUnitExclusion.internalValue = value;
  }
  public resetOrganizationalUnitExclusion() {
    this._organizationalUnitExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitExclusionInput() {
    return this._organizationalUnitExclusion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsResourceDiscovery.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsResourceDiscovery.TimeoutsProperty) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      operating_regions: cdktn.listMapper(awsResourceDiscoveryOperatingRegionsPropertyToTerraform, true)(this._operatingRegions.internalValue),
      organizational_unit_exclusion: cdktn.listMapper(awsResourceDiscoveryOrganizationalUnitExclusionPropertyToTerraform, true)(this._organizationalUnitExclusion.internalValue),
      timeouts: awsResourceDiscoveryTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      operating_regions: {
        value: cdktn.listMapperHcl(awsResourceDiscoveryOperatingRegionsPropertyToHclTerraform, true)(this._operatingRegions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsResourceDiscovery.OperatingRegionsPropertyList",
      },
      organizational_unit_exclusion: {
        value: cdktn.listMapperHcl(awsResourceDiscoveryOrganizationalUnitExclusionPropertyToHclTerraform, true)(this._organizationalUnitExclusion.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsResourceDiscovery.OrganizationalUnitExclusionPropertyList",
      },
      timeouts: {
        value: awsResourceDiscoveryTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsResourceDiscovery.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResourceDiscoveryOperatingRegionsPropertyToTerraform(struct?: AwsResourceDiscovery.OperatingRegionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_name: cdktn.stringToTerraform(struct!.regionName),
  }
}


export function awsResourceDiscoveryOperatingRegionsPropertyToHclTerraform(struct?: AwsResourceDiscovery.OperatingRegionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_name: {
      value: cdktn.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceDiscoveryOrganizationalUnitExclusionPropertyToTerraform(struct?: AwsResourceDiscovery.OrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organizations_entity_path: cdktn.stringToTerraform(struct!.organizationsEntityPath),
  }
}


export function awsResourceDiscoveryOrganizationalUnitExclusionPropertyToHclTerraform(struct?: AwsResourceDiscovery.OrganizationalUnitExclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organizations_entity_path: {
      value: cdktn.stringToHclTerraform(struct!.organizationsEntityPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceDiscoveryTimeoutsPropertyToTerraform(struct?: AwsResourceDiscovery.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsResourceDiscoveryTimeoutsPropertyToHclTerraform(struct?: AwsResourceDiscovery.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsResourceDiscovery {
export interface OperatingRegionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#region_name AwsResourceDiscovery#region_name}
  */
  readonly regionName: string;
}
export class OperatingRegionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OperatingRegionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperatingRegionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionName = value.regionName;
    }
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}

export class OperatingRegionsPropertyList extends cdktn.ComplexList {
  public internalValue? : OperatingRegionsProperty[] | cdktn.IResolvable

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
  public get(index: number): OperatingRegionsPropertyOutputReference {
    return new OperatingRegionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationalUnitExclusionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#organizations_entity_path AwsResourceDiscovery#organizations_entity_path}
  */
  readonly organizationsEntityPath: string;
}
export class OrganizationalUnitExclusionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationsEntityPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationsEntityPath = this._organizationsEntityPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationalUnitExclusionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationsEntityPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationsEntityPath = value.organizationsEntityPath;
    }
  }

  // organizations_entity_path - computed: false, optional: false, required: true
  private _organizationsEntityPath?: string; 
  public get organizationsEntityPath() {
    return this.getStringAttribute('organizations_entity_path');
  }
  public set organizationsEntityPath(value: string) {
    this._organizationsEntityPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsEntityPathInput() {
    return this._organizationsEntityPath;
  }
}

export class OrganizationalUnitExclusionPropertyList extends cdktn.ComplexList {
  public internalValue? : OrganizationalUnitExclusionProperty[] | cdktn.IResolvable

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
  public get(index: number): OrganizationalUnitExclusionPropertyOutputReference {
    return new OrganizationalUnitExclusionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#create AwsResourceDiscovery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#delete AwsResourceDiscovery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_ipam_resource_discovery#update AwsResourceDiscovery#update}
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
}
