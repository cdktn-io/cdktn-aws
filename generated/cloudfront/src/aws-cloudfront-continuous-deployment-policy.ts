// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsContinuousDeploymentPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#enabled AwsContinuousDeploymentPolicy#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * staging_distribution_dns_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names AwsContinuousDeploymentPolicy#staging_distribution_dns_names}
  */
  readonly stagingDistributionDnsNames?: AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesProperty[] | cdktn.IResolvable;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config AwsContinuousDeploymentPolicy#traffic_config}
  */
  readonly trafficConfig?: AwsContinuousDeploymentPolicy.TrafficConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy}
*/
export class AwsContinuousDeploymentPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_continuous_deployment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsContinuousDeploymentPolicy to import
  * @param importFromId The id of the existing AwsContinuousDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsContinuousDeploymentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_continuous_deployment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsContinuousDeploymentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsContinuousDeploymentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_continuous_deployment_policy',
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
    this._stagingDistributionDnsNames.internalValue = config.stagingDistributionDnsNames;
    this._trafficConfig.internalValue = config.trafficConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // staging_distribution_dns_names - computed: false, optional: true, required: false
  private _stagingDistributionDnsNames = new AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesPropertyList(this, "staging_distribution_dns_names", false);
  public get stagingDistributionDnsNames() {
    return this._stagingDistributionDnsNames;
  }
  public putStagingDistributionDnsNames(value: AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesProperty[] | cdktn.IResolvable) {
    this._stagingDistributionDnsNames.internalValue = value;
  }
  public resetStagingDistributionDnsNames() {
    this._stagingDistributionDnsNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingDistributionDnsNamesInput() {
    return this._stagingDistributionDnsNames.internalValue;
  }

  // traffic_config - computed: false, optional: true, required: false
  private _trafficConfig = new AwsContinuousDeploymentPolicy.TrafficConfigPropertyList(this, "traffic_config", false);
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: AwsContinuousDeploymentPolicy.TrafficConfigProperty[] | cdktn.IResolvable) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      staging_distribution_dns_names: cdktn.listMapper(awsContinuousDeploymentPolicyStagingDistributionDnsNamesPropertyToTerraform, true)(this._stagingDistributionDnsNames.internalValue),
      traffic_config: cdktn.listMapper(awsContinuousDeploymentPolicyTrafficConfigPropertyToTerraform, true)(this._trafficConfig.internalValue),
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
      staging_distribution_dns_names: {
        value: cdktn.listMapperHcl(awsContinuousDeploymentPolicyStagingDistributionDnsNamesPropertyToHclTerraform, true)(this._stagingDistributionDnsNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesPropertyList",
      },
      traffic_config: {
        value: cdktn.listMapperHcl(awsContinuousDeploymentPolicyTrafficConfigPropertyToHclTerraform, true)(this._trafficConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsContinuousDeploymentPolicy.TrafficConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsContinuousDeploymentPolicyStagingDistributionDnsNamesPropertyToTerraform(struct?: AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    quantity: cdktn.numberToTerraform(struct!.quantity),
  }
}


export function awsContinuousDeploymentPolicyStagingDistributionDnsNamesPropertyToHclTerraform(struct?: AwsContinuousDeploymentPolicy.StagingDistributionDnsNamesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    quantity: {
      value: cdktn.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsContinuousDeploymentPolicySingleHeaderConfigPropertyToTerraform(struct?: AwsContinuousDeploymentPolicy.SingleHeaderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsContinuousDeploymentPolicySingleHeaderConfigPropertyToHclTerraform(struct?: AwsContinuousDeploymentPolicy.SingleHeaderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
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


export function awsContinuousDeploymentPolicySessionStickinessConfigPropertyToTerraform(struct?: AwsContinuousDeploymentPolicy.SessionStickinessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_ttl: cdktn.numberToTerraform(struct!.idleTtl),
    maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
  }
}


export function awsContinuousDeploymentPolicySessionStickinessConfigPropertyToHclTerraform(struct?: AwsContinuousDeploymentPolicy.SessionStickinessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_ttl: {
      value: cdktn.numberToHclTerraform(struct!.idleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maximumTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsContinuousDeploymentPolicySingleWeightConfigPropertyToTerraform(struct?: AwsContinuousDeploymentPolicy.SingleWeightConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weight: cdktn.numberToTerraform(struct!.weight),
    session_stickiness_config: cdktn.listMapper(awsContinuousDeploymentPolicySessionStickinessConfigPropertyToTerraform, true)(struct!.sessionStickinessConfig),
  }
}


export function awsContinuousDeploymentPolicySingleWeightConfigPropertyToHclTerraform(struct?: AwsContinuousDeploymentPolicy.SingleWeightConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_stickiness_config: {
      value: cdktn.listMapperHcl(awsContinuousDeploymentPolicySessionStickinessConfigPropertyToHclTerraform, true)(struct!.sessionStickinessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SessionStickinessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsContinuousDeploymentPolicyTrafficConfigPropertyToTerraform(struct?: AwsContinuousDeploymentPolicy.TrafficConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    single_header_config: cdktn.listMapper(awsContinuousDeploymentPolicySingleHeaderConfigPropertyToTerraform, true)(struct!.singleHeaderConfig),
    single_weight_config: cdktn.listMapper(awsContinuousDeploymentPolicySingleWeightConfigPropertyToTerraform, true)(struct!.singleWeightConfig),
  }
}


export function awsContinuousDeploymentPolicyTrafficConfigPropertyToHclTerraform(struct?: AwsContinuousDeploymentPolicy.TrafficConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_header_config: {
      value: cdktn.listMapperHcl(awsContinuousDeploymentPolicySingleHeaderConfigPropertyToHclTerraform, true)(struct!.singleHeaderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SingleHeaderConfigPropertyList",
    },
    single_weight_config: {
      value: cdktn.listMapperHcl(awsContinuousDeploymentPolicySingleWeightConfigPropertyToHclTerraform, true)(struct!.singleWeightConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SingleWeightConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsContinuousDeploymentPolicy {
export interface StagingDistributionDnsNamesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#items AwsContinuousDeploymentPolicy#items}
  */
  readonly items?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#quantity AwsContinuousDeploymentPolicy#quantity}
  */
  readonly quantity: number;
}
export class StagingDistributionDnsNamesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StagingDistributionDnsNamesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StagingDistributionDnsNamesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._quantity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._quantity = value.quantity;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktn.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class StagingDistributionDnsNamesPropertyList extends cdktn.ComplexList {
  public internalValue? : StagingDistributionDnsNamesProperty[] | cdktn.IResolvable

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
  public get(index: number): StagingDistributionDnsNamesPropertyOutputReference {
    return new StagingDistributionDnsNamesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SingleHeaderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#header AwsContinuousDeploymentPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#value AwsContinuousDeploymentPolicy#value}
  */
  readonly value: string;
}
export class SingleHeaderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SingleHeaderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SingleHeaderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

export class SingleHeaderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SingleHeaderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SingleHeaderConfigPropertyOutputReference {
    return new SingleHeaderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionStickinessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl AwsContinuousDeploymentPolicy#idle_ttl}
  */
  readonly idleTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl AwsContinuousDeploymentPolicy#maximum_ttl}
  */
  readonly maximumTtl: number;
}
export class SessionStickinessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SessionStickinessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTtl = this._idleTtl;
    }
    if (this._maximumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTtl = this._maximumTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionStickinessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTtl = undefined;
      this._maximumTtl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTtl = value.idleTtl;
      this._maximumTtl = value.maximumTtl;
    }
  }

  // idle_ttl - computed: false, optional: false, required: true
  private _idleTtl?: number; 
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }
  public set idleTtl(value: number) {
    this._idleTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTtlInput() {
    return this._idleTtl;
  }

  // maximum_ttl - computed: false, optional: false, required: true
  private _maximumTtl?: number; 
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
  public set maximumTtl(value: number) {
    this._maximumTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTtlInput() {
    return this._maximumTtl;
  }
}

export class SessionStickinessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SessionStickinessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SessionStickinessConfigPropertyOutputReference {
    return new SessionStickinessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SingleWeightConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#weight AwsContinuousDeploymentPolicy#weight}
  */
  readonly weight: number;
  /**
  * session_stickiness_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config AwsContinuousDeploymentPolicy#session_stickiness_config}
  */
  readonly sessionStickinessConfig?: SessionStickinessConfigProperty[] | cdktn.IResolvable;
}
export class SingleWeightConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SingleWeightConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._sessionStickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SingleWeightConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._sessionStickinessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
    }
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // session_stickiness_config - computed: false, optional: true, required: false
  private _sessionStickinessConfig = new SessionStickinessConfigPropertyList(this, "session_stickiness_config", false);
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }
  public putSessionStickinessConfig(value: SessionStickinessConfigProperty[] | cdktn.IResolvable) {
    this._sessionStickinessConfig.internalValue = value;
  }
  public resetSessionStickinessConfig() {
    this._sessionStickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickinessConfigInput() {
    return this._sessionStickinessConfig.internalValue;
  }
}

export class SingleWeightConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SingleWeightConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SingleWeightConfigPropertyOutputReference {
    return new SingleWeightConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#type AwsContinuousDeploymentPolicy#type}
  */
  readonly type: string;
  /**
  * single_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config AwsContinuousDeploymentPolicy#single_header_config}
  */
  readonly singleHeaderConfig?: SingleHeaderConfigProperty[] | cdktn.IResolvable;
  /**
  * single_weight_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config AwsContinuousDeploymentPolicy#single_weight_config}
  */
  readonly singleWeightConfig?: SingleWeightConfigProperty[] | cdktn.IResolvable;
}
export class TrafficConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrafficConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._singleHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeaderConfig = this._singleHeaderConfig?.internalValue;
    }
    if (this._singleWeightConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleWeightConfig = this._singleWeightConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._singleHeaderConfig.internalValue = undefined;
      this._singleWeightConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._singleHeaderConfig.internalValue = value.singleHeaderConfig;
      this._singleWeightConfig.internalValue = value.singleWeightConfig;
    }
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

  // single_header_config - computed: false, optional: true, required: false
  private _singleHeaderConfig = new SingleHeaderConfigPropertyList(this, "single_header_config", false);
  public get singleHeaderConfig() {
    return this._singleHeaderConfig;
  }
  public putSingleHeaderConfig(value: SingleHeaderConfigProperty[] | cdktn.IResolvable) {
    this._singleHeaderConfig.internalValue = value;
  }
  public resetSingleHeaderConfig() {
    this._singleHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderConfigInput() {
    return this._singleHeaderConfig.internalValue;
  }

  // single_weight_config - computed: false, optional: true, required: false
  private _singleWeightConfig = new SingleWeightConfigPropertyList(this, "single_weight_config", false);
  public get singleWeightConfig() {
    return this._singleWeightConfig;
  }
  public putSingleWeightConfig(value: SingleWeightConfigProperty[] | cdktn.IResolvable) {
    this._singleWeightConfig.internalValue = value;
  }
  public resetSingleWeightConfig() {
    this._singleWeightConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleWeightConfigInput() {
    return this._singleWeightConfig.internalValue;
  }
}

export class TrafficConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrafficConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrafficConfigPropertyOutputReference {
    return new TrafficConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
