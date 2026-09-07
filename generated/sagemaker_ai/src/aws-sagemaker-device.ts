// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDeviceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#device_fleet_name AwsDevice#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#id AwsDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#region AwsDevice#region}
  */
  readonly region?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#device AwsDevice#device}
  */
  readonly device: AwsDevice.DeviceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device aws_sagemaker_device}
*/
export class AwsDevice extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDevice resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDevice to import
  * @param importFromId The id of the existing AwsDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device aws_sagemaker_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_device',
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
    this._deviceFleetName = config.deviceFleetName;
    this._id = config.id;
    this._region = config.region;
    this._device.internalValue = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // device_fleet_name - computed: false, optional: false, required: true
  private _deviceFleetName?: string; 
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
  }
  public set deviceFleetName(value: string) {
    this._deviceFleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFleetNameInput() {
    return this._deviceFleetName;
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

  // device - computed: false, optional: false, required: true
  private _device = new AwsDevice.DevicePropertyOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AwsDevice.DeviceProperty) {
    this._device.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_fleet_name: cdktn.stringToTerraform(this._deviceFleetName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      device: awsDeviceDevicePropertyToTerraform(this._device.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_fleet_name: {
        value: cdktn.stringToHclTerraform(this._deviceFleetName),
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
      device: {
        value: awsDeviceDevicePropertyToHclTerraform(this._device.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDevice.DevicePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDeviceDevicePropertyToTerraform(struct?: AwsDevice.DevicePropertyOutputReference | AwsDevice.DeviceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    iot_thing_name: cdktn.stringToTerraform(struct!.iotThingName),
  }
}


export function awsDeviceDevicePropertyToHclTerraform(struct?: AwsDevice.DevicePropertyOutputReference | AwsDevice.DeviceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot_thing_name: {
      value: cdktn.stringToHclTerraform(struct!.iotThingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDevice {
export interface DeviceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#description AwsDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#device_name AwsDevice#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_device#iot_thing_name AwsDevice#iot_thing_name}
  */
  readonly iotThingName?: string;
}
export class DevicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeviceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._iotThingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotThingName = this._iotThingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._deviceName = undefined;
      this._iotThingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._deviceName = value.deviceName;
      this._iotThingName = value.iotThingName;
    }
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

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // iot_thing_name - computed: false, optional: true, required: false
  private _iotThingName?: string; 
  public get iotThingName() {
    return this.getStringAttribute('iot_thing_name');
  }
  public set iotThingName(value: string) {
    this._iotThingName = value;
  }
  public resetIotThingName() {
    this._iotThingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotThingNameInput() {
    return this._iotThingName;
  }
}
}
