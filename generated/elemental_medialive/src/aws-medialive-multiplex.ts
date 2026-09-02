// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfMultiplexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#availability_zones TfMultiplex#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#id TfMultiplex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#name TfMultiplex#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#region TfMultiplex#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#start_multiplex TfMultiplex#start_multiplex}
  */
  readonly startMultiplex?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#tags TfMultiplex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#tags_all TfMultiplex#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * multiplex_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#multiplex_settings TfMultiplex#multiplex_settings}
  */
  readonly multiplexSettings?: TfMultiplex.MultiplexSettingsProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#timeouts TfMultiplex#timeouts}
  */
  readonly timeouts?: TfMultiplex.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex aws_medialive_multiplex}
*/
export class TfMultiplex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_multiplex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfMultiplex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfMultiplex to import
  * @param importFromId The id of the existing TfMultiplex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfMultiplex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_medialive_multiplex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex aws_medialive_multiplex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfMultiplexConfig
  */
  public constructor(scope: Construct, id: string, config: TfMultiplexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_multiplex',
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
    this._availabilityZones = config.availabilityZones;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._startMultiplex = config.startMultiplex;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._multiplexSettings.internalValue = config.multiplexSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
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

  // start_multiplex - computed: false, optional: true, required: false
  private _startMultiplex?: boolean | cdktn.IResolvable; 
  public get startMultiplex() {
    return this.getBooleanAttribute('start_multiplex');
  }
  public set startMultiplex(value: boolean | cdktn.IResolvable) {
    this._startMultiplex = value;
  }
  public resetStartMultiplex() {
    this._startMultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMultiplexInput() {
    return this._startMultiplex;
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

  // multiplex_settings - computed: false, optional: true, required: false
  private _multiplexSettings = new TfMultiplex.MultiplexSettingsPropertyOutputReference(this, "multiplex_settings");
  public get multiplexSettings() {
    return this._multiplexSettings;
  }
  public putMultiplexSettings(value: TfMultiplex.MultiplexSettingsProperty) {
    this._multiplexSettings.internalValue = value;
  }
  public resetMultiplexSettings() {
    this._multiplexSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexSettingsInput() {
    return this._multiplexSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfMultiplex.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfMultiplex.TimeoutsProperty) {
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
      availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      start_multiplex: cdktn.booleanToTerraform(this._startMultiplex),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      multiplex_settings: tfMultiplexMultiplexSettingsPropertyToTerraform(this._multiplexSettings.internalValue),
      timeouts: tfMultiplexTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      start_multiplex: {
        value: cdktn.booleanToHclTerraform(this._startMultiplex),
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
      multiplex_settings: {
        value: tfMultiplexMultiplexSettingsPropertyToHclTerraform(this._multiplexSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfMultiplex.MultiplexSettingsPropertyList",
      },
      timeouts: {
        value: tfMultiplexTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfMultiplex.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfMultiplexMultiplexSettingsPropertyToTerraform(struct?: TfMultiplex.MultiplexSettingsPropertyOutputReference | TfMultiplex.MultiplexSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_video_buffer_delay_milliseconds: cdktn.numberToTerraform(struct!.maximumVideoBufferDelayMilliseconds),
    transport_stream_bitrate: cdktn.numberToTerraform(struct!.transportStreamBitrate),
    transport_stream_id: cdktn.numberToTerraform(struct!.transportStreamId),
    transport_stream_reserved_bitrate: cdktn.numberToTerraform(struct!.transportStreamReservedBitrate),
  }
}


export function tfMultiplexMultiplexSettingsPropertyToHclTerraform(struct?: TfMultiplex.MultiplexSettingsPropertyOutputReference | TfMultiplex.MultiplexSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_video_buffer_delay_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumVideoBufferDelayMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_id: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_reserved_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamReservedBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfMultiplexTimeoutsPropertyToTerraform(struct?: TfMultiplex.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfMultiplexTimeoutsPropertyToHclTerraform(struct?: TfMultiplex.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfMultiplex {
export interface MultiplexSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds TfMultiplex#maximum_video_buffer_delay_milliseconds}
  */
  readonly maximumVideoBufferDelayMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#transport_stream_bitrate TfMultiplex#transport_stream_bitrate}
  */
  readonly transportStreamBitrate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#transport_stream_id TfMultiplex#transport_stream_id}
  */
  readonly transportStreamId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate TfMultiplex#transport_stream_reserved_bitrate}
  */
  readonly transportStreamReservedBitrate?: number;
}
export class MultiplexSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MultiplexSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumVideoBufferDelayMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVideoBufferDelayMilliseconds = this._maximumVideoBufferDelayMilliseconds;
    }
    if (this._transportStreamBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamBitrate = this._transportStreamBitrate;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._transportStreamReservedBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamReservedBitrate = this._transportStreamReservedBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultiplexSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumVideoBufferDelayMilliseconds = undefined;
      this._transportStreamBitrate = undefined;
      this._transportStreamId = undefined;
      this._transportStreamReservedBitrate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumVideoBufferDelayMilliseconds = value.maximumVideoBufferDelayMilliseconds;
      this._transportStreamBitrate = value.transportStreamBitrate;
      this._transportStreamId = value.transportStreamId;
      this._transportStreamReservedBitrate = value.transportStreamReservedBitrate;
    }
  }

  // maximum_video_buffer_delay_milliseconds - computed: true, optional: true, required: false
  private _maximumVideoBufferDelayMilliseconds?: number; 
  public get maximumVideoBufferDelayMilliseconds() {
    return this.getNumberAttribute('maximum_video_buffer_delay_milliseconds');
  }
  public set maximumVideoBufferDelayMilliseconds(value: number) {
    this._maximumVideoBufferDelayMilliseconds = value;
  }
  public resetMaximumVideoBufferDelayMilliseconds() {
    this._maximumVideoBufferDelayMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVideoBufferDelayMillisecondsInput() {
    return this._maximumVideoBufferDelayMilliseconds;
  }

  // transport_stream_bitrate - computed: false, optional: false, required: true
  private _transportStreamBitrate?: number; 
  public get transportStreamBitrate() {
    return this.getNumberAttribute('transport_stream_bitrate');
  }
  public set transportStreamBitrate(value: number) {
    this._transportStreamBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamBitrateInput() {
    return this._transportStreamBitrate;
  }

  // transport_stream_id - computed: false, optional: false, required: true
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // transport_stream_reserved_bitrate - computed: true, optional: true, required: false
  private _transportStreamReservedBitrate?: number; 
  public get transportStreamReservedBitrate() {
    return this.getNumberAttribute('transport_stream_reserved_bitrate');
  }
  public set transportStreamReservedBitrate(value: number) {
    this._transportStreamReservedBitrate = value;
  }
  public resetTransportStreamReservedBitrate() {
    this._transportStreamReservedBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamReservedBitrateInput() {
    return this._transportStreamReservedBitrate;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#create TfMultiplex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#delete TfMultiplex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex#update TfMultiplex#update}
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
