// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfBudgetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#account_id TfBudget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#billing_view_arn TfBudget#billing_view_arn}
  */
  readonly billingViewArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#budget_type TfBudget#budget_type}
  */
  readonly budgetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#id TfBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#limit_amount TfBudget#limit_amount}
  */
  readonly limitAmount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#limit_unit TfBudget#limit_unit}
  */
  readonly limitUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#metrics TfBudget#metrics}
  */
  readonly metrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#name TfBudget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#name_prefix TfBudget#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags_all TfBudget#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#time_period_end TfBudget#time_period_end}
  */
  readonly timePeriodEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#time_period_start TfBudget#time_period_start}
  */
  readonly timePeriodStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#time_unit TfBudget#time_unit}
  */
  readonly timeUnit: string;
  /**
  * auto_adjust_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#auto_adjust_data TfBudget#auto_adjust_data}
  */
  readonly autoAdjustData?: TfBudget.AutoAdjustDataProperty;
  /**
  * cost_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_filter TfBudget#cost_filter}
  */
  readonly costFilter?: TfBudget.CostFilterProperty[] | cdktn.IResolvable;
  /**
  * cost_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_types TfBudget#cost_types}
  */
  readonly costTypes?: TfBudget.CostTypesProperty;
  /**
  * filter_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#filter_expression TfBudget#filter_expression}
  */
  readonly filterExpression?: TfBudget.FilterExpressionProperty;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#notification TfBudget#notification}
  */
  readonly notification?: TfBudget.NotificationProperty[] | cdktn.IResolvable;
  /**
  * planned_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#planned_limit TfBudget#planned_limit}
  */
  readonly plannedLimit?: TfBudget.PlannedLimitProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget aws_budgets_budget}
*/
export class TfBudget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_budgets_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfBudget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfBudget to import
  * @param importFromId The id of the existing TfBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_budgets_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget aws_budgets_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: TfBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget',
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
    this._accountId = config.accountId;
    this._billingViewArn = config.billingViewArn;
    this._budgetType = config.budgetType;
    this._id = config.id;
    this._limitAmount = config.limitAmount;
    this._limitUnit = config.limitUnit;
    this._metrics = config.metrics;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timePeriodEnd = config.timePeriodEnd;
    this._timePeriodStart = config.timePeriodStart;
    this._timeUnit = config.timeUnit;
    this._autoAdjustData.internalValue = config.autoAdjustData;
    this._costFilter.internalValue = config.costFilter;
    this._costTypes.internalValue = config.costTypes;
    this._filterExpression.internalValue = config.filterExpression;
    this._notification.internalValue = config.notification;
    this._plannedLimit.internalValue = config.plannedLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // billing_view_arn - computed: false, optional: true, required: false
  private _billingViewArn?: string; 
  public get billingViewArn() {
    return this.getStringAttribute('billing_view_arn');
  }
  public set billingViewArn(value: string) {
    this._billingViewArn = value;
  }
  public resetBillingViewArn() {
    this._billingViewArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingViewArnInput() {
    return this._billingViewArn;
  }

  // budget_type - computed: false, optional: false, required: true
  private _budgetType?: string; 
  public get budgetType() {
    return this.getStringAttribute('budget_type');
  }
  public set budgetType(value: string) {
    this._budgetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetTypeInput() {
    return this._budgetType;
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

  // limit_amount - computed: true, optional: true, required: false
  private _limitAmount?: string; 
  public get limitAmount() {
    return this.getStringAttribute('limit_amount');
  }
  public set limitAmount(value: string) {
    this._limitAmount = value;
  }
  public resetLimitAmount() {
    this._limitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAmountInput() {
    return this._limitAmount;
  }

  // limit_unit - computed: true, optional: true, required: false
  private _limitUnit?: string; 
  public get limitUnit() {
    return this.getStringAttribute('limit_unit');
  }
  public set limitUnit(value: string) {
    this._limitUnit = value;
  }
  public resetLimitUnit() {
    this._limitUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUnitInput() {
    return this._limitUnit;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
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

  // time_period_end - computed: false, optional: true, required: false
  private _timePeriodEnd?: string; 
  public get timePeriodEnd() {
    return this.getStringAttribute('time_period_end');
  }
  public set timePeriodEnd(value: string) {
    this._timePeriodEnd = value;
  }
  public resetTimePeriodEnd() {
    this._timePeriodEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodEndInput() {
    return this._timePeriodEnd;
  }

  // time_period_start - computed: true, optional: true, required: false
  private _timePeriodStart?: string; 
  public get timePeriodStart() {
    return this.getStringAttribute('time_period_start');
  }
  public set timePeriodStart(value: string) {
    this._timePeriodStart = value;
  }
  public resetTimePeriodStart() {
    this._timePeriodStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodStartInput() {
    return this._timePeriodStart;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // auto_adjust_data - computed: false, optional: true, required: false
  private _autoAdjustData = new TfBudget.AutoAdjustDataPropertyOutputReference(this, "auto_adjust_data");
  public get autoAdjustData() {
    return this._autoAdjustData;
  }
  public putAutoAdjustData(value: TfBudget.AutoAdjustDataProperty) {
    this._autoAdjustData.internalValue = value;
  }
  public resetAutoAdjustData() {
    this._autoAdjustData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAdjustDataInput() {
    return this._autoAdjustData.internalValue;
  }

  // cost_filter - computed: false, optional: true, required: false
  private _costFilter = new TfBudget.CostFilterPropertyList(this, "cost_filter", true);
  public get costFilter() {
    return this._costFilter;
  }
  public putCostFilter(value: TfBudget.CostFilterProperty[] | cdktn.IResolvable) {
    this._costFilter.internalValue = value;
  }
  public resetCostFilter() {
    this._costFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFilterInput() {
    return this._costFilter.internalValue;
  }

  // cost_types - computed: false, optional: true, required: false
  private _costTypes = new TfBudget.CostTypesPropertyOutputReference(this, "cost_types");
  public get costTypes() {
    return this._costTypes;
  }
  public putCostTypes(value: TfBudget.CostTypesProperty) {
    this._costTypes.internalValue = value;
  }
  public resetCostTypes() {
    this._costTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costTypesInput() {
    return this._costTypes.internalValue;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression = new TfBudget.FilterExpressionPropertyOutputReference(this, "filter_expression");
  public get filterExpression() {
    return this._filterExpression;
  }
  public putFilterExpression(value: TfBudget.FilterExpressionProperty) {
    this._filterExpression.internalValue = value;
  }
  public resetFilterExpression() {
    this._filterExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new TfBudget.NotificationPropertyList(this, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: TfBudget.NotificationProperty[] | cdktn.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // planned_limit - computed: false, optional: true, required: false
  private _plannedLimit = new TfBudget.PlannedLimitPropertyList(this, "planned_limit", true);
  public get plannedLimit() {
    return this._plannedLimit;
  }
  public putPlannedLimit(value: TfBudget.PlannedLimitProperty[] | cdktn.IResolvable) {
    this._plannedLimit.internalValue = value;
  }
  public resetPlannedLimit() {
    this._plannedLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedLimitInput() {
    return this._plannedLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      billing_view_arn: cdktn.stringToTerraform(this._billingViewArn),
      budget_type: cdktn.stringToTerraform(this._budgetType),
      id: cdktn.stringToTerraform(this._id),
      limit_amount: cdktn.stringToTerraform(this._limitAmount),
      limit_unit: cdktn.stringToTerraform(this._limitUnit),
      metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metrics),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      time_period_end: cdktn.stringToTerraform(this._timePeriodEnd),
      time_period_start: cdktn.stringToTerraform(this._timePeriodStart),
      time_unit: cdktn.stringToTerraform(this._timeUnit),
      auto_adjust_data: tfBudgetAutoAdjustDataPropertyToTerraform(this._autoAdjustData.internalValue),
      cost_filter: cdktn.listMapper(tfBudgetCostFilterPropertyToTerraform, true)(this._costFilter.internalValue),
      cost_types: tfBudgetCostTypesPropertyToTerraform(this._costTypes.internalValue),
      filter_expression: tfBudgetFilterExpressionPropertyToTerraform(this._filterExpression.internalValue),
      notification: cdktn.listMapper(tfBudgetNotificationPropertyToTerraform, true)(this._notification.internalValue),
      planned_limit: cdktn.listMapper(tfBudgetPlannedLimitPropertyToTerraform, true)(this._plannedLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_view_arn: {
        value: cdktn.stringToHclTerraform(this._billingViewArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_type: {
        value: cdktn.stringToHclTerraform(this._budgetType),
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
      limit_amount: {
        value: cdktn.stringToHclTerraform(this._limitAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_unit: {
        value: cdktn.stringToHclTerraform(this._limitUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metrics),
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
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      time_period_end: {
        value: cdktn.stringToHclTerraform(this._timePeriodEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_period_start: {
        value: cdktn.stringToHclTerraform(this._timePeriodStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_unit: {
        value: cdktn.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_adjust_data: {
        value: tfBudgetAutoAdjustDataPropertyToHclTerraform(this._autoAdjustData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBudget.AutoAdjustDataPropertyList",
      },
      cost_filter: {
        value: cdktn.listMapperHcl(tfBudgetCostFilterPropertyToHclTerraform, true)(this._costFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfBudget.CostFilterPropertyList",
      },
      cost_types: {
        value: tfBudgetCostTypesPropertyToHclTerraform(this._costTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBudget.CostTypesPropertyList",
      },
      filter_expression: {
        value: tfBudgetFilterExpressionPropertyToHclTerraform(this._filterExpression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBudget.FilterExpressionPropertyList",
      },
      notification: {
        value: cdktn.listMapperHcl(tfBudgetNotificationPropertyToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfBudget.NotificationPropertyList",
      },
      planned_limit: {
        value: cdktn.listMapperHcl(tfBudgetPlannedLimitPropertyToHclTerraform, true)(this._plannedLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfBudget.PlannedLimitPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfBudgetHistoricalOptionsPropertyToTerraform(struct?: TfBudget.HistoricalOptionsPropertyOutputReference | TfBudget.HistoricalOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    budget_adjustment_period: cdktn.numberToTerraform(struct!.budgetAdjustmentPeriod),
  }
}


export function tfBudgetHistoricalOptionsPropertyToHclTerraform(struct?: TfBudget.HistoricalOptionsPropertyOutputReference | TfBudget.HistoricalOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    budget_adjustment_period: {
      value: cdktn.numberToHclTerraform(struct!.budgetAdjustmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetAutoAdjustDataPropertyToTerraform(struct?: TfBudget.AutoAdjustDataPropertyOutputReference | TfBudget.AutoAdjustDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_adjust_type: cdktn.stringToTerraform(struct!.autoAdjustType),
    historical_options: tfBudgetHistoricalOptionsPropertyToTerraform(struct!.historicalOptions),
  }
}


export function tfBudgetAutoAdjustDataPropertyToHclTerraform(struct?: TfBudget.AutoAdjustDataPropertyOutputReference | TfBudget.AutoAdjustDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_adjust_type: {
      value: cdktn.stringToHclTerraform(struct!.autoAdjustType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    historical_options: {
      value: tfBudgetHistoricalOptionsPropertyToHclTerraform(struct!.historicalOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HistoricalOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetCostFilterPropertyToTerraform(struct?: TfBudget.CostFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetCostFilterPropertyToHclTerraform(struct?: TfBudget.CostFilterProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetCostTypesPropertyToTerraform(struct?: TfBudget.CostTypesPropertyOutputReference | TfBudget.CostTypesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_credit: cdktn.booleanToTerraform(struct!.includeCredit),
    include_discount: cdktn.booleanToTerraform(struct!.includeDiscount),
    include_other_subscription: cdktn.booleanToTerraform(struct!.includeOtherSubscription),
    include_recurring: cdktn.booleanToTerraform(struct!.includeRecurring),
    include_refund: cdktn.booleanToTerraform(struct!.includeRefund),
    include_subscription: cdktn.booleanToTerraform(struct!.includeSubscription),
    include_support: cdktn.booleanToTerraform(struct!.includeSupport),
    include_tax: cdktn.booleanToTerraform(struct!.includeTax),
    include_upfront: cdktn.booleanToTerraform(struct!.includeUpfront),
    use_amortized: cdktn.booleanToTerraform(struct!.useAmortized),
    use_blended: cdktn.booleanToTerraform(struct!.useBlended),
  }
}


export function tfBudgetCostTypesPropertyToHclTerraform(struct?: TfBudget.CostTypesPropertyOutputReference | TfBudget.CostTypesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_credit: {
      value: cdktn.booleanToHclTerraform(struct!.includeCredit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_discount: {
      value: cdktn.booleanToHclTerraform(struct!.includeDiscount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_other_subscription: {
      value: cdktn.booleanToHclTerraform(struct!.includeOtherSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_recurring: {
      value: cdktn.booleanToHclTerraform(struct!.includeRecurring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_refund: {
      value: cdktn.booleanToHclTerraform(struct!.includeRefund),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_subscription: {
      value: cdktn.booleanToHclTerraform(struct!.includeSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_support: {
      value: cdktn.booleanToHclTerraform(struct!.includeSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_tax: {
      value: cdktn.booleanToHclTerraform(struct!.includeTax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_upfront: {
      value: cdktn.booleanToHclTerraform(struct!.includeUpfront),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_amortized: {
      value: cdktn.booleanToHclTerraform(struct!.useAmortized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_blended: {
      value: cdktn.booleanToHclTerraform(struct!.useBlended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndAndCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionAndAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndAndCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndAndDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndAndDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndAndTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndAndTagsPropertyOutputReference | TfBudget.FilterExpressionAndAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndAndTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndAndTagsPropertyOutputReference | TfBudget.FilterExpressionAndAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndAndPropertyToTerraform(struct?: TfBudget.FilterExpressionAndAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionAndAndCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionAndAndDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionAndAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionAndAndPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionAndAndCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndAndCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionAndAndDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndAndDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionAndAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndNotCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionAndNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndNotCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndNotDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndNotDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndNotTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndNotTagsPropertyOutputReference | TfBudget.FilterExpressionAndNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndNotTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndNotTagsPropertyOutputReference | TfBudget.FilterExpressionAndNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndNotPropertyToTerraform(struct?: TfBudget.FilterExpressionAndNotPropertyOutputReference | TfBudget.FilterExpressionAndNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionAndNotCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionAndNotDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionAndNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionAndNotPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndNotPropertyOutputReference | TfBudget.FilterExpressionAndNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionAndNotCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndNotCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionAndNotDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndNotDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionAndNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndOrCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionAndOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndOrCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionAndOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndOrDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndOrDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionAndOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndOrTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndOrTagsPropertyOutputReference | TfBudget.FilterExpressionAndOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndOrTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndOrTagsPropertyOutputReference | TfBudget.FilterExpressionAndOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndOrPropertyToTerraform(struct?: TfBudget.FilterExpressionAndOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionAndOrCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionAndOrDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionAndOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionAndOrPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionAndOrCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndOrCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionAndOrDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndOrDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionAndOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionAndTagsPropertyOutputReference | TfBudget.FilterExpressionAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionAndTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndTagsPropertyOutputReference | TfBudget.FilterExpressionAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionAndPropertyToTerraform(struct?: TfBudget.FilterExpressionAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(tfBudgetFilterExpressionAndAndPropertyToTerraform, true)(struct!.and),
    cost_categories: tfBudgetFilterExpressionAndCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionAndDimensionsPropertyToTerraform(struct!.dimensions),
    not: tfBudgetFilterExpressionAndNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(tfBudgetFilterExpressionAndOrPropertyToTerraform, true)(struct!.or),
    tags: tfBudgetFilterExpressionAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionAndPropertyToHclTerraform(struct?: TfBudget.FilterExpressionAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionAndAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndAndPropertyList",
    },
    cost_categories: {
      value: tfBudgetFilterExpressionAndCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionAndDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndDimensionsPropertyList",
    },
    not: {
      value: tfBudgetFilterExpressionAndNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionAndOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndOrPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionDimensionsPropertyOutputReference | TfBudget.FilterExpressionDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionDimensionsPropertyOutputReference | TfBudget.FilterExpressionDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotAndCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionNotAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotAndCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotAndDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotAndDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotAndTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotAndTagsPropertyOutputReference | TfBudget.FilterExpressionNotAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotAndTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotAndTagsPropertyOutputReference | TfBudget.FilterExpressionNotAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotAndPropertyToTerraform(struct?: TfBudget.FilterExpressionNotAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionNotAndCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionNotAndDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionNotAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionNotAndPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionNotAndCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotAndCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionNotAndDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotAndDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionNotAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotNotCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionNotNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotNotCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotNotDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotNotDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotNotTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotNotTagsPropertyOutputReference | TfBudget.FilterExpressionNotNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotNotTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotNotTagsPropertyOutputReference | TfBudget.FilterExpressionNotNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotNotPropertyToTerraform(struct?: TfBudget.FilterExpressionNotNotPropertyOutputReference | TfBudget.FilterExpressionNotNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionNotNotCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionNotNotDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionNotNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionNotNotPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotNotPropertyOutputReference | TfBudget.FilterExpressionNotNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionNotNotCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotNotCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionNotNotDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotNotDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionNotNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotOrCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionNotOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotOrCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionNotOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotOrDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotOrDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionNotOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotOrTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotOrTagsPropertyOutputReference | TfBudget.FilterExpressionNotOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotOrTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotOrTagsPropertyOutputReference | TfBudget.FilterExpressionNotOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotOrPropertyToTerraform(struct?: TfBudget.FilterExpressionNotOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionNotOrCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionNotOrDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionNotOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionNotOrPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionNotOrCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotOrCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionNotOrDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotOrDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionNotOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionNotTagsPropertyOutputReference | TfBudget.FilterExpressionNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionNotTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotTagsPropertyOutputReference | TfBudget.FilterExpressionNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionNotPropertyToTerraform(struct?: TfBudget.FilterExpressionNotPropertyOutputReference | TfBudget.FilterExpressionNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(tfBudgetFilterExpressionNotAndPropertyToTerraform, true)(struct!.and),
    cost_categories: tfBudgetFilterExpressionNotCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionNotDimensionsPropertyToTerraform(struct!.dimensions),
    not: tfBudgetFilterExpressionNotNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(tfBudgetFilterExpressionNotOrPropertyToTerraform, true)(struct!.or),
    tags: tfBudgetFilterExpressionNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionNotPropertyToHclTerraform(struct?: TfBudget.FilterExpressionNotPropertyOutputReference | TfBudget.FilterExpressionNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionNotAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotAndPropertyList",
    },
    cost_categories: {
      value: tfBudgetFilterExpressionNotCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionNotDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotDimensionsPropertyList",
    },
    not: {
      value: tfBudgetFilterExpressionNotNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionNotOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotOrPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrAndCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionOrAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrAndCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrAndCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrAndCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrAndDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrAndDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrAndDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrAndDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrAndTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrAndTagsPropertyOutputReference | TfBudget.FilterExpressionOrAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrAndTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrAndTagsPropertyOutputReference | TfBudget.FilterExpressionOrAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrAndPropertyToTerraform(struct?: TfBudget.FilterExpressionOrAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionOrAndCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionOrAndDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionOrAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionOrAndPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionOrAndCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrAndCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionOrAndDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrAndDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionOrAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrNotCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionOrNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrNotCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrNotCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrNotCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrNotDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrNotDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrNotDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrNotDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrNotTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrNotTagsPropertyOutputReference | TfBudget.FilterExpressionOrNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrNotTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrNotTagsPropertyOutputReference | TfBudget.FilterExpressionOrNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrNotPropertyToTerraform(struct?: TfBudget.FilterExpressionOrNotPropertyOutputReference | TfBudget.FilterExpressionOrNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionOrNotCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionOrNotDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionOrNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionOrNotPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrNotPropertyOutputReference | TfBudget.FilterExpressionOrNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionOrNotCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrNotCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionOrNotDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrNotDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionOrNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrOrCostCategoriesPropertyToTerraform(struct?: TfBudget.FilterExpressionOrOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrOrCostCategoriesPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrOrCostCategoriesPropertyOutputReference | TfBudget.FilterExpressionOrOrCostCategoriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrOrDimensionsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrOrDimensionsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrOrDimensionsPropertyOutputReference | TfBudget.FilterExpressionOrOrDimensionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrOrTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrOrTagsPropertyOutputReference | TfBudget.FilterExpressionOrOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrOrTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrOrTagsPropertyOutputReference | TfBudget.FilterExpressionOrOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrOrPropertyToTerraform(struct?: TfBudget.FilterExpressionOrOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_categories: tfBudgetFilterExpressionOrOrCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionOrOrDimensionsPropertyToTerraform(struct!.dimensions),
    tags: tfBudgetFilterExpressionOrOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionOrOrPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_categories: {
      value: tfBudgetFilterExpressionOrOrCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrOrCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionOrOrDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrOrDimensionsPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionOrOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionOrTagsPropertyOutputReference | TfBudget.FilterExpressionOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionOrTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrTagsPropertyOutputReference | TfBudget.FilterExpressionOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionOrPropertyToTerraform(struct?: TfBudget.FilterExpressionOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(tfBudgetFilterExpressionOrAndPropertyToTerraform, true)(struct!.and),
    cost_categories: tfBudgetFilterExpressionOrCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionOrDimensionsPropertyToTerraform(struct!.dimensions),
    not: tfBudgetFilterExpressionOrNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(tfBudgetFilterExpressionOrOrPropertyToTerraform, true)(struct!.or),
    tags: tfBudgetFilterExpressionOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionOrPropertyToHclTerraform(struct?: TfBudget.FilterExpressionOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionOrAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrAndPropertyList",
    },
    cost_categories: {
      value: tfBudgetFilterExpressionOrCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionOrDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrDimensionsPropertyList",
    },
    not: {
      value: tfBudgetFilterExpressionOrNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionOrOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrOrPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionTagsPropertyToTerraform(struct?: TfBudget.FilterExpressionTagsPropertyOutputReference | TfBudget.FilterExpressionTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfBudgetFilterExpressionTagsPropertyToHclTerraform(struct?: TfBudget.FilterExpressionTagsPropertyOutputReference | TfBudget.FilterExpressionTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetFilterExpressionPropertyToTerraform(struct?: TfBudget.FilterExpressionPropertyOutputReference | TfBudget.FilterExpressionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(tfBudgetFilterExpressionAndPropertyToTerraform, true)(struct!.and),
    cost_categories: tfBudgetFilterExpressionCostCategoriesPropertyToTerraform(struct!.costCategories),
    dimensions: tfBudgetFilterExpressionDimensionsPropertyToTerraform(struct!.dimensions),
    not: tfBudgetFilterExpressionNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(tfBudgetFilterExpressionOrPropertyToTerraform, true)(struct!.or),
    tags: tfBudgetFilterExpressionTagsPropertyToTerraform(struct!.tags),
  }
}


export function tfBudgetFilterExpressionPropertyToHclTerraform(struct?: TfBudget.FilterExpressionPropertyOutputReference | TfBudget.FilterExpressionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionAndPropertyList",
    },
    cost_categories: {
      value: tfBudgetFilterExpressionCostCategoriesPropertyToHclTerraform(struct!.costCategories),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionCostCategoriesPropertyList",
    },
    dimensions: {
      value: tfBudgetFilterExpressionDimensionsPropertyToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionDimensionsPropertyList",
    },
    not: {
      value: tfBudgetFilterExpressionNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(tfBudgetFilterExpressionOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionOrPropertyList",
    },
    tags: {
      value: tfBudgetFilterExpressionTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FilterExpressionTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetNotificationPropertyToTerraform(struct?: TfBudget.NotificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    notification_type: cdktn.stringToTerraform(struct!.notificationType),
    subscriber_email_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subscriberEmailAddresses),
    subscriber_sns_topic_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subscriberSnsTopicArns),
    threshold: cdktn.numberToTerraform(struct!.threshold),
    threshold_type: cdktn.stringToTerraform(struct!.thresholdType),
  }
}


export function tfBudgetNotificationPropertyToHclTerraform(struct?: TfBudget.NotificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_type: {
      value: cdktn.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscriber_email_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subscriberEmailAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subscriber_sns_topic_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subscriberSnsTopicArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_type: {
      value: cdktn.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBudgetPlannedLimitPropertyToTerraform(struct?: TfBudget.PlannedLimitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount: cdktn.stringToTerraform(struct!.amount),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function tfBudgetPlannedLimitPropertyToHclTerraform(struct?: TfBudget.PlannedLimitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount: {
      value: cdktn.stringToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfBudget {
export interface HistoricalOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#budget_adjustment_period TfBudget#budget_adjustment_period}
  */
  readonly budgetAdjustmentPeriod: number;
}
export class HistoricalOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HistoricalOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetAdjustmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetAdjustmentPeriod = this._budgetAdjustmentPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HistoricalOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._budgetAdjustmentPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._budgetAdjustmentPeriod = value.budgetAdjustmentPeriod;
    }
  }

  // budget_adjustment_period - computed: false, optional: false, required: true
  private _budgetAdjustmentPeriod?: number; 
  public get budgetAdjustmentPeriod() {
    return this.getNumberAttribute('budget_adjustment_period');
  }
  public set budgetAdjustmentPeriod(value: number) {
    this._budgetAdjustmentPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetAdjustmentPeriodInput() {
    return this._budgetAdjustmentPeriod;
  }

  // lookback_available_periods - computed: true, optional: false, required: false
  public get lookbackAvailablePeriods() {
    return this.getNumberAttribute('lookback_available_periods');
  }
}
export interface AutoAdjustDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#auto_adjust_type TfBudget#auto_adjust_type}
  */
  readonly autoAdjustType: string;
  /**
  * historical_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#historical_options TfBudget#historical_options}
  */
  readonly historicalOptions?: HistoricalOptionsProperty;
}
export class AutoAdjustDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoAdjustDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAdjustType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAdjustType = this._autoAdjustType;
    }
    if (this._historicalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalOptions = this._historicalOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoAdjustDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAdjustType = undefined;
      this._historicalOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAdjustType = value.autoAdjustType;
      this._historicalOptions.internalValue = value.historicalOptions;
    }
  }

  // auto_adjust_type - computed: false, optional: false, required: true
  private _autoAdjustType?: string; 
  public get autoAdjustType() {
    return this.getStringAttribute('auto_adjust_type');
  }
  public set autoAdjustType(value: string) {
    this._autoAdjustType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAdjustTypeInput() {
    return this._autoAdjustType;
  }

  // last_auto_adjust_time - computed: true, optional: false, required: false
  public get lastAutoAdjustTime() {
    return this.getStringAttribute('last_auto_adjust_time');
  }

  // historical_options - computed: false, optional: true, required: false
  private _historicalOptions = new HistoricalOptionsPropertyOutputReference(this, "historical_options");
  public get historicalOptions() {
    return this._historicalOptions;
  }
  public putHistoricalOptions(value: HistoricalOptionsProperty) {
    this._historicalOptions.internalValue = value;
  }
  public resetHistoricalOptions() {
    this._historicalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalOptionsInput() {
    return this._historicalOptions.internalValue;
  }
}
export interface CostFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#name TfBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class CostFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CostFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CostFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : CostFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): CostFilterPropertyOutputReference {
    return new CostFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CostTypesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_credit TfBudget#include_credit}
  */
  readonly includeCredit?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_discount TfBudget#include_discount}
  */
  readonly includeDiscount?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_other_subscription TfBudget#include_other_subscription}
  */
  readonly includeOtherSubscription?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_recurring TfBudget#include_recurring}
  */
  readonly includeRecurring?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_refund TfBudget#include_refund}
  */
  readonly includeRefund?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_subscription TfBudget#include_subscription}
  */
  readonly includeSubscription?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_support TfBudget#include_support}
  */
  readonly includeSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_tax TfBudget#include_tax}
  */
  readonly includeTax?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#include_upfront TfBudget#include_upfront}
  */
  readonly includeUpfront?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#use_amortized TfBudget#use_amortized}
  */
  readonly useAmortized?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#use_blended TfBudget#use_blended}
  */
  readonly useBlended?: boolean | cdktn.IResolvable;
}
export class CostTypesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CostTypesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeCredit !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCredit = this._includeCredit;
    }
    if (this._includeDiscount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDiscount = this._includeDiscount;
    }
    if (this._includeOtherSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOtherSubscription = this._includeOtherSubscription;
    }
    if (this._includeRecurring !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRecurring = this._includeRecurring;
    }
    if (this._includeRefund !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRefund = this._includeRefund;
    }
    if (this._includeSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubscription = this._includeSubscription;
    }
    if (this._includeSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSupport = this._includeSupport;
    }
    if (this._includeTax !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTax = this._includeTax;
    }
    if (this._includeUpfront !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUpfront = this._includeUpfront;
    }
    if (this._useAmortized !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAmortized = this._useAmortized;
    }
    if (this._useBlended !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlended = this._useBlended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CostTypesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeCredit = undefined;
      this._includeDiscount = undefined;
      this._includeOtherSubscription = undefined;
      this._includeRecurring = undefined;
      this._includeRefund = undefined;
      this._includeSubscription = undefined;
      this._includeSupport = undefined;
      this._includeTax = undefined;
      this._includeUpfront = undefined;
      this._useAmortized = undefined;
      this._useBlended = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeCredit = value.includeCredit;
      this._includeDiscount = value.includeDiscount;
      this._includeOtherSubscription = value.includeOtherSubscription;
      this._includeRecurring = value.includeRecurring;
      this._includeRefund = value.includeRefund;
      this._includeSubscription = value.includeSubscription;
      this._includeSupport = value.includeSupport;
      this._includeTax = value.includeTax;
      this._includeUpfront = value.includeUpfront;
      this._useAmortized = value.useAmortized;
      this._useBlended = value.useBlended;
    }
  }

  // include_credit - computed: false, optional: true, required: false
  private _includeCredit?: boolean | cdktn.IResolvable; 
  public get includeCredit() {
    return this.getBooleanAttribute('include_credit');
  }
  public set includeCredit(value: boolean | cdktn.IResolvable) {
    this._includeCredit = value;
  }
  public resetIncludeCredit() {
    this._includeCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCreditInput() {
    return this._includeCredit;
  }

  // include_discount - computed: false, optional: true, required: false
  private _includeDiscount?: boolean | cdktn.IResolvable; 
  public get includeDiscount() {
    return this.getBooleanAttribute('include_discount');
  }
  public set includeDiscount(value: boolean | cdktn.IResolvable) {
    this._includeDiscount = value;
  }
  public resetIncludeDiscount() {
    this._includeDiscount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDiscountInput() {
    return this._includeDiscount;
  }

  // include_other_subscription - computed: false, optional: true, required: false
  private _includeOtherSubscription?: boolean | cdktn.IResolvable; 
  public get includeOtherSubscription() {
    return this.getBooleanAttribute('include_other_subscription');
  }
  public set includeOtherSubscription(value: boolean | cdktn.IResolvable) {
    this._includeOtherSubscription = value;
  }
  public resetIncludeOtherSubscription() {
    this._includeOtherSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOtherSubscriptionInput() {
    return this._includeOtherSubscription;
  }

  // include_recurring - computed: false, optional: true, required: false
  private _includeRecurring?: boolean | cdktn.IResolvable; 
  public get includeRecurring() {
    return this.getBooleanAttribute('include_recurring');
  }
  public set includeRecurring(value: boolean | cdktn.IResolvable) {
    this._includeRecurring = value;
  }
  public resetIncludeRecurring() {
    this._includeRecurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRecurringInput() {
    return this._includeRecurring;
  }

  // include_refund - computed: false, optional: true, required: false
  private _includeRefund?: boolean | cdktn.IResolvable; 
  public get includeRefund() {
    return this.getBooleanAttribute('include_refund');
  }
  public set includeRefund(value: boolean | cdktn.IResolvable) {
    this._includeRefund = value;
  }
  public resetIncludeRefund() {
    this._includeRefund = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRefundInput() {
    return this._includeRefund;
  }

  // include_subscription - computed: false, optional: true, required: false
  private _includeSubscription?: boolean | cdktn.IResolvable; 
  public get includeSubscription() {
    return this.getBooleanAttribute('include_subscription');
  }
  public set includeSubscription(value: boolean | cdktn.IResolvable) {
    this._includeSubscription = value;
  }
  public resetIncludeSubscription() {
    this._includeSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubscriptionInput() {
    return this._includeSubscription;
  }

  // include_support - computed: false, optional: true, required: false
  private _includeSupport?: boolean | cdktn.IResolvable; 
  public get includeSupport() {
    return this.getBooleanAttribute('include_support');
  }
  public set includeSupport(value: boolean | cdktn.IResolvable) {
    this._includeSupport = value;
  }
  public resetIncludeSupport() {
    this._includeSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSupportInput() {
    return this._includeSupport;
  }

  // include_tax - computed: false, optional: true, required: false
  private _includeTax?: boolean | cdktn.IResolvable; 
  public get includeTax() {
    return this.getBooleanAttribute('include_tax');
  }
  public set includeTax(value: boolean | cdktn.IResolvable) {
    this._includeTax = value;
  }
  public resetIncludeTax() {
    this._includeTax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTaxInput() {
    return this._includeTax;
  }

  // include_upfront - computed: false, optional: true, required: false
  private _includeUpfront?: boolean | cdktn.IResolvable; 
  public get includeUpfront() {
    return this.getBooleanAttribute('include_upfront');
  }
  public set includeUpfront(value: boolean | cdktn.IResolvable) {
    this._includeUpfront = value;
  }
  public resetIncludeUpfront() {
    this._includeUpfront = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUpfrontInput() {
    return this._includeUpfront;
  }

  // use_amortized - computed: false, optional: true, required: false
  private _useAmortized?: boolean | cdktn.IResolvable; 
  public get useAmortized() {
    return this.getBooleanAttribute('use_amortized');
  }
  public set useAmortized(value: boolean | cdktn.IResolvable) {
    this._useAmortized = value;
  }
  public resetUseAmortized() {
    this._useAmortized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAmortizedInput() {
    return this._useAmortized;
  }

  // use_blended - computed: false, optional: true, required: false
  private _useBlended?: boolean | cdktn.IResolvable; 
  public get useBlended() {
    return this.getBooleanAttribute('use_blended');
  }
  public set useBlended(value: boolean | cdktn.IResolvable) {
    this._useBlended = value;
  }
  public resetUseBlended() {
    this._useBlended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlendedInput() {
    return this._useBlended;
  }
}
export interface FilterExpressionAndAndCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndAndCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndAndCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndAndCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndAndDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionAndAndDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndAndDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndAndDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndAndProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionAndAndCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionAndAndDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionAndAndTagsProperty;
}
export class FilterExpressionAndAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionAndAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionAndAndCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionAndAndCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionAndAndDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionAndAndDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionAndAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionAndAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionAndAndPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionAndAndProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionAndAndPropertyOutputReference {
    return new FilterExpressionAndAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionAndCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionAndDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndNotCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndNotCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndNotCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndNotCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndNotDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionAndNotDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndNotDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndNotDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndNotProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionAndNotCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionAndNotDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionAndNotTagsProperty;
}
export class FilterExpressionAndNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionAndNotCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionAndNotCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionAndNotDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionAndNotDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionAndNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionAndNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface FilterExpressionAndOrCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndOrCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndOrCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndOrCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndOrDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionAndOrDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndOrDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndOrDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndOrProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionAndOrCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionAndOrDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionAndOrTagsProperty;
}
export class FilterExpressionAndOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionAndOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionAndOrCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionAndOrCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionAndOrDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionAndOrDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionAndOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionAndOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionAndOrPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionAndOrProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionAndOrPropertyOutputReference {
    return new FilterExpressionAndOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionAndProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#and TfBudget#and}
  */
  readonly and?: FilterExpressionAndAndProperty[] | cdktn.IResolvable;
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionAndCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionAndDimensionsProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#not TfBudget#not}
  */
  readonly not?: FilterExpressionAndNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#or TfBudget#or}
  */
  readonly or?: FilterExpressionAndOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionAndTagsProperty;
}
export class FilterExpressionAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new FilterExpressionAndAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: FilterExpressionAndAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionAndCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionAndCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionAndDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionAndDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new FilterExpressionAndNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: FilterExpressionAndNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new FilterExpressionAndOrPropertyList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: FilterExpressionAndOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionAndPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionAndProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionAndPropertyOutputReference {
    return new FilterExpressionAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotAndCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotAndCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotAndCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotAndCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotAndDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionNotAndDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotAndDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotAndDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotAndProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionNotAndCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionNotAndDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionNotAndTagsProperty;
}
export class FilterExpressionNotAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionNotAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionNotAndCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionNotAndCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionNotAndDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionNotAndDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionNotAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionNotAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionNotAndPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionNotAndProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionNotAndPropertyOutputReference {
    return new FilterExpressionNotAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionNotCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionNotDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotNotCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotNotCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotNotCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotNotCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotNotDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionNotNotDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotNotDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotNotDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotNotProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionNotNotCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionNotNotDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionNotNotTagsProperty;
}
export class FilterExpressionNotNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionNotNotCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionNotNotCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionNotNotDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionNotNotDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionNotNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionNotNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface FilterExpressionNotOrCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotOrCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotOrCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotOrCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotOrDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionNotOrDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotOrDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotOrDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotOrProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionNotOrCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionNotOrDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionNotOrTagsProperty;
}
export class FilterExpressionNotOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionNotOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionNotOrCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionNotOrCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionNotOrDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionNotOrDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionNotOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionNotOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionNotOrPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionNotOrProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionNotOrPropertyOutputReference {
    return new FilterExpressionNotOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionNotProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#and TfBudget#and}
  */
  readonly and?: FilterExpressionNotAndProperty[] | cdktn.IResolvable;
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionNotCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionNotDimensionsProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#not TfBudget#not}
  */
  readonly not?: FilterExpressionNotNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#or TfBudget#or}
  */
  readonly or?: FilterExpressionNotOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionNotTagsProperty;
}
export class FilterExpressionNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new FilterExpressionNotAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: FilterExpressionNotAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionNotCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionNotCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionNotDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionNotDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new FilterExpressionNotNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: FilterExpressionNotNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new FilterExpressionNotOrPropertyList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: FilterExpressionNotOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface FilterExpressionOrAndCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrAndCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrAndCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrAndCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrAndDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionOrAndDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrAndDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrAndDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrAndProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionOrAndCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionOrAndDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionOrAndTagsProperty;
}
export class FilterExpressionOrAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionOrAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionOrAndCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionOrAndCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionOrAndDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionOrAndDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionOrAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionOrAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionOrAndPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionOrAndProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionOrAndPropertyOutputReference {
    return new FilterExpressionOrAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionOrCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionOrDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrNotCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrNotCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrNotCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrNotCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrNotDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionOrNotDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrNotDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrNotDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrNotProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionOrNotCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionOrNotDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionOrNotTagsProperty;
}
export class FilterExpressionOrNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionOrNotCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionOrNotCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionOrNotDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionOrNotDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionOrNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionOrNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface FilterExpressionOrOrCostCategoriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrOrCostCategoriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrOrCostCategoriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrOrCostCategoriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrOrDimensionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values: string[];
}
export class FilterExpressionOrOrDimensionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrOrDimensionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrOrDimensionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrOrProperty {
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionOrOrCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionOrOrDimensionsProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionOrOrTagsProperty;
}
export class FilterExpressionOrOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionOrOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionOrOrCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionOrOrCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionOrOrDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionOrOrDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionOrOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionOrOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionOrOrPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionOrOrProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionOrOrPropertyOutputReference {
    return new FilterExpressionOrOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionOrProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#and TfBudget#and}
  */
  readonly and?: FilterExpressionOrAndProperty[] | cdktn.IResolvable;
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionOrCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionOrDimensionsProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#not TfBudget#not}
  */
  readonly not?: FilterExpressionOrNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#or TfBudget#or}
  */
  readonly or?: FilterExpressionOrOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionOrTagsProperty;
}
export class FilterExpressionOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterExpressionOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new FilterExpressionOrAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: FilterExpressionOrAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionOrCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionOrCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionOrDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionOrDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new FilterExpressionOrNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: FilterExpressionOrNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new FilterExpressionOrOrPropertyList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: FilterExpressionOrOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FilterExpressionOrPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterExpressionOrProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterExpressionOrPropertyOutputReference {
    return new FilterExpressionOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterExpressionTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#key TfBudget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#match_options TfBudget#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#values TfBudget#values}
  */
  readonly values?: string[];
}
export class FilterExpressionTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return this.getListAttribute('match_options');
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface FilterExpressionProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#and TfBudget#and}
  */
  readonly and?: FilterExpressionAndProperty[] | cdktn.IResolvable;
  /**
  * cost_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#cost_categories TfBudget#cost_categories}
  */
  readonly costCategories?: FilterExpressionCostCategoriesProperty;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#dimensions TfBudget#dimensions}
  */
  readonly dimensions?: FilterExpressionDimensionsProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#not TfBudget#not}
  */
  readonly not?: FilterExpressionNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#or TfBudget#or}
  */
  readonly or?: FilterExpressionOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#tags TfBudget#tags}
  */
  readonly tags?: FilterExpressionTagsProperty;
}
export class FilterExpressionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterExpressionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategories = this._costCategories?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterExpressionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategories.internalValue = undefined;
      this._dimensions.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategories.internalValue = value.costCategories;
      this._dimensions.internalValue = value.dimensions;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new FilterExpressionAndPropertyList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: FilterExpressionAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_categories - computed: false, optional: true, required: false
  private _costCategories = new FilterExpressionCostCategoriesPropertyOutputReference(this, "cost_categories");
  public get costCategories() {
    return this._costCategories;
  }
  public putCostCategories(value: FilterExpressionCostCategoriesProperty) {
    this._costCategories.internalValue = value;
  }
  public resetCostCategories() {
    this._costCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoriesInput() {
    return this._costCategories.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new FilterExpressionDimensionsPropertyOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: FilterExpressionDimensionsProperty) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new FilterExpressionNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: FilterExpressionNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new FilterExpressionOrPropertyList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: FilterExpressionOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FilterExpressionTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: FilterExpressionTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface NotificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#comparison_operator TfBudget#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#notification_type TfBudget#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#subscriber_email_addresses TfBudget#subscriber_email_addresses}
  */
  readonly subscriberEmailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#subscriber_sns_topic_arns TfBudget#subscriber_sns_topic_arns}
  */
  readonly subscriberSnsTopicArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#threshold TfBudget#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#threshold_type TfBudget#threshold_type}
  */
  readonly thresholdType: string;
}
export class NotificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NotificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    if (this._subscriberEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriberEmailAddresses = this._subscriberEmailAddresses;
    }
    if (this._subscriberSnsTopicArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriberSnsTopicArns = this._subscriberSnsTopicArns;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._notificationType = undefined;
      this._subscriberEmailAddresses = undefined;
      this._subscriberSnsTopicArns = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._notificationType = value.notificationType;
      this._subscriberEmailAddresses = value.subscriberEmailAddresses;
      this._subscriberSnsTopicArns = value.subscriberSnsTopicArns;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // subscriber_email_addresses - computed: false, optional: true, required: false
  private _subscriberEmailAddresses?: string[]; 
  public get subscriberEmailAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('subscriber_email_addresses'));
  }
  public set subscriberEmailAddresses(value: string[]) {
    this._subscriberEmailAddresses = value;
  }
  public resetSubscriberEmailAddresses() {
    this._subscriberEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberEmailAddressesInput() {
    return this._subscriberEmailAddresses;
  }

  // subscriber_sns_topic_arns - computed: false, optional: true, required: false
  private _subscriberSnsTopicArns?: string[]; 
  public get subscriberSnsTopicArns() {
    return cdktn.Fn.tolist(this.getListAttribute('subscriber_sns_topic_arns'));
  }
  public set subscriberSnsTopicArns(value: string[]) {
    this._subscriberSnsTopicArns = value;
  }
  public resetSubscriberSnsTopicArns() {
    this._subscriberSnsTopicArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberSnsTopicArnsInput() {
    return this._subscriberSnsTopicArns;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}

export class NotificationPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationProperty[] | cdktn.IResolvable

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
  public get(index: number): NotificationPropertyOutputReference {
    return new NotificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlannedLimitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#amount TfBudget#amount}
  */
  readonly amount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#start_time TfBudget#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget#unit TfBudget#unit}
  */
  readonly unit: string;
}
export class PlannedLimitPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlannedLimitProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlannedLimitProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._startTime = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._startTime = value.startTime;
      this._unit = value.unit;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: string; 
  public get amount() {
    return this.getStringAttribute('amount');
  }
  public set amount(value: string) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class PlannedLimitPropertyList extends cdktn.ComplexList {
  public internalValue? : PlannedLimitProperty[] | cdktn.IResolvable

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
  public get(index: number): PlannedLimitPropertyOutputReference {
    return new PlannedLimitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
