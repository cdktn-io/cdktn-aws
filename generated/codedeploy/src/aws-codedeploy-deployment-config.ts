// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCodedeployDeploymentConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#compute_platform AwsCodedeployDeploymentConfig#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#deployment_config_name AwsCodedeployDeploymentConfig#deployment_config_name}
  */
  readonly deploymentConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#id AwsCodedeployDeploymentConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#region AwsCodedeployDeploymentConfig#region}
  */
  readonly region?: string;
  /**
  * minimum_healthy_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts AwsCodedeployDeploymentConfig#minimum_healthy_hosts}
  */
  readonly minimumHealthyHosts?: AwsCodedeployDeploymentConfig.MinimumHealthyHostsProperty;
  /**
  * traffic_routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#traffic_routing_config AwsCodedeployDeploymentConfig#traffic_routing_config}
  */
  readonly trafficRoutingConfig?: AwsCodedeployDeploymentConfig.TrafficRoutingConfigProperty;
  /**
  * zonal_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#zonal_config AwsCodedeployDeploymentConfig#zonal_config}
  */
  readonly zonalConfig?: AwsCodedeployDeploymentConfig.ZonalConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config}
*/
export class AwsCodedeployDeploymentConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codedeploy_deployment_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCodedeployDeploymentConfig to import
  * @param importFromId The id of the existing AwsCodedeployDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCodedeployDeploymentConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_codedeploy_deployment_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCodedeployDeploymentConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCodedeployDeploymentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_config',
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
    this._computePlatform = config.computePlatform;
    this._deploymentConfigName = config.deploymentConfigName;
    this._id = config.id;
    this._region = config.region;
    this._minimumHealthyHosts.internalValue = config.minimumHealthyHosts;
    this._trafficRoutingConfig.internalValue = config.trafficRoutingConfig;
    this._zonalConfig.internalValue = config.zonalConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: false, optional: true, required: false
  private _computePlatform?: string; 
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform;
  }

  // deployment_config_id - computed: true, optional: false, required: false
  public get deploymentConfigId() {
    return this.getStringAttribute('deployment_config_id');
  }

  // deployment_config_name - computed: false, optional: false, required: true
  private _deploymentConfigName?: string; 
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName;
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

  // minimum_healthy_hosts - computed: false, optional: true, required: false
  private _minimumHealthyHosts = new AwsCodedeployDeploymentConfig.MinimumHealthyHostsPropertyOutputReference(this, "minimum_healthy_hosts");
  public get minimumHealthyHosts() {
    return this._minimumHealthyHosts;
  }
  public putMinimumHealthyHosts(value: AwsCodedeployDeploymentConfig.MinimumHealthyHostsProperty) {
    this._minimumHealthyHosts.internalValue = value;
  }
  public resetMinimumHealthyHosts() {
    this._minimumHealthyHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsInput() {
    return this._minimumHealthyHosts.internalValue;
  }

  // traffic_routing_config - computed: false, optional: true, required: false
  private _trafficRoutingConfig = new AwsCodedeployDeploymentConfig.TrafficRoutingConfigPropertyOutputReference(this, "traffic_routing_config");
  public get trafficRoutingConfig() {
    return this._trafficRoutingConfig;
  }
  public putTrafficRoutingConfig(value: AwsCodedeployDeploymentConfig.TrafficRoutingConfigProperty) {
    this._trafficRoutingConfig.internalValue = value;
  }
  public resetTrafficRoutingConfig() {
    this._trafficRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigInput() {
    return this._trafficRoutingConfig.internalValue;
  }

  // zonal_config - computed: false, optional: true, required: false
  private _zonalConfig = new AwsCodedeployDeploymentConfig.ZonalConfigPropertyOutputReference(this, "zonal_config");
  public get zonalConfig() {
    return this._zonalConfig;
  }
  public putZonalConfig(value: AwsCodedeployDeploymentConfig.ZonalConfigProperty) {
    this._zonalConfig.internalValue = value;
  }
  public resetZonalConfig() {
    this._zonalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalConfigInput() {
    return this._zonalConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: cdktn.stringToTerraform(this._computePlatform),
      deployment_config_name: cdktn.stringToTerraform(this._deploymentConfigName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      minimum_healthy_hosts: awsCodedeployDeploymentConfigMinimumHealthyHostsPropertyToTerraform(this._minimumHealthyHosts.internalValue),
      traffic_routing_config: awsCodedeployDeploymentConfigTrafficRoutingConfigPropertyToTerraform(this._trafficRoutingConfig.internalValue),
      zonal_config: awsCodedeployDeploymentConfigZonalConfigPropertyToTerraform(this._zonalConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_platform: {
        value: cdktn.stringToHclTerraform(this._computePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_config_name: {
        value: cdktn.stringToHclTerraform(this._deploymentConfigName),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_healthy_hosts: {
        value: awsCodedeployDeploymentConfigMinimumHealthyHostsPropertyToHclTerraform(this._minimumHealthyHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCodedeployDeploymentConfig.MinimumHealthyHostsPropertyList",
      },
      traffic_routing_config: {
        value: awsCodedeployDeploymentConfigTrafficRoutingConfigPropertyToHclTerraform(this._trafficRoutingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCodedeployDeploymentConfig.TrafficRoutingConfigPropertyList",
      },
      zonal_config: {
        value: awsCodedeployDeploymentConfigZonalConfigPropertyToHclTerraform(this._zonalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCodedeployDeploymentConfig.ZonalConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCodedeployDeploymentConfigMinimumHealthyHostsPropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.MinimumHealthyHostsPropertyOutputReference | AwsCodedeployDeploymentConfig.MinimumHealthyHostsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsCodedeployDeploymentConfigMinimumHealthyHostsPropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.MinimumHealthyHostsPropertyOutputReference | AwsCodedeployDeploymentConfig.MinimumHealthyHostsProperty): any {
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


export function awsCodedeployDeploymentConfigTimeBasedCanaryPropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.TimeBasedCanaryPropertyOutputReference | AwsCodedeployDeploymentConfig.TimeBasedCanaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function awsCodedeployDeploymentConfigTimeBasedCanaryPropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.TimeBasedCanaryPropertyOutputReference | AwsCodedeployDeploymentConfig.TimeBasedCanaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCodedeployDeploymentConfigTimeBasedLinearPropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.TimeBasedLinearPropertyOutputReference | AwsCodedeployDeploymentConfig.TimeBasedLinearProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function awsCodedeployDeploymentConfigTimeBasedLinearPropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.TimeBasedLinearPropertyOutputReference | AwsCodedeployDeploymentConfig.TimeBasedLinearProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCodedeployDeploymentConfigTrafficRoutingConfigPropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.TrafficRoutingConfigPropertyOutputReference | AwsCodedeployDeploymentConfig.TrafficRoutingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    time_based_canary: awsCodedeployDeploymentConfigTimeBasedCanaryPropertyToTerraform(struct!.timeBasedCanary),
    time_based_linear: awsCodedeployDeploymentConfigTimeBasedLinearPropertyToTerraform(struct!.timeBasedLinear),
  }
}


export function awsCodedeployDeploymentConfigTrafficRoutingConfigPropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.TrafficRoutingConfigPropertyOutputReference | AwsCodedeployDeploymentConfig.TrafficRoutingConfigProperty): any {
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
    time_based_canary: {
      value: awsCodedeployDeploymentConfigTimeBasedCanaryPropertyToHclTerraform(struct!.timeBasedCanary),
      isBlock: true,
      type: "list",
      storageClassType: "TimeBasedCanaryPropertyList",
    },
    time_based_linear: {
      value: awsCodedeployDeploymentConfigTimeBasedLinearPropertyToHclTerraform(struct!.timeBasedLinear),
      isBlock: true,
      type: "list",
      storageClassType: "TimeBasedLinearPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCodedeployDeploymentConfigMinimumHealthyHostsPerZonePropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.MinimumHealthyHostsPerZonePropertyOutputReference | AwsCodedeployDeploymentConfig.MinimumHealthyHostsPerZoneProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsCodedeployDeploymentConfigMinimumHealthyHostsPerZonePropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.MinimumHealthyHostsPerZonePropertyOutputReference | AwsCodedeployDeploymentConfig.MinimumHealthyHostsPerZoneProperty): any {
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


export function awsCodedeployDeploymentConfigZonalConfigPropertyToTerraform(struct?: AwsCodedeployDeploymentConfig.ZonalConfigPropertyOutputReference | AwsCodedeployDeploymentConfig.ZonalConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    first_zone_monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.firstZoneMonitorDurationInSeconds),
    monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.monitorDurationInSeconds),
    minimum_healthy_hosts_per_zone: awsCodedeployDeploymentConfigMinimumHealthyHostsPerZonePropertyToTerraform(struct!.minimumHealthyHostsPerZone),
  }
}


export function awsCodedeployDeploymentConfigZonalConfigPropertyToHclTerraform(struct?: AwsCodedeployDeploymentConfig.ZonalConfigPropertyOutputReference | AwsCodedeployDeploymentConfig.ZonalConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    first_zone_monitor_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.firstZoneMonitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.monitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_healthy_hosts_per_zone: {
      value: awsCodedeployDeploymentConfigMinimumHealthyHostsPerZonePropertyToHclTerraform(struct!.minimumHealthyHostsPerZone),
      isBlock: true,
      type: "list",
      storageClassType: "MinimumHealthyHostsPerZonePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCodedeployDeploymentConfig {
export interface MinimumHealthyHostsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#type AwsCodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#value AwsCodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}
export class MinimumHealthyHostsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MinimumHealthyHostsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MinimumHealthyHostsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TimeBasedCanaryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#interval AwsCodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#percentage AwsCodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}
export class TimeBasedCanaryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeBasedCanaryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeBasedCanaryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._percentage = value.percentage;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface TimeBasedLinearProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#interval AwsCodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#percentage AwsCodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}
export class TimeBasedLinearPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeBasedLinearProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeBasedLinearProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._percentage = value.percentage;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface TrafficRoutingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#type AwsCodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * time_based_canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#time_based_canary AwsCodedeployDeploymentConfig#time_based_canary}
  */
  readonly timeBasedCanary?: TimeBasedCanaryProperty;
  /**
  * time_based_linear block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#time_based_linear AwsCodedeployDeploymentConfig#time_based_linear}
  */
  readonly timeBasedLinear?: TimeBasedLinearProperty;
}
export class TrafficRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficRoutingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._timeBasedCanary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedCanary = this._timeBasedCanary?.internalValue;
    }
    if (this._timeBasedLinear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedLinear = this._timeBasedLinear?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficRoutingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._timeBasedCanary.internalValue = undefined;
      this._timeBasedLinear.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._timeBasedCanary.internalValue = value.timeBasedCanary;
      this._timeBasedLinear.internalValue = value.timeBasedLinear;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // time_based_canary - computed: false, optional: true, required: false
  private _timeBasedCanary = new TimeBasedCanaryPropertyOutputReference(this, "time_based_canary");
  public get timeBasedCanary() {
    return this._timeBasedCanary;
  }
  public putTimeBasedCanary(value: TimeBasedCanaryProperty) {
    this._timeBasedCanary.internalValue = value;
  }
  public resetTimeBasedCanary() {
    this._timeBasedCanary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedCanaryInput() {
    return this._timeBasedCanary.internalValue;
  }

  // time_based_linear - computed: false, optional: true, required: false
  private _timeBasedLinear = new TimeBasedLinearPropertyOutputReference(this, "time_based_linear");
  public get timeBasedLinear() {
    return this._timeBasedLinear;
  }
  public putTimeBasedLinear(value: TimeBasedLinearProperty) {
    this._timeBasedLinear.internalValue = value;
  }
  public resetTimeBasedLinear() {
    this._timeBasedLinear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedLinearInput() {
    return this._timeBasedLinear.internalValue;
  }
}
export interface MinimumHealthyHostsPerZoneProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#type AwsCodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#value AwsCodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}
export class MinimumHealthyHostsPerZonePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MinimumHealthyHostsPerZoneProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MinimumHealthyHostsPerZoneProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ZonalConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds AwsCodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}
  */
  readonly firstZoneMonitorDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds AwsCodedeployDeploymentConfig#monitor_duration_in_seconds}
  */
  readonly monitorDurationInSeconds?: number;
  /**
  * minimum_healthy_hosts_per_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone AwsCodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}
  */
  readonly minimumHealthyHostsPerZone?: MinimumHealthyHostsPerZoneProperty;
}
export class ZonalConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZonalConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstZoneMonitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstZoneMonitorDurationInSeconds = this._firstZoneMonitorDurationInSeconds;
    }
    if (this._monitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDurationInSeconds = this._monitorDurationInSeconds;
    }
    if (this._minimumHealthyHostsPerZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHealthyHostsPerZone = this._minimumHealthyHostsPerZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonalConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstZoneMonitorDurationInSeconds = undefined;
      this._monitorDurationInSeconds = undefined;
      this._minimumHealthyHostsPerZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstZoneMonitorDurationInSeconds = value.firstZoneMonitorDurationInSeconds;
      this._monitorDurationInSeconds = value.monitorDurationInSeconds;
      this._minimumHealthyHostsPerZone.internalValue = value.minimumHealthyHostsPerZone;
    }
  }

  // first_zone_monitor_duration_in_seconds - computed: false, optional: true, required: false
  private _firstZoneMonitorDurationInSeconds?: number; 
  public get firstZoneMonitorDurationInSeconds() {
    return this.getNumberAttribute('first_zone_monitor_duration_in_seconds');
  }
  public set firstZoneMonitorDurationInSeconds(value: number) {
    this._firstZoneMonitorDurationInSeconds = value;
  }
  public resetFirstZoneMonitorDurationInSeconds() {
    this._firstZoneMonitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstZoneMonitorDurationInSecondsInput() {
    return this._firstZoneMonitorDurationInSeconds;
  }

  // monitor_duration_in_seconds - computed: false, optional: true, required: false
  private _monitorDurationInSeconds?: number; 
  public get monitorDurationInSeconds() {
    return this.getNumberAttribute('monitor_duration_in_seconds');
  }
  public set monitorDurationInSeconds(value: number) {
    this._monitorDurationInSeconds = value;
  }
  public resetMonitorDurationInSeconds() {
    this._monitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDurationInSecondsInput() {
    return this._monitorDurationInSeconds;
  }

  // minimum_healthy_hosts_per_zone - computed: false, optional: true, required: false
  private _minimumHealthyHostsPerZone = new MinimumHealthyHostsPerZonePropertyOutputReference(this, "minimum_healthy_hosts_per_zone");
  public get minimumHealthyHostsPerZone() {
    return this._minimumHealthyHostsPerZone;
  }
  public putMinimumHealthyHostsPerZone(value: MinimumHealthyHostsPerZoneProperty) {
    this._minimumHealthyHostsPerZone.internalValue = value;
  }
  public resetMinimumHealthyHostsPerZone() {
    this._minimumHealthyHostsPerZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsPerZoneInput() {
    return this._minimumHealthyHostsPerZone.internalValue;
  }
}
}
