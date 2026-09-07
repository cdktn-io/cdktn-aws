// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#description AwsPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#execution_role AwsPlan#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#name AwsPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#primary_region AwsPlan#primary_region}
  */
  readonly primaryRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#recovery_approach AwsPlan#recovery_approach}
  */
  readonly recoveryApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#recovery_time_objective_minutes AwsPlan#recovery_time_objective_minutes}
  */
  readonly recoveryTimeObjectiveMinutes?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#regions AwsPlan#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#tags AwsPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * associated_alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#associated_alarms AwsPlan#associated_alarms}
  */
  readonly associatedAlarms?: AwsPlan.AssociatedAlarmsProperty[] | cdktn.IResolvable;
  /**
  * report_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#report_configuration AwsPlan#report_configuration}
  */
  readonly reportConfiguration?: AwsPlan.ReportConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeouts AwsPlan#timeouts}
  */
  readonly timeouts?: AwsPlan.TimeoutsProperty;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#triggers AwsPlan#triggers}
  */
  readonly triggers?: AwsPlan.TriggersProperty[] | cdktn.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#workflow AwsPlan#workflow}
  */
  readonly workflow?: AwsPlan.WorkflowProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan}
*/
export class AwsPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_arcregionswitch_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPlan to import
  * @param importFromId The id of the existing AwsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_arcregionswitch_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_arcregionswitch_plan',
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
    this._executionRole = config.executionRole;
    this._name = config.name;
    this._primaryRegion = config.primaryRegion;
    this._recoveryApproach = config.recoveryApproach;
    this._recoveryTimeObjectiveMinutes = config.recoveryTimeObjectiveMinutes;
    this._region = config.region;
    this._regions = config.regions;
    this._tags = config.tags;
    this._associatedAlarms.internalValue = config.associatedAlarms;
    this._reportConfiguration.internalValue = config.reportConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._triggers.internalValue = config.triggers;
    this._workflow.internalValue = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
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

  // primary_region - computed: false, optional: true, required: false
  private _primaryRegion?: string; 
  public get primaryRegion() {
    return this.getStringAttribute('primary_region');
  }
  public set primaryRegion(value: string) {
    this._primaryRegion = value;
  }
  public resetPrimaryRegion() {
    this._primaryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRegionInput() {
    return this._primaryRegion;
  }

  // recovery_approach - computed: false, optional: false, required: true
  private _recoveryApproach?: string; 
  public get recoveryApproach() {
    return this.getStringAttribute('recovery_approach');
  }
  public set recoveryApproach(value: string) {
    this._recoveryApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryApproachInput() {
    return this._recoveryApproach;
  }

  // recovery_time_objective_minutes - computed: false, optional: true, required: false
  private _recoveryTimeObjectiveMinutes?: number; 
  public get recoveryTimeObjectiveMinutes() {
    return this.getNumberAttribute('recovery_time_objective_minutes');
  }
  public set recoveryTimeObjectiveMinutes(value: number) {
    this._recoveryTimeObjectiveMinutes = value;
  }
  public resetRecoveryTimeObjectiveMinutes() {
    this._recoveryTimeObjectiveMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTimeObjectiveMinutesInput() {
    return this._recoveryTimeObjectiveMinutes;
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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

  // associated_alarms - computed: false, optional: true, required: false
  private _associatedAlarms = new AwsPlan.AssociatedAlarmsPropertyList(this, "associated_alarms", true);
  public get associatedAlarms() {
    return this._associatedAlarms;
  }
  public putAssociatedAlarms(value: AwsPlan.AssociatedAlarmsProperty[] | cdktn.IResolvable) {
    this._associatedAlarms.internalValue = value;
  }
  public resetAssociatedAlarms() {
    this._associatedAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAlarmsInput() {
    return this._associatedAlarms.internalValue;
  }

  // report_configuration - computed: false, optional: true, required: false
  private _reportConfiguration = new AwsPlan.ReportConfigurationPropertyList(this, "report_configuration", false);
  public get reportConfiguration() {
    return this._reportConfiguration;
  }
  public putReportConfiguration(value: AwsPlan.ReportConfigurationProperty[] | cdktn.IResolvable) {
    this._reportConfiguration.internalValue = value;
  }
  public resetReportConfiguration() {
    this._reportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportConfigurationInput() {
    return this._reportConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsPlan.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsPlan.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new AwsPlan.TriggersPropertyList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: AwsPlan.TriggersProperty[] | cdktn.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new AwsPlan.WorkflowPropertyList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: AwsPlan.WorkflowProperty[] | cdktn.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      name: cdktn.stringToTerraform(this._name),
      primary_region: cdktn.stringToTerraform(this._primaryRegion),
      recovery_approach: cdktn.stringToTerraform(this._recoveryApproach),
      recovery_time_objective_minutes: cdktn.numberToTerraform(this._recoveryTimeObjectiveMinutes),
      region: cdktn.stringToTerraform(this._region),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      associated_alarms: cdktn.listMapper(awsPlanAssociatedAlarmsPropertyToTerraform, true)(this._associatedAlarms.internalValue),
      report_configuration: cdktn.listMapper(awsPlanReportConfigurationPropertyToTerraform, true)(this._reportConfiguration.internalValue),
      timeouts: awsPlanTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      triggers: cdktn.listMapper(awsPlanTriggersPropertyToTerraform, true)(this._triggers.internalValue),
      workflow: cdktn.listMapper(awsPlanWorkflowPropertyToTerraform, true)(this._workflow.internalValue),
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
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
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
      primary_region: {
        value: cdktn.stringToHclTerraform(this._primaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_approach: {
        value: cdktn.stringToHclTerraform(this._recoveryApproach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_time_objective_minutes: {
        value: cdktn.numberToHclTerraform(this._recoveryTimeObjectiveMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associated_alarms: {
        value: cdktn.listMapperHcl(awsPlanAssociatedAlarmsPropertyToHclTerraform, true)(this._associatedAlarms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsPlan.AssociatedAlarmsPropertyList",
      },
      report_configuration: {
        value: cdktn.listMapperHcl(awsPlanReportConfigurationPropertyToHclTerraform, true)(this._reportConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPlan.ReportConfigurationPropertyList",
      },
      timeouts: {
        value: awsPlanTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsPlan.TimeoutsProperty",
      },
      triggers: {
        value: cdktn.listMapperHcl(awsPlanTriggersPropertyToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPlan.TriggersPropertyList",
      },
      workflow: {
        value: cdktn.listMapperHcl(awsPlanWorkflowPropertyToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPlan.WorkflowPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPlanAssociatedAlarmsPropertyToTerraform(struct?: AwsPlan.AssociatedAlarmsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_type: cdktn.stringToTerraform(struct!.alarmType),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    resource_identifier: cdktn.stringToTerraform(struct!.resourceIdentifier),
  }
}


export function awsPlanAssociatedAlarmsPropertyToHclTerraform(struct?: AwsPlan.AssociatedAlarmsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_type: {
      value: cdktn.stringToHclTerraform(struct!.alarmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanS3ConfigurationPropertyToTerraform(struct?: AwsPlan.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    bucket_path: cdktn.stringToTerraform(struct!.bucketPath),
  }
}


export function awsPlanS3ConfigurationPropertyToHclTerraform(struct?: AwsPlan.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_path: {
      value: cdktn.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanReportOutputPropertyToTerraform(struct?: AwsPlan.ReportOutputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: cdktn.listMapper(awsPlanS3ConfigurationPropertyToTerraform, true)(struct!.s3Configuration),
  }
}


export function awsPlanReportOutputPropertyToHclTerraform(struct?: AwsPlan.ReportOutputProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: cdktn.listMapperHcl(awsPlanS3ConfigurationPropertyToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanReportConfigurationPropertyToTerraform(struct?: AwsPlan.ReportConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    report_output: cdktn.listMapper(awsPlanReportOutputPropertyToTerraform, true)(struct!.reportOutput),
  }
}


export function awsPlanReportConfigurationPropertyToHclTerraform(struct?: AwsPlan.ReportConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    report_output: {
      value: cdktn.listMapperHcl(awsPlanReportOutputPropertyToHclTerraform, true)(struct!.reportOutput),
      isBlock: true,
      type: "list",
      storageClassType: "ReportOutputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanTimeoutsPropertyToTerraform(struct?: AwsPlan.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsPlanTimeoutsPropertyToHclTerraform(struct?: AwsPlan.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsPlanConditionsPropertyToTerraform(struct?: AwsPlan.ConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associated_alarm_name: cdktn.stringToTerraform(struct!.associatedAlarmName),
    condition: cdktn.stringToTerraform(struct!.condition),
  }
}


export function awsPlanConditionsPropertyToHclTerraform(struct?: AwsPlan.ConditionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associated_alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.associatedAlarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanTriggersPropertyToTerraform(struct?: AwsPlan.TriggersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    min_delay_minutes_between_executions: cdktn.numberToTerraform(struct!.minDelayMinutesBetweenExecutions),
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
    conditions: cdktn.listMapper(awsPlanConditionsPropertyToTerraform, true)(struct!.conditions),
  }
}


export function awsPlanTriggersPropertyToHclTerraform(struct?: AwsPlan.TriggersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_delay_minutes_between_executions: {
      value: cdktn.numberToHclTerraform(struct!.minDelayMinutesBetweenExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(awsPlanConditionsPropertyToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_control_arn: cdktn.stringToTerraform(struct!.routingControlArn),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktn.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    routing_control: cdktn.listMapper(awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToTerraform, true)(struct!.routingControl),
  }
}


export function awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepArcRoutingControlConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktn.listMapper(awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function awsPlanWorkflowStepArcRoutingControlConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepArcRoutingControlConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepAuroraProvisionedScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    instance_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.instanceArns),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepAuroraProvisionedScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.instanceArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepAuroraServerlessScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepAuroraServerlessScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepCustomActionLambdaConfigLambdaPropertyToTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepCustomActionLambdaConfigLambdaPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepCustomActionLambdaConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function awsPlanWorkflowStepCustomActionLambdaConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepCustomActionLambdaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_to_run: cdktn.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktn.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktn.listMapper(awsPlanWorkflowStepCustomActionLambdaConfigLambdaPropertyToTerraform, true)(struct!.lambda),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepCustomActionLambdaConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepCustomActionLambdaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepCustomActionLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_to_run: {
      value: cdktn.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepCustomActionLambdaConfigLambdaPropertyToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepCustomActionLambdaConfigLambdaPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepCustomActionLambdaConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepCustomActionLambdaConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepDocumentDbConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepDocumentDbConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepDocumentDbConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepDocumentDbConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepDocumentDbConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepDocumentDbConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepDocumentDbConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepDocumentDbConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepDocumentDbConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyToTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktn.listMapper(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyToTerraform, true)(struct!.asg),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigServicePropertyToTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    service_arn: cdktn.stringToTerraform(struct!.serviceArn),
  }
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigServicePropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    service: cdktn.listMapper(awsPlanWorkflowStepEcsCapacityIncreaseConfigServicePropertyToTerraform, true)(struct!.service),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepEcsCapacityIncreaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEcsCapacityIncreaseConfigServicePropertyToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEcsCapacityIncreaseConfigServicePropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigEksClustersPropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigEksClustersPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    kind: cdktn.stringToTerraform(struct!.kind),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hpa_name: cdktn.stringToTerraform(struct!.hpaName),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hpa_name: {
      value: cdktn.stringToHclTerraform(struct!.hpaName),
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesPropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resources: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyToTerraform, true)(struct!.resources),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable): any {
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
    resources: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepEksResourceScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigEksClustersPropertyToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesPropertyToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepEksResourceScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepEksResourceScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigEksClustersPropertyToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEksResourceScalingConfigEksClustersPropertyList",
    },
    kubernetes_resource_type: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyList",
    },
    scaling_resources: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigScalingResourcesPropertyToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEksResourceScalingConfigScalingResourcesPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEksResourceScalingConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepExecutionApprovalConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepExecutionApprovalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approval_role: cdktn.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepExecutionApprovalConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepExecutionApprovalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approval_role: {
      value: cdktn.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepGlobalAuroraConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepGlobalAuroraConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepGlobalAuroraConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepGlobalAuroraConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepGlobalAuroraConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepGlobalAuroraConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepGlobalAuroraConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepGlobalAuroraConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepGlobalAuroraConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_event_source_mapping: cdktn.listMapper(awsPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToTerraform, true)(struct!.regionEventSourceMapping),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepLambdaEventSourceMappingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_event_source_mapping: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToHclTerraform, true)(struct!.regionEventSourceMapping),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepNeptuneGlobalDatabaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepNeptuneGlobalDatabaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_control_arn: cdktn.stringToTerraform(struct!.routingControlArn),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktn.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    routing_control: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToTerraform, true)(struct!.routingControl),
  }
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepArcRoutingControlConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    instance_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.instanceArns),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.instanceArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_to_run: cdktn.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktn.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyToTerraform, true)(struct!.lambda),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_to_run: {
      value: cdktn.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepDocumentDbConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepDocumentDbConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepDocumentDbConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepDocumentDbConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyToTerraform, true)(struct!.asg),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    service_arn: cdktn.stringToTerraform(struct!.serviceArn),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    service: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyToTerraform, true)(struct!.service),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    kind: cdktn.stringToTerraform(struct!.kind),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hpa_name: cdktn.stringToTerraform(struct!.hpaName),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hpa_name: {
      value: cdktn.stringToHclTerraform(struct!.hpaName),
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resources: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyToTerraform, true)(struct!.resources),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable): any {
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
    resources: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepEksResourceScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyList",
    },
    kubernetes_resource_type: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyList",
    },
    scaling_resources: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepExecutionApprovalConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepExecutionApprovalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approval_role: cdktn.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepParallelConfigStepExecutionApprovalConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepExecutionApprovalConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approval_role: {
      value: cdktn.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepGlobalAuroraConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepGlobalAuroraConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_event_source_mapping: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToTerraform, true)(struct!.regionEventSourceMapping),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_event_source_mapping: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyToHclTerraform, true)(struct!.regionEventSourceMapping),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyToTerraform, true)(struct!.ungraceful),
  }
}


export function awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_set_identifier: cdktn.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktn.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktn.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyToTerraform, true)(struct!.recordSet),
  }
}


export function awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktn.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepParallelConfigStepPropertyToTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    execution_block_type: cdktn.stringToTerraform(struct!.executionBlockType),
    name: cdktn.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigPropertyToTerraform, true)(struct!.arcRoutingControlConfig),
    aurora_provisioned_scaling_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyToTerraform, true)(struct!.auroraProvisionedScalingConfig),
    aurora_serverless_scaling_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyToTerraform, true)(struct!.auroraServerlessScalingConfig),
    custom_action_lambda_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepDocumentDbConfigPropertyToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigPropertyToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepExecutionApprovalConfigPropertyToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigPropertyToTerraform, true)(struct!.globalAuroraConfig),
    lambda_event_source_mapping_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyToTerraform, true)(struct!.lambdaEventSourceMappingConfig),
    neptune_global_database_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyToTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
    rds_create_cross_region_read_replica_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyToTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
    rds_promote_read_replica_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyToTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
    region_switch_plan_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function awsPlanWorkflowStepParallelConfigStepPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepParallelConfigStepProperty | cdktn.IResolvable): any {
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
    execution_block_type: {
      value: cdktn.stringToHclTerraform(struct!.executionBlockType),
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
    arc_routing_control_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepArcRoutingControlConfigPropertyToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyList",
    },
    aurora_provisioned_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyToHclTerraform, true)(struct!.auroraProvisionedScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyList",
    },
    aurora_serverless_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyToHclTerraform, true)(struct!.auroraServerlessScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyList",
    },
    custom_action_lambda_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyList",
    },
    document_db_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepDocumentDbConfigPropertyToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepDocumentDbConfigPropertyList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyList",
    },
    ecs_capacity_increase_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyList",
    },
    eks_resource_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepEksResourceScalingConfigPropertyToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyList",
    },
    execution_approval_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepExecutionApprovalConfigPropertyToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyList",
    },
    global_aurora_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepGlobalAuroraConfigPropertyToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyList",
    },
    lambda_event_source_mapping_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyToHclTerraform, true)(struct!.lambdaEventSourceMappingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyList",
    },
    neptune_global_database_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyToHclTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyList",
    },
    rds_create_cross_region_read_replica_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyToHclTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyList",
    },
    rds_promote_read_replica_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyToHclTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyList",
    },
    region_switch_plan_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyList",
    },
    route53_health_check_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanParallelConfigPropertyToTerraform(struct?: AwsPlan.ParallelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step: cdktn.listMapper(awsPlanWorkflowStepParallelConfigStepPropertyToTerraform, true)(struct!.step),
  }
}


export function awsPlanParallelConfigPropertyToHclTerraform(struct?: AwsPlan.ParallelConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepParallelConfigStepPropertyToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepParallelConfigStepPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepRdsPromoteReadReplicaConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsPlanWorkflowStepRdsPromoteReadReplicaConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepRegionSwitchPlanConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepRegionSwitchPlanConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function awsPlanWorkflowStepRegionSwitchPlanConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepRegionSwitchPlanConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepRoute53HealthCheckConfigRecordSetPropertyToTerraform(struct?: AwsPlan.WorkflowStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_set_identifier: cdktn.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsPlanWorkflowStepRoute53HealthCheckConfigRecordSetPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktn.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepRoute53HealthCheckConfigPropertyToTerraform(struct?: AwsPlan.WorkflowStepRoute53HealthCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktn.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktn.listMapper(awsPlanWorkflowStepRoute53HealthCheckConfigRecordSetPropertyToTerraform, true)(struct!.recordSet),
  }
}


export function awsPlanWorkflowStepRoute53HealthCheckConfigPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepRoute53HealthCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktn.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepRoute53HealthCheckConfigRecordSetPropertyToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepRoute53HealthCheckConfigRecordSetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowStepPropertyToTerraform(struct?: AwsPlan.WorkflowStepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    execution_block_type: cdktn.stringToTerraform(struct!.executionBlockType),
    name: cdktn.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktn.listMapper(awsPlanWorkflowStepArcRoutingControlConfigPropertyToTerraform, true)(struct!.arcRoutingControlConfig),
    aurora_provisioned_scaling_config: cdktn.listMapper(awsPlanWorkflowStepAuroraProvisionedScalingConfigPropertyToTerraform, true)(struct!.auroraProvisionedScalingConfig),
    aurora_serverless_scaling_config: cdktn.listMapper(awsPlanWorkflowStepAuroraServerlessScalingConfigPropertyToTerraform, true)(struct!.auroraServerlessScalingConfig),
    custom_action_lambda_config: cdktn.listMapper(awsPlanWorkflowStepCustomActionLambdaConfigPropertyToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktn.listMapper(awsPlanWorkflowStepDocumentDbConfigPropertyToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktn.listMapper(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigPropertyToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktn.listMapper(awsPlanWorkflowStepEcsCapacityIncreaseConfigPropertyToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktn.listMapper(awsPlanWorkflowStepEksResourceScalingConfigPropertyToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktn.listMapper(awsPlanWorkflowStepExecutionApprovalConfigPropertyToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktn.listMapper(awsPlanWorkflowStepGlobalAuroraConfigPropertyToTerraform, true)(struct!.globalAuroraConfig),
    lambda_event_source_mapping_config: cdktn.listMapper(awsPlanWorkflowStepLambdaEventSourceMappingConfigPropertyToTerraform, true)(struct!.lambdaEventSourceMappingConfig),
    neptune_global_database_config: cdktn.listMapper(awsPlanWorkflowStepNeptuneGlobalDatabaseConfigPropertyToTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
    parallel_config: cdktn.listMapper(awsPlanParallelConfigPropertyToTerraform, true)(struct!.parallelConfig),
    rds_create_cross_region_read_replica_config: cdktn.listMapper(awsPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyToTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
    rds_promote_read_replica_config: cdktn.listMapper(awsPlanWorkflowStepRdsPromoteReadReplicaConfigPropertyToTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
    region_switch_plan_config: cdktn.listMapper(awsPlanWorkflowStepRegionSwitchPlanConfigPropertyToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktn.listMapper(awsPlanWorkflowStepRoute53HealthCheckConfigPropertyToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function awsPlanWorkflowStepPropertyToHclTerraform(struct?: AwsPlan.WorkflowStepProperty | cdktn.IResolvable): any {
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
    execution_block_type: {
      value: cdktn.stringToHclTerraform(struct!.executionBlockType),
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
    arc_routing_control_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepArcRoutingControlConfigPropertyToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepArcRoutingControlConfigPropertyList",
    },
    aurora_provisioned_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepAuroraProvisionedScalingConfigPropertyToHclTerraform, true)(struct!.auroraProvisionedScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepAuroraProvisionedScalingConfigPropertyList",
    },
    aurora_serverless_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepAuroraServerlessScalingConfigPropertyToHclTerraform, true)(struct!.auroraServerlessScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepAuroraServerlessScalingConfigPropertyList",
    },
    custom_action_lambda_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepCustomActionLambdaConfigPropertyToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepCustomActionLambdaConfigPropertyList",
    },
    document_db_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepDocumentDbConfigPropertyToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepDocumentDbConfigPropertyList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEc2AsgCapacityIncreaseConfigPropertyToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEc2AsgCapacityIncreaseConfigPropertyList",
    },
    ecs_capacity_increase_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEcsCapacityIncreaseConfigPropertyToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEcsCapacityIncreaseConfigPropertyList",
    },
    eks_resource_scaling_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepEksResourceScalingConfigPropertyToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepEksResourceScalingConfigPropertyList",
    },
    execution_approval_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepExecutionApprovalConfigPropertyToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepExecutionApprovalConfigPropertyList",
    },
    global_aurora_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepGlobalAuroraConfigPropertyToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepGlobalAuroraConfigPropertyList",
    },
    lambda_event_source_mapping_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepLambdaEventSourceMappingConfigPropertyToHclTerraform, true)(struct!.lambdaEventSourceMappingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepLambdaEventSourceMappingConfigPropertyList",
    },
    neptune_global_database_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepNeptuneGlobalDatabaseConfigPropertyToHclTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepNeptuneGlobalDatabaseConfigPropertyList",
    },
    parallel_config: {
      value: cdktn.listMapperHcl(awsPlanParallelConfigPropertyToHclTerraform, true)(struct!.parallelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ParallelConfigPropertyList",
    },
    rds_create_cross_region_read_replica_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyToHclTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyList",
    },
    rds_promote_read_replica_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepRdsPromoteReadReplicaConfigPropertyToHclTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepRdsPromoteReadReplicaConfigPropertyList",
    },
    region_switch_plan_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepRegionSwitchPlanConfigPropertyToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepRegionSwitchPlanConfigPropertyList",
    },
    route53_health_check_config: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepRoute53HealthCheckConfigPropertyToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepRoute53HealthCheckConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPlanWorkflowPropertyToTerraform(struct?: AwsPlan.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workflow_description: cdktn.stringToTerraform(struct!.workflowDescription),
    workflow_target_action: cdktn.stringToTerraform(struct!.workflowTargetAction),
    workflow_target_region: cdktn.stringToTerraform(struct!.workflowTargetRegion),
    step: cdktn.listMapper(awsPlanWorkflowStepPropertyToTerraform, true)(struct!.step),
  }
}


export function awsPlanWorkflowPropertyToHclTerraform(struct?: AwsPlan.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workflow_description: {
      value: cdktn.stringToHclTerraform(struct!.workflowDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_action: {
      value: cdktn.stringToHclTerraform(struct!.workflowTargetAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_region: {
      value: cdktn.stringToHclTerraform(struct!.workflowTargetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktn.listMapperHcl(awsPlanWorkflowStepPropertyToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPlan {
export interface AssociatedAlarmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#alarm_type AwsPlan#alarm_type}
  */
  readonly alarmType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#map_block_key AwsPlan#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#resource_identifier AwsPlan#resource_identifier}
  */
  readonly resourceIdentifier: string;
}
export class AssociatedAlarmsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AssociatedAlarmsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmType = this._alarmType;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._resourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdentifier = this._resourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssociatedAlarmsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmType = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._mapBlockKey = undefined;
      this._resourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmType = value.alarmType;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._mapBlockKey = value.mapBlockKey;
      this._resourceIdentifier = value.resourceIdentifier;
    }
  }

  // alarm_type - computed: false, optional: false, required: true
  private _alarmType?: string; 
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }
  public set alarmType(value: string) {
    this._alarmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // resource_identifier - computed: false, optional: false, required: true
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }
}

export class AssociatedAlarmsPropertyList extends cdktn.ComplexList {
  public internalValue? : AssociatedAlarmsProperty[] | cdktn.IResolvable

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
  public get(index: number): AssociatedAlarmsPropertyOutputReference {
    return new AssociatedAlarmsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#bucket_owner AwsPlan#bucket_owner}
  */
  readonly bucketOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#bucket_path AwsPlan#bucket_path}
  */
  readonly bucketPath: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwner = undefined;
      this._bucketPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwner = value.bucketOwner;
      this._bucketPath = value.bucketPath;
    }
  }

  // bucket_owner - computed: false, optional: false, required: true
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // bucket_path - computed: false, optional: false, required: true
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }
}

export class S3ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ConfigurationPropertyOutputReference {
    return new S3ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportOutputProperty {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#s3_configuration AwsPlan#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty[] | cdktn.IResolvable;
}
export class ReportOutputPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReportOutputProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportOutputProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class ReportOutputPropertyList extends cdktn.ComplexList {
  public internalValue? : ReportOutputProperty[] | cdktn.IResolvable

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
  public get(index: number): ReportOutputPropertyOutputReference {
    return new ReportOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationProperty {
  /**
  * report_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#report_output AwsPlan#report_output}
  */
  readonly reportOutput?: ReportOutputProperty[] | cdktn.IResolvable;
}
export class ReportConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReportConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOutput = this._reportOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = value.reportOutput;
    }
  }

  // report_output - computed: false, optional: true, required: false
  private _reportOutput = new ReportOutputPropertyList(this, "report_output", false);
  public get reportOutput() {
    return this._reportOutput;
  }
  public putReportOutput(value: ReportOutputProperty[] | cdktn.IResolvable) {
    this._reportOutput.internalValue = value;
  }
  public resetReportOutput() {
    this._reportOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOutputInput() {
    return this._reportOutput.internalValue;
  }
}

export class ReportConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ReportConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ReportConfigurationPropertyOutputReference {
    return new ReportConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#create AwsPlan#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#delete AwsPlan#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#update AwsPlan#update}
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
export interface ConditionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#associated_alarm_name AwsPlan#associated_alarm_name}
  */
  readonly associatedAlarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#condition AwsPlan#condition}
  */
  readonly condition: string;
}
export class ConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConditionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedAlarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedAlarmName = this._associatedAlarmName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedAlarmName = undefined;
      this._condition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedAlarmName = value.associatedAlarmName;
      this._condition = value.condition;
    }
  }

  // associated_alarm_name - computed: false, optional: false, required: true
  private _associatedAlarmName?: string; 
  public get associatedAlarmName() {
    return this.getStringAttribute('associated_alarm_name');
  }
  public set associatedAlarmName(value: string) {
    this._associatedAlarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAlarmNameInput() {
    return this._associatedAlarmName;
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
}

export class ConditionsPropertyList extends cdktn.ComplexList {
  public internalValue? : ConditionsProperty[] | cdktn.IResolvable

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
  public get(index: number): ConditionsPropertyOutputReference {
    return new ConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#action AwsPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#description AwsPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#min_delay_minutes_between_executions AwsPlan#min_delay_minutes_between_executions}
  */
  readonly minDelayMinutesBetweenExecutions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_region AwsPlan#target_region}
  */
  readonly targetRegion: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#conditions AwsPlan#conditions}
  */
  readonly conditions?: ConditionsProperty[] | cdktn.IResolvable;
}
export class TriggersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._minDelayMinutesBetweenExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelayMinutesBetweenExecutions = this._minDelayMinutesBetweenExecutions;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._minDelayMinutesBetweenExecutions = undefined;
      this._targetRegion = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._minDelayMinutesBetweenExecutions = value.minDelayMinutesBetweenExecutions;
      this._targetRegion = value.targetRegion;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // min_delay_minutes_between_executions - computed: false, optional: false, required: true
  private _minDelayMinutesBetweenExecutions?: number; 
  public get minDelayMinutesBetweenExecutions() {
    return this.getNumberAttribute('min_delay_minutes_between_executions');
  }
  public set minDelayMinutesBetweenExecutions(value: number) {
    this._minDelayMinutesBetweenExecutions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayMinutesBetweenExecutionsInput() {
    return this._minDelayMinutesBetweenExecutions;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ConditionsPropertyList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ConditionsProperty[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class TriggersPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggersProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggersPropertyOutputReference {
    return new TriggersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#routing_control_arn AwsPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#state AwsPlan#state}
  */
  readonly state: string;
}
export class WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingControlArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControlArn = this._routingControlArn;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingControlArn = value.routingControlArn;
      this._state = value.state;
    }
  }

  // routing_control_arn - computed: false, optional: false, required: true
  private _routingControlArn?: string; 
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }
  public set routingControlArn(value: string) {
    this._routingControlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlArnInput() {
    return this._routingControlArn;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference {
    return new WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#routing_control AwsPlan#routing_control}
  */
  readonly routingControl?: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable;
}
export class WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._routingControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControl = this._routingControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._routingControl.internalValue = value.routingControl;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_control - computed: false, optional: true, required: false
  private _routingControl = new WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList(this, "routing_control", false);
  public get routingControl() {
    return this._routingControl;
  }
  public putRoutingControl(value: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable) {
    this._routingControl.internalValue = value;
  }
  public resetRoutingControl() {
    this._routingControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlInput() {
    return this._routingControl.internalValue;
  }
}

export class WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference {
    return new WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepArcRoutingControlConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_and_routing_controls AwsPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable;
}
export class WorkflowStepArcRoutingControlConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepArcRoutingControlConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionAndRoutingControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionAndRoutingControls = this._regionAndRoutingControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepArcRoutingControlConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionAndRoutingControls.internalValue = value.regionAndRoutingControls;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_and_routing_controls - computed: false, optional: true, required: false
  private _regionAndRoutingControls = new WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList(this, "region_and_routing_controls", true);
  public get regionAndRoutingControls() {
    return this._regionAndRoutingControls;
  }
  public putRegionAndRoutingControls(value: WorkflowStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable) {
    this._regionAndRoutingControls.internalValue = value;
  }
  public resetRegionAndRoutingControls() {
    this._regionAndRoutingControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionAndRoutingControlsInput() {
    return this._regionAndRoutingControls.internalValue;
  }
}

export class WorkflowStepArcRoutingControlConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepArcRoutingControlConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepArcRoutingControlConfigPropertyOutputReference {
    return new WorkflowStepArcRoutingControlConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepAuroraProvisionedScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#instance_arns AwsPlan#instance_arns}
  */
  readonly instanceArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepAuroraProvisionedScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._instanceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArns = this._instanceArns;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._instanceArns = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._instanceArns = value.instanceArns;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // instance_arns - computed: false, optional: false, required: true
  private _instanceArns?: { [key: string]: string }; 
  public get instanceArns() {
    return this.getStringMapAttribute('instance_arns');
  }
  public set instanceArns(value: { [key: string]: string }) {
    this._instanceArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnsInput() {
    return this._instanceArns;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepAuroraProvisionedScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepAuroraProvisionedScalingConfigPropertyOutputReference {
    return new WorkflowStepAuroraProvisionedScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepAuroraServerlessScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepAuroraServerlessScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepAuroraServerlessScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepAuroraServerlessScalingConfigPropertyOutputReference {
    return new WorkflowStepAuroraServerlessScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepCustomActionLambdaConfigLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepCustomActionLambdaConfigLambdaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepCustomActionLambdaConfigLambdaPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepCustomActionLambdaConfigLambdaPropertyOutputReference {
    return new WorkflowStepCustomActionLambdaConfigLambdaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepCustomActionLambdaConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
}
export class WorkflowStepCustomActionLambdaConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class WorkflowStepCustomActionLambdaConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepCustomActionLambdaConfigUngracefulPropertyOutputReference {
    return new WorkflowStepCustomActionLambdaConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepCustomActionLambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_to_run AwsPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#retry_interval_minutes AwsPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#lambda AwsPlan#lambda}
  */
  readonly lambda?: WorkflowStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepCustomActionLambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepCustomActionLambdaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionToRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionToRun = this._regionToRun;
    }
    if (this._retryIntervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalMinutes = this._retryIntervalMinutes;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepCustomActionLambdaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionToRun = value.regionToRun;
      this._retryIntervalMinutes = value.retryIntervalMinutes;
      this._timeoutMinutes = value.timeoutMinutes;
      this._lambda.internalValue = value.lambda;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // region_to_run - computed: false, optional: false, required: true
  private _regionToRun?: string; 
  public get regionToRun() {
    return this.getStringAttribute('region_to_run');
  }
  public set regionToRun(value: string) {
    this._regionToRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionToRunInput() {
    return this._regionToRun;
  }

  // retry_interval_minutes - computed: false, optional: false, required: true
  private _retryIntervalMinutes?: number; 
  public get retryIntervalMinutes() {
    return this.getNumberAttribute('retry_interval_minutes');
  }
  public set retryIntervalMinutes(value: number) {
    this._retryIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinutesInput() {
    return this._retryIntervalMinutes;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new WorkflowStepCustomActionLambdaConfigLambdaPropertyList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: WorkflowStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepCustomActionLambdaConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepCustomActionLambdaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepCustomActionLambdaConfigPropertyOutputReference {
    return new WorkflowStepCustomActionLambdaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepDocumentDbConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepDocumentDbConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepDocumentDbConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepDocumentDbConfigUngracefulPropertyOutputReference {
    return new WorkflowStepDocumentDbConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepDocumentDbConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#database_cluster_arns AwsPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepDocumentDbConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepDocumentDbConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepDocumentDbConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepDocumentDbConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepDocumentDbConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepDocumentDbConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepDocumentDbConfigPropertyOutputReference {
    return new WorkflowStepDocumentDbConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference {
    return new WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEc2AsgCapacityIncreaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#asg AwsPlan#asg}
  */
  readonly asg?: WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepEc2AsgCapacityIncreaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._asg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asg = this._asg?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._asg.internalValue = value.asg;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // asg - computed: false, optional: true, required: false
  private _asg = new WorkflowStepEc2AsgCapacityIncreaseConfigAsgPropertyList(this, "asg", false);
  public get asg() {
    return this._asg;
  }
  public putAsg(value: WorkflowStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable) {
    this._asg.internalValue = value;
  }
  public resetAsg() {
    this._asg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgInput() {
    return this._asg.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepEc2AsgCapacityIncreaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEc2AsgCapacityIncreaseConfigPropertyOutputReference {
    return new WorkflowStepEc2AsgCapacityIncreaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEcsCapacityIncreaseConfigServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cluster_arn AwsPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#service_arn AwsPlan#service_arn}
  */
  readonly serviceArn: string;
}
export class WorkflowStepEcsCapacityIncreaseConfigServicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._serviceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceArn = this._serviceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._serviceArn = value.serviceArn;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }
}

export class WorkflowStepEcsCapacityIncreaseConfigServicePropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEcsCapacityIncreaseConfigServicePropertyOutputReference {
    return new WorkflowStepEcsCapacityIncreaseConfigServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEcsCapacityIncreaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#service AwsPlan#service}
  */
  readonly service?: WorkflowStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepEcsCapacityIncreaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._service.internalValue = value.service;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // service - computed: false, optional: true, required: false
  private _service = new WorkflowStepEcsCapacityIncreaseConfigServicePropertyList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: WorkflowStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepEcsCapacityIncreaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepEcsCapacityIncreaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEcsCapacityIncreaseConfigPropertyOutputReference {
    return new WorkflowStepEcsCapacityIncreaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigEksClustersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cluster_arn AwsPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepEksResourceScalingConfigEksClustersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepEksResourceScalingConfigEksClustersPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigEksClustersPropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigEksClustersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#api_version AwsPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#kind AwsPlan#kind}
  */
  readonly kind: string;
}
export class WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#hpa_name AwsPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#name AwsPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#namespace AwsPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#resource_name AwsPlan#resource_name}
  */
  readonly resourceName: string;
}
export class WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaName = this._hpaName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hpaName = value.hpaName;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceName = value.resourceName;
    }
  }

  // hpa_name - computed: false, optional: true, required: false
  private _hpaName?: string; 
  public get hpaName() {
    return this.getStringAttribute('hpa_name');
  }
  public set hpaName(value: string) {
    this._hpaName = value;
  }
  public resetHpaName() {
    this._hpaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaNameInput() {
    return this._hpaName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigScalingResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#namespace AwsPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#resources AwsPlan#resources}
  */
  readonly resources?: WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable;
}
export class WorkflowStepEksResourceScalingConfigScalingResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._resources.internalValue = value.resources;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new WorkflowStepEksResourceScalingConfigScalingResourcesResourcesPropertyList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: WorkflowStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class WorkflowStepEksResourceScalingConfigScalingResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigScalingResourcesPropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigScalingResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepEksResourceScalingConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepEksResourceScalingConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigUngracefulPropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepEksResourceScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#eks_clusters AwsPlan#eks_clusters}
  */
  readonly eksClusters?: WorkflowStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type AwsPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#scaling_resources AwsPlan#scaling_resources}
  */
  readonly scalingResources?: WorkflowStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepEksResourceScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepEksResourceScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._eksClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusters = this._eksClusters?.internalValue;
    }
    if (this._kubernetesResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResourceType = this._kubernetesResourceType?.internalValue;
    }
    if (this._scalingResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingResources = this._scalingResources?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepEksResourceScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._eksClusters.internalValue = undefined;
      this._kubernetesResourceType.internalValue = undefined;
      this._scalingResources.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._eksClusters.internalValue = value.eksClusters;
      this._kubernetesResourceType.internalValue = value.kubernetesResourceType;
      this._scalingResources.internalValue = value.scalingResources;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: false, required: true
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // eks_clusters - computed: false, optional: true, required: false
  private _eksClusters = new WorkflowStepEksResourceScalingConfigEksClustersPropertyList(this, "eks_clusters", false);
  public get eksClusters() {
    return this._eksClusters;
  }
  public putEksClusters(value: WorkflowStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable) {
    this._eksClusters.internalValue = value;
  }
  public resetEksClusters() {
    this._eksClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClustersInput() {
    return this._eksClusters.internalValue;
  }

  // kubernetes_resource_type - computed: false, optional: true, required: false
  private _kubernetesResourceType = new WorkflowStepEksResourceScalingConfigKubernetesResourceTypePropertyList(this, "kubernetes_resource_type", false);
  public get kubernetesResourceType() {
    return this._kubernetesResourceType;
  }
  public putKubernetesResourceType(value: WorkflowStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable) {
    this._kubernetesResourceType.internalValue = value;
  }
  public resetKubernetesResourceType() {
    this._kubernetesResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceTypeInput() {
    return this._kubernetesResourceType.internalValue;
  }

  // scaling_resources - computed: false, optional: true, required: false
  private _scalingResources = new WorkflowStepEksResourceScalingConfigScalingResourcesPropertyList(this, "scaling_resources", false);
  public get scalingResources() {
    return this._scalingResources;
  }
  public putScalingResources(value: WorkflowStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable) {
    this._scalingResources.internalValue = value;
  }
  public resetScalingResources() {
    this._scalingResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourcesInput() {
    return this._scalingResources.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepEksResourceScalingConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepEksResourceScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepEksResourceScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepEksResourceScalingConfigPropertyOutputReference {
    return new WorkflowStepEksResourceScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepExecutionApprovalConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#approval_role AwsPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepExecutionApprovalConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepExecutionApprovalConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRole = this._approvalRole;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepExecutionApprovalConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalRole = value.approvalRole;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // approval_role - computed: false, optional: false, required: true
  private _approvalRole?: string; 
  public get approvalRole() {
    return this.getStringAttribute('approval_role');
  }
  public set approvalRole(value: string) {
    this._approvalRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRoleInput() {
    return this._approvalRole;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepExecutionApprovalConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepExecutionApprovalConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepExecutionApprovalConfigPropertyOutputReference {
    return new WorkflowStepExecutionApprovalConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepGlobalAuroraConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepGlobalAuroraConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepGlobalAuroraConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepGlobalAuroraConfigUngracefulPropertyOutputReference {
    return new WorkflowStepGlobalAuroraConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepGlobalAuroraConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#database_cluster_arns AwsPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepGlobalAuroraConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepGlobalAuroraConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepGlobalAuroraConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepGlobalAuroraConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepGlobalAuroraConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepGlobalAuroraConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepGlobalAuroraConfigPropertyOutputReference {
    return new WorkflowStepGlobalAuroraConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
}
export class WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._region = value.region;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference {
    return new WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
}
export class WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference {
    return new WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepLambdaEventSourceMappingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#action AwsPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_event_source_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_event_source_mapping AwsPlan#region_event_source_mapping}
  */
  readonly regionEventSourceMapping?: WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepLambdaEventSourceMappingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionEventSourceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionEventSourceMapping = this._regionEventSourceMapping?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._timeoutMinutes = undefined;
      this._regionEventSourceMapping.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionEventSourceMapping.internalValue = value.regionEventSourceMapping;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_event_source_mapping - computed: false, optional: true, required: false
  private _regionEventSourceMapping = new WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList(this, "region_event_source_mapping", true);
  public get regionEventSourceMapping() {
    return this._regionEventSourceMapping;
  }
  public putRegionEventSourceMapping(value: WorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable) {
    this._regionEventSourceMapping.internalValue = value;
  }
  public resetRegionEventSourceMapping() {
    this._regionEventSourceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionEventSourceMappingInput() {
    return this._regionEventSourceMapping.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepLambdaEventSourceMappingConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepLambdaEventSourceMappingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepLambdaEventSourceMappingConfigPropertyOutputReference {
    return new WorkflowStepLambdaEventSourceMappingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepNeptuneGlobalDatabaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepNeptuneGlobalDatabaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepNeptuneGlobalDatabaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepNeptuneGlobalDatabaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepNeptuneGlobalDatabaseConfigPropertyOutputReference {
    return new WorkflowStepNeptuneGlobalDatabaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#routing_control_arn AwsPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#state AwsPlan#state}
  */
  readonly state: string;
}
export class WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingControlArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControlArn = this._routingControlArn;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingControlArn = value.routingControlArn;
      this._state = value.state;
    }
  }

  // routing_control_arn - computed: false, optional: false, required: true
  private _routingControlArn?: string; 
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }
  public set routingControlArn(value: string) {
    this._routingControlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlArnInput() {
    return this._routingControlArn;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference {
    return new WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#routing_control AwsPlan#routing_control}
  */
  readonly routingControl?: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._routingControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControl = this._routingControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._routingControl.internalValue = value.routingControl;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_control - computed: false, optional: true, required: false
  private _routingControl = new WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlPropertyList(this, "routing_control", false);
  public get routingControl() {
    return this._routingControl;
  }
  public putRoutingControl(value: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlProperty[] | cdktn.IResolvable) {
    this._routingControl.internalValue = value;
  }
  public resetRoutingControl() {
    this._routingControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlInput() {
    return this._routingControl.internalValue;
  }
}

export class WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference {
    return new WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepArcRoutingControlConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_and_routing_controls AwsPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepArcRoutingControlConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionAndRoutingControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionAndRoutingControls = this._regionAndRoutingControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepArcRoutingControlConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionAndRoutingControls.internalValue = value.regionAndRoutingControls;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_and_routing_controls - computed: false, optional: true, required: false
  private _regionAndRoutingControls = new WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsPropertyList(this, "region_and_routing_controls", true);
  public get regionAndRoutingControls() {
    return this._regionAndRoutingControls;
  }
  public putRegionAndRoutingControls(value: WorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsProperty[] | cdktn.IResolvable) {
    this._regionAndRoutingControls.internalValue = value;
  }
  public resetRegionAndRoutingControls() {
    this._regionAndRoutingControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionAndRoutingControlsInput() {
    return this._regionAndRoutingControls.internalValue;
  }
}

export class WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepArcRoutingControlConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#instance_arns AwsPlan#instance_arns}
  */
  readonly instanceArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._instanceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArns = this._instanceArns;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._instanceArns = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._instanceArns = value.instanceArns;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // instance_arns - computed: false, optional: false, required: true
  private _instanceArns?: { [key: string]: string }; 
  public get instanceArns() {
    return this.getStringMapAttribute('instance_arns');
  }
  public set instanceArns(value: { [key: string]: string }) {
    this._instanceArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnsInput() {
    return this._instanceArns;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyOutputReference {
    return new WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
}
export class WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_to_run AwsPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#retry_interval_minutes AwsPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#lambda AwsPlan#lambda}
  */
  readonly lambda?: WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionToRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionToRun = this._regionToRun;
    }
    if (this._retryIntervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalMinutes = this._retryIntervalMinutes;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionToRun = value.regionToRun;
      this._retryIntervalMinutes = value.retryIntervalMinutes;
      this._timeoutMinutes = value.timeoutMinutes;
      this._lambda.internalValue = value.lambda;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // region_to_run - computed: false, optional: false, required: true
  private _regionToRun?: string; 
  public get regionToRun() {
    return this.getStringAttribute('region_to_run');
  }
  public set regionToRun(value: string) {
    this._regionToRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionToRunInput() {
    return this._regionToRun;
  }

  // retry_interval_minutes - computed: false, optional: false, required: true
  private _retryIntervalMinutes?: number; 
  public get retryIntervalMinutes() {
    return this.getNumberAttribute('retry_interval_minutes');
  }
  public set retryIntervalMinutes(value: number) {
    this._retryIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinutesInput() {
    return this._retryIntervalMinutes;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaPropertyList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaProperty[] | cdktn.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepDocumentDbConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#database_cluster_arns AwsPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepDocumentDbConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepDocumentDbConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepDocumentDbConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepDocumentDbConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepDocumentDbConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepDocumentDbConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepDocumentDbConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepDocumentDbConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepDocumentDbConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#asg AwsPlan#asg}
  */
  readonly asg?: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._asg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asg = this._asg?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._asg.internalValue = value.asg;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // asg - computed: false, optional: true, required: false
  private _asg = new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgPropertyList(this, "asg", false);
  public get asg() {
    return this._asg;
  }
  public putAsg(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgProperty[] | cdktn.IResolvable) {
    this._asg.internalValue = value;
  }
  public resetAsg() {
    this._asg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgInput() {
    return this._asg.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cluster_arn AwsPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#service_arn AwsPlan#service_arn}
  */
  readonly serviceArn: string;
}
export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._serviceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceArn = this._serviceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._serviceArn = value.serviceArn;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }
}

export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyOutputReference {
    return new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#service AwsPlan#service}
  */
  readonly service?: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._service.internalValue = value.service;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // service - computed: false, optional: true, required: false
  private _service = new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServicePropertyList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceProperty[] | cdktn.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cluster_arn AwsPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#api_version AwsPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#kind AwsPlan#kind}
  */
  readonly kind: string;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#hpa_name AwsPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#name AwsPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#namespace AwsPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#resource_name AwsPlan#resource_name}
  */
  readonly resourceName: string;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaName = this._hpaName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hpaName = value.hpaName;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceName = value.resourceName;
    }
  }

  // hpa_name - computed: false, optional: true, required: false
  private _hpaName?: string; 
  public get hpaName() {
    return this.getStringAttribute('hpa_name');
  }
  public set hpaName(value: string) {
    this._hpaName = value;
  }
  public resetHpaName() {
    this._hpaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaNameInput() {
    return this._hpaName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#namespace AwsPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#resources AwsPlan#resources}
  */
  readonly resources?: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._resources.internalValue = value.resources;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesPropertyList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesProperty[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#minimum_success_percentage AwsPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepEksResourceScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach AwsPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#target_percent AwsPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#eks_clusters AwsPlan#eks_clusters}
  */
  readonly eksClusters?: WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type AwsPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#scaling_resources AwsPlan#scaling_resources}
  */
  readonly scalingResources?: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepEksResourceScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._eksClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusters = this._eksClusters?.internalValue;
    }
    if (this._kubernetesResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResourceType = this._kubernetesResourceType?.internalValue;
    }
    if (this._scalingResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingResources = this._scalingResources?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepEksResourceScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._eksClusters.internalValue = undefined;
      this._kubernetesResourceType.internalValue = undefined;
      this._scalingResources.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._eksClusters.internalValue = value.eksClusters;
      this._kubernetesResourceType.internalValue = value.kubernetesResourceType;
      this._scalingResources.internalValue = value.scalingResources;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: false, required: true
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // eks_clusters - computed: false, optional: true, required: false
  private _eksClusters = new WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersPropertyList(this, "eks_clusters", false);
  public get eksClusters() {
    return this._eksClusters;
  }
  public putEksClusters(value: WorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersProperty[] | cdktn.IResolvable) {
    this._eksClusters.internalValue = value;
  }
  public resetEksClusters() {
    this._eksClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClustersInput() {
    return this._eksClusters.internalValue;
  }

  // kubernetes_resource_type - computed: false, optional: true, required: false
  private _kubernetesResourceType = new WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypePropertyList(this, "kubernetes_resource_type", false);
  public get kubernetesResourceType() {
    return this._kubernetesResourceType;
  }
  public putKubernetesResourceType(value: WorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeProperty[] | cdktn.IResolvable) {
    this._kubernetesResourceType.internalValue = value;
  }
  public resetKubernetesResourceType() {
    this._kubernetesResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceTypeInput() {
    return this._kubernetesResourceType.internalValue;
  }

  // scaling_resources - computed: false, optional: true, required: false
  private _scalingResources = new WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesPropertyList(this, "scaling_resources", false);
  public get scalingResources() {
    return this._scalingResources;
  }
  public putScalingResources(value: WorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesProperty[] | cdktn.IResolvable) {
    this._scalingResources.internalValue = value;
  }
  public resetScalingResources() {
    this._scalingResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourcesInput() {
    return this._scalingResources.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepEksResourceScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepExecutionApprovalConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#approval_role AwsPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepExecutionApprovalConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRole = this._approvalRole;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepExecutionApprovalConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalRole = value.approvalRole;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // approval_role - computed: false, optional: false, required: true
  private _approvalRole?: string; 
  public get approvalRole() {
    return this.getStringAttribute('approval_role');
  }
  public set approvalRole(value: string) {
    this._approvalRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRoleInput() {
    return this._approvalRole;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepExecutionApprovalConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepGlobalAuroraConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#database_cluster_arns AwsPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepGlobalAuroraConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepGlobalAuroraConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepGlobalAuroraConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
}
export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._region = value.region;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference {
    return new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
}
export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#action AwsPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_event_source_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_event_source_mapping AwsPlan#region_event_source_mapping}
  */
  readonly regionEventSourceMapping?: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionEventSourceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionEventSourceMapping = this._regionEventSourceMapping?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._timeoutMinutes = undefined;
      this._regionEventSourceMapping.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionEventSourceMapping.internalValue = value.regionEventSourceMapping;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_event_source_mapping - computed: false, optional: true, required: false
  private _regionEventSourceMapping = new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingPropertyList(this, "region_event_source_mapping", true);
  public get regionEventSourceMapping() {
    return this._regionEventSourceMapping;
  }
  public putRegionEventSourceMapping(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingProperty[] | cdktn.IResolvable) {
    this._regionEventSourceMapping.internalValue = value;
  }
  public resetRegionEventSourceMapping() {
    this._regionEventSourceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionEventSourceMappingInput() {
    return this._regionEventSourceMapping.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful: string;
}
export class WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference {
    return new WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#behavior AwsPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_cluster_identifier AwsPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns AwsPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ungraceful AwsPlan#ungraceful}
  */
  readonly ungraceful?: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulPropertyList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulProperty[] | cdktn.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#db_instance_arn_map AwsPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#db_instance_arn_map AwsPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_set_identifier AwsPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
}
export class WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetIdentifier = this._recordSetIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = value.recordSetIdentifier;
      this._region = value.region;
    }
  }

  // record_set_identifier - computed: false, optional: false, required: true
  private _recordSetIdentifier?: string; 
  public get recordSetIdentifier() {
    return this.getStringAttribute('record_set_identifier');
  }
  public set recordSetIdentifier(value: string) {
    this._recordSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdentifierInput() {
    return this._recordSetIdentifier;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyOutputReference {
    return new WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#hosted_zone_id AwsPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_name AwsPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_set AwsPlan#record_set}
  */
  readonly recordSet?: WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._recordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSet = this._recordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._hostedZoneId = undefined;
      this._recordName = undefined;
      this._timeoutMinutes = undefined;
      this._recordSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._hostedZoneId = value.hostedZoneId;
      this._recordName = value.recordName;
      this._timeoutMinutes = value.timeoutMinutes;
      this._recordSet.internalValue = value.recordSet;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // record_set - computed: false, optional: true, required: false
  private _recordSet = new WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetPropertyList(this, "record_set", false);
  public get recordSet() {
    return this._recordSet;
  }
  public putRecordSet(value: WorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable) {
    this._recordSet.internalValue = value;
  }
  public resetRecordSet() {
    this._recordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetInput() {
    return this._recordSet.internalValue;
  }
}

export class WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyOutputReference {
    return new WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepParallelConfigStepProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#description AwsPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#execution_block_type AwsPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#name AwsPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arc_routing_control_config AwsPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: WorkflowStepParallelConfigStepArcRoutingControlConfigProperty[] | cdktn.IResolvable;
  /**
  * aurora_provisioned_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#aurora_provisioned_scaling_config AwsPlan#aurora_provisioned_scaling_config}
  */
  readonly auroraProvisionedScalingConfig?: WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * aurora_serverless_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#aurora_serverless_scaling_config AwsPlan#aurora_serverless_scaling_config}
  */
  readonly auroraServerlessScalingConfig?: WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config AwsPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#document_db_config AwsPlan#document_db_config}
  */
  readonly documentDbConfig?: WorkflowStepParallelConfigStepDocumentDbConfigProperty[] | cdktn.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config AwsPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config AwsPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config AwsPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: WorkflowStepParallelConfigStepEksResourceScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#execution_approval_config AwsPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: WorkflowStepParallelConfigStepExecutionApprovalConfigProperty[] | cdktn.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_aurora_config AwsPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: WorkflowStepParallelConfigStepGlobalAuroraConfigProperty[] | cdktn.IResolvable;
  /**
  * lambda_event_source_mapping_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#lambda_event_source_mapping_config AwsPlan#lambda_event_source_mapping_config}
  */
  readonly lambdaEventSourceMappingConfig?: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable;
  /**
  * neptune_global_database_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#neptune_global_database_config AwsPlan#neptune_global_database_config}
  */
  readonly neptuneGlobalDatabaseConfig?: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable;
  /**
  * rds_create_cross_region_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#rds_create_cross_region_read_replica_config AwsPlan#rds_create_cross_region_read_replica_config}
  */
  readonly rdsCreateCrossRegionReadReplicaConfig?: WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable;
  /**
  * rds_promote_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#rds_promote_read_replica_config AwsPlan#rds_promote_read_replica_config}
  */
  readonly rdsPromoteReadReplicaConfig?: WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_switch_plan_config AwsPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#route53_health_check_config AwsPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable;
}
export class WorkflowStepParallelConfigStepPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepParallelConfigStepProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executionBlockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionBlockType = this._executionBlockType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._arcRoutingControlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arcRoutingControlConfig = this._arcRoutingControlConfig?.internalValue;
    }
    if (this._auroraProvisionedScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraProvisionedScalingConfig = this._auroraProvisionedScalingConfig?.internalValue;
    }
    if (this._auroraServerlessScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraServerlessScalingConfig = this._auroraServerlessScalingConfig?.internalValue;
    }
    if (this._customActionLambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionLambdaConfig = this._customActionLambdaConfig?.internalValue;
    }
    if (this._documentDbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDbConfig = this._documentDbConfig?.internalValue;
    }
    if (this._ec2AsgCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2AsgCapacityIncreaseConfig = this._ec2AsgCapacityIncreaseConfig?.internalValue;
    }
    if (this._ecsCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsCapacityIncreaseConfig = this._ecsCapacityIncreaseConfig?.internalValue;
    }
    if (this._eksResourceScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksResourceScalingConfig = this._eksResourceScalingConfig?.internalValue;
    }
    if (this._executionApprovalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionApprovalConfig = this._executionApprovalConfig?.internalValue;
    }
    if (this._globalAuroraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAuroraConfig = this._globalAuroraConfig?.internalValue;
    }
    if (this._lambdaEventSourceMappingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaEventSourceMappingConfig = this._lambdaEventSourceMappingConfig?.internalValue;
    }
    if (this._neptuneGlobalDatabaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneGlobalDatabaseConfig = this._neptuneGlobalDatabaseConfig?.internalValue;
    }
    if (this._rdsCreateCrossRegionReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsCreateCrossRegionReadReplicaConfig = this._rdsCreateCrossRegionReadReplicaConfig?.internalValue;
    }
    if (this._rdsPromoteReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsPromoteReadReplicaConfig = this._rdsPromoteReadReplicaConfig?.internalValue;
    }
    if (this._regionSwitchPlanConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionSwitchPlanConfig = this._regionSwitchPlanConfig?.internalValue;
    }
    if (this._route53HealthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53HealthCheckConfig = this._route53HealthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepParallelConfigStepProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._auroraProvisionedScalingConfig.internalValue = undefined;
      this._auroraServerlessScalingConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._lambdaEventSourceMappingConfig.internalValue = undefined;
      this._neptuneGlobalDatabaseConfig.internalValue = undefined;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
      this._rdsPromoteReadReplicaConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._executionBlockType = value.executionBlockType;
      this._name = value.name;
      this._arcRoutingControlConfig.internalValue = value.arcRoutingControlConfig;
      this._auroraProvisionedScalingConfig.internalValue = value.auroraProvisionedScalingConfig;
      this._auroraServerlessScalingConfig.internalValue = value.auroraServerlessScalingConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._lambdaEventSourceMappingConfig.internalValue = value.lambdaEventSourceMappingConfig;
      this._neptuneGlobalDatabaseConfig.internalValue = value.neptuneGlobalDatabaseConfig;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value.rdsCreateCrossRegionReadReplicaConfig;
      this._rdsPromoteReadReplicaConfig.internalValue = value.rdsPromoteReadReplicaConfig;
      this._regionSwitchPlanConfig.internalValue = value.regionSwitchPlanConfig;
      this._route53HealthCheckConfig.internalValue = value.route53HealthCheckConfig;
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

  // execution_block_type - computed: false, optional: false, required: true
  private _executionBlockType?: string; 
  public get executionBlockType() {
    return this.getStringAttribute('execution_block_type');
  }
  public set executionBlockType(value: string) {
    this._executionBlockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionBlockTypeInput() {
    return this._executionBlockType;
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

  // arc_routing_control_config - computed: false, optional: true, required: false
  private _arcRoutingControlConfig = new WorkflowStepParallelConfigStepArcRoutingControlConfigPropertyList(this, "arc_routing_control_config", false);
  public get arcRoutingControlConfig() {
    return this._arcRoutingControlConfig;
  }
  public putArcRoutingControlConfig(value: WorkflowStepParallelConfigStepArcRoutingControlConfigProperty[] | cdktn.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // aurora_provisioned_scaling_config - computed: false, optional: true, required: false
  private _auroraProvisionedScalingConfig = new WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigPropertyList(this, "aurora_provisioned_scaling_config", false);
  public get auroraProvisionedScalingConfig() {
    return this._auroraProvisionedScalingConfig;
  }
  public putAuroraProvisionedScalingConfig(value: WorkflowStepParallelConfigStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable) {
    this._auroraProvisionedScalingConfig.internalValue = value;
  }
  public resetAuroraProvisionedScalingConfig() {
    this._auroraProvisionedScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraProvisionedScalingConfigInput() {
    return this._auroraProvisionedScalingConfig.internalValue;
  }

  // aurora_serverless_scaling_config - computed: false, optional: true, required: false
  private _auroraServerlessScalingConfig = new WorkflowStepParallelConfigStepAuroraServerlessScalingConfigPropertyList(this, "aurora_serverless_scaling_config", false);
  public get auroraServerlessScalingConfig() {
    return this._auroraServerlessScalingConfig;
  }
  public putAuroraServerlessScalingConfig(value: WorkflowStepParallelConfigStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable) {
    this._auroraServerlessScalingConfig.internalValue = value;
  }
  public resetAuroraServerlessScalingConfig() {
    this._auroraServerlessScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraServerlessScalingConfigInput() {
    return this._auroraServerlessScalingConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new WorkflowStepParallelConfigStepCustomActionLambdaConfigPropertyList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: WorkflowStepParallelConfigStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable) {
    this._customActionLambdaConfig.internalValue = value;
  }
  public resetCustomActionLambdaConfig() {
    this._customActionLambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionLambdaConfigInput() {
    return this._customActionLambdaConfig.internalValue;
  }

  // document_db_config - computed: false, optional: true, required: false
  private _documentDbConfig = new WorkflowStepParallelConfigStepDocumentDbConfigPropertyList(this, "document_db_config", false);
  public get documentDbConfig() {
    return this._documentDbConfig;
  }
  public putDocumentDbConfig(value: WorkflowStepParallelConfigStepDocumentDbConfigProperty[] | cdktn.IResolvable) {
    this._documentDbConfig.internalValue = value;
  }
  public resetDocumentDbConfig() {
    this._documentDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbConfigInput() {
    return this._documentDbConfig.internalValue;
  }

  // ec2_asg_capacity_increase_config - computed: false, optional: true, required: false
  private _ec2AsgCapacityIncreaseConfig = new WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigPropertyList(this, "ec2_asg_capacity_increase_config", false);
  public get ec2AsgCapacityIncreaseConfig() {
    return this._ec2AsgCapacityIncreaseConfig;
  }
  public putEc2AsgCapacityIncreaseConfig(value: WorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable) {
    this._ec2AsgCapacityIncreaseConfig.internalValue = value;
  }
  public resetEc2AsgCapacityIncreaseConfig() {
    this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AsgCapacityIncreaseConfigInput() {
    return this._ec2AsgCapacityIncreaseConfig.internalValue;
  }

  // ecs_capacity_increase_config - computed: false, optional: true, required: false
  private _ecsCapacityIncreaseConfig = new WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigPropertyList(this, "ecs_capacity_increase_config", false);
  public get ecsCapacityIncreaseConfig() {
    return this._ecsCapacityIncreaseConfig;
  }
  public putEcsCapacityIncreaseConfig(value: WorkflowStepParallelConfigStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable) {
    this._ecsCapacityIncreaseConfig.internalValue = value;
  }
  public resetEcsCapacityIncreaseConfig() {
    this._ecsCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsCapacityIncreaseConfigInput() {
    return this._ecsCapacityIncreaseConfig.internalValue;
  }

  // eks_resource_scaling_config - computed: false, optional: true, required: false
  private _eksResourceScalingConfig = new WorkflowStepParallelConfigStepEksResourceScalingConfigPropertyList(this, "eks_resource_scaling_config", false);
  public get eksResourceScalingConfig() {
    return this._eksResourceScalingConfig;
  }
  public putEksResourceScalingConfig(value: WorkflowStepParallelConfigStepEksResourceScalingConfigProperty[] | cdktn.IResolvable) {
    this._eksResourceScalingConfig.internalValue = value;
  }
  public resetEksResourceScalingConfig() {
    this._eksResourceScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksResourceScalingConfigInput() {
    return this._eksResourceScalingConfig.internalValue;
  }

  // execution_approval_config - computed: false, optional: true, required: false
  private _executionApprovalConfig = new WorkflowStepParallelConfigStepExecutionApprovalConfigPropertyList(this, "execution_approval_config", false);
  public get executionApprovalConfig() {
    return this._executionApprovalConfig;
  }
  public putExecutionApprovalConfig(value: WorkflowStepParallelConfigStepExecutionApprovalConfigProperty[] | cdktn.IResolvable) {
    this._executionApprovalConfig.internalValue = value;
  }
  public resetExecutionApprovalConfig() {
    this._executionApprovalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionApprovalConfigInput() {
    return this._executionApprovalConfig.internalValue;
  }

  // global_aurora_config - computed: false, optional: true, required: false
  private _globalAuroraConfig = new WorkflowStepParallelConfigStepGlobalAuroraConfigPropertyList(this, "global_aurora_config", false);
  public get globalAuroraConfig() {
    return this._globalAuroraConfig;
  }
  public putGlobalAuroraConfig(value: WorkflowStepParallelConfigStepGlobalAuroraConfigProperty[] | cdktn.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // lambda_event_source_mapping_config - computed: false, optional: true, required: false
  private _lambdaEventSourceMappingConfig = new WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigPropertyList(this, "lambda_event_source_mapping_config", false);
  public get lambdaEventSourceMappingConfig() {
    return this._lambdaEventSourceMappingConfig;
  }
  public putLambdaEventSourceMappingConfig(value: WorkflowStepParallelConfigStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable) {
    this._lambdaEventSourceMappingConfig.internalValue = value;
  }
  public resetLambdaEventSourceMappingConfig() {
    this._lambdaEventSourceMappingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaEventSourceMappingConfigInput() {
    return this._lambdaEventSourceMappingConfig.internalValue;
  }

  // neptune_global_database_config - computed: false, optional: true, required: false
  private _neptuneGlobalDatabaseConfig = new WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigPropertyList(this, "neptune_global_database_config", false);
  public get neptuneGlobalDatabaseConfig() {
    return this._neptuneGlobalDatabaseConfig;
  }
  public putNeptuneGlobalDatabaseConfig(value: WorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable) {
    this._neptuneGlobalDatabaseConfig.internalValue = value;
  }
  public resetNeptuneGlobalDatabaseConfig() {
    this._neptuneGlobalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneGlobalDatabaseConfigInput() {
    return this._neptuneGlobalDatabaseConfig.internalValue;
  }

  // rds_create_cross_region_read_replica_config - computed: false, optional: true, required: false
  private _rdsCreateCrossRegionReadReplicaConfig = new WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigPropertyList(this, "rds_create_cross_region_read_replica_config", false);
  public get rdsCreateCrossRegionReadReplicaConfig() {
    return this._rdsCreateCrossRegionReadReplicaConfig;
  }
  public putRdsCreateCrossRegionReadReplicaConfig(value: WorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable) {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value;
  }
  public resetRdsCreateCrossRegionReadReplicaConfig() {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsCreateCrossRegionReadReplicaConfigInput() {
    return this._rdsCreateCrossRegionReadReplicaConfig.internalValue;
  }

  // rds_promote_read_replica_config - computed: false, optional: true, required: false
  private _rdsPromoteReadReplicaConfig = new WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigPropertyList(this, "rds_promote_read_replica_config", false);
  public get rdsPromoteReadReplicaConfig() {
    return this._rdsPromoteReadReplicaConfig;
  }
  public putRdsPromoteReadReplicaConfig(value: WorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable) {
    this._rdsPromoteReadReplicaConfig.internalValue = value;
  }
  public resetRdsPromoteReadReplicaConfig() {
    this._rdsPromoteReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsPromoteReadReplicaConfigInput() {
    return this._rdsPromoteReadReplicaConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new WorkflowStepParallelConfigStepRegionSwitchPlanConfigPropertyList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: WorkflowStepParallelConfigStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable) {
    this._regionSwitchPlanConfig.internalValue = value;
  }
  public resetRegionSwitchPlanConfig() {
    this._regionSwitchPlanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSwitchPlanConfigInput() {
    return this._regionSwitchPlanConfig.internalValue;
  }

  // route53_health_check_config - computed: false, optional: true, required: false
  private _route53HealthCheckConfig = new WorkflowStepParallelConfigStepRoute53HealthCheckConfigPropertyList(this, "route53_health_check_config", false);
  public get route53HealthCheckConfig() {
    return this._route53HealthCheckConfig;
  }
  public putRoute53HealthCheckConfig(value: WorkflowStepParallelConfigStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable) {
    this._route53HealthCheckConfig.internalValue = value;
  }
  public resetRoute53HealthCheckConfig() {
    this._route53HealthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53HealthCheckConfigInput() {
    return this._route53HealthCheckConfig.internalValue;
  }
}

export class WorkflowStepParallelConfigStepPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepParallelConfigStepProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepParallelConfigStepPropertyOutputReference {
    return new WorkflowStepParallelConfigStepPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParallelConfigProperty {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#step AwsPlan#step}
  */
  readonly step?: WorkflowStepParallelConfigStepProperty[] | cdktn.IResolvable;
}
export class ParallelConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParallelConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParallelConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: true, required: false
  private _step = new WorkflowStepParallelConfigStepPropertyList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: WorkflowStepParallelConfigStepProperty[] | cdktn.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class ParallelConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ParallelConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ParallelConfigPropertyOutputReference {
    return new ParallelConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#db_instance_arn_map AwsPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference {
    return new WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepRdsPromoteReadReplicaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#db_instance_arn_map AwsPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class WorkflowStepRdsPromoteReadReplicaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepRdsPromoteReadReplicaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class WorkflowStepRdsPromoteReadReplicaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepRdsPromoteReadReplicaConfigPropertyOutputReference {
    return new WorkflowStepRdsPromoteReadReplicaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepRegionSwitchPlanConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arn AwsPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
}
export class WorkflowStepRegionSwitchPlanConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepRegionSwitchPlanConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepRegionSwitchPlanConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class WorkflowStepRegionSwitchPlanConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepRegionSwitchPlanConfigPropertyOutputReference {
    return new WorkflowStepRegionSwitchPlanConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepRoute53HealthCheckConfigRecordSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_set_identifier AwsPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region AwsPlan#region}
  */
  readonly region: string;
}
export class WorkflowStepRoute53HealthCheckConfigRecordSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetIdentifier = this._recordSetIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepRoute53HealthCheckConfigRecordSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = value.recordSetIdentifier;
      this._region = value.region;
    }
  }

  // record_set_identifier - computed: false, optional: false, required: true
  private _recordSetIdentifier?: string; 
  public get recordSetIdentifier() {
    return this.getStringAttribute('record_set_identifier');
  }
  public set recordSetIdentifier(value: string) {
    this._recordSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdentifierInput() {
    return this._recordSetIdentifier;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkflowStepRoute53HealthCheckConfigRecordSetPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepRoute53HealthCheckConfigRecordSetPropertyOutputReference {
    return new WorkflowStepRoute53HealthCheckConfigRecordSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepRoute53HealthCheckConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#cross_account_role AwsPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#external_id AwsPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#hosted_zone_id AwsPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_name AwsPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#timeout_minutes AwsPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#record_set AwsPlan#record_set}
  */
  readonly recordSet?: WorkflowStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable;
}
export class WorkflowStepRoute53HealthCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepRoute53HealthCheckConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._recordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSet = this._recordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepRoute53HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._hostedZoneId = undefined;
      this._recordName = undefined;
      this._timeoutMinutes = undefined;
      this._recordSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._hostedZoneId = value.hostedZoneId;
      this._recordName = value.recordName;
      this._timeoutMinutes = value.timeoutMinutes;
      this._recordSet.internalValue = value.recordSet;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // record_set - computed: false, optional: true, required: false
  private _recordSet = new WorkflowStepRoute53HealthCheckConfigRecordSetPropertyList(this, "record_set", false);
  public get recordSet() {
    return this._recordSet;
  }
  public putRecordSet(value: WorkflowStepRoute53HealthCheckConfigRecordSetProperty[] | cdktn.IResolvable) {
    this._recordSet.internalValue = value;
  }
  public resetRecordSet() {
    this._recordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetInput() {
    return this._recordSet.internalValue;
  }
}

export class WorkflowStepRoute53HealthCheckConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepRoute53HealthCheckConfigPropertyOutputReference {
    return new WorkflowStepRoute53HealthCheckConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#description AwsPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#execution_block_type AwsPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#name AwsPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#arc_routing_control_config AwsPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: WorkflowStepArcRoutingControlConfigProperty[] | cdktn.IResolvable;
  /**
  * aurora_provisioned_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#aurora_provisioned_scaling_config AwsPlan#aurora_provisioned_scaling_config}
  */
  readonly auroraProvisionedScalingConfig?: WorkflowStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * aurora_serverless_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#aurora_serverless_scaling_config AwsPlan#aurora_serverless_scaling_config}
  */
  readonly auroraServerlessScalingConfig?: WorkflowStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config AwsPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: WorkflowStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#document_db_config AwsPlan#document_db_config}
  */
  readonly documentDbConfig?: WorkflowStepDocumentDbConfigProperty[] | cdktn.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config AwsPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: WorkflowStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config AwsPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: WorkflowStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config AwsPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: WorkflowStepEksResourceScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#execution_approval_config AwsPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: WorkflowStepExecutionApprovalConfigProperty[] | cdktn.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#global_aurora_config AwsPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: WorkflowStepGlobalAuroraConfigProperty[] | cdktn.IResolvable;
  /**
  * lambda_event_source_mapping_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#lambda_event_source_mapping_config AwsPlan#lambda_event_source_mapping_config}
  */
  readonly lambdaEventSourceMappingConfig?: WorkflowStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable;
  /**
  * neptune_global_database_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#neptune_global_database_config AwsPlan#neptune_global_database_config}
  */
  readonly neptuneGlobalDatabaseConfig?: WorkflowStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable;
  /**
  * parallel_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#parallel_config AwsPlan#parallel_config}
  */
  readonly parallelConfig?: ParallelConfigProperty[] | cdktn.IResolvable;
  /**
  * rds_create_cross_region_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#rds_create_cross_region_read_replica_config AwsPlan#rds_create_cross_region_read_replica_config}
  */
  readonly rdsCreateCrossRegionReadReplicaConfig?: WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable;
  /**
  * rds_promote_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#rds_promote_read_replica_config AwsPlan#rds_promote_read_replica_config}
  */
  readonly rdsPromoteReadReplicaConfig?: WorkflowStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#region_switch_plan_config AwsPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: WorkflowStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#route53_health_check_config AwsPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: WorkflowStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable;
}
export class WorkflowStepPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowStepProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executionBlockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionBlockType = this._executionBlockType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._arcRoutingControlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arcRoutingControlConfig = this._arcRoutingControlConfig?.internalValue;
    }
    if (this._auroraProvisionedScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraProvisionedScalingConfig = this._auroraProvisionedScalingConfig?.internalValue;
    }
    if (this._auroraServerlessScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraServerlessScalingConfig = this._auroraServerlessScalingConfig?.internalValue;
    }
    if (this._customActionLambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionLambdaConfig = this._customActionLambdaConfig?.internalValue;
    }
    if (this._documentDbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDbConfig = this._documentDbConfig?.internalValue;
    }
    if (this._ec2AsgCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2AsgCapacityIncreaseConfig = this._ec2AsgCapacityIncreaseConfig?.internalValue;
    }
    if (this._ecsCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsCapacityIncreaseConfig = this._ecsCapacityIncreaseConfig?.internalValue;
    }
    if (this._eksResourceScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksResourceScalingConfig = this._eksResourceScalingConfig?.internalValue;
    }
    if (this._executionApprovalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionApprovalConfig = this._executionApprovalConfig?.internalValue;
    }
    if (this._globalAuroraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAuroraConfig = this._globalAuroraConfig?.internalValue;
    }
    if (this._lambdaEventSourceMappingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaEventSourceMappingConfig = this._lambdaEventSourceMappingConfig?.internalValue;
    }
    if (this._neptuneGlobalDatabaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneGlobalDatabaseConfig = this._neptuneGlobalDatabaseConfig?.internalValue;
    }
    if (this._parallelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelConfig = this._parallelConfig?.internalValue;
    }
    if (this._rdsCreateCrossRegionReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsCreateCrossRegionReadReplicaConfig = this._rdsCreateCrossRegionReadReplicaConfig?.internalValue;
    }
    if (this._rdsPromoteReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsPromoteReadReplicaConfig = this._rdsPromoteReadReplicaConfig?.internalValue;
    }
    if (this._regionSwitchPlanConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionSwitchPlanConfig = this._regionSwitchPlanConfig?.internalValue;
    }
    if (this._route53HealthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53HealthCheckConfig = this._route53HealthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._auroraProvisionedScalingConfig.internalValue = undefined;
      this._auroraServerlessScalingConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._lambdaEventSourceMappingConfig.internalValue = undefined;
      this._neptuneGlobalDatabaseConfig.internalValue = undefined;
      this._parallelConfig.internalValue = undefined;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
      this._rdsPromoteReadReplicaConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._executionBlockType = value.executionBlockType;
      this._name = value.name;
      this._arcRoutingControlConfig.internalValue = value.arcRoutingControlConfig;
      this._auroraProvisionedScalingConfig.internalValue = value.auroraProvisionedScalingConfig;
      this._auroraServerlessScalingConfig.internalValue = value.auroraServerlessScalingConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._lambdaEventSourceMappingConfig.internalValue = value.lambdaEventSourceMappingConfig;
      this._neptuneGlobalDatabaseConfig.internalValue = value.neptuneGlobalDatabaseConfig;
      this._parallelConfig.internalValue = value.parallelConfig;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value.rdsCreateCrossRegionReadReplicaConfig;
      this._rdsPromoteReadReplicaConfig.internalValue = value.rdsPromoteReadReplicaConfig;
      this._regionSwitchPlanConfig.internalValue = value.regionSwitchPlanConfig;
      this._route53HealthCheckConfig.internalValue = value.route53HealthCheckConfig;
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

  // execution_block_type - computed: false, optional: false, required: true
  private _executionBlockType?: string; 
  public get executionBlockType() {
    return this.getStringAttribute('execution_block_type');
  }
  public set executionBlockType(value: string) {
    this._executionBlockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionBlockTypeInput() {
    return this._executionBlockType;
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

  // arc_routing_control_config - computed: false, optional: true, required: false
  private _arcRoutingControlConfig = new WorkflowStepArcRoutingControlConfigPropertyList(this, "arc_routing_control_config", false);
  public get arcRoutingControlConfig() {
    return this._arcRoutingControlConfig;
  }
  public putArcRoutingControlConfig(value: WorkflowStepArcRoutingControlConfigProperty[] | cdktn.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // aurora_provisioned_scaling_config - computed: false, optional: true, required: false
  private _auroraProvisionedScalingConfig = new WorkflowStepAuroraProvisionedScalingConfigPropertyList(this, "aurora_provisioned_scaling_config", false);
  public get auroraProvisionedScalingConfig() {
    return this._auroraProvisionedScalingConfig;
  }
  public putAuroraProvisionedScalingConfig(value: WorkflowStepAuroraProvisionedScalingConfigProperty[] | cdktn.IResolvable) {
    this._auroraProvisionedScalingConfig.internalValue = value;
  }
  public resetAuroraProvisionedScalingConfig() {
    this._auroraProvisionedScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraProvisionedScalingConfigInput() {
    return this._auroraProvisionedScalingConfig.internalValue;
  }

  // aurora_serverless_scaling_config - computed: false, optional: true, required: false
  private _auroraServerlessScalingConfig = new WorkflowStepAuroraServerlessScalingConfigPropertyList(this, "aurora_serverless_scaling_config", false);
  public get auroraServerlessScalingConfig() {
    return this._auroraServerlessScalingConfig;
  }
  public putAuroraServerlessScalingConfig(value: WorkflowStepAuroraServerlessScalingConfigProperty[] | cdktn.IResolvable) {
    this._auroraServerlessScalingConfig.internalValue = value;
  }
  public resetAuroraServerlessScalingConfig() {
    this._auroraServerlessScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraServerlessScalingConfigInput() {
    return this._auroraServerlessScalingConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new WorkflowStepCustomActionLambdaConfigPropertyList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: WorkflowStepCustomActionLambdaConfigProperty[] | cdktn.IResolvable) {
    this._customActionLambdaConfig.internalValue = value;
  }
  public resetCustomActionLambdaConfig() {
    this._customActionLambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionLambdaConfigInput() {
    return this._customActionLambdaConfig.internalValue;
  }

  // document_db_config - computed: false, optional: true, required: false
  private _documentDbConfig = new WorkflowStepDocumentDbConfigPropertyList(this, "document_db_config", false);
  public get documentDbConfig() {
    return this._documentDbConfig;
  }
  public putDocumentDbConfig(value: WorkflowStepDocumentDbConfigProperty[] | cdktn.IResolvable) {
    this._documentDbConfig.internalValue = value;
  }
  public resetDocumentDbConfig() {
    this._documentDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbConfigInput() {
    return this._documentDbConfig.internalValue;
  }

  // ec2_asg_capacity_increase_config - computed: false, optional: true, required: false
  private _ec2AsgCapacityIncreaseConfig = new WorkflowStepEc2AsgCapacityIncreaseConfigPropertyList(this, "ec2_asg_capacity_increase_config", false);
  public get ec2AsgCapacityIncreaseConfig() {
    return this._ec2AsgCapacityIncreaseConfig;
  }
  public putEc2AsgCapacityIncreaseConfig(value: WorkflowStepEc2AsgCapacityIncreaseConfigProperty[] | cdktn.IResolvable) {
    this._ec2AsgCapacityIncreaseConfig.internalValue = value;
  }
  public resetEc2AsgCapacityIncreaseConfig() {
    this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AsgCapacityIncreaseConfigInput() {
    return this._ec2AsgCapacityIncreaseConfig.internalValue;
  }

  // ecs_capacity_increase_config - computed: false, optional: true, required: false
  private _ecsCapacityIncreaseConfig = new WorkflowStepEcsCapacityIncreaseConfigPropertyList(this, "ecs_capacity_increase_config", false);
  public get ecsCapacityIncreaseConfig() {
    return this._ecsCapacityIncreaseConfig;
  }
  public putEcsCapacityIncreaseConfig(value: WorkflowStepEcsCapacityIncreaseConfigProperty[] | cdktn.IResolvable) {
    this._ecsCapacityIncreaseConfig.internalValue = value;
  }
  public resetEcsCapacityIncreaseConfig() {
    this._ecsCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsCapacityIncreaseConfigInput() {
    return this._ecsCapacityIncreaseConfig.internalValue;
  }

  // eks_resource_scaling_config - computed: false, optional: true, required: false
  private _eksResourceScalingConfig = new WorkflowStepEksResourceScalingConfigPropertyList(this, "eks_resource_scaling_config", false);
  public get eksResourceScalingConfig() {
    return this._eksResourceScalingConfig;
  }
  public putEksResourceScalingConfig(value: WorkflowStepEksResourceScalingConfigProperty[] | cdktn.IResolvable) {
    this._eksResourceScalingConfig.internalValue = value;
  }
  public resetEksResourceScalingConfig() {
    this._eksResourceScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksResourceScalingConfigInput() {
    return this._eksResourceScalingConfig.internalValue;
  }

  // execution_approval_config - computed: false, optional: true, required: false
  private _executionApprovalConfig = new WorkflowStepExecutionApprovalConfigPropertyList(this, "execution_approval_config", false);
  public get executionApprovalConfig() {
    return this._executionApprovalConfig;
  }
  public putExecutionApprovalConfig(value: WorkflowStepExecutionApprovalConfigProperty[] | cdktn.IResolvable) {
    this._executionApprovalConfig.internalValue = value;
  }
  public resetExecutionApprovalConfig() {
    this._executionApprovalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionApprovalConfigInput() {
    return this._executionApprovalConfig.internalValue;
  }

  // global_aurora_config - computed: false, optional: true, required: false
  private _globalAuroraConfig = new WorkflowStepGlobalAuroraConfigPropertyList(this, "global_aurora_config", false);
  public get globalAuroraConfig() {
    return this._globalAuroraConfig;
  }
  public putGlobalAuroraConfig(value: WorkflowStepGlobalAuroraConfigProperty[] | cdktn.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // lambda_event_source_mapping_config - computed: false, optional: true, required: false
  private _lambdaEventSourceMappingConfig = new WorkflowStepLambdaEventSourceMappingConfigPropertyList(this, "lambda_event_source_mapping_config", false);
  public get lambdaEventSourceMappingConfig() {
    return this._lambdaEventSourceMappingConfig;
  }
  public putLambdaEventSourceMappingConfig(value: WorkflowStepLambdaEventSourceMappingConfigProperty[] | cdktn.IResolvable) {
    this._lambdaEventSourceMappingConfig.internalValue = value;
  }
  public resetLambdaEventSourceMappingConfig() {
    this._lambdaEventSourceMappingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaEventSourceMappingConfigInput() {
    return this._lambdaEventSourceMappingConfig.internalValue;
  }

  // neptune_global_database_config - computed: false, optional: true, required: false
  private _neptuneGlobalDatabaseConfig = new WorkflowStepNeptuneGlobalDatabaseConfigPropertyList(this, "neptune_global_database_config", false);
  public get neptuneGlobalDatabaseConfig() {
    return this._neptuneGlobalDatabaseConfig;
  }
  public putNeptuneGlobalDatabaseConfig(value: WorkflowStepNeptuneGlobalDatabaseConfigProperty[] | cdktn.IResolvable) {
    this._neptuneGlobalDatabaseConfig.internalValue = value;
  }
  public resetNeptuneGlobalDatabaseConfig() {
    this._neptuneGlobalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneGlobalDatabaseConfigInput() {
    return this._neptuneGlobalDatabaseConfig.internalValue;
  }

  // parallel_config - computed: false, optional: true, required: false
  private _parallelConfig = new ParallelConfigPropertyList(this, "parallel_config", false);
  public get parallelConfig() {
    return this._parallelConfig;
  }
  public putParallelConfig(value: ParallelConfigProperty[] | cdktn.IResolvable) {
    this._parallelConfig.internalValue = value;
  }
  public resetParallelConfig() {
    this._parallelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelConfigInput() {
    return this._parallelConfig.internalValue;
  }

  // rds_create_cross_region_read_replica_config - computed: false, optional: true, required: false
  private _rdsCreateCrossRegionReadReplicaConfig = new WorkflowStepRdsCreateCrossRegionReadReplicaConfigPropertyList(this, "rds_create_cross_region_read_replica_config", false);
  public get rdsCreateCrossRegionReadReplicaConfig() {
    return this._rdsCreateCrossRegionReadReplicaConfig;
  }
  public putRdsCreateCrossRegionReadReplicaConfig(value: WorkflowStepRdsCreateCrossRegionReadReplicaConfigProperty[] | cdktn.IResolvable) {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value;
  }
  public resetRdsCreateCrossRegionReadReplicaConfig() {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsCreateCrossRegionReadReplicaConfigInput() {
    return this._rdsCreateCrossRegionReadReplicaConfig.internalValue;
  }

  // rds_promote_read_replica_config - computed: false, optional: true, required: false
  private _rdsPromoteReadReplicaConfig = new WorkflowStepRdsPromoteReadReplicaConfigPropertyList(this, "rds_promote_read_replica_config", false);
  public get rdsPromoteReadReplicaConfig() {
    return this._rdsPromoteReadReplicaConfig;
  }
  public putRdsPromoteReadReplicaConfig(value: WorkflowStepRdsPromoteReadReplicaConfigProperty[] | cdktn.IResolvable) {
    this._rdsPromoteReadReplicaConfig.internalValue = value;
  }
  public resetRdsPromoteReadReplicaConfig() {
    this._rdsPromoteReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsPromoteReadReplicaConfigInput() {
    return this._rdsPromoteReadReplicaConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new WorkflowStepRegionSwitchPlanConfigPropertyList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: WorkflowStepRegionSwitchPlanConfigProperty[] | cdktn.IResolvable) {
    this._regionSwitchPlanConfig.internalValue = value;
  }
  public resetRegionSwitchPlanConfig() {
    this._regionSwitchPlanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSwitchPlanConfigInput() {
    return this._regionSwitchPlanConfig.internalValue;
  }

  // route53_health_check_config - computed: false, optional: true, required: false
  private _route53HealthCheckConfig = new WorkflowStepRoute53HealthCheckConfigPropertyList(this, "route53_health_check_config", false);
  public get route53HealthCheckConfig() {
    return this._route53HealthCheckConfig;
  }
  public putRoute53HealthCheckConfig(value: WorkflowStepRoute53HealthCheckConfigProperty[] | cdktn.IResolvable) {
    this._route53HealthCheckConfig.internalValue = value;
  }
  public resetRoute53HealthCheckConfig() {
    this._route53HealthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53HealthCheckConfigInput() {
    return this._route53HealthCheckConfig.internalValue;
  }
}

export class WorkflowStepPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowStepProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowStepPropertyOutputReference {
    return new WorkflowStepPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#workflow_description AwsPlan#workflow_description}
  */
  readonly workflowDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#workflow_target_action AwsPlan#workflow_target_action}
  */
  readonly workflowTargetAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#workflow_target_region AwsPlan#workflow_target_region}
  */
  readonly workflowTargetRegion?: string;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arcregionswitch_plan#step AwsPlan#step}
  */
  readonly step?: WorkflowStepProperty[] | cdktn.IResolvable;
}
export class WorkflowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflowDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowDescription = this._workflowDescription;
    }
    if (this._workflowTargetAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowTargetAction = this._workflowTargetAction;
    }
    if (this._workflowTargetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowTargetRegion = this._workflowTargetRegion;
    }
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workflowDescription = undefined;
      this._workflowTargetAction = undefined;
      this._workflowTargetRegion = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workflowDescription = value.workflowDescription;
      this._workflowTargetAction = value.workflowTargetAction;
      this._workflowTargetRegion = value.workflowTargetRegion;
      this._step.internalValue = value.step;
    }
  }

  // workflow_description - computed: false, optional: true, required: false
  private _workflowDescription?: string; 
  public get workflowDescription() {
    return this.getStringAttribute('workflow_description');
  }
  public set workflowDescription(value: string) {
    this._workflowDescription = value;
  }
  public resetWorkflowDescription() {
    this._workflowDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowDescriptionInput() {
    return this._workflowDescription;
  }

  // workflow_target_action - computed: false, optional: false, required: true
  private _workflowTargetAction?: string; 
  public get workflowTargetAction() {
    return this.getStringAttribute('workflow_target_action');
  }
  public set workflowTargetAction(value: string) {
    this._workflowTargetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTargetActionInput() {
    return this._workflowTargetAction;
  }

  // workflow_target_region - computed: false, optional: true, required: false
  private _workflowTargetRegion?: string; 
  public get workflowTargetRegion() {
    return this.getStringAttribute('workflow_target_region');
  }
  public set workflowTargetRegion(value: string) {
    this._workflowTargetRegion = value;
  }
  public resetWorkflowTargetRegion() {
    this._workflowTargetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTargetRegionInput() {
    return this._workflowTargetRegion;
  }

  // step - computed: false, optional: true, required: false
  private _step = new WorkflowStepPropertyList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: WorkflowStepProperty[] | cdktn.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class WorkflowPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowPropertyOutputReference {
    return new WorkflowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
