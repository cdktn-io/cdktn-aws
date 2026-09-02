// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRecommendationPreferencesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics TfRecommendationPreferences#enhanced_infrastructure_metrics}
  */
  readonly enhancedInfrastructureMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types TfRecommendationPreferences#inferred_workload_types}
  */
  readonly inferredWorkloadTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period TfRecommendationPreferences#look_back_period}
  */
  readonly lookBackPeriod?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#region TfRecommendationPreferences#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type TfRecommendationPreferences#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode TfRecommendationPreferences#savings_estimation_mode}
  */
  readonly savingsEstimationMode?: string;
  /**
  * external_metrics_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference TfRecommendationPreferences#external_metrics_preference}
  */
  readonly externalMetricsPreference?: TfRecommendationPreferences.ExternalMetricsPreferenceProperty[] | cdktn.IResolvable;
  /**
  * preferred_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource TfRecommendationPreferences#preferred_resource}
  */
  readonly preferredResource?: TfRecommendationPreferences.PreferredResourceProperty[] | cdktn.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#scope TfRecommendationPreferences#scope}
  */
  readonly scope?: TfRecommendationPreferences.ScopeProperty[] | cdktn.IResolvable;
  /**
  * utilization_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference TfRecommendationPreferences#utilization_preference}
  */
  readonly utilizationPreference?: TfRecommendationPreferences.UtilizationPreferenceProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}
*/
export class TfRecommendationPreferences extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_computeoptimizer_recommendation_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRecommendationPreferences resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRecommendationPreferences to import
  * @param importFromId The id of the existing TfRecommendationPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRecommendationPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_computeoptimizer_recommendation_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRecommendationPreferencesConfig
  */
  public constructor(scope: Construct, id: string, config: TfRecommendationPreferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_computeoptimizer_recommendation_preferences',
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
    this._enhancedInfrastructureMetrics = config.enhancedInfrastructureMetrics;
    this._inferredWorkloadTypes = config.inferredWorkloadTypes;
    this._lookBackPeriod = config.lookBackPeriod;
    this._region = config.region;
    this._resourceType = config.resourceType;
    this._savingsEstimationMode = config.savingsEstimationMode;
    this._externalMetricsPreference.internalValue = config.externalMetricsPreference;
    this._preferredResource.internalValue = config.preferredResource;
    this._scope.internalValue = config.scope;
    this._utilizationPreference.internalValue = config.utilizationPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enhanced_infrastructure_metrics - computed: false, optional: true, required: false
  private _enhancedInfrastructureMetrics?: string; 
  public get enhancedInfrastructureMetrics() {
    return this.getStringAttribute('enhanced_infrastructure_metrics');
  }
  public set enhancedInfrastructureMetrics(value: string) {
    this._enhancedInfrastructureMetrics = value;
  }
  public resetEnhancedInfrastructureMetrics() {
    this._enhancedInfrastructureMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedInfrastructureMetricsInput() {
    return this._enhancedInfrastructureMetrics;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inferred_workload_types - computed: false, optional: true, required: false
  private _inferredWorkloadTypes?: string; 
  public get inferredWorkloadTypes() {
    return this.getStringAttribute('inferred_workload_types');
  }
  public set inferredWorkloadTypes(value: string) {
    this._inferredWorkloadTypes = value;
  }
  public resetInferredWorkloadTypes() {
    this._inferredWorkloadTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredWorkloadTypesInput() {
    return this._inferredWorkloadTypes;
  }

  // look_back_period - computed: true, optional: true, required: false
  private _lookBackPeriod?: string; 
  public get lookBackPeriod() {
    return this.getStringAttribute('look_back_period');
  }
  public set lookBackPeriod(value: string) {
    this._lookBackPeriod = value;
  }
  public resetLookBackPeriod() {
    this._lookBackPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodInput() {
    return this._lookBackPeriod;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // savings_estimation_mode - computed: false, optional: true, required: false
  private _savingsEstimationMode?: string; 
  public get savingsEstimationMode() {
    return this.getStringAttribute('savings_estimation_mode');
  }
  public set savingsEstimationMode(value: string) {
    this._savingsEstimationMode = value;
  }
  public resetSavingsEstimationMode() {
    this._savingsEstimationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsEstimationModeInput() {
    return this._savingsEstimationMode;
  }

  // external_metrics_preference - computed: false, optional: true, required: false
  private _externalMetricsPreference = new TfRecommendationPreferences.ExternalMetricsPreferencePropertyList(this, "external_metrics_preference", false);
  public get externalMetricsPreference() {
    return this._externalMetricsPreference;
  }
  public putExternalMetricsPreference(value: TfRecommendationPreferences.ExternalMetricsPreferenceProperty[] | cdktn.IResolvable) {
    this._externalMetricsPreference.internalValue = value;
  }
  public resetExternalMetricsPreference() {
    this._externalMetricsPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMetricsPreferenceInput() {
    return this._externalMetricsPreference.internalValue;
  }

  // preferred_resource - computed: false, optional: true, required: false
  private _preferredResource = new TfRecommendationPreferences.PreferredResourcePropertyList(this, "preferred_resource", false);
  public get preferredResource() {
    return this._preferredResource;
  }
  public putPreferredResource(value: TfRecommendationPreferences.PreferredResourceProperty[] | cdktn.IResolvable) {
    this._preferredResource.internalValue = value;
  }
  public resetPreferredResource() {
    this._preferredResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredResourceInput() {
    return this._preferredResource.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new TfRecommendationPreferences.ScopePropertyList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: TfRecommendationPreferences.ScopeProperty[] | cdktn.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // utilization_preference - computed: false, optional: true, required: false
  private _utilizationPreference = new TfRecommendationPreferences.UtilizationPreferencePropertyList(this, "utilization_preference", false);
  public get utilizationPreference() {
    return this._utilizationPreference;
  }
  public putUtilizationPreference(value: TfRecommendationPreferences.UtilizationPreferenceProperty[] | cdktn.IResolvable) {
    this._utilizationPreference.internalValue = value;
  }
  public resetUtilizationPreference() {
    this._utilizationPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationPreferenceInput() {
    return this._utilizationPreference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enhanced_infrastructure_metrics: cdktn.stringToTerraform(this._enhancedInfrastructureMetrics),
      inferred_workload_types: cdktn.stringToTerraform(this._inferredWorkloadTypes),
      look_back_period: cdktn.stringToTerraform(this._lookBackPeriod),
      region: cdktn.stringToTerraform(this._region),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      savings_estimation_mode: cdktn.stringToTerraform(this._savingsEstimationMode),
      external_metrics_preference: cdktn.listMapper(tfRecommendationPreferencesExternalMetricsPreferencePropertyToTerraform, true)(this._externalMetricsPreference.internalValue),
      preferred_resource: cdktn.listMapper(tfRecommendationPreferencesPreferredResourcePropertyToTerraform, true)(this._preferredResource.internalValue),
      scope: cdktn.listMapper(tfRecommendationPreferencesScopePropertyToTerraform, true)(this._scope.internalValue),
      utilization_preference: cdktn.listMapper(tfRecommendationPreferencesUtilizationPreferencePropertyToTerraform, true)(this._utilizationPreference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enhanced_infrastructure_metrics: {
        value: cdktn.stringToHclTerraform(this._enhancedInfrastructureMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inferred_workload_types: {
        value: cdktn.stringToHclTerraform(this._inferredWorkloadTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      look_back_period: {
        value: cdktn.stringToHclTerraform(this._lookBackPeriod),
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
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      savings_estimation_mode: {
        value: cdktn.stringToHclTerraform(this._savingsEstimationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_metrics_preference: {
        value: cdktn.listMapperHcl(tfRecommendationPreferencesExternalMetricsPreferencePropertyToHclTerraform, true)(this._externalMetricsPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRecommendationPreferences.ExternalMetricsPreferencePropertyList",
      },
      preferred_resource: {
        value: cdktn.listMapperHcl(tfRecommendationPreferencesPreferredResourcePropertyToHclTerraform, true)(this._preferredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRecommendationPreferences.PreferredResourcePropertyList",
      },
      scope: {
        value: cdktn.listMapperHcl(tfRecommendationPreferencesScopePropertyToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRecommendationPreferences.ScopePropertyList",
      },
      utilization_preference: {
        value: cdktn.listMapperHcl(tfRecommendationPreferencesUtilizationPreferencePropertyToHclTerraform, true)(this._utilizationPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRecommendationPreferences.UtilizationPreferencePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRecommendationPreferencesExternalMetricsPreferencePropertyToTerraform(struct?: TfRecommendationPreferences.ExternalMetricsPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfRecommendationPreferencesExternalMetricsPreferencePropertyToHclTerraform(struct?: TfRecommendationPreferences.ExternalMetricsPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfRecommendationPreferencesPreferredResourcePropertyToTerraform(struct?: TfRecommendationPreferences.PreferredResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeList),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfRecommendationPreferencesPreferredResourcePropertyToHclTerraform(struct?: TfRecommendationPreferences.PreferredResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecommendationPreferencesScopePropertyToTerraform(struct?: TfRecommendationPreferences.ScopeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfRecommendationPreferencesScopePropertyToHclTerraform(struct?: TfRecommendationPreferences.ScopeProperty | cdktn.IResolvable): any {
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


export function tfRecommendationPreferencesMetricParametersPropertyToTerraform(struct?: TfRecommendationPreferences.MetricParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headroom: cdktn.stringToTerraform(struct!.headroom),
    threshold: cdktn.stringToTerraform(struct!.threshold),
  }
}


export function tfRecommendationPreferencesMetricParametersPropertyToHclTerraform(struct?: TfRecommendationPreferences.MetricParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headroom: {
      value: cdktn.stringToHclTerraform(struct!.headroom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecommendationPreferencesUtilizationPreferencePropertyToTerraform(struct?: TfRecommendationPreferences.UtilizationPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_parameters: cdktn.listMapper(tfRecommendationPreferencesMetricParametersPropertyToTerraform, true)(struct!.metricParameters),
  }
}


export function tfRecommendationPreferencesUtilizationPreferencePropertyToHclTerraform(struct?: TfRecommendationPreferences.UtilizationPreferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_parameters: {
      value: cdktn.listMapperHcl(tfRecommendationPreferencesMetricParametersPropertyToHclTerraform, true)(struct!.metricParameters),
      isBlock: true,
      type: "list",
      storageClassType: "MetricParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfRecommendationPreferences {
export interface ExternalMetricsPreferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#source TfRecommendationPreferences#source}
  */
  readonly source: string;
}
export class ExternalMetricsPreferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalMetricsPreferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalMetricsPreferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
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

export class ExternalMetricsPreferencePropertyList extends cdktn.ComplexList {
  public internalValue? : ExternalMetricsPreferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): ExternalMetricsPreferencePropertyOutputReference {
    return new ExternalMetricsPreferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PreferredResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list TfRecommendationPreferences#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#include_list TfRecommendationPreferences#include_list}
  */
  readonly includeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#name TfRecommendationPreferences#name}
  */
  readonly name: string;
}
export class PreferredResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PreferredResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreferredResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
      this._name = value.name;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude_list'));
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return cdktn.Fn.tolist(this.getListAttribute('include_list'));
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
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
}

export class PreferredResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : PreferredResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): PreferredResourcePropertyOutputReference {
    return new PreferredResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScopeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#name TfRecommendationPreferences#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#value TfRecommendationPreferences#value}
  */
  readonly value: string;
}
export class ScopePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScopeProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ScopeProperty | cdktn.IResolvable | undefined) {
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

export class ScopePropertyList extends cdktn.ComplexList {
  public internalValue? : ScopeProperty[] | cdktn.IResolvable

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
  public get(index: number): ScopePropertyOutputReference {
    return new ScopePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#headroom TfRecommendationPreferences#headroom}
  */
  readonly headroom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#threshold TfRecommendationPreferences#threshold}
  */
  readonly threshold?: string;
}
export class MetricParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetricParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headroom !== undefined) {
      hasAnyValues = true;
      internalValueResult.headroom = this._headroom;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headroom = undefined;
      this._threshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headroom = value.headroom;
      this._threshold = value.threshold;
    }
  }

  // headroom - computed: false, optional: false, required: true
  private _headroom?: string; 
  public get headroom() {
    return this.getStringAttribute('headroom');
  }
  public set headroom(value: string) {
    this._headroom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomInput() {
    return this._headroom;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
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

export class MetricParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : MetricParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): MetricParametersPropertyOutputReference {
    return new MetricParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UtilizationPreferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name TfRecommendationPreferences#metric_name}
  */
  readonly metricName: string;
  /**
  * metric_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters TfRecommendationPreferences#metric_parameters}
  */
  readonly metricParameters?: MetricParametersProperty[] | cdktn.IResolvable;
}
export class UtilizationPreferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UtilizationPreferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricParameters = this._metricParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UtilizationPreferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricParameters.internalValue = value.metricParameters;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_parameters - computed: false, optional: true, required: false
  private _metricParameters = new MetricParametersPropertyList(this, "metric_parameters", false);
  public get metricParameters() {
    return this._metricParameters;
  }
  public putMetricParameters(value: MetricParametersProperty[] | cdktn.IResolvable) {
    this._metricParameters.internalValue = value;
  }
  public resetMetricParameters() {
    this._metricParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricParametersInput() {
    return this._metricParameters.internalValue;
  }
}

export class UtilizationPreferencePropertyList extends cdktn.ComplexList {
  public internalValue? : UtilizationPreferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): UtilizationPreferencePropertyOutputReference {
    return new UtilizationPreferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
