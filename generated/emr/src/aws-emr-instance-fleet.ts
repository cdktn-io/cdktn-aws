// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfInstanceFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#cluster_id TfInstanceFleet#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#id TfInstanceFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#name TfInstanceFleet#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#region TfInstanceFleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#target_on_demand_capacity TfInstanceFleet#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#target_spot_capacity TfInstanceFleet#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#instance_type_configs TfInstanceFleet#instance_type_configs}
  */
  readonly instanceTypeConfigs?: TfInstanceFleet.InstanceTypeConfigsProperty[] | cdktn.IResolvable;
  /**
  * launch_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#launch_specifications TfInstanceFleet#launch_specifications}
  */
  readonly launchSpecifications?: TfInstanceFleet.LaunchSpecificationsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet aws_emr_instance_fleet}
*/
export class TfInstanceFleet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_instance_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfInstanceFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfInstanceFleet to import
  * @param importFromId The id of the existing TfInstanceFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfInstanceFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_instance_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet aws_emr_instance_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfInstanceFleetConfig
  */
  public constructor(scope: Construct, id: string, config: TfInstanceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_instance_fleet',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._targetOnDemandCapacity = config.targetOnDemandCapacity;
    this._targetSpotCapacity = config.targetSpotCapacity;
    this._instanceTypeConfigs.internalValue = config.instanceTypeConfigs;
    this._launchSpecifications.internalValue = config.launchSpecifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // name - computed: false, optional: true, required: false
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

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
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

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number; 
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number; 
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs = new TfInstanceFleet.InstanceTypeConfigsPropertyList(this, "instance_type_configs", true);
  public get instanceTypeConfigs() {
    return this._instanceTypeConfigs;
  }
  public putInstanceTypeConfigs(value: TfInstanceFleet.InstanceTypeConfigsProperty[] | cdktn.IResolvable) {
    this._instanceTypeConfigs.internalValue = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs.internalValue;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications = new TfInstanceFleet.LaunchSpecificationsPropertyOutputReference(this, "launch_specifications");
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public putLaunchSpecifications(value: TfInstanceFleet.LaunchSpecificationsProperty) {
    this._launchSpecifications.internalValue = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      target_on_demand_capacity: cdktn.numberToTerraform(this._targetOnDemandCapacity),
      target_spot_capacity: cdktn.numberToTerraform(this._targetSpotCapacity),
      instance_type_configs: cdktn.listMapper(tfInstanceFleetInstanceTypeConfigsPropertyToTerraform, true)(this._instanceTypeConfigs.internalValue),
      launch_specifications: tfInstanceFleetLaunchSpecificationsPropertyToTerraform(this._launchSpecifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
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
      target_on_demand_capacity: {
        value: cdktn.numberToHclTerraform(this._targetOnDemandCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_spot_capacity: {
        value: cdktn.numberToHclTerraform(this._targetSpotCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type_configs: {
        value: cdktn.listMapperHcl(tfInstanceFleetInstanceTypeConfigsPropertyToHclTerraform, true)(this._instanceTypeConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfInstanceFleet.InstanceTypeConfigsPropertyList",
      },
      launch_specifications: {
        value: tfInstanceFleetLaunchSpecificationsPropertyToHclTerraform(this._launchSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfInstanceFleet.LaunchSpecificationsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfInstanceFleetConfigurationsPropertyToTerraform(struct?: TfInstanceFleet.ConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function tfInstanceFleetConfigurationsPropertyToHclTerraform(struct?: TfInstanceFleet.ConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfInstanceFleetEbsConfigPropertyToTerraform(struct?: TfInstanceFleet.EbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
    volumes_per_instance: cdktn.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function tfInstanceFleetEbsConfigPropertyToHclTerraform(struct?: TfInstanceFleet.EbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfInstanceFleetInstanceTypeConfigsPropertyToTerraform(struct?: TfInstanceFleet.InstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bid_price: cdktn.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktn.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktn.listMapper(tfInstanceFleetConfigurationsPropertyToTerraform, true)(struct!.configurations),
    ebs_config: cdktn.listMapper(tfInstanceFleetEbsConfigPropertyToTerraform, true)(struct!.ebsConfig),
  }
}


export function tfInstanceFleetInstanceTypeConfigsPropertyToHclTerraform(struct?: TfInstanceFleet.InstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bid_price: {
      value: cdktn.stringToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_price_as_percentage_of_on_demand_price: {
      value: cdktn.numberToHclTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktn.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configurations: {
      value: cdktn.listMapperHcl(tfInstanceFleetConfigurationsPropertyToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigurationsPropertyList",
    },
    ebs_config: {
      value: cdktn.listMapperHcl(tfInstanceFleetEbsConfigPropertyToHclTerraform, true)(struct!.ebsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "EbsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfInstanceFleetOnDemandSpecificationPropertyToTerraform(struct?: TfInstanceFleet.OnDemandSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
  }
}


export function tfInstanceFleetOnDemandSpecificationPropertyToHclTerraform(struct?: TfInstanceFleet.OnDemandSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfInstanceFleetSpotSpecificationPropertyToTerraform(struct?: TfInstanceFleet.SpotSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktn.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktn.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktn.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}


export function tfInstanceFleetSpotSpecificationPropertyToHclTerraform(struct?: TfInstanceFleet.SpotSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktn.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfInstanceFleetLaunchSpecificationsPropertyToTerraform(struct?: TfInstanceFleet.LaunchSpecificationsPropertyOutputReference | TfInstanceFleet.LaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_demand_specification: cdktn.listMapper(tfInstanceFleetOnDemandSpecificationPropertyToTerraform, true)(struct!.onDemandSpecification),
    spot_specification: cdktn.listMapper(tfInstanceFleetSpotSpecificationPropertyToTerraform, true)(struct!.spotSpecification),
  }
}


export function tfInstanceFleetLaunchSpecificationsPropertyToHclTerraform(struct?: TfInstanceFleet.LaunchSpecificationsPropertyOutputReference | TfInstanceFleet.LaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_demand_specification: {
      value: cdktn.listMapperHcl(tfInstanceFleetOnDemandSpecificationPropertyToHclTerraform, true)(struct!.onDemandSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "OnDemandSpecificationPropertyList",
    },
    spot_specification: {
      value: cdktn.listMapperHcl(tfInstanceFleetSpotSpecificationPropertyToHclTerraform, true)(struct!.spotSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SpotSpecificationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfInstanceFleet {
export interface ConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#classification TfInstanceFleet#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#properties TfInstanceFleet#properties}
  */
  readonly properties?: { [key: string]: string };
}
export class ConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
    }
  }

  // classification - computed: false, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class ConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationsPropertyOutputReference {
    return new ConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EbsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#iops TfInstanceFleet#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#size TfInstanceFleet#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#type TfInstanceFleet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#volumes_per_instance TfInstanceFleet#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}
export class EbsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EbsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class EbsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EbsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EbsConfigPropertyOutputReference {
    return new EbsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceTypeConfigsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#bid_price TfInstanceFleet#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price TfInstanceFleet#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#instance_type TfInstanceFleet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#weighted_capacity TfInstanceFleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#configurations TfInstanceFleet#configurations}
  */
  readonly configurations?: ConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#ebs_config TfInstanceFleet#ebs_config}
  */
  readonly ebsConfig?: EbsConfigProperty[] | cdktn.IResolvable;
}
export class InstanceTypeConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstanceTypeConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._bidPriceAsPercentageOfOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPriceAsPercentageOfOnDemandPrice = this._bidPriceAsPercentageOfOnDemandPrice;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    if (this._ebsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceTypeConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidPrice = undefined;
      this._bidPriceAsPercentageOfOnDemandPrice = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
      this._configurations.internalValue = undefined;
      this._ebsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidPrice = value.bidPrice;
      this._bidPriceAsPercentageOfOnDemandPrice = value.bidPriceAsPercentageOfOnDemandPrice;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
      this._configurations.internalValue = value.configurations;
      this._ebsConfig.internalValue = value.ebsConfig;
    }
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // bid_price_as_percentage_of_on_demand_price - computed: false, optional: true, required: false
  private _bidPriceAsPercentageOfOnDemandPrice?: number; 
  public get bidPriceAsPercentageOfOnDemandPrice() {
    return this.getNumberAttribute('bid_price_as_percentage_of_on_demand_price');
  }
  public set bidPriceAsPercentageOfOnDemandPrice(value: number) {
    this._bidPriceAsPercentageOfOnDemandPrice = value;
  }
  public resetBidPriceAsPercentageOfOnDemandPrice() {
    this._bidPriceAsPercentageOfOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceAsPercentageOfOnDemandPriceInput() {
    return this._bidPriceAsPercentageOfOnDemandPrice;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new ConfigurationsPropertyList(this, "configurations", true);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: ConfigurationsProperty[] | cdktn.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig = new EbsConfigPropertyList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: EbsConfigProperty[] | cdktn.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
  }
}

export class InstanceTypeConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : InstanceTypeConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): InstanceTypeConfigsPropertyOutputReference {
    return new InstanceTypeConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnDemandSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#allocation_strategy TfInstanceFleet#allocation_strategy}
  */
  readonly allocationStrategy: string;
}
export class OnDemandSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnDemandSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnDemandSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }
}

export class OnDemandSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : OnDemandSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): OnDemandSpecificationPropertyOutputReference {
    return new OnDemandSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpotSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#allocation_strategy TfInstanceFleet#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#block_duration_minutes TfInstanceFleet#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#timeout_action TfInstanceFleet#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#timeout_duration_minutes TfInstanceFleet#timeout_duration_minutes}
  */
  readonly timeoutDurationMinutes: number;
}
export class SpotSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpotSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    if (this._timeoutDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDurationMinutes = this._timeoutDurationMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpotSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._blockDurationMinutes = undefined;
      this._timeoutAction = undefined;
      this._timeoutDurationMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._timeoutAction = value.timeoutAction;
      this._timeoutDurationMinutes = value.timeoutDurationMinutes;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number; 
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // timeout_action - computed: false, optional: false, required: true
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }

  // timeout_duration_minutes - computed: false, optional: false, required: true
  private _timeoutDurationMinutes?: number; 
  public get timeoutDurationMinutes() {
    return this.getNumberAttribute('timeout_duration_minutes');
  }
  public set timeoutDurationMinutes(value: number) {
    this._timeoutDurationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDurationMinutesInput() {
    return this._timeoutDurationMinutes;
  }
}

export class SpotSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : SpotSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): SpotSpecificationPropertyOutputReference {
    return new SpotSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchSpecificationsProperty {
  /**
  * on_demand_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#on_demand_specification TfInstanceFleet#on_demand_specification}
  */
  readonly onDemandSpecification?: OnDemandSpecificationProperty[] | cdktn.IResolvable;
  /**
  * spot_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_instance_fleet#spot_specification TfInstanceFleet#spot_specification}
  */
  readonly spotSpecification?: SpotSpecificationProperty[] | cdktn.IResolvable;
}
export class LaunchSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchSpecificationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandSpecification = this._onDemandSpecification?.internalValue;
    }
    if (this._spotSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSpecification = this._spotSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchSpecificationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandSpecification.internalValue = undefined;
      this._spotSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandSpecification.internalValue = value.onDemandSpecification;
      this._spotSpecification.internalValue = value.spotSpecification;
    }
  }

  // on_demand_specification - computed: false, optional: true, required: false
  private _onDemandSpecification = new OnDemandSpecificationPropertyList(this, "on_demand_specification", false);
  public get onDemandSpecification() {
    return this._onDemandSpecification;
  }
  public putOnDemandSpecification(value: OnDemandSpecificationProperty[] | cdktn.IResolvable) {
    this._onDemandSpecification.internalValue = value;
  }
  public resetOnDemandSpecification() {
    this._onDemandSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSpecificationInput() {
    return this._onDemandSpecification.internalValue;
  }

  // spot_specification - computed: false, optional: true, required: false
  private _spotSpecification = new SpotSpecificationPropertyList(this, "spot_specification", false);
  public get spotSpecification() {
    return this._spotSpecification;
  }
  public putSpotSpecification(value: SpotSpecificationProperty[] | cdktn.IResolvable) {
    this._spotSpecification.internalValue = value;
  }
  public resetSpotSpecification() {
    this._spotSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSpecificationInput() {
    return this._spotSpecification.internalValue;
  }
}
}
