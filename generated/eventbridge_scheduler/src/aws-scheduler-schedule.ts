// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#action_after_completion TfSchedule#action_after_completion}
  */
  readonly actionAfterCompletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#description TfSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#end_date TfSchedule#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#group_name TfSchedule#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#id TfSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#kms_key_arn TfSchedule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#name TfSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#name_prefix TfSchedule#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#region TfSchedule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#schedule_expression TfSchedule#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#schedule_expression_timezone TfSchedule#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#start_date TfSchedule#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#state TfSchedule#state}
  */
  readonly state?: string;
  /**
  * flexible_time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#flexible_time_window TfSchedule#flexible_time_window}
  */
  readonly flexibleTimeWindow: TfSchedule.FlexibleTimeWindowProperty;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#target TfSchedule#target}
  */
  readonly target: TfSchedule.TargetProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule aws_scheduler_schedule}
*/
export class TfSchedule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_scheduler_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfSchedule to import
  * @param importFromId The id of the existing TfSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_scheduler_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule aws_scheduler_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: TfScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_scheduler_schedule',
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
    this._actionAfterCompletion = config.actionAfterCompletion;
    this._description = config.description;
    this._endDate = config.endDate;
    this._groupName = config.groupName;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._scheduleExpression = config.scheduleExpression;
    this._scheduleExpressionTimezone = config.scheduleExpressionTimezone;
    this._startDate = config.startDate;
    this._state = config.state;
    this._flexibleTimeWindow.internalValue = config.flexibleTimeWindow;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_after_completion - computed: true, optional: true, required: false
  private _actionAfterCompletion?: string; 
  public get actionAfterCompletion() {
    return this.getStringAttribute('action_after_completion');
  }
  public set actionAfterCompletion(value: string) {
    this._actionAfterCompletion = value;
  }
  public resetActionAfterCompletion() {
    this._actionAfterCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAfterCompletionInput() {
    return this._actionAfterCompletion;
  }

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

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_expression_timezone - computed: false, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // flexible_time_window - computed: false, optional: false, required: true
  private _flexibleTimeWindow = new TfSchedule.FlexibleTimeWindowPropertyOutputReference(this, "flexible_time_window");
  public get flexibleTimeWindow() {
    return this._flexibleTimeWindow;
  }
  public putFlexibleTimeWindow(value: TfSchedule.FlexibleTimeWindowProperty) {
    this._flexibleTimeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleTimeWindowInput() {
    return this._flexibleTimeWindow.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new TfSchedule.TargetPropertyOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: TfSchedule.TargetProperty) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_after_completion: cdktn.stringToTerraform(this._actionAfterCompletion),
      description: cdktn.stringToTerraform(this._description),
      end_date: cdktn.stringToTerraform(this._endDate),
      group_name: cdktn.stringToTerraform(this._groupName),
      id: cdktn.stringToTerraform(this._id),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      region: cdktn.stringToTerraform(this._region),
      schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
      schedule_expression_timezone: cdktn.stringToTerraform(this._scheduleExpressionTimezone),
      start_date: cdktn.stringToTerraform(this._startDate),
      state: cdktn.stringToTerraform(this._state),
      flexible_time_window: tfScheduleFlexibleTimeWindowPropertyToTerraform(this._flexibleTimeWindow.internalValue),
      target: tfScheduleTargetPropertyToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_after_completion: {
        value: cdktn.stringToHclTerraform(this._actionAfterCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktn.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktn.stringToHclTerraform(this._groupName),
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
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      schedule_expression: {
        value: cdktn.stringToHclTerraform(this._scheduleExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_expression_timezone: {
        value: cdktn.stringToHclTerraform(this._scheduleExpressionTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktn.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flexible_time_window: {
        value: tfScheduleFlexibleTimeWindowPropertyToHclTerraform(this._flexibleTimeWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfSchedule.FlexibleTimeWindowPropertyList",
      },
      target: {
        value: tfScheduleTargetPropertyToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfSchedule.TargetPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfScheduleFlexibleTimeWindowPropertyToTerraform(struct?: TfSchedule.FlexibleTimeWindowPropertyOutputReference | TfSchedule.FlexibleTimeWindowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_window_in_minutes: cdktn.numberToTerraform(struct!.maximumWindowInMinutes),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function tfScheduleFlexibleTimeWindowPropertyToHclTerraform(struct?: TfSchedule.FlexibleTimeWindowPropertyOutputReference | TfSchedule.FlexibleTimeWindowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_window_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maximumWindowInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleDeadLetterConfigPropertyToTerraform(struct?: TfSchedule.DeadLetterConfigPropertyOutputReference | TfSchedule.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function tfScheduleDeadLetterConfigPropertyToHclTerraform(struct?: TfSchedule.DeadLetterConfigPropertyOutputReference | TfSchedule.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleCapacityProviderStrategyPropertyToTerraform(struct?: TfSchedule.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: cdktn.numberToTerraform(struct!.base),
    capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function tfScheduleCapacityProviderStrategyPropertyToHclTerraform(struct?: TfSchedule.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: cdktn.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktn.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleNetworkConfigurationPropertyToTerraform(struct?: TfSchedule.NetworkConfigurationPropertyOutputReference | TfSchedule.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assign_public_ip: cdktn.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function tfScheduleNetworkConfigurationPropertyToHclTerraform(struct?: TfSchedule.NetworkConfigurationPropertyOutputReference | TfSchedule.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktn.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSchedulePlacementConstraintsPropertyToTerraform(struct?: TfSchedule.PlacementConstraintsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfSchedulePlacementConstraintsPropertyToHclTerraform(struct?: TfSchedule.PlacementConstraintsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSchedulePlacementStrategyPropertyToTerraform(struct?: TfSchedule.PlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfSchedulePlacementStrategyPropertyToHclTerraform(struct?: TfSchedule.PlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleEcsParametersPropertyToTerraform(struct?: TfSchedule.EcsParametersPropertyOutputReference | TfSchedule.EcsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktn.stringToTerraform(struct!.group),
    launch_type: cdktn.stringToTerraform(struct!.launchType),
    platform_version: cdktn.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    reference_id: cdktn.stringToTerraform(struct!.referenceId),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    task_count: cdktn.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    capacity_provider_strategy: cdktn.listMapper(tfScheduleCapacityProviderStrategyPropertyToTerraform, true)(struct!.capacityProviderStrategy),
    network_configuration: tfScheduleNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
    placement_constraints: cdktn.listMapper(tfSchedulePlacementConstraintsPropertyToTerraform, true)(struct!.placementConstraints),
    placement_strategy: cdktn.listMapper(tfSchedulePlacementStrategyPropertyToTerraform, true)(struct!.placementStrategy),
  }
}


export function tfScheduleEcsParametersPropertyToHclTerraform(struct?: TfSchedule.EcsParametersPropertyOutputReference | TfSchedule.EcsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_ecs_managed_tags: {
      value: cdktn.booleanToHclTerraform(struct!.enableEcsManagedTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_execute_command: {
      value: cdktn.booleanToHclTerraform(struct!.enableExecuteCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktn.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktn.stringToHclTerraform(struct!.launchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_version: {
      value: cdktn.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_tags: {
      value: cdktn.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktn.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_count: {
      value: cdktn.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_definition_arn: {
      value: cdktn.stringToHclTerraform(struct!.taskDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_provider_strategy: {
      value: cdktn.listMapperHcl(tfScheduleCapacityProviderStrategyPropertyToHclTerraform, true)(struct!.capacityProviderStrategy),
      isBlock: true,
      type: "set",
      storageClassType: "CapacityProviderStrategyPropertyList",
    },
    network_configuration: {
      value: tfScheduleNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConfigurationPropertyList",
    },
    placement_constraints: {
      value: cdktn.listMapperHcl(tfSchedulePlacementConstraintsPropertyToHclTerraform, true)(struct!.placementConstraints),
      isBlock: true,
      type: "set",
      storageClassType: "PlacementConstraintsPropertyList",
    },
    placement_strategy: {
      value: cdktn.listMapperHcl(tfSchedulePlacementStrategyPropertyToHclTerraform, true)(struct!.placementStrategy),
      isBlock: true,
      type: "set",
      storageClassType: "PlacementStrategyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleEventbridgeParametersPropertyToTerraform(struct?: TfSchedule.EventbridgeParametersPropertyOutputReference | TfSchedule.EventbridgeParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detail_type: cdktn.stringToTerraform(struct!.detailType),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfScheduleEventbridgeParametersPropertyToHclTerraform(struct?: TfSchedule.EventbridgeParametersPropertyOutputReference | TfSchedule.EventbridgeParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detail_type: {
      value: cdktn.stringToHclTerraform(struct!.detailType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleKinesisParametersPropertyToTerraform(struct?: TfSchedule.KinesisParametersPropertyOutputReference | TfSchedule.KinesisParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
  }
}


export function tfScheduleKinesisParametersPropertyToHclTerraform(struct?: TfSchedule.KinesisParametersPropertyOutputReference | TfSchedule.KinesisParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleRetryPolicyPropertyToTerraform(struct?: TfSchedule.RetryPolicyPropertyOutputReference | TfSchedule.RetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_event_age_in_seconds: cdktn.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function tfScheduleRetryPolicyPropertyToHclTerraform(struct?: TfSchedule.RetryPolicyPropertyOutputReference | TfSchedule.RetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_event_age_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSchedulePipelineParameterPropertyToTerraform(struct?: TfSchedule.PipelineParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfSchedulePipelineParameterPropertyToHclTerraform(struct?: TfSchedule.PipelineParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleSagemakerPipelineParametersPropertyToTerraform(struct?: TfSchedule.SagemakerPipelineParametersPropertyOutputReference | TfSchedule.SagemakerPipelineParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_parameter: cdktn.listMapper(tfSchedulePipelineParameterPropertyToTerraform, true)(struct!.pipelineParameter),
  }
}


export function tfScheduleSagemakerPipelineParametersPropertyToHclTerraform(struct?: TfSchedule.SagemakerPipelineParametersPropertyOutputReference | TfSchedule.SagemakerPipelineParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_parameter: {
      value: cdktn.listMapperHcl(tfSchedulePipelineParameterPropertyToHclTerraform, true)(struct!.pipelineParameter),
      isBlock: true,
      type: "set",
      storageClassType: "PipelineParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleSqsParametersPropertyToTerraform(struct?: TfSchedule.SqsParametersPropertyOutputReference | TfSchedule.SqsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
  }
}


export function tfScheduleSqsParametersPropertyToHclTerraform(struct?: TfSchedule.SqsParametersPropertyOutputReference | TfSchedule.SqsParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_group_id: {
      value: cdktn.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduleTargetPropertyToTerraform(struct?: TfSchedule.TargetPropertyOutputReference | TfSchedule.TargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    input: cdktn.stringToTerraform(struct!.input),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    dead_letter_config: tfScheduleDeadLetterConfigPropertyToTerraform(struct!.deadLetterConfig),
    ecs_parameters: tfScheduleEcsParametersPropertyToTerraform(struct!.ecsParameters),
    eventbridge_parameters: tfScheduleEventbridgeParametersPropertyToTerraform(struct!.eventbridgeParameters),
    kinesis_parameters: tfScheduleKinesisParametersPropertyToTerraform(struct!.kinesisParameters),
    retry_policy: tfScheduleRetryPolicyPropertyToTerraform(struct!.retryPolicy),
    sagemaker_pipeline_parameters: tfScheduleSagemakerPipelineParametersPropertyToTerraform(struct!.sagemakerPipelineParameters),
    sqs_parameters: tfScheduleSqsParametersPropertyToTerraform(struct!.sqsParameters),
  }
}


export function tfScheduleTargetPropertyToHclTerraform(struct?: TfSchedule.TargetPropertyOutputReference | TfSchedule.TargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_letter_config: {
      value: tfScheduleDeadLetterConfigPropertyToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeadLetterConfigPropertyList",
    },
    ecs_parameters: {
      value: tfScheduleEcsParametersPropertyToHclTerraform(struct!.ecsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EcsParametersPropertyList",
    },
    eventbridge_parameters: {
      value: tfScheduleEventbridgeParametersPropertyToHclTerraform(struct!.eventbridgeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventbridgeParametersPropertyList",
    },
    kinesis_parameters: {
      value: tfScheduleKinesisParametersPropertyToHclTerraform(struct!.kinesisParameters),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisParametersPropertyList",
    },
    retry_policy: {
      value: tfScheduleRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RetryPolicyPropertyList",
    },
    sagemaker_pipeline_parameters: {
      value: tfScheduleSagemakerPipelineParametersPropertyToHclTerraform(struct!.sagemakerPipelineParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerPipelineParametersPropertyList",
    },
    sqs_parameters: {
      value: tfScheduleSqsParametersPropertyToHclTerraform(struct!.sqsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SqsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfSchedule {
export interface FlexibleTimeWindowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#maximum_window_in_minutes TfSchedule#maximum_window_in_minutes}
  */
  readonly maximumWindowInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#mode TfSchedule#mode}
  */
  readonly mode: string;
}
export class FlexibleTimeWindowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlexibleTimeWindowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumWindowInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumWindowInMinutes = this._maximumWindowInMinutes;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleTimeWindowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumWindowInMinutes = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumWindowInMinutes = value.maximumWindowInMinutes;
      this._mode = value.mode;
    }
  }

  // maximum_window_in_minutes - computed: false, optional: true, required: false
  private _maximumWindowInMinutes?: number; 
  public get maximumWindowInMinutes() {
    return this.getNumberAttribute('maximum_window_in_minutes');
  }
  public set maximumWindowInMinutes(value: number) {
    this._maximumWindowInMinutes = value;
  }
  public resetMaximumWindowInMinutes() {
    this._maximumWindowInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumWindowInMinutesInput() {
    return this._maximumWindowInMinutes;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DeadLetterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#arn TfSchedule#arn}
  */
  readonly arn: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeadLetterConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeadLetterConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface CapacityProviderStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#base TfSchedule#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#capacity_provider TfSchedule#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#weight TfSchedule#weight}
  */
  readonly weight?: number;
}
export class CapacityProviderStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CapacityProviderStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProviderStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CapacityProviderStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : CapacityProviderStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): CapacityProviderStrategyPropertyOutputReference {
    return new CapacityProviderStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#assign_public_ip TfSchedule#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#security_groups TfSchedule#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#subnets TfSchedule#subnets}
  */
  readonly subnets: string[];
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktn.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktn.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface PlacementConstraintsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#expression TfSchedule#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#type TfSchedule#type}
  */
  readonly type: string;
}
export class PlacementConstraintsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementConstraintsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementConstraintsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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
}

export class PlacementConstraintsPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementConstraintsProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementConstraintsPropertyOutputReference {
    return new PlacementConstraintsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlacementStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#field TfSchedule#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#type TfSchedule#type}
  */
  readonly type: string;
}
export class PlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
}

export class PlacementStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementStrategyPropertyOutputReference {
    return new PlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags TfSchedule#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#enable_execute_command TfSchedule#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#group TfSchedule#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#launch_type TfSchedule#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#platform_version TfSchedule#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#propagate_tags TfSchedule#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#reference_id TfSchedule#reference_id}
  */
  readonly referenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#tags TfSchedule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#task_count TfSchedule#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#task_definition_arn TfSchedule#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#capacity_provider_strategy TfSchedule#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: CapacityProviderStrategyProperty[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#network_configuration TfSchedule#network_configuration}
  */
  readonly networkConfiguration?: NetworkConfigurationProperty;
  /**
  * placement_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#placement_constraints TfSchedule#placement_constraints}
  */
  readonly placementConstraints?: PlacementConstraintsProperty[] | cdktn.IResolvable;
  /**
  * placement_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#placement_strategy TfSchedule#placement_strategy}
  */
  readonly placementStrategy?: PlacementStrategyProperty[] | cdktn.IResolvable;
}
export class EcsParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEcsManagedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
    }
    if (this._enableExecuteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    if (this._capacityProviderStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._placementConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraints = this._placementConstraints?.internalValue;
    }
    if (this._placementStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEcsManagedTags = undefined;
      this._enableExecuteCommand = undefined;
      this._group = undefined;
      this._launchType = undefined;
      this._platformVersion = undefined;
      this._propagateTags = undefined;
      this._referenceId = undefined;
      this._tags = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
      this._capacityProviderStrategy.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._placementConstraints.internalValue = undefined;
      this._placementStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEcsManagedTags = value.enableEcsManagedTags;
      this._enableExecuteCommand = value.enableExecuteCommand;
      this._group = value.group;
      this._launchType = value.launchType;
      this._platformVersion = value.platformVersion;
      this._propagateTags = value.propagateTags;
      this._referenceId = value.referenceId;
      this._tags = value.tags;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
      this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._placementConstraints.internalValue = value.placementConstraints;
      this._placementStrategy.internalValue = value.placementStrategy;
    }
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // launch_type - computed: false, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // reference_id - computed: false, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
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

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: false, required: true
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new CapacityProviderStrategyPropertyList(this, "capacity_provider_strategy", true);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: CapacityProviderStrategyProperty[] | cdktn.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new PlacementConstraintsPropertyList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: PlacementConstraintsProperty[] | cdktn.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy = new PlacementStrategyPropertyList(this, "placement_strategy", true);
  public get placementStrategy() {
    return this._placementStrategy;
  }
  public putPlacementStrategy(value: PlacementStrategyProperty[] | cdktn.IResolvable) {
    this._placementStrategy.internalValue = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy.internalValue;
  }
}
export interface EventbridgeParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#detail_type TfSchedule#detail_type}
  */
  readonly detailType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#source TfSchedule#source}
  */
  readonly source: string;
}
export class EventbridgeParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventbridgeParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailType !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailType = this._detailType;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventbridgeParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailType = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailType = value.detailType;
      this._source = value.source;
    }
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType?: string; 
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface KinesisParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#partition_key TfSchedule#partition_key}
  */
  readonly partitionKey: string;
}
export class KinesisParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKey = value.partitionKey;
    }
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }
}
export interface RetryPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds TfSchedule#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#maximum_retry_attempts TfSchedule#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}
export class RetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetryPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}
export interface PipelineParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#name TfSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#value TfSchedule#value}
  */
  readonly value: string;
}
export class PipelineParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipelineParameterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipelineParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : PipelineParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): PipelineParameterPropertyOutputReference {
    return new PipelineParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerPipelineParametersProperty {
  /**
  * pipeline_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#pipeline_parameter TfSchedule#pipeline_parameter}
  */
  readonly pipelineParameter?: PipelineParameterProperty[] | cdktn.IResolvable;
}
export class SagemakerPipelineParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerPipelineParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParameter = this._pipelineParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelineParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineParameter.internalValue = value.pipelineParameter;
    }
  }

  // pipeline_parameter - computed: false, optional: true, required: false
  private _pipelineParameter = new PipelineParameterPropertyList(this, "pipeline_parameter", true);
  public get pipelineParameter() {
    return this._pipelineParameter;
  }
  public putPipelineParameter(value: PipelineParameterProperty[] | cdktn.IResolvable) {
    this._pipelineParameter.internalValue = value;
  }
  public resetPipelineParameter() {
    this._pipelineParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParameterInput() {
    return this._pipelineParameter.internalValue;
  }
}
export interface SqsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#message_group_id TfSchedule#message_group_id}
  */
  readonly messageGroupId?: string;
}
export class SqsParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqsParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqsParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}
export interface TargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#arn TfSchedule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#input TfSchedule#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#role_arn TfSchedule#role_arn}
  */
  readonly roleArn: string;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#dead_letter_config TfSchedule#dead_letter_config}
  */
  readonly deadLetterConfig?: DeadLetterConfigProperty;
  /**
  * ecs_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#ecs_parameters TfSchedule#ecs_parameters}
  */
  readonly ecsParameters?: EcsParametersProperty;
  /**
  * eventbridge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#eventbridge_parameters TfSchedule#eventbridge_parameters}
  */
  readonly eventbridgeParameters?: EventbridgeParametersProperty;
  /**
  * kinesis_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#kinesis_parameters TfSchedule#kinesis_parameters}
  */
  readonly kinesisParameters?: KinesisParametersProperty;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#retry_policy TfSchedule#retry_policy}
  */
  readonly retryPolicy?: RetryPolicyProperty;
  /**
  * sagemaker_pipeline_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#sagemaker_pipeline_parameters TfSchedule#sagemaker_pipeline_parameters}
  */
  readonly sagemakerPipelineParameters?: SagemakerPipelineParametersProperty;
  /**
  * sqs_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/scheduler_schedule#sqs_parameters TfSchedule#sqs_parameters}
  */
  readonly sqsParameters?: SqsParametersProperty;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    if (this._ecsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsParameters = this._ecsParameters?.internalValue;
    }
    if (this._eventbridgeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventbridgeParameters = this._eventbridgeParameters?.internalValue;
    }
    if (this._kinesisParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisParameters = this._kinesisParameters?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._sagemakerPipelineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerPipelineParameters = this._sagemakerPipelineParameters?.internalValue;
    }
    if (this._sqsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsParameters = this._sqsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._input = undefined;
      this._roleArn = undefined;
      this._deadLetterConfig.internalValue = undefined;
      this._ecsParameters.internalValue = undefined;
      this._eventbridgeParameters.internalValue = undefined;
      this._kinesisParameters.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._sagemakerPipelineParameters.internalValue = undefined;
      this._sqsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._input = value.input;
      this._roleArn = value.roleArn;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
      this._ecsParameters.internalValue = value.ecsParameters;
      this._eventbridgeParameters.internalValue = value.eventbridgeParameters;
      this._kinesisParameters.internalValue = value.kinesisParameters;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._sagemakerPipelineParameters.internalValue = value.sagemakerPipelineParameters;
      this._sqsParameters.internalValue = value.sqsParameters;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: DeadLetterConfigProperty) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // ecs_parameters - computed: false, optional: true, required: false
  private _ecsParameters = new EcsParametersPropertyOutputReference(this, "ecs_parameters");
  public get ecsParameters() {
    return this._ecsParameters;
  }
  public putEcsParameters(value: EcsParametersProperty) {
    this._ecsParameters.internalValue = value;
  }
  public resetEcsParameters() {
    this._ecsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsParametersInput() {
    return this._ecsParameters.internalValue;
  }

  // eventbridge_parameters - computed: false, optional: true, required: false
  private _eventbridgeParameters = new EventbridgeParametersPropertyOutputReference(this, "eventbridge_parameters");
  public get eventbridgeParameters() {
    return this._eventbridgeParameters;
  }
  public putEventbridgeParameters(value: EventbridgeParametersProperty) {
    this._eventbridgeParameters.internalValue = value;
  }
  public resetEventbridgeParameters() {
    this._eventbridgeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeParametersInput() {
    return this._eventbridgeParameters.internalValue;
  }

  // kinesis_parameters - computed: false, optional: true, required: false
  private _kinesisParameters = new KinesisParametersPropertyOutputReference(this, "kinesis_parameters");
  public get kinesisParameters() {
    return this._kinesisParameters;
  }
  public putKinesisParameters(value: KinesisParametersProperty) {
    this._kinesisParameters.internalValue = value;
  }
  public resetKinesisParameters() {
    this._kinesisParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisParametersInput() {
    return this._kinesisParameters.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new RetryPolicyPropertyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: RetryPolicyProperty) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // sagemaker_pipeline_parameters - computed: false, optional: true, required: false
  private _sagemakerPipelineParameters = new SagemakerPipelineParametersPropertyOutputReference(this, "sagemaker_pipeline_parameters");
  public get sagemakerPipelineParameters() {
    return this._sagemakerPipelineParameters;
  }
  public putSagemakerPipelineParameters(value: SagemakerPipelineParametersProperty) {
    this._sagemakerPipelineParameters.internalValue = value;
  }
  public resetSagemakerPipelineParameters() {
    this._sagemakerPipelineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerPipelineParametersInput() {
    return this._sagemakerPipelineParameters.internalValue;
  }

  // sqs_parameters - computed: false, optional: true, required: false
  private _sqsParameters = new SqsParametersPropertyOutputReference(this, "sqs_parameters");
  public get sqsParameters() {
    return this._sqsParameters;
  }
  public putSqsParameters(value: SqsParametersProperty) {
    this._sqsParameters.internalValue = value;
  }
  public resetSqsParameters() {
    this._sqsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsParametersInput() {
    return this._sqsParameters.internalValue;
  }
}
}
