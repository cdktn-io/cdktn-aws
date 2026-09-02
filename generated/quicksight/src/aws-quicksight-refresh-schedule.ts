// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRefreshScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#aws_account_id TfRefreshSchedule#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#data_set_id TfRefreshSchedule#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#region TfRefreshSchedule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#schedule_id TfRefreshSchedule#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#schedule TfRefreshSchedule#schedule}
  */
  readonly schedule?: TfRefreshSchedule.ScheduleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule}
*/
export class TfRefreshSchedule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_refresh_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRefreshSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRefreshSchedule to import
  * @param importFromId The id of the existing TfRefreshSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRefreshSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_refresh_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRefreshScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: TfRefreshScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_refresh_schedule',
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
    this._awsAccountId = config.awsAccountId;
    this._dataSetId = config.dataSetId;
    this._region = config.region;
    this._scheduleId = config.scheduleId;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

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

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new TfRefreshSchedule.SchedulePropertyList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: TfRefreshSchedule.ScheduleProperty[] | cdktn.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      data_set_id: cdktn.stringToTerraform(this._dataSetId),
      region: cdktn.stringToTerraform(this._region),
      schedule_id: cdktn.stringToTerraform(this._scheduleId),
      schedule: cdktn.listMapper(tfRefreshScheduleSchedulePropertyToTerraform, true)(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_set_id: {
        value: cdktn.stringToHclTerraform(this._dataSetId),
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
      schedule_id: {
        value: cdktn.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktn.listMapperHcl(tfRefreshScheduleSchedulePropertyToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRefreshSchedule.SchedulePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRefreshScheduleRefreshOnDayPropertyToTerraform(struct?: TfRefreshSchedule.RefreshOnDayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_month: cdktn.stringToTerraform(struct!.dayOfMonth),
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
  }
}


export function tfRefreshScheduleRefreshOnDayPropertyToHclTerraform(struct?: TfRefreshSchedule.RefreshOnDayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_month: {
      value: cdktn.stringToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRefreshScheduleScheduleFrequencyPropertyToTerraform(struct?: TfRefreshSchedule.ScheduleFrequencyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.stringToTerraform(struct!.interval),
    time_of_the_day: cdktn.stringToTerraform(struct!.timeOfTheDay),
    timezone: cdktn.stringToTerraform(struct!.timezone),
    refresh_on_day: cdktn.listMapper(tfRefreshScheduleRefreshOnDayPropertyToTerraform, true)(struct!.refreshOnDay),
  }
}


export function tfRefreshScheduleScheduleFrequencyPropertyToHclTerraform(struct?: TfRefreshSchedule.ScheduleFrequencyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_the_day: {
      value: cdktn.stringToHclTerraform(struct!.timeOfTheDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_on_day: {
      value: cdktn.listMapperHcl(tfRefreshScheduleRefreshOnDayPropertyToHclTerraform, true)(struct!.refreshOnDay),
      isBlock: true,
      type: "list",
      storageClassType: "RefreshOnDayPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRefreshScheduleSchedulePropertyToTerraform(struct?: TfRefreshSchedule.ScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    refresh_type: cdktn.stringToTerraform(struct!.refreshType),
    start_after_date_time: cdktn.stringToTerraform(struct!.startAfterDateTime),
    schedule_frequency: cdktn.listMapper(tfRefreshScheduleScheduleFrequencyPropertyToTerraform, true)(struct!.scheduleFrequency),
  }
}


export function tfRefreshScheduleSchedulePropertyToHclTerraform(struct?: TfRefreshSchedule.ScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    refresh_type: {
      value: cdktn.stringToHclTerraform(struct!.refreshType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_after_date_time: {
      value: cdktn.stringToHclTerraform(struct!.startAfterDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_frequency: {
      value: cdktn.listMapperHcl(tfRefreshScheduleScheduleFrequencyPropertyToHclTerraform, true)(struct!.scheduleFrequency),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleFrequencyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfRefreshSchedule {
export interface RefreshOnDayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#day_of_month TfRefreshSchedule#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#day_of_week TfRefreshSchedule#day_of_week}
  */
  readonly dayOfWeek?: string;
}
export class RefreshOnDayPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RefreshOnDayProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefreshOnDayProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}

export class RefreshOnDayPropertyList extends cdktn.ComplexList {
  public internalValue? : RefreshOnDayProperty[] | cdktn.IResolvable

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
  public get(index: number): RefreshOnDayPropertyOutputReference {
    return new RefreshOnDayPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleFrequencyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#interval TfRefreshSchedule#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#time_of_the_day TfRefreshSchedule#time_of_the_day}
  */
  readonly timeOfTheDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#timezone TfRefreshSchedule#timezone}
  */
  readonly timezone?: string;
  /**
  * refresh_on_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#refresh_on_day TfRefreshSchedule#refresh_on_day}
  */
  readonly refreshOnDay?: RefreshOnDayProperty[] | cdktn.IResolvable;
}
export class ScheduleFrequencyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScheduleFrequencyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeOfTheDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfTheDay = this._timeOfTheDay;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._refreshOnDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOnDay = this._refreshOnDay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleFrequencyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._timeOfTheDay = undefined;
      this._timezone = undefined;
      this._refreshOnDay.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._timeOfTheDay = value.timeOfTheDay;
      this._timezone = value.timezone;
      this._refreshOnDay.internalValue = value.refreshOnDay;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // time_of_the_day - computed: true, optional: true, required: false
  private _timeOfTheDay?: string; 
  public get timeOfTheDay() {
    return this.getStringAttribute('time_of_the_day');
  }
  public set timeOfTheDay(value: string) {
    this._timeOfTheDay = value;
  }
  public resetTimeOfTheDay() {
    this._timeOfTheDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfTheDayInput() {
    return this._timeOfTheDay;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // refresh_on_day - computed: false, optional: true, required: false
  private _refreshOnDay = new RefreshOnDayPropertyList(this, "refresh_on_day", false);
  public get refreshOnDay() {
    return this._refreshOnDay;
  }
  public putRefreshOnDay(value: RefreshOnDayProperty[] | cdktn.IResolvable) {
    this._refreshOnDay.internalValue = value;
  }
  public resetRefreshOnDay() {
    this._refreshOnDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnDayInput() {
    return this._refreshOnDay.internalValue;
  }
}

export class ScheduleFrequencyPropertyList extends cdktn.ComplexList {
  public internalValue? : ScheduleFrequencyProperty[] | cdktn.IResolvable

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
  public get(index: number): ScheduleFrequencyPropertyOutputReference {
    return new ScheduleFrequencyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#refresh_type TfRefreshSchedule#refresh_type}
  */
  readonly refreshType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#start_after_date_time TfRefreshSchedule#start_after_date_time}
  */
  readonly startAfterDateTime?: string;
  /**
  * schedule_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_refresh_schedule#schedule_frequency TfRefreshSchedule#schedule_frequency}
  */
  readonly scheduleFrequency?: ScheduleFrequencyProperty[] | cdktn.IResolvable;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshType = this._refreshType;
    }
    if (this._startAfterDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAfterDateTime = this._startAfterDateTime;
    }
    if (this._scheduleFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleFrequency = this._scheduleFrequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refreshType = undefined;
      this._startAfterDateTime = undefined;
      this._scheduleFrequency.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refreshType = value.refreshType;
      this._startAfterDateTime = value.startAfterDateTime;
      this._scheduleFrequency.internalValue = value.scheduleFrequency;
    }
  }

  // refresh_type - computed: false, optional: false, required: true
  private _refreshType?: string; 
  public get refreshType() {
    return this.getStringAttribute('refresh_type');
  }
  public set refreshType(value: string) {
    this._refreshType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTypeInput() {
    return this._refreshType;
  }

  // start_after_date_time - computed: true, optional: true, required: false
  private _startAfterDateTime?: string; 
  public get startAfterDateTime() {
    return this.getStringAttribute('start_after_date_time');
  }
  public set startAfterDateTime(value: string) {
    this._startAfterDateTime = value;
  }
  public resetStartAfterDateTime() {
    this._startAfterDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterDateTimeInput() {
    return this._startAfterDateTime;
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency = new ScheduleFrequencyPropertyList(this, "schedule_frequency", false);
  public get scheduleFrequency() {
    return this._scheduleFrequency;
  }
  public putScheduleFrequency(value: ScheduleFrequencyProperty[] | cdktn.IResolvable) {
    this._scheduleFrequency.internalValue = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency.internalValue;
  }
}

export class SchedulePropertyList extends cdktn.ComplexList {
  public internalValue? : ScheduleProperty[] | cdktn.IResolvable

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
  public get(index: number): SchedulePropertyOutputReference {
    return new SchedulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
