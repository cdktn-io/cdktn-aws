// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfTaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#cloudwatch_log_group_arn TfTask#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#destination_location_arn TfTask#destination_location_arn}
  */
  readonly destinationLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#id TfTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#name TfTask#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#region TfTask#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#source_location_arn TfTask#source_location_arn}
  */
  readonly sourceLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#tags TfTask#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#tags_all TfTask#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#task_mode TfTask#task_mode}
  */
  readonly taskMode?: string;
  /**
  * excludes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#excludes TfTask#excludes}
  */
  readonly excludes?: TfTask.ExcludesProperty;
  /**
  * includes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#includes TfTask#includes}
  */
  readonly includes?: TfTask.IncludesProperty;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#options TfTask#options}
  */
  readonly options?: TfTask.OptionsProperty;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#schedule TfTask#schedule}
  */
  readonly schedule?: TfTask.ScheduleProperty;
  /**
  * task_report_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#task_report_config TfTask#task_report_config}
  */
  readonly taskReportConfig?: TfTask.TaskReportConfigProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#timeouts TfTask#timeouts}
  */
  readonly timeouts?: TfTask.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task aws_datasync_task}
*/
export class TfTask extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfTask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfTask to import
  * @param importFromId The id of the existing TfTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task aws_datasync_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfTaskConfig
  */
  public constructor(scope: Construct, id: string, config: TfTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_task',
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
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._taskMode = config.taskMode;
    this._excludes.internalValue = config.excludes;
    this._includes.internalValue = config.includes;
    this._options.internalValue = config.options;
    this._schedule.internalValue = config.schedule;
    this._taskReportConfig.internalValue = config.taskReportConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string; 
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn;
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn?: string; 
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationArnInput() {
    return this._destinationLocationArn;
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

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn?: string; 
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationArnInput() {
    return this._sourceLocationArn;
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

  // task_mode - computed: true, optional: true, required: false
  private _taskMode?: string; 
  public get taskMode() {
    return this.getStringAttribute('task_mode');
  }
  public set taskMode(value: string) {
    this._taskMode = value;
  }
  public resetTaskMode() {
    this._taskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskModeInput() {
    return this._taskMode;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new TfTask.ExcludesPropertyOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: TfTask.ExcludesProperty) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new TfTask.IncludesPropertyOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: TfTask.IncludesProperty) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new TfTask.OptionsPropertyOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: TfTask.OptionsProperty) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new TfTask.SchedulePropertyOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: TfTask.ScheduleProperty) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // task_report_config - computed: false, optional: true, required: false
  private _taskReportConfig = new TfTask.TaskReportConfigPropertyOutputReference(this, "task_report_config");
  public get taskReportConfig() {
    return this._taskReportConfig;
  }
  public putTaskReportConfig(value: TfTask.TaskReportConfigProperty) {
    this._taskReportConfig.internalValue = value;
  }
  public resetTaskReportConfig() {
    this._taskReportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskReportConfigInput() {
    return this._taskReportConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfTask.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfTask.TimeoutsProperty) {
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
      cloudwatch_log_group_arn: cdktn.stringToTerraform(this._cloudwatchLogGroupArn),
      destination_location_arn: cdktn.stringToTerraform(this._destinationLocationArn),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      source_location_arn: cdktn.stringToTerraform(this._sourceLocationArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      task_mode: cdktn.stringToTerraform(this._taskMode),
      excludes: tfTaskExcludesPropertyToTerraform(this._excludes.internalValue),
      includes: tfTaskIncludesPropertyToTerraform(this._includes.internalValue),
      options: tfTaskOptionsPropertyToTerraform(this._options.internalValue),
      schedule: tfTaskSchedulePropertyToTerraform(this._schedule.internalValue),
      task_report_config: tfTaskTaskReportConfigPropertyToTerraform(this._taskReportConfig.internalValue),
      timeouts: tfTaskTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch_log_group_arn: {
        value: cdktn.stringToHclTerraform(this._cloudwatchLogGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_location_arn: {
        value: cdktn.stringToHclTerraform(this._destinationLocationArn),
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
      source_location_arn: {
        value: cdktn.stringToHclTerraform(this._sourceLocationArn),
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
      task_mode: {
        value: cdktn.stringToHclTerraform(this._taskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excludes: {
        value: tfTaskExcludesPropertyToHclTerraform(this._excludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTask.ExcludesPropertyList",
      },
      includes: {
        value: tfTaskIncludesPropertyToHclTerraform(this._includes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTask.IncludesPropertyList",
      },
      options: {
        value: tfTaskOptionsPropertyToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTask.OptionsPropertyList",
      },
      schedule: {
        value: tfTaskSchedulePropertyToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTask.SchedulePropertyList",
      },
      task_report_config: {
        value: tfTaskTaskReportConfigPropertyToHclTerraform(this._taskReportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTask.TaskReportConfigPropertyList",
      },
      timeouts: {
        value: tfTaskTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfTask.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfTaskExcludesPropertyToTerraform(struct?: TfTask.ExcludesPropertyOutputReference | TfTask.ExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_type: cdktn.stringToTerraform(struct!.filterType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfTaskExcludesPropertyToHclTerraform(struct?: TfTask.ExcludesPropertyOutputReference | TfTask.ExcludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
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


export function tfTaskIncludesPropertyToTerraform(struct?: TfTask.IncludesPropertyOutputReference | TfTask.IncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_type: cdktn.stringToTerraform(struct!.filterType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfTaskIncludesPropertyToHclTerraform(struct?: TfTask.IncludesPropertyOutputReference | TfTask.IncludesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
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


export function tfTaskOptionsPropertyToTerraform(struct?: TfTask.OptionsPropertyOutputReference | TfTask.OptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    atime: cdktn.stringToTerraform(struct!.atime),
    bytes_per_second: cdktn.numberToTerraform(struct!.bytesPerSecond),
    gid: cdktn.stringToTerraform(struct!.gid),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    mtime: cdktn.stringToTerraform(struct!.mtime),
    object_tags: cdktn.stringToTerraform(struct!.objectTags),
    overwrite_mode: cdktn.stringToTerraform(struct!.overwriteMode),
    posix_permissions: cdktn.stringToTerraform(struct!.posixPermissions),
    preserve_deleted_files: cdktn.stringToTerraform(struct!.preserveDeletedFiles),
    preserve_devices: cdktn.stringToTerraform(struct!.preserveDevices),
    security_descriptor_copy_flags: cdktn.stringToTerraform(struct!.securityDescriptorCopyFlags),
    task_queueing: cdktn.stringToTerraform(struct!.taskQueueing),
    transfer_mode: cdktn.stringToTerraform(struct!.transferMode),
    uid: cdktn.stringToTerraform(struct!.uid),
    verify_mode: cdktn.stringToTerraform(struct!.verifyMode),
  }
}


export function tfTaskOptionsPropertyToHclTerraform(struct?: TfTask.OptionsPropertyOutputReference | TfTask.OptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    atime: {
      value: cdktn.stringToHclTerraform(struct!.atime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_per_second: {
      value: cdktn.numberToHclTerraform(struct!.bytesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gid: {
      value: cdktn.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtime: {
      value: cdktn.stringToHclTerraform(struct!.mtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_tags: {
      value: cdktn.stringToHclTerraform(struct!.objectTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_mode: {
      value: cdktn.stringToHclTerraform(struct!.overwriteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posix_permissions: {
      value: cdktn.stringToHclTerraform(struct!.posixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_deleted_files: {
      value: cdktn.stringToHclTerraform(struct!.preserveDeletedFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_devices: {
      value: cdktn.stringToHclTerraform(struct!.preserveDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_descriptor_copy_flags: {
      value: cdktn.stringToHclTerraform(struct!.securityDescriptorCopyFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_queueing: {
      value: cdktn.stringToHclTerraform(struct!.taskQueueing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_mode: {
      value: cdktn.stringToHclTerraform(struct!.transferMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktn.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_mode: {
      value: cdktn.stringToHclTerraform(struct!.verifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTaskSchedulePropertyToTerraform(struct?: TfTask.SchedulePropertyOutputReference | TfTask.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfTaskSchedulePropertyToHclTerraform(struct?: TfTask.SchedulePropertyOutputReference | TfTask.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTaskReportOverridesPropertyToTerraform(struct?: TfTask.ReportOverridesPropertyOutputReference | TfTask.ReportOverridesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deleted_override: cdktn.stringToTerraform(struct!.deletedOverride),
    skipped_override: cdktn.stringToTerraform(struct!.skippedOverride),
    transferred_override: cdktn.stringToTerraform(struct!.transferredOverride),
    verified_override: cdktn.stringToTerraform(struct!.verifiedOverride),
  }
}


export function tfTaskReportOverridesPropertyToHclTerraform(struct?: TfTask.ReportOverridesPropertyOutputReference | TfTask.ReportOverridesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deleted_override: {
      value: cdktn.stringToHclTerraform(struct!.deletedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skipped_override: {
      value: cdktn.stringToHclTerraform(struct!.skippedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transferred_override: {
      value: cdktn.stringToHclTerraform(struct!.transferredOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verified_override: {
      value: cdktn.stringToHclTerraform(struct!.verifiedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTaskS3DestinationPropertyToTerraform(struct?: TfTask.S3DestinationPropertyOutputReference | TfTask.S3DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_access_role_arn: cdktn.stringToTerraform(struct!.bucketAccessRoleArn),
    s3_bucket_arn: cdktn.stringToTerraform(struct!.s3BucketArn),
    subdirectory: cdktn.stringToTerraform(struct!.subdirectory),
  }
}


export function tfTaskS3DestinationPropertyToHclTerraform(struct?: TfTask.S3DestinationPropertyOutputReference | TfTask.S3DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdirectory: {
      value: cdktn.stringToHclTerraform(struct!.subdirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTaskTaskReportConfigPropertyToTerraform(struct?: TfTask.TaskReportConfigPropertyOutputReference | TfTask.TaskReportConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
    report_level: cdktn.stringToTerraform(struct!.reportLevel),
    s3_object_versioning: cdktn.stringToTerraform(struct!.s3ObjectVersioning),
    report_overrides: tfTaskReportOverridesPropertyToTerraform(struct!.reportOverrides),
    s3_destination: tfTaskS3DestinationPropertyToTerraform(struct!.s3Destination),
  }
}


export function tfTaskTaskReportConfigPropertyToHclTerraform(struct?: TfTask.TaskReportConfigPropertyOutputReference | TfTask.TaskReportConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_level: {
      value: cdktn.stringToHclTerraform(struct!.reportLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_versioning: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_overrides: {
      value: tfTaskReportOverridesPropertyToHclTerraform(struct!.reportOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "ReportOverridesPropertyList",
    },
    s3_destination: {
      value: tfTaskS3DestinationPropertyToHclTerraform(struct!.s3Destination),
      isBlock: true,
      type: "list",
      storageClassType: "S3DestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTaskTimeoutsPropertyToTerraform(struct?: TfTask.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function tfTaskTimeoutsPropertyToHclTerraform(struct?: TfTask.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfTask {
export interface ExcludesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#filter_type TfTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#value TfTask#value}
  */
  readonly value?: string;
}
export class ExcludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExcludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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
export interface IncludesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#filter_type TfTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#value TfTask#value}
  */
  readonly value?: string;
}
export class IncludesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncludesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncludesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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
export interface OptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#atime TfTask#atime}
  */
  readonly atime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#bytes_per_second TfTask#bytes_per_second}
  */
  readonly bytesPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#gid TfTask#gid}
  */
  readonly gid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#log_level TfTask#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#mtime TfTask#mtime}
  */
  readonly mtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#object_tags TfTask#object_tags}
  */
  readonly objectTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#overwrite_mode TfTask#overwrite_mode}
  */
  readonly overwriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#posix_permissions TfTask#posix_permissions}
  */
  readonly posixPermissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#preserve_deleted_files TfTask#preserve_deleted_files}
  */
  readonly preserveDeletedFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#preserve_devices TfTask#preserve_devices}
  */
  readonly preserveDevices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#security_descriptor_copy_flags TfTask#security_descriptor_copy_flags}
  */
  readonly securityDescriptorCopyFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#task_queueing TfTask#task_queueing}
  */
  readonly taskQueueing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#transfer_mode TfTask#transfer_mode}
  */
  readonly transferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#uid TfTask#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#verify_mode TfTask#verify_mode}
  */
  readonly verifyMode?: string;
}
export class OptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atime = this._atime;
    }
    if (this._bytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesPerSecond = this._bytesPerSecond;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._mtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtime = this._mtime;
    }
    if (this._objectTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTags = this._objectTags;
    }
    if (this._overwriteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteMode = this._overwriteMode;
    }
    if (this._posixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixPermissions = this._posixPermissions;
    }
    if (this._preserveDeletedFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDeletedFiles = this._preserveDeletedFiles;
    }
    if (this._preserveDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDevices = this._preserveDevices;
    }
    if (this._securityDescriptorCopyFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDescriptorCopyFlags = this._securityDescriptorCopyFlags;
    }
    if (this._taskQueueing !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskQueueing = this._taskQueueing;
    }
    if (this._transferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferMode = this._transferMode;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._verifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyMode = this._verifyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atime = undefined;
      this._bytesPerSecond = undefined;
      this._gid = undefined;
      this._logLevel = undefined;
      this._mtime = undefined;
      this._objectTags = undefined;
      this._overwriteMode = undefined;
      this._posixPermissions = undefined;
      this._preserveDeletedFiles = undefined;
      this._preserveDevices = undefined;
      this._securityDescriptorCopyFlags = undefined;
      this._taskQueueing = undefined;
      this._transferMode = undefined;
      this._uid = undefined;
      this._verifyMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atime = value.atime;
      this._bytesPerSecond = value.bytesPerSecond;
      this._gid = value.gid;
      this._logLevel = value.logLevel;
      this._mtime = value.mtime;
      this._objectTags = value.objectTags;
      this._overwriteMode = value.overwriteMode;
      this._posixPermissions = value.posixPermissions;
      this._preserveDeletedFiles = value.preserveDeletedFiles;
      this._preserveDevices = value.preserveDevices;
      this._securityDescriptorCopyFlags = value.securityDescriptorCopyFlags;
      this._taskQueueing = value.taskQueueing;
      this._transferMode = value.transferMode;
      this._uid = value.uid;
      this._verifyMode = value.verifyMode;
    }
  }

  // atime - computed: false, optional: true, required: false
  private _atime?: string; 
  public get atime() {
    return this.getStringAttribute('atime');
  }
  public set atime(value: string) {
    this._atime = value;
  }
  public resetAtime() {
    this._atime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime;
  }

  // bytes_per_second - computed: false, optional: true, required: false
  private _bytesPerSecond?: number; 
  public get bytesPerSecond() {
    return this.getNumberAttribute('bytes_per_second');
  }
  public set bytesPerSecond(value: number) {
    this._bytesPerSecond = value;
  }
  public resetBytesPerSecond() {
    this._bytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesPerSecondInput() {
    return this._bytesPerSecond;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mtime - computed: false, optional: true, required: false
  private _mtime?: string; 
  public get mtime() {
    return this.getStringAttribute('mtime');
  }
  public set mtime(value: string) {
    this._mtime = value;
  }
  public resetMtime() {
    this._mtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime;
  }

  // object_tags - computed: false, optional: true, required: false
  private _objectTags?: string; 
  public get objectTags() {
    return this.getStringAttribute('object_tags');
  }
  public set objectTags(value: string) {
    this._objectTags = value;
  }
  public resetObjectTags() {
    this._objectTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTagsInput() {
    return this._objectTags;
  }

  // overwrite_mode - computed: false, optional: true, required: false
  private _overwriteMode?: string; 
  public get overwriteMode() {
    return this.getStringAttribute('overwrite_mode');
  }
  public set overwriteMode(value: string) {
    this._overwriteMode = value;
  }
  public resetOverwriteMode() {
    this._overwriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteModeInput() {
    return this._overwriteMode;
  }

  // posix_permissions - computed: false, optional: true, required: false
  private _posixPermissions?: string; 
  public get posixPermissions() {
    return this.getStringAttribute('posix_permissions');
  }
  public set posixPermissions(value: string) {
    this._posixPermissions = value;
  }
  public resetPosixPermissions() {
    this._posixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixPermissionsInput() {
    return this._posixPermissions;
  }

  // preserve_deleted_files - computed: false, optional: true, required: false
  private _preserveDeletedFiles?: string; 
  public get preserveDeletedFiles() {
    return this.getStringAttribute('preserve_deleted_files');
  }
  public set preserveDeletedFiles(value: string) {
    this._preserveDeletedFiles = value;
  }
  public resetPreserveDeletedFiles() {
    this._preserveDeletedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDeletedFilesInput() {
    return this._preserveDeletedFiles;
  }

  // preserve_devices - computed: false, optional: true, required: false
  private _preserveDevices?: string; 
  public get preserveDevices() {
    return this.getStringAttribute('preserve_devices');
  }
  public set preserveDevices(value: string) {
    this._preserveDevices = value;
  }
  public resetPreserveDevices() {
    this._preserveDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDevicesInput() {
    return this._preserveDevices;
  }

  // security_descriptor_copy_flags - computed: true, optional: true, required: false
  private _securityDescriptorCopyFlags?: string; 
  public get securityDescriptorCopyFlags() {
    return this.getStringAttribute('security_descriptor_copy_flags');
  }
  public set securityDescriptorCopyFlags(value: string) {
    this._securityDescriptorCopyFlags = value;
  }
  public resetSecurityDescriptorCopyFlags() {
    this._securityDescriptorCopyFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDescriptorCopyFlagsInput() {
    return this._securityDescriptorCopyFlags;
  }

  // task_queueing - computed: false, optional: true, required: false
  private _taskQueueing?: string; 
  public get taskQueueing() {
    return this.getStringAttribute('task_queueing');
  }
  public set taskQueueing(value: string) {
    this._taskQueueing = value;
  }
  public resetTaskQueueing() {
    this._taskQueueing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskQueueingInput() {
    return this._taskQueueing;
  }

  // transfer_mode - computed: false, optional: true, required: false
  private _transferMode?: string; 
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }
  public set transferMode(value: string) {
    this._transferMode = value;
  }
  public resetTransferMode() {
    this._transferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferModeInput() {
    return this._transferMode;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // verify_mode - computed: false, optional: true, required: false
  private _verifyMode?: string; 
  public get verifyMode() {
    return this.getStringAttribute('verify_mode');
  }
  public set verifyMode(value: string) {
    this._verifyMode = value;
  }
  public resetVerifyMode() {
    this._verifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyModeInput() {
    return this._verifyMode;
  }
}
export interface ScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#schedule_expression TfTask#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#status TfTask#status}
  */
  readonly status?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduleExpression = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduleExpression = value.scheduleExpression;
      this._status = value.status;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
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
}
export interface ReportOverridesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#deleted_override TfTask#deleted_override}
  */
  readonly deletedOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#skipped_override TfTask#skipped_override}
  */
  readonly skippedOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#transferred_override TfTask#transferred_override}
  */
  readonly transferredOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#verified_override TfTask#verified_override}
  */
  readonly verifiedOverride?: string;
}
export class ReportOverridesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportOverridesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedOverride = this._deletedOverride;
    }
    if (this._skippedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedOverride = this._skippedOverride;
    }
    if (this._transferredOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferredOverride = this._transferredOverride;
    }
    if (this._verifiedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiedOverride = this._verifiedOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportOverridesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deletedOverride = undefined;
      this._skippedOverride = undefined;
      this._transferredOverride = undefined;
      this._verifiedOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deletedOverride = value.deletedOverride;
      this._skippedOverride = value.skippedOverride;
      this._transferredOverride = value.transferredOverride;
      this._verifiedOverride = value.verifiedOverride;
    }
  }

  // deleted_override - computed: false, optional: true, required: false
  private _deletedOverride?: string; 
  public get deletedOverride() {
    return this.getStringAttribute('deleted_override');
  }
  public set deletedOverride(value: string) {
    this._deletedOverride = value;
  }
  public resetDeletedOverride() {
    this._deletedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedOverrideInput() {
    return this._deletedOverride;
  }

  // skipped_override - computed: false, optional: true, required: false
  private _skippedOverride?: string; 
  public get skippedOverride() {
    return this.getStringAttribute('skipped_override');
  }
  public set skippedOverride(value: string) {
    this._skippedOverride = value;
  }
  public resetSkippedOverride() {
    this._skippedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedOverrideInput() {
    return this._skippedOverride;
  }

  // transferred_override - computed: false, optional: true, required: false
  private _transferredOverride?: string; 
  public get transferredOverride() {
    return this.getStringAttribute('transferred_override');
  }
  public set transferredOverride(value: string) {
    this._transferredOverride = value;
  }
  public resetTransferredOverride() {
    this._transferredOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferredOverrideInput() {
    return this._transferredOverride;
  }

  // verified_override - computed: false, optional: true, required: false
  private _verifiedOverride?: string; 
  public get verifiedOverride() {
    return this.getStringAttribute('verified_override');
  }
  public set verifiedOverride(value: string) {
    this._verifiedOverride = value;
  }
  public resetVerifiedOverride() {
    this._verifiedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedOverrideInput() {
    return this._verifiedOverride;
  }
}
export interface S3DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#bucket_access_role_arn TfTask#bucket_access_role_arn}
  */
  readonly bucketAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#s3_bucket_arn TfTask#s3_bucket_arn}
  */
  readonly s3BucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#subdirectory TfTask#subdirectory}
  */
  readonly subdirectory?: string;
}
export class S3DestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3DestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccessRoleArn = this._bucketAccessRoleArn;
    }
    if (this._s3BucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketArn = this._s3BucketArn;
    }
    if (this._subdirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdirectory = this._subdirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketAccessRoleArn = undefined;
      this._s3BucketArn = undefined;
      this._subdirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketAccessRoleArn = value.bucketAccessRoleArn;
      this._s3BucketArn = value.s3BucketArn;
      this._subdirectory = value.subdirectory;
    }
  }

  // bucket_access_role_arn - computed: false, optional: false, required: true
  private _bucketAccessRoleArn?: string; 
  public get bucketAccessRoleArn() {
    return this.getStringAttribute('bucket_access_role_arn');
  }
  public set bucketAccessRoleArn(value: string) {
    this._bucketAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccessRoleArnInput() {
    return this._bucketAccessRoleArn;
  }

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn?: string; 
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn;
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }
}
export interface TaskReportConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#output_type TfTask#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#report_level TfTask#report_level}
  */
  readonly reportLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#s3_object_versioning TfTask#s3_object_versioning}
  */
  readonly s3ObjectVersioning?: string;
  /**
  * report_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#report_overrides TfTask#report_overrides}
  */
  readonly reportOverrides?: ReportOverridesProperty;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#s3_destination TfTask#s3_destination}
  */
  readonly s3Destination: S3DestinationProperty;
}
export class TaskReportConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskReportConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._reportLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportLevel = this._reportLevel;
    }
    if (this._s3ObjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersioning = this._s3ObjectVersioning;
    }
    if (this._reportOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOverrides = this._reportOverrides?.internalValue;
    }
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskReportConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
      this._reportLevel = undefined;
      this._s3ObjectVersioning = undefined;
      this._reportOverrides.internalValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
      this._reportLevel = value.reportLevel;
      this._s3ObjectVersioning = value.s3ObjectVersioning;
      this._reportOverrides.internalValue = value.reportOverrides;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // report_level - computed: false, optional: true, required: false
  private _reportLevel?: string; 
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
  public set reportLevel(value: string) {
    this._reportLevel = value;
  }
  public resetReportLevel() {
    this._reportLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportLevelInput() {
    return this._reportLevel;
  }

  // s3_object_versioning - computed: false, optional: true, required: false
  private _s3ObjectVersioning?: string; 
  public get s3ObjectVersioning() {
    return this.getStringAttribute('s3_object_versioning');
  }
  public set s3ObjectVersioning(value: string) {
    this._s3ObjectVersioning = value;
  }
  public resetS3ObjectVersioning() {
    this._s3ObjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersioningInput() {
    return this._s3ObjectVersioning;
  }

  // report_overrides - computed: false, optional: true, required: false
  private _reportOverrides = new ReportOverridesPropertyOutputReference(this, "report_overrides");
  public get reportOverrides() {
    return this._reportOverrides;
  }
  public putReportOverrides(value: ReportOverridesProperty) {
    this._reportOverrides.internalValue = value;
  }
  public resetReportOverrides() {
    this._reportOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOverridesInput() {
    return this._reportOverrides.internalValue;
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination = new S3DestinationPropertyOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: S3DestinationProperty) {
    this._s3Destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_task#create TfTask#create}
  */
  readonly create?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
}
