// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsGlobalacceleratorEndpointGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region AwsGlobalacceleratorEndpointGroup#endpoint_group_region}
  */
  readonly endpointGroupRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds AwsGlobalacceleratorEndpointGroup#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#health_check_path AwsGlobalacceleratorEndpointGroup#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#health_check_port AwsGlobalacceleratorEndpointGroup#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol AwsGlobalacceleratorEndpointGroup#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#id AwsGlobalacceleratorEndpointGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#listener_arn AwsGlobalacceleratorEndpointGroup#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#threshold_count AwsGlobalacceleratorEndpointGroup#threshold_count}
  */
  readonly thresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage AwsGlobalacceleratorEndpointGroup#traffic_dial_percentage}
  */
  readonly trafficDialPercentage?: number;
  /**
  * endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configuration AwsGlobalacceleratorEndpointGroup#endpoint_configuration}
  */
  readonly endpointConfiguration?: AwsGlobalacceleratorEndpointGroup.EndpointConfigurationProperty[] | cdktn.IResolvable;
  /**
  * port_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#port_override AwsGlobalacceleratorEndpointGroup#port_override}
  */
  readonly portOverride?: AwsGlobalacceleratorEndpointGroup.PortOverrideProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#timeouts AwsGlobalacceleratorEndpointGroup#timeouts}
  */
  readonly timeouts?: AwsGlobalacceleratorEndpointGroup.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}
*/
export class AwsGlobalacceleratorEndpointGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsGlobalacceleratorEndpointGroup to import
  * @param importFromId The id of the existing AwsGlobalacceleratorEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsGlobalacceleratorEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_globalaccelerator_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsGlobalacceleratorEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AwsGlobalacceleratorEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_endpoint_group',
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
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckProtocol = config.healthCheckProtocol;
    this._id = config.id;
    this._listenerArn = config.listenerArn;
    this._thresholdCount = config.thresholdCount;
    this._trafficDialPercentage = config.trafficDialPercentage;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
    this._portOverride.internalValue = config.portOverride;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_group_region - computed: true, optional: true, required: false
  private _endpointGroupRegion?: string; 
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  public resetEndpointGroupRegion() {
    this._endpointGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion;
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number; 
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string; 
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol;
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // threshold_count - computed: false, optional: true, required: false
  private _thresholdCount?: number; 
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount;
  }

  // traffic_dial_percentage - computed: false, optional: true, required: false
  private _trafficDialPercentage?: number; 
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
  }
  public set trafficDialPercentage(value: number) {
    this._trafficDialPercentage = value;
  }
  public resetTrafficDialPercentage() {
    this._trafficDialPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDialPercentageInput() {
    return this._trafficDialPercentage;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration = new AwsGlobalacceleratorEndpointGroup.EndpointConfigurationPropertyList(this, "endpoint_configuration", true);
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: AwsGlobalacceleratorEndpointGroup.EndpointConfigurationProperty[] | cdktn.IResolvable) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // port_override - computed: false, optional: true, required: false
  private _portOverride = new AwsGlobalacceleratorEndpointGroup.PortOverridePropertyList(this, "port_override", true);
  public get portOverride() {
    return this._portOverride;
  }
  public putPortOverride(value: AwsGlobalacceleratorEndpointGroup.PortOverrideProperty[] | cdktn.IResolvable) {
    this._portOverride.internalValue = value;
  }
  public resetPortOverride() {
    this._portOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverrideInput() {
    return this._portOverride.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsGlobalacceleratorEndpointGroup.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsGlobalacceleratorEndpointGroup.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_group_region: cdktn.stringToTerraform(this._endpointGroupRegion),
      health_check_interval_seconds: cdktn.numberToTerraform(this._healthCheckIntervalSeconds),
      health_check_path: cdktn.stringToTerraform(this._healthCheckPath),
      health_check_port: cdktn.numberToTerraform(this._healthCheckPort),
      health_check_protocol: cdktn.stringToTerraform(this._healthCheckProtocol),
      id: cdktn.stringToTerraform(this._id),
      listener_arn: cdktn.stringToTerraform(this._listenerArn),
      threshold_count: cdktn.numberToTerraform(this._thresholdCount),
      traffic_dial_percentage: cdktn.numberToTerraform(this._trafficDialPercentage),
      endpoint_configuration: cdktn.listMapper(awsGlobalacceleratorEndpointGroupEndpointConfigurationPropertyToTerraform, true)(this._endpointConfiguration.internalValue),
      port_override: cdktn.listMapper(awsGlobalacceleratorEndpointGroupPortOverridePropertyToTerraform, true)(this._portOverride.internalValue),
      timeouts: awsGlobalacceleratorEndpointGroupTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_group_region: {
        value: cdktn.stringToHclTerraform(this._endpointGroupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval_seconds: {
        value: cdktn.numberToHclTerraform(this._healthCheckIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_path: {
        value: cdktn.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_port: {
        value: cdktn.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_protocol: {
        value: cdktn.stringToHclTerraform(this._healthCheckProtocol),
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
      listener_arn: {
        value: cdktn.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_count: {
        value: cdktn.numberToHclTerraform(this._thresholdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_dial_percentage: {
        value: cdktn.numberToHclTerraform(this._trafficDialPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_configuration: {
        value: cdktn.listMapperHcl(awsGlobalacceleratorEndpointGroupEndpointConfigurationPropertyToHclTerraform, true)(this._endpointConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsGlobalacceleratorEndpointGroup.EndpointConfigurationPropertyList",
      },
      port_override: {
        value: cdktn.listMapperHcl(awsGlobalacceleratorEndpointGroupPortOverridePropertyToHclTerraform, true)(this._portOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsGlobalacceleratorEndpointGroup.PortOverridePropertyList",
      },
      timeouts: {
        value: awsGlobalacceleratorEndpointGroupTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsGlobalacceleratorEndpointGroup.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsGlobalacceleratorEndpointGroupEndpointConfigurationPropertyToTerraform(struct?: AwsGlobalacceleratorEndpointGroup.EndpointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_arn: cdktn.stringToTerraform(struct!.attachmentArn),
    client_ip_preservation_enabled: cdktn.booleanToTerraform(struct!.clientIpPreservationEnabled),
    endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsGlobalacceleratorEndpointGroupEndpointConfigurationPropertyToHclTerraform(struct?: AwsGlobalacceleratorEndpointGroup.EndpointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attachment_arn: {
      value: cdktn.stringToHclTerraform(struct!.attachmentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip_preservation_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.clientIpPreservationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.endpointId),
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


export function awsGlobalacceleratorEndpointGroupPortOverridePropertyToTerraform(struct?: AwsGlobalacceleratorEndpointGroup.PortOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_port: cdktn.numberToTerraform(struct!.endpointPort),
    listener_port: cdktn.numberToTerraform(struct!.listenerPort),
  }
}


export function awsGlobalacceleratorEndpointGroupPortOverridePropertyToHclTerraform(struct?: AwsGlobalacceleratorEndpointGroup.PortOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_port: {
      value: cdktn.numberToHclTerraform(struct!.endpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_port: {
      value: cdktn.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlobalacceleratorEndpointGroupTimeoutsPropertyToTerraform(struct?: AwsGlobalacceleratorEndpointGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsGlobalacceleratorEndpointGroupTimeoutsPropertyToHclTerraform(struct?: AwsGlobalacceleratorEndpointGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsGlobalacceleratorEndpointGroup {
export interface EndpointConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn AwsGlobalacceleratorEndpointGroup#attachment_arn}
  */
  readonly attachmentArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled AwsGlobalacceleratorEndpointGroup#client_ip_preservation_enabled}
  */
  readonly clientIpPreservationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id AwsGlobalacceleratorEndpointGroup#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#weight AwsGlobalacceleratorEndpointGroup#weight}
  */
  readonly weight?: number;
}
export class EndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EndpointConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentArn = this._attachmentArn;
    }
    if (this._clientIpPreservationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpPreservationEnabled = this._clientIpPreservationEnabled;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentArn = undefined;
      this._clientIpPreservationEnabled = undefined;
      this._endpointId = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentArn = value.attachmentArn;
      this._clientIpPreservationEnabled = value.clientIpPreservationEnabled;
      this._endpointId = value.endpointId;
      this._weight = value.weight;
    }
  }

  // attachment_arn - computed: false, optional: true, required: false
  private _attachmentArn?: string; 
  public get attachmentArn() {
    return this.getStringAttribute('attachment_arn');
  }
  public set attachmentArn(value: string) {
    this._attachmentArn = value;
  }
  public resetAttachmentArn() {
    this._attachmentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentArnInput() {
    return this._attachmentArn;
  }

  // client_ip_preservation_enabled - computed: true, optional: true, required: false
  private _clientIpPreservationEnabled?: boolean | cdktn.IResolvable; 
  public get clientIpPreservationEnabled() {
    return this.getBooleanAttribute('client_ip_preservation_enabled');
  }
  public set clientIpPreservationEnabled(value: boolean | cdktn.IResolvable) {
    this._clientIpPreservationEnabled = value;
  }
  public resetClientIpPreservationEnabled() {
    this._clientIpPreservationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpPreservationEnabledInput() {
    return this._clientIpPreservationEnabled;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

export class EndpointConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : EndpointConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): EndpointConfigurationPropertyOutputReference {
    return new EndpointConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortOverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port AwsGlobalacceleratorEndpointGroup#endpoint_port}
  */
  readonly endpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#listener_port AwsGlobalacceleratorEndpointGroup#listener_port}
  */
  readonly listenerPort: number;
}
export class PortOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PortOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPort = this._endpointPort;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointPort = undefined;
      this._listenerPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointPort = value.endpointPort;
      this._listenerPort = value.listenerPort;
    }
  }

  // endpoint_port - computed: false, optional: false, required: true
  private _endpointPort?: number; 
  public get endpointPort() {
    return this.getNumberAttribute('endpoint_port');
  }
  public set endpointPort(value: number) {
    this._endpointPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPortInput() {
    return this._endpointPort;
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }
}

export class PortOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : PortOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): PortOverridePropertyOutputReference {
    return new PortOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#create AwsGlobalacceleratorEndpointGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#delete AwsGlobalacceleratorEndpointGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/globalaccelerator_endpoint_group#update AwsGlobalacceleratorEndpointGroup#update}
  */
  readonly update?: string;
}
export class TimeoutsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimeoutsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
}
