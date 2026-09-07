// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCapacityProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#cluster AwsCapacityProvider#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#id AwsCapacityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#name AwsCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#region AwsCapacityProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#tags AwsCapacityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#tags_all AwsCapacityProvider#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * auto_scaling_group_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#auto_scaling_group_provider AwsCapacityProvider#auto_scaling_group_provider}
  */
  readonly autoScalingGroupProvider?: AwsCapacityProvider.AutoScalingGroupProviderProperty;
  /**
  * managed_instances_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#managed_instances_provider AwsCapacityProvider#managed_instances_provider}
  */
  readonly managedInstancesProvider?: AwsCapacityProvider.ManagedInstancesProviderProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider}
*/
export class AwsCapacityProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCapacityProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCapacityProvider to import
  * @param importFromId The id of the existing AwsCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_capacity_provider',
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
    this._cluster = config.cluster;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
    this._managedInstancesProvider.internalValue = config.managedInstancesProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // auto_scaling_group_provider - computed: false, optional: true, required: false
  private _autoScalingGroupProvider = new AwsCapacityProvider.AutoScalingGroupProviderPropertyOutputReference(this, "auto_scaling_group_provider");
  public get autoScalingGroupProvider() {
    return this._autoScalingGroupProvider;
  }
  public putAutoScalingGroupProvider(value: AwsCapacityProvider.AutoScalingGroupProviderProperty) {
    this._autoScalingGroupProvider.internalValue = value;
  }
  public resetAutoScalingGroupProvider() {
    this._autoScalingGroupProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupProviderInput() {
    return this._autoScalingGroupProvider.internalValue;
  }

  // managed_instances_provider - computed: false, optional: true, required: false
  private _managedInstancesProvider = new AwsCapacityProvider.ManagedInstancesProviderPropertyOutputReference(this, "managed_instances_provider");
  public get managedInstancesProvider() {
    return this._managedInstancesProvider;
  }
  public putManagedInstancesProvider(value: AwsCapacityProvider.ManagedInstancesProviderProperty) {
    this._managedInstancesProvider.internalValue = value;
  }
  public resetManagedInstancesProvider() {
    this._managedInstancesProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstancesProviderInput() {
    return this._managedInstancesProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktn.stringToTerraform(this._cluster),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      auto_scaling_group_provider: awsCapacityProviderAutoScalingGroupProviderPropertyToTerraform(this._autoScalingGroupProvider.internalValue),
      managed_instances_provider: awsCapacityProviderManagedInstancesProviderPropertyToTerraform(this._managedInstancesProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
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
      auto_scaling_group_provider: {
        value: awsCapacityProviderAutoScalingGroupProviderPropertyToHclTerraform(this._autoScalingGroupProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCapacityProvider.AutoScalingGroupProviderPropertyList",
      },
      managed_instances_provider: {
        value: awsCapacityProviderManagedInstancesProviderPropertyToHclTerraform(this._managedInstancesProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCapacityProvider.ManagedInstancesProviderPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCapacityProviderManagedScalingPropertyToTerraform(struct?: AwsCapacityProvider.ManagedScalingPropertyOutputReference | AwsCapacityProvider.ManagedScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_warmup_period: cdktn.numberToTerraform(struct!.instanceWarmupPeriod),
    maximum_scaling_step_size: cdktn.numberToTerraform(struct!.maximumScalingStepSize),
    minimum_scaling_step_size: cdktn.numberToTerraform(struct!.minimumScalingStepSize),
    status: cdktn.stringToTerraform(struct!.status),
    target_capacity: cdktn.numberToTerraform(struct!.targetCapacity),
  }
}


export function awsCapacityProviderManagedScalingPropertyToHclTerraform(struct?: AwsCapacityProvider.ManagedScalingPropertyOutputReference | AwsCapacityProvider.ManagedScalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_warmup_period: {
      value: cdktn.numberToHclTerraform(struct!.instanceWarmupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_scaling_step_size: {
      value: cdktn.numberToHclTerraform(struct!.maximumScalingStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_scaling_step_size: {
      value: cdktn.numberToHclTerraform(struct!.minimumScalingStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.targetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderAutoScalingGroupProviderPropertyToTerraform(struct?: AwsCapacityProvider.AutoScalingGroupProviderPropertyOutputReference | AwsCapacityProvider.AutoScalingGroupProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_group_arn: cdktn.stringToTerraform(struct!.autoScalingGroupArn),
    managed_draining: cdktn.stringToTerraform(struct!.managedDraining),
    managed_termination_protection: cdktn.stringToTerraform(struct!.managedTerminationProtection),
    managed_scaling: awsCapacityProviderManagedScalingPropertyToTerraform(struct!.managedScaling),
  }
}


export function awsCapacityProviderAutoScalingGroupProviderPropertyToHclTerraform(struct?: AwsCapacityProvider.AutoScalingGroupProviderPropertyOutputReference | AwsCapacityProvider.AutoScalingGroupProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.autoScalingGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_draining: {
      value: cdktn.stringToHclTerraform(struct!.managedDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_termination_protection: {
      value: cdktn.stringToHclTerraform(struct!.managedTerminationProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_scaling: {
      value: awsCapacityProviderManagedScalingPropertyToHclTerraform(struct!.managedScaling),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedScalingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderInfrastructureOptimizationPropertyToTerraform(struct?: AwsCapacityProvider.InfrastructureOptimizationPropertyOutputReference | AwsCapacityProvider.InfrastructureOptimizationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scale_in_after: cdktn.numberToTerraform(struct!.scaleInAfter),
  }
}


export function awsCapacityProviderInfrastructureOptimizationPropertyToHclTerraform(struct?: AwsCapacityProvider.InfrastructureOptimizationPropertyOutputReference | AwsCapacityProvider.InfrastructureOptimizationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scale_in_after: {
      value: cdktn.numberToHclTerraform(struct!.scaleInAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderCapacityReservationsPropertyToTerraform(struct?: AwsCapacityProvider.CapacityReservationsPropertyOutputReference | AwsCapacityProvider.CapacityReservationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reservation_group_arn: cdktn.stringToTerraform(struct!.reservationGroupArn),
    reservation_preference: cdktn.stringToTerraform(struct!.reservationPreference),
  }
}


export function awsCapacityProviderCapacityReservationsPropertyToHclTerraform(struct?: AwsCapacityProvider.CapacityReservationsPropertyOutputReference | AwsCapacityProvider.CapacityReservationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reservation_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.reservationGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_preference: {
      value: cdktn.stringToHclTerraform(struct!.reservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderAcceleratorCountPropertyToTerraform(struct?: AwsCapacityProvider.AcceleratorCountPropertyOutputReference | AwsCapacityProvider.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderAcceleratorCountPropertyToHclTerraform(struct?: AwsCapacityProvider.AcceleratorCountPropertyOutputReference | AwsCapacityProvider.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderAcceleratorTotalMemoryMibPropertyToTerraform(struct?: AwsCapacityProvider.AcceleratorTotalMemoryMibPropertyOutputReference | AwsCapacityProvider.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderAcceleratorTotalMemoryMibPropertyToHclTerraform(struct?: AwsCapacityProvider.AcceleratorTotalMemoryMibPropertyOutputReference | AwsCapacityProvider.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: AwsCapacityProvider.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsCapacityProvider.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: AwsCapacityProvider.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsCapacityProvider.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderMemoryGibPerVcpuPropertyToTerraform(struct?: AwsCapacityProvider.MemoryGibPerVcpuPropertyOutputReference | AwsCapacityProvider.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderMemoryGibPerVcpuPropertyToHclTerraform(struct?: AwsCapacityProvider.MemoryGibPerVcpuPropertyOutputReference | AwsCapacityProvider.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderMemoryMibPropertyToTerraform(struct?: AwsCapacityProvider.MemoryMibPropertyOutputReference | AwsCapacityProvider.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderMemoryMibPropertyToHclTerraform(struct?: AwsCapacityProvider.MemoryMibPropertyOutputReference | AwsCapacityProvider.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderNetworkBandwidthGbpsPropertyToTerraform(struct?: AwsCapacityProvider.NetworkBandwidthGbpsPropertyOutputReference | AwsCapacityProvider.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderNetworkBandwidthGbpsPropertyToHclTerraform(struct?: AwsCapacityProvider.NetworkBandwidthGbpsPropertyOutputReference | AwsCapacityProvider.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderNetworkInterfaceCountPropertyToTerraform(struct?: AwsCapacityProvider.NetworkInterfaceCountPropertyOutputReference | AwsCapacityProvider.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderNetworkInterfaceCountPropertyToHclTerraform(struct?: AwsCapacityProvider.NetworkInterfaceCountPropertyOutputReference | AwsCapacityProvider.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderTotalLocalStorageGbPropertyToTerraform(struct?: AwsCapacityProvider.TotalLocalStorageGbPropertyOutputReference | AwsCapacityProvider.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderTotalLocalStorageGbPropertyToHclTerraform(struct?: AwsCapacityProvider.TotalLocalStorageGbPropertyOutputReference | AwsCapacityProvider.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderVcpuCountPropertyToTerraform(struct?: AwsCapacityProvider.VcpuCountPropertyOutputReference | AwsCapacityProvider.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsCapacityProviderVcpuCountPropertyToHclTerraform(struct?: AwsCapacityProvider.VcpuCountPropertyOutputReference | AwsCapacityProvider.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderInstanceRequirementsPropertyToTerraform(struct?: AwsCapacityProvider.InstanceRequirementsPropertyOutputReference | AwsCapacityProvider.InstanceRequirementsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
    accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
    accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
    allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
    bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
    burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
    cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
    excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
    instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
    local_storage: cdktn.stringToTerraform(struct!.localStorage),
    local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
    max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
    on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
    require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
    spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
    accelerator_count: awsCapacityProviderAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
    accelerator_total_memory_mib: awsCapacityProviderAcceleratorTotalMemoryMibPropertyToTerraform(struct!.acceleratorTotalMemoryMib),
    baseline_ebs_bandwidth_mbps: awsCapacityProviderBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
    memory_gib_per_vcpu: awsCapacityProviderMemoryGibPerVcpuPropertyToTerraform(struct!.memoryGibPerVcpu),
    memory_mib: awsCapacityProviderMemoryMibPropertyToTerraform(struct!.memoryMib),
    network_bandwidth_gbps: awsCapacityProviderNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
    network_interface_count: awsCapacityProviderNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
    total_local_storage_gb: awsCapacityProviderTotalLocalStorageGbPropertyToTerraform(struct!.totalLocalStorageGb),
    vcpu_count: awsCapacityProviderVcpuCountPropertyToTerraform(struct!.vcpuCount),
  }
}


export function awsCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct?: AwsCapacityProvider.InstanceRequirementsPropertyOutputReference | AwsCapacityProvider.InstanceRequirementsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_manufacturers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bare_metal: {
      value: cdktn.stringToHclTerraform(struct!.bareMetal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burstable_performance: {
      value: cdktn.stringToHclTerraform(struct!.burstablePerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manufacturers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cpuManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_generations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGenerations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_storage: {
      value: cdktn.stringToHclTerraform(struct!.localStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_storage_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localStorageTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_spot_price_as_percentage_of_optimal_on_demand_price: {
      value: cdktn.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_max_price_percentage_over_lowest_price: {
      value: cdktn.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_hibernate_support: {
      value: cdktn.booleanToHclTerraform(struct!.requireHibernateSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_max_price_percentage_over_lowest_price: {
      value: cdktn.numberToHclTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_count: {
      value: awsCapacityProviderAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorCountPropertyList",
    },
    accelerator_total_memory_mib: {
      value: awsCapacityProviderAcceleratorTotalMemoryMibPropertyToHclTerraform(struct!.acceleratorTotalMemoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorTotalMemoryMibPropertyList",
    },
    baseline_ebs_bandwidth_mbps: {
      value: awsCapacityProviderBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
      isBlock: true,
      type: "list",
      storageClassType: "BaselineEbsBandwidthMbpsPropertyList",
    },
    memory_gib_per_vcpu: {
      value: awsCapacityProviderMemoryGibPerVcpuPropertyToHclTerraform(struct!.memoryGibPerVcpu),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryGibPerVcpuPropertyList",
    },
    memory_mib: {
      value: awsCapacityProviderMemoryMibPropertyToHclTerraform(struct!.memoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryMibPropertyList",
    },
    network_bandwidth_gbps: {
      value: awsCapacityProviderNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkBandwidthGbpsPropertyList",
    },
    network_interface_count: {
      value: awsCapacityProviderNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkInterfaceCountPropertyList",
    },
    total_local_storage_gb: {
      value: awsCapacityProviderTotalLocalStorageGbPropertyToHclTerraform(struct!.totalLocalStorageGb),
      isBlock: true,
      type: "list",
      storageClassType: "TotalLocalStorageGbPropertyList",
    },
    vcpu_count: {
      value: awsCapacityProviderVcpuCountPropertyToHclTerraform(struct!.vcpuCount),
      isBlock: true,
      type: "list",
      storageClassType: "VcpuCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderLocalStorageConfigurationPropertyToTerraform(struct?: AwsCapacityProvider.LocalStorageConfigurationPropertyOutputReference | AwsCapacityProvider.LocalStorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    use_local_storage: cdktn.booleanToTerraform(struct!.useLocalStorage),
  }
}


export function awsCapacityProviderLocalStorageConfigurationPropertyToHclTerraform(struct?: AwsCapacityProvider.LocalStorageConfigurationPropertyOutputReference | AwsCapacityProvider.LocalStorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    use_local_storage: {
      value: cdktn.booleanToHclTerraform(struct!.useLocalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderNetworkConfigurationPropertyToTerraform(struct?: AwsCapacityProvider.NetworkConfigurationPropertyOutputReference | AwsCapacityProvider.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsCapacityProviderNetworkConfigurationPropertyToHclTerraform(struct?: AwsCapacityProvider.NetworkConfigurationPropertyOutputReference | AwsCapacityProvider.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsCapacityProviderStorageConfigurationPropertyToTerraform(struct?: AwsCapacityProvider.StorageConfigurationPropertyOutputReference | AwsCapacityProvider.StorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_size_gib: cdktn.numberToTerraform(struct!.storageSizeGib),
  }
}


export function awsCapacityProviderStorageConfigurationPropertyToHclTerraform(struct?: AwsCapacityProvider.StorageConfigurationPropertyOutputReference | AwsCapacityProvider.StorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_size_gib: {
      value: cdktn.numberToHclTerraform(struct!.storageSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderInstanceLaunchTemplatePropertyToTerraform(struct?: AwsCapacityProvider.InstanceLaunchTemplatePropertyOutputReference | AwsCapacityProvider.InstanceLaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_option_type: cdktn.stringToTerraform(struct!.capacityOptionType),
    ec2_instance_profile_arn: cdktn.stringToTerraform(struct!.ec2InstanceProfileArn),
    monitoring: cdktn.stringToTerraform(struct!.monitoring),
    capacity_reservations: awsCapacityProviderCapacityReservationsPropertyToTerraform(struct!.capacityReservations),
    instance_requirements: awsCapacityProviderInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
    local_storage_configuration: awsCapacityProviderLocalStorageConfigurationPropertyToTerraform(struct!.localStorageConfiguration),
    network_configuration: awsCapacityProviderNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
    storage_configuration: awsCapacityProviderStorageConfigurationPropertyToTerraform(struct!.storageConfiguration),
  }
}


export function awsCapacityProviderInstanceLaunchTemplatePropertyToHclTerraform(struct?: AwsCapacityProvider.InstanceLaunchTemplatePropertyOutputReference | AwsCapacityProvider.InstanceLaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_option_type: {
      value: cdktn.stringToHclTerraform(struct!.capacityOptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2_instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.ec2InstanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: cdktn.stringToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservations: {
      value: awsCapacityProviderCapacityReservationsPropertyToHclTerraform(struct!.capacityReservations),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityReservationsPropertyList",
    },
    instance_requirements: {
      value: awsCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceRequirementsPropertyList",
    },
    local_storage_configuration: {
      value: awsCapacityProviderLocalStorageConfigurationPropertyToHclTerraform(struct!.localStorageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LocalStorageConfigurationPropertyList",
    },
    network_configuration: {
      value: awsCapacityProviderNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConfigurationPropertyList",
    },
    storage_configuration: {
      value: awsCapacityProviderStorageConfigurationPropertyToHclTerraform(struct!.storageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "StorageConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapacityProviderManagedInstancesProviderPropertyToTerraform(struct?: AwsCapacityProvider.ManagedInstancesProviderPropertyOutputReference | AwsCapacityProvider.ManagedInstancesProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    infrastructure_role_arn: cdktn.stringToTerraform(struct!.infrastructureRoleArn),
    propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    infrastructure_optimization: awsCapacityProviderInfrastructureOptimizationPropertyToTerraform(struct!.infrastructureOptimization),
    instance_launch_template: awsCapacityProviderInstanceLaunchTemplatePropertyToTerraform(struct!.instanceLaunchTemplate),
  }
}


export function awsCapacityProviderManagedInstancesProviderPropertyToHclTerraform(struct?: AwsCapacityProvider.ManagedInstancesProviderPropertyOutputReference | AwsCapacityProvider.ManagedInstancesProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    infrastructure_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.infrastructureRoleArn),
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
    infrastructure_optimization: {
      value: awsCapacityProviderInfrastructureOptimizationPropertyToHclTerraform(struct!.infrastructureOptimization),
      isBlock: true,
      type: "list",
      storageClassType: "InfrastructureOptimizationPropertyList",
    },
    instance_launch_template: {
      value: awsCapacityProviderInstanceLaunchTemplatePropertyToHclTerraform(struct!.instanceLaunchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceLaunchTemplatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCapacityProvider {
export interface ManagedScalingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#instance_warmup_period AwsCapacityProvider#instance_warmup_period}
  */
  readonly instanceWarmupPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#maximum_scaling_step_size AwsCapacityProvider#maximum_scaling_step_size}
  */
  readonly maximumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#minimum_scaling_step_size AwsCapacityProvider#minimum_scaling_step_size}
  */
  readonly minimumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#status AwsCapacityProvider#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#target_capacity AwsCapacityProvider#target_capacity}
  */
  readonly targetCapacity?: number;
}
export class ManagedScalingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedScalingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceWarmupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
    }
    if (this._maximumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
    }
    if (this._minimumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacity = this._targetCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedScalingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceWarmupPeriod = undefined;
      this._maximumScalingStepSize = undefined;
      this._minimumScalingStepSize = undefined;
      this._status = undefined;
      this._targetCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceWarmupPeriod = value.instanceWarmupPeriod;
      this._maximumScalingStepSize = value.maximumScalingStepSize;
      this._minimumScalingStepSize = value.minimumScalingStepSize;
      this._status = value.status;
      this._targetCapacity = value.targetCapacity;
    }
  }

  // instance_warmup_period - computed: true, optional: true, required: false
  private _instanceWarmupPeriod?: number; 
  public get instanceWarmupPeriod() {
    return this.getNumberAttribute('instance_warmup_period');
  }
  public set instanceWarmupPeriod(value: number) {
    this._instanceWarmupPeriod = value;
  }
  public resetInstanceWarmupPeriod() {
    this._instanceWarmupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWarmupPeriodInput() {
    return this._instanceWarmupPeriod;
  }

  // maximum_scaling_step_size - computed: true, optional: true, required: false
  private _maximumScalingStepSize?: number; 
  public get maximumScalingStepSize() {
    return this.getNumberAttribute('maximum_scaling_step_size');
  }
  public set maximumScalingStepSize(value: number) {
    this._maximumScalingStepSize = value;
  }
  public resetMaximumScalingStepSize() {
    this._maximumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScalingStepSizeInput() {
    return this._maximumScalingStepSize;
  }

  // minimum_scaling_step_size - computed: true, optional: true, required: false
  private _minimumScalingStepSize?: number; 
  public get minimumScalingStepSize() {
    return this.getNumberAttribute('minimum_scaling_step_size');
  }
  public set minimumScalingStepSize(value: number) {
    this._minimumScalingStepSize = value;
  }
  public resetMinimumScalingStepSize() {
    this._minimumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumScalingStepSizeInput() {
    return this._minimumScalingStepSize;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_capacity - computed: true, optional: true, required: false
  private _targetCapacity?: number; 
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }
  public resetTargetCapacity() {
    this._targetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
  }
}
export interface AutoScalingGroupProviderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#auto_scaling_group_arn AwsCapacityProvider#auto_scaling_group_arn}
  */
  readonly autoScalingGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#managed_draining AwsCapacityProvider#managed_draining}
  */
  readonly managedDraining?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#managed_termination_protection AwsCapacityProvider#managed_termination_protection}
  */
  readonly managedTerminationProtection?: string;
  /**
  * managed_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#managed_scaling AwsCapacityProvider#managed_scaling}
  */
  readonly managedScaling?: ManagedScalingProperty;
}
export class AutoScalingGroupProviderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoScalingGroupProviderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
    }
    if (this._managedDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDraining = this._managedDraining;
    }
    if (this._managedTerminationProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
    }
    if (this._managedScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedScaling = this._managedScaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoScalingGroupProviderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingGroupArn = undefined;
      this._managedDraining = undefined;
      this._managedTerminationProtection = undefined;
      this._managedScaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingGroupArn = value.autoScalingGroupArn;
      this._managedDraining = value.managedDraining;
      this._managedTerminationProtection = value.managedTerminationProtection;
      this._managedScaling.internalValue = value.managedScaling;
    }
  }

  // auto_scaling_group_arn - computed: false, optional: false, required: true
  private _autoScalingGroupArn?: string; 
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }
  public set autoScalingGroupArn(value: string) {
    this._autoScalingGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupArnInput() {
    return this._autoScalingGroupArn;
  }

  // managed_draining - computed: true, optional: true, required: false
  private _managedDraining?: string; 
  public get managedDraining() {
    return this.getStringAttribute('managed_draining');
  }
  public set managedDraining(value: string) {
    this._managedDraining = value;
  }
  public resetManagedDraining() {
    this._managedDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDrainingInput() {
    return this._managedDraining;
  }

  // managed_termination_protection - computed: true, optional: true, required: false
  private _managedTerminationProtection?: string; 
  public get managedTerminationProtection() {
    return this.getStringAttribute('managed_termination_protection');
  }
  public set managedTerminationProtection(value: string) {
    this._managedTerminationProtection = value;
  }
  public resetManagedTerminationProtection() {
    this._managedTerminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTerminationProtectionInput() {
    return this._managedTerminationProtection;
  }

  // managed_scaling - computed: false, optional: true, required: false
  private _managedScaling = new ManagedScalingPropertyOutputReference(this, "managed_scaling");
  public get managedScaling() {
    return this._managedScaling;
  }
  public putManagedScaling(value: ManagedScalingProperty) {
    this._managedScaling.internalValue = value;
  }
  public resetManagedScaling() {
    this._managedScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedScalingInput() {
    return this._managedScaling.internalValue;
  }
}
export interface InfrastructureOptimizationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#scale_in_after AwsCapacityProvider#scale_in_after}
  */
  readonly scaleInAfter?: number;
}
export class InfrastructureOptimizationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureOptimizationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleInAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInAfter = this._scaleInAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureOptimizationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleInAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleInAfter = value.scaleInAfter;
    }
  }

  // scale_in_after - computed: false, optional: true, required: false
  private _scaleInAfter?: number; 
  public get scaleInAfter() {
    return this.getNumberAttribute('scale_in_after');
  }
  public set scaleInAfter(value: number) {
    this._scaleInAfter = value;
  }
  public resetScaleInAfter() {
    this._scaleInAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInAfterInput() {
    return this._scaleInAfter;
  }
}
export interface CapacityReservationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#reservation_group_arn AwsCapacityProvider#reservation_group_arn}
  */
  readonly reservationGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#reservation_preference AwsCapacityProvider#reservation_preference}
  */
  readonly reservationPreference?: string;
}
export class CapacityReservationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityReservationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservationGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationGroupArn = this._reservationGroupArn;
    }
    if (this._reservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationPreference = this._reservationPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityReservationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservationGroupArn = undefined;
      this._reservationPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservationGroupArn = value.reservationGroupArn;
      this._reservationPreference = value.reservationPreference;
    }
  }

  // reservation_group_arn - computed: false, optional: true, required: false
  private _reservationGroupArn?: string; 
  public get reservationGroupArn() {
    return this.getStringAttribute('reservation_group_arn');
  }
  public set reservationGroupArn(value: string) {
    this._reservationGroupArn = value;
  }
  public resetReservationGroupArn() {
    this._reservationGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationGroupArnInput() {
    return this._reservationGroupArn;
  }

  // reservation_preference - computed: true, optional: true, required: false
  private _reservationPreference?: string; 
  public get reservationPreference() {
    return this.getStringAttribute('reservation_preference');
  }
  public set reservationPreference(value: string) {
    this._reservationPreference = value;
  }
  public resetReservationPreference() {
    this._reservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationPreferenceInput() {
    return this._reservationPreference;
  }
}
export interface AcceleratorCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class AcceleratorCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcceleratorCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcceleratorCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface AcceleratorTotalMemoryMibProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class AcceleratorTotalMemoryMibPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcceleratorTotalMemoryMibProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcceleratorTotalMemoryMibProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface BaselineEbsBandwidthMbpsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class BaselineEbsBandwidthMbpsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BaselineEbsBandwidthMbpsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaselineEbsBandwidthMbpsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MemoryGibPerVcpuProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class MemoryGibPerVcpuPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemoryGibPerVcpuProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryGibPerVcpuProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MemoryMibProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min: number;
}
export class MemoryMibPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemoryMibProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryMibProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface NetworkBandwidthGbpsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class NetworkBandwidthGbpsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkBandwidthGbpsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBandwidthGbpsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface NetworkInterfaceCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class NetworkInterfaceCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkInterfaceCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkInterfaceCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface TotalLocalStorageGbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min?: number;
}
export class TotalLocalStorageGbPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TotalLocalStorageGbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TotalLocalStorageGbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface VcpuCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max AwsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#min AwsCapacityProvider#min}
  */
  readonly min: number;
}
export class VcpuCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VcpuCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcpuCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface InstanceRequirementsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#accelerator_manufacturers AwsCapacityProvider#accelerator_manufacturers}
  */
  readonly acceleratorManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#accelerator_names AwsCapacityProvider#accelerator_names}
  */
  readonly acceleratorNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#accelerator_types AwsCapacityProvider#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#allowed_instance_types AwsCapacityProvider#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#bare_metal AwsCapacityProvider#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#burstable_performance AwsCapacityProvider#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#cpu_manufacturers AwsCapacityProvider#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#excluded_instance_types AwsCapacityProvider#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#instance_generations AwsCapacityProvider#instance_generations}
  */
  readonly instanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#local_storage AwsCapacityProvider#local_storage}
  */
  readonly localStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#local_storage_types AwsCapacityProvider#local_storage_types}
  */
  readonly localStorageTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#max_spot_price_as_percentage_of_optimal_on_demand_price AwsCapacityProvider#max_spot_price_as_percentage_of_optimal_on_demand_price}
  */
  readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#on_demand_max_price_percentage_over_lowest_price AwsCapacityProvider#on_demand_max_price_percentage_over_lowest_price}
  */
  readonly onDemandMaxPricePercentageOverLowestPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#require_hibernate_support AwsCapacityProvider#require_hibernate_support}
  */
  readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#spot_max_price_percentage_over_lowest_price AwsCapacityProvider#spot_max_price_percentage_over_lowest_price}
  */
  readonly spotMaxPricePercentageOverLowestPrice?: number;
  /**
  * accelerator_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#accelerator_count AwsCapacityProvider#accelerator_count}
  */
  readonly acceleratorCount?: AcceleratorCountProperty;
  /**
  * accelerator_total_memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#accelerator_total_memory_mib AwsCapacityProvider#accelerator_total_memory_mib}
  */
  readonly acceleratorTotalMemoryMib?: AcceleratorTotalMemoryMibProperty;
  /**
  * baseline_ebs_bandwidth_mbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#baseline_ebs_bandwidth_mbps AwsCapacityProvider#baseline_ebs_bandwidth_mbps}
  */
  readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
  /**
  * memory_gib_per_vcpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#memory_gib_per_vcpu AwsCapacityProvider#memory_gib_per_vcpu}
  */
  readonly memoryGibPerVcpu?: MemoryGibPerVcpuProperty;
  /**
  * memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#memory_mib AwsCapacityProvider#memory_mib}
  */
  readonly memoryMib: MemoryMibProperty;
  /**
  * network_bandwidth_gbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#network_bandwidth_gbps AwsCapacityProvider#network_bandwidth_gbps}
  */
  readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
  /**
  * network_interface_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#network_interface_count AwsCapacityProvider#network_interface_count}
  */
  readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
  /**
  * total_local_storage_gb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#total_local_storage_gb AwsCapacityProvider#total_local_storage_gb}
  */
  readonly totalLocalStorageGb?: TotalLocalStorageGbProperty;
  /**
  * vcpu_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#vcpu_count AwsCapacityProvider#vcpu_count}
  */
  readonly vcpuCount: VcpuCountProperty;
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceRequirementsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorManufacturers = this._acceleratorManufacturers;
    }
    if (this._acceleratorNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorNames = this._acceleratorNames;
    }
    if (this._acceleratorTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTypes = this._acceleratorTypes;
    }
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    if (this._bareMetal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bareMetal = this._bareMetal;
    }
    if (this._burstablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstablePerformance = this._burstablePerformance;
    }
    if (this._cpuManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManufacturers = this._cpuManufacturers;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    if (this._instanceGenerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGenerations = this._instanceGenerations;
    }
    if (this._localStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorage = this._localStorage;
    }
    if (this._localStorageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageTypes = this._localStorageTypes;
    }
    if (this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
    }
    if (this._onDemandMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandMaxPricePercentageOverLowestPrice = this._onDemandMaxPricePercentageOverLowestPrice;
    }
    if (this._requireHibernateSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHibernateSupport = this._requireHibernateSupport;
    }
    if (this._spotMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPricePercentageOverLowestPrice = this._spotMaxPricePercentageOverLowestPrice;
    }
    if (this._acceleratorCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
    }
    if (this._acceleratorTotalMemoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTotalMemoryMib = this._acceleratorTotalMemoryMib?.internalValue;
    }
    if (this._baselineEbsBandwidthMbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineEbsBandwidthMbps = this._baselineEbsBandwidthMbps?.internalValue;
    }
    if (this._memoryGibPerVcpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGibPerVcpu = this._memoryGibPerVcpu?.internalValue;
    }
    if (this._memoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib?.internalValue;
    }
    if (this._networkBandwidthGbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBandwidthGbps = this._networkBandwidthGbps?.internalValue;
    }
    if (this._networkInterfaceCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceCount = this._networkInterfaceCount?.internalValue;
    }
    if (this._totalLocalStorageGb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLocalStorageGb = this._totalLocalStorageGb?.internalValue;
    }
    if (this._vcpuCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuCount = this._vcpuCount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceRequirementsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorManufacturers = undefined;
      this._acceleratorNames = undefined;
      this._acceleratorTypes = undefined;
      this._allowedInstanceTypes = undefined;
      this._bareMetal = undefined;
      this._burstablePerformance = undefined;
      this._cpuManufacturers = undefined;
      this._excludedInstanceTypes = undefined;
      this._instanceGenerations = undefined;
      this._localStorage = undefined;
      this._localStorageTypes = undefined;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
      this._onDemandMaxPricePercentageOverLowestPrice = undefined;
      this._requireHibernateSupport = undefined;
      this._spotMaxPricePercentageOverLowestPrice = undefined;
      this._acceleratorCount.internalValue = undefined;
      this._acceleratorTotalMemoryMib.internalValue = undefined;
      this._baselineEbsBandwidthMbps.internalValue = undefined;
      this._memoryGibPerVcpu.internalValue = undefined;
      this._memoryMib.internalValue = undefined;
      this._networkBandwidthGbps.internalValue = undefined;
      this._networkInterfaceCount.internalValue = undefined;
      this._totalLocalStorageGb.internalValue = undefined;
      this._vcpuCount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorManufacturers = value.acceleratorManufacturers;
      this._acceleratorNames = value.acceleratorNames;
      this._acceleratorTypes = value.acceleratorTypes;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
      this._bareMetal = value.bareMetal;
      this._burstablePerformance = value.burstablePerformance;
      this._cpuManufacturers = value.cpuManufacturers;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
      this._instanceGenerations = value.instanceGenerations;
      this._localStorage = value.localStorage;
      this._localStorageTypes = value.localStorageTypes;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value.maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
      this._onDemandMaxPricePercentageOverLowestPrice = value.onDemandMaxPricePercentageOverLowestPrice;
      this._requireHibernateSupport = value.requireHibernateSupport;
      this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
      this._acceleratorCount.internalValue = value.acceleratorCount;
      this._acceleratorTotalMemoryMib.internalValue = value.acceleratorTotalMemoryMib;
      this._baselineEbsBandwidthMbps.internalValue = value.baselineEbsBandwidthMbps;
      this._memoryGibPerVcpu.internalValue = value.memoryGibPerVcpu;
      this._memoryMib.internalValue = value.memoryMib;
      this._networkBandwidthGbps.internalValue = value.networkBandwidthGbps;
      this._networkInterfaceCount.internalValue = value.networkInterfaceCount;
      this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
      this._vcpuCount.internalValue = value.vcpuCount;
    }
  }

  // accelerator_manufacturers - computed: false, optional: true, required: false
  private _acceleratorManufacturers?: string[]; 
  public get acceleratorManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_manufacturers'));
  }
  public set acceleratorManufacturers(value: string[]) {
    this._acceleratorManufacturers = value;
  }
  public resetAcceleratorManufacturers() {
    this._acceleratorManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorManufacturersInput() {
    return this._acceleratorManufacturers;
  }

  // accelerator_names - computed: false, optional: true, required: false
  private _acceleratorNames?: string[]; 
  public get acceleratorNames() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_names'));
  }
  public set acceleratorNames(value: string[]) {
    this._acceleratorNames = value;
  }
  public resetAcceleratorNames() {
    this._acceleratorNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNamesInput() {
    return this._acceleratorNames;
  }

  // accelerator_types - computed: false, optional: true, required: false
  private _acceleratorTypes?: string[]; 
  public get acceleratorTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_types'));
  }
  public set acceleratorTypes(value: string[]) {
    this._acceleratorTypes = value;
  }
  public resetAcceleratorTypes() {
    this._acceleratorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypesInput() {
    return this._acceleratorTypes;
  }

  // allowed_instance_types - computed: false, optional: true, required: false
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_instance_types'));
  }
  public set allowedInstanceTypes(value: string[]) {
    this._allowedInstanceTypes = value;
  }
  public resetAllowedInstanceTypes() {
    this._allowedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInstanceTypesInput() {
    return this._allowedInstanceTypes;
  }

  // bare_metal - computed: false, optional: true, required: false
  private _bareMetal?: string; 
  public get bareMetal() {
    return this.getStringAttribute('bare_metal');
  }
  public set bareMetal(value: string) {
    this._bareMetal = value;
  }
  public resetBareMetal() {
    this._bareMetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalInput() {
    return this._bareMetal;
  }

  // burstable_performance - computed: false, optional: true, required: false
  private _burstablePerformance?: string; 
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }
  public set burstablePerformance(value: string) {
    this._burstablePerformance = value;
  }
  public resetBurstablePerformance() {
    this._burstablePerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstablePerformanceInput() {
    return this._burstablePerformance;
  }

  // cpu_manufacturers - computed: false, optional: true, required: false
  private _cpuManufacturers?: string[]; 
  public get cpuManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('cpu_manufacturers'));
  }
  public set cpuManufacturers(value: string[]) {
    this._cpuManufacturers = value;
  }
  public resetCpuManufacturers() {
    this._cpuManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManufacturersInput() {
    return this._cpuManufacturers;
  }

  // excluded_instance_types - computed: false, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_instance_types'));
  }
  public set excludedInstanceTypes(value: string[]) {
    this._excludedInstanceTypes = value;
  }
  public resetExcludedInstanceTypes() {
    this._excludedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceTypesInput() {
    return this._excludedInstanceTypes;
  }

  // instance_generations - computed: false, optional: true, required: false
  private _instanceGenerations?: string[]; 
  public get instanceGenerations() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_generations'));
  }
  public set instanceGenerations(value: string[]) {
    this._instanceGenerations = value;
  }
  public resetInstanceGenerations() {
    this._instanceGenerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGenerationsInput() {
    return this._instanceGenerations;
  }

  // local_storage - computed: false, optional: true, required: false
  private _localStorage?: string; 
  public get localStorage() {
    return this.getStringAttribute('local_storage');
  }
  public set localStorage(value: string) {
    this._localStorage = value;
  }
  public resetLocalStorage() {
    this._localStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInput() {
    return this._localStorage;
  }

  // local_storage_types - computed: false, optional: true, required: false
  private _localStorageTypes?: string[]; 
  public get localStorageTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('local_storage_types'));
  }
  public set localStorageTypes(value: string[]) {
    this._localStorageTypes = value;
  }
  public resetLocalStorageTypes() {
    this._localStorageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageTypesInput() {
    return this._localStorageTypes;
  }

  // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: false, optional: true, required: false
  private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number; 
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
  }
  public set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number) {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value;
  }
  public resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput() {
    return this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _onDemandMaxPricePercentageOverLowestPrice?: number; 
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }
  public set onDemandMaxPricePercentageOverLowestPrice(value: number) {
    this._onDemandMaxPricePercentageOverLowestPrice = value;
  }
  public resetOnDemandMaxPricePercentageOverLowestPrice() {
    this._onDemandMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandMaxPricePercentageOverLowestPriceInput() {
    return this._onDemandMaxPricePercentageOverLowestPrice;
  }

  // require_hibernate_support - computed: false, optional: true, required: false
  private _requireHibernateSupport?: boolean | cdktn.IResolvable; 
  public get requireHibernateSupport() {
    return this.getBooleanAttribute('require_hibernate_support');
  }
  public set requireHibernateSupport(value: boolean | cdktn.IResolvable) {
    this._requireHibernateSupport = value;
  }
  public resetRequireHibernateSupport() {
    this._requireHibernateSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHibernateSupportInput() {
    return this._requireHibernateSupport;
  }

  // spot_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _spotMaxPricePercentageOverLowestPrice?: number; 
  public get spotMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
  }
  public set spotMaxPricePercentageOverLowestPrice(value: number) {
    this._spotMaxPricePercentageOverLowestPrice = value;
  }
  public resetSpotMaxPricePercentageOverLowestPrice() {
    this._spotMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPricePercentageOverLowestPriceInput() {
    return this._spotMaxPricePercentageOverLowestPrice;
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount = new AcceleratorCountPropertyOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }
  public putAcceleratorCount(value: AcceleratorCountProperty) {
    this._acceleratorCount.internalValue = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount.internalValue;
  }

  // accelerator_total_memory_mib - computed: false, optional: true, required: false
  private _acceleratorTotalMemoryMib = new AcceleratorTotalMemoryMibPropertyOutputReference(this, "accelerator_total_memory_mib");
  public get acceleratorTotalMemoryMib() {
    return this._acceleratorTotalMemoryMib;
  }
  public putAcceleratorTotalMemoryMib(value: AcceleratorTotalMemoryMibProperty) {
    this._acceleratorTotalMemoryMib.internalValue = value;
  }
  public resetAcceleratorTotalMemoryMib() {
    this._acceleratorTotalMemoryMib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTotalMemoryMibInput() {
    return this._acceleratorTotalMemoryMib.internalValue;
  }

  // baseline_ebs_bandwidth_mbps - computed: false, optional: true, required: false
  private _baselineEbsBandwidthMbps = new BaselineEbsBandwidthMbpsPropertyOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }
  public putBaselineEbsBandwidthMbps(value: BaselineEbsBandwidthMbpsProperty) {
    this._baselineEbsBandwidthMbps.internalValue = value;
  }
  public resetBaselineEbsBandwidthMbps() {
    this._baselineEbsBandwidthMbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineEbsBandwidthMbpsInput() {
    return this._baselineEbsBandwidthMbps.internalValue;
  }

  // memory_gib_per_vcpu - computed: false, optional: true, required: false
  private _memoryGibPerVcpu = new MemoryGibPerVcpuPropertyOutputReference(this, "memory_gib_per_vcpu");
  public get memoryGibPerVcpu() {
    return this._memoryGibPerVcpu;
  }
  public putMemoryGibPerVcpu(value: MemoryGibPerVcpuProperty) {
    this._memoryGibPerVcpu.internalValue = value;
  }
  public resetMemoryGibPerVcpu() {
    this._memoryGibPerVcpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGibPerVcpuInput() {
    return this._memoryGibPerVcpu.internalValue;
  }

  // memory_mib - computed: false, optional: false, required: true
  private _memoryMib = new MemoryMibPropertyOutputReference(this, "memory_mib");
  public get memoryMib() {
    return this._memoryMib;
  }
  public putMemoryMib(value: MemoryMibProperty) {
    this._memoryMib.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib.internalValue;
  }

  // network_bandwidth_gbps - computed: false, optional: true, required: false
  private _networkBandwidthGbps = new NetworkBandwidthGbpsPropertyOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }
  public putNetworkBandwidthGbps(value: NetworkBandwidthGbpsProperty) {
    this._networkBandwidthGbps.internalValue = value;
  }
  public resetNetworkBandwidthGbps() {
    this._networkBandwidthGbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBandwidthGbpsInput() {
    return this._networkBandwidthGbps.internalValue;
  }

  // network_interface_count - computed: false, optional: true, required: false
  private _networkInterfaceCount = new NetworkInterfaceCountPropertyOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }
  public putNetworkInterfaceCount(value: NetworkInterfaceCountProperty) {
    this._networkInterfaceCount.internalValue = value;
  }
  public resetNetworkInterfaceCount() {
    this._networkInterfaceCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceCountInput() {
    return this._networkInterfaceCount.internalValue;
  }

  // total_local_storage_gb - computed: false, optional: true, required: false
  private _totalLocalStorageGb = new TotalLocalStorageGbPropertyOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }
  public putTotalLocalStorageGb(value: TotalLocalStorageGbProperty) {
    this._totalLocalStorageGb.internalValue = value;
  }
  public resetTotalLocalStorageGb() {
    this._totalLocalStorageGb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLocalStorageGbInput() {
    return this._totalLocalStorageGb.internalValue;
  }

  // vcpu_count - computed: false, optional: false, required: true
  private _vcpuCount = new VcpuCountPropertyOutputReference(this, "vcpu_count");
  public get vcpuCount() {
    return this._vcpuCount;
  }
  public putVcpuCount(value: VcpuCountProperty) {
    this._vcpuCount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount.internalValue;
  }
}
export interface LocalStorageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#use_local_storage AwsCapacityProvider#use_local_storage}
  */
  readonly useLocalStorage?: boolean | cdktn.IResolvable;
}
export class LocalStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocalStorageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useLocalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLocalStorage = this._useLocalStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalStorageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useLocalStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useLocalStorage = value.useLocalStorage;
    }
  }

  // use_local_storage - computed: false, optional: true, required: false
  private _useLocalStorage?: boolean | cdktn.IResolvable; 
  public get useLocalStorage() {
    return this.getBooleanAttribute('use_local_storage');
  }
  public set useLocalStorage(value: boolean | cdktn.IResolvable) {
    this._useLocalStorage = value;
  }
  public resetUseLocalStorage() {
    this._useLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalStorageInput() {
    return this._useLocalStorage;
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#security_groups AwsCapacityProvider#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#subnets AwsCapacityProvider#subnets}
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
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
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
export interface StorageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#storage_size_gib AwsCapacityProvider#storage_size_gib}
  */
  readonly storageSizeGib: number;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGib = this._storageSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageSizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageSizeGib = value.storageSizeGib;
    }
  }

  // storage_size_gib - computed: false, optional: false, required: true
  private _storageSizeGib?: number; 
  public get storageSizeGib() {
    return this.getNumberAttribute('storage_size_gib');
  }
  public set storageSizeGib(value: number) {
    this._storageSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGibInput() {
    return this._storageSizeGib;
  }
}
export interface InstanceLaunchTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#capacity_option_type AwsCapacityProvider#capacity_option_type}
  */
  readonly capacityOptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#ec2_instance_profile_arn AwsCapacityProvider#ec2_instance_profile_arn}
  */
  readonly ec2InstanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#monitoring AwsCapacityProvider#monitoring}
  */
  readonly monitoring?: string;
  /**
  * capacity_reservations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#capacity_reservations AwsCapacityProvider#capacity_reservations}
  */
  readonly capacityReservations?: CapacityReservationsProperty;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#instance_requirements AwsCapacityProvider#instance_requirements}
  */
  readonly instanceRequirements?: InstanceRequirementsProperty;
  /**
  * local_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#local_storage_configuration AwsCapacityProvider#local_storage_configuration}
  */
  readonly localStorageConfiguration?: LocalStorageConfigurationProperty;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#network_configuration AwsCapacityProvider#network_configuration}
  */
  readonly networkConfiguration: NetworkConfigurationProperty;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#storage_configuration AwsCapacityProvider#storage_configuration}
  */
  readonly storageConfiguration?: StorageConfigurationProperty;
}
export class InstanceLaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceLaunchTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityOptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityOptionType = this._capacityOptionType;
    }
    if (this._ec2InstanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceProfileArn = this._ec2InstanceProfileArn;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._capacityReservations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservations = this._capacityReservations?.internalValue;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    if (this._localStorageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageConfiguration = this._localStorageConfiguration?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._storageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceLaunchTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityOptionType = undefined;
      this._ec2InstanceProfileArn = undefined;
      this._monitoring = undefined;
      this._capacityReservations.internalValue = undefined;
      this._instanceRequirements.internalValue = undefined;
      this._localStorageConfiguration.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._storageConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityOptionType = value.capacityOptionType;
      this._ec2InstanceProfileArn = value.ec2InstanceProfileArn;
      this._monitoring = value.monitoring;
      this._capacityReservations.internalValue = value.capacityReservations;
      this._instanceRequirements.internalValue = value.instanceRequirements;
      this._localStorageConfiguration.internalValue = value.localStorageConfiguration;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._storageConfiguration.internalValue = value.storageConfiguration;
    }
  }

  // capacity_option_type - computed: true, optional: true, required: false
  private _capacityOptionType?: string; 
  public get capacityOptionType() {
    return this.getStringAttribute('capacity_option_type');
  }
  public set capacityOptionType(value: string) {
    this._capacityOptionType = value;
  }
  public resetCapacityOptionType() {
    this._capacityOptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionTypeInput() {
    return this._capacityOptionType;
  }

  // ec2_instance_profile_arn - computed: false, optional: false, required: true
  private _ec2InstanceProfileArn?: string; 
  public get ec2InstanceProfileArn() {
    return this.getStringAttribute('ec2_instance_profile_arn');
  }
  public set ec2InstanceProfileArn(value: string) {
    this._ec2InstanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceProfileArnInput() {
    return this._ec2InstanceProfileArn;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: string; 
  public get monitoring() {
    return this.getStringAttribute('monitoring');
  }
  public set monitoring(value: string) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // capacity_reservations - computed: false, optional: true, required: false
  private _capacityReservations = new CapacityReservationsPropertyOutputReference(this, "capacity_reservations");
  public get capacityReservations() {
    return this._capacityReservations;
  }
  public putCapacityReservations(value: CapacityReservationsProperty) {
    this._capacityReservations.internalValue = value;
  }
  public resetCapacityReservations() {
    this._capacityReservations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationsInput() {
    return this._capacityReservations.internalValue;
  }

  // instance_requirements - computed: false, optional: true, required: false
  private _instanceRequirements = new InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: InstanceRequirementsProperty) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // local_storage_configuration - computed: false, optional: true, required: false
  private _localStorageConfiguration = new LocalStorageConfigurationPropertyOutputReference(this, "local_storage_configuration");
  public get localStorageConfiguration() {
    return this._localStorageConfiguration;
  }
  public putLocalStorageConfiguration(value: LocalStorageConfigurationProperty) {
    this._localStorageConfiguration.internalValue = value;
  }
  public resetLocalStorageConfiguration() {
    this._localStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageConfigurationInput() {
    return this._localStorageConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new StorageConfigurationPropertyOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: StorageConfigurationProperty) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }
}
export interface ManagedInstancesProviderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#infrastructure_role_arn AwsCapacityProvider#infrastructure_role_arn}
  */
  readonly infrastructureRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#propagate_tags AwsCapacityProvider#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * infrastructure_optimization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#infrastructure_optimization AwsCapacityProvider#infrastructure_optimization}
  */
  readonly infrastructureOptimization?: InfrastructureOptimizationProperty;
  /**
  * instance_launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_capacity_provider#instance_launch_template AwsCapacityProvider#instance_launch_template}
  */
  readonly instanceLaunchTemplate: InstanceLaunchTemplateProperty;
}
export class ManagedInstancesProviderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstancesProviderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRoleArn = this._infrastructureRoleArn;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._infrastructureOptimization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureOptimization = this._infrastructureOptimization?.internalValue;
    }
    if (this._instanceLaunchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceLaunchTemplate = this._instanceLaunchTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstancesProviderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infrastructureRoleArn = undefined;
      this._propagateTags = undefined;
      this._infrastructureOptimization.internalValue = undefined;
      this._instanceLaunchTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infrastructureRoleArn = value.infrastructureRoleArn;
      this._propagateTags = value.propagateTags;
      this._infrastructureOptimization.internalValue = value.infrastructureOptimization;
      this._instanceLaunchTemplate.internalValue = value.instanceLaunchTemplate;
    }
  }

  // infrastructure_role_arn - computed: false, optional: false, required: true
  private _infrastructureRoleArn?: string; 
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }
  public set infrastructureRoleArn(value: string) {
    this._infrastructureRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRoleArnInput() {
    return this._infrastructureRoleArn;
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

  // infrastructure_optimization - computed: false, optional: true, required: false
  private _infrastructureOptimization = new InfrastructureOptimizationPropertyOutputReference(this, "infrastructure_optimization");
  public get infrastructureOptimization() {
    return this._infrastructureOptimization;
  }
  public putInfrastructureOptimization(value: InfrastructureOptimizationProperty) {
    this._infrastructureOptimization.internalValue = value;
  }
  public resetInfrastructureOptimization() {
    this._infrastructureOptimization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureOptimizationInput() {
    return this._infrastructureOptimization.internalValue;
  }

  // instance_launch_template - computed: false, optional: false, required: true
  private _instanceLaunchTemplate = new InstanceLaunchTemplatePropertyOutputReference(this, "instance_launch_template");
  public get instanceLaunchTemplate() {
    return this._instanceLaunchTemplate;
  }
  public putInstanceLaunchTemplate(value: InstanceLaunchTemplateProperty) {
    this._instanceLaunchTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLaunchTemplateInput() {
    return this._instanceLaunchTemplate.internalValue;
  }
}
}
