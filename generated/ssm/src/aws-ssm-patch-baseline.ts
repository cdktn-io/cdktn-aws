// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSsmPatchBaselineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approved_patches AwsSsmPatchBaseline#approved_patches}
  */
  readonly approvedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level AwsSsmPatchBaseline#approved_patches_compliance_level}
  */
  readonly approvedPatchesComplianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security AwsSsmPatchBaseline#approved_patches_enable_non_security}
  */
  readonly approvedPatchesEnableNonSecurity?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status AwsSsmPatchBaseline#available_security_updates_compliance_status}
  */
  readonly availableSecurityUpdatesComplianceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#description AwsSsmPatchBaseline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#id AwsSsmPatchBaseline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#name AwsSsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#operating_system AwsSsmPatchBaseline#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#region AwsSsmPatchBaseline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#rejected_patches AwsSsmPatchBaseline#rejected_patches}
  */
  readonly rejectedPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#rejected_patches_action AwsSsmPatchBaseline#rejected_patches_action}
  */
  readonly rejectedPatchesAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#tags AwsSsmPatchBaseline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#tags_all AwsSsmPatchBaseline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * approval_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approval_rule AwsSsmPatchBaseline#approval_rule}
  */
  readonly approvalRule?: AwsSsmPatchBaseline.ApprovalRuleProperty[] | cdktn.IResolvable;
  /**
  * global_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#global_filter AwsSsmPatchBaseline#global_filter}
  */
  readonly globalFilter?: AwsSsmPatchBaseline.GlobalFilterProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#source AwsSsmPatchBaseline#source}
  */
  readonly source?: AwsSsmPatchBaseline.SourceProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline}
*/
export class AwsSsmPatchBaseline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_patch_baseline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSsmPatchBaseline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSsmPatchBaseline to import
  * @param importFromId The id of the existing AwsSsmPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSsmPatchBaseline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_patch_baseline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSsmPatchBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSsmPatchBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baseline',
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
    this._approvedPatches = config.approvedPatches;
    this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
    this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
    this._availableSecurityUpdatesComplianceStatus = config.availableSecurityUpdatesComplianceStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._region = config.region;
    this._rejectedPatches = config.rejectedPatches;
    this._rejectedPatchesAction = config.rejectedPatchesAction;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._approvalRule.internalValue = config.approvalRule;
    this._globalFilter.internalValue = config.globalFilter;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_patches - computed: false, optional: true, required: false
  private _approvedPatches?: string[]; 
  public get approvedPatches() {
    return cdktn.Fn.tolist(this.getListAttribute('approved_patches'));
  }
  public set approvedPatches(value: string[]) {
    this._approvedPatches = value;
  }
  public resetApprovedPatches() {
    this._approvedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesInput() {
    return this._approvedPatches;
  }

  // approved_patches_compliance_level - computed: false, optional: true, required: false
  private _approvedPatchesComplianceLevel?: string; 
  public get approvedPatchesComplianceLevel() {
    return this.getStringAttribute('approved_patches_compliance_level');
  }
  public set approvedPatchesComplianceLevel(value: string) {
    this._approvedPatchesComplianceLevel = value;
  }
  public resetApprovedPatchesComplianceLevel() {
    this._approvedPatchesComplianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesComplianceLevelInput() {
    return this._approvedPatchesComplianceLevel;
  }

  // approved_patches_enable_non_security - computed: false, optional: true, required: false
  private _approvedPatchesEnableNonSecurity?: boolean | cdktn.IResolvable; 
  public get approvedPatchesEnableNonSecurity() {
    return this.getBooleanAttribute('approved_patches_enable_non_security');
  }
  public set approvedPatchesEnableNonSecurity(value: boolean | cdktn.IResolvable) {
    this._approvedPatchesEnableNonSecurity = value;
  }
  public resetApprovedPatchesEnableNonSecurity() {
    this._approvedPatchesEnableNonSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedPatchesEnableNonSecurityInput() {
    return this._approvedPatchesEnableNonSecurity;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // available_security_updates_compliance_status - computed: true, optional: true, required: false
  private _availableSecurityUpdatesComplianceStatus?: string; 
  public get availableSecurityUpdatesComplianceStatus() {
    return this.getStringAttribute('available_security_updates_compliance_status');
  }
  public set availableSecurityUpdatesComplianceStatus(value: string) {
    this._availableSecurityUpdatesComplianceStatus = value;
  }
  public resetAvailableSecurityUpdatesComplianceStatus() {
    this._availableSecurityUpdatesComplianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableSecurityUpdatesComplianceStatusInput() {
    return this._availableSecurityUpdatesComplianceStatus;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
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

  // rejected_patches - computed: false, optional: true, required: false
  private _rejectedPatches?: string[]; 
  public get rejectedPatches() {
    return cdktn.Fn.tolist(this.getListAttribute('rejected_patches'));
  }
  public set rejectedPatches(value: string[]) {
    this._rejectedPatches = value;
  }
  public resetRejectedPatches() {
    this._rejectedPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedPatchesInput() {
    return this._rejectedPatches;
  }

  // rejected_patches_action - computed: true, optional: true, required: false
  private _rejectedPatchesAction?: string; 
  public get rejectedPatchesAction() {
    return this.getStringAttribute('rejected_patches_action');
  }
  public set rejectedPatchesAction(value: string) {
    this._rejectedPatchesAction = value;
  }
  public resetRejectedPatchesAction() {
    this._rejectedPatchesAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectedPatchesActionInput() {
    return this._rejectedPatchesAction;
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

  // approval_rule - computed: false, optional: true, required: false
  private _approvalRule = new AwsSsmPatchBaseline.ApprovalRulePropertyList(this, "approval_rule", false);
  public get approvalRule() {
    return this._approvalRule;
  }
  public putApprovalRule(value: AwsSsmPatchBaseline.ApprovalRuleProperty[] | cdktn.IResolvable) {
    this._approvalRule.internalValue = value;
  }
  public resetApprovalRule() {
    this._approvalRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleInput() {
    return this._approvalRule.internalValue;
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter = new AwsSsmPatchBaseline.GlobalFilterPropertyList(this, "global_filter", false);
  public get globalFilter() {
    return this._globalFilter;
  }
  public putGlobalFilter(value: AwsSsmPatchBaseline.GlobalFilterProperty[] | cdktn.IResolvable) {
    this._globalFilter.internalValue = value;
  }
  public resetGlobalFilter() {
    this._globalFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFilterInput() {
    return this._globalFilter.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new AwsSsmPatchBaseline.SourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: AwsSsmPatchBaseline.SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_patches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._approvedPatches),
      approved_patches_compliance_level: cdktn.stringToTerraform(this._approvedPatchesComplianceLevel),
      approved_patches_enable_non_security: cdktn.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
      available_security_updates_compliance_status: cdktn.stringToTerraform(this._availableSecurityUpdatesComplianceStatus),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      operating_system: cdktn.stringToTerraform(this._operatingSystem),
      region: cdktn.stringToTerraform(this._region),
      rejected_patches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rejectedPatches),
      rejected_patches_action: cdktn.stringToTerraform(this._rejectedPatchesAction),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      approval_rule: cdktn.listMapper(awsSsmPatchBaselineApprovalRulePropertyToTerraform, true)(this._approvalRule.internalValue),
      global_filter: cdktn.listMapper(awsSsmPatchBaselineGlobalFilterPropertyToTerraform, true)(this._globalFilter.internalValue),
      source: cdktn.listMapper(awsSsmPatchBaselineSourcePropertyToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approved_patches: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._approvedPatches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      approved_patches_compliance_level: {
        value: cdktn.stringToHclTerraform(this._approvedPatchesComplianceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approved_patches_enable_non_security: {
        value: cdktn.booleanToHclTerraform(this._approvedPatchesEnableNonSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      available_security_updates_compliance_status: {
        value: cdktn.stringToHclTerraform(this._availableSecurityUpdatesComplianceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      operating_system: {
        value: cdktn.stringToHclTerraform(this._operatingSystem),
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
      rejected_patches: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rejectedPatches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rejected_patches_action: {
        value: cdktn.stringToHclTerraform(this._rejectedPatchesAction),
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
      approval_rule: {
        value: cdktn.listMapperHcl(awsSsmPatchBaselineApprovalRulePropertyToHclTerraform, true)(this._approvalRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSsmPatchBaseline.ApprovalRulePropertyList",
      },
      global_filter: {
        value: cdktn.listMapperHcl(awsSsmPatchBaselineGlobalFilterPropertyToHclTerraform, true)(this._globalFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSsmPatchBaseline.GlobalFilterPropertyList",
      },
      source: {
        value: cdktn.listMapperHcl(awsSsmPatchBaselineSourcePropertyToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSsmPatchBaseline.SourcePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSsmPatchBaselinePatchFilterPropertyToTerraform(struct?: AwsSsmPatchBaseline.PatchFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsSsmPatchBaselinePatchFilterPropertyToHclTerraform(struct?: AwsSsmPatchBaseline.PatchFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmPatchBaselineApprovalRulePropertyToTerraform(struct?: AwsSsmPatchBaseline.ApprovalRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approve_after_days: cdktn.numberToTerraform(struct!.approveAfterDays),
    approve_until_date: cdktn.stringToTerraform(struct!.approveUntilDate),
    compliance_level: cdktn.stringToTerraform(struct!.complianceLevel),
    enable_non_security: cdktn.booleanToTerraform(struct!.enableNonSecurity),
    patch_filter: cdktn.listMapper(awsSsmPatchBaselinePatchFilterPropertyToTerraform, true)(struct!.patchFilter),
  }
}


export function awsSsmPatchBaselineApprovalRulePropertyToHclTerraform(struct?: AwsSsmPatchBaseline.ApprovalRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approve_after_days: {
      value: cdktn.numberToHclTerraform(struct!.approveAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    approve_until_date: {
      value: cdktn.stringToHclTerraform(struct!.approveUntilDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_level: {
      value: cdktn.stringToHclTerraform(struct!.complianceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_non_security: {
      value: cdktn.booleanToHclTerraform(struct!.enableNonSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patch_filter: {
      value: cdktn.listMapperHcl(awsSsmPatchBaselinePatchFilterPropertyToHclTerraform, true)(struct!.patchFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PatchFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmPatchBaselineGlobalFilterPropertyToTerraform(struct?: AwsSsmPatchBaseline.GlobalFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsSsmPatchBaselineGlobalFilterPropertyToHclTerraform(struct?: AwsSsmPatchBaseline.GlobalFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsmPatchBaselineSourcePropertyToTerraform(struct?: AwsSsmPatchBaseline.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: cdktn.stringToTerraform(struct!.configuration),
    name: cdktn.stringToTerraform(struct!.name),
    products: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.products),
  }
}


export function awsSsmPatchBaselineSourcePropertyToHclTerraform(struct?: AwsSsmPatchBaseline.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: cdktn.stringToHclTerraform(struct!.configuration),
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
    products: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.products),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSsmPatchBaseline {
export interface PatchFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#key AwsSsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#values AwsSsmPatchBaseline#values}
  */
  readonly values: string[];
}
export class PatchFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PatchFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PatchFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PatchFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : PatchFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): PatchFilterPropertyOutputReference {
    return new PatchFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApprovalRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approve_after_days AwsSsmPatchBaseline#approve_after_days}
  */
  readonly approveAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#approve_until_date AwsSsmPatchBaseline#approve_until_date}
  */
  readonly approveUntilDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#compliance_level AwsSsmPatchBaseline#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#enable_non_security AwsSsmPatchBaseline#enable_non_security}
  */
  readonly enableNonSecurity?: boolean | cdktn.IResolvable;
  /**
  * patch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#patch_filter AwsSsmPatchBaseline#patch_filter}
  */
  readonly patchFilter: PatchFilterProperty[] | cdktn.IResolvable;
}
export class ApprovalRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApprovalRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approveAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.approveAfterDays = this._approveAfterDays;
    }
    if (this._approveUntilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.approveUntilDate = this._approveUntilDate;
    }
    if (this._complianceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceLevel = this._complianceLevel;
    }
    if (this._enableNonSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNonSecurity = this._enableNonSecurity;
    }
    if (this._patchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchFilter = this._patchFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprovalRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approveAfterDays = undefined;
      this._approveUntilDate = undefined;
      this._complianceLevel = undefined;
      this._enableNonSecurity = undefined;
      this._patchFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approveAfterDays = value.approveAfterDays;
      this._approveUntilDate = value.approveUntilDate;
      this._complianceLevel = value.complianceLevel;
      this._enableNonSecurity = value.enableNonSecurity;
      this._patchFilter.internalValue = value.patchFilter;
    }
  }

  // approve_after_days - computed: false, optional: true, required: false
  private _approveAfterDays?: number; 
  public get approveAfterDays() {
    return this.getNumberAttribute('approve_after_days');
  }
  public set approveAfterDays(value: number) {
    this._approveAfterDays = value;
  }
  public resetApproveAfterDays() {
    this._approveAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveAfterDaysInput() {
    return this._approveAfterDays;
  }

  // approve_until_date - computed: false, optional: true, required: false
  private _approveUntilDate?: string; 
  public get approveUntilDate() {
    return this.getStringAttribute('approve_until_date');
  }
  public set approveUntilDate(value: string) {
    this._approveUntilDate = value;
  }
  public resetApproveUntilDate() {
    this._approveUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveUntilDateInput() {
    return this._approveUntilDate;
  }

  // compliance_level - computed: false, optional: true, required: false
  private _complianceLevel?: string; 
  public get complianceLevel() {
    return this.getStringAttribute('compliance_level');
  }
  public set complianceLevel(value: string) {
    this._complianceLevel = value;
  }
  public resetComplianceLevel() {
    this._complianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceLevelInput() {
    return this._complianceLevel;
  }

  // enable_non_security - computed: false, optional: true, required: false
  private _enableNonSecurity?: boolean | cdktn.IResolvable; 
  public get enableNonSecurity() {
    return this.getBooleanAttribute('enable_non_security');
  }
  public set enableNonSecurity(value: boolean | cdktn.IResolvable) {
    this._enableNonSecurity = value;
  }
  public resetEnableNonSecurity() {
    this._enableNonSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNonSecurityInput() {
    return this._enableNonSecurity;
  }

  // patch_filter - computed: false, optional: false, required: true
  private _patchFilter = new PatchFilterPropertyList(this, "patch_filter", false);
  public get patchFilter() {
    return this._patchFilter;
  }
  public putPatchFilter(value: PatchFilterProperty[] | cdktn.IResolvable) {
    this._patchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchFilterInput() {
    return this._patchFilter.internalValue;
  }
}

export class ApprovalRulePropertyList extends cdktn.ComplexList {
  public internalValue? : ApprovalRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): ApprovalRulePropertyOutputReference {
    return new ApprovalRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#key AwsSsmPatchBaseline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#values AwsSsmPatchBaseline#values}
  */
  readonly values: string[];
}
export class GlobalFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlobalFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GlobalFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : GlobalFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): GlobalFilterPropertyOutputReference {
    return new GlobalFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#configuration AwsSsmPatchBaseline#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#name AwsSsmPatchBaseline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssm_patch_baseline#products AwsSsmPatchBaseline#products}
  */
  readonly products: string[];
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._products !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._name = undefined;
      this._products = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._name = value.name;
      this._products = value.products;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // products - computed: false, optional: false, required: true
  private _products?: string[]; 
  public get products() {
    return this.getListAttribute('products');
  }
  public set products(value: string[]) {
    this._products = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
