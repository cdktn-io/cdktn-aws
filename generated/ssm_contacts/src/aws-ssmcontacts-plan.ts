// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSsmcontactsPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#contact_id AwsSsmcontactsPlan#contact_id}
  */
  readonly contactId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#id AwsSsmcontactsPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#region AwsSsmcontactsPlan#region}
  */
  readonly region?: string;
  /**
  * stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#stage AwsSsmcontactsPlan#stage}
  */
  readonly stage: AwsSsmcontactsPlan.StageProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan}
*/
export class AwsSsmcontactsPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmcontacts_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSsmcontactsPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSsmcontactsPlan to import
  * @param importFromId The id of the existing AwsSsmcontactsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSsmcontactsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmcontacts_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSsmcontactsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSsmcontactsPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmcontacts_plan',
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
    this._contactId = config.contactId;
    this._id = config.id;
    this._region = config.region;
    this._stage.internalValue = config.stage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_id - computed: false, optional: false, required: true
  private _contactId?: string; 
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
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

  // stage - computed: false, optional: false, required: true
  private _stage = new AwsSsmcontactsPlan.StagePropertyList(this, "stage", false);
  public get stage() {
    return this._stage;
  }
  public putStage(value: AwsSsmcontactsPlan.StageProperty[] | cdktn.IResolvable) {
    this._stage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_id: cdktn.stringToTerraform(this._contactId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      stage: cdktn.listMapper(awsSsmcontactsPlanStagePropertyToTerraform, true)(this._stage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_id: {
        value: cdktn.stringToHclTerraform(this._contactId),
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
      stage: {
        value: cdktn.listMapperHcl(awsSsmcontactsPlanStagePropertyToHclTerraform, true)(this._stage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSsmcontactsPlan.StagePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSsmcontactsPlanChannelTargetInfoPropertyToTerraform(struct?: AwsSsmcontactsPlan.ChannelTargetInfoPropertyOutputReference | AwsSsmcontactsPlan.ChannelTargetInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contact_channel_id: cdktn.stringToTerraform(struct!.contactChannelId),
    retry_interval_in_minutes: cdktn.numberToTerraform(struct!.retryIntervalInMinutes),
  }
}


export function awsSsmcontactsPlanChannelTargetInfoPropertyToHclTerraform(struct?: AwsSsmcontactsPlan.ChannelTargetInfoPropertyOutputReference | AwsSsmcontactsPlan.ChannelTargetInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contact_channel_id: {
      value: cdktn.stringToHclTerraform(struct!.contactChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmcontactsPlanContactTargetInfoPropertyToTerraform(struct?: AwsSsmcontactsPlan.ContactTargetInfoPropertyOutputReference | AwsSsmcontactsPlan.ContactTargetInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contact_id: cdktn.stringToTerraform(struct!.contactId),
    is_essential: cdktn.booleanToTerraform(struct!.isEssential),
  }
}


export function awsSsmcontactsPlanContactTargetInfoPropertyToHclTerraform(struct?: AwsSsmcontactsPlan.ContactTargetInfoPropertyOutputReference | AwsSsmcontactsPlan.ContactTargetInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contact_id: {
      value: cdktn.stringToHclTerraform(struct!.contactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_essential: {
      value: cdktn.booleanToHclTerraform(struct!.isEssential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmcontactsPlanTargetPropertyToTerraform(struct?: AwsSsmcontactsPlan.TargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_target_info: awsSsmcontactsPlanChannelTargetInfoPropertyToTerraform(struct!.channelTargetInfo),
    contact_target_info: awsSsmcontactsPlanContactTargetInfoPropertyToTerraform(struct!.contactTargetInfo),
  }
}


export function awsSsmcontactsPlanTargetPropertyToHclTerraform(struct?: AwsSsmcontactsPlan.TargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_target_info: {
      value: awsSsmcontactsPlanChannelTargetInfoPropertyToHclTerraform(struct!.channelTargetInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ChannelTargetInfoPropertyList",
    },
    contact_target_info: {
      value: awsSsmcontactsPlanContactTargetInfoPropertyToHclTerraform(struct!.contactTargetInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ContactTargetInfoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmcontactsPlanStagePropertyToTerraform(struct?: AwsSsmcontactsPlan.StageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_in_minutes: cdktn.numberToTerraform(struct!.durationInMinutes),
    target: cdktn.listMapper(awsSsmcontactsPlanTargetPropertyToTerraform, true)(struct!.target),
  }
}


export function awsSsmcontactsPlanStagePropertyToHclTerraform(struct?: AwsSsmcontactsPlan.StageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktn.listMapperHcl(awsSsmcontactsPlanTargetPropertyToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "TargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSsmcontactsPlan {
export interface ChannelTargetInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#contact_channel_id AwsSsmcontactsPlan#contact_channel_id}
  */
  readonly contactChannelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes AwsSsmcontactsPlan#retry_interval_in_minutes}
  */
  readonly retryIntervalInMinutes?: number;
}
export class ChannelTargetInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChannelTargetInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactChannelId = this._contactChannelId;
    }
    if (this._retryIntervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalInMinutes = this._retryIntervalInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelTargetInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactChannelId = undefined;
      this._retryIntervalInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactChannelId = value.contactChannelId;
      this._retryIntervalInMinutes = value.retryIntervalInMinutes;
    }
  }

  // contact_channel_id - computed: false, optional: false, required: true
  private _contactChannelId?: string; 
  public get contactChannelId() {
    return this.getStringAttribute('contact_channel_id');
  }
  public set contactChannelId(value: string) {
    this._contactChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactChannelIdInput() {
    return this._contactChannelId;
  }

  // retry_interval_in_minutes - computed: false, optional: true, required: false
  private _retryIntervalInMinutes?: number; 
  public get retryIntervalInMinutes() {
    return this.getNumberAttribute('retry_interval_in_minutes');
  }
  public set retryIntervalInMinutes(value: number) {
    this._retryIntervalInMinutes = value;
  }
  public resetRetryIntervalInMinutes() {
    this._retryIntervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInMinutesInput() {
    return this._retryIntervalInMinutes;
  }
}
export interface ContactTargetInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#contact_id AwsSsmcontactsPlan#contact_id}
  */
  readonly contactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#is_essential AwsSsmcontactsPlan#is_essential}
  */
  readonly isEssential: boolean | cdktn.IResolvable;
}
export class ContactTargetInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactTargetInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactId = this._contactId;
    }
    if (this._isEssential !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEssential = this._isEssential;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactTargetInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactId = undefined;
      this._isEssential = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactId = value.contactId;
      this._isEssential = value.isEssential;
    }
  }

  // contact_id - computed: false, optional: true, required: false
  private _contactId?: string; 
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // is_essential - computed: false, optional: false, required: true
  private _isEssential?: boolean | cdktn.IResolvable; 
  public get isEssential() {
    return this.getBooleanAttribute('is_essential');
  }
  public set isEssential(value: boolean | cdktn.IResolvable) {
    this._isEssential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEssentialInput() {
    return this._isEssential;
  }
}
export interface TargetProperty {
  /**
  * channel_target_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#channel_target_info AwsSsmcontactsPlan#channel_target_info}
  */
  readonly channelTargetInfo?: ChannelTargetInfoProperty;
  /**
  * contact_target_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#contact_target_info AwsSsmcontactsPlan#contact_target_info}
  */
  readonly contactTargetInfo?: ContactTargetInfoProperty;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelTargetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTargetInfo = this._channelTargetInfo?.internalValue;
    }
    if (this._contactTargetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactTargetInfo = this._contactTargetInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelTargetInfo.internalValue = undefined;
      this._contactTargetInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelTargetInfo.internalValue = value.channelTargetInfo;
      this._contactTargetInfo.internalValue = value.contactTargetInfo;
    }
  }

  // channel_target_info - computed: false, optional: true, required: false
  private _channelTargetInfo = new ChannelTargetInfoPropertyOutputReference(this, "channel_target_info");
  public get channelTargetInfo() {
    return this._channelTargetInfo;
  }
  public putChannelTargetInfo(value: ChannelTargetInfoProperty) {
    this._channelTargetInfo.internalValue = value;
  }
  public resetChannelTargetInfo() {
    this._channelTargetInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTargetInfoInput() {
    return this._channelTargetInfo.internalValue;
  }

  // contact_target_info - computed: false, optional: true, required: false
  private _contactTargetInfo = new ContactTargetInfoPropertyOutputReference(this, "contact_target_info");
  public get contactTargetInfo() {
    return this._contactTargetInfo;
  }
  public putContactTargetInfo(value: ContactTargetInfoProperty) {
    this._contactTargetInfo.internalValue = value;
  }
  public resetContactTargetInfo() {
    this._contactTargetInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTargetInfoInput() {
    return this._contactTargetInfo.internalValue;
  }
}

export class TargetPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetPropertyOutputReference {
    return new TargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#duration_in_minutes AwsSsmcontactsPlan#duration_in_minutes}
  */
  readonly durationInMinutes: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_plan#target AwsSsmcontactsPlan#target}
  */
  readonly target?: TargetProperty[] | cdktn.IResolvable;
}
export class StagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInMinutes = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInMinutes = value.durationInMinutes;
      this._target.internalValue = value.target;
    }
  }

  // duration_in_minutes - computed: false, optional: false, required: true
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // target - computed: false, optional: true, required: false
  private _target = new TargetPropertyList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: TargetProperty[] | cdktn.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class StagePropertyList extends cdktn.ComplexList {
  public internalValue? : StageProperty[] | cdktn.IResolvable

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
  public get(index: number): StagePropertyOutputReference {
    return new StagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
