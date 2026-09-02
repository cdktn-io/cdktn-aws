// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfScheduledActionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#description TfScheduledAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#enable TfScheduledAction#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#end_time TfScheduledAction#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#iam_role TfScheduledAction#iam_role}
  */
  readonly iamRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#id TfScheduledAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#name TfScheduledAction#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#region TfScheduledAction#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#schedule TfScheduledAction#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#start_time TfScheduledAction#start_time}
  */
  readonly startTime?: string;
  /**
  * target_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#target_action TfScheduledAction#target_action}
  */
  readonly targetAction: TfScheduledAction.TargetActionProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action aws_redshift_scheduled_action}
*/
export class TfScheduledAction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_scheduled_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfScheduledAction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfScheduledAction to import
  * @param importFromId The id of the existing TfScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfScheduledAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_scheduled_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action aws_redshift_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfScheduledActionConfig
  */
  public constructor(scope: Construct, id: string, config: TfScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_scheduled_action',
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
    this._enable = config.enable;
    this._endTime = config.endTime;
    this._iamRole = config.iamRole;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._schedule = config.schedule;
    this._startTime = config.startTime;
    this._targetAction.internalValue = config.targetAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // target_action - computed: false, optional: false, required: true
  private _targetAction = new TfScheduledAction.TargetActionPropertyOutputReference(this, "target_action");
  public get targetAction() {
    return this._targetAction;
  }
  public putTargetAction(value: TfScheduledAction.TargetActionProperty) {
    this._targetAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetActionInput() {
    return this._targetAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      enable: cdktn.booleanToTerraform(this._enable),
      end_time: cdktn.stringToTerraform(this._endTime),
      iam_role: cdktn.stringToTerraform(this._iamRole),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      schedule: cdktn.stringToTerraform(this._schedule),
      start_time: cdktn.stringToTerraform(this._startTime),
      target_action: tfScheduledActionTargetActionPropertyToTerraform(this._targetAction.internalValue),
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
      enable: {
        value: cdktn.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktn.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role: {
        value: cdktn.stringToHclTerraform(this._iamRole),
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
      schedule: {
        value: cdktn.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktn.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_action: {
        value: tfScheduledActionTargetActionPropertyToHclTerraform(this._targetAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfScheduledAction.TargetActionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfScheduledActionPauseClusterPropertyToTerraform(struct?: TfScheduledAction.PauseClusterPropertyOutputReference | TfScheduledAction.PauseClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
  }
}


export function tfScheduledActionPauseClusterPropertyToHclTerraform(struct?: TfScheduledAction.PauseClusterPropertyOutputReference | TfScheduledAction.PauseClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduledActionResizeClusterPropertyToTerraform(struct?: TfScheduledAction.ResizeClusterPropertyOutputReference | TfScheduledAction.ResizeClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classic: cdktn.booleanToTerraform(struct!.classic),
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    cluster_type: cdktn.stringToTerraform(struct!.clusterType),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
    number_of_nodes: cdktn.numberToTerraform(struct!.numberOfNodes),
  }
}


export function tfScheduledActionResizeClusterPropertyToHclTerraform(struct?: TfScheduledAction.ResizeClusterPropertyOutputReference | TfScheduledAction.ResizeClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classic: {
      value: cdktn.booleanToHclTerraform(struct!.classic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktn.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktn.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduledActionResumeClusterPropertyToTerraform(struct?: TfScheduledAction.ResumeClusterPropertyOutputReference | TfScheduledAction.ResumeClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
  }
}


export function tfScheduledActionResumeClusterPropertyToHclTerraform(struct?: TfScheduledAction.ResumeClusterPropertyOutputReference | TfScheduledAction.ResumeClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfScheduledActionTargetActionPropertyToTerraform(struct?: TfScheduledAction.TargetActionPropertyOutputReference | TfScheduledAction.TargetActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pause_cluster: tfScheduledActionPauseClusterPropertyToTerraform(struct!.pauseCluster),
    resize_cluster: tfScheduledActionResizeClusterPropertyToTerraform(struct!.resizeCluster),
    resume_cluster: tfScheduledActionResumeClusterPropertyToTerraform(struct!.resumeCluster),
  }
}


export function tfScheduledActionTargetActionPropertyToHclTerraform(struct?: TfScheduledAction.TargetActionPropertyOutputReference | TfScheduledAction.TargetActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pause_cluster: {
      value: tfScheduledActionPauseClusterPropertyToHclTerraform(struct!.pauseCluster),
      isBlock: true,
      type: "list",
      storageClassType: "PauseClusterPropertyList",
    },
    resize_cluster: {
      value: tfScheduledActionResizeClusterPropertyToHclTerraform(struct!.resizeCluster),
      isBlock: true,
      type: "list",
      storageClassType: "ResizeClusterPropertyList",
    },
    resume_cluster: {
      value: tfScheduledActionResumeClusterPropertyToHclTerraform(struct!.resumeCluster),
      isBlock: true,
      type: "list",
      storageClassType: "ResumeClusterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfScheduledAction {
export interface PauseClusterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#cluster_identifier TfScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}
export class PauseClusterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PauseClusterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PauseClusterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIdentifier = value.clusterIdentifier;
    }
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }
}
export interface ResizeClusterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#classic TfScheduledAction#classic}
  */
  readonly classic?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#cluster_identifier TfScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#cluster_type TfScheduledAction#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#node_type TfScheduledAction#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#number_of_nodes TfScheduledAction#number_of_nodes}
  */
  readonly numberOfNodes?: number;
}
export class ResizeClusterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResizeClusterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classic !== undefined) {
      hasAnyValues = true;
      internalValueResult.classic = this._classic;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResizeClusterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classic = undefined;
      this._clusterIdentifier = undefined;
      this._clusterType = undefined;
      this._nodeType = undefined;
      this._numberOfNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classic = value.classic;
      this._clusterIdentifier = value.clusterIdentifier;
      this._clusterType = value.clusterType;
      this._nodeType = value.nodeType;
      this._numberOfNodes = value.numberOfNodes;
    }
  }

  // classic - computed: false, optional: true, required: false
  private _classic?: boolean | cdktn.IResolvable; 
  public get classic() {
    return this.getBooleanAttribute('classic');
  }
  public set classic(value: boolean | cdktn.IResolvable) {
    this._classic = value;
  }
  public resetClassic() {
    this._classic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicInput() {
    return this._classic;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }
}
export interface ResumeClusterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#cluster_identifier TfScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}
export class ResumeClusterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResumeClusterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResumeClusterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIdentifier = value.clusterIdentifier;
    }
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }
}
export interface TargetActionProperty {
  /**
  * pause_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#pause_cluster TfScheduledAction#pause_cluster}
  */
  readonly pauseCluster?: PauseClusterProperty;
  /**
  * resize_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#resize_cluster TfScheduledAction#resize_cluster}
  */
  readonly resizeCluster?: ResizeClusterProperty;
  /**
  * resume_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_scheduled_action#resume_cluster TfScheduledAction#resume_cluster}
  */
  readonly resumeCluster?: ResumeClusterProperty;
}
export class TargetActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseCluster = this._pauseCluster?.internalValue;
    }
    if (this._resizeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeCluster = this._resizeCluster?.internalValue;
    }
    if (this._resumeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeCluster = this._resumeCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseCluster.internalValue = undefined;
      this._resizeCluster.internalValue = undefined;
      this._resumeCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseCluster.internalValue = value.pauseCluster;
      this._resizeCluster.internalValue = value.resizeCluster;
      this._resumeCluster.internalValue = value.resumeCluster;
    }
  }

  // pause_cluster - computed: false, optional: true, required: false
  private _pauseCluster = new PauseClusterPropertyOutputReference(this, "pause_cluster");
  public get pauseCluster() {
    return this._pauseCluster;
  }
  public putPauseCluster(value: PauseClusterProperty) {
    this._pauseCluster.internalValue = value;
  }
  public resetPauseCluster() {
    this._pauseCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseClusterInput() {
    return this._pauseCluster.internalValue;
  }

  // resize_cluster - computed: false, optional: true, required: false
  private _resizeCluster = new ResizeClusterPropertyOutputReference(this, "resize_cluster");
  public get resizeCluster() {
    return this._resizeCluster;
  }
  public putResizeCluster(value: ResizeClusterProperty) {
    this._resizeCluster.internalValue = value;
  }
  public resetResizeCluster() {
    this._resizeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeClusterInput() {
    return this._resizeCluster.internalValue;
  }

  // resume_cluster - computed: false, optional: true, required: false
  private _resumeCluster = new ResumeClusterPropertyOutputReference(this, "resume_cluster");
  public get resumeCluster() {
    return this._resumeCluster;
  }
  public putResumeCluster(value: ResumeClusterProperty) {
    this._resumeCluster.internalValue = value;
  }
  public resetResumeCluster() {
    this._resumeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeClusterInput() {
    return this._resumeCluster.internalValue;
  }
}
}
