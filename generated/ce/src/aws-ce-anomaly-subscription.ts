// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCeAnomalySubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#account_id AwsCeAnomalySubscription#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#frequency AwsCeAnomalySubscription#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#id AwsCeAnomalySubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#monitor_arn_list AwsCeAnomalySubscription#monitor_arn_list}
  */
  readonly monitorArnList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#name AwsCeAnomalySubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags AwsCeAnomalySubscription#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags_all AwsCeAnomalySubscription#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * subscriber block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#subscriber AwsCeAnomalySubscription#subscriber}
  */
  readonly subscriber: AwsCeAnomalySubscription.SubscriberProperty[] | cdktn.IResolvable;
  /**
  * threshold_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#threshold_expression AwsCeAnomalySubscription#threshold_expression}
  */
  readonly thresholdExpression?: AwsCeAnomalySubscription.ThresholdExpressionProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription aws_ce_anomaly_subscription}
*/
export class AwsCeAnomalySubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ce_anomaly_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCeAnomalySubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCeAnomalySubscription to import
  * @param importFromId The id of the existing AwsCeAnomalySubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCeAnomalySubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ce_anomaly_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription aws_ce_anomaly_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCeAnomalySubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCeAnomalySubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ce_anomaly_subscription',
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
    this._frequency = config.frequency;
    this._id = config.id;
    this._monitorArnList = config.monitorArnList;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._subscriber.internalValue = config.subscriber;
    this._thresholdExpression.internalValue = config.thresholdExpression;
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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // monitor_arn_list - computed: false, optional: false, required: true
  private _monitorArnList?: string[]; 
  public get monitorArnList() {
    return this.getListAttribute('monitor_arn_list');
  }
  public set monitorArnList(value: string[]) {
    this._monitorArnList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorArnListInput() {
    return this._monitorArnList;
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

  // subscriber - computed: false, optional: false, required: true
  private _subscriber = new AwsCeAnomalySubscription.SubscriberPropertyList(this, "subscriber", true);
  public get subscriber() {
    return this._subscriber;
  }
  public putSubscriber(value: AwsCeAnomalySubscription.SubscriberProperty[] | cdktn.IResolvable) {
    this._subscriber.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber.internalValue;
  }

  // threshold_expression - computed: false, optional: true, required: false
  private _thresholdExpression = new AwsCeAnomalySubscription.ThresholdExpressionPropertyOutputReference(this, "threshold_expression");
  public get thresholdExpression() {
    return this._thresholdExpression;
  }
  public putThresholdExpression(value: AwsCeAnomalySubscription.ThresholdExpressionProperty) {
    this._thresholdExpression.internalValue = value;
  }
  public resetThresholdExpression() {
    this._thresholdExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExpressionInput() {
    return this._thresholdExpression.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      frequency: cdktn.stringToTerraform(this._frequency),
      id: cdktn.stringToTerraform(this._id),
      monitor_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._monitorArnList),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      subscriber: cdktn.listMapper(awsCeAnomalySubscriptionSubscriberPropertyToTerraform, true)(this._subscriber.internalValue),
      threshold_expression: awsCeAnomalySubscriptionThresholdExpressionPropertyToTerraform(this._thresholdExpression.internalValue),
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
      frequency: {
        value: cdktn.stringToHclTerraform(this._frequency),
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
      monitor_arn_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._monitorArnList),
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
      subscriber: {
        value: cdktn.listMapperHcl(awsCeAnomalySubscriptionSubscriberPropertyToHclTerraform, true)(this._subscriber.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCeAnomalySubscription.SubscriberPropertyList",
      },
      threshold_expression: {
        value: awsCeAnomalySubscriptionThresholdExpressionPropertyToHclTerraform(this._thresholdExpression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCeAnomalySubscription.ThresholdExpressionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCeAnomalySubscriptionSubscriberPropertyToTerraform(struct?: AwsCeAnomalySubscription.SubscriberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsCeAnomalySubscriptionSubscriberPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.SubscriberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
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


export function awsCeAnomalySubscriptionThresholdExpressionAndCostCategoryPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndCostCategoryProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionAndCostCategoryPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndCostCategoryProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionAndDimensionPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndDimensionProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionAndDimensionPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndDimensionProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionAndTagsPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndTagsProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionAndTagsPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionAndTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionAndTagsProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionAndPropertyToTerraform(struct?: AwsCeAnomalySubscription.AndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeAnomalySubscriptionThresholdExpressionAndCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeAnomalySubscriptionThresholdExpressionAndDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeAnomalySubscriptionThresholdExpressionAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeAnomalySubscriptionAndPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.AndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeAnomalySubscriptionThresholdExpressionAndCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionAndCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeAnomalySubscriptionThresholdExpressionAndDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionAndDimensionPropertyList",
    },
    tags: {
      value: awsCeAnomalySubscriptionThresholdExpressionAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionCostCategoryPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionCostCategoryProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionCostCategoryPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionCostCategoryProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionDimensionPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionDimensionProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionDimensionPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionDimensionProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionNotCostCategoryPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotCostCategoryProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionNotCostCategoryPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotCostCategoryProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionNotDimensionPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotDimensionProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionNotDimensionPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotDimensionProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionNotTagsPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotTagsProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionNotTagsPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionNotTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionNotTagsProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionNotPropertyToTerraform(struct?: AwsCeAnomalySubscription.NotPropertyOutputReference | AwsCeAnomalySubscription.NotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeAnomalySubscriptionThresholdExpressionNotCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeAnomalySubscriptionThresholdExpressionNotDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeAnomalySubscriptionThresholdExpressionNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeAnomalySubscriptionNotPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.NotPropertyOutputReference | AwsCeAnomalySubscription.NotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeAnomalySubscriptionThresholdExpressionNotCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionNotCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeAnomalySubscriptionThresholdExpressionNotDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionNotDimensionPropertyList",
    },
    tags: {
      value: awsCeAnomalySubscriptionThresholdExpressionNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionOrCostCategoryPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrCostCategoryProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionOrCostCategoryPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrCostCategoryPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrCostCategoryProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionOrDimensionPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrDimensionProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionOrDimensionPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrDimensionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrDimensionProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionOrTagsPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrTagsProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionOrTagsPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionOrTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionOrTagsProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionOrPropertyToTerraform(struct?: AwsCeAnomalySubscription.OrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeAnomalySubscriptionThresholdExpressionOrCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeAnomalySubscriptionThresholdExpressionOrDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeAnomalySubscriptionThresholdExpressionOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeAnomalySubscriptionOrPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.OrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeAnomalySubscriptionThresholdExpressionOrCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionOrCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeAnomalySubscriptionThresholdExpressionOrDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionOrDimensionPropertyList",
    },
    tags: {
      value: awsCeAnomalySubscriptionThresholdExpressionOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionTagsPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionTagsProperty): any {
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


export function awsCeAnomalySubscriptionThresholdExpressionTagsPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionTagsPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionTagsProperty): any {
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
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeAnomalySubscriptionThresholdExpressionPropertyToTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsCeAnomalySubscriptionAndPropertyToTerraform, true)(struct!.and),
    cost_category: awsCeAnomalySubscriptionThresholdExpressionCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeAnomalySubscriptionThresholdExpressionDimensionPropertyToTerraform(struct!.dimension),
    not: awsCeAnomalySubscriptionNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(awsCeAnomalySubscriptionOrPropertyToTerraform, true)(struct!.or),
    tags: awsCeAnomalySubscriptionThresholdExpressionTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeAnomalySubscriptionThresholdExpressionPropertyToHclTerraform(struct?: AwsCeAnomalySubscription.ThresholdExpressionPropertyOutputReference | AwsCeAnomalySubscription.ThresholdExpressionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsCeAnomalySubscriptionAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "AndPropertyList",
    },
    cost_category: {
      value: awsCeAnomalySubscriptionThresholdExpressionCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeAnomalySubscriptionThresholdExpressionDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionDimensionPropertyList",
    },
    not: {
      value: awsCeAnomalySubscriptionNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "NotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(awsCeAnomalySubscriptionOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "OrPropertyList",
    },
    tags: {
      value: awsCeAnomalySubscriptionThresholdExpressionTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ThresholdExpressionTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCeAnomalySubscription {
export interface SubscriberProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#address AwsCeAnomalySubscription#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#type AwsCeAnomalySubscription#type}
  */
  readonly type: string;
}
export class SubscriberPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriberProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriberProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._type = value.type;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

export class SubscriberPropertyList extends cdktn.ComplexList {
  public internalValue? : SubscriberProperty[] | cdktn.IResolvable

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
  public get(index: number): SubscriberPropertyOutputReference {
    return new SubscriberPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThresholdExpressionAndCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionAndCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionAndCostCategoryProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionAndCostCategoryProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionAndDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionAndDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionAndDimensionProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionAndDimensionProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionAndTagsProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionAndTagsProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface AndProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#cost_category AwsCeAnomalySubscription#cost_category}
  */
  readonly costCategory?: ThresholdExpressionAndCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#dimension AwsCeAnomalySubscription#dimension}
  */
  readonly dimension?: ThresholdExpressionAndDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags AwsCeAnomalySubscription#tags}
  */
  readonly tags?: ThresholdExpressionAndTagsProperty;
}
export class AndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new ThresholdExpressionAndCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: ThresholdExpressionAndCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ThresholdExpressionAndDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ThresholdExpressionAndDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ThresholdExpressionAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: ThresholdExpressionAndTagsProperty) {
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

export class AndPropertyList extends cdktn.ComplexList {
  public internalValue? : AndProperty[] | cdktn.IResolvable

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
  public get(index: number): AndPropertyOutputReference {
    return new AndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThresholdExpressionCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionCostCategoryProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionCostCategoryProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionDimensionProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionDimensionProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionNotCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionNotCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionNotCostCategoryProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionNotCostCategoryProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionNotDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionNotDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionNotDimensionProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionNotDimensionProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionNotTagsProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionNotTagsProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface NotProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#cost_category AwsCeAnomalySubscription#cost_category}
  */
  readonly costCategory?: ThresholdExpressionNotCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#dimension AwsCeAnomalySubscription#dimension}
  */
  readonly dimension?: ThresholdExpressionNotDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags AwsCeAnomalySubscription#tags}
  */
  readonly tags?: ThresholdExpressionNotTagsProperty;
}
export class NotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new ThresholdExpressionNotCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: ThresholdExpressionNotCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ThresholdExpressionNotDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ThresholdExpressionNotDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ThresholdExpressionNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: ThresholdExpressionNotTagsProperty) {
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
export interface ThresholdExpressionOrCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionOrCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionOrCostCategoryProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionOrCostCategoryProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionOrDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionOrDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionOrDimensionProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionOrDimensionProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionOrTagsProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionOrTagsProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface OrProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#cost_category AwsCeAnomalySubscription#cost_category}
  */
  readonly costCategory?: ThresholdExpressionOrCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#dimension AwsCeAnomalySubscription#dimension}
  */
  readonly dimension?: ThresholdExpressionOrDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags AwsCeAnomalySubscription#tags}
  */
  readonly tags?: ThresholdExpressionOrTagsProperty;
}
export class OrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new ThresholdExpressionOrCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: ThresholdExpressionOrCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ThresholdExpressionOrDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ThresholdExpressionOrDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ThresholdExpressionOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: ThresholdExpressionOrTagsProperty) {
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

export class OrPropertyList extends cdktn.ComplexList {
  public internalValue? : OrProperty[] | cdktn.IResolvable

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
  public get(index: number): OrPropertyOutputReference {
    return new OrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThresholdExpressionTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#key AwsCeAnomalySubscription#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#match_options AwsCeAnomalySubscription#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#values AwsCeAnomalySubscription#values}
  */
  readonly values?: string[];
}
export class ThresholdExpressionTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionTagsProperty | undefined {
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

  public set internalValue(value: ThresholdExpressionTagsProperty | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface ThresholdExpressionProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#and AwsCeAnomalySubscription#and}
  */
  readonly and?: AndProperty[] | cdktn.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#cost_category AwsCeAnomalySubscription#cost_category}
  */
  readonly costCategory?: ThresholdExpressionCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#dimension AwsCeAnomalySubscription#dimension}
  */
  readonly dimension?: ThresholdExpressionDimensionProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#not AwsCeAnomalySubscription#not}
  */
  readonly not?: NotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#or AwsCeAnomalySubscription#or}
  */
  readonly or?: OrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_anomaly_subscription#tags AwsCeAnomalySubscription#tags}
  */
  readonly tags?: ThresholdExpressionTagsProperty;
}
export class ThresholdExpressionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThresholdExpressionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
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

  public set internalValue(value: ThresholdExpressionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new AndPropertyList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: AndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new ThresholdExpressionCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: ThresholdExpressionCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new ThresholdExpressionDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ThresholdExpressionDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new NotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: NotProperty) {
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
  private _or = new OrPropertyList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: OrProperty[] | cdktn.IResolvable) {
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
  private _tags = new ThresholdExpressionTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: ThresholdExpressionTagsProperty) {
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
}
