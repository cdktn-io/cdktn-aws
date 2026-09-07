// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsTrustAnchorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#enabled AwsTrustAnchor#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#id AwsTrustAnchor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#name AwsTrustAnchor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#tags AwsTrustAnchor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#tags_all AwsTrustAnchor#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#notification_settings AwsTrustAnchor#notification_settings}
  */
  readonly notificationSettings?: AwsTrustAnchor.NotificationSettingsProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#source AwsTrustAnchor#source}
  */
  readonly source: AwsTrustAnchor.SourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor}
*/
export class AwsTrustAnchor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rolesanywhere_trust_anchor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsTrustAnchor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTrustAnchor to import
  * @param importFromId The id of the existing AwsTrustAnchor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTrustAnchor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rolesanywhere_trust_anchor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTrustAnchorConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTrustAnchorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rolesanywhere_trust_anchor',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new AwsTrustAnchor.NotificationSettingsPropertyList(this, "notification_settings", true);
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: AwsTrustAnchor.NotificationSettingsProperty[] | cdktn.IResolvable) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new AwsTrustAnchor.SourcePropertyOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AwsTrustAnchor.SourceProperty) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      notification_settings: cdktn.listMapper(awsTrustAnchorNotificationSettingsPropertyToTerraform, true)(this._notificationSettings.internalValue),
      source: awsTrustAnchorSourcePropertyToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      notification_settings: {
        value: cdktn.listMapperHcl(awsTrustAnchorNotificationSettingsPropertyToHclTerraform, true)(this._notificationSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTrustAnchor.NotificationSettingsPropertyList",
      },
      source: {
        value: awsTrustAnchorSourcePropertyToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrustAnchor.SourcePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsTrustAnchorNotificationSettingsPropertyToTerraform(struct?: AwsTrustAnchor.NotificationSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    event: cdktn.stringToTerraform(struct!.event),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function awsTrustAnchorNotificationSettingsPropertyToHclTerraform(struct?: AwsTrustAnchor.NotificationSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event: {
      value: cdktn.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrustAnchorSourceDataPropertyToTerraform(struct?: AwsTrustAnchor.SourceDataPropertyOutputReference | AwsTrustAnchor.SourceDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm_pca_arn: cdktn.stringToTerraform(struct!.acmPcaArn),
    x509_certificate_data: cdktn.stringToTerraform(struct!.x509CertificateData),
  }
}


export function awsTrustAnchorSourceDataPropertyToHclTerraform(struct?: AwsTrustAnchor.SourceDataPropertyOutputReference | AwsTrustAnchor.SourceDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm_pca_arn: {
      value: cdktn.stringToHclTerraform(struct!.acmPcaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x509_certificate_data: {
      value: cdktn.stringToHclTerraform(struct!.x509CertificateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrustAnchorSourcePropertyToTerraform(struct?: AwsTrustAnchor.SourcePropertyOutputReference | AwsTrustAnchor.SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    source_data: awsTrustAnchorSourceDataPropertyToTerraform(struct!.sourceData),
  }
}


export function awsTrustAnchorSourcePropertyToHclTerraform(struct?: AwsTrustAnchor.SourcePropertyOutputReference | AwsTrustAnchor.SourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data: {
      value: awsTrustAnchorSourceDataPropertyToHclTerraform(struct!.sourceData),
      isBlock: true,
      type: "list",
      storageClassType: "SourceDataPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsTrustAnchor {
export interface NotificationSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#channel AwsTrustAnchor#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#enabled AwsTrustAnchor#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#event AwsTrustAnchor#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#threshold AwsTrustAnchor#threshold}
  */
  readonly threshold?: number;
}
export class NotificationSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NotificationSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._enabled = undefined;
      this._event = undefined;
      this._threshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._enabled = value.enabled;
      this._event = value.event;
      this._threshold = value.threshold;
    }
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // configured_by - computed: true, optional: false, required: false
  public get configuredBy() {
    return this.getStringAttribute('configured_by');
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

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class NotificationSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): NotificationSettingsPropertyOutputReference {
    return new NotificationSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn AwsTrustAnchor#acm_pca_arn}
  */
  readonly acmPcaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data AwsTrustAnchor#x509_certificate_data}
  */
  readonly x509CertificateData?: string;
}
export class SourceDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmPcaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmPcaArn = this._acmPcaArn;
    }
    if (this._x509CertificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509CertificateData = this._x509CertificateData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmPcaArn = undefined;
      this._x509CertificateData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmPcaArn = value.acmPcaArn;
      this._x509CertificateData = value.x509CertificateData;
    }
  }

  // acm_pca_arn - computed: false, optional: true, required: false
  private _acmPcaArn?: string; 
  public get acmPcaArn() {
    return this.getStringAttribute('acm_pca_arn');
  }
  public set acmPcaArn(value: string) {
    this._acmPcaArn = value;
  }
  public resetAcmPcaArn() {
    this._acmPcaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmPcaArnInput() {
    return this._acmPcaArn;
  }

  // x509_certificate_data - computed: false, optional: true, required: false
  private _x509CertificateData?: string; 
  public get x509CertificateData() {
    return this.getStringAttribute('x509_certificate_data');
  }
  public set x509CertificateData(value: string) {
    this._x509CertificateData = value;
  }
  public resetX509CertificateData() {
    this._x509CertificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificateDataInput() {
    return this._x509CertificateData;
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#source_type AwsTrustAnchor#source_type}
  */
  readonly sourceType: string;
  /**
  * source_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/rolesanywhere_trust_anchor#source_data AwsTrustAnchor#source_data}
  */
  readonly sourceData: SourceDataProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sourceData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceData = this._sourceData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceType = undefined;
      this._sourceData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceType = value.sourceType;
      this._sourceData.internalValue = value.sourceData;
    }
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_data - computed: false, optional: false, required: true
  private _sourceData = new SourceDataPropertyOutputReference(this, "source_data");
  public get sourceData() {
    return this._sourceData;
  }
  public putSourceData(value: SourceDataProperty) {
    this._sourceData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataInput() {
    return this._sourceData.internalValue;
  }
}
}
