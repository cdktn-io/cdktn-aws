// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRotationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#contact_ids TfRotation#contact_ids}
  */
  readonly contactIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#name TfRotation#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#region TfRotation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#start_time TfRotation#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#tags TfRotation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#time_zone_id TfRotation#time_zone_id}
  */
  readonly timeZoneId: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#recurrence TfRotation#recurrence}
  */
  readonly recurrence?: TfRotation.RecurrenceProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}
*/
export class TfRotation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmcontacts_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRotation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRotation to import
  * @param importFromId The id of the existing TfRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmcontacts_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRotationConfig
  */
  public constructor(scope: Construct, id: string, config: TfRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmcontacts_rotation',
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
    this._contactIds = config.contactIds;
    this._name = config.name;
    this._region = config.region;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeZoneId = config.timeZoneId;
    this._recurrence.internalValue = config.recurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_ids - computed: false, optional: false, required: true
  private _contactIds?: string[]; 
  public get contactIds() {
    return this.getListAttribute('contact_ids');
  }
  public set contactIds(value: string[]) {
    this._contactIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdsInput() {
    return this._contactIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // time_zone_id - computed: false, optional: false, required: true
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new TfRotation.RecurrencePropertyList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: TfRotation.RecurrenceProperty[] | cdktn.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._contactIds),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      start_time: cdktn.stringToTerraform(this._startTime),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      time_zone_id: cdktn.stringToTerraform(this._timeZoneId),
      recurrence: cdktn.listMapper(tfRotationRecurrencePropertyToTerraform, true)(this._recurrence.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._contactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      start_time: {
        value: cdktn.stringToHclTerraform(this._startTime),
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
      time_zone_id: {
        value: cdktn.stringToHclTerraform(this._timeZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence: {
        value: cdktn.listMapperHcl(tfRotationRecurrencePropertyToHclTerraform, true)(this._recurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRotation.RecurrencePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRotationDailySettingsPropertyToTerraform(struct?: TfRotation.DailySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour_of_day: cdktn.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktn.numberToTerraform(struct!.minuteOfHour),
  }
}


export function tfRotationDailySettingsPropertyToHclTerraform(struct?: TfRotation.DailySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour_of_day: {
      value: cdktn.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktn.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationRecurrenceMonthlySettingsHandOffTimePropertyToTerraform(struct?: TfRotation.RecurrenceMonthlySettingsHandOffTimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour_of_day: cdktn.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktn.numberToTerraform(struct!.minuteOfHour),
  }
}


export function tfRotationRecurrenceMonthlySettingsHandOffTimePropertyToHclTerraform(struct?: TfRotation.RecurrenceMonthlySettingsHandOffTimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour_of_day: {
      value: cdktn.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktn.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationMonthlySettingsPropertyToTerraform(struct?: TfRotation.MonthlySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_month: cdktn.numberToTerraform(struct!.dayOfMonth),
    hand_off_time: cdktn.listMapper(tfRotationRecurrenceMonthlySettingsHandOffTimePropertyToTerraform, true)(struct!.handOffTime),
  }
}


export function tfRotationMonthlySettingsPropertyToHclTerraform(struct?: TfRotation.MonthlySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_month: {
      value: cdktn.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hand_off_time: {
      value: cdktn.listMapperHcl(tfRotationRecurrenceMonthlySettingsHandOffTimePropertyToHclTerraform, true)(struct!.handOffTime),
      isBlock: true,
      type: "list",
      storageClassType: "RecurrenceMonthlySettingsHandOffTimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationEndPropertyToTerraform(struct?: TfRotation.EndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour_of_day: cdktn.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktn.numberToTerraform(struct!.minuteOfHour),
  }
}


export function tfRotationEndPropertyToHclTerraform(struct?: TfRotation.EndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour_of_day: {
      value: cdktn.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktn.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationStartPropertyToTerraform(struct?: TfRotation.StartProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour_of_day: cdktn.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktn.numberToTerraform(struct!.minuteOfHour),
  }
}


export function tfRotationStartPropertyToHclTerraform(struct?: TfRotation.StartProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour_of_day: {
      value: cdktn.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktn.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationCoverageTimesPropertyToTerraform(struct?: TfRotation.CoverageTimesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.listMapper(tfRotationEndPropertyToTerraform, true)(struct!.end),
    start: cdktn.listMapper(tfRotationStartPropertyToTerraform, true)(struct!.start),
  }
}


export function tfRotationCoverageTimesPropertyToHclTerraform(struct?: TfRotation.CoverageTimesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.listMapperHcl(tfRotationEndPropertyToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "list",
      storageClassType: "EndPropertyList",
    },
    start: {
      value: cdktn.listMapperHcl(tfRotationStartPropertyToHclTerraform, true)(struct!.start),
      isBlock: true,
      type: "list",
      storageClassType: "StartPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationShiftCoveragesPropertyToTerraform(struct?: TfRotation.ShiftCoveragesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    coverage_times: cdktn.listMapper(tfRotationCoverageTimesPropertyToTerraform, true)(struct!.coverageTimes),
  }
}


export function tfRotationShiftCoveragesPropertyToHclTerraform(struct?: TfRotation.ShiftCoveragesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coverage_times: {
      value: cdktn.listMapperHcl(tfRotationCoverageTimesPropertyToHclTerraform, true)(struct!.coverageTimes),
      isBlock: true,
      type: "list",
      storageClassType: "CoverageTimesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationRecurrenceWeeklySettingsHandOffTimePropertyToTerraform(struct?: TfRotation.RecurrenceWeeklySettingsHandOffTimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour_of_day: cdktn.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktn.numberToTerraform(struct!.minuteOfHour),
  }
}


export function tfRotationRecurrenceWeeklySettingsHandOffTimePropertyToHclTerraform(struct?: TfRotation.RecurrenceWeeklySettingsHandOffTimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour_of_day: {
      value: cdktn.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktn.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationWeeklySettingsPropertyToTerraform(struct?: TfRotation.WeeklySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    hand_off_time: cdktn.listMapper(tfRotationRecurrenceWeeklySettingsHandOffTimePropertyToTerraform, true)(struct!.handOffTime),
  }
}


export function tfRotationWeeklySettingsPropertyToHclTerraform(struct?: TfRotation.WeeklySettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hand_off_time: {
      value: cdktn.listMapperHcl(tfRotationRecurrenceWeeklySettingsHandOffTimePropertyToHclTerraform, true)(struct!.handOffTime),
      isBlock: true,
      type: "list",
      storageClassType: "RecurrenceWeeklySettingsHandOffTimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRotationRecurrencePropertyToTerraform(struct?: TfRotation.RecurrenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_on_calls: cdktn.numberToTerraform(struct!.numberOfOnCalls),
    recurrence_multiplier: cdktn.numberToTerraform(struct!.recurrenceMultiplier),
    daily_settings: cdktn.listMapper(tfRotationDailySettingsPropertyToTerraform, true)(struct!.dailySettings),
    monthly_settings: cdktn.listMapper(tfRotationMonthlySettingsPropertyToTerraform, true)(struct!.monthlySettings),
    shift_coverages: cdktn.listMapper(tfRotationShiftCoveragesPropertyToTerraform, true)(struct!.shiftCoverages),
    weekly_settings: cdktn.listMapper(tfRotationWeeklySettingsPropertyToTerraform, true)(struct!.weeklySettings),
  }
}


export function tfRotationRecurrencePropertyToHclTerraform(struct?: TfRotation.RecurrenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_on_calls: {
      value: cdktn.numberToHclTerraform(struct!.numberOfOnCalls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_multiplier: {
      value: cdktn.numberToHclTerraform(struct!.recurrenceMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daily_settings: {
      value: cdktn.listMapperHcl(tfRotationDailySettingsPropertyToHclTerraform, true)(struct!.dailySettings),
      isBlock: true,
      type: "list",
      storageClassType: "DailySettingsPropertyList",
    },
    monthly_settings: {
      value: cdktn.listMapperHcl(tfRotationMonthlySettingsPropertyToHclTerraform, true)(struct!.monthlySettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonthlySettingsPropertyList",
    },
    shift_coverages: {
      value: cdktn.listMapperHcl(tfRotationShiftCoveragesPropertyToHclTerraform, true)(struct!.shiftCoverages),
      isBlock: true,
      type: "list",
      storageClassType: "ShiftCoveragesPropertyList",
    },
    weekly_settings: {
      value: cdktn.listMapperHcl(tfRotationWeeklySettingsPropertyToHclTerraform, true)(struct!.weeklySettings),
      isBlock: true,
      type: "list",
      storageClassType: "WeeklySettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfRotation {
export interface DailySettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hour_of_day TfRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#minute_of_hour TfRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}
export class DailySettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DailySettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DailySettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class DailySettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : DailySettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): DailySettingsPropertyOutputReference {
    return new DailySettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecurrenceMonthlySettingsHandOffTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hour_of_day TfRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#minute_of_hour TfRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}
export class RecurrenceMonthlySettingsHandOffTimePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecurrenceMonthlySettingsHandOffTimeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecurrenceMonthlySettingsHandOffTimeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class RecurrenceMonthlySettingsHandOffTimePropertyList extends cdktn.ComplexList {
  public internalValue? : RecurrenceMonthlySettingsHandOffTimeProperty[] | cdktn.IResolvable

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
  public get(index: number): RecurrenceMonthlySettingsHandOffTimePropertyOutputReference {
    return new RecurrenceMonthlySettingsHandOffTimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonthlySettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#day_of_month TfRotation#day_of_month}
  */
  readonly dayOfMonth: number;
  /**
  * hand_off_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hand_off_time TfRotation#hand_off_time}
  */
  readonly handOffTime?: RecurrenceMonthlySettingsHandOffTimeProperty[] | cdktn.IResolvable;
}
export class MonthlySettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonthlySettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._handOffTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handOffTime = this._handOffTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonthlySettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._handOffTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._handOffTime.internalValue = value.handOffTime;
    }
  }

  // day_of_month - computed: false, optional: false, required: true
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // hand_off_time - computed: false, optional: true, required: false
  private _handOffTime = new RecurrenceMonthlySettingsHandOffTimePropertyList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
  public putHandOffTime(value: RecurrenceMonthlySettingsHandOffTimeProperty[] | cdktn.IResolvable) {
    this._handOffTime.internalValue = value;
  }
  public resetHandOffTime() {
    this._handOffTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handOffTimeInput() {
    return this._handOffTime.internalValue;
  }
}

export class MonthlySettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : MonthlySettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): MonthlySettingsPropertyOutputReference {
    return new MonthlySettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hour_of_day TfRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#minute_of_hour TfRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}
export class EndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class EndPropertyList extends cdktn.ComplexList {
  public internalValue? : EndProperty[] | cdktn.IResolvable

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
  public get(index: number): EndPropertyOutputReference {
    return new EndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StartProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hour_of_day TfRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#minute_of_hour TfRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}
export class StartPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StartProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StartProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class StartPropertyList extends cdktn.ComplexList {
  public internalValue? : StartProperty[] | cdktn.IResolvable

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
  public get(index: number): StartPropertyOutputReference {
    return new StartPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoverageTimesProperty {
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#end TfRotation#end}
  */
  readonly end?: EndProperty[] | cdktn.IResolvable;
  /**
  * start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#start TfRotation#start}
  */
  readonly start?: StartProperty[] | cdktn.IResolvable;
}
export class CoverageTimesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoverageTimesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoverageTimesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new EndPropertyList(this, "end", false);
  public get end() {
    return this._end;
  }
  public putEnd(value: EndProperty[] | cdktn.IResolvable) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new StartPropertyList(this, "start", false);
  public get start() {
    return this._start;
  }
  public putStart(value: StartProperty[] | cdktn.IResolvable) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}

export class CoverageTimesPropertyList extends cdktn.ComplexList {
  public internalValue? : CoverageTimesProperty[] | cdktn.IResolvable

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
  public get(index: number): CoverageTimesPropertyOutputReference {
    return new CoverageTimesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShiftCoveragesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#map_block_key TfRotation#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * coverage_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#coverage_times TfRotation#coverage_times}
  */
  readonly coverageTimes?: CoverageTimesProperty[] | cdktn.IResolvable;
}
export class ShiftCoveragesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ShiftCoveragesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._coverageTimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverageTimes = this._coverageTimes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShiftCoveragesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._coverageTimes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._coverageTimes.internalValue = value.coverageTimes;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // coverage_times - computed: false, optional: true, required: false
  private _coverageTimes = new CoverageTimesPropertyList(this, "coverage_times", false);
  public get coverageTimes() {
    return this._coverageTimes;
  }
  public putCoverageTimes(value: CoverageTimesProperty[] | cdktn.IResolvable) {
    this._coverageTimes.internalValue = value;
  }
  public resetCoverageTimes() {
    this._coverageTimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageTimesInput() {
    return this._coverageTimes.internalValue;
  }
}

export class ShiftCoveragesPropertyList extends cdktn.ComplexList {
  public internalValue? : ShiftCoveragesProperty[] | cdktn.IResolvable

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
  public get(index: number): ShiftCoveragesPropertyOutputReference {
    return new ShiftCoveragesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecurrenceWeeklySettingsHandOffTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hour_of_day TfRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#minute_of_hour TfRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}
export class RecurrenceWeeklySettingsHandOffTimePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecurrenceWeeklySettingsHandOffTimeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecurrenceWeeklySettingsHandOffTimeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class RecurrenceWeeklySettingsHandOffTimePropertyList extends cdktn.ComplexList {
  public internalValue? : RecurrenceWeeklySettingsHandOffTimeProperty[] | cdktn.IResolvable

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
  public get(index: number): RecurrenceWeeklySettingsHandOffTimePropertyOutputReference {
    return new RecurrenceWeeklySettingsHandOffTimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WeeklySettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#day_of_week TfRotation#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * hand_off_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#hand_off_time TfRotation#hand_off_time}
  */
  readonly handOffTime?: RecurrenceWeeklySettingsHandOffTimeProperty[] | cdktn.IResolvable;
}
export class WeeklySettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WeeklySettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._handOffTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handOffTime = this._handOffTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WeeklySettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._handOffTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._handOffTime.internalValue = value.handOffTime;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hand_off_time - computed: false, optional: true, required: false
  private _handOffTime = new RecurrenceWeeklySettingsHandOffTimePropertyList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
  public putHandOffTime(value: RecurrenceWeeklySettingsHandOffTimeProperty[] | cdktn.IResolvable) {
    this._handOffTime.internalValue = value;
  }
  public resetHandOffTime() {
    this._handOffTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handOffTimeInput() {
    return this._handOffTime.internalValue;
  }
}

export class WeeklySettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : WeeklySettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): WeeklySettingsPropertyOutputReference {
    return new WeeklySettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecurrenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#number_of_on_calls TfRotation#number_of_on_calls}
  */
  readonly numberOfOnCalls: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier TfRotation#recurrence_multiplier}
  */
  readonly recurrenceMultiplier: number;
  /**
  * daily_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#daily_settings TfRotation#daily_settings}
  */
  readonly dailySettings?: DailySettingsProperty[] | cdktn.IResolvable;
  /**
  * monthly_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#monthly_settings TfRotation#monthly_settings}
  */
  readonly monthlySettings?: MonthlySettingsProperty[] | cdktn.IResolvable;
  /**
  * shift_coverages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#shift_coverages TfRotation#shift_coverages}
  */
  readonly shiftCoverages?: ShiftCoveragesProperty[] | cdktn.IResolvable;
  /**
  * weekly_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmcontacts_rotation#weekly_settings TfRotation#weekly_settings}
  */
  readonly weeklySettings?: WeeklySettingsProperty[] | cdktn.IResolvable;
}
export class RecurrencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecurrenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfOnCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfOnCalls = this._numberOfOnCalls;
    }
    if (this._recurrenceMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceMultiplier = this._recurrenceMultiplier;
    }
    if (this._dailySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySettings = this._dailySettings?.internalValue;
    }
    if (this._monthlySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySettings = this._monthlySettings?.internalValue;
    }
    if (this._shiftCoverages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftCoverages = this._shiftCoverages?.internalValue;
    }
    if (this._weeklySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySettings = this._weeklySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecurrenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfOnCalls = undefined;
      this._recurrenceMultiplier = undefined;
      this._dailySettings.internalValue = undefined;
      this._monthlySettings.internalValue = undefined;
      this._shiftCoverages.internalValue = undefined;
      this._weeklySettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfOnCalls = value.numberOfOnCalls;
      this._recurrenceMultiplier = value.recurrenceMultiplier;
      this._dailySettings.internalValue = value.dailySettings;
      this._monthlySettings.internalValue = value.monthlySettings;
      this._shiftCoverages.internalValue = value.shiftCoverages;
      this._weeklySettings.internalValue = value.weeklySettings;
    }
  }

  // number_of_on_calls - computed: false, optional: false, required: true
  private _numberOfOnCalls?: number; 
  public get numberOfOnCalls() {
    return this.getNumberAttribute('number_of_on_calls');
  }
  public set numberOfOnCalls(value: number) {
    this._numberOfOnCalls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfOnCallsInput() {
    return this._numberOfOnCalls;
  }

  // recurrence_multiplier - computed: false, optional: false, required: true
  private _recurrenceMultiplier?: number; 
  public get recurrenceMultiplier() {
    return this.getNumberAttribute('recurrence_multiplier');
  }
  public set recurrenceMultiplier(value: number) {
    this._recurrenceMultiplier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceMultiplierInput() {
    return this._recurrenceMultiplier;
  }

  // daily_settings - computed: false, optional: true, required: false
  private _dailySettings = new DailySettingsPropertyList(this, "daily_settings", false);
  public get dailySettings() {
    return this._dailySettings;
  }
  public putDailySettings(value: DailySettingsProperty[] | cdktn.IResolvable) {
    this._dailySettings.internalValue = value;
  }
  public resetDailySettings() {
    this._dailySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySettingsInput() {
    return this._dailySettings.internalValue;
  }

  // monthly_settings - computed: false, optional: true, required: false
  private _monthlySettings = new MonthlySettingsPropertyList(this, "monthly_settings", false);
  public get monthlySettings() {
    return this._monthlySettings;
  }
  public putMonthlySettings(value: MonthlySettingsProperty[] | cdktn.IResolvable) {
    this._monthlySettings.internalValue = value;
  }
  public resetMonthlySettings() {
    this._monthlySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlySettingsInput() {
    return this._monthlySettings.internalValue;
  }

  // shift_coverages - computed: false, optional: true, required: false
  private _shiftCoverages = new ShiftCoveragesPropertyList(this, "shift_coverages", false);
  public get shiftCoverages() {
    return this._shiftCoverages;
  }
  public putShiftCoverages(value: ShiftCoveragesProperty[] | cdktn.IResolvable) {
    this._shiftCoverages.internalValue = value;
  }
  public resetShiftCoverages() {
    this._shiftCoverages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftCoveragesInput() {
    return this._shiftCoverages.internalValue;
  }

  // weekly_settings - computed: false, optional: true, required: false
  private _weeklySettings = new WeeklySettingsPropertyList(this, "weekly_settings", false);
  public get weeklySettings() {
    return this._weeklySettings;
  }
  public putWeeklySettings(value: WeeklySettingsProperty[] | cdktn.IResolvable) {
    this._weeklySettings.internalValue = value;
  }
  public resetWeeklySettings() {
    this._weeklySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklySettingsInput() {
    return this._weeklySettings.internalValue;
  }
}

export class RecurrencePropertyList extends cdktn.ComplexList {
  public internalValue? : RecurrenceProperty[] | cdktn.IResolvable

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
  public get(index: number): RecurrencePropertyOutputReference {
    return new RecurrencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
