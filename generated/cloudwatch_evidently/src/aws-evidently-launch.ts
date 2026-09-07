// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsLaunchConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#description AwsLaunch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#id AwsLaunch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#name AwsLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#project AwsLaunch#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#randomization_salt AwsLaunch#randomization_salt}
  */
  readonly randomizationSalt?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#region AwsLaunch#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#tags AwsLaunch#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#tags_all AwsLaunch#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#groups AwsLaunch#groups}
  */
  readonly groups: AwsLaunch.GroupsProperty[] | cdktn.IResolvable;
  /**
  * metric_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#metric_monitors AwsLaunch#metric_monitors}
  */
  readonly metricMonitors?: AwsLaunch.MetricMonitorsProperty[] | cdktn.IResolvable;
  /**
  * scheduled_splits_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#scheduled_splits_config AwsLaunch#scheduled_splits_config}
  */
  readonly scheduledSplitsConfig?: AwsLaunch.ScheduledSplitsConfigProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#timeouts AwsLaunch#timeouts}
  */
  readonly timeouts?: AwsLaunch.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch aws_evidently_launch}
*/
export class AwsLaunch extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_evidently_launch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsLaunch resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLaunch to import
  * @param importFromId The id of the existing AwsLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLaunch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_evidently_launch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch aws_evidently_launch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLaunchConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLaunchConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_evidently_launch',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._randomizationSalt = config.randomizationSalt;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._groups.internalValue = config.groups;
    this._metricMonitors.internalValue = config.metricMonitors;
    this._scheduledSplitsConfig.internalValue = config.scheduledSplitsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // execution - computed: true, optional: false, required: false
  private _execution = new AwsLaunch.ExecutionPropertyList(this, "execution", false);
  public get execution() {
    return this._execution;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // randomization_salt - computed: false, optional: true, required: false
  private _randomizationSalt?: string; 
  public get randomizationSalt() {
    return this.getStringAttribute('randomization_salt');
  }
  public set randomizationSalt(value: string) {
    this._randomizationSalt = value;
  }
  public resetRandomizationSalt() {
    this._randomizationSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizationSaltInput() {
    return this._randomizationSalt;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new AwsLaunch.GroupsPropertyList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: AwsLaunch.GroupsProperty[] | cdktn.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // metric_monitors - computed: false, optional: true, required: false
  private _metricMonitors = new AwsLaunch.MetricMonitorsPropertyList(this, "metric_monitors", false);
  public get metricMonitors() {
    return this._metricMonitors;
  }
  public putMetricMonitors(value: AwsLaunch.MetricMonitorsProperty[] | cdktn.IResolvable) {
    this._metricMonitors.internalValue = value;
  }
  public resetMetricMonitors() {
    this._metricMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMonitorsInput() {
    return this._metricMonitors.internalValue;
  }

  // scheduled_splits_config - computed: false, optional: true, required: false
  private _scheduledSplitsConfig = new AwsLaunch.ScheduledSplitsConfigPropertyOutputReference(this, "scheduled_splits_config");
  public get scheduledSplitsConfig() {
    return this._scheduledSplitsConfig;
  }
  public putScheduledSplitsConfig(value: AwsLaunch.ScheduledSplitsConfigProperty) {
    this._scheduledSplitsConfig.internalValue = value;
  }
  public resetScheduledSplitsConfig() {
    this._scheduledSplitsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSplitsConfigInput() {
    return this._scheduledSplitsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLaunch.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLaunch.TimeoutsProperty) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      randomization_salt: cdktn.stringToTerraform(this._randomizationSalt),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      groups: cdktn.listMapper(awsLaunchGroupsPropertyToTerraform, true)(this._groups.internalValue),
      metric_monitors: cdktn.listMapper(awsLaunchMetricMonitorsPropertyToTerraform, true)(this._metricMonitors.internalValue),
      scheduled_splits_config: awsLaunchScheduledSplitsConfigPropertyToTerraform(this._scheduledSplitsConfig.internalValue),
      timeouts: awsLaunchTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomization_salt: {
        value: cdktn.stringToHclTerraform(this._randomizationSalt),
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
      groups: {
        value: cdktn.listMapperHcl(awsLaunchGroupsPropertyToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLaunch.GroupsPropertyList",
      },
      metric_monitors: {
        value: cdktn.listMapperHcl(awsLaunchMetricMonitorsPropertyToHclTerraform, true)(this._metricMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLaunch.MetricMonitorsPropertyList",
      },
      scheduled_splits_config: {
        value: awsLaunchScheduledSplitsConfigPropertyToHclTerraform(this._scheduledSplitsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLaunch.ScheduledSplitsConfigPropertyList",
      },
      timeouts: {
        value: awsLaunchTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLaunch.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsLaunchExecutionPropertyToTerraform(struct?: AwsLaunch.ExecutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsLaunchExecutionPropertyToHclTerraform(struct?: AwsLaunch.ExecutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsLaunchGroupsPropertyToTerraform(struct?: AwsLaunch.GroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    feature: cdktn.stringToTerraform(struct!.feature),
    name: cdktn.stringToTerraform(struct!.name),
    variation: cdktn.stringToTerraform(struct!.variation),
  }
}


export function awsLaunchGroupsPropertyToHclTerraform(struct?: AwsLaunch.GroupsProperty | cdktn.IResolvable): any {
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
    feature: {
      value: cdktn.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variation: {
      value: cdktn.stringToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchMetricDefinitionPropertyToTerraform(struct?: AwsLaunch.MetricDefinitionPropertyOutputReference | AwsLaunch.MetricDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id_key: cdktn.stringToTerraform(struct!.entityIdKey),
    event_pattern: cdktn.stringToTerraform(struct!.eventPattern),
    name: cdktn.stringToTerraform(struct!.name),
    unit_label: cdktn.stringToTerraform(struct!.unitLabel),
    value_key: cdktn.stringToTerraform(struct!.valueKey),
  }
}


export function awsLaunchMetricDefinitionPropertyToHclTerraform(struct?: AwsLaunch.MetricDefinitionPropertyOutputReference | AwsLaunch.MetricDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id_key: {
      value: cdktn.stringToHclTerraform(struct!.entityIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_pattern: {
      value: cdktn.stringToHclTerraform(struct!.eventPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_label: {
      value: cdktn.stringToHclTerraform(struct!.unitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_key: {
      value: cdktn.stringToHclTerraform(struct!.valueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchMetricMonitorsPropertyToTerraform(struct?: AwsLaunch.MetricMonitorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_definition: awsLaunchMetricDefinitionPropertyToTerraform(struct!.metricDefinition),
  }
}


export function awsLaunchMetricMonitorsPropertyToHclTerraform(struct?: AwsLaunch.MetricMonitorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_definition: {
      value: awsLaunchMetricDefinitionPropertyToHclTerraform(struct!.metricDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchSegmentOverridesPropertyToTerraform(struct?: AwsLaunch.SegmentOverridesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluation_order: cdktn.numberToTerraform(struct!.evaluationOrder),
    segment: cdktn.stringToTerraform(struct!.segment),
    weights: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.weights),
  }
}


export function awsLaunchSegmentOverridesPropertyToHclTerraform(struct?: AwsLaunch.SegmentOverridesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluation_order: {
      value: cdktn.numberToHclTerraform(struct!.evaluationOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weights: {
      value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.weights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchStepsPropertyToTerraform(struct?: AwsLaunch.StepsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_weights: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.groupWeights),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    segment_overrides: cdktn.listMapper(awsLaunchSegmentOverridesPropertyToTerraform, true)(struct!.segmentOverrides),
  }
}


export function awsLaunchStepsPropertyToHclTerraform(struct?: AwsLaunch.StepsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_weights: {
      value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.groupWeights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_overrides: {
      value: cdktn.listMapperHcl(awsLaunchSegmentOverridesPropertyToHclTerraform, true)(struct!.segmentOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "SegmentOverridesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchScheduledSplitsConfigPropertyToTerraform(struct?: AwsLaunch.ScheduledSplitsConfigPropertyOutputReference | AwsLaunch.ScheduledSplitsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    steps: cdktn.listMapper(awsLaunchStepsPropertyToTerraform, true)(struct!.steps),
  }
}


export function awsLaunchScheduledSplitsConfigPropertyToHclTerraform(struct?: AwsLaunch.ScheduledSplitsConfigPropertyOutputReference | AwsLaunch.ScheduledSplitsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    steps: {
      value: cdktn.listMapperHcl(awsLaunchStepsPropertyToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "StepsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLaunchTimeoutsPropertyToTerraform(struct?: AwsLaunch.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsLaunchTimeoutsPropertyToHclTerraform(struct?: AwsLaunch.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsLaunch {
export interface ExecutionProperty {
}
export class ExecutionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExecutionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecutionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_time - computed: true, optional: false, required: false
  public get endedTime() {
    return this.getStringAttribute('ended_time');
  }

  // started_time - computed: true, optional: false, required: false
  public get startedTime() {
    return this.getStringAttribute('started_time');
  }
}

export class ExecutionPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ExecutionPropertyOutputReference {
    return new ExecutionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#description AwsLaunch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#feature AwsLaunch#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#name AwsLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#variation AwsLaunch#variation}
  */
  readonly variation: string;
}
export class GroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._feature = undefined;
      this._name = undefined;
      this._variation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._feature = value.feature;
      this._name = value.name;
      this._variation = value.variation;
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

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // variation - computed: false, optional: false, required: true
  private _variation?: string; 
  public get variation() {
    return this.getStringAttribute('variation');
  }
  public set variation(value: string) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class GroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : GroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): GroupsPropertyOutputReference {
    return new GroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#entity_id_key AwsLaunch#entity_id_key}
  */
  readonly entityIdKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#event_pattern AwsLaunch#event_pattern}
  */
  readonly eventPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#name AwsLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#unit_label AwsLaunch#unit_label}
  */
  readonly unitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#value_key AwsLaunch#value_key}
  */
  readonly valueKey: string;
}
export class MetricDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdKey = this._entityIdKey;
    }
    if (this._eventPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitLabel = this._unitLabel;
    }
    if (this._valueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueKey = this._valueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityIdKey = undefined;
      this._eventPattern = undefined;
      this._name = undefined;
      this._unitLabel = undefined;
      this._valueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityIdKey = value.entityIdKey;
      this._eventPattern = value.eventPattern;
      this._name = value.name;
      this._unitLabel = value.unitLabel;
      this._valueKey = value.valueKey;
    }
  }

  // entity_id_key - computed: false, optional: false, required: true
  private _entityIdKey?: string; 
  public get entityIdKey() {
    return this.getStringAttribute('entity_id_key');
  }
  public set entityIdKey(value: string) {
    this._entityIdKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdKeyInput() {
    return this._entityIdKey;
  }

  // event_pattern - computed: false, optional: true, required: false
  private _eventPattern?: string; 
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }
  public set eventPattern(value: string) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern;
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

  // unit_label - computed: false, optional: true, required: false
  private _unitLabel?: string; 
  public get unitLabel() {
    return this.getStringAttribute('unit_label');
  }
  public set unitLabel(value: string) {
    this._unitLabel = value;
  }
  public resetUnitLabel() {
    this._unitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitLabelInput() {
    return this._unitLabel;
  }

  // value_key - computed: false, optional: false, required: true
  private _valueKey?: string; 
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
  public set valueKey(value: string) {
    this._valueKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyInput() {
    return this._valueKey;
  }
}
export interface MetricMonitorsProperty {
  /**
  * metric_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#metric_definition AwsLaunch#metric_definition}
  */
  readonly metricDefinition: MetricDefinitionProperty;
}
export class MetricMonitorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetricMonitorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinition = this._metricDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricMonitorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDefinition.internalValue = value.metricDefinition;
    }
  }

  // metric_definition - computed: false, optional: false, required: true
  private _metricDefinition = new MetricDefinitionPropertyOutputReference(this, "metric_definition");
  public get metricDefinition() {
    return this._metricDefinition;
  }
  public putMetricDefinition(value: MetricDefinitionProperty) {
    this._metricDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionInput() {
    return this._metricDefinition.internalValue;
  }
}

export class MetricMonitorsPropertyList extends cdktn.ComplexList {
  public internalValue? : MetricMonitorsProperty[] | cdktn.IResolvable

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
  public get(index: number): MetricMonitorsPropertyOutputReference {
    return new MetricMonitorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentOverridesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#evaluation_order AwsLaunch#evaluation_order}
  */
  readonly evaluationOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#segment AwsLaunch#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#weights AwsLaunch#weights}
  */
  readonly weights: { [key: string]: number };
}
export class SegmentOverridesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SegmentOverridesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationOrder = this._evaluationOrder;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._weights !== undefined) {
      hasAnyValues = true;
      internalValueResult.weights = this._weights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentOverridesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationOrder = undefined;
      this._segment = undefined;
      this._weights = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationOrder = value.evaluationOrder;
      this._segment = value.segment;
      this._weights = value.weights;
    }
  }

  // evaluation_order - computed: false, optional: false, required: true
  private _evaluationOrder?: number; 
  public get evaluationOrder() {
    return this.getNumberAttribute('evaluation_order');
  }
  public set evaluationOrder(value: number) {
    this._evaluationOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderInput() {
    return this._evaluationOrder;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // weights - computed: false, optional: false, required: true
  private _weights?: { [key: string]: number }; 
  public get weights() {
    return this.getNumberMapAttribute('weights');
  }
  public set weights(value: { [key: string]: number }) {
    this._weights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights;
  }
}

export class SegmentOverridesPropertyList extends cdktn.ComplexList {
  public internalValue? : SegmentOverridesProperty[] | cdktn.IResolvable

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
  public get(index: number): SegmentOverridesPropertyOutputReference {
    return new SegmentOverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#group_weights AwsLaunch#group_weights}
  */
  readonly groupWeights: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#start_time AwsLaunch#start_time}
  */
  readonly startTime: string;
  /**
  * segment_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#segment_overrides AwsLaunch#segment_overrides}
  */
  readonly segmentOverrides?: SegmentOverridesProperty[] | cdktn.IResolvable;
}
export class StepsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWeights = this._groupWeights;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._segmentOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentOverrides = this._segmentOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupWeights = undefined;
      this._startTime = undefined;
      this._segmentOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupWeights = value.groupWeights;
      this._startTime = value.startTime;
      this._segmentOverrides.internalValue = value.segmentOverrides;
    }
  }

  // group_weights - computed: false, optional: false, required: true
  private _groupWeights?: { [key: string]: number }; 
  public get groupWeights() {
    return this.getNumberMapAttribute('group_weights');
  }
  public set groupWeights(value: { [key: string]: number }) {
    this._groupWeights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWeightsInput() {
    return this._groupWeights;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // segment_overrides - computed: false, optional: true, required: false
  private _segmentOverrides = new SegmentOverridesPropertyList(this, "segment_overrides", false);
  public get segmentOverrides() {
    return this._segmentOverrides;
  }
  public putSegmentOverrides(value: SegmentOverridesProperty[] | cdktn.IResolvable) {
    this._segmentOverrides.internalValue = value;
  }
  public resetSegmentOverrides() {
    this._segmentOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOverridesInput() {
    return this._segmentOverrides.internalValue;
  }
}

export class StepsPropertyList extends cdktn.ComplexList {
  public internalValue? : StepsProperty[] | cdktn.IResolvable

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
  public get(index: number): StepsPropertyOutputReference {
    return new StepsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduledSplitsConfigProperty {
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#steps AwsLaunch#steps}
  */
  readonly steps: StepsProperty[] | cdktn.IResolvable;
}
export class ScheduledSplitsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduledSplitsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduledSplitsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._steps.internalValue = value.steps;
    }
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new StepsPropertyList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: StepsProperty[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#create AwsLaunch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#delete AwsLaunch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/evidently_launch#update AwsLaunch#update}
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
