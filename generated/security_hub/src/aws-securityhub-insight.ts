// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsInsightConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#group_by_attribute AwsInsight#group_by_attribute}
  */
  readonly groupByAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#id AwsInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#name AwsInsight#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#region AwsInsight#region}
  */
  readonly region?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#filters AwsInsight#filters}
  */
  readonly filters: AwsInsight.FiltersProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight aws_securityhub_insight}
*/
export class AwsInsight extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsInsight resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsInsight to import
  * @param importFromId The id of the existing AwsInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight aws_securityhub_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsInsightConfig
  */
  public constructor(scope: Construct, id: string, config: AwsInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_insight',
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
    this._groupByAttribute = config.groupByAttribute;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_by_attribute - computed: false, optional: false, required: true
  private _groupByAttribute?: string; 
  public get groupByAttribute() {
    return this.getStringAttribute('group_by_attribute');
  }
  public set groupByAttribute(value: string) {
    this._groupByAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributeInput() {
    return this._groupByAttribute;
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

  // filters - computed: false, optional: false, required: true
  private _filters = new AwsInsight.FiltersPropertyOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: AwsInsight.FiltersProperty) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by_attribute: cdktn.stringToTerraform(this._groupByAttribute),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      filters: awsInsightFiltersPropertyToTerraform(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_by_attribute: {
        value: cdktn.stringToHclTerraform(this._groupByAttribute),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: awsInsightFiltersPropertyToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsInsight.FiltersPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsInsightAwsAccountIdPropertyToTerraform(struct?: AwsInsight.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightAwsAccountIdPropertyToHclTerraform(struct?: AwsInsight.AwsAccountIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightAwsAccountNamePropertyToTerraform(struct?: AwsInsight.AwsAccountNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightAwsAccountNamePropertyToHclTerraform(struct?: AwsInsight.AwsAccountNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightCompanyNamePropertyToTerraform(struct?: AwsInsight.CompanyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightCompanyNamePropertyToHclTerraform(struct?: AwsInsight.CompanyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightComplianceAssociatedStandardsIdPropertyToTerraform(struct?: AwsInsight.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightComplianceAssociatedStandardsIdPropertyToHclTerraform(struct?: AwsInsight.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightComplianceSecurityControlIdPropertyToTerraform(struct?: AwsInsight.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightComplianceSecurityControlIdPropertyToHclTerraform(struct?: AwsInsight.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightComplianceSecurityControlParametersNamePropertyToTerraform(struct?: AwsInsight.ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightComplianceSecurityControlParametersNamePropertyToHclTerraform(struct?: AwsInsight.ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightComplianceSecurityControlParametersValuePropertyToTerraform(struct?: AwsInsight.ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightComplianceSecurityControlParametersValuePropertyToHclTerraform(struct?: AwsInsight.ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightComplianceStatusPropertyToTerraform(struct?: AwsInsight.ComplianceStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightComplianceStatusPropertyToHclTerraform(struct?: AwsInsight.ComplianceStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightConfidencePropertyToTerraform(struct?: AwsInsight.ConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightConfidencePropertyToHclTerraform(struct?: AwsInsight.ConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightFiltersCreatedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersCreatedAtDateRangePropertyOutputReference | AwsInsight.FiltersCreatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersCreatedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersCreatedAtDateRangePropertyOutputReference | AwsInsight.FiltersCreatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightCreatedAtPropertyToTerraform(struct?: AwsInsight.CreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersCreatedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightCreatedAtPropertyToHclTerraform(struct?: AwsInsight.CreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersCreatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersCreatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightCriticalityPropertyToTerraform(struct?: AwsInsight.CriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightCriticalityPropertyToHclTerraform(struct?: AwsInsight.CriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightDescriptionPropertyToTerraform(struct?: AwsInsight.DescriptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightDescriptionPropertyToHclTerraform(struct?: AwsInsight.DescriptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFindingProviderFieldsConfidencePropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightFindingProviderFieldsConfidencePropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsConfidenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightFindingProviderFieldsCriticalityPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsCriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightFindingProviderFieldsCriticalityPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsCriticalityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightFindingProviderFieldsRelatedFindingsIdPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightFindingProviderFieldsRelatedFindingsIdPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFindingProviderFieldsSeverityLabelPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightFindingProviderFieldsSeverityLabelPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFindingProviderFieldsSeverityOriginalPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightFindingProviderFieldsSeverityOriginalPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFindingProviderFieldsTypesPropertyToTerraform(struct?: AwsInsight.FindingProviderFieldsTypesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightFindingProviderFieldsTypesPropertyToHclTerraform(struct?: AwsInsight.FindingProviderFieldsTypesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersFirstObservedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersFirstObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersFirstObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersFirstObservedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersFirstObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersFirstObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightFirstObservedAtPropertyToTerraform(struct?: AwsInsight.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersFirstObservedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightFirstObservedAtPropertyToHclTerraform(struct?: AwsInsight.FirstObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersFirstObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersFirstObservedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightGeneratorIdPropertyToTerraform(struct?: AwsInsight.GeneratorIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightGeneratorIdPropertyToHclTerraform(struct?: AwsInsight.GeneratorIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightIdPropertyToTerraform(struct?: AwsInsight.IdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightIdPropertyToHclTerraform(struct?: AwsInsight.IdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightKeywordPropertyToTerraform(struct?: AwsInsight.KeywordProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightKeywordPropertyToHclTerraform(struct?: AwsInsight.KeywordProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsInsightFiltersLastObservedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersLastObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersLastObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersLastObservedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersLastObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersLastObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightLastObservedAtPropertyToTerraform(struct?: AwsInsight.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersLastObservedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightLastObservedAtPropertyToHclTerraform(struct?: AwsInsight.LastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersLastObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersLastObservedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightMalwareNamePropertyToTerraform(struct?: AwsInsight.MalwareNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightMalwareNamePropertyToHclTerraform(struct?: AwsInsight.MalwareNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightMalwarePathPropertyToTerraform(struct?: AwsInsight.MalwarePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightMalwarePathPropertyToHclTerraform(struct?: AwsInsight.MalwarePathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightMalwareStatePropertyToTerraform(struct?: AwsInsight.MalwareStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightMalwareStatePropertyToHclTerraform(struct?: AwsInsight.MalwareStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightMalwareTypePropertyToTerraform(struct?: AwsInsight.MalwareTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightMalwareTypePropertyToHclTerraform(struct?: AwsInsight.MalwareTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkDestinationDomainPropertyToTerraform(struct?: AwsInsight.NetworkDestinationDomainProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNetworkDestinationDomainPropertyToHclTerraform(struct?: AwsInsight.NetworkDestinationDomainProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkDestinationIpv4PropertyToTerraform(struct?: AwsInsight.NetworkDestinationIpv4Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightNetworkDestinationIpv4PropertyToHclTerraform(struct?: AwsInsight.NetworkDestinationIpv4Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNetworkDestinationIpv6PropertyToTerraform(struct?: AwsInsight.NetworkDestinationIpv6Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightNetworkDestinationIpv6PropertyToHclTerraform(struct?: AwsInsight.NetworkDestinationIpv6Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNetworkDestinationPortPropertyToTerraform(struct?: AwsInsight.NetworkDestinationPortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightNetworkDestinationPortPropertyToHclTerraform(struct?: AwsInsight.NetworkDestinationPortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNetworkDirectionPropertyToTerraform(struct?: AwsInsight.NetworkDirectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNetworkDirectionPropertyToHclTerraform(struct?: AwsInsight.NetworkDirectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkProtocolPropertyToTerraform(struct?: AwsInsight.NetworkProtocolProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNetworkProtocolPropertyToHclTerraform(struct?: AwsInsight.NetworkProtocolProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkSourceDomainPropertyToTerraform(struct?: AwsInsight.NetworkSourceDomainProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNetworkSourceDomainPropertyToHclTerraform(struct?: AwsInsight.NetworkSourceDomainProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkSourceIpv4PropertyToTerraform(struct?: AwsInsight.NetworkSourceIpv4Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightNetworkSourceIpv4PropertyToHclTerraform(struct?: AwsInsight.NetworkSourceIpv4Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNetworkSourceIpv6PropertyToTerraform(struct?: AwsInsight.NetworkSourceIpv6Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightNetworkSourceIpv6PropertyToHclTerraform(struct?: AwsInsight.NetworkSourceIpv6Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNetworkSourceMacPropertyToTerraform(struct?: AwsInsight.NetworkSourceMacProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNetworkSourceMacPropertyToHclTerraform(struct?: AwsInsight.NetworkSourceMacProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightNetworkSourcePortPropertyToTerraform(struct?: AwsInsight.NetworkSourcePortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightNetworkSourcePortPropertyToHclTerraform(struct?: AwsInsight.NetworkSourcePortProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNoteTextPropertyToTerraform(struct?: AwsInsight.NoteTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNoteTextPropertyToHclTerraform(struct?: AwsInsight.NoteTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersNoteUpdatedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersNoteUpdatedAtDateRangePropertyOutputReference | AwsInsight.FiltersNoteUpdatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersNoteUpdatedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersNoteUpdatedAtDateRangePropertyOutputReference | AwsInsight.FiltersNoteUpdatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNoteUpdatedAtPropertyToTerraform(struct?: AwsInsight.NoteUpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersNoteUpdatedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightNoteUpdatedAtPropertyToHclTerraform(struct?: AwsInsight.NoteUpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersNoteUpdatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersNoteUpdatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightNoteUpdatedByPropertyToTerraform(struct?: AwsInsight.NoteUpdatedByProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightNoteUpdatedByPropertyToHclTerraform(struct?: AwsInsight.NoteUpdatedByProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersProcessLaunchedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersProcessLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersProcessLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersProcessLaunchedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersProcessLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersProcessLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightProcessLaunchedAtPropertyToTerraform(struct?: AwsInsight.ProcessLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersProcessLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightProcessLaunchedAtPropertyToHclTerraform(struct?: AwsInsight.ProcessLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersProcessLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersProcessLaunchedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightProcessNamePropertyToTerraform(struct?: AwsInsight.ProcessNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightProcessNamePropertyToHclTerraform(struct?: AwsInsight.ProcessNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightProcessParentPidPropertyToTerraform(struct?: AwsInsight.ProcessParentPidProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightProcessParentPidPropertyToHclTerraform(struct?: AwsInsight.ProcessParentPidProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightProcessPathPropertyToTerraform(struct?: AwsInsight.ProcessPathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightProcessPathPropertyToHclTerraform(struct?: AwsInsight.ProcessPathProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightProcessPidPropertyToTerraform(struct?: AwsInsight.ProcessPidProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function awsInsightProcessPidPropertyToHclTerraform(struct?: AwsInsight.ProcessPidProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightFiltersProcessTerminatedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersProcessTerminatedAtDateRangePropertyOutputReference | AwsInsight.FiltersProcessTerminatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersProcessTerminatedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersProcessTerminatedAtDateRangePropertyOutputReference | AwsInsight.FiltersProcessTerminatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightProcessTerminatedAtPropertyToTerraform(struct?: AwsInsight.ProcessTerminatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersProcessTerminatedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightProcessTerminatedAtPropertyToHclTerraform(struct?: AwsInsight.ProcessTerminatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersProcessTerminatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersProcessTerminatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightProductArnPropertyToTerraform(struct?: AwsInsight.ProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightProductArnPropertyToHclTerraform(struct?: AwsInsight.ProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightProductFieldsPropertyToTerraform(struct?: AwsInsight.ProductFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightProductFieldsPropertyToHclTerraform(struct?: AwsInsight.ProductFieldsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsInsightProductNamePropertyToTerraform(struct?: AwsInsight.ProductNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightProductNamePropertyToHclTerraform(struct?: AwsInsight.ProductNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightRecommendationTextPropertyToTerraform(struct?: AwsInsight.RecommendationTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightRecommendationTextPropertyToHclTerraform(struct?: AwsInsight.RecommendationTextProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightRecordStatePropertyToTerraform(struct?: AwsInsight.RecordStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightRecordStatePropertyToHclTerraform(struct?: AwsInsight.RecordStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightRelatedFindingsIdPropertyToTerraform(struct?: AwsInsight.RelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightRelatedFindingsIdPropertyToHclTerraform(struct?: AwsInsight.RelatedFindingsIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightRelatedFindingsProductArnPropertyToTerraform(struct?: AwsInsight.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightRelatedFindingsProductArnPropertyToHclTerraform(struct?: AwsInsight.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsEc2InstanceImageIdPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceImageIdPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsEc2InstanceIpv4AddressesPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIpv4AddressesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightResourceAwsEc2InstanceIpv4AddressesPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIpv4AddressesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsEc2InstanceIpv6AddressesPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIpv6AddressesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function awsInsightResourceAwsEc2InstanceIpv6AddressesPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceIpv6AddressesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsEc2InstanceKeyNamePropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceKeyNamePropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsEc2InstanceLaunchedAtPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightResourceAwsEc2InstanceLaunchedAtPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsEc2InstanceSubnetIdPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceSubnetIdPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsEc2InstanceTypePropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceTypePropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsEc2InstanceVpcIdPropertyToTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsEc2InstanceVpcIdPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsIamAccessKeyCreatedAtPropertyToTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightResourceAwsIamAccessKeyCreatedAtPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceAwsIamAccessKeyStatusPropertyToTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsIamAccessKeyStatusPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsIamAccessKeyUserNamePropertyToTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsIamAccessKeyUserNamePropertyToHclTerraform(struct?: AwsInsight.ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsS3BucketOwnerIdPropertyToTerraform(struct?: AwsInsight.ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsS3BucketOwnerIdPropertyToHclTerraform(struct?: AwsInsight.ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceAwsS3BucketOwnerNamePropertyToTerraform(struct?: AwsInsight.ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceAwsS3BucketOwnerNamePropertyToHclTerraform(struct?: AwsInsight.ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceContainerImageIdPropertyToTerraform(struct?: AwsInsight.ResourceContainerImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceContainerImageIdPropertyToHclTerraform(struct?: AwsInsight.ResourceContainerImageIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceContainerImageNamePropertyToTerraform(struct?: AwsInsight.ResourceContainerImageNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceContainerImageNamePropertyToHclTerraform(struct?: AwsInsight.ResourceContainerImageNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersResourceContainerLaunchedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceContainerLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersResourceContainerLaunchedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference | AwsInsight.FiltersResourceContainerLaunchedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceContainerLaunchedAtPropertyToTerraform(struct?: AwsInsight.ResourceContainerLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersResourceContainerLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightResourceContainerLaunchedAtPropertyToHclTerraform(struct?: AwsInsight.ResourceContainerLaunchedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersResourceContainerLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersResourceContainerLaunchedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightResourceContainerNamePropertyToTerraform(struct?: AwsInsight.ResourceContainerNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceContainerNamePropertyToHclTerraform(struct?: AwsInsight.ResourceContainerNameProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceDetailsOtherPropertyToTerraform(struct?: AwsInsight.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceDetailsOtherPropertyToHclTerraform(struct?: AwsInsight.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsInsightResourceIdPropertyToTerraform(struct?: AwsInsight.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceIdPropertyToHclTerraform(struct?: AwsInsight.ResourceIdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourcePartitionPropertyToTerraform(struct?: AwsInsight.ResourcePartitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourcePartitionPropertyToHclTerraform(struct?: AwsInsight.ResourcePartitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceRegionPropertyToTerraform(struct?: AwsInsight.ResourceRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceRegionPropertyToHclTerraform(struct?: AwsInsight.ResourceRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightResourceTagsPropertyToTerraform(struct?: AwsInsight.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceTagsPropertyToHclTerraform(struct?: AwsInsight.ResourceTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsInsightResourceTypePropertyToTerraform(struct?: AwsInsight.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightResourceTypePropertyToHclTerraform(struct?: AwsInsight.ResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightSeverityLabelPropertyToTerraform(struct?: AwsInsight.SeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightSeverityLabelPropertyToHclTerraform(struct?: AwsInsight.SeverityLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightSourceUrlPropertyToTerraform(struct?: AwsInsight.SourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightSourceUrlPropertyToHclTerraform(struct?: AwsInsight.SourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightThreatIntelIndicatorCategoryPropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightThreatIntelIndicatorCategoryPropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference | AwsInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightThreatIntelIndicatorLastObservedAtPropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightThreatIntelIndicatorLastObservedAtPropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightThreatIntelIndicatorSourcePropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightThreatIntelIndicatorSourcePropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightThreatIntelIndicatorSourceUrlPropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightThreatIntelIndicatorSourceUrlPropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightThreatIntelIndicatorTypePropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightThreatIntelIndicatorTypePropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightThreatIntelIndicatorValuePropertyToTerraform(struct?: AwsInsight.ThreatIntelIndicatorValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightThreatIntelIndicatorValuePropertyToHclTerraform(struct?: AwsInsight.ThreatIntelIndicatorValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightTitlePropertyToTerraform(struct?: AwsInsight.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightTitlePropertyToHclTerraform(struct?: AwsInsight.TitleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightTypePropertyToTerraform(struct?: AwsInsight.TypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightTypePropertyToHclTerraform(struct?: AwsInsight.TypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersUpdatedAtDateRangePropertyToTerraform(struct?: AwsInsight.FiltersUpdatedAtDateRangePropertyOutputReference | AwsInsight.FiltersUpdatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsInsightFiltersUpdatedAtDateRangePropertyToHclTerraform(struct?: AwsInsight.FiltersUpdatedAtDateRangePropertyOutputReference | AwsInsight.FiltersUpdatedAtDateRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightUpdatedAtPropertyToTerraform(struct?: AwsInsight.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: awsInsightFiltersUpdatedAtDateRangePropertyToTerraform(struct!.dateRange),
  }
}


export function awsInsightUpdatedAtPropertyToHclTerraform(struct?: AwsInsight.UpdatedAtProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: awsInsightFiltersUpdatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "FiltersUpdatedAtDateRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsInsightUserDefinedValuesPropertyToTerraform(struct?: AwsInsight.UserDefinedValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightUserDefinedValuesPropertyToHclTerraform(struct?: AwsInsight.UserDefinedValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsInsightVerificationStatePropertyToTerraform(struct?: AwsInsight.VerificationStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightVerificationStatePropertyToHclTerraform(struct?: AwsInsight.VerificationStateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightWorkflowStatusPropertyToTerraform(struct?: AwsInsight.WorkflowStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsInsightWorkflowStatusPropertyToHclTerraform(struct?: AwsInsight.WorkflowStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function awsInsightFiltersPropertyToTerraform(struct?: AwsInsight.FiltersPropertyOutputReference | AwsInsight.FiltersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(awsInsightAwsAccountIdPropertyToTerraform, true)(struct!.awsAccountId),
    aws_account_name: cdktn.listMapper(awsInsightAwsAccountNamePropertyToTerraform, true)(struct!.awsAccountName),
    company_name: cdktn.listMapper(awsInsightCompanyNamePropertyToTerraform, true)(struct!.companyName),
    compliance_associated_standards_id: cdktn.listMapper(awsInsightComplianceAssociatedStandardsIdPropertyToTerraform, true)(struct!.complianceAssociatedStandardsId),
    compliance_security_control_id: cdktn.listMapper(awsInsightComplianceSecurityControlIdPropertyToTerraform, true)(struct!.complianceSecurityControlId),
    compliance_security_control_parameters_name: cdktn.listMapper(awsInsightComplianceSecurityControlParametersNamePropertyToTerraform, true)(struct!.complianceSecurityControlParametersName),
    compliance_security_control_parameters_value: cdktn.listMapper(awsInsightComplianceSecurityControlParametersValuePropertyToTerraform, true)(struct!.complianceSecurityControlParametersValue),
    compliance_status: cdktn.listMapper(awsInsightComplianceStatusPropertyToTerraform, true)(struct!.complianceStatus),
    confidence: cdktn.listMapper(awsInsightConfidencePropertyToTerraform, true)(struct!.confidence),
    created_at: cdktn.listMapper(awsInsightCreatedAtPropertyToTerraform, true)(struct!.createdAt),
    criticality: cdktn.listMapper(awsInsightCriticalityPropertyToTerraform, true)(struct!.criticality),
    description: cdktn.listMapper(awsInsightDescriptionPropertyToTerraform, true)(struct!.description),
    finding_provider_fields_confidence: cdktn.listMapper(awsInsightFindingProviderFieldsConfidencePropertyToTerraform, true)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktn.listMapper(awsInsightFindingProviderFieldsCriticalityPropertyToTerraform, true)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktn.listMapper(awsInsightFindingProviderFieldsRelatedFindingsIdPropertyToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktn.listMapper(awsInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktn.listMapper(awsInsightFindingProviderFieldsSeverityLabelPropertyToTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktn.listMapper(awsInsightFindingProviderFieldsSeverityOriginalPropertyToTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktn.listMapper(awsInsightFindingProviderFieldsTypesPropertyToTerraform, true)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktn.listMapper(awsInsightFirstObservedAtPropertyToTerraform, true)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(awsInsightGeneratorIdPropertyToTerraform, true)(struct!.generatorId),
    id: cdktn.listMapper(awsInsightIdPropertyToTerraform, true)(struct!.id),
    keyword: cdktn.listMapper(awsInsightKeywordPropertyToTerraform, true)(struct!.keyword),
    last_observed_at: cdktn.listMapper(awsInsightLastObservedAtPropertyToTerraform, true)(struct!.lastObservedAt),
    malware_name: cdktn.listMapper(awsInsightMalwareNamePropertyToTerraform, true)(struct!.malwareName),
    malware_path: cdktn.listMapper(awsInsightMalwarePathPropertyToTerraform, true)(struct!.malwarePath),
    malware_state: cdktn.listMapper(awsInsightMalwareStatePropertyToTerraform, true)(struct!.malwareState),
    malware_type: cdktn.listMapper(awsInsightMalwareTypePropertyToTerraform, true)(struct!.malwareType),
    network_destination_domain: cdktn.listMapper(awsInsightNetworkDestinationDomainPropertyToTerraform, true)(struct!.networkDestinationDomain),
    network_destination_ipv4: cdktn.listMapper(awsInsightNetworkDestinationIpv4PropertyToTerraform, true)(struct!.networkDestinationIpv4),
    network_destination_ipv6: cdktn.listMapper(awsInsightNetworkDestinationIpv6PropertyToTerraform, true)(struct!.networkDestinationIpv6),
    network_destination_port: cdktn.listMapper(awsInsightNetworkDestinationPortPropertyToTerraform, true)(struct!.networkDestinationPort),
    network_direction: cdktn.listMapper(awsInsightNetworkDirectionPropertyToTerraform, true)(struct!.networkDirection),
    network_protocol: cdktn.listMapper(awsInsightNetworkProtocolPropertyToTerraform, true)(struct!.networkProtocol),
    network_source_domain: cdktn.listMapper(awsInsightNetworkSourceDomainPropertyToTerraform, true)(struct!.networkSourceDomain),
    network_source_ipv4: cdktn.listMapper(awsInsightNetworkSourceIpv4PropertyToTerraform, true)(struct!.networkSourceIpv4),
    network_source_ipv6: cdktn.listMapper(awsInsightNetworkSourceIpv6PropertyToTerraform, true)(struct!.networkSourceIpv6),
    network_source_mac: cdktn.listMapper(awsInsightNetworkSourceMacPropertyToTerraform, true)(struct!.networkSourceMac),
    network_source_port: cdktn.listMapper(awsInsightNetworkSourcePortPropertyToTerraform, true)(struct!.networkSourcePort),
    note_text: cdktn.listMapper(awsInsightNoteTextPropertyToTerraform, true)(struct!.noteText),
    note_updated_at: cdktn.listMapper(awsInsightNoteUpdatedAtPropertyToTerraform, true)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(awsInsightNoteUpdatedByPropertyToTerraform, true)(struct!.noteUpdatedBy),
    process_launched_at: cdktn.listMapper(awsInsightProcessLaunchedAtPropertyToTerraform, true)(struct!.processLaunchedAt),
    process_name: cdktn.listMapper(awsInsightProcessNamePropertyToTerraform, true)(struct!.processName),
    process_parent_pid: cdktn.listMapper(awsInsightProcessParentPidPropertyToTerraform, true)(struct!.processParentPid),
    process_path: cdktn.listMapper(awsInsightProcessPathPropertyToTerraform, true)(struct!.processPath),
    process_pid: cdktn.listMapper(awsInsightProcessPidPropertyToTerraform, true)(struct!.processPid),
    process_terminated_at: cdktn.listMapper(awsInsightProcessTerminatedAtPropertyToTerraform, true)(struct!.processTerminatedAt),
    product_arn: cdktn.listMapper(awsInsightProductArnPropertyToTerraform, true)(struct!.productArn),
    product_fields: cdktn.listMapper(awsInsightProductFieldsPropertyToTerraform, true)(struct!.productFields),
    product_name: cdktn.listMapper(awsInsightProductNamePropertyToTerraform, true)(struct!.productName),
    recommendation_text: cdktn.listMapper(awsInsightRecommendationTextPropertyToTerraform, true)(struct!.recommendationText),
    record_state: cdktn.listMapper(awsInsightRecordStatePropertyToTerraform, true)(struct!.recordState),
    related_findings_id: cdktn.listMapper(awsInsightRelatedFindingsIdPropertyToTerraform, true)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(awsInsightRelatedFindingsProductArnPropertyToTerraform, true)(struct!.relatedFindingsProductArn),
    resource_aws_ec2_instance_iam_instance_profile_arn: cdktn.listMapper(awsInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec2_instance_image_id: cdktn.listMapper(awsInsightResourceAwsEc2InstanceImageIdPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec2_instance_ipv4_addresses: cdktn.listMapper(awsInsightResourceAwsEc2InstanceIpv4AddressesPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
    resource_aws_ec2_instance_ipv6_addresses: cdktn.listMapper(awsInsightResourceAwsEc2InstanceIpv6AddressesPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
    resource_aws_ec2_instance_key_name: cdktn.listMapper(awsInsightResourceAwsEc2InstanceKeyNamePropertyToTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec2_instance_launched_at: cdktn.listMapper(awsInsightResourceAwsEc2InstanceLaunchedAtPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec2_instance_subnet_id: cdktn.listMapper(awsInsightResourceAwsEc2InstanceSubnetIdPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec2_instance_type: cdktn.listMapper(awsInsightResourceAwsEc2InstanceTypePropertyToTerraform, true)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec2_instance_vpc_id: cdktn.listMapper(awsInsightResourceAwsEc2InstanceVpcIdPropertyToTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktn.listMapper(awsInsightResourceAwsIamAccessKeyCreatedAtPropertyToTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_status: cdktn.listMapper(awsInsightResourceAwsIamAccessKeyStatusPropertyToTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktn.listMapper(awsInsightResourceAwsIamAccessKeyUserNamePropertyToTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_s3_bucket_owner_id: cdktn.listMapper(awsInsightResourceAwsS3BucketOwnerIdPropertyToTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktn.listMapper(awsInsightResourceAwsS3BucketOwnerNamePropertyToTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktn.listMapper(awsInsightResourceContainerImageIdPropertyToTerraform, true)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktn.listMapper(awsInsightResourceContainerImageNamePropertyToTerraform, true)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktn.listMapper(awsInsightResourceContainerLaunchedAtPropertyToTerraform, true)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktn.listMapper(awsInsightResourceContainerNamePropertyToTerraform, true)(struct!.resourceContainerName),
    resource_details_other: cdktn.listMapper(awsInsightResourceDetailsOtherPropertyToTerraform, true)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(awsInsightResourceIdPropertyToTerraform, true)(struct!.resourceId),
    resource_partition: cdktn.listMapper(awsInsightResourcePartitionPropertyToTerraform, true)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(awsInsightResourceRegionPropertyToTerraform, true)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(awsInsightResourceTagsPropertyToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(awsInsightResourceTypePropertyToTerraform, true)(struct!.resourceType),
    severity_label: cdktn.listMapper(awsInsightSeverityLabelPropertyToTerraform, true)(struct!.severityLabel),
    source_url: cdktn.listMapper(awsInsightSourceUrlPropertyToTerraform, true)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktn.listMapper(awsInsightThreatIntelIndicatorCategoryPropertyToTerraform, true)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktn.listMapper(awsInsightThreatIntelIndicatorLastObservedAtPropertyToTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktn.listMapper(awsInsightThreatIntelIndicatorSourcePropertyToTerraform, true)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktn.listMapper(awsInsightThreatIntelIndicatorSourceUrlPropertyToTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktn.listMapper(awsInsightThreatIntelIndicatorTypePropertyToTerraform, true)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktn.listMapper(awsInsightThreatIntelIndicatorValuePropertyToTerraform, true)(struct!.threatIntelIndicatorValue),
    title: cdktn.listMapper(awsInsightTitlePropertyToTerraform, true)(struct!.title),
    type: cdktn.listMapper(awsInsightTypePropertyToTerraform, true)(struct!.type),
    updated_at: cdktn.listMapper(awsInsightUpdatedAtPropertyToTerraform, true)(struct!.updatedAt),
    user_defined_values: cdktn.listMapper(awsInsightUserDefinedValuesPropertyToTerraform, true)(struct!.userDefinedValues),
    verification_state: cdktn.listMapper(awsInsightVerificationStatePropertyToTerraform, true)(struct!.verificationState),
    workflow_status: cdktn.listMapper(awsInsightWorkflowStatusPropertyToTerraform, true)(struct!.workflowStatus),
  }
}


export function awsInsightFiltersPropertyToHclTerraform(struct?: AwsInsight.FiltersPropertyOutputReference | AwsInsight.FiltersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(awsInsightAwsAccountIdPropertyToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "AwsAccountIdPropertyList",
    },
    aws_account_name: {
      value: cdktn.listMapperHcl(awsInsightAwsAccountNamePropertyToHclTerraform, true)(struct!.awsAccountName),
      isBlock: true,
      type: "set",
      storageClassType: "AwsAccountNamePropertyList",
    },
    company_name: {
      value: cdktn.listMapperHcl(awsInsightCompanyNamePropertyToHclTerraform, true)(struct!.companyName),
      isBlock: true,
      type: "set",
      storageClassType: "CompanyNamePropertyList",
    },
    compliance_associated_standards_id: {
      value: cdktn.listMapperHcl(awsInsightComplianceAssociatedStandardsIdPropertyToHclTerraform, true)(struct!.complianceAssociatedStandardsId),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceAssociatedStandardsIdPropertyList",
    },
    compliance_security_control_id: {
      value: cdktn.listMapperHcl(awsInsightComplianceSecurityControlIdPropertyToHclTerraform, true)(struct!.complianceSecurityControlId),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceSecurityControlIdPropertyList",
    },
    compliance_security_control_parameters_name: {
      value: cdktn.listMapperHcl(awsInsightComplianceSecurityControlParametersNamePropertyToHclTerraform, true)(struct!.complianceSecurityControlParametersName),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceSecurityControlParametersNamePropertyList",
    },
    compliance_security_control_parameters_value: {
      value: cdktn.listMapperHcl(awsInsightComplianceSecurityControlParametersValuePropertyToHclTerraform, true)(struct!.complianceSecurityControlParametersValue),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceSecurityControlParametersValuePropertyList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(awsInsightComplianceStatusPropertyToHclTerraform, true)(struct!.complianceStatus),
      isBlock: true,
      type: "set",
      storageClassType: "ComplianceStatusPropertyList",
    },
    confidence: {
      value: cdktn.listMapperHcl(awsInsightConfidencePropertyToHclTerraform, true)(struct!.confidence),
      isBlock: true,
      type: "set",
      storageClassType: "ConfidencePropertyList",
    },
    created_at: {
      value: cdktn.listMapperHcl(awsInsightCreatedAtPropertyToHclTerraform, true)(struct!.createdAt),
      isBlock: true,
      type: "set",
      storageClassType: "CreatedAtPropertyList",
    },
    criticality: {
      value: cdktn.listMapperHcl(awsInsightCriticalityPropertyToHclTerraform, true)(struct!.criticality),
      isBlock: true,
      type: "set",
      storageClassType: "CriticalityPropertyList",
    },
    description: {
      value: cdktn.listMapperHcl(awsInsightDescriptionPropertyToHclTerraform, true)(struct!.description),
      isBlock: true,
      type: "set",
      storageClassType: "DescriptionPropertyList",
    },
    finding_provider_fields_confidence: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsConfidencePropertyToHclTerraform, true)(struct!.findingProviderFieldsConfidence),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsConfidencePropertyList",
    },
    finding_provider_fields_criticality: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsCriticalityPropertyToHclTerraform, true)(struct!.findingProviderFieldsCriticality),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsCriticalityPropertyList",
    },
    finding_provider_fields_related_findings_id: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsRelatedFindingsIdPropertyToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsRelatedFindingsIdPropertyList",
    },
    finding_provider_fields_related_findings_product_arn: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsRelatedFindingsProductArnPropertyList",
    },
    finding_provider_fields_severity_label: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsSeverityLabelPropertyToHclTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsSeverityLabelPropertyList",
    },
    finding_provider_fields_severity_original: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsSeverityOriginalPropertyToHclTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsSeverityOriginalPropertyList",
    },
    finding_provider_fields_types: {
      value: cdktn.listMapperHcl(awsInsightFindingProviderFieldsTypesPropertyToHclTerraform, true)(struct!.findingProviderFieldsTypes),
      isBlock: true,
      type: "set",
      storageClassType: "FindingProviderFieldsTypesPropertyList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(awsInsightFirstObservedAtPropertyToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "FirstObservedAtPropertyList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(awsInsightGeneratorIdPropertyToHclTerraform, true)(struct!.generatorId),
      isBlock: true,
      type: "set",
      storageClassType: "GeneratorIdPropertyList",
    },
    id: {
      value: cdktn.listMapperHcl(awsInsightIdPropertyToHclTerraform, true)(struct!.id),
      isBlock: true,
      type: "set",
      storageClassType: "IdPropertyList",
    },
    keyword: {
      value: cdktn.listMapperHcl(awsInsightKeywordPropertyToHclTerraform, true)(struct!.keyword),
      isBlock: true,
      type: "set",
      storageClassType: "KeywordPropertyList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(awsInsightLastObservedAtPropertyToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "LastObservedAtPropertyList",
    },
    malware_name: {
      value: cdktn.listMapperHcl(awsInsightMalwareNamePropertyToHclTerraform, true)(struct!.malwareName),
      isBlock: true,
      type: "set",
      storageClassType: "MalwareNamePropertyList",
    },
    malware_path: {
      value: cdktn.listMapperHcl(awsInsightMalwarePathPropertyToHclTerraform, true)(struct!.malwarePath),
      isBlock: true,
      type: "set",
      storageClassType: "MalwarePathPropertyList",
    },
    malware_state: {
      value: cdktn.listMapperHcl(awsInsightMalwareStatePropertyToHclTerraform, true)(struct!.malwareState),
      isBlock: true,
      type: "set",
      storageClassType: "MalwareStatePropertyList",
    },
    malware_type: {
      value: cdktn.listMapperHcl(awsInsightMalwareTypePropertyToHclTerraform, true)(struct!.malwareType),
      isBlock: true,
      type: "set",
      storageClassType: "MalwareTypePropertyList",
    },
    network_destination_domain: {
      value: cdktn.listMapperHcl(awsInsightNetworkDestinationDomainPropertyToHclTerraform, true)(struct!.networkDestinationDomain),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDestinationDomainPropertyList",
    },
    network_destination_ipv4: {
      value: cdktn.listMapperHcl(awsInsightNetworkDestinationIpv4PropertyToHclTerraform, true)(struct!.networkDestinationIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDestinationIpv4PropertyList",
    },
    network_destination_ipv6: {
      value: cdktn.listMapperHcl(awsInsightNetworkDestinationIpv6PropertyToHclTerraform, true)(struct!.networkDestinationIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDestinationIpv6PropertyList",
    },
    network_destination_port: {
      value: cdktn.listMapperHcl(awsInsightNetworkDestinationPortPropertyToHclTerraform, true)(struct!.networkDestinationPort),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDestinationPortPropertyList",
    },
    network_direction: {
      value: cdktn.listMapperHcl(awsInsightNetworkDirectionPropertyToHclTerraform, true)(struct!.networkDirection),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDirectionPropertyList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(awsInsightNetworkProtocolPropertyToHclTerraform, true)(struct!.networkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkProtocolPropertyList",
    },
    network_source_domain: {
      value: cdktn.listMapperHcl(awsInsightNetworkSourceDomainPropertyToHclTerraform, true)(struct!.networkSourceDomain),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSourceDomainPropertyList",
    },
    network_source_ipv4: {
      value: cdktn.listMapperHcl(awsInsightNetworkSourceIpv4PropertyToHclTerraform, true)(struct!.networkSourceIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSourceIpv4PropertyList",
    },
    network_source_ipv6: {
      value: cdktn.listMapperHcl(awsInsightNetworkSourceIpv6PropertyToHclTerraform, true)(struct!.networkSourceIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSourceIpv6PropertyList",
    },
    network_source_mac: {
      value: cdktn.listMapperHcl(awsInsightNetworkSourceMacPropertyToHclTerraform, true)(struct!.networkSourceMac),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSourceMacPropertyList",
    },
    network_source_port: {
      value: cdktn.listMapperHcl(awsInsightNetworkSourcePortPropertyToHclTerraform, true)(struct!.networkSourcePort),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSourcePortPropertyList",
    },
    note_text: {
      value: cdktn.listMapperHcl(awsInsightNoteTextPropertyToHclTerraform, true)(struct!.noteText),
      isBlock: true,
      type: "set",
      storageClassType: "NoteTextPropertyList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(awsInsightNoteUpdatedAtPropertyToHclTerraform, true)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "NoteUpdatedAtPropertyList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(awsInsightNoteUpdatedByPropertyToHclTerraform, true)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "set",
      storageClassType: "NoteUpdatedByPropertyList",
    },
    process_launched_at: {
      value: cdktn.listMapperHcl(awsInsightProcessLaunchedAtPropertyToHclTerraform, true)(struct!.processLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessLaunchedAtPropertyList",
    },
    process_name: {
      value: cdktn.listMapperHcl(awsInsightProcessNamePropertyToHclTerraform, true)(struct!.processName),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessNamePropertyList",
    },
    process_parent_pid: {
      value: cdktn.listMapperHcl(awsInsightProcessParentPidPropertyToHclTerraform, true)(struct!.processParentPid),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessParentPidPropertyList",
    },
    process_path: {
      value: cdktn.listMapperHcl(awsInsightProcessPathPropertyToHclTerraform, true)(struct!.processPath),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessPathPropertyList",
    },
    process_pid: {
      value: cdktn.listMapperHcl(awsInsightProcessPidPropertyToHclTerraform, true)(struct!.processPid),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessPidPropertyList",
    },
    process_terminated_at: {
      value: cdktn.listMapperHcl(awsInsightProcessTerminatedAtPropertyToHclTerraform, true)(struct!.processTerminatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessTerminatedAtPropertyList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(awsInsightProductArnPropertyToHclTerraform, true)(struct!.productArn),
      isBlock: true,
      type: "set",
      storageClassType: "ProductArnPropertyList",
    },
    product_fields: {
      value: cdktn.listMapperHcl(awsInsightProductFieldsPropertyToHclTerraform, true)(struct!.productFields),
      isBlock: true,
      type: "set",
      storageClassType: "ProductFieldsPropertyList",
    },
    product_name: {
      value: cdktn.listMapperHcl(awsInsightProductNamePropertyToHclTerraform, true)(struct!.productName),
      isBlock: true,
      type: "set",
      storageClassType: "ProductNamePropertyList",
    },
    recommendation_text: {
      value: cdktn.listMapperHcl(awsInsightRecommendationTextPropertyToHclTerraform, true)(struct!.recommendationText),
      isBlock: true,
      type: "set",
      storageClassType: "RecommendationTextPropertyList",
    },
    record_state: {
      value: cdktn.listMapperHcl(awsInsightRecordStatePropertyToHclTerraform, true)(struct!.recordState),
      isBlock: true,
      type: "set",
      storageClassType: "RecordStatePropertyList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(awsInsightRelatedFindingsIdPropertyToHclTerraform, true)(struct!.relatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedFindingsIdPropertyList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(awsInsightRelatedFindingsProductArnPropertyToHclTerraform, true)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "RelatedFindingsProductArnPropertyList",
    },
    resource_aws_ec2_instance_iam_instance_profile_arn: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList",
    },
    resource_aws_ec2_instance_image_id: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceImageIdPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceImageIdPropertyList",
    },
    resource_aws_ec2_instance_ipv4_addresses: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceIpv4AddressesPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceIpv4AddressesPropertyList",
    },
    resource_aws_ec2_instance_ipv6_addresses: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceIpv6AddressesPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceIpv6AddressesPropertyList",
    },
    resource_aws_ec2_instance_key_name: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceKeyNamePropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceKeyNamePropertyList",
    },
    resource_aws_ec2_instance_launched_at: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceLaunchedAtPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceLaunchedAtPropertyList",
    },
    resource_aws_ec2_instance_subnet_id: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceSubnetIdPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceSubnetIdPropertyList",
    },
    resource_aws_ec2_instance_type: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceTypePropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceType),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceTypePropertyList",
    },
    resource_aws_ec2_instance_vpc_id: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsEc2InstanceVpcIdPropertyToHclTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsEc2InstanceVpcIdPropertyList",
    },
    resource_aws_iam_access_key_created_at: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsIamAccessKeyCreatedAtPropertyToHclTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsIamAccessKeyCreatedAtPropertyList",
    },
    resource_aws_iam_access_key_status: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsIamAccessKeyStatusPropertyToHclTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsIamAccessKeyStatusPropertyList",
    },
    resource_aws_iam_access_key_user_name: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsIamAccessKeyUserNamePropertyToHclTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsIamAccessKeyUserNamePropertyList",
    },
    resource_aws_s3_bucket_owner_id: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsS3BucketOwnerIdPropertyToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsS3BucketOwnerIdPropertyList",
    },
    resource_aws_s3_bucket_owner_name: {
      value: cdktn.listMapperHcl(awsInsightResourceAwsS3BucketOwnerNamePropertyToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceAwsS3BucketOwnerNamePropertyList",
    },
    resource_container_image_id: {
      value: cdktn.listMapperHcl(awsInsightResourceContainerImageIdPropertyToHclTerraform, true)(struct!.resourceContainerImageId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceContainerImageIdPropertyList",
    },
    resource_container_image_name: {
      value: cdktn.listMapperHcl(awsInsightResourceContainerImageNamePropertyToHclTerraform, true)(struct!.resourceContainerImageName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceContainerImageNamePropertyList",
    },
    resource_container_launched_at: {
      value: cdktn.listMapperHcl(awsInsightResourceContainerLaunchedAtPropertyToHclTerraform, true)(struct!.resourceContainerLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceContainerLaunchedAtPropertyList",
    },
    resource_container_name: {
      value: cdktn.listMapperHcl(awsInsightResourceContainerNamePropertyToHclTerraform, true)(struct!.resourceContainerName),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceContainerNamePropertyList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(awsInsightResourceDetailsOtherPropertyToHclTerraform, true)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceDetailsOtherPropertyList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(awsInsightResourceIdPropertyToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceIdPropertyList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(awsInsightResourcePartitionPropertyToHclTerraform, true)(struct!.resourcePartition),
      isBlock: true,
      type: "set",
      storageClassType: "ResourcePartitionPropertyList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(awsInsightResourceRegionPropertyToHclTerraform, true)(struct!.resourceRegion),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceRegionPropertyList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(awsInsightResourceTagsPropertyToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTagsPropertyList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(awsInsightResourceTypePropertyToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "ResourceTypePropertyList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(awsInsightSeverityLabelPropertyToHclTerraform, true)(struct!.severityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SeverityLabelPropertyList",
    },
    source_url: {
      value: cdktn.listMapperHcl(awsInsightSourceUrlPropertyToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SourceUrlPropertyList",
    },
    threat_intel_indicator_category: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorCategoryPropertyToHclTerraform, true)(struct!.threatIntelIndicatorCategory),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorCategoryPropertyList",
    },
    threat_intel_indicator_last_observed_at: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorLastObservedAtPropertyToHclTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorLastObservedAtPropertyList",
    },
    threat_intel_indicator_source: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorSourcePropertyToHclTerraform, true)(struct!.threatIntelIndicatorSource),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorSourcePropertyList",
    },
    threat_intel_indicator_source_url: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorSourceUrlPropertyToHclTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorSourceUrlPropertyList",
    },
    threat_intel_indicator_type: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorTypePropertyToHclTerraform, true)(struct!.threatIntelIndicatorType),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorTypePropertyList",
    },
    threat_intel_indicator_value: {
      value: cdktn.listMapperHcl(awsInsightThreatIntelIndicatorValuePropertyToHclTerraform, true)(struct!.threatIntelIndicatorValue),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatIntelIndicatorValuePropertyList",
    },
    title: {
      value: cdktn.listMapperHcl(awsInsightTitlePropertyToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "TitlePropertyList",
    },
    type: {
      value: cdktn.listMapperHcl(awsInsightTypePropertyToHclTerraform, true)(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "TypePropertyList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(awsInsightUpdatedAtPropertyToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "UpdatedAtPropertyList",
    },
    user_defined_values: {
      value: cdktn.listMapperHcl(awsInsightUserDefinedValuesPropertyToHclTerraform, true)(struct!.userDefinedValues),
      isBlock: true,
      type: "set",
      storageClassType: "UserDefinedValuesPropertyList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(awsInsightVerificationStatePropertyToHclTerraform, true)(struct!.verificationState),
      isBlock: true,
      type: "set",
      storageClassType: "VerificationStatePropertyList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(awsInsightWorkflowStatusPropertyToHclTerraform, true)(struct!.workflowStatus),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStatusPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsInsight {
export interface AwsAccountIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class AwsAccountIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsAccountIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class AwsAccountIdPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsAccountIdProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsAccountIdPropertyOutputReference {
    return new AwsAccountIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsAccountNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class AwsAccountNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsAccountNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class AwsAccountNamePropertyList extends cdktn.ComplexList {
  public internalValue? : AwsAccountNameProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsAccountNamePropertyOutputReference {
    return new AwsAccountNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CompanyNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class CompanyNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CompanyNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompanyNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class CompanyNamePropertyList extends cdktn.ComplexList {
  public internalValue? : CompanyNameProperty[] | cdktn.IResolvable

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
  public get(index: number): CompanyNamePropertyOutputReference {
    return new CompanyNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceAssociatedStandardsIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ComplianceAssociatedStandardsIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceAssociatedStandardsIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceAssociatedStandardsIdPropertyOutputReference {
    return new ComplianceAssociatedStandardsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceSecurityControlIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ComplianceSecurityControlIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceSecurityControlIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceSecurityControlIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceSecurityControlIdPropertyOutputReference {
    return new ComplianceSecurityControlIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceSecurityControlParametersNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ComplianceSecurityControlParametersNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceSecurityControlParametersNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceSecurityControlParametersNamePropertyOutputReference {
    return new ComplianceSecurityControlParametersNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceSecurityControlParametersValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ComplianceSecurityControlParametersValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceSecurityControlParametersValuePropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceSecurityControlParametersValuePropertyOutputReference {
    return new ComplianceSecurityControlParametersValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComplianceStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ComplianceStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComplianceStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ComplianceStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : ComplianceStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): ComplianceStatusPropertyOutputReference {
    return new ComplianceStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfidenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class ConfidencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfidenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfidenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class ConfidencePropertyList extends cdktn.ComplexList {
  public internalValue? : ConfidenceProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfidencePropertyOutputReference {
    return new ConfidencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersCreatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersCreatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersCreatedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersCreatedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CreatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersCreatedAtDateRangeProperty;
}
export class CreatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CreatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersCreatedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersCreatedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class CreatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : CreatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): CreatedAtPropertyOutputReference {
    return new CreatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CriticalityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class CriticalityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CriticalityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriticalityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class CriticalityPropertyList extends cdktn.ComplexList {
  public internalValue? : CriticalityProperty[] | cdktn.IResolvable

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
  public get(index: number): CriticalityPropertyOutputReference {
    return new CriticalityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DescriptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class DescriptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DescriptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DescriptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class DescriptionPropertyList extends cdktn.ComplexList {
  public internalValue? : DescriptionProperty[] | cdktn.IResolvable

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
  public get(index: number): DescriptionPropertyOutputReference {
    return new DescriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsConfidenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class FindingProviderFieldsConfidencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsConfidenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsConfidenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class FindingProviderFieldsConfidencePropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsConfidencePropertyOutputReference {
    return new FindingProviderFieldsConfidencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsCriticalityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class FindingProviderFieldsCriticalityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsCriticalityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsCriticalityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class FindingProviderFieldsCriticalityPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsCriticalityPropertyOutputReference {
    return new FindingProviderFieldsCriticalityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsRelatedFindingsIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class FindingProviderFieldsRelatedFindingsIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingProviderFieldsRelatedFindingsIdPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsRelatedFindingsIdPropertyOutputReference {
    return new FindingProviderFieldsRelatedFindingsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsRelatedFindingsProductArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingProviderFieldsRelatedFindingsProductArnPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference {
    return new FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsSeverityLabelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class FindingProviderFieldsSeverityLabelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingProviderFieldsSeverityLabelPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsSeverityLabelPropertyOutputReference {
    return new FindingProviderFieldsSeverityLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsSeverityOriginalProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class FindingProviderFieldsSeverityOriginalPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingProviderFieldsSeverityOriginalPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsSeverityOriginalPropertyOutputReference {
    return new FindingProviderFieldsSeverityOriginalPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindingProviderFieldsTypesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class FindingProviderFieldsTypesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FindingProviderFieldsTypesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingProviderFieldsTypesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class FindingProviderFieldsTypesPropertyList extends cdktn.ComplexList {
  public internalValue? : FindingProviderFieldsTypesProperty[] | cdktn.IResolvable

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
  public get(index: number): FindingProviderFieldsTypesPropertyOutputReference {
    return new FindingProviderFieldsTypesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersFirstObservedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersFirstObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersFirstObservedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersFirstObservedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface FirstObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersFirstObservedAtDateRangeProperty;
}
export class FirstObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirstObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirstObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersFirstObservedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersFirstObservedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class FirstObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : FirstObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): FirstObservedAtPropertyOutputReference {
    return new FirstObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeneratorIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class GeneratorIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeneratorIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeneratorIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class GeneratorIdPropertyList extends cdktn.ComplexList {
  public internalValue? : GeneratorIdProperty[] | cdktn.IResolvable

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
  public get(index: number): GeneratorIdPropertyOutputReference {
    return new GeneratorIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class IdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class IdPropertyList extends cdktn.ComplexList {
  public internalValue? : IdProperty[] | cdktn.IResolvable

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
  public get(index: number): IdPropertyOutputReference {
    return new IdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeywordProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class KeywordPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KeywordProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeywordProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class KeywordPropertyList extends cdktn.ComplexList {
  public internalValue? : KeywordProperty[] | cdktn.IResolvable

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
  public get(index: number): KeywordPropertyOutputReference {
    return new KeywordPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersLastObservedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersLastObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersLastObservedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersLastObservedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LastObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersLastObservedAtDateRangeProperty;
}
export class LastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersLastObservedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersLastObservedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class LastObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : LastObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): LastObservedAtPropertyOutputReference {
    return new LastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MalwareNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class MalwareNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MalwareNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MalwareNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class MalwareNamePropertyList extends cdktn.ComplexList {
  public internalValue? : MalwareNameProperty[] | cdktn.IResolvable

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
  public get(index: number): MalwareNamePropertyOutputReference {
    return new MalwareNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MalwarePathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class MalwarePathPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MalwarePathProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MalwarePathProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class MalwarePathPropertyList extends cdktn.ComplexList {
  public internalValue? : MalwarePathProperty[] | cdktn.IResolvable

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
  public get(index: number): MalwarePathPropertyOutputReference {
    return new MalwarePathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MalwareStateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class MalwareStatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MalwareStateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MalwareStateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class MalwareStatePropertyList extends cdktn.ComplexList {
  public internalValue? : MalwareStateProperty[] | cdktn.IResolvable

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
  public get(index: number): MalwareStatePropertyOutputReference {
    return new MalwareStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MalwareTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class MalwareTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MalwareTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MalwareTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class MalwareTypePropertyList extends cdktn.ComplexList {
  public internalValue? : MalwareTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): MalwareTypePropertyOutputReference {
    return new MalwareTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDestinationDomainProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NetworkDestinationDomainPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkDestinationDomainProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDestinationDomainProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkDestinationDomainPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkDestinationDomainProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkDestinationDomainPropertyOutputReference {
    return new NetworkDestinationDomainPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDestinationIpv4Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class NetworkDestinationIpv4PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkDestinationIpv4Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDestinationIpv4Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class NetworkDestinationIpv4PropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkDestinationIpv4Property[] | cdktn.IResolvable

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
  public get(index: number): NetworkDestinationIpv4PropertyOutputReference {
    return new NetworkDestinationIpv4PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDestinationIpv6Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class NetworkDestinationIpv6PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkDestinationIpv6Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDestinationIpv6Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class NetworkDestinationIpv6PropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkDestinationIpv6Property[] | cdktn.IResolvable

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
  public get(index: number): NetworkDestinationIpv6PropertyOutputReference {
    return new NetworkDestinationIpv6PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDestinationPortProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class NetworkDestinationPortPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkDestinationPortProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDestinationPortProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class NetworkDestinationPortPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkDestinationPortProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkDestinationPortPropertyOutputReference {
    return new NetworkDestinationPortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDirectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NetworkDirectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkDirectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDirectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkDirectionPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkDirectionProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkDirectionPropertyOutputReference {
    return new NetworkDirectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkProtocolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NetworkProtocolPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkProtocolProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkProtocolProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkProtocolPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkProtocolProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkProtocolPropertyOutputReference {
    return new NetworkProtocolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSourceDomainProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NetworkSourceDomainPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSourceDomainProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSourceDomainProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkSourceDomainPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkSourceDomainProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkSourceDomainPropertyOutputReference {
    return new NetworkSourceDomainPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSourceIpv4Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class NetworkSourceIpv4PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSourceIpv4Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSourceIpv4Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class NetworkSourceIpv4PropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkSourceIpv4Property[] | cdktn.IResolvable

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
  public get(index: number): NetworkSourceIpv4PropertyOutputReference {
    return new NetworkSourceIpv4PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSourceIpv6Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class NetworkSourceIpv6PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSourceIpv6Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSourceIpv6Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class NetworkSourceIpv6PropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkSourceIpv6Property[] | cdktn.IResolvable

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
  public get(index: number): NetworkSourceIpv6PropertyOutputReference {
    return new NetworkSourceIpv6PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSourceMacProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NetworkSourceMacPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSourceMacProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSourceMacProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NetworkSourceMacPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkSourceMacProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkSourceMacPropertyOutputReference {
    return new NetworkSourceMacPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSourcePortProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class NetworkSourcePortPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSourcePortProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSourcePortProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class NetworkSourcePortPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkSourcePortProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkSourcePortPropertyOutputReference {
    return new NetworkSourcePortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoteTextProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NoteTextPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteTextProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteTextProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NoteTextPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteTextProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteTextPropertyOutputReference {
    return new NoteTextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersNoteUpdatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersNoteUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersNoteUpdatedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersNoteUpdatedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface NoteUpdatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersNoteUpdatedAtDateRangeProperty;
}
export class NoteUpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteUpdatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteUpdatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersNoteUpdatedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersNoteUpdatedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class NoteUpdatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteUpdatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteUpdatedAtPropertyOutputReference {
    return new NoteUpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NoteUpdatedByProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class NoteUpdatedByPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NoteUpdatedByProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoteUpdatedByProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class NoteUpdatedByPropertyList extends cdktn.ComplexList {
  public internalValue? : NoteUpdatedByProperty[] | cdktn.IResolvable

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
  public get(index: number): NoteUpdatedByPropertyOutputReference {
    return new NoteUpdatedByPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersProcessLaunchedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersProcessLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersProcessLaunchedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersProcessLaunchedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessLaunchedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersProcessLaunchedAtDateRangeProperty;
}
export class ProcessLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessLaunchedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessLaunchedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersProcessLaunchedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersProcessLaunchedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ProcessLaunchedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessLaunchedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessLaunchedAtPropertyOutputReference {
    return new ProcessLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ProcessNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProcessNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessNamePropertyOutputReference {
    return new ProcessNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessParentPidProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class ProcessParentPidPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessParentPidProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessParentPidProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class ProcessParentPidPropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessParentPidProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessParentPidPropertyOutputReference {
    return new ProcessParentPidPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ProcessPathPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessPathProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessPathProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProcessPathPropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessPathProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessPathPropertyOutputReference {
    return new ProcessPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessPidProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#eq AwsInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#gte AwsInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#lte AwsInsight#lte}
  */
  readonly lte?: string;
}
export class ProcessPidPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessPidProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessPidProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class ProcessPidPropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessPidProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessPidPropertyOutputReference {
    return new ProcessPidPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersProcessTerminatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersProcessTerminatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersProcessTerminatedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersProcessTerminatedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessTerminatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersProcessTerminatedAtDateRangeProperty;
}
export class ProcessTerminatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProcessTerminatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessTerminatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersProcessTerminatedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersProcessTerminatedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ProcessTerminatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ProcessTerminatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ProcessTerminatedAtPropertyOutputReference {
    return new ProcessTerminatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProductArnPropertyList extends cdktn.ComplexList {
  public internalValue? : ProductArnProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductArnPropertyOutputReference {
    return new ProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductFieldsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#key AwsInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ProductFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductFieldsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductFieldsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProductFieldsPropertyList extends cdktn.ComplexList {
  public internalValue? : ProductFieldsProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductFieldsPropertyOutputReference {
    return new ProductFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ProductNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProductNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ProductNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ProductNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ProductNamePropertyOutputReference {
    return new ProductNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecommendationTextProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class RecommendationTextPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecommendationTextProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecommendationTextProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RecommendationTextPropertyList extends cdktn.ComplexList {
  public internalValue? : RecommendationTextProperty[] | cdktn.IResolvable

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
  public get(index: number): RecommendationTextPropertyOutputReference {
    return new RecommendationTextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecordStateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class RecordStatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecordStateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecordStateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RecordStatePropertyList extends cdktn.ComplexList {
  public internalValue? : RecordStateProperty[] | cdktn.IResolvable

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
  public get(index: number): RecordStatePropertyOutputReference {
    return new RecordStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedFindingsIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class RelatedFindingsIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedFindingsIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedFindingsIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RelatedFindingsIdPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedFindingsIdProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedFindingsIdPropertyOutputReference {
    return new RelatedFindingsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelatedFindingsProductArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class RelatedFindingsProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class RelatedFindingsProductArnPropertyList extends cdktn.ComplexList {
  public internalValue? : RelatedFindingsProductArnProperty[] | cdktn.IResolvable

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
  public get(index: number): RelatedFindingsProductArnPropertyOutputReference {
    return new RelatedFindingsProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceIamInstanceProfileArnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference {
    return new ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceImageIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceImageIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceImageIdPropertyOutputReference {
    return new ResourceAwsEc2InstanceImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceIpv4AddressesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class ResourceAwsEc2InstanceIpv4AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceIpv4AddressesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceIpv4AddressesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class ResourceAwsEc2InstanceIpv4AddressesPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceIpv4AddressesProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceIpv4AddressesPropertyOutputReference {
    return new ResourceAwsEc2InstanceIpv4AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceIpv6AddressesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#cidr AwsInsight#cidr}
  */
  readonly cidr: string;
}
export class ResourceAwsEc2InstanceIpv6AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceIpv6AddressesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceIpv6AddressesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class ResourceAwsEc2InstanceIpv6AddressesPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceIpv6AddressesProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceIpv6AddressesPropertyOutputReference {
    return new ResourceAwsEc2InstanceIpv6AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceKeyNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceKeyNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceKeyNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceKeyNamePropertyOutputReference {
    return new ResourceAwsEc2InstanceKeyNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ResourceAwsEc2InstanceLaunchedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty;
}
export class ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ResourceAwsEc2InstanceLaunchedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference {
    return new ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceSubnetIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceSubnetIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceSubnetIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceSubnetIdPropertyOutputReference {
    return new ResourceAwsEc2InstanceSubnetIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceTypePropertyOutputReference {
    return new ResourceAwsEc2InstanceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsEc2InstanceVpcIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsEc2InstanceVpcIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsEc2InstanceVpcIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsEc2InstanceVpcIdPropertyOutputReference {
    return new ResourceAwsEc2InstanceVpcIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ResourceAwsIamAccessKeyCreatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty;
}
export class ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ResourceAwsIamAccessKeyCreatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference {
    return new ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsIamAccessKeyStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsIamAccessKeyStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsIamAccessKeyStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsIamAccessKeyStatusPropertyOutputReference {
    return new ResourceAwsIamAccessKeyStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsIamAccessKeyUserNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsIamAccessKeyUserNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsIamAccessKeyUserNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsIamAccessKeyUserNamePropertyOutputReference {
    return new ResourceAwsIamAccessKeyUserNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsS3BucketOwnerIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsS3BucketOwnerIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsS3BucketOwnerIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsS3BucketOwnerIdPropertyOutputReference {
    return new ResourceAwsS3BucketOwnerIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAwsS3BucketOwnerNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceAwsS3BucketOwnerNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceAwsS3BucketOwnerNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceAwsS3BucketOwnerNamePropertyOutputReference {
    return new ResourceAwsS3BucketOwnerNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceContainerImageIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceContainerImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceContainerImageIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceContainerImageIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceContainerImageIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceContainerImageIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceContainerImageIdPropertyOutputReference {
    return new ResourceContainerImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceContainerImageNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceContainerImageNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceContainerImageNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceContainerImageNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceContainerImageNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceContainerImageNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceContainerImageNamePropertyOutputReference {
    return new ResourceContainerImageNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersResourceContainerLaunchedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersResourceContainerLaunchedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersResourceContainerLaunchedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ResourceContainerLaunchedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersResourceContainerLaunchedAtDateRangeProperty;
}
export class ResourceContainerLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceContainerLaunchedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceContainerLaunchedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersResourceContainerLaunchedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ResourceContainerLaunchedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceContainerLaunchedAtPropertyOutputReference {
    return new ResourceContainerLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceContainerNameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceContainerNamePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceContainerNameProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceContainerNameProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceContainerNamePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceContainerNameProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceContainerNamePropertyOutputReference {
    return new ResourceContainerNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceDetailsOtherProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#key AwsInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceDetailsOtherPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceDetailsOtherProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceDetailsOtherProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceDetailsOtherPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceDetailsOtherProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceDetailsOtherPropertyOutputReference {
    return new ResourceDetailsOtherPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceIdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceIdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceIdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceIdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceIdPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceIdProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceIdPropertyOutputReference {
    return new ResourceIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePartitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourcePartitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourcePartitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePartitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourcePartitionPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourcePartitionProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourcePartitionPropertyOutputReference {
    return new ResourcePartitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceRegionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceRegionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceRegionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRegionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceRegionPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceRegionProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceRegionPropertyOutputReference {
    return new ResourceRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#key AwsInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTagsPropertyOutputReference {
    return new ResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ResourceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceTypePropertyOutputReference {
    return new ResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SeverityLabelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class SeverityLabelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SeverityLabelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SeverityLabelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SeverityLabelPropertyList extends cdktn.ComplexList {
  public internalValue? : SeverityLabelProperty[] | cdktn.IResolvable

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
  public get(index: number): SeverityLabelPropertyOutputReference {
    return new SeverityLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceUrlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class SourceUrlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceUrlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceUrlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SourceUrlPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceUrlProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceUrlPropertyOutputReference {
    return new SourceUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatIntelIndicatorCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ThreatIntelIndicatorCategoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ThreatIntelIndicatorCategoryPropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorCategoryPropertyOutputReference {
    return new ThreatIntelIndicatorCategoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ThreatIntelIndicatorLastObservedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty;
}
export class ThreatIntelIndicatorLastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class ThreatIntelIndicatorLastObservedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorLastObservedAtPropertyOutputReference {
    return new ThreatIntelIndicatorLastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatIntelIndicatorSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ThreatIntelIndicatorSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ThreatIntelIndicatorSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorSourcePropertyOutputReference {
    return new ThreatIntelIndicatorSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatIntelIndicatorSourceUrlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ThreatIntelIndicatorSourceUrlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ThreatIntelIndicatorSourceUrlPropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorSourceUrlPropertyOutputReference {
    return new ThreatIntelIndicatorSourceUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatIntelIndicatorTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ThreatIntelIndicatorTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ThreatIntelIndicatorTypePropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorTypePropertyOutputReference {
    return new ThreatIntelIndicatorTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatIntelIndicatorValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class ThreatIntelIndicatorValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThreatIntelIndicatorValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatIntelIndicatorValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class ThreatIntelIndicatorValuePropertyList extends cdktn.ComplexList {
  public internalValue? : ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable

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
  public get(index: number): ThreatIntelIndicatorValuePropertyOutputReference {
    return new ThreatIntelIndicatorValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TitleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class TitlePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TitleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TitleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class TitlePropertyList extends cdktn.ComplexList {
  public internalValue? : TitleProperty[] | cdktn.IResolvable

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
  public get(index: number): TitlePropertyOutputReference {
    return new TitlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class TypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class TypePropertyList extends cdktn.ComplexList {
  public internalValue? : TypeProperty[] | cdktn.IResolvable

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
  public get(index: number): TypePropertyOutputReference {
    return new TypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersUpdatedAtDateRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#unit AwsInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: number;
}
export class FiltersUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersUpdatedAtDateRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersUpdatedAtDateRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface UpdatedAtProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#end AwsInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#start AwsInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#date_range AwsInsight#date_range}
  */
  readonly dateRange?: FiltersUpdatedAtDateRangeProperty;
}
export class UpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UpdatedAtProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdatedAtProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new FiltersUpdatedAtDateRangePropertyOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: FiltersUpdatedAtDateRangeProperty) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class UpdatedAtPropertyList extends cdktn.ComplexList {
  public internalValue? : UpdatedAtProperty[] | cdktn.IResolvable

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
  public get(index: number): UpdatedAtPropertyOutputReference {
    return new UpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserDefinedValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#key AwsInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class UserDefinedValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserDefinedValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserDefinedValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class UserDefinedValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : UserDefinedValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): UserDefinedValuesPropertyOutputReference {
    return new UserDefinedValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerificationStateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class VerificationStatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VerificationStateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerificationStateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class VerificationStatePropertyList extends cdktn.ComplexList {
  public internalValue? : VerificationStateProperty[] | cdktn.IResolvable

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
  public get(index: number): VerificationStatePropertyOutputReference {
    return new VerificationStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#comparison AwsInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#value AwsInsight#value}
  */
  readonly value: string;
}
export class WorkflowStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class WorkflowStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStatusPropertyOutputReference {
    return new WorkflowStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FiltersProperty {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#aws_account_id AwsInsight#aws_account_id}
  */
  readonly awsAccountId?: AwsAccountIdProperty[] | cdktn.IResolvable;
  /**
  * aws_account_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#aws_account_name AwsInsight#aws_account_name}
  */
  readonly awsAccountName?: AwsAccountNameProperty[] | cdktn.IResolvable;
  /**
  * company_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#company_name AwsInsight#company_name}
  */
  readonly companyName?: CompanyNameProperty[] | cdktn.IResolvable;
  /**
  * compliance_associated_standards_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#compliance_associated_standards_id AwsInsight#compliance_associated_standards_id}
  */
  readonly complianceAssociatedStandardsId?: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable;
  /**
  * compliance_security_control_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#compliance_security_control_id AwsInsight#compliance_security_control_id}
  */
  readonly complianceSecurityControlId?: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable;
  /**
  * compliance_security_control_parameters_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#compliance_security_control_parameters_name AwsInsight#compliance_security_control_parameters_name}
  */
  readonly complianceSecurityControlParametersName?: ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable;
  /**
  * compliance_security_control_parameters_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#compliance_security_control_parameters_value AwsInsight#compliance_security_control_parameters_value}
  */
  readonly complianceSecurityControlParametersValue?: ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable;
  /**
  * compliance_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#compliance_status AwsInsight#compliance_status}
  */
  readonly complianceStatus?: ComplianceStatusProperty[] | cdktn.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#confidence AwsInsight#confidence}
  */
  readonly confidence?: ConfidenceProperty[] | cdktn.IResolvable;
  /**
  * created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#created_at AwsInsight#created_at}
  */
  readonly createdAt?: CreatedAtProperty[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#criticality AwsInsight#criticality}
  */
  readonly criticality?: CriticalityProperty[] | cdktn.IResolvable;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#description AwsInsight#description}
  */
  readonly description?: DescriptionProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_confidence AwsInsight#finding_provider_fields_confidence}
  */
  readonly findingProviderFieldsConfidence?: FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_criticality AwsInsight#finding_provider_fields_criticality}
  */
  readonly findingProviderFieldsCriticality?: FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id AwsInsight#finding_provider_fields_related_findings_id}
  */
  readonly findingProviderFieldsRelatedFindingsId?: FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn AwsInsight#finding_provider_fields_related_findings_product_arn}
  */
  readonly findingProviderFieldsRelatedFindingsProductArn?: FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label AwsInsight#finding_provider_fields_severity_label}
  */
  readonly findingProviderFieldsSeverityLabel?: FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_original block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original AwsInsight#finding_provider_fields_severity_original}
  */
  readonly findingProviderFieldsSeverityOriginal?: FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#finding_provider_fields_types AwsInsight#finding_provider_fields_types}
  */
  readonly findingProviderFieldsTypes?: FindingProviderFieldsTypesProperty[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#first_observed_at AwsInsight#first_observed_at}
  */
  readonly firstObservedAt?: FirstObservedAtProperty[] | cdktn.IResolvable;
  /**
  * generator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#generator_id AwsInsight#generator_id}
  */
  readonly generatorId?: GeneratorIdProperty[] | cdktn.IResolvable;
  /**
  * id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#id AwsInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: IdProperty[] | cdktn.IResolvable;
  /**
  * keyword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#keyword AwsInsight#keyword}
  */
  readonly keyword?: KeywordProperty[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#last_observed_at AwsInsight#last_observed_at}
  */
  readonly lastObservedAt?: LastObservedAtProperty[] | cdktn.IResolvable;
  /**
  * malware_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#malware_name AwsInsight#malware_name}
  */
  readonly malwareName?: MalwareNameProperty[] | cdktn.IResolvable;
  /**
  * malware_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#malware_path AwsInsight#malware_path}
  */
  readonly malwarePath?: MalwarePathProperty[] | cdktn.IResolvable;
  /**
  * malware_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#malware_state AwsInsight#malware_state}
  */
  readonly malwareState?: MalwareStateProperty[] | cdktn.IResolvable;
  /**
  * malware_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#malware_type AwsInsight#malware_type}
  */
  readonly malwareType?: MalwareTypeProperty[] | cdktn.IResolvable;
  /**
  * network_destination_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_destination_domain AwsInsight#network_destination_domain}
  */
  readonly networkDestinationDomain?: NetworkDestinationDomainProperty[] | cdktn.IResolvable;
  /**
  * network_destination_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_destination_ipv4 AwsInsight#network_destination_ipv4}
  */
  readonly networkDestinationIpv4?: NetworkDestinationIpv4Property[] | cdktn.IResolvable;
  /**
  * network_destination_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_destination_ipv6 AwsInsight#network_destination_ipv6}
  */
  readonly networkDestinationIpv6?: NetworkDestinationIpv6Property[] | cdktn.IResolvable;
  /**
  * network_destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_destination_port AwsInsight#network_destination_port}
  */
  readonly networkDestinationPort?: NetworkDestinationPortProperty[] | cdktn.IResolvable;
  /**
  * network_direction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_direction AwsInsight#network_direction}
  */
  readonly networkDirection?: NetworkDirectionProperty[] | cdktn.IResolvable;
  /**
  * network_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_protocol AwsInsight#network_protocol}
  */
  readonly networkProtocol?: NetworkProtocolProperty[] | cdktn.IResolvable;
  /**
  * network_source_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_source_domain AwsInsight#network_source_domain}
  */
  readonly networkSourceDomain?: NetworkSourceDomainProperty[] | cdktn.IResolvable;
  /**
  * network_source_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_source_ipv4 AwsInsight#network_source_ipv4}
  */
  readonly networkSourceIpv4?: NetworkSourceIpv4Property[] | cdktn.IResolvable;
  /**
  * network_source_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_source_ipv6 AwsInsight#network_source_ipv6}
  */
  readonly networkSourceIpv6?: NetworkSourceIpv6Property[] | cdktn.IResolvable;
  /**
  * network_source_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_source_mac AwsInsight#network_source_mac}
  */
  readonly networkSourceMac?: NetworkSourceMacProperty[] | cdktn.IResolvable;
  /**
  * network_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#network_source_port AwsInsight#network_source_port}
  */
  readonly networkSourcePort?: NetworkSourcePortProperty[] | cdktn.IResolvable;
  /**
  * note_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#note_text AwsInsight#note_text}
  */
  readonly noteText?: NoteTextProperty[] | cdktn.IResolvable;
  /**
  * note_updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#note_updated_at AwsInsight#note_updated_at}
  */
  readonly noteUpdatedAt?: NoteUpdatedAtProperty[] | cdktn.IResolvable;
  /**
  * note_updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#note_updated_by AwsInsight#note_updated_by}
  */
  readonly noteUpdatedBy?: NoteUpdatedByProperty[] | cdktn.IResolvable;
  /**
  * process_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_launched_at AwsInsight#process_launched_at}
  */
  readonly processLaunchedAt?: ProcessLaunchedAtProperty[] | cdktn.IResolvable;
  /**
  * process_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_name AwsInsight#process_name}
  */
  readonly processName?: ProcessNameProperty[] | cdktn.IResolvable;
  /**
  * process_parent_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_parent_pid AwsInsight#process_parent_pid}
  */
  readonly processParentPid?: ProcessParentPidProperty[] | cdktn.IResolvable;
  /**
  * process_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_path AwsInsight#process_path}
  */
  readonly processPath?: ProcessPathProperty[] | cdktn.IResolvable;
  /**
  * process_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_pid AwsInsight#process_pid}
  */
  readonly processPid?: ProcessPidProperty[] | cdktn.IResolvable;
  /**
  * process_terminated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#process_terminated_at AwsInsight#process_terminated_at}
  */
  readonly processTerminatedAt?: ProcessTerminatedAtProperty[] | cdktn.IResolvable;
  /**
  * product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#product_arn AwsInsight#product_arn}
  */
  readonly productArn?: ProductArnProperty[] | cdktn.IResolvable;
  /**
  * product_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#product_fields AwsInsight#product_fields}
  */
  readonly productFields?: ProductFieldsProperty[] | cdktn.IResolvable;
  /**
  * product_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#product_name AwsInsight#product_name}
  */
  readonly productName?: ProductNameProperty[] | cdktn.IResolvable;
  /**
  * recommendation_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#recommendation_text AwsInsight#recommendation_text}
  */
  readonly recommendationText?: RecommendationTextProperty[] | cdktn.IResolvable;
  /**
  * record_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#record_state AwsInsight#record_state}
  */
  readonly recordState?: RecordStateProperty[] | cdktn.IResolvable;
  /**
  * related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#related_findings_id AwsInsight#related_findings_id}
  */
  readonly relatedFindingsId?: RelatedFindingsIdProperty[] | cdktn.IResolvable;
  /**
  * related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#related_findings_product_arn AwsInsight#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: RelatedFindingsProductArnProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_iam_instance_profile_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_iam_instance_profile_arn AwsInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
  */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_image_id AwsInsight#resource_aws_ec2_instance_image_id}
  */
  readonly resourceAwsEc2InstanceImageId?: ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv4_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv4_addresses AwsInsight#resource_aws_ec2_instance_ipv4_addresses}
  */
  readonly resourceAwsEc2InstanceIpv4Addresses?: ResourceAwsEc2InstanceIpv4AddressesProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv6_addresses AwsInsight#resource_aws_ec2_instance_ipv6_addresses}
  */
  readonly resourceAwsEc2InstanceIpv6Addresses?: ResourceAwsEc2InstanceIpv6AddressesProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_key_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_key_name AwsInsight#resource_aws_ec2_instance_key_name}
  */
  readonly resourceAwsEc2InstanceKeyName?: ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_launched_at AwsInsight#resource_aws_ec2_instance_launched_at}
  */
  readonly resourceAwsEc2InstanceLaunchedAt?: ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_subnet_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_subnet_id AwsInsight#resource_aws_ec2_instance_subnet_id}
  */
  readonly resourceAwsEc2InstanceSubnetId?: ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_type AwsInsight#resource_aws_ec2_instance_type}
  */
  readonly resourceAwsEc2InstanceType?: ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_vpc_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_vpc_id AwsInsight#resource_aws_ec2_instance_vpc_id}
  */
  readonly resourceAwsEc2InstanceVpcId?: ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at AwsInsight#resource_aws_iam_access_key_created_at}
  */
  readonly resourceAwsIamAccessKeyCreatedAt?: ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status AwsInsight#resource_aws_iam_access_key_status}
  */
  readonly resourceAwsIamAccessKeyStatus?: ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_user_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name AwsInsight#resource_aws_iam_access_key_user_name}
  */
  readonly resourceAwsIamAccessKeyUserName?: ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id AwsInsight#resource_aws_s3_bucket_owner_id}
  */
  readonly resourceAwsS3BucketOwnerId?: ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name AwsInsight#resource_aws_s3_bucket_owner_name}
  */
  readonly resourceAwsS3BucketOwnerName?: ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable;
  /**
  * resource_container_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_container_image_id AwsInsight#resource_container_image_id}
  */
  readonly resourceContainerImageId?: ResourceContainerImageIdProperty[] | cdktn.IResolvable;
  /**
  * resource_container_image_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_container_image_name AwsInsight#resource_container_image_name}
  */
  readonly resourceContainerImageName?: ResourceContainerImageNameProperty[] | cdktn.IResolvable;
  /**
  * resource_container_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_container_launched_at AwsInsight#resource_container_launched_at}
  */
  readonly resourceContainerLaunchedAt?: ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable;
  /**
  * resource_container_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_container_name AwsInsight#resource_container_name}
  */
  readonly resourceContainerName?: ResourceContainerNameProperty[] | cdktn.IResolvable;
  /**
  * resource_details_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_details_other AwsInsight#resource_details_other}
  */
  readonly resourceDetailsOther?: ResourceDetailsOtherProperty[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_id AwsInsight#resource_id}
  */
  readonly resourceId?: ResourceIdProperty[] | cdktn.IResolvable;
  /**
  * resource_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_partition AwsInsight#resource_partition}
  */
  readonly resourcePartition?: ResourcePartitionProperty[] | cdktn.IResolvable;
  /**
  * resource_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_region AwsInsight#resource_region}
  */
  readonly resourceRegion?: ResourceRegionProperty[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_tags AwsInsight#resource_tags}
  */
  readonly resourceTags?: ResourceTagsProperty[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#resource_type AwsInsight#resource_type}
  */
  readonly resourceType?: ResourceTypeProperty[] | cdktn.IResolvable;
  /**
  * severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#severity_label AwsInsight#severity_label}
  */
  readonly severityLabel?: SeverityLabelProperty[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#source_url AwsInsight#source_url}
  */
  readonly sourceUrl?: SourceUrlProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_category AwsInsight#threat_intel_indicator_category}
  */
  readonly threatIntelIndicatorCategory?: ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at AwsInsight#threat_intel_indicator_last_observed_at}
  */
  readonly threatIntelIndicatorLastObservedAt?: ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_source AwsInsight#threat_intel_indicator_source}
  */
  readonly threatIntelIndicatorSource?: ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url AwsInsight#threat_intel_indicator_source_url}
  */
  readonly threatIntelIndicatorSourceUrl?: ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_type AwsInsight#threat_intel_indicator_type}
  */
  readonly threatIntelIndicatorType?: ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#threat_intel_indicator_value AwsInsight#threat_intel_indicator_value}
  */
  readonly threatIntelIndicatorValue?: ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#title AwsInsight#title}
  */
  readonly title?: TitleProperty[] | cdktn.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#type AwsInsight#type}
  */
  readonly type?: TypeProperty[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#updated_at AwsInsight#updated_at}
  */
  readonly updatedAt?: UpdatedAtProperty[] | cdktn.IResolvable;
  /**
  * user_defined_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#user_defined_values AwsInsight#user_defined_values}
  */
  readonly userDefinedValues?: UserDefinedValuesProperty[] | cdktn.IResolvable;
  /**
  * verification_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#verification_state AwsInsight#verification_state}
  */
  readonly verificationState?: VerificationStateProperty[] | cdktn.IResolvable;
  /**
  * workflow_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_insight#workflow_status AwsInsight#workflow_status}
  */
  readonly workflowStatus?: WorkflowStatusProperty[] | cdktn.IResolvable;
}
export class FiltersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FiltersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._awsAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
    }
    if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
    }
    if (this._complianceSecurityControlId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
    }
    if (this._complianceSecurityControlParametersName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersName = this._complianceSecurityControlParametersName?.internalValue;
    }
    if (this._complianceSecurityControlParametersValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersValue = this._complianceSecurityControlParametersValue?.internalValue;
    }
    if (this._complianceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
    }
    if (this._confidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence?.internalValue;
    }
    if (this._createdAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._findingProviderFieldsConfidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence?.internalValue;
    }
    if (this._findingProviderFieldsCriticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn?.internalValue;
    }
    if (this._findingProviderFieldsSeverityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel?.internalValue;
    }
    if (this._findingProviderFieldsSeverityOriginal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal?.internalValue;
    }
    if (this._findingProviderFieldsTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._generatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._keyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._malwareName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareName = this._malwareName?.internalValue;
    }
    if (this._malwarePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwarePath = this._malwarePath?.internalValue;
    }
    if (this._malwareState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareState = this._malwareState?.internalValue;
    }
    if (this._malwareType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareType = this._malwareType?.internalValue;
    }
    if (this._networkDestinationDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationDomain = this._networkDestinationDomain?.internalValue;
    }
    if (this._networkDestinationIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4?.internalValue;
    }
    if (this._networkDestinationIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6?.internalValue;
    }
    if (this._networkDestinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationPort = this._networkDestinationPort?.internalValue;
    }
    if (this._networkDirection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirection = this._networkDirection?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._networkSourceDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceDomain = this._networkSourceDomain?.internalValue;
    }
    if (this._networkSourceIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv4 = this._networkSourceIpv4?.internalValue;
    }
    if (this._networkSourceIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv6 = this._networkSourceIpv6?.internalValue;
    }
    if (this._networkSourceMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceMac = this._networkSourceMac?.internalValue;
    }
    if (this._networkSourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourcePort = this._networkSourcePort?.internalValue;
    }
    if (this._noteText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText?.internalValue;
    }
    if (this._noteUpdatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
    }
    if (this._noteUpdatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
    }
    if (this._processLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processLaunchedAt = this._processLaunchedAt?.internalValue;
    }
    if (this._processName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName?.internalValue;
    }
    if (this._processParentPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processParentPid = this._processParentPid?.internalValue;
    }
    if (this._processPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPath = this._processPath?.internalValue;
    }
    if (this._processPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPid = this._processPid?.internalValue;
    }
    if (this._processTerminatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processTerminatedAt = this._processTerminatedAt?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFields = this._productFields?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recommendationText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationText = this._recommendationText?.internalValue;
    }
    if (this._recordState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState?.internalValue;
    }
    if (this._relatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
    }
    if (this._relatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv4Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceKeyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName?.internalValue;
    }
    if (this._resourceAwsEc2InstanceLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt?.internalValue;
    }
    if (this._resourceAwsEc2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType?.internalValue;
    }
    if (this._resourceAwsEc2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyCreatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyUserName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName?.internalValue;
    }
    if (this._resourceContainerImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageId = this._resourceContainerImageId?.internalValue;
    }
    if (this._resourceContainerImageName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageName = this._resourceContainerImageName?.internalValue;
    }
    if (this._resourceContainerLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt?.internalValue;
    }
    if (this._resourceContainerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerName = this._resourceContainerName?.internalValue;
    }
    if (this._resourceDetailsOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourcePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
    }
    if (this._resourceRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory?.internalValue;
    }
    if (this._threatIntelIndicatorLastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt?.internalValue;
    }
    if (this._threatIntelIndicatorSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource?.internalValue;
    }
    if (this._threatIntelIndicatorSourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType?.internalValue;
    }
    if (this._threatIntelIndicatorValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._userDefinedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedValues = this._userDefinedValues?.internalValue;
    }
    if (this._verificationState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState?.internalValue;
    }
    if (this._workflowStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId.internalValue = undefined;
      this._awsAccountName.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceAssociatedStandardsId.internalValue = undefined;
      this._complianceSecurityControlId.internalValue = undefined;
      this._complianceSecurityControlParametersName.internalValue = undefined;
      this._complianceSecurityControlParametersValue.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._findingProviderFieldsConfidence.internalValue = undefined;
      this._findingProviderFieldsCriticality.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
      this._findingProviderFieldsSeverityLabel.internalValue = undefined;
      this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
      this._findingProviderFieldsTypes.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._keyword.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._malwareName.internalValue = undefined;
      this._malwarePath.internalValue = undefined;
      this._malwareState.internalValue = undefined;
      this._malwareType.internalValue = undefined;
      this._networkDestinationDomain.internalValue = undefined;
      this._networkDestinationIpv4.internalValue = undefined;
      this._networkDestinationIpv6.internalValue = undefined;
      this._networkDestinationPort.internalValue = undefined;
      this._networkDirection.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._networkSourceDomain.internalValue = undefined;
      this._networkSourceIpv4.internalValue = undefined;
      this._networkSourceIpv6.internalValue = undefined;
      this._networkSourceMac.internalValue = undefined;
      this._networkSourcePort.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._processLaunchedAt.internalValue = undefined;
      this._processName.internalValue = undefined;
      this._processParentPid.internalValue = undefined;
      this._processPath.internalValue = undefined;
      this._processPid.internalValue = undefined;
      this._processTerminatedAt.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productFields.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recommendationText.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
      this._resourceAwsEc2InstanceImageId.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
      this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
      this._resourceAwsEc2InstanceType.internalValue = undefined;
      this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
      this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
      this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
      this._resourceAwsS3BucketOwnerId.internalValue = undefined;
      this._resourceAwsS3BucketOwnerName.internalValue = undefined;
      this._resourceContainerImageId.internalValue = undefined;
      this._resourceContainerImageName.internalValue = undefined;
      this._resourceContainerLaunchedAt.internalValue = undefined;
      this._resourceContainerName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._threatIntelIndicatorCategory.internalValue = undefined;
      this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
      this._threatIntelIndicatorSource.internalValue = undefined;
      this._threatIntelIndicatorSourceUrl.internalValue = undefined;
      this._threatIntelIndicatorType.internalValue = undefined;
      this._threatIntelIndicatorValue.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedValues.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._awsAccountName.internalValue = value.awsAccountName;
      this._companyName.internalValue = value.companyName;
      this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
      this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
      this._complianceSecurityControlParametersName.internalValue = value.complianceSecurityControlParametersName;
      this._complianceSecurityControlParametersValue.internalValue = value.complianceSecurityControlParametersValue;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._findingProviderFieldsConfidence.internalValue = value.findingProviderFieldsConfidence;
      this._findingProviderFieldsCriticality.internalValue = value.findingProviderFieldsCriticality;
      this._findingProviderFieldsRelatedFindingsId.internalValue = value.findingProviderFieldsRelatedFindingsId;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value.findingProviderFieldsRelatedFindingsProductArn;
      this._findingProviderFieldsSeverityLabel.internalValue = value.findingProviderFieldsSeverityLabel;
      this._findingProviderFieldsSeverityOriginal.internalValue = value.findingProviderFieldsSeverityOriginal;
      this._findingProviderFieldsTypes.internalValue = value.findingProviderFieldsTypes;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._keyword.internalValue = value.keyword;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._malwareName.internalValue = value.malwareName;
      this._malwarePath.internalValue = value.malwarePath;
      this._malwareState.internalValue = value.malwareState;
      this._malwareType.internalValue = value.malwareType;
      this._networkDestinationDomain.internalValue = value.networkDestinationDomain;
      this._networkDestinationIpv4.internalValue = value.networkDestinationIpv4;
      this._networkDestinationIpv6.internalValue = value.networkDestinationIpv6;
      this._networkDestinationPort.internalValue = value.networkDestinationPort;
      this._networkDirection.internalValue = value.networkDirection;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._networkSourceDomain.internalValue = value.networkSourceDomain;
      this._networkSourceIpv4.internalValue = value.networkSourceIpv4;
      this._networkSourceIpv6.internalValue = value.networkSourceIpv6;
      this._networkSourceMac.internalValue = value.networkSourceMac;
      this._networkSourcePort.internalValue = value.networkSourcePort;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._processLaunchedAt.internalValue = value.processLaunchedAt;
      this._processName.internalValue = value.processName;
      this._processParentPid.internalValue = value.processParentPid;
      this._processPath.internalValue = value.processPath;
      this._processPid.internalValue = value.processPid;
      this._processTerminatedAt.internalValue = value.processTerminatedAt;
      this._productArn.internalValue = value.productArn;
      this._productFields.internalValue = value.productFields;
      this._productName.internalValue = value.productName;
      this._recommendationText.internalValue = value.recommendationText;
      this._recordState.internalValue = value.recordState;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value.resourceAwsEc2InstanceIamInstanceProfileArn;
      this._resourceAwsEc2InstanceImageId.internalValue = value.resourceAwsEc2InstanceImageId;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value.resourceAwsEc2InstanceIpv4Addresses;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value.resourceAwsEc2InstanceIpv6Addresses;
      this._resourceAwsEc2InstanceKeyName.internalValue = value.resourceAwsEc2InstanceKeyName;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = value.resourceAwsEc2InstanceLaunchedAt;
      this._resourceAwsEc2InstanceSubnetId.internalValue = value.resourceAwsEc2InstanceSubnetId;
      this._resourceAwsEc2InstanceType.internalValue = value.resourceAwsEc2InstanceType;
      this._resourceAwsEc2InstanceVpcId.internalValue = value.resourceAwsEc2InstanceVpcId;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = value.resourceAwsIamAccessKeyCreatedAt;
      this._resourceAwsIamAccessKeyStatus.internalValue = value.resourceAwsIamAccessKeyStatus;
      this._resourceAwsIamAccessKeyUserName.internalValue = value.resourceAwsIamAccessKeyUserName;
      this._resourceAwsS3BucketOwnerId.internalValue = value.resourceAwsS3BucketOwnerId;
      this._resourceAwsS3BucketOwnerName.internalValue = value.resourceAwsS3BucketOwnerName;
      this._resourceContainerImageId.internalValue = value.resourceContainerImageId;
      this._resourceContainerImageName.internalValue = value.resourceContainerImageName;
      this._resourceContainerLaunchedAt.internalValue = value.resourceContainerLaunchedAt;
      this._resourceContainerName.internalValue = value.resourceContainerName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severityLabel.internalValue = value.severityLabel;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._threatIntelIndicatorCategory.internalValue = value.threatIntelIndicatorCategory;
      this._threatIntelIndicatorLastObservedAt.internalValue = value.threatIntelIndicatorLastObservedAt;
      this._threatIntelIndicatorSource.internalValue = value.threatIntelIndicatorSource;
      this._threatIntelIndicatorSourceUrl.internalValue = value.threatIntelIndicatorSourceUrl;
      this._threatIntelIndicatorType.internalValue = value.threatIntelIndicatorType;
      this._threatIntelIndicatorValue.internalValue = value.threatIntelIndicatorValue;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedValues.internalValue = value.userDefinedValues;
      this._verificationState.internalValue = value.verificationState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new AwsAccountIdPropertyList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: AwsAccountIdProperty[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // aws_account_name - computed: false, optional: true, required: false
  private _awsAccountName = new AwsAccountNamePropertyList(this, "aws_account_name", true);
  public get awsAccountName() {
    return this._awsAccountName;
  }
  public putAwsAccountName(value: AwsAccountNameProperty[] | cdktn.IResolvable) {
    this._awsAccountName.internalValue = value;
  }
  public resetAwsAccountName() {
    this._awsAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNameInput() {
    return this._awsAccountName.internalValue;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName = new CompanyNamePropertyList(this, "company_name", true);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: CompanyNameProperty[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_associated_standards_id - computed: false, optional: true, required: false
  private _complianceAssociatedStandardsId = new ComplianceAssociatedStandardsIdPropertyList(this, "compliance_associated_standards_id", true);
  public get complianceAssociatedStandardsId() {
    return this._complianceAssociatedStandardsId;
  }
  public putComplianceAssociatedStandardsId(value: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable) {
    this._complianceAssociatedStandardsId.internalValue = value;
  }
  public resetComplianceAssociatedStandardsId() {
    this._complianceAssociatedStandardsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAssociatedStandardsIdInput() {
    return this._complianceAssociatedStandardsId.internalValue;
  }

  // compliance_security_control_id - computed: false, optional: true, required: false
  private _complianceSecurityControlId = new ComplianceSecurityControlIdPropertyList(this, "compliance_security_control_id", true);
  public get complianceSecurityControlId() {
    return this._complianceSecurityControlId;
  }
  public putComplianceSecurityControlId(value: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable) {
    this._complianceSecurityControlId.internalValue = value;
  }
  public resetComplianceSecurityControlId() {
    this._complianceSecurityControlId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlIdInput() {
    return this._complianceSecurityControlId.internalValue;
  }

  // compliance_security_control_parameters_name - computed: false, optional: true, required: false
  private _complianceSecurityControlParametersName = new ComplianceSecurityControlParametersNamePropertyList(this, "compliance_security_control_parameters_name", true);
  public get complianceSecurityControlParametersName() {
    return this._complianceSecurityControlParametersName;
  }
  public putComplianceSecurityControlParametersName(value: ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersName.internalValue = value;
  }
  public resetComplianceSecurityControlParametersName() {
    this._complianceSecurityControlParametersName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersNameInput() {
    return this._complianceSecurityControlParametersName.internalValue;
  }

  // compliance_security_control_parameters_value - computed: false, optional: true, required: false
  private _complianceSecurityControlParametersValue = new ComplianceSecurityControlParametersValuePropertyList(this, "compliance_security_control_parameters_value", true);
  public get complianceSecurityControlParametersValue() {
    return this._complianceSecurityControlParametersValue;
  }
  public putComplianceSecurityControlParametersValue(value: ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersValue.internalValue = value;
  }
  public resetComplianceSecurityControlParametersValue() {
    this._complianceSecurityControlParametersValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersValueInput() {
    return this._complianceSecurityControlParametersValue.internalValue;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus = new ComplianceStatusPropertyList(this, "compliance_status", true);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: ComplianceStatusProperty[] | cdktn.IResolvable) {
    this._complianceStatus.internalValue = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus.internalValue;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence = new ConfidencePropertyList(this, "confidence", true);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: ConfidenceProperty[] | cdktn.IResolvable) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt = new CreatedAtPropertyList(this, "created_at", true);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: CreatedAtProperty[] | cdktn.IResolvable) {
    this._createdAt.internalValue = value;
  }
  public resetCreatedAt() {
    this._createdAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new CriticalityPropertyList(this, "criticality", true);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: CriticalityProperty[] | cdktn.IResolvable) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new DescriptionPropertyList(this, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: DescriptionProperty[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // finding_provider_fields_confidence - computed: false, optional: true, required: false
  private _findingProviderFieldsConfidence = new FindingProviderFieldsConfidencePropertyList(this, "finding_provider_fields_confidence", true);
  public get findingProviderFieldsConfidence() {
    return this._findingProviderFieldsConfidence;
  }
  public putFindingProviderFieldsConfidence(value: FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsConfidence.internalValue = value;
  }
  public resetFindingProviderFieldsConfidence() {
    this._findingProviderFieldsConfidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsConfidenceInput() {
    return this._findingProviderFieldsConfidence.internalValue;
  }

  // finding_provider_fields_criticality - computed: false, optional: true, required: false
  private _findingProviderFieldsCriticality = new FindingProviderFieldsCriticalityPropertyList(this, "finding_provider_fields_criticality", true);
  public get findingProviderFieldsCriticality() {
    return this._findingProviderFieldsCriticality;
  }
  public putFindingProviderFieldsCriticality(value: FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsCriticality.internalValue = value;
  }
  public resetFindingProviderFieldsCriticality() {
    this._findingProviderFieldsCriticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsCriticalityInput() {
    return this._findingProviderFieldsCriticality.internalValue;
  }

  // finding_provider_fields_related_findings_id - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsId = new FindingProviderFieldsRelatedFindingsIdPropertyList(this, "finding_provider_fields_related_findings_id", true);
  public get findingProviderFieldsRelatedFindingsId() {
    return this._findingProviderFieldsRelatedFindingsId;
  }
  public putFindingProviderFieldsRelatedFindingsId(value: FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsId.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsId() {
    this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsIdInput() {
    return this._findingProviderFieldsRelatedFindingsId.internalValue;
  }

  // finding_provider_fields_related_findings_product_arn - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsProductArn = new FindingProviderFieldsRelatedFindingsProductArnPropertyList(this, "finding_provider_fields_related_findings_product_arn", true);
  public get findingProviderFieldsRelatedFindingsProductArn() {
    return this._findingProviderFieldsRelatedFindingsProductArn;
  }
  public putFindingProviderFieldsRelatedFindingsProductArn(value: FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsProductArn() {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsProductArnInput() {
    return this._findingProviderFieldsRelatedFindingsProductArn.internalValue;
  }

  // finding_provider_fields_severity_label - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityLabel = new FindingProviderFieldsSeverityLabelPropertyList(this, "finding_provider_fields_severity_label", true);
  public get findingProviderFieldsSeverityLabel() {
    return this._findingProviderFieldsSeverityLabel;
  }
  public putFindingProviderFieldsSeverityLabel(value: FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityLabel.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityLabel() {
    this._findingProviderFieldsSeverityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityLabelInput() {
    return this._findingProviderFieldsSeverityLabel.internalValue;
  }

  // finding_provider_fields_severity_original - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityOriginal = new FindingProviderFieldsSeverityOriginalPropertyList(this, "finding_provider_fields_severity_original", true);
  public get findingProviderFieldsSeverityOriginal() {
    return this._findingProviderFieldsSeverityOriginal;
  }
  public putFindingProviderFieldsSeverityOriginal(value: FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityOriginal.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityOriginal() {
    this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityOriginalInput() {
    return this._findingProviderFieldsSeverityOriginal.internalValue;
  }

  // finding_provider_fields_types - computed: false, optional: true, required: false
  private _findingProviderFieldsTypes = new FindingProviderFieldsTypesPropertyList(this, "finding_provider_fields_types", true);
  public get findingProviderFieldsTypes() {
    return this._findingProviderFieldsTypes;
  }
  public putFindingProviderFieldsTypes(value: FindingProviderFieldsTypesProperty[] | cdktn.IResolvable) {
    this._findingProviderFieldsTypes.internalValue = value;
  }
  public resetFindingProviderFieldsTypes() {
    this._findingProviderFieldsTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsTypesInput() {
    return this._findingProviderFieldsTypes.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new FirstObservedAtPropertyList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: FirstObservedAtProperty[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // generator_id - computed: false, optional: true, required: false
  private _generatorId = new GeneratorIdPropertyList(this, "generator_id", true);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: GeneratorIdProperty[] | cdktn.IResolvable) {
    this._generatorId.internalValue = value;
  }
  public resetGeneratorId() {
    this._generatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new IdPropertyList(this, "id", true);
  public get id() {
    return this._id;
  }
  public putId(value: IdProperty[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword = new KeywordPropertyList(this, "keyword", true);
  public get keyword() {
    return this._keyword;
  }
  public putKeyword(value: KeywordProperty[] | cdktn.IResolvable) {
    this._keyword.internalValue = value;
  }
  public resetKeyword() {
    this._keyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new LastObservedAtPropertyList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: LastObservedAtProperty[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // malware_name - computed: false, optional: true, required: false
  private _malwareName = new MalwareNamePropertyList(this, "malware_name", true);
  public get malwareName() {
    return this._malwareName;
  }
  public putMalwareName(value: MalwareNameProperty[] | cdktn.IResolvable) {
    this._malwareName.internalValue = value;
  }
  public resetMalwareName() {
    this._malwareName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNameInput() {
    return this._malwareName.internalValue;
  }

  // malware_path - computed: false, optional: true, required: false
  private _malwarePath = new MalwarePathPropertyList(this, "malware_path", true);
  public get malwarePath() {
    return this._malwarePath;
  }
  public putMalwarePath(value: MalwarePathProperty[] | cdktn.IResolvable) {
    this._malwarePath.internalValue = value;
  }
  public resetMalwarePath() {
    this._malwarePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwarePathInput() {
    return this._malwarePath.internalValue;
  }

  // malware_state - computed: false, optional: true, required: false
  private _malwareState = new MalwareStatePropertyList(this, "malware_state", true);
  public get malwareState() {
    return this._malwareState;
  }
  public putMalwareState(value: MalwareStateProperty[] | cdktn.IResolvable) {
    this._malwareState.internalValue = value;
  }
  public resetMalwareState() {
    this._malwareState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStateInput() {
    return this._malwareState.internalValue;
  }

  // malware_type - computed: false, optional: true, required: false
  private _malwareType = new MalwareTypePropertyList(this, "malware_type", true);
  public get malwareType() {
    return this._malwareType;
  }
  public putMalwareType(value: MalwareTypeProperty[] | cdktn.IResolvable) {
    this._malwareType.internalValue = value;
  }
  public resetMalwareType() {
    this._malwareType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareTypeInput() {
    return this._malwareType.internalValue;
  }

  // network_destination_domain - computed: false, optional: true, required: false
  private _networkDestinationDomain = new NetworkDestinationDomainPropertyList(this, "network_destination_domain", true);
  public get networkDestinationDomain() {
    return this._networkDestinationDomain;
  }
  public putNetworkDestinationDomain(value: NetworkDestinationDomainProperty[] | cdktn.IResolvable) {
    this._networkDestinationDomain.internalValue = value;
  }
  public resetNetworkDestinationDomain() {
    this._networkDestinationDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationDomainInput() {
    return this._networkDestinationDomain.internalValue;
  }

  // network_destination_ipv4 - computed: false, optional: true, required: false
  private _networkDestinationIpv4 = new NetworkDestinationIpv4PropertyList(this, "network_destination_ipv4", true);
  public get networkDestinationIpv4() {
    return this._networkDestinationIpv4;
  }
  public putNetworkDestinationIpv4(value: NetworkDestinationIpv4Property[] | cdktn.IResolvable) {
    this._networkDestinationIpv4.internalValue = value;
  }
  public resetNetworkDestinationIpv4() {
    this._networkDestinationIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv4Input() {
    return this._networkDestinationIpv4.internalValue;
  }

  // network_destination_ipv6 - computed: false, optional: true, required: false
  private _networkDestinationIpv6 = new NetworkDestinationIpv6PropertyList(this, "network_destination_ipv6", true);
  public get networkDestinationIpv6() {
    return this._networkDestinationIpv6;
  }
  public putNetworkDestinationIpv6(value: NetworkDestinationIpv6Property[] | cdktn.IResolvable) {
    this._networkDestinationIpv6.internalValue = value;
  }
  public resetNetworkDestinationIpv6() {
    this._networkDestinationIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv6Input() {
    return this._networkDestinationIpv6.internalValue;
  }

  // network_destination_port - computed: false, optional: true, required: false
  private _networkDestinationPort = new NetworkDestinationPortPropertyList(this, "network_destination_port", true);
  public get networkDestinationPort() {
    return this._networkDestinationPort;
  }
  public putNetworkDestinationPort(value: NetworkDestinationPortProperty[] | cdktn.IResolvable) {
    this._networkDestinationPort.internalValue = value;
  }
  public resetNetworkDestinationPort() {
    this._networkDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationPortInput() {
    return this._networkDestinationPort.internalValue;
  }

  // network_direction - computed: false, optional: true, required: false
  private _networkDirection = new NetworkDirectionPropertyList(this, "network_direction", true);
  public get networkDirection() {
    return this._networkDirection;
  }
  public putNetworkDirection(value: NetworkDirectionProperty[] | cdktn.IResolvable) {
    this._networkDirection.internalValue = value;
  }
  public resetNetworkDirection() {
    this._networkDirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectionInput() {
    return this._networkDirection.internalValue;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol = new NetworkProtocolPropertyList(this, "network_protocol", true);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: NetworkProtocolProperty[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // network_source_domain - computed: false, optional: true, required: false
  private _networkSourceDomain = new NetworkSourceDomainPropertyList(this, "network_source_domain", true);
  public get networkSourceDomain() {
    return this._networkSourceDomain;
  }
  public putNetworkSourceDomain(value: NetworkSourceDomainProperty[] | cdktn.IResolvable) {
    this._networkSourceDomain.internalValue = value;
  }
  public resetNetworkSourceDomain() {
    this._networkSourceDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceDomainInput() {
    return this._networkSourceDomain.internalValue;
  }

  // network_source_ipv4 - computed: false, optional: true, required: false
  private _networkSourceIpv4 = new NetworkSourceIpv4PropertyList(this, "network_source_ipv4", true);
  public get networkSourceIpv4() {
    return this._networkSourceIpv4;
  }
  public putNetworkSourceIpv4(value: NetworkSourceIpv4Property[] | cdktn.IResolvable) {
    this._networkSourceIpv4.internalValue = value;
  }
  public resetNetworkSourceIpv4() {
    this._networkSourceIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv4Input() {
    return this._networkSourceIpv4.internalValue;
  }

  // network_source_ipv6 - computed: false, optional: true, required: false
  private _networkSourceIpv6 = new NetworkSourceIpv6PropertyList(this, "network_source_ipv6", true);
  public get networkSourceIpv6() {
    return this._networkSourceIpv6;
  }
  public putNetworkSourceIpv6(value: NetworkSourceIpv6Property[] | cdktn.IResolvable) {
    this._networkSourceIpv6.internalValue = value;
  }
  public resetNetworkSourceIpv6() {
    this._networkSourceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv6Input() {
    return this._networkSourceIpv6.internalValue;
  }

  // network_source_mac - computed: false, optional: true, required: false
  private _networkSourceMac = new NetworkSourceMacPropertyList(this, "network_source_mac", true);
  public get networkSourceMac() {
    return this._networkSourceMac;
  }
  public putNetworkSourceMac(value: NetworkSourceMacProperty[] | cdktn.IResolvable) {
    this._networkSourceMac.internalValue = value;
  }
  public resetNetworkSourceMac() {
    this._networkSourceMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceMacInput() {
    return this._networkSourceMac.internalValue;
  }

  // network_source_port - computed: false, optional: true, required: false
  private _networkSourcePort = new NetworkSourcePortPropertyList(this, "network_source_port", true);
  public get networkSourcePort() {
    return this._networkSourcePort;
  }
  public putNetworkSourcePort(value: NetworkSourcePortProperty[] | cdktn.IResolvable) {
    this._networkSourcePort.internalValue = value;
  }
  public resetNetworkSourcePort() {
    this._networkSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourcePortInput() {
    return this._networkSourcePort.internalValue;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText = new NoteTextPropertyList(this, "note_text", true);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: NoteTextProperty[] | cdktn.IResolvable) {
    this._noteText.internalValue = value;
  }
  public resetNoteText() {
    this._noteText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText.internalValue;
  }

  // note_updated_at - computed: false, optional: true, required: false
  private _noteUpdatedAt = new NoteUpdatedAtPropertyList(this, "note_updated_at", true);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: NoteUpdatedAtProperty[] | cdktn.IResolvable) {
    this._noteUpdatedAt.internalValue = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt.internalValue;
  }

  // note_updated_by - computed: false, optional: true, required: false
  private _noteUpdatedBy = new NoteUpdatedByPropertyList(this, "note_updated_by", true);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: NoteUpdatedByProperty[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // process_launched_at - computed: false, optional: true, required: false
  private _processLaunchedAt = new ProcessLaunchedAtPropertyList(this, "process_launched_at", true);
  public get processLaunchedAt() {
    return this._processLaunchedAt;
  }
  public putProcessLaunchedAt(value: ProcessLaunchedAtProperty[] | cdktn.IResolvable) {
    this._processLaunchedAt.internalValue = value;
  }
  public resetProcessLaunchedAt() {
    this._processLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLaunchedAtInput() {
    return this._processLaunchedAt.internalValue;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName = new ProcessNamePropertyList(this, "process_name", true);
  public get processName() {
    return this._processName;
  }
  public putProcessName(value: ProcessNameProperty[] | cdktn.IResolvable) {
    this._processName.internalValue = value;
  }
  public resetProcessName() {
    this._processName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName.internalValue;
  }

  // process_parent_pid - computed: false, optional: true, required: false
  private _processParentPid = new ProcessParentPidPropertyList(this, "process_parent_pid", true);
  public get processParentPid() {
    return this._processParentPid;
  }
  public putProcessParentPid(value: ProcessParentPidProperty[] | cdktn.IResolvable) {
    this._processParentPid.internalValue = value;
  }
  public resetProcessParentPid() {
    this._processParentPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processParentPidInput() {
    return this._processParentPid.internalValue;
  }

  // process_path - computed: false, optional: true, required: false
  private _processPath = new ProcessPathPropertyList(this, "process_path", true);
  public get processPath() {
    return this._processPath;
  }
  public putProcessPath(value: ProcessPathProperty[] | cdktn.IResolvable) {
    this._processPath.internalValue = value;
  }
  public resetProcessPath() {
    this._processPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPathInput() {
    return this._processPath.internalValue;
  }

  // process_pid - computed: false, optional: true, required: false
  private _processPid = new ProcessPidPropertyList(this, "process_pid", true);
  public get processPid() {
    return this._processPid;
  }
  public putProcessPid(value: ProcessPidProperty[] | cdktn.IResolvable) {
    this._processPid.internalValue = value;
  }
  public resetProcessPid() {
    this._processPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPidInput() {
    return this._processPid.internalValue;
  }

  // process_terminated_at - computed: false, optional: true, required: false
  private _processTerminatedAt = new ProcessTerminatedAtPropertyList(this, "process_terminated_at", true);
  public get processTerminatedAt() {
    return this._processTerminatedAt;
  }
  public putProcessTerminatedAt(value: ProcessTerminatedAtProperty[] | cdktn.IResolvable) {
    this._processTerminatedAt.internalValue = value;
  }
  public resetProcessTerminatedAt() {
    this._processTerminatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTerminatedAtInput() {
    return this._processTerminatedAt.internalValue;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn = new ProductArnPropertyList(this, "product_arn", true);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: ProductArnProperty[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_fields - computed: false, optional: true, required: false
  private _productFields = new ProductFieldsPropertyList(this, "product_fields", true);
  public get productFields() {
    return this._productFields;
  }
  public putProductFields(value: ProductFieldsProperty[] | cdktn.IResolvable) {
    this._productFields.internalValue = value;
  }
  public resetProductFields() {
    this._productFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFieldsInput() {
    return this._productFields.internalValue;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName = new ProductNamePropertyList(this, "product_name", true);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: ProductNameProperty[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // recommendation_text - computed: false, optional: true, required: false
  private _recommendationText = new RecommendationTextPropertyList(this, "recommendation_text", true);
  public get recommendationText() {
    return this._recommendationText;
  }
  public putRecommendationText(value: RecommendationTextProperty[] | cdktn.IResolvable) {
    this._recommendationText.internalValue = value;
  }
  public resetRecommendationText() {
    this._recommendationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTextInput() {
    return this._recommendationText.internalValue;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState = new RecordStatePropertyList(this, "record_state", true);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: RecordStateProperty[] | cdktn.IResolvable) {
    this._recordState.internalValue = value;
  }
  public resetRecordState() {
    this._recordState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState.internalValue;
  }

  // related_findings_id - computed: false, optional: true, required: false
  private _relatedFindingsId = new RelatedFindingsIdPropertyList(this, "related_findings_id", true);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: RelatedFindingsIdProperty[] | cdktn.IResolvable) {
    this._relatedFindingsId.internalValue = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId.internalValue;
  }

  // related_findings_product_arn - computed: false, optional: true, required: false
  private _relatedFindingsProductArn = new RelatedFindingsProductArnPropertyList(this, "related_findings_product_arn", true);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: RelatedFindingsProductArnProperty[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_aws_ec2_instance_iam_instance_profile_arn - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIamInstanceProfileArn = new ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList(this, "resource_aws_ec2_instance_iam_instance_profile_arn", true);
  public get resourceAwsEc2InstanceIamInstanceProfileArn() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn;
  }
  public putResourceAwsEc2InstanceIamInstanceProfileArn(value: ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue;
  }

  // resource_aws_ec2_instance_image_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceImageId = new ResourceAwsEc2InstanceImageIdPropertyList(this, "resource_aws_ec2_instance_image_id", true);
  public get resourceAwsEc2InstanceImageId() {
    return this._resourceAwsEc2InstanceImageId;
  }
  public putResourceAwsEc2InstanceImageId(value: ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceImageId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceImageId() {
    this._resourceAwsEc2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceImageIdInput() {
    return this._resourceAwsEc2InstanceImageId.internalValue;
  }

  // resource_aws_ec2_instance_ipv4_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv4Addresses = new ResourceAwsEc2InstanceIpv4AddressesPropertyList(this, "resource_aws_ec2_instance_ipv4_addresses", true);
  public get resourceAwsEc2InstanceIpv4Addresses() {
    return this._resourceAwsEc2InstanceIpv4Addresses;
  }
  public putResourceAwsEc2InstanceIpv4Addresses(value: ResourceAwsEc2InstanceIpv4AddressesProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv4Addresses() {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv4AddressesInput() {
    return this._resourceAwsEc2InstanceIpv4Addresses.internalValue;
  }

  // resource_aws_ec2_instance_ipv6_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv6Addresses = new ResourceAwsEc2InstanceIpv6AddressesPropertyList(this, "resource_aws_ec2_instance_ipv6_addresses", true);
  public get resourceAwsEc2InstanceIpv6Addresses() {
    return this._resourceAwsEc2InstanceIpv6Addresses;
  }
  public putResourceAwsEc2InstanceIpv6Addresses(value: ResourceAwsEc2InstanceIpv6AddressesProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv6Addresses() {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv6AddressesInput() {
    return this._resourceAwsEc2InstanceIpv6Addresses.internalValue;
  }

  // resource_aws_ec2_instance_key_name - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceKeyName = new ResourceAwsEc2InstanceKeyNamePropertyList(this, "resource_aws_ec2_instance_key_name", true);
  public get resourceAwsEc2InstanceKeyName() {
    return this._resourceAwsEc2InstanceKeyName;
  }
  public putResourceAwsEc2InstanceKeyName(value: ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceKeyName.internalValue = value;
  }
  public resetResourceAwsEc2InstanceKeyName() {
    this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceKeyNameInput() {
    return this._resourceAwsEc2InstanceKeyName.internalValue;
  }

  // resource_aws_ec2_instance_launched_at - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceLaunchedAt = new ResourceAwsEc2InstanceLaunchedAtPropertyList(this, "resource_aws_ec2_instance_launched_at", true);
  public get resourceAwsEc2InstanceLaunchedAt() {
    return this._resourceAwsEc2InstanceLaunchedAt;
  }
  public putResourceAwsEc2InstanceLaunchedAt(value: ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = value;
  }
  public resetResourceAwsEc2InstanceLaunchedAt() {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceLaunchedAtInput() {
    return this._resourceAwsEc2InstanceLaunchedAt.internalValue;
  }

  // resource_aws_ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceSubnetId = new ResourceAwsEc2InstanceSubnetIdPropertyList(this, "resource_aws_ec2_instance_subnet_id", true);
  public get resourceAwsEc2InstanceSubnetId() {
    return this._resourceAwsEc2InstanceSubnetId;
  }
  public putResourceAwsEc2InstanceSubnetId(value: ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceSubnetId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceSubnetId() {
    this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceSubnetIdInput() {
    return this._resourceAwsEc2InstanceSubnetId.internalValue;
  }

  // resource_aws_ec2_instance_type - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceType = new ResourceAwsEc2InstanceTypePropertyList(this, "resource_aws_ec2_instance_type", true);
  public get resourceAwsEc2InstanceType() {
    return this._resourceAwsEc2InstanceType;
  }
  public putResourceAwsEc2InstanceType(value: ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceType.internalValue = value;
  }
  public resetResourceAwsEc2InstanceType() {
    this._resourceAwsEc2InstanceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceTypeInput() {
    return this._resourceAwsEc2InstanceType.internalValue;
  }

  // resource_aws_ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceVpcId = new ResourceAwsEc2InstanceVpcIdPropertyList(this, "resource_aws_ec2_instance_vpc_id", true);
  public get resourceAwsEc2InstanceVpcId() {
    return this._resourceAwsEc2InstanceVpcId;
  }
  public putResourceAwsEc2InstanceVpcId(value: ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceVpcId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceVpcId() {
    this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceVpcIdInput() {
    return this._resourceAwsEc2InstanceVpcId.internalValue;
  }

  // resource_aws_iam_access_key_created_at - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyCreatedAt = new ResourceAwsIamAccessKeyCreatedAtPropertyList(this, "resource_aws_iam_access_key_created_at", true);
  public get resourceAwsIamAccessKeyCreatedAt() {
    return this._resourceAwsIamAccessKeyCreatedAt;
  }
  public putResourceAwsIamAccessKeyCreatedAt(value: ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyCreatedAt() {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyCreatedAtInput() {
    return this._resourceAwsIamAccessKeyCreatedAt.internalValue;
  }

  // resource_aws_iam_access_key_status - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyStatus = new ResourceAwsIamAccessKeyStatusPropertyList(this, "resource_aws_iam_access_key_status", true);
  public get resourceAwsIamAccessKeyStatus() {
    return this._resourceAwsIamAccessKeyStatus;
  }
  public putResourceAwsIamAccessKeyStatus(value: ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyStatus.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyStatus() {
    this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyStatusInput() {
    return this._resourceAwsIamAccessKeyStatus.internalValue;
  }

  // resource_aws_iam_access_key_user_name - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyUserName = new ResourceAwsIamAccessKeyUserNamePropertyList(this, "resource_aws_iam_access_key_user_name", true);
  public get resourceAwsIamAccessKeyUserName() {
    return this._resourceAwsIamAccessKeyUserName;
  }
  public putResourceAwsIamAccessKeyUserName(value: ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyUserName.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyUserName() {
    this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyUserNameInput() {
    return this._resourceAwsIamAccessKeyUserName.internalValue;
  }

  // resource_aws_s3_bucket_owner_id - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerId = new ResourceAwsS3BucketOwnerIdPropertyList(this, "resource_aws_s3_bucket_owner_id", true);
  public get resourceAwsS3BucketOwnerId() {
    return this._resourceAwsS3BucketOwnerId;
  }
  public putResourceAwsS3BucketOwnerId(value: ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerId.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerId() {
    this._resourceAwsS3BucketOwnerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerIdInput() {
    return this._resourceAwsS3BucketOwnerId.internalValue;
  }

  // resource_aws_s3_bucket_owner_name - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerName = new ResourceAwsS3BucketOwnerNamePropertyList(this, "resource_aws_s3_bucket_owner_name", true);
  public get resourceAwsS3BucketOwnerName() {
    return this._resourceAwsS3BucketOwnerName;
  }
  public putResourceAwsS3BucketOwnerName(value: ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerName.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerName() {
    this._resourceAwsS3BucketOwnerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerNameInput() {
    return this._resourceAwsS3BucketOwnerName.internalValue;
  }

  // resource_container_image_id - computed: false, optional: true, required: false
  private _resourceContainerImageId = new ResourceContainerImageIdPropertyList(this, "resource_container_image_id", true);
  public get resourceContainerImageId() {
    return this._resourceContainerImageId;
  }
  public putResourceContainerImageId(value: ResourceContainerImageIdProperty[] | cdktn.IResolvable) {
    this._resourceContainerImageId.internalValue = value;
  }
  public resetResourceContainerImageId() {
    this._resourceContainerImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageIdInput() {
    return this._resourceContainerImageId.internalValue;
  }

  // resource_container_image_name - computed: false, optional: true, required: false
  private _resourceContainerImageName = new ResourceContainerImageNamePropertyList(this, "resource_container_image_name", true);
  public get resourceContainerImageName() {
    return this._resourceContainerImageName;
  }
  public putResourceContainerImageName(value: ResourceContainerImageNameProperty[] | cdktn.IResolvable) {
    this._resourceContainerImageName.internalValue = value;
  }
  public resetResourceContainerImageName() {
    this._resourceContainerImageName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageNameInput() {
    return this._resourceContainerImageName.internalValue;
  }

  // resource_container_launched_at - computed: false, optional: true, required: false
  private _resourceContainerLaunchedAt = new ResourceContainerLaunchedAtPropertyList(this, "resource_container_launched_at", true);
  public get resourceContainerLaunchedAt() {
    return this._resourceContainerLaunchedAt;
  }
  public putResourceContainerLaunchedAt(value: ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable) {
    this._resourceContainerLaunchedAt.internalValue = value;
  }
  public resetResourceContainerLaunchedAt() {
    this._resourceContainerLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerLaunchedAtInput() {
    return this._resourceContainerLaunchedAt.internalValue;
  }

  // resource_container_name - computed: false, optional: true, required: false
  private _resourceContainerName = new ResourceContainerNamePropertyList(this, "resource_container_name", true);
  public get resourceContainerName() {
    return this._resourceContainerName;
  }
  public putResourceContainerName(value: ResourceContainerNameProperty[] | cdktn.IResolvable) {
    this._resourceContainerName.internalValue = value;
  }
  public resetResourceContainerName() {
    this._resourceContainerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerNameInput() {
    return this._resourceContainerName.internalValue;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther = new ResourceDetailsOtherPropertyList(this, "resource_details_other", true);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: ResourceDetailsOtherProperty[] | cdktn.IResolvable) {
    this._resourceDetailsOther.internalValue = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new ResourceIdPropertyList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: ResourceIdProperty[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_partition - computed: false, optional: true, required: false
  private _resourcePartition = new ResourcePartitionPropertyList(this, "resource_partition", true);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: ResourcePartitionProperty[] | cdktn.IResolvable) {
    this._resourcePartition.internalValue = value;
  }
  public resetResourcePartition() {
    this._resourcePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition.internalValue;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion = new ResourceRegionPropertyList(this, "resource_region", true);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: ResourceRegionProperty[] | cdktn.IResolvable) {
    this._resourceRegion.internalValue = value;
  }
  public resetResourceRegion() {
    this._resourceRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ResourceTagsPropertyList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ResourceTagsProperty[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new ResourceTypePropertyList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: ResourceTypeProperty[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity_label - computed: false, optional: true, required: false
  private _severityLabel = new SeverityLabelPropertyList(this, "severity_label", true);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SeverityLabelProperty[] | cdktn.IResolvable) {
    this._severityLabel.internalValue = value;
  }
  public resetSeverityLabel() {
    this._severityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel.internalValue;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl = new SourceUrlPropertyList(this, "source_url", true);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SourceUrlProperty[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // threat_intel_indicator_category - computed: false, optional: true, required: false
  private _threatIntelIndicatorCategory = new ThreatIntelIndicatorCategoryPropertyList(this, "threat_intel_indicator_category", true);
  public get threatIntelIndicatorCategory() {
    return this._threatIntelIndicatorCategory;
  }
  public putThreatIntelIndicatorCategory(value: ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorCategory.internalValue = value;
  }
  public resetThreatIntelIndicatorCategory() {
    this._threatIntelIndicatorCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorCategoryInput() {
    return this._threatIntelIndicatorCategory.internalValue;
  }

  // threat_intel_indicator_last_observed_at - computed: false, optional: true, required: false
  private _threatIntelIndicatorLastObservedAt = new ThreatIntelIndicatorLastObservedAtPropertyList(this, "threat_intel_indicator_last_observed_at", true);
  public get threatIntelIndicatorLastObservedAt() {
    return this._threatIntelIndicatorLastObservedAt;
  }
  public putThreatIntelIndicatorLastObservedAt(value: ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorLastObservedAt.internalValue = value;
  }
  public resetThreatIntelIndicatorLastObservedAt() {
    this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorLastObservedAtInput() {
    return this._threatIntelIndicatorLastObservedAt.internalValue;
  }

  // threat_intel_indicator_source - computed: false, optional: true, required: false
  private _threatIntelIndicatorSource = new ThreatIntelIndicatorSourcePropertyList(this, "threat_intel_indicator_source", true);
  public get threatIntelIndicatorSource() {
    return this._threatIntelIndicatorSource;
  }
  public putThreatIntelIndicatorSource(value: ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSource.internalValue = value;
  }
  public resetThreatIntelIndicatorSource() {
    this._threatIntelIndicatorSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceInput() {
    return this._threatIntelIndicatorSource.internalValue;
  }

  // threat_intel_indicator_source_url - computed: false, optional: true, required: false
  private _threatIntelIndicatorSourceUrl = new ThreatIntelIndicatorSourceUrlPropertyList(this, "threat_intel_indicator_source_url", true);
  public get threatIntelIndicatorSourceUrl() {
    return this._threatIntelIndicatorSourceUrl;
  }
  public putThreatIntelIndicatorSourceUrl(value: ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSourceUrl.internalValue = value;
  }
  public resetThreatIntelIndicatorSourceUrl() {
    this._threatIntelIndicatorSourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceUrlInput() {
    return this._threatIntelIndicatorSourceUrl.internalValue;
  }

  // threat_intel_indicator_type - computed: false, optional: true, required: false
  private _threatIntelIndicatorType = new ThreatIntelIndicatorTypePropertyList(this, "threat_intel_indicator_type", true);
  public get threatIntelIndicatorType() {
    return this._threatIntelIndicatorType;
  }
  public putThreatIntelIndicatorType(value: ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorType.internalValue = value;
  }
  public resetThreatIntelIndicatorType() {
    this._threatIntelIndicatorType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorTypeInput() {
    return this._threatIntelIndicatorType.internalValue;
  }

  // threat_intel_indicator_value - computed: false, optional: true, required: false
  private _threatIntelIndicatorValue = new ThreatIntelIndicatorValuePropertyList(this, "threat_intel_indicator_value", true);
  public get threatIntelIndicatorValue() {
    return this._threatIntelIndicatorValue;
  }
  public putThreatIntelIndicatorValue(value: ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable) {
    this._threatIntelIndicatorValue.internalValue = value;
  }
  public resetThreatIntelIndicatorValue() {
    this._threatIntelIndicatorValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorValueInput() {
    return this._threatIntelIndicatorValue.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new TitlePropertyList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: TitleProperty[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new TypePropertyList(this, "type", true);
  public get type() {
    return this._type;
  }
  public putType(value: TypeProperty[] | cdktn.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new UpdatedAtPropertyList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: UpdatedAtProperty[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_values - computed: false, optional: true, required: false
  private _userDefinedValues = new UserDefinedValuesPropertyList(this, "user_defined_values", true);
  public get userDefinedValues() {
    return this._userDefinedValues;
  }
  public putUserDefinedValues(value: UserDefinedValuesProperty[] | cdktn.IResolvable) {
    this._userDefinedValues.internalValue = value;
  }
  public resetUserDefinedValues() {
    this._userDefinedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedValuesInput() {
    return this._userDefinedValues.internalValue;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState = new VerificationStatePropertyList(this, "verification_state", true);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: VerificationStateProperty[] | cdktn.IResolvable) {
    this._verificationState.internalValue = value;
  }
  public resetVerificationState() {
    this._verificationState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState.internalValue;
  }

  // workflow_status - computed: false, optional: true, required: false
  private _workflowStatus = new WorkflowStatusPropertyList(this, "workflow_status", true);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: WorkflowStatusProperty[] | cdktn.IResolvable) {
    this._workflowStatus.internalValue = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus.internalValue;
  }
}
}
