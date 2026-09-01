// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontFieldLevelEncryptionProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#comment AwsCloudfrontFieldLevelEncryptionProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#id AwsCloudfrontFieldLevelEncryptionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#name AwsCloudfrontFieldLevelEncryptionProfile#name}
  */
  readonly name: string;
  /**
  * encryption_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities AwsCloudfrontFieldLevelEncryptionProfile#encryption_entities}
  */
  readonly encryptionEntities: AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile}
*/
export class AwsCloudfrontFieldLevelEncryptionProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_field_level_encryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontFieldLevelEncryptionProfile to import
  * @param importFromId The id of the existing AwsCloudfrontFieldLevelEncryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontFieldLevelEncryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_field_level_encryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontFieldLevelEncryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontFieldLevelEncryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_field_level_encryption_profile',
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
    this._encryptionEntities.internalValue = config.encryptionEntities;
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

  // encryption_entities - computed: false, optional: false, required: true
  private _encryptionEntities = new AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesPropertyOutputReference(this, "encryption_entities");
  public get encryptionEntities() {
    return this._encryptionEntities;
  }
  public putEncryptionEntities(value: AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesProperty) {
    this._encryptionEntities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEntitiesInput() {
    return this._encryptionEntities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      encryption_entities: awsCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesPropertyToTerraform(this._encryptionEntities.internalValue),
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
      encryption_entities: {
        value: awsCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesPropertyToHclTerraform(this._encryptionEntities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontFieldLevelEncryptionProfileFieldPatternsPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.FieldPatternsPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionProfile.FieldPatternsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function awsCloudfrontFieldLevelEncryptionProfileFieldPatternsPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.FieldPatternsPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionProfile.FieldPatternsProperty): any {
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


export function awsCloudfrontFieldLevelEncryptionProfileItemsPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.ItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider_id: cdktn.stringToTerraform(struct!.providerId),
    public_key_id: cdktn.stringToTerraform(struct!.publicKeyId),
    field_patterns: awsCloudfrontFieldLevelEncryptionProfileFieldPatternsPropertyToTerraform(struct!.fieldPatterns),
  }
}


export function awsCloudfrontFieldLevelEncryptionProfileItemsPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.ItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provider_id: {
      value: cdktn.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_id: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_patterns: {
      value: awsCloudfrontFieldLevelEncryptionProfileFieldPatternsPropertyToHclTerraform(struct!.fieldPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "FieldPatternsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesPropertyToTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(awsCloudfrontFieldLevelEncryptionProfileItemsPropertyToTerraform, true)(struct!.items),
  }
}


export function awsCloudfrontFieldLevelEncryptionProfileEncryptionEntitiesPropertyToHclTerraform(struct?: AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesPropertyOutputReference | AwsCloudfrontFieldLevelEncryptionProfile.EncryptionEntitiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(awsCloudfrontFieldLevelEncryptionProfileItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "ItemsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudfrontFieldLevelEncryptionProfile {
export interface FieldPatternsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#items AwsCloudfrontFieldLevelEncryptionProfile#items}
  */
  readonly items?: string[];
}
export class FieldPatternsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FieldPatternsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FieldPatternsProperty | undefined) {
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
export interface ItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id AwsCloudfrontFieldLevelEncryptionProfile#provider_id}
  */
  readonly providerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id AwsCloudfrontFieldLevelEncryptionProfile#public_key_id}
  */
  readonly publicKeyId: string;
  /**
  * field_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns AwsCloudfrontFieldLevelEncryptionProfile#field_patterns}
  */
  readonly fieldPatterns: FieldPatternsProperty;
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
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._publicKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyId = this._publicKeyId;
    }
    if (this._fieldPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPatterns = this._fieldPatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerId = undefined;
      this._publicKeyId = undefined;
      this._fieldPatterns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerId = value.providerId;
      this._publicKeyId = value.publicKeyId;
      this._fieldPatterns.internalValue = value.fieldPatterns;
    }
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // public_key_id - computed: false, optional: false, required: true
  private _publicKeyId?: string; 
  public get publicKeyId() {
    return this.getStringAttribute('public_key_id');
  }
  public set publicKeyId(value: string) {
    this._publicKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIdInput() {
    return this._publicKeyId;
  }

  // field_patterns - computed: false, optional: false, required: true
  private _fieldPatterns = new FieldPatternsPropertyOutputReference(this, "field_patterns");
  public get fieldPatterns() {
    return this._fieldPatterns;
  }
  public putFieldPatterns(value: FieldPatternsProperty) {
    this._fieldPatterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPatternsInput() {
    return this._fieldPatterns.internalValue;
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
export interface EncryptionEntitiesProperty {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_field_level_encryption_profile#items AwsCloudfrontFieldLevelEncryptionProfile#items}
  */
  readonly items?: ItemsProperty[] | cdktn.IResolvable;
}
export class EncryptionEntitiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionEntitiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionEntitiesProperty | undefined) {
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
  private _items = new ItemsPropertyList(this, "items", true);
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
}
