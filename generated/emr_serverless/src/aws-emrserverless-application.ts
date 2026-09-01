// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsEmrserverlessApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#architecture AwsEmrserverlessApplication#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#id AwsEmrserverlessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#name AwsEmrserverlessApplication#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#region AwsEmrserverlessApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#release_label AwsEmrserverlessApplication#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#tags AwsEmrserverlessApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#tags_all AwsEmrserverlessApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#type AwsEmrserverlessApplication#type}
  */
  readonly type: string;
  /**
  * auto_start_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#auto_start_configuration AwsEmrserverlessApplication#auto_start_configuration}
  */
  readonly autoStartConfiguration?: AwsEmrserverlessApplication.AutoStartConfigurationProperty;
  /**
  * auto_stop_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#auto_stop_configuration AwsEmrserverlessApplication#auto_stop_configuration}
  */
  readonly autoStopConfiguration?: AwsEmrserverlessApplication.AutoStopConfigurationProperty;
  /**
  * image_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#image_configuration AwsEmrserverlessApplication#image_configuration}
  */
  readonly imageConfiguration?: AwsEmrserverlessApplication.ImageConfigurationProperty;
  /**
  * initial_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#initial_capacity AwsEmrserverlessApplication#initial_capacity}
  */
  readonly initialCapacity?: AwsEmrserverlessApplication.InitialCapacityProperty[] | cdktn.IResolvable;
  /**
  * interactive_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#interactive_configuration AwsEmrserverlessApplication#interactive_configuration}
  */
  readonly interactiveConfiguration?: AwsEmrserverlessApplication.InteractiveConfigurationProperty;
  /**
  * job_level_cost_allocation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#job_level_cost_allocation_configuration AwsEmrserverlessApplication#job_level_cost_allocation_configuration}
  */
  readonly jobLevelCostAllocationConfiguration?: AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationProperty;
  /**
  * maximum_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#maximum_capacity AwsEmrserverlessApplication#maximum_capacity}
  */
  readonly maximumCapacity?: AwsEmrserverlessApplication.MaximumCapacityProperty;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#monitoring_configuration AwsEmrserverlessApplication#monitoring_configuration}
  */
  readonly monitoringConfiguration?: AwsEmrserverlessApplication.MonitoringConfigurationProperty;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#network_configuration AwsEmrserverlessApplication#network_configuration}
  */
  readonly networkConfiguration?: AwsEmrserverlessApplication.NetworkConfigurationProperty;
  /**
  * runtime_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#runtime_configuration AwsEmrserverlessApplication#runtime_configuration}
  */
  readonly runtimeConfiguration?: AwsEmrserverlessApplication.RuntimeConfigurationProperty[] | cdktn.IResolvable;
  /**
  * scheduler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#scheduler_configuration AwsEmrserverlessApplication#scheduler_configuration}
  */
  readonly schedulerConfiguration?: AwsEmrserverlessApplication.SchedulerConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application aws_emrserverless_application}
*/
export class AwsEmrserverlessApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emrserverless_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsEmrserverlessApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEmrserverlessApplication to import
  * @param importFromId The id of the existing AwsEmrserverlessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEmrserverlessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_emrserverless_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application aws_emrserverless_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEmrserverlessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEmrserverlessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emrserverless_application',
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
    this._architecture = config.architecture;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._autoStartConfiguration.internalValue = config.autoStartConfiguration;
    this._autoStopConfiguration.internalValue = config.autoStopConfiguration;
    this._imageConfiguration.internalValue = config.imageConfiguration;
    this._initialCapacity.internalValue = config.initialCapacity;
    this._interactiveConfiguration.internalValue = config.interactiveConfiguration;
    this._jobLevelCostAllocationConfiguration.internalValue = config.jobLevelCostAllocationConfiguration;
    this._maximumCapacity.internalValue = config.maximumCapacity;
    this._monitoringConfiguration.internalValue = config.monitoringConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._runtimeConfiguration.internalValue = config.runtimeConfiguration;
    this._schedulerConfiguration.internalValue = config.schedulerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
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

  // auto_start_configuration - computed: false, optional: true, required: false
  private _autoStartConfiguration = new AwsEmrserverlessApplication.AutoStartConfigurationPropertyOutputReference(this, "auto_start_configuration");
  public get autoStartConfiguration() {
    return this._autoStartConfiguration;
  }
  public putAutoStartConfiguration(value: AwsEmrserverlessApplication.AutoStartConfigurationProperty) {
    this._autoStartConfiguration.internalValue = value;
  }
  public resetAutoStartConfiguration() {
    this._autoStartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartConfigurationInput() {
    return this._autoStartConfiguration.internalValue;
  }

  // auto_stop_configuration - computed: false, optional: true, required: false
  private _autoStopConfiguration = new AwsEmrserverlessApplication.AutoStopConfigurationPropertyOutputReference(this, "auto_stop_configuration");
  public get autoStopConfiguration() {
    return this._autoStopConfiguration;
  }
  public putAutoStopConfiguration(value: AwsEmrserverlessApplication.AutoStopConfigurationProperty) {
    this._autoStopConfiguration.internalValue = value;
  }
  public resetAutoStopConfiguration() {
    this._autoStopConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopConfigurationInput() {
    return this._autoStopConfiguration.internalValue;
  }

  // image_configuration - computed: false, optional: true, required: false
  private _imageConfiguration = new AwsEmrserverlessApplication.ImageConfigurationPropertyOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: AwsEmrserverlessApplication.ImageConfigurationProperty) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }

  // initial_capacity - computed: false, optional: true, required: false
  private _initialCapacity = new AwsEmrserverlessApplication.InitialCapacityPropertyList(this, "initial_capacity", true);
  public get initialCapacity() {
    return this._initialCapacity;
  }
  public putInitialCapacity(value: AwsEmrserverlessApplication.InitialCapacityProperty[] | cdktn.IResolvable) {
    this._initialCapacity.internalValue = value;
  }
  public resetInitialCapacity() {
    this._initialCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityInput() {
    return this._initialCapacity.internalValue;
  }

  // interactive_configuration - computed: false, optional: true, required: false
  private _interactiveConfiguration = new AwsEmrserverlessApplication.InteractiveConfigurationPropertyOutputReference(this, "interactive_configuration");
  public get interactiveConfiguration() {
    return this._interactiveConfiguration;
  }
  public putInteractiveConfiguration(value: AwsEmrserverlessApplication.InteractiveConfigurationProperty) {
    this._interactiveConfiguration.internalValue = value;
  }
  public resetInteractiveConfiguration() {
    this._interactiveConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveConfigurationInput() {
    return this._interactiveConfiguration.internalValue;
  }

  // job_level_cost_allocation_configuration - computed: false, optional: true, required: false
  private _jobLevelCostAllocationConfiguration = new AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationPropertyOutputReference(this, "job_level_cost_allocation_configuration");
  public get jobLevelCostAllocationConfiguration() {
    return this._jobLevelCostAllocationConfiguration;
  }
  public putJobLevelCostAllocationConfiguration(value: AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationProperty) {
    this._jobLevelCostAllocationConfiguration.internalValue = value;
  }
  public resetJobLevelCostAllocationConfiguration() {
    this._jobLevelCostAllocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLevelCostAllocationConfigurationInput() {
    return this._jobLevelCostAllocationConfiguration.internalValue;
  }

  // maximum_capacity - computed: false, optional: true, required: false
  private _maximumCapacity = new AwsEmrserverlessApplication.MaximumCapacityPropertyOutputReference(this, "maximum_capacity");
  public get maximumCapacity() {
    return this._maximumCapacity;
  }
  public putMaximumCapacity(value: AwsEmrserverlessApplication.MaximumCapacityProperty) {
    this._maximumCapacity.internalValue = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity.internalValue;
  }

  // monitoring_configuration - computed: false, optional: true, required: false
  private _monitoringConfiguration = new AwsEmrserverlessApplication.MonitoringConfigurationPropertyOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: AwsEmrserverlessApplication.MonitoringConfigurationProperty) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new AwsEmrserverlessApplication.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: AwsEmrserverlessApplication.NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration = new AwsEmrserverlessApplication.RuntimeConfigurationPropertyList(this, "runtime_configuration", false);
  public get runtimeConfiguration() {
    return this._runtimeConfiguration;
  }
  public putRuntimeConfiguration(value: AwsEmrserverlessApplication.RuntimeConfigurationProperty[] | cdktn.IResolvable) {
    this._runtimeConfiguration.internalValue = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration.internalValue;
  }

  // scheduler_configuration - computed: false, optional: true, required: false
  private _schedulerConfiguration = new AwsEmrserverlessApplication.SchedulerConfigurationPropertyOutputReference(this, "scheduler_configuration");
  public get schedulerConfiguration() {
    return this._schedulerConfiguration;
  }
  public putSchedulerConfiguration(value: AwsEmrserverlessApplication.SchedulerConfigurationProperty) {
    this._schedulerConfiguration.internalValue = value;
  }
  public resetSchedulerConfiguration() {
    this._schedulerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerConfigurationInput() {
    return this._schedulerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktn.stringToTerraform(this._architecture),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      release_label: cdktn.stringToTerraform(this._releaseLabel),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      auto_start_configuration: awsEmrserverlessApplicationAutoStartConfigurationPropertyToTerraform(this._autoStartConfiguration.internalValue),
      auto_stop_configuration: awsEmrserverlessApplicationAutoStopConfigurationPropertyToTerraform(this._autoStopConfiguration.internalValue),
      image_configuration: awsEmrserverlessApplicationImageConfigurationPropertyToTerraform(this._imageConfiguration.internalValue),
      initial_capacity: cdktn.listMapper(awsEmrserverlessApplicationInitialCapacityPropertyToTerraform, true)(this._initialCapacity.internalValue),
      interactive_configuration: awsEmrserverlessApplicationInteractiveConfigurationPropertyToTerraform(this._interactiveConfiguration.internalValue),
      job_level_cost_allocation_configuration: awsEmrserverlessApplicationJobLevelCostAllocationConfigurationPropertyToTerraform(this._jobLevelCostAllocationConfiguration.internalValue),
      maximum_capacity: awsEmrserverlessApplicationMaximumCapacityPropertyToTerraform(this._maximumCapacity.internalValue),
      monitoring_configuration: awsEmrserverlessApplicationMonitoringConfigurationPropertyToTerraform(this._monitoringConfiguration.internalValue),
      network_configuration: awsEmrserverlessApplicationNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
      runtime_configuration: cdktn.listMapper(awsEmrserverlessApplicationRuntimeConfigurationPropertyToTerraform, true)(this._runtimeConfiguration.internalValue),
      scheduler_configuration: awsEmrserverlessApplicationSchedulerConfigurationPropertyToTerraform(this._schedulerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktn.stringToHclTerraform(this._architecture),
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
      release_label: {
        value: cdktn.stringToHclTerraform(this._releaseLabel),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_start_configuration: {
        value: awsEmrserverlessApplicationAutoStartConfigurationPropertyToHclTerraform(this._autoStartConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.AutoStartConfigurationPropertyList",
      },
      auto_stop_configuration: {
        value: awsEmrserverlessApplicationAutoStopConfigurationPropertyToHclTerraform(this._autoStopConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.AutoStopConfigurationPropertyList",
      },
      image_configuration: {
        value: awsEmrserverlessApplicationImageConfigurationPropertyToHclTerraform(this._imageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.ImageConfigurationPropertyList",
      },
      initial_capacity: {
        value: cdktn.listMapperHcl(awsEmrserverlessApplicationInitialCapacityPropertyToHclTerraform, true)(this._initialCapacity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsEmrserverlessApplication.InitialCapacityPropertyList",
      },
      interactive_configuration: {
        value: awsEmrserverlessApplicationInteractiveConfigurationPropertyToHclTerraform(this._interactiveConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.InteractiveConfigurationPropertyList",
      },
      job_level_cost_allocation_configuration: {
        value: awsEmrserverlessApplicationJobLevelCostAllocationConfigurationPropertyToHclTerraform(this._jobLevelCostAllocationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationPropertyList",
      },
      maximum_capacity: {
        value: awsEmrserverlessApplicationMaximumCapacityPropertyToHclTerraform(this._maximumCapacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.MaximumCapacityPropertyList",
      },
      monitoring_configuration: {
        value: awsEmrserverlessApplicationMonitoringConfigurationPropertyToHclTerraform(this._monitoringConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.MonitoringConfigurationPropertyList",
      },
      network_configuration: {
        value: awsEmrserverlessApplicationNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.NetworkConfigurationPropertyList",
      },
      runtime_configuration: {
        value: cdktn.listMapperHcl(awsEmrserverlessApplicationRuntimeConfigurationPropertyToHclTerraform, true)(this._runtimeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.RuntimeConfigurationPropertyList",
      },
      scheduler_configuration: {
        value: awsEmrserverlessApplicationSchedulerConfigurationPropertyToHclTerraform(this._schedulerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrserverlessApplication.SchedulerConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsEmrserverlessApplicationAutoStartConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.AutoStartConfigurationPropertyOutputReference | AwsEmrserverlessApplication.AutoStartConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsEmrserverlessApplicationAutoStartConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.AutoStartConfigurationPropertyOutputReference | AwsEmrserverlessApplication.AutoStartConfigurationProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationAutoStopConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.AutoStopConfigurationPropertyOutputReference | AwsEmrserverlessApplication.AutoStopConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    idle_timeout_minutes: cdktn.numberToTerraform(struct!.idleTimeoutMinutes),
  }
}


export function awsEmrserverlessApplicationAutoStopConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.AutoStopConfigurationPropertyOutputReference | AwsEmrserverlessApplication.AutoStopConfigurationProperty): any {
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
    idle_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationImageConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.ImageConfigurationPropertyOutputReference | AwsEmrserverlessApplication.ImageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
  }
}


export function awsEmrserverlessApplicationImageConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.ImageConfigurationPropertyOutputReference | AwsEmrserverlessApplication.ImageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationWorkerConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.WorkerConfigurationPropertyOutputReference | AwsEmrserverlessApplication.WorkerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    disk: cdktn.stringToTerraform(struct!.disk),
    memory: cdktn.stringToTerraform(struct!.memory),
  }
}


export function awsEmrserverlessApplicationWorkerConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.WorkerConfigurationPropertyOutputReference | AwsEmrserverlessApplication.WorkerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktn.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationInitialCapacityConfigPropertyToTerraform(struct?: AwsEmrserverlessApplication.InitialCapacityConfigPropertyOutputReference | AwsEmrserverlessApplication.InitialCapacityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    worker_count: cdktn.numberToTerraform(struct!.workerCount),
    worker_configuration: awsEmrserverlessApplicationWorkerConfigurationPropertyToTerraform(struct!.workerConfiguration),
  }
}


export function awsEmrserverlessApplicationInitialCapacityConfigPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.InitialCapacityConfigPropertyOutputReference | AwsEmrserverlessApplication.InitialCapacityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    worker_count: {
      value: cdktn.numberToHclTerraform(struct!.workerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_configuration: {
      value: awsEmrserverlessApplicationWorkerConfigurationPropertyToHclTerraform(struct!.workerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationInitialCapacityPropertyToTerraform(struct?: AwsEmrserverlessApplication.InitialCapacityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    initial_capacity_type: cdktn.stringToTerraform(struct!.initialCapacityType),
    initial_capacity_config: awsEmrserverlessApplicationInitialCapacityConfigPropertyToTerraform(struct!.initialCapacityConfig),
  }
}


export function awsEmrserverlessApplicationInitialCapacityPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.InitialCapacityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    initial_capacity_type: {
      value: cdktn.stringToHclTerraform(struct!.initialCapacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_capacity_config: {
      value: awsEmrserverlessApplicationInitialCapacityConfigPropertyToHclTerraform(struct!.initialCapacityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "InitialCapacityConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationInteractiveConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.InteractiveConfigurationPropertyOutputReference | AwsEmrserverlessApplication.InteractiveConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    livy_endpoint_enabled: cdktn.booleanToTerraform(struct!.livyEndpointEnabled),
    studio_enabled: cdktn.booleanToTerraform(struct!.studioEnabled),
  }
}


export function awsEmrserverlessApplicationInteractiveConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.InteractiveConfigurationPropertyOutputReference | AwsEmrserverlessApplication.InteractiveConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    livy_endpoint_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.livyEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    studio_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.studioEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationJobLevelCostAllocationConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationPropertyOutputReference | AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsEmrserverlessApplicationJobLevelCostAllocationConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationPropertyOutputReference | AwsEmrserverlessApplication.JobLevelCostAllocationConfigurationProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationMaximumCapacityPropertyToTerraform(struct?: AwsEmrserverlessApplication.MaximumCapacityPropertyOutputReference | AwsEmrserverlessApplication.MaximumCapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    disk: cdktn.stringToTerraform(struct!.disk),
    memory: cdktn.stringToTerraform(struct!.memory),
  }
}


export function awsEmrserverlessApplicationMaximumCapacityPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.MaximumCapacityPropertyOutputReference | AwsEmrserverlessApplication.MaximumCapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktn.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationLogTypesPropertyToTerraform(struct?: AwsEmrserverlessApplication.LogTypesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsEmrserverlessApplicationLogTypesPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.LogTypesProperty | cdktn.IResolvable): any {
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


export function awsEmrserverlessApplicationCloudwatchLoggingConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.CloudwatchLoggingConfigurationPropertyOutputReference | AwsEmrserverlessApplication.CloudwatchLoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption_key_arn: cdktn.stringToTerraform(struct!.encryptionKeyArn),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
    log_types: cdktn.listMapper(awsEmrserverlessApplicationLogTypesPropertyToTerraform, true)(struct!.logTypes),
  }
}


export function awsEmrserverlessApplicationCloudwatchLoggingConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.CloudwatchLoggingConfigurationPropertyOutputReference | AwsEmrserverlessApplication.CloudwatchLoggingConfigurationProperty): any {
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
    encryption_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktn.listMapperHcl(awsEmrserverlessApplicationLogTypesPropertyToHclTerraform, true)(struct!.logTypes),
      isBlock: true,
      type: "set",
      storageClassType: "LogTypesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationManagedPersistenceMonitoringConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.ManagedPersistenceMonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.ManagedPersistenceMonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption_key_arn: cdktn.stringToTerraform(struct!.encryptionKeyArn),
  }
}


export function awsEmrserverlessApplicationManagedPersistenceMonitoringConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.ManagedPersistenceMonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.ManagedPersistenceMonitoringConfigurationProperty): any {
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
    encryption_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationPrometheusMonitoringConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.PrometheusMonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.PrometheusMonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    remote_write_url: cdktn.stringToTerraform(struct!.remoteWriteUrl),
  }
}


export function awsEmrserverlessApplicationPrometheusMonitoringConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.PrometheusMonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.PrometheusMonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    remote_write_url: {
      value: cdktn.stringToHclTerraform(struct!.remoteWriteUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationS3MonitoringConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.S3MonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.S3MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_arn: cdktn.stringToTerraform(struct!.encryptionKeyArn),
    log_uri: cdktn.stringToTerraform(struct!.logUri),
  }
}


export function awsEmrserverlessApplicationS3MonitoringConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.S3MonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.S3MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_uri: {
      value: cdktn.stringToHclTerraform(struct!.logUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationMonitoringConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.MonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logging_configuration: awsEmrserverlessApplicationCloudwatchLoggingConfigurationPropertyToTerraform(struct!.cloudwatchLoggingConfiguration),
    managed_persistence_monitoring_configuration: awsEmrserverlessApplicationManagedPersistenceMonitoringConfigurationPropertyToTerraform(struct!.managedPersistenceMonitoringConfiguration),
    prometheus_monitoring_configuration: awsEmrserverlessApplicationPrometheusMonitoringConfigurationPropertyToTerraform(struct!.prometheusMonitoringConfiguration),
    s3_monitoring_configuration: awsEmrserverlessApplicationS3MonitoringConfigurationPropertyToTerraform(struct!.s3MonitoringConfiguration),
  }
}


export function awsEmrserverlessApplicationMonitoringConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.MonitoringConfigurationPropertyOutputReference | AwsEmrserverlessApplication.MonitoringConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logging_configuration: {
      value: awsEmrserverlessApplicationCloudwatchLoggingConfigurationPropertyToHclTerraform(struct!.cloudwatchLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLoggingConfigurationPropertyList",
    },
    managed_persistence_monitoring_configuration: {
      value: awsEmrserverlessApplicationManagedPersistenceMonitoringConfigurationPropertyToHclTerraform(struct!.managedPersistenceMonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedPersistenceMonitoringConfigurationPropertyList",
    },
    prometheus_monitoring_configuration: {
      value: awsEmrserverlessApplicationPrometheusMonitoringConfigurationPropertyToHclTerraform(struct!.prometheusMonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusMonitoringConfigurationPropertyList",
    },
    s3_monitoring_configuration: {
      value: awsEmrserverlessApplicationS3MonitoringConfigurationPropertyToHclTerraform(struct!.s3MonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3MonitoringConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationNetworkConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.NetworkConfigurationPropertyOutputReference | AwsEmrserverlessApplication.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsEmrserverlessApplicationNetworkConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.NetworkConfigurationPropertyOutputReference | AwsEmrserverlessApplication.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrserverlessApplicationRuntimeConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.RuntimeConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function awsEmrserverlessApplicationRuntimeConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.RuntimeConfigurationProperty | cdktn.IResolvable): any {
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


export function awsEmrserverlessApplicationSchedulerConfigurationPropertyToTerraform(struct?: AwsEmrserverlessApplication.SchedulerConfigurationPropertyOutputReference | AwsEmrserverlessApplication.SchedulerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_runs: cdktn.numberToTerraform(struct!.maxConcurrentRuns),
    queue_timeout_minutes: cdktn.numberToTerraform(struct!.queueTimeoutMinutes),
  }
}


export function awsEmrserverlessApplicationSchedulerConfigurationPropertyToHclTerraform(struct?: AwsEmrserverlessApplication.SchedulerConfigurationPropertyOutputReference | AwsEmrserverlessApplication.SchedulerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrent_runs: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.queueTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsEmrserverlessApplication {
export interface AutoStartConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#enabled AwsEmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class AutoStartConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoStartConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoStartConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AutoStopConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#enabled AwsEmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#idle_timeout_minutes AwsEmrserverlessApplication#idle_timeout_minutes}
  */
  readonly idleTimeoutMinutes?: number;
}
export class AutoStopConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoStopConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMinutes = this._idleTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoStopConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idleTimeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idleTimeoutMinutes = value.idleTimeoutMinutes;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout_minutes - computed: false, optional: true, required: false
  private _idleTimeoutMinutes?: number; 
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }
  public set idleTimeoutMinutes(value: number) {
    this._idleTimeoutMinutes = value;
  }
  public resetIdleTimeoutMinutes() {
    this._idleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinutesInput() {
    return this._idleTimeoutMinutes;
  }
}
export interface ImageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#image_uri AwsEmrserverlessApplication#image_uri}
  */
  readonly imageUri: string;
}
export class ImageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
    }
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface WorkerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#cpu AwsEmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#disk AwsEmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#memory AwsEmrserverlessApplication#memory}
  */
  readonly memory: string;
}
export class WorkerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface InitialCapacityConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#worker_count AwsEmrserverlessApplication#worker_count}
  */
  readonly workerCount: number;
  /**
  * worker_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#worker_configuration AwsEmrserverlessApplication#worker_configuration}
  */
  readonly workerConfiguration?: WorkerConfigurationProperty;
}
export class InitialCapacityConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InitialCapacityConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    if (this._workerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfiguration = this._workerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InitialCapacityConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerCount = undefined;
      this._workerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerCount = value.workerCount;
      this._workerConfiguration.internalValue = value.workerConfiguration;
    }
  }

  // worker_count - computed: false, optional: false, required: true
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }

  // worker_configuration - computed: false, optional: true, required: false
  private _workerConfiguration = new WorkerConfigurationPropertyOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: WorkerConfigurationProperty) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }
}
export interface InitialCapacityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#initial_capacity_type AwsEmrserverlessApplication#initial_capacity_type}
  */
  readonly initialCapacityType: string;
  /**
  * initial_capacity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#initial_capacity_config AwsEmrserverlessApplication#initial_capacity_config}
  */
  readonly initialCapacityConfig?: InitialCapacityConfigProperty;
}
export class InitialCapacityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InitialCapacityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialCapacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityType = this._initialCapacityType;
    }
    if (this._initialCapacityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityConfig = this._initialCapacityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InitialCapacityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialCapacityType = undefined;
      this._initialCapacityConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialCapacityType = value.initialCapacityType;
      this._initialCapacityConfig.internalValue = value.initialCapacityConfig;
    }
  }

  // initial_capacity_type - computed: false, optional: false, required: true
  private _initialCapacityType?: string; 
  public get initialCapacityType() {
    return this.getStringAttribute('initial_capacity_type');
  }
  public set initialCapacityType(value: string) {
    this._initialCapacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityTypeInput() {
    return this._initialCapacityType;
  }

  // initial_capacity_config - computed: false, optional: true, required: false
  private _initialCapacityConfig = new InitialCapacityConfigPropertyOutputReference(this, "initial_capacity_config");
  public get initialCapacityConfig() {
    return this._initialCapacityConfig;
  }
  public putInitialCapacityConfig(value: InitialCapacityConfigProperty) {
    this._initialCapacityConfig.internalValue = value;
  }
  public resetInitialCapacityConfig() {
    this._initialCapacityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityConfigInput() {
    return this._initialCapacityConfig.internalValue;
  }
}

export class InitialCapacityPropertyList extends cdktn.ComplexList {
  public internalValue? : InitialCapacityProperty[] | cdktn.IResolvable

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
  public get(index: number): InitialCapacityPropertyOutputReference {
    return new InitialCapacityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InteractiveConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#livy_endpoint_enabled AwsEmrserverlessApplication#livy_endpoint_enabled}
  */
  readonly livyEndpointEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#studio_enabled AwsEmrserverlessApplication#studio_enabled}
  */
  readonly studioEnabled?: boolean | cdktn.IResolvable;
}
export class InteractiveConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InteractiveConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._livyEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.livyEndpointEnabled = this._livyEndpointEnabled;
    }
    if (this._studioEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioEnabled = this._studioEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InteractiveConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._livyEndpointEnabled = undefined;
      this._studioEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._livyEndpointEnabled = value.livyEndpointEnabled;
      this._studioEnabled = value.studioEnabled;
    }
  }

  // livy_endpoint_enabled - computed: true, optional: true, required: false
  private _livyEndpointEnabled?: boolean | cdktn.IResolvable; 
  public get livyEndpointEnabled() {
    return this.getBooleanAttribute('livy_endpoint_enabled');
  }
  public set livyEndpointEnabled(value: boolean | cdktn.IResolvable) {
    this._livyEndpointEnabled = value;
  }
  public resetLivyEndpointEnabled() {
    this._livyEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livyEndpointEnabledInput() {
    return this._livyEndpointEnabled;
  }

  // studio_enabled - computed: true, optional: true, required: false
  private _studioEnabled?: boolean | cdktn.IResolvable; 
  public get studioEnabled() {
    return this.getBooleanAttribute('studio_enabled');
  }
  public set studioEnabled(value: boolean | cdktn.IResolvable) {
    this._studioEnabled = value;
  }
  public resetStudioEnabled() {
    this._studioEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioEnabledInput() {
    return this._studioEnabled;
  }
}
export interface JobLevelCostAllocationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#enabled AwsEmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class JobLevelCostAllocationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobLevelCostAllocationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobLevelCostAllocationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MaximumCapacityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#cpu AwsEmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#disk AwsEmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#memory AwsEmrserverlessApplication#memory}
  */
  readonly memory: string;
}
export class MaximumCapacityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaximumCapacityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaximumCapacityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface LogTypesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#name AwsEmrserverlessApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#values AwsEmrserverlessApplication#values}
  */
  readonly values: string[];
}
export class LogTypesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogTypesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTypesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogTypesPropertyList extends cdktn.ComplexList {
  public internalValue? : LogTypesProperty[] | cdktn.IResolvable

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
  public get(index: number): LogTypesPropertyOutputReference {
    return new LogTypesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLoggingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#enabled AwsEmrserverlessApplication#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#encryption_key_arn AwsEmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#log_group_name AwsEmrserverlessApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#log_stream_name_prefix AwsEmrserverlessApplication#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * log_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#log_types AwsEmrserverlessApplication#log_types}
  */
  readonly logTypes?: LogTypesProperty[] | cdktn.IResolvable;
}
export class CloudwatchLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionKeyArn = undefined;
      this._logGroupName = undefined;
      this._logStreamNamePrefix = undefined;
      this._logTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._logGroupName = value.logGroupName;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logTypes.internalValue = value.logTypes;
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

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name_prefix - computed: false, optional: true, required: false
  private _logStreamNamePrefix?: string; 
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes = new LogTypesPropertyList(this, "log_types", true);
  public get logTypes() {
    return this._logTypes;
  }
  public putLogTypes(value: LogTypesProperty[] | cdktn.IResolvable) {
    this._logTypes.internalValue = value;
  }
  public resetLogTypes() {
    this._logTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes.internalValue;
  }
}
export interface ManagedPersistenceMonitoringConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#enabled AwsEmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#encryption_key_arn AwsEmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
}
export class ManagedPersistenceMonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedPersistenceMonitoringConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedPersistenceMonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionKeyArn = value.encryptionKeyArn;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }
}
export interface PrometheusMonitoringConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#remote_write_url AwsEmrserverlessApplication#remote_write_url}
  */
  readonly remoteWriteUrl?: string;
}
export class PrometheusMonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrometheusMonitoringConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteWriteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteWriteUrl = this._remoteWriteUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusMonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._remoteWriteUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._remoteWriteUrl = value.remoteWriteUrl;
    }
  }

  // remote_write_url - computed: false, optional: true, required: false
  private _remoteWriteUrl?: string; 
  public get remoteWriteUrl() {
    return this.getStringAttribute('remote_write_url');
  }
  public set remoteWriteUrl(value: string) {
    this._remoteWriteUrl = value;
  }
  public resetRemoteWriteUrl() {
    this._remoteWriteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWriteUrlInput() {
    return this._remoteWriteUrl;
  }
}
export interface S3MonitoringConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#encryption_key_arn AwsEmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#log_uri AwsEmrserverlessApplication#log_uri}
  */
  readonly logUri?: string;
}
export class S3MonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3MonitoringConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._logUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logUri = this._logUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3MonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyArn = undefined;
      this._logUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._logUri = value.logUri;
    }
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }
}
export interface MonitoringConfigurationProperty {
  /**
  * cloudwatch_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#cloudwatch_logging_configuration AwsEmrserverlessApplication#cloudwatch_logging_configuration}
  */
  readonly cloudwatchLoggingConfiguration?: CloudwatchLoggingConfigurationProperty;
  /**
  * managed_persistence_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#managed_persistence_monitoring_configuration AwsEmrserverlessApplication#managed_persistence_monitoring_configuration}
  */
  readonly managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfigurationProperty;
  /**
  * prometheus_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#prometheus_monitoring_configuration AwsEmrserverlessApplication#prometheus_monitoring_configuration}
  */
  readonly prometheusMonitoringConfiguration?: PrometheusMonitoringConfigurationProperty;
  /**
  * s3_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#s3_monitoring_configuration AwsEmrserverlessApplication#s3_monitoring_configuration}
  */
  readonly s3MonitoringConfiguration?: S3MonitoringConfigurationProperty;
}
export class MonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
    }
    if (this._managedPersistenceMonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPersistenceMonitoringConfiguration = this._managedPersistenceMonitoringConfiguration?.internalValue;
    }
    if (this._prometheusMonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMonitoringConfiguration = this._prometheusMonitoringConfiguration?.internalValue;
    }
    if (this._s3MonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3MonitoringConfiguration = this._s3MonitoringConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLoggingConfiguration.internalValue = undefined;
      this._managedPersistenceMonitoringConfiguration.internalValue = undefined;
      this._prometheusMonitoringConfiguration.internalValue = undefined;
      this._s3MonitoringConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
      this._managedPersistenceMonitoringConfiguration.internalValue = value.managedPersistenceMonitoringConfiguration;
      this._prometheusMonitoringConfiguration.internalValue = value.prometheusMonitoringConfiguration;
      this._s3MonitoringConfiguration.internalValue = value.s3MonitoringConfiguration;
    }
  }

  // cloudwatch_logging_configuration - computed: false, optional: true, required: false
  private _cloudwatchLoggingConfiguration = new CloudwatchLoggingConfigurationPropertyOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }
  public putCloudwatchLoggingConfiguration(value: CloudwatchLoggingConfigurationProperty) {
    this._cloudwatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudwatchLoggingConfiguration() {
    this._cloudwatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingConfigurationInput() {
    return this._cloudwatchLoggingConfiguration.internalValue;
  }

  // managed_persistence_monitoring_configuration - computed: false, optional: true, required: false
  private _managedPersistenceMonitoringConfiguration = new ManagedPersistenceMonitoringConfigurationPropertyOutputReference(this, "managed_persistence_monitoring_configuration");
  public get managedPersistenceMonitoringConfiguration() {
    return this._managedPersistenceMonitoringConfiguration;
  }
  public putManagedPersistenceMonitoringConfiguration(value: ManagedPersistenceMonitoringConfigurationProperty) {
    this._managedPersistenceMonitoringConfiguration.internalValue = value;
  }
  public resetManagedPersistenceMonitoringConfiguration() {
    this._managedPersistenceMonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPersistenceMonitoringConfigurationInput() {
    return this._managedPersistenceMonitoringConfiguration.internalValue;
  }

  // prometheus_monitoring_configuration - computed: false, optional: true, required: false
  private _prometheusMonitoringConfiguration = new PrometheusMonitoringConfigurationPropertyOutputReference(this, "prometheus_monitoring_configuration");
  public get prometheusMonitoringConfiguration() {
    return this._prometheusMonitoringConfiguration;
  }
  public putPrometheusMonitoringConfiguration(value: PrometheusMonitoringConfigurationProperty) {
    this._prometheusMonitoringConfiguration.internalValue = value;
  }
  public resetPrometheusMonitoringConfiguration() {
    this._prometheusMonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMonitoringConfigurationInput() {
    return this._prometheusMonitoringConfiguration.internalValue;
  }

  // s3_monitoring_configuration - computed: false, optional: true, required: false
  private _s3MonitoringConfiguration = new S3MonitoringConfigurationPropertyOutputReference(this, "s3_monitoring_configuration");
  public get s3MonitoringConfiguration() {
    return this._s3MonitoringConfiguration;
  }
  public putS3MonitoringConfiguration(value: S3MonitoringConfigurationProperty) {
    this._s3MonitoringConfiguration.internalValue = value;
  }
  public resetS3MonitoringConfiguration() {
    this._s3MonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3MonitoringConfigurationInput() {
    return this._s3MonitoringConfiguration.internalValue;
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#security_group_ids AwsEmrserverlessApplication#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#subnet_ids AwsEmrserverlessApplication#subnet_ids}
  */
  readonly subnetIds?: string[];
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
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface RuntimeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#classification AwsEmrserverlessApplication#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#properties AwsEmrserverlessApplication#properties}
  */
  readonly properties?: { [key: string]: string };
}
export class RuntimeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuntimeConfigurationProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuntimeConfigurationProperty | cdktn.IResolvable | undefined) {
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

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
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

export class RuntimeConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : RuntimeConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): RuntimeConfigurationPropertyOutputReference {
    return new RuntimeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#max_concurrent_runs AwsEmrserverlessApplication#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emrserverless_application#queue_timeout_minutes AwsEmrserverlessApplication#queue_timeout_minutes}
  */
  readonly queueTimeoutMinutes?: number;
}
export class SchedulerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._queueTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueTimeoutMinutes = this._queueTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentRuns = undefined;
      this._queueTimeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._queueTimeoutMinutes = value.queueTimeoutMinutes;
    }
  }

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // queue_timeout_minutes - computed: true, optional: true, required: false
  private _queueTimeoutMinutes?: number; 
  public get queueTimeoutMinutes() {
    return this.getNumberAttribute('queue_timeout_minutes');
  }
  public set queueTimeoutMinutes(value: number) {
    this._queueTimeoutMinutes = value;
  }
  public resetQueueTimeoutMinutes() {
    this._queueTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTimeoutMinutesInput() {
    return this._queueTimeoutMinutes;
  }
}
}
