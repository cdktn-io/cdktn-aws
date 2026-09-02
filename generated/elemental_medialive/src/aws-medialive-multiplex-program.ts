// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfMultiplexProgramConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#multiplex_id TfMultiplexProgram#multiplex_id}
  */
  readonly multiplexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#program_name TfMultiplexProgram#program_name}
  */
  readonly programName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#region TfMultiplexProgram#region}
  */
  readonly region?: string;
  /**
  * multiplex_program_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#multiplex_program_settings TfMultiplexProgram#multiplex_program_settings}
  */
  readonly multiplexProgramSettings?: TfMultiplexProgram.MultiplexProgramSettingsProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#timeouts TfMultiplexProgram#timeouts}
  */
  readonly timeouts?: TfMultiplexProgram.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program}
*/
export class TfMultiplexProgram extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_multiplex_program";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfMultiplexProgram resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfMultiplexProgram to import
  * @param importFromId The id of the existing TfMultiplexProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfMultiplexProgram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_medialive_multiplex_program", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfMultiplexProgramConfig
  */
  public constructor(scope: Construct, id: string, config: TfMultiplexProgramConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_multiplex_program',
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
    this._multiplexId = config.multiplexId;
    this._programName = config.programName;
    this._region = config.region;
    this._multiplexProgramSettings.internalValue = config.multiplexProgramSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplex_id - computed: false, optional: false, required: true
  private _multiplexId?: string; 
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }
  public set multiplexId(value: string) {
    this._multiplexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexIdInput() {
    return this._multiplexId;
  }

  // program_name - computed: false, optional: false, required: true
  private _programName?: string; 
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
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

  // multiplex_program_settings - computed: false, optional: true, required: false
  private _multiplexProgramSettings = new TfMultiplexProgram.MultiplexProgramSettingsPropertyList(this, "multiplex_program_settings", false);
  public get multiplexProgramSettings() {
    return this._multiplexProgramSettings;
  }
  public putMultiplexProgramSettings(value: TfMultiplexProgram.MultiplexProgramSettingsProperty[] | cdktn.IResolvable) {
    this._multiplexProgramSettings.internalValue = value;
  }
  public resetMultiplexProgramSettings() {
    this._multiplexProgramSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexProgramSettingsInput() {
    return this._multiplexProgramSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfMultiplexProgram.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfMultiplexProgram.TimeoutsProperty) {
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
      multiplex_id: cdktn.stringToTerraform(this._multiplexId),
      program_name: cdktn.stringToTerraform(this._programName),
      region: cdktn.stringToTerraform(this._region),
      multiplex_program_settings: cdktn.listMapper(tfMultiplexProgramMultiplexProgramSettingsPropertyToTerraform, true)(this._multiplexProgramSettings.internalValue),
      timeouts: tfMultiplexProgramTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      multiplex_id: {
        value: cdktn.stringToHclTerraform(this._multiplexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_name: {
        value: cdktn.stringToHclTerraform(this._programName),
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
      multiplex_program_settings: {
        value: cdktn.listMapperHcl(tfMultiplexProgramMultiplexProgramSettingsPropertyToHclTerraform, true)(this._multiplexProgramSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfMultiplexProgram.MultiplexProgramSettingsPropertyList",
      },
      timeouts: {
        value: tfMultiplexProgramTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfMultiplexProgram.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfMultiplexProgramServiceDescriptorPropertyToTerraform(struct?: TfMultiplexProgram.ServiceDescriptorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider_name: cdktn.stringToTerraform(struct!.providerName),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function tfMultiplexProgramServiceDescriptorPropertyToHclTerraform(struct?: TfMultiplexProgram.ServiceDescriptorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provider_name: {
      value: cdktn.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfMultiplexProgramStatmuxSettingsPropertyToTerraform(struct?: TfMultiplexProgram.StatmuxSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_bitrate: cdktn.numberToTerraform(struct!.maximumBitrate),
    minimum_bitrate: cdktn.numberToTerraform(struct!.minimumBitrate),
    priority: cdktn.numberToTerraform(struct!.priority),
  }
}


export function tfMultiplexProgramStatmuxSettingsPropertyToHclTerraform(struct?: TfMultiplexProgram.StatmuxSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.maximumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.minimumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfMultiplexProgramVideoSettingsPropertyToTerraform(struct?: TfMultiplexProgram.VideoSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_bitrate: cdktn.numberToTerraform(struct!.constantBitrate),
    statmux_settings: cdktn.listMapper(tfMultiplexProgramStatmuxSettingsPropertyToTerraform, true)(struct!.statmuxSettings),
  }
}


export function tfMultiplexProgramVideoSettingsPropertyToHclTerraform(struct?: TfMultiplexProgram.VideoSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.constantBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statmux_settings: {
      value: cdktn.listMapperHcl(tfMultiplexProgramStatmuxSettingsPropertyToHclTerraform, true)(struct!.statmuxSettings),
      isBlock: true,
      type: "list",
      storageClassType: "StatmuxSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfMultiplexProgramMultiplexProgramSettingsPropertyToTerraform(struct?: TfMultiplexProgram.MultiplexProgramSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preferred_channel_pipeline: cdktn.stringToTerraform(struct!.preferredChannelPipeline),
    program_number: cdktn.numberToTerraform(struct!.programNumber),
    service_descriptor: cdktn.listMapper(tfMultiplexProgramServiceDescriptorPropertyToTerraform, true)(struct!.serviceDescriptor),
    video_settings: cdktn.listMapper(tfMultiplexProgramVideoSettingsPropertyToTerraform, true)(struct!.videoSettings),
  }
}


export function tfMultiplexProgramMultiplexProgramSettingsPropertyToHclTerraform(struct?: TfMultiplexProgram.MultiplexProgramSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preferred_channel_pipeline: {
      value: cdktn.stringToHclTerraform(struct!.preferredChannelPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_number: {
      value: cdktn.numberToHclTerraform(struct!.programNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_descriptor: {
      value: cdktn.listMapperHcl(tfMultiplexProgramServiceDescriptorPropertyToHclTerraform, true)(struct!.serviceDescriptor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDescriptorPropertyList",
    },
    video_settings: {
      value: cdktn.listMapperHcl(tfMultiplexProgramVideoSettingsPropertyToHclTerraform, true)(struct!.videoSettings),
      isBlock: true,
      type: "list",
      storageClassType: "VideoSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfMultiplexProgramTimeoutsPropertyToTerraform(struct?: TfMultiplexProgram.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function tfMultiplexProgramTimeoutsPropertyToHclTerraform(struct?: TfMultiplexProgram.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfMultiplexProgram {
export interface ServiceDescriptorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#provider_name TfMultiplexProgram#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#service_name TfMultiplexProgram#service_name}
  */
  readonly serviceName: string;
}
export class ServiceDescriptorPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceDescriptorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDescriptorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerName = value.providerName;
      this._serviceName = value.serviceName;
    }
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class ServiceDescriptorPropertyList extends cdktn.ComplexList {
  public internalValue? : ServiceDescriptorProperty[] | cdktn.IResolvable

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
  public get(index: number): ServiceDescriptorPropertyOutputReference {
    return new ServiceDescriptorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatmuxSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#maximum_bitrate TfMultiplexProgram#maximum_bitrate}
  */
  readonly maximumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#minimum_bitrate TfMultiplexProgram#minimum_bitrate}
  */
  readonly minimumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#priority TfMultiplexProgram#priority}
  */
  readonly priority?: number;
}
export class StatmuxSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatmuxSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    if (this._minimumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBitrate = this._minimumBitrate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatmuxSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBitrate = undefined;
      this._minimumBitrate = undefined;
      this._priority = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBitrate = value.maximumBitrate;
      this._minimumBitrate = value.minimumBitrate;
      this._priority = value.priority;
    }
  }

  // maximum_bitrate - computed: true, optional: true, required: false
  private _maximumBitrate?: number; 
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  public resetMaximumBitrate() {
    this._maximumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // minimum_bitrate - computed: true, optional: true, required: false
  private _minimumBitrate?: number; 
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }
  public set minimumBitrate(value: number) {
    this._minimumBitrate = value;
  }
  public resetMinimumBitrate() {
    this._minimumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBitrateInput() {
    return this._minimumBitrate;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class StatmuxSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : StatmuxSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): StatmuxSettingsPropertyOutputReference {
    return new StatmuxSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VideoSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#constant_bitrate TfMultiplexProgram#constant_bitrate}
  */
  readonly constantBitrate?: number;
  /**
  * statmux_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#statmux_settings TfMultiplexProgram#statmux_settings}
  */
  readonly statmuxSettings?: StatmuxSettingsProperty[] | cdktn.IResolvable;
}
export class VideoSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VideoSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantBitrate = this._constantBitrate;
    }
    if (this._statmuxSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statmuxSettings = this._statmuxSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VideoSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantBitrate = undefined;
      this._statmuxSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantBitrate = value.constantBitrate;
      this._statmuxSettings.internalValue = value.statmuxSettings;
    }
  }

  // constant_bitrate - computed: true, optional: true, required: false
  private _constantBitrate?: number; 
  public get constantBitrate() {
    return this.getNumberAttribute('constant_bitrate');
  }
  public set constantBitrate(value: number) {
    this._constantBitrate = value;
  }
  public resetConstantBitrate() {
    this._constantBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantBitrateInput() {
    return this._constantBitrate;
  }

  // statmux_settings - computed: false, optional: true, required: false
  private _statmuxSettings = new StatmuxSettingsPropertyList(this, "statmux_settings", false);
  public get statmuxSettings() {
    return this._statmuxSettings;
  }
  public putStatmuxSettings(value: StatmuxSettingsProperty[] | cdktn.IResolvable) {
    this._statmuxSettings.internalValue = value;
  }
  public resetStatmuxSettings() {
    this._statmuxSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statmuxSettingsInput() {
    return this._statmuxSettings.internalValue;
  }
}

export class VideoSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : VideoSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): VideoSettingsPropertyOutputReference {
    return new VideoSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MultiplexProgramSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#preferred_channel_pipeline TfMultiplexProgram#preferred_channel_pipeline}
  */
  readonly preferredChannelPipeline: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#program_number TfMultiplexProgram#program_number}
  */
  readonly programNumber: number;
  /**
  * service_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#service_descriptor TfMultiplexProgram#service_descriptor}
  */
  readonly serviceDescriptor?: ServiceDescriptorProperty[] | cdktn.IResolvable;
  /**
  * video_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#video_settings TfMultiplexProgram#video_settings}
  */
  readonly videoSettings?: VideoSettingsProperty[] | cdktn.IResolvable;
}
export class MultiplexProgramSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MultiplexProgramSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredChannelPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredChannelPipeline = this._preferredChannelPipeline;
    }
    if (this._programNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNumber = this._programNumber;
    }
    if (this._serviceDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescriptor = this._serviceDescriptor?.internalValue;
    }
    if (this._videoSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoSettings = this._videoSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultiplexProgramSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = undefined;
      this._programNumber = undefined;
      this._serviceDescriptor.internalValue = undefined;
      this._videoSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = value.preferredChannelPipeline;
      this._programNumber = value.programNumber;
      this._serviceDescriptor.internalValue = value.serviceDescriptor;
      this._videoSettings.internalValue = value.videoSettings;
    }
  }

  // preferred_channel_pipeline - computed: false, optional: false, required: true
  private _preferredChannelPipeline?: string; 
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }
  public set preferredChannelPipeline(value: string) {
    this._preferredChannelPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChannelPipelineInput() {
    return this._preferredChannelPipeline;
  }

  // program_number - computed: false, optional: false, required: true
  private _programNumber?: number; 
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }
  public set programNumber(value: number) {
    this._programNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumberInput() {
    return this._programNumber;
  }

  // service_descriptor - computed: false, optional: true, required: false
  private _serviceDescriptor = new ServiceDescriptorPropertyList(this, "service_descriptor", false);
  public get serviceDescriptor() {
    return this._serviceDescriptor;
  }
  public putServiceDescriptor(value: ServiceDescriptorProperty[] | cdktn.IResolvable) {
    this._serviceDescriptor.internalValue = value;
  }
  public resetServiceDescriptor() {
    this._serviceDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptorInput() {
    return this._serviceDescriptor.internalValue;
  }

  // video_settings - computed: false, optional: true, required: false
  private _videoSettings = new VideoSettingsPropertyList(this, "video_settings", false);
  public get videoSettings() {
    return this._videoSettings;
  }
  public putVideoSettings(value: VideoSettingsProperty[] | cdktn.IResolvable) {
    this._videoSettings.internalValue = value;
  }
  public resetVideoSettings() {
    this._videoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsInput() {
    return this._videoSettings.internalValue;
  }
}

export class MultiplexProgramSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : MultiplexProgramSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): MultiplexProgramSettingsPropertyOutputReference {
    return new MultiplexProgramSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/medialive_multiplex_program#create TfMultiplexProgram#create}
  */
  readonly create?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
}
