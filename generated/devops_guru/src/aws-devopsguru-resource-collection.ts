// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResourceCollectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#region AwsResourceCollection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#type AwsResourceCollection#type}
  */
  readonly type: string;
  /**
  * cloudformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#cloudformation AwsResourceCollection#cloudformation}
  */
  readonly cloudformation?: AwsResourceCollection.CloudformationProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#tags AwsResourceCollection#tags}
  */
  readonly tags?: AwsResourceCollection.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection aws_devopsguru_resource_collection}
*/
export class AwsResourceCollection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_resource_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResourceCollection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResourceCollection to import
  * @param importFromId The id of the existing AwsResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResourceCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_resource_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection aws_devopsguru_resource_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResourceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_resource_collection',
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
    this._region = config.region;
    this._type = config.type;
    this._cloudformation.internalValue = config.cloudformation;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // cloudformation - computed: false, optional: true, required: false
  private _cloudformation = new AwsResourceCollection.CloudformationPropertyList(this, "cloudformation", false);
  public get cloudformation() {
    return this._cloudformation;
  }
  public putCloudformation(value: AwsResourceCollection.CloudformationProperty[] | cdktn.IResolvable) {
    this._cloudformation.internalValue = value;
  }
  public resetCloudformation() {
    this._cloudformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudformationInput() {
    return this._cloudformation.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AwsResourceCollection.TagsPropertyList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AwsResourceCollection.TagsProperty[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      type: cdktn.stringToTerraform(this._type),
      cloudformation: cdktn.listMapper(awsResourceCollectionCloudformationPropertyToTerraform, true)(this._cloudformation.internalValue),
      tags: cdktn.listMapper(awsResourceCollectionTagsPropertyToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudformation: {
        value: cdktn.listMapperHcl(awsResourceCollectionCloudformationPropertyToHclTerraform, true)(this._cloudformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResourceCollection.CloudformationPropertyList",
      },
      tags: {
        value: cdktn.listMapperHcl(awsResourceCollectionTagsPropertyToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResourceCollection.TagsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResourceCollectionCloudformationPropertyToTerraform(struct?: AwsResourceCollection.CloudformationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stack_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stackNames),
  }
}


export function awsResourceCollectionCloudformationPropertyToHclTerraform(struct?: AwsResourceCollection.CloudformationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stack_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stackNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceCollectionTagsPropertyToTerraform(struct?: AwsResourceCollection.TagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_boundary_key: cdktn.stringToTerraform(struct!.appBoundaryKey),
    tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagValues),
  }
}


export function awsResourceCollectionTagsPropertyToHclTerraform(struct?: AwsResourceCollection.TagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_boundary_key: {
      value: cdktn.stringToHclTerraform(struct!.appBoundaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsResourceCollection {
export interface CloudformationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#stack_names AwsResourceCollection#stack_names}
  */
  readonly stackNames: string[];
}
export class CloudformationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudformationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stackNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackNames = this._stackNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stackNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stackNames = value.stackNames;
    }
  }

  // stack_names - computed: false, optional: false, required: true
  private _stackNames?: string[]; 
  public get stackNames() {
    return this.getListAttribute('stack_names');
  }
  public set stackNames(value: string[]) {
    this._stackNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNamesInput() {
    return this._stackNames;
  }
}

export class CloudformationPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudformationProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudformationPropertyOutputReference {
    return new CloudformationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#app_boundary_key AwsResourceCollection#app_boundary_key}
  */
  readonly appBoundaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_resource_collection#tag_values AwsResourceCollection#tag_values}
  */
  readonly tagValues: string[];
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appBoundaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBoundaryKey = this._appBoundaryKey;
    }
    if (this._tagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appBoundaryKey = undefined;
      this._tagValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appBoundaryKey = value.appBoundaryKey;
      this._tagValues = value.tagValues;
    }
  }

  // app_boundary_key - computed: false, optional: false, required: true
  private _appBoundaryKey?: string; 
  public get appBoundaryKey() {
    return this.getStringAttribute('app_boundary_key');
  }
  public set appBoundaryKey(value: string) {
    this._appBoundaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appBoundaryKeyInput() {
    return this._appBoundaryKey;
  }

  // tag_values - computed: false, optional: false, required: true
  private _tagValues?: string[]; 
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
  public set tagValues(value: string[]) {
    this._tagValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues;
  }
}

export class TagsPropertyList extends cdktn.ComplexList {
  public internalValue? : TagsProperty[] | cdktn.IResolvable

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
  public get(index: number): TagsPropertyOutputReference {
    return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
