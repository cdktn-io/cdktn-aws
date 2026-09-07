// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDaemonTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#cpu AwsDaemonTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#execution_role_arn AwsDaemonTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#family AwsDaemonTaskDefinition#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#memory AwsDaemonTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#region AwsDaemonTaskDefinition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#tags AwsDaemonTaskDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#task_role_arn AwsDaemonTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * container_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#container_definition AwsDaemonTaskDefinition#container_definition}
  */
  readonly containerDefinition?: AwsDaemonTaskDefinition.ContainerDefinitionProperty[] | cdktn.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#volume AwsDaemonTaskDefinition#volume}
  */
  readonly volume?: AwsDaemonTaskDefinition.VolumeProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition}
*/
export class AwsDaemonTaskDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_daemon_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDaemonTaskDefinition to import
  * @param importFromId The id of the existing AwsDaemonTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDaemonTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_daemon_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDaemonTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDaemonTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_daemon_task_definition',
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
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._memory = config.memory;
    this._region = config.region;
    this._tags = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._containerDefinition.internalValue = config.containerDefinition;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // container_definition - computed: false, optional: true, required: false
  private _containerDefinition = new AwsDaemonTaskDefinition.ContainerDefinitionPropertyList(this, "container_definition", false);
  public get containerDefinition() {
    return this._containerDefinition;
  }
  public putContainerDefinition(value: AwsDaemonTaskDefinition.ContainerDefinitionProperty[] | cdktn.IResolvable) {
    this._containerDefinition.internalValue = value;
  }
  public resetContainerDefinition() {
    this._containerDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionInput() {
    return this._containerDefinition.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new AwsDaemonTaskDefinition.VolumePropertyList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AwsDaemonTaskDefinition.VolumeProperty[] | cdktn.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktn.stringToTerraform(this._cpu),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      family: cdktn.stringToTerraform(this._family),
      memory: cdktn.stringToTerraform(this._memory),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      task_role_arn: cdktn.stringToTerraform(this._taskRoleArn),
      container_definition: cdktn.listMapper(awsDaemonTaskDefinitionContainerDefinitionPropertyToTerraform, true)(this._containerDefinition.internalValue),
      volume: cdktn.listMapper(awsDaemonTaskDefinitionVolumePropertyToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktn.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktn.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktn.stringToHclTerraform(this._memory),
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
      task_role_arn: {
        value: cdktn.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_definition: {
        value: cdktn.listMapperHcl(awsDaemonTaskDefinitionContainerDefinitionPropertyToHclTerraform, true)(this._containerDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDaemonTaskDefinition.ContainerDefinitionPropertyList",
      },
      volume: {
        value: cdktn.listMapperHcl(awsDaemonTaskDefinitionVolumePropertyToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDaemonTaskDefinition.VolumePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDaemonTaskDefinitionDependsOnPropertyToTerraform(struct?: AwsDaemonTaskDefinition.DependsOnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    container_name: cdktn.stringToTerraform(struct!.containerName),
  }
}


export function awsDaemonTaskDefinitionDependsOnPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.DependsOnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionEnvironmentPropertyToTerraform(struct?: AwsDaemonTaskDefinition.EnvironmentProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDaemonTaskDefinitionEnvironmentPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.EnvironmentProperty | cdktn.IResolvable): any {
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


export function awsDaemonTaskDefinitionEnvironmentFilePropertyToTerraform(struct?: AwsDaemonTaskDefinition.EnvironmentFileProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDaemonTaskDefinitionEnvironmentFilePropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.EnvironmentFileProperty | cdktn.IResolvable): any {
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
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionFirelensConfigurationPropertyToTerraform(struct?: AwsDaemonTaskDefinition.FirelensConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsDaemonTaskDefinitionFirelensConfigurationPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.FirelensConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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


export function awsDaemonTaskDefinitionHealthCheckPropertyToTerraform(struct?: AwsDaemonTaskDefinition.HealthCheckProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    interval: cdktn.numberToTerraform(struct!.interval),
    retries: cdktn.numberToTerraform(struct!.retries),
    start_period: cdktn.numberToTerraform(struct!.startPeriod),
    timeout: cdktn.numberToTerraform(struct!.timeout),
  }
}


export function awsDaemonTaskDefinitionHealthCheckPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.HealthCheckProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktn.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_period: {
      value: cdktn.numberToHclTerraform(struct!.startPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionCapabilitiesPropertyToTerraform(struct?: AwsDaemonTaskDefinition.CapabilitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.add),
    drop: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.drop),
  }
}


export function awsDaemonTaskDefinitionCapabilitiesPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.CapabilitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionDevicePropertyToTerraform(struct?: AwsDaemonTaskDefinition.DeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    host_path: cdktn.stringToTerraform(struct!.hostPath),
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
  }
}


export function awsDaemonTaskDefinitionDevicePropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.DeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktn.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionTmpfsPropertyToTerraform(struct?: AwsDaemonTaskDefinition.TmpfsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    mount_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mountOptions),
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function awsDaemonTaskDefinitionTmpfsPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.TmpfsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionLinuxParametersPropertyToTerraform(struct?: AwsDaemonTaskDefinition.LinuxParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    init_process_enabled: cdktn.booleanToTerraform(struct!.initProcessEnabled),
    capabilities: cdktn.listMapper(awsDaemonTaskDefinitionCapabilitiesPropertyToTerraform, true)(struct!.capabilities),
    device: cdktn.listMapper(awsDaemonTaskDefinitionDevicePropertyToTerraform, true)(struct!.device),
    tmpfs: cdktn.listMapper(awsDaemonTaskDefinitionTmpfsPropertyToTerraform, true)(struct!.tmpfs),
  }
}


export function awsDaemonTaskDefinitionLinuxParametersPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.LinuxParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    init_process_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.initProcessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionCapabilitiesPropertyToHclTerraform, true)(struct!.capabilities),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitiesPropertyList",
    },
    device: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionDevicePropertyToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "DevicePropertyList",
    },
    tmpfs: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionTmpfsPropertyToHclTerraform, true)(struct!.tmpfs),
      isBlock: true,
      type: "list",
      storageClassType: "TmpfsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionSecretOptionPropertyToTerraform(struct?: AwsDaemonTaskDefinition.SecretOptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function awsDaemonTaskDefinitionSecretOptionPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.SecretOptionProperty | cdktn.IResolvable): any {
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
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionLogConfigurationPropertyToTerraform(struct?: AwsDaemonTaskDefinition.LogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_driver: cdktn.stringToTerraform(struct!.logDriver),
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    secret_option: cdktn.listMapper(awsDaemonTaskDefinitionSecretOptionPropertyToTerraform, true)(struct!.secretOption),
  }
}


export function awsDaemonTaskDefinitionLogConfigurationPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.LogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_driver: {
      value: cdktn.stringToHclTerraform(struct!.logDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_option: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionSecretOptionPropertyToHclTerraform, true)(struct!.secretOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecretOptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionMountPointPropertyToTerraform(struct?: AwsDaemonTaskDefinition.MountPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
    source_volume: cdktn.stringToTerraform(struct!.sourceVolume),
  }
}


export function awsDaemonTaskDefinitionMountPointPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.MountPointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_volume: {
      value: cdktn.stringToHclTerraform(struct!.sourceVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionRepositoryCredentialsPropertyToTerraform(struct?: AwsDaemonTaskDefinition.RepositoryCredentialsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
  }
}


export function awsDaemonTaskDefinitionRepositoryCredentialsPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.RepositoryCredentialsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_parameter: {
      value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionRestartPolicyPropertyToTerraform(struct?: AwsDaemonTaskDefinition.RestartPolicyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    ignored_exit_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ignoredExitCodes),
    restart_attempt_period: cdktn.numberToTerraform(struct!.restartAttemptPeriod),
  }
}


export function awsDaemonTaskDefinitionRestartPolicyPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.RestartPolicyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored_exit_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ignoredExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    restart_attempt_period: {
      value: cdktn.numberToHclTerraform(struct!.restartAttemptPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionSecretPropertyToTerraform(struct?: AwsDaemonTaskDefinition.SecretProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function awsDaemonTaskDefinitionSecretPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.SecretProperty | cdktn.IResolvable): any {
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
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionSystemControlPropertyToTerraform(struct?: AwsDaemonTaskDefinition.SystemControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDaemonTaskDefinitionSystemControlPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.SystemControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
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


export function awsDaemonTaskDefinitionUlimitPropertyToTerraform(struct?: AwsDaemonTaskDefinition.UlimitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hard_limit: cdktn.numberToTerraform(struct!.hardLimit),
    name: cdktn.stringToTerraform(struct!.name),
    soft_limit: cdktn.numberToTerraform(struct!.softLimit),
  }
}


export function awsDaemonTaskDefinitionUlimitPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.UlimitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hard_limit: {
      value: cdktn.numberToHclTerraform(struct!.hardLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_limit: {
      value: cdktn.numberToHclTerraform(struct!.softLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionContainerDefinitionPropertyToTerraform(struct?: AwsDaemonTaskDefinition.ContainerDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
    essential: cdktn.booleanToTerraform(struct!.essential),
    image: cdktn.stringToTerraform(struct!.image),
    interactive: cdktn.booleanToTerraform(struct!.interactive),
    memory: cdktn.numberToTerraform(struct!.memory),
    memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
    name: cdktn.stringToTerraform(struct!.name),
    privileged: cdktn.booleanToTerraform(struct!.privileged),
    pseudo_terminal: cdktn.booleanToTerraform(struct!.pseudoTerminal),
    readonly_root_filesystem: cdktn.booleanToTerraform(struct!.readonlyRootFilesystem),
    start_timeout: cdktn.numberToTerraform(struct!.startTimeout),
    stop_timeout: cdktn.numberToTerraform(struct!.stopTimeout),
    user: cdktn.stringToTerraform(struct!.user),
    working_directory: cdktn.stringToTerraform(struct!.workingDirectory),
    depends_on: cdktn.listMapper(awsDaemonTaskDefinitionDependsOnPropertyToTerraform, true)(struct!.dependsOn),
    environment: cdktn.listMapper(awsDaemonTaskDefinitionEnvironmentPropertyToTerraform, true)(struct!.environment),
    environment_file: cdktn.listMapper(awsDaemonTaskDefinitionEnvironmentFilePropertyToTerraform, true)(struct!.environmentFile),
    firelens_configuration: cdktn.listMapper(awsDaemonTaskDefinitionFirelensConfigurationPropertyToTerraform, true)(struct!.firelensConfiguration),
    health_check: cdktn.listMapper(awsDaemonTaskDefinitionHealthCheckPropertyToTerraform, true)(struct!.healthCheck),
    linux_parameters: cdktn.listMapper(awsDaemonTaskDefinitionLinuxParametersPropertyToTerraform, true)(struct!.linuxParameters),
    log_configuration: cdktn.listMapper(awsDaemonTaskDefinitionLogConfigurationPropertyToTerraform, true)(struct!.logConfiguration),
    mount_point: cdktn.listMapper(awsDaemonTaskDefinitionMountPointPropertyToTerraform, true)(struct!.mountPoint),
    repository_credentials: cdktn.listMapper(awsDaemonTaskDefinitionRepositoryCredentialsPropertyToTerraform, true)(struct!.repositoryCredentials),
    restart_policy: cdktn.listMapper(awsDaemonTaskDefinitionRestartPolicyPropertyToTerraform, true)(struct!.restartPolicy),
    secret: cdktn.listMapper(awsDaemonTaskDefinitionSecretPropertyToTerraform, true)(struct!.secret),
    system_control: cdktn.listMapper(awsDaemonTaskDefinitionSystemControlPropertyToTerraform, true)(struct!.systemControl),
    ulimit: cdktn.listMapper(awsDaemonTaskDefinitionUlimitPropertyToTerraform, true)(struct!.ulimit),
  }
}


export function awsDaemonTaskDefinitionContainerDefinitionPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.ContainerDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_point: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interactive: {
      value: cdktn.booleanToHclTerraform(struct!.interactive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory: {
      value: cdktn.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktn.numberToHclTerraform(struct!.memoryReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged: {
      value: cdktn.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pseudo_terminal: {
      value: cdktn.booleanToHclTerraform(struct!.pseudoTerminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly_root_filesystem: {
      value: cdktn.booleanToHclTerraform(struct!.readonlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_timeout: {
      value: cdktn.numberToHclTerraform(struct!.startTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_timeout: {
      value: cdktn.numberToHclTerraform(struct!.stopTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktn.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionDependsOnPropertyToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DependsOnPropertyList",
    },
    environment: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionEnvironmentPropertyToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "set",
      storageClassType: "EnvironmentPropertyList",
    },
    environment_file: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionEnvironmentFilePropertyToHclTerraform, true)(struct!.environmentFile),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentFilePropertyList",
    },
    firelens_configuration: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionFirelensConfigurationPropertyToHclTerraform, true)(struct!.firelensConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FirelensConfigurationPropertyList",
    },
    health_check: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionHealthCheckPropertyToHclTerraform, true)(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "HealthCheckPropertyList",
    },
    linux_parameters: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionLinuxParametersPropertyToHclTerraform, true)(struct!.linuxParameters),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxParametersPropertyList",
    },
    log_configuration: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionLogConfigurationPropertyToHclTerraform, true)(struct!.logConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LogConfigurationPropertyList",
    },
    mount_point: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionMountPointPropertyToHclTerraform, true)(struct!.mountPoint),
      isBlock: true,
      type: "list",
      storageClassType: "MountPointPropertyList",
    },
    repository_credentials: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionRepositoryCredentialsPropertyToHclTerraform, true)(struct!.repositoryCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryCredentialsPropertyList",
    },
    restart_policy: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionRestartPolicyPropertyToHclTerraform, true)(struct!.restartPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RestartPolicyPropertyList",
    },
    secret: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionSecretPropertyToHclTerraform, true)(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "SecretPropertyList",
    },
    system_control: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionSystemControlPropertyToHclTerraform, true)(struct!.systemControl),
      isBlock: true,
      type: "list",
      storageClassType: "SystemControlPropertyList",
    },
    ulimit: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionUlimitPropertyToHclTerraform, true)(struct!.ulimit),
      isBlock: true,
      type: "list",
      storageClassType: "UlimitPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionHostPropertyToTerraform(struct?: AwsDaemonTaskDefinition.HostProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_path: cdktn.stringToTerraform(struct!.sourcePath),
  }
}


export function awsDaemonTaskDefinitionHostPropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.HostProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_path: {
      value: cdktn.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDaemonTaskDefinitionVolumePropertyToTerraform(struct?: AwsDaemonTaskDefinition.VolumeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    host: cdktn.listMapper(awsDaemonTaskDefinitionHostPropertyToTerraform, true)(struct!.host),
  }
}


export function awsDaemonTaskDefinitionVolumePropertyToHclTerraform(struct?: AwsDaemonTaskDefinition.VolumeProperty | cdktn.IResolvable): any {
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
    host: {
      value: cdktn.listMapperHcl(awsDaemonTaskDefinitionHostPropertyToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "HostPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDaemonTaskDefinition {
export interface DependsOnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#condition AwsDaemonTaskDefinition#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#container_name AwsDaemonTaskDefinition#container_name}
  */
  readonly containerName: string;
}
export class DependsOnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DependsOnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DependsOnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._containerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._containerName = value.containerName;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }
}

export class DependsOnPropertyList extends cdktn.ComplexList {
  public internalValue? : DependsOnProperty[] | cdktn.IResolvable

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
  public get(index: number): DependsOnPropertyOutputReference {
    return new DependsOnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#value AwsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}
export class EnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentProperty | cdktn.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class EnvironmentPropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentPropertyOutputReference {
    return new EnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#type AwsDaemonTaskDefinition#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#value AwsDaemonTaskDefinition#value}
  */
  readonly value: string;
}
export class EnvironmentFilePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EnvironmentFileProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EnvironmentFileProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class EnvironmentFilePropertyList extends cdktn.ComplexList {
  public internalValue? : EnvironmentFileProperty[] | cdktn.IResolvable

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
  public get(index: number): EnvironmentFilePropertyOutputReference {
    return new EnvironmentFilePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirelensConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#options AwsDaemonTaskDefinition#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#type AwsDaemonTaskDefinition#type}
  */
  readonly type: string;
}
export class FirelensConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirelensConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirelensConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._type = value.type;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

export class FirelensConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : FirelensConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): FirelensConfigurationPropertyOutputReference {
    return new FirelensConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthCheckProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#command AwsDaemonTaskDefinition#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#interval AwsDaemonTaskDefinition#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#retries AwsDaemonTaskDefinition#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#start_period AwsDaemonTaskDefinition#start_period}
  */
  readonly startPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#timeout AwsDaemonTaskDefinition#timeout}
  */
  readonly timeout?: number;
}
export class HealthCheckPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HealthCheckProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._startPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPeriod = this._startPeriod;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthCheckProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._interval = undefined;
      this._retries = undefined;
      this._startPeriod = undefined;
      this._timeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._interval = value.interval;
      this._retries = value.retries;
      this._startPeriod = value.startPeriod;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // start_period - computed: false, optional: true, required: false
  private _startPeriod?: number; 
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }
  public set startPeriod(value: number) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class HealthCheckPropertyList extends cdktn.ComplexList {
  public internalValue? : HealthCheckProperty[] | cdktn.IResolvable

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
  public get(index: number): HealthCheckPropertyOutputReference {
    return new HealthCheckPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#add AwsDaemonTaskDefinition#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#drop AwsDaemonTaskDefinition#drop}
  */
  readonly drop?: string[];
}
export class CapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CapabilitiesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilitiesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}

export class CapabilitiesPropertyList extends cdktn.ComplexList {
  public internalValue? : CapabilitiesProperty[] | cdktn.IResolvable

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
  public get(index: number): CapabilitiesPropertyOutputReference {
    return new CapabilitiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#container_path AwsDaemonTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#host_path AwsDaemonTaskDefinition#host_path}
  */
  readonly hostPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#permissions AwsDaemonTaskDefinition#permissions}
  */
  readonly permissions?: string[];
}
export class DevicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeviceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._hostPath = undefined;
      this._permissions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._hostPath = value.hostPath;
      this._permissions = value.permissions;
    }
  }

  // container_path - computed: false, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // host_path - computed: false, optional: false, required: true
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class DevicePropertyList extends cdktn.ComplexList {
  public internalValue? : DeviceProperty[] | cdktn.IResolvable

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
  public get(index: number): DevicePropertyOutputReference {
    return new DevicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TmpfsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#container_path AwsDaemonTaskDefinition#container_path}
  */
  readonly containerPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#mount_options AwsDaemonTaskDefinition#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#size AwsDaemonTaskDefinition#size}
  */
  readonly size: number;
}
export class TmpfsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TmpfsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TmpfsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._mountOptions = undefined;
      this._size = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._mountOptions = value.mountOptions;
      this._size = value.size;
    }
  }

  // container_path - computed: false, optional: false, required: true
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
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
}

export class TmpfsPropertyList extends cdktn.ComplexList {
  public internalValue? : TmpfsProperty[] | cdktn.IResolvable

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
  public get(index: number): TmpfsPropertyOutputReference {
    return new TmpfsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#init_process_enabled AwsDaemonTaskDefinition#init_process_enabled}
  */
  readonly initProcessEnabled?: boolean | cdktn.IResolvable;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#capabilities AwsDaemonTaskDefinition#capabilities}
  */
  readonly capabilities?: CapabilitiesProperty[] | cdktn.IResolvable;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#device AwsDaemonTaskDefinition#device}
  */
  readonly device?: DeviceProperty[] | cdktn.IResolvable;
  /**
  * tmpfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#tmpfs AwsDaemonTaskDefinition#tmpfs}
  */
  readonly tmpfs?: TmpfsProperty[] | cdktn.IResolvable;
}
export class LinuxParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LinuxParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initProcessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.initProcessEnabled = this._initProcessEnabled;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._tmpfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpfs = this._tmpfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initProcessEnabled = undefined;
      this._capabilities.internalValue = undefined;
      this._device.internalValue = undefined;
      this._tmpfs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initProcessEnabled = value.initProcessEnabled;
      this._capabilities.internalValue = value.capabilities;
      this._device.internalValue = value.device;
      this._tmpfs.internalValue = value.tmpfs;
    }
  }

  // init_process_enabled - computed: false, optional: true, required: false
  private _initProcessEnabled?: boolean | cdktn.IResolvable; 
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }
  public set initProcessEnabled(value: boolean | cdktn.IResolvable) {
    this._initProcessEnabled = value;
  }
  public resetInitProcessEnabled() {
    this._initProcessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initProcessEnabledInput() {
    return this._initProcessEnabled;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new CapabilitiesPropertyList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: CapabilitiesProperty[] | cdktn.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device = new DevicePropertyList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: DeviceProperty[] | cdktn.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // tmpfs - computed: false, optional: true, required: false
  private _tmpfs = new TmpfsPropertyList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
  public putTmpfs(value: TmpfsProperty[] | cdktn.IResolvable) {
    this._tmpfs.internalValue = value;
  }
  public resetTmpfs() {
    this._tmpfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsInput() {
    return this._tmpfs.internalValue;
  }
}

export class LinuxParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : LinuxParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): LinuxParametersPropertyOutputReference {
    return new LinuxParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#value_from AwsDaemonTaskDefinition#value_from}
  */
  readonly valueFrom: string;
}
export class SecretOptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretOptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretOptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class SecretOptionPropertyList extends cdktn.ComplexList {
  public internalValue? : SecretOptionProperty[] | cdktn.IResolvable

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
  public get(index: number): SecretOptionPropertyOutputReference {
    return new SecretOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#log_driver AwsDaemonTaskDefinition#log_driver}
  */
  readonly logDriver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#options AwsDaemonTaskDefinition#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * secret_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#secret_option AwsDaemonTaskDefinition#secret_option}
  */
  readonly secretOption?: SecretOptionProperty[] | cdktn.IResolvable;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDriver = this._logDriver;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._secretOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOption = this._secretOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logDriver = undefined;
      this._options = undefined;
      this._secretOption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logDriver = value.logDriver;
      this._options = value.options;
      this._secretOption.internalValue = value.secretOption;
    }
  }

  // log_driver - computed: false, optional: false, required: true
  private _logDriver?: string; 
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // secret_option - computed: false, optional: true, required: false
  private _secretOption = new SecretOptionPropertyList(this, "secret_option", false);
  public get secretOption() {
    return this._secretOption;
  }
  public putSecretOption(value: SecretOptionProperty[] | cdktn.IResolvable) {
    this._secretOption.internalValue = value;
  }
  public resetSecretOption() {
    this._secretOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOptionInput() {
    return this._secretOption.internalValue;
  }
}

export class LogConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : LogConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): LogConfigurationPropertyOutputReference {
    return new LogConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MountPointProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#container_path AwsDaemonTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#read_only AwsDaemonTaskDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#source_volume AwsDaemonTaskDefinition#source_volume}
  */
  readonly sourceVolume?: string;
}
export class MountPointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MountPointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._sourceVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVolume = this._sourceVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MountPointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._readOnly = undefined;
      this._sourceVolume = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._readOnly = value.readOnly;
      this._sourceVolume = value.sourceVolume;
    }
  }

  // container_path - computed: false, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // source_volume - computed: false, optional: true, required: false
  private _sourceVolume?: string; 
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
  public set sourceVolume(value: string) {
    this._sourceVolume = value;
  }
  public resetSourceVolume() {
    this._sourceVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeInput() {
    return this._sourceVolume;
  }
}

export class MountPointPropertyList extends cdktn.ComplexList {
  public internalValue? : MountPointProperty[] | cdktn.IResolvable

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
  public get(index: number): MountPointPropertyOutputReference {
    return new MountPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryCredentialsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#credentials_parameter AwsDaemonTaskDefinition#credentials_parameter}
  */
  readonly credentialsParameter: string;
}
export class RepositoryCredentialsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RepositoryCredentialsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryCredentialsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsParameter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsParameter = value.credentialsParameter;
    }
  }

  // credentials_parameter - computed: false, optional: false, required: true
  private _credentialsParameter?: string; 
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
  public set credentialsParameter(value: string) {
    this._credentialsParameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsParameterInput() {
    return this._credentialsParameter;
  }
}

export class RepositoryCredentialsPropertyList extends cdktn.ComplexList {
  public internalValue? : RepositoryCredentialsProperty[] | cdktn.IResolvable

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
  public get(index: number): RepositoryCredentialsPropertyOutputReference {
    return new RepositoryCredentialsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RestartPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#enabled AwsDaemonTaskDefinition#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes AwsDaemonTaskDefinition#ignored_exit_codes}
  */
  readonly ignoredExitCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period AwsDaemonTaskDefinition#restart_attempt_period}
  */
  readonly restartAttemptPeriod?: number;
}
export class RestartPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RestartPolicyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignoredExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredExitCodes = this._ignoredExitCodes;
    }
    if (this._restartAttemptPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartAttemptPeriod = this._restartAttemptPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestartPolicyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ignoredExitCodes = undefined;
      this._restartAttemptPeriod = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ignoredExitCodes = value.ignoredExitCodes;
      this._restartAttemptPeriod = value.restartAttemptPeriod;
    }
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

  // ignored_exit_codes - computed: false, optional: true, required: false
  private _ignoredExitCodes?: number[]; 
  public get ignoredExitCodes() {
    return this.getNumberListAttribute('ignored_exit_codes');
  }
  public set ignoredExitCodes(value: number[]) {
    this._ignoredExitCodes = value;
  }
  public resetIgnoredExitCodes() {
    this._ignoredExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExitCodesInput() {
    return this._ignoredExitCodes;
  }

  // restart_attempt_period - computed: false, optional: true, required: false
  private _restartAttemptPeriod?: number; 
  public get restartAttemptPeriod() {
    return this.getNumberAttribute('restart_attempt_period');
  }
  public set restartAttemptPeriod(value: number) {
    this._restartAttemptPeriod = value;
  }
  public resetRestartAttemptPeriod() {
    this._restartAttemptPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartAttemptPeriodInput() {
    return this._restartAttemptPeriod;
  }
}

export class RestartPolicyPropertyList extends cdktn.ComplexList {
  public internalValue? : RestartPolicyProperty[] | cdktn.IResolvable

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
  public get(index: number): RestartPolicyPropertyOutputReference {
    return new RestartPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#value_from AwsDaemonTaskDefinition#value_from}
  */
  readonly valueFrom: string;
}
export class SecretPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class SecretPropertyList extends cdktn.ComplexList {
  public internalValue? : SecretProperty[] | cdktn.IResolvable

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
  public get(index: number): SecretPropertyOutputReference {
    return new SecretPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemControlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#namespace AwsDaemonTaskDefinition#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#value AwsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}
export class SystemControlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SystemControlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemControlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class SystemControlPropertyList extends cdktn.ComplexList {
  public internalValue? : SystemControlProperty[] | cdktn.IResolvable

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
  public get(index: number): SystemControlPropertyOutputReference {
    return new SystemControlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UlimitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#hard_limit AwsDaemonTaskDefinition#hard_limit}
  */
  readonly hardLimit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#soft_limit AwsDaemonTaskDefinition#soft_limit}
  */
  readonly softLimit: number;
}
export class UlimitPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UlimitProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardLimit = this._hardLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._softLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.softLimit = this._softLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UlimitProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardLimit = undefined;
      this._name = undefined;
      this._softLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardLimit = value.hardLimit;
      this._name = value.name;
      this._softLimit = value.softLimit;
    }
  }

  // hard_limit - computed: false, optional: false, required: true
  private _hardLimit?: number; 
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }
  public set hardLimit(value: number) {
    this._hardLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardLimitInput() {
    return this._hardLimit;
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

  // soft_limit - computed: false, optional: false, required: true
  private _softLimit?: number; 
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
  public set softLimit(value: number) {
    this._softLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitInput() {
    return this._softLimit;
  }
}

export class UlimitPropertyList extends cdktn.ComplexList {
  public internalValue? : UlimitProperty[] | cdktn.IResolvable

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
  public get(index: number): UlimitPropertyOutputReference {
    return new UlimitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#command AwsDaemonTaskDefinition#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#cpu AwsDaemonTaskDefinition#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#entry_point AwsDaemonTaskDefinition#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#essential AwsDaemonTaskDefinition#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#image AwsDaemonTaskDefinition#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#interactive AwsDaemonTaskDefinition#interactive}
  */
  readonly interactive?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#memory AwsDaemonTaskDefinition#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#memory_reservation AwsDaemonTaskDefinition#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#privileged AwsDaemonTaskDefinition#privileged}
  */
  readonly privileged?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal AwsDaemonTaskDefinition#pseudo_terminal}
  */
  readonly pseudoTerminal?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem AwsDaemonTaskDefinition#readonly_root_filesystem}
  */
  readonly readonlyRootFilesystem?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#start_timeout AwsDaemonTaskDefinition#start_timeout}
  */
  readonly startTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#stop_timeout AwsDaemonTaskDefinition#stop_timeout}
  */
  readonly stopTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#user AwsDaemonTaskDefinition#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#working_directory AwsDaemonTaskDefinition#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#depends_on AwsDaemonTaskDefinition#depends_on}
  */
  readonly dependsOn?: DependsOnProperty[] | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#environment AwsDaemonTaskDefinition#environment}
  */
  readonly environment?: EnvironmentProperty[] | cdktn.IResolvable;
  /**
  * environment_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#environment_file AwsDaemonTaskDefinition#environment_file}
  */
  readonly environmentFile?: EnvironmentFileProperty[] | cdktn.IResolvable;
  /**
  * firelens_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#firelens_configuration AwsDaemonTaskDefinition#firelens_configuration}
  */
  readonly firelensConfiguration?: FirelensConfigurationProperty[] | cdktn.IResolvable;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#health_check AwsDaemonTaskDefinition#health_check}
  */
  readonly healthCheck?: HealthCheckProperty[] | cdktn.IResolvable;
  /**
  * linux_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#linux_parameters AwsDaemonTaskDefinition#linux_parameters}
  */
  readonly linuxParameters?: LinuxParametersProperty[] | cdktn.IResolvable;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#log_configuration AwsDaemonTaskDefinition#log_configuration}
  */
  readonly logConfiguration?: LogConfigurationProperty[] | cdktn.IResolvable;
  /**
  * mount_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#mount_point AwsDaemonTaskDefinition#mount_point}
  */
  readonly mountPoint?: MountPointProperty[] | cdktn.IResolvable;
  /**
  * repository_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#repository_credentials AwsDaemonTaskDefinition#repository_credentials}
  */
  readonly repositoryCredentials?: RepositoryCredentialsProperty[] | cdktn.IResolvable;
  /**
  * restart_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#restart_policy AwsDaemonTaskDefinition#restart_policy}
  */
  readonly restartPolicy?: RestartPolicyProperty[] | cdktn.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#secret AwsDaemonTaskDefinition#secret}
  */
  readonly secret?: SecretProperty[] | cdktn.IResolvable;
  /**
  * system_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#system_control AwsDaemonTaskDefinition#system_control}
  */
  readonly systemControl?: SystemControlProperty[] | cdktn.IResolvable;
  /**
  * ulimit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#ulimit AwsDaemonTaskDefinition#ulimit}
  */
  readonly ulimit?: UlimitProperty[] | cdktn.IResolvable;
}
export class ContainerDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._interactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactive = this._interactive;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._pseudoTerminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudoTerminal = this._pseudoTerminal;
    }
    if (this._readonlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyRootFilesystem = this._readonlyRootFilesystem;
    }
    if (this._startTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeout = this._startTimeout;
    }
    if (this._stopTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTimeout = this._stopTimeout;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._environmentFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFile = this._environmentFile?.internalValue;
    }
    if (this._firelensConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firelensConfiguration = this._firelensConfiguration?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._linuxParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxParameters = this._linuxParameters?.internalValue;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    if (this._mountPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint?.internalValue;
    }
    if (this._repositoryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentials = this._repositoryCredentials?.internalValue;
    }
    if (this._restartPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._systemControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemControl = this._systemControl?.internalValue;
    }
    if (this._ulimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ulimit = this._ulimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._entryPoint = undefined;
      this._essential = undefined;
      this._image = undefined;
      this._interactive = undefined;
      this._memory = undefined;
      this._memoryReservation = undefined;
      this._name = undefined;
      this._privileged = undefined;
      this._pseudoTerminal = undefined;
      this._readonlyRootFilesystem = undefined;
      this._startTimeout = undefined;
      this._stopTimeout = undefined;
      this._user = undefined;
      this._workingDirectory = undefined;
      this._dependsOn.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._environmentFile.internalValue = undefined;
      this._firelensConfiguration.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._linuxParameters.internalValue = undefined;
      this._logConfiguration.internalValue = undefined;
      this._mountPoint.internalValue = undefined;
      this._repositoryCredentials.internalValue = undefined;
      this._restartPolicy.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._systemControl.internalValue = undefined;
      this._ulimit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._cpu = value.cpu;
      this._entryPoint = value.entryPoint;
      this._essential = value.essential;
      this._image = value.image;
      this._interactive = value.interactive;
      this._memory = value.memory;
      this._memoryReservation = value.memoryReservation;
      this._name = value.name;
      this._privileged = value.privileged;
      this._pseudoTerminal = value.pseudoTerminal;
      this._readonlyRootFilesystem = value.readonlyRootFilesystem;
      this._startTimeout = value.startTimeout;
      this._stopTimeout = value.stopTimeout;
      this._user = value.user;
      this._workingDirectory = value.workingDirectory;
      this._dependsOn.internalValue = value.dependsOn;
      this._environment.internalValue = value.environment;
      this._environmentFile.internalValue = value.environmentFile;
      this._firelensConfiguration.internalValue = value.firelensConfiguration;
      this._healthCheck.internalValue = value.healthCheck;
      this._linuxParameters.internalValue = value.linuxParameters;
      this._logConfiguration.internalValue = value.logConfiguration;
      this._mountPoint.internalValue = value.mountPoint;
      this._repositoryCredentials.internalValue = value.repositoryCredentials;
      this._restartPolicy.internalValue = value.restartPolicy;
      this._secret.internalValue = value.secret;
      this._systemControl.internalValue = value.systemControl;
      this._ulimit.internalValue = value.ulimit;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // essential - computed: true, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interactive - computed: false, optional: true, required: false
  private _interactive?: boolean | cdktn.IResolvable; 
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }
  public set interactive(value: boolean | cdktn.IResolvable) {
    this._interactive = value;
  }
  public resetInteractive() {
    this._interactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveInput() {
    return this._interactive;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
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

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktn.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktn.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // pseudo_terminal - computed: false, optional: true, required: false
  private _pseudoTerminal?: boolean | cdktn.IResolvable; 
  public get pseudoTerminal() {
    return this.getBooleanAttribute('pseudo_terminal');
  }
  public set pseudoTerminal(value: boolean | cdktn.IResolvable) {
    this._pseudoTerminal = value;
  }
  public resetPseudoTerminal() {
    this._pseudoTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudoTerminalInput() {
    return this._pseudoTerminal;
  }

  // readonly_root_filesystem - computed: false, optional: true, required: false
  private _readonlyRootFilesystem?: boolean | cdktn.IResolvable; 
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }
  public set readonlyRootFilesystem(value: boolean | cdktn.IResolvable) {
    this._readonlyRootFilesystem = value;
  }
  public resetReadonlyRootFilesystem() {
    this._readonlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRootFilesystemInput() {
    return this._readonlyRootFilesystem;
  }

  // start_timeout - computed: false, optional: true, required: false
  private _startTimeout?: number; 
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }
  public set startTimeout(value: number) {
    this._startTimeout = value;
  }
  public resetStartTimeout() {
    this._startTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutInput() {
    return this._startTimeout;
  }

  // stop_timeout - computed: false, optional: true, required: false
  private _stopTimeout?: number; 
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }
  public set stopTimeout(value: number) {
    this._stopTimeout = value;
  }
  public resetStopTimeout() {
    this._stopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeoutInput() {
    return this._stopTimeout;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DependsOnPropertyList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DependsOnProperty[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new EnvironmentPropertyList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: EnvironmentProperty[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_file - computed: false, optional: true, required: false
  private _environmentFile = new EnvironmentFilePropertyList(this, "environment_file", false);
  public get environmentFile() {
    return this._environmentFile;
  }
  public putEnvironmentFile(value: EnvironmentFileProperty[] | cdktn.IResolvable) {
    this._environmentFile.internalValue = value;
  }
  public resetEnvironmentFile() {
    this._environmentFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFileInput() {
    return this._environmentFile.internalValue;
  }

  // firelens_configuration - computed: false, optional: true, required: false
  private _firelensConfiguration = new FirelensConfigurationPropertyList(this, "firelens_configuration", false);
  public get firelensConfiguration() {
    return this._firelensConfiguration;
  }
  public putFirelensConfiguration(value: FirelensConfigurationProperty[] | cdktn.IResolvable) {
    this._firelensConfiguration.internalValue = value;
  }
  public resetFirelensConfiguration() {
    this._firelensConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firelensConfigurationInput() {
    return this._firelensConfiguration.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new HealthCheckPropertyList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: HealthCheckProperty[] | cdktn.IResolvable) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // linux_parameters - computed: false, optional: true, required: false
  private _linuxParameters = new LinuxParametersPropertyList(this, "linux_parameters", false);
  public get linuxParameters() {
    return this._linuxParameters;
  }
  public putLinuxParameters(value: LinuxParametersProperty[] | cdktn.IResolvable) {
    this._linuxParameters.internalValue = value;
  }
  public resetLinuxParameters() {
    this._linuxParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxParametersInput() {
    return this._linuxParameters.internalValue;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new LogConfigurationPropertyList(this, "log_configuration", false);
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: LogConfigurationProperty[] | cdktn.IResolvable) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint = new MountPointPropertyList(this, "mount_point", false);
  public get mountPoint() {
    return this._mountPoint;
  }
  public putMountPoint(value: MountPointProperty[] | cdktn.IResolvable) {
    this._mountPoint.internalValue = value;
  }
  public resetMountPoint() {
    this._mountPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint.internalValue;
  }

  // repository_credentials - computed: false, optional: true, required: false
  private _repositoryCredentials = new RepositoryCredentialsPropertyList(this, "repository_credentials", false);
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }
  public putRepositoryCredentials(value: RepositoryCredentialsProperty[] | cdktn.IResolvable) {
    this._repositoryCredentials.internalValue = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy = new RestartPolicyPropertyList(this, "restart_policy", false);
  public get restartPolicy() {
    return this._restartPolicy;
  }
  public putRestartPolicy(value: RestartPolicyProperty[] | cdktn.IResolvable) {
    this._restartPolicy.internalValue = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new SecretPropertyList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: SecretProperty[] | cdktn.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // system_control - computed: false, optional: true, required: false
  private _systemControl = new SystemControlPropertyList(this, "system_control", false);
  public get systemControl() {
    return this._systemControl;
  }
  public putSystemControl(value: SystemControlProperty[] | cdktn.IResolvable) {
    this._systemControl.internalValue = value;
  }
  public resetSystemControl() {
    this._systemControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemControlInput() {
    return this._systemControl.internalValue;
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit = new UlimitPropertyList(this, "ulimit", false);
  public get ulimit() {
    return this._ulimit;
  }
  public putUlimit(value: UlimitProperty[] | cdktn.IResolvable) {
    this._ulimit.internalValue = value;
  }
  public resetUlimit() {
    this._ulimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitInput() {
    return this._ulimit.internalValue;
  }
}

export class ContainerDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : ContainerDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainerDefinitionPropertyOutputReference {
    return new ContainerDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#source_path AwsDaemonTaskDefinition#source_path}
  */
  readonly sourcePath?: string;
}
export class HostPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HostProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourcePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourcePath = value.sourcePath;
    }
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }
}

export class HostPropertyList extends cdktn.ComplexList {
  public internalValue? : HostProperty[] | cdktn.IResolvable

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
  public get(index: number): HostPropertyOutputReference {
    return new HostPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#name AwsDaemonTaskDefinition#name}
  */
  readonly name: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_daemon_task_definition#host AwsDaemonTaskDefinition#host}
  */
  readonly host?: HostProperty[] | cdktn.IResolvable;
}
export class VolumePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VolumeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._host.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._host.internalValue = value.host;
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

  // host - computed: false, optional: true, required: false
  private _host = new HostPropertyList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: HostProperty[] | cdktn.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }
}

export class VolumePropertyList extends cdktn.ComplexList {
  public internalValue? : VolumeProperty[] | cdktn.IResolvable

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
  public get(index: number): VolumePropertyOutputReference {
    return new VolumePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
