// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOrganizationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#auto_enable_organization_members TfOrganizationConfiguration#auto_enable_organization_members}
  */
  readonly autoEnableOrganizationMembers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#detector_id TfOrganizationConfiguration#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#id TfOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#region TfOrganizationConfiguration#region}
  */
  readonly region?: string;
  /**
  * datasources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#datasources TfOrganizationConfiguration#datasources}
  */
  readonly datasources?: TfOrganizationConfiguration.DatasourcesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration}
*/
export class TfOrganizationConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOrganizationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOrganizationConfiguration to import
  * @param importFromId The id of the existing TfOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOrganizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_organization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration',
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
    this._autoEnableOrganizationMembers = config.autoEnableOrganizationMembers;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._region = config.region;
    this._datasources.internalValue = config.datasources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable_organization_members - computed: false, optional: false, required: true
  private _autoEnableOrganizationMembers?: string; 
  public get autoEnableOrganizationMembers() {
    return this.getStringAttribute('auto_enable_organization_members');
  }
  public set autoEnableOrganizationMembers(value: string) {
    this._autoEnableOrganizationMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableOrganizationMembersInput() {
    return this._autoEnableOrganizationMembers;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
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

  // datasources - computed: false, optional: true, required: false
  private _datasources = new TfOrganizationConfiguration.DatasourcesPropertyOutputReference(this, "datasources");
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: TfOrganizationConfiguration.DatasourcesProperty) {
    this._datasources.internalValue = value;
  }
  public resetDatasources() {
    this._datasources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable_organization_members: cdktn.stringToTerraform(this._autoEnableOrganizationMembers),
      detector_id: cdktn.stringToTerraform(this._detectorId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      datasources: tfOrganizationConfigurationDatasourcesPropertyToTerraform(this._datasources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable_organization_members: {
        value: cdktn.stringToHclTerraform(this._autoEnableOrganizationMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_id: {
        value: cdktn.stringToHclTerraform(this._detectorId),
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
      datasources: {
        value: tfOrganizationConfigurationDatasourcesPropertyToHclTerraform(this._datasources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOrganizationConfiguration.DatasourcesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOrganizationConfigurationAuditLogsPropertyToTerraform(struct?: TfOrganizationConfiguration.AuditLogsPropertyOutputReference | TfOrganizationConfiguration.AuditLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function tfOrganizationConfigurationAuditLogsPropertyToHclTerraform(struct?: TfOrganizationConfiguration.AuditLogsPropertyOutputReference | TfOrganizationConfiguration.AuditLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationKubernetesPropertyToTerraform(struct?: TfOrganizationConfiguration.KubernetesPropertyOutputReference | TfOrganizationConfiguration.KubernetesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_logs: tfOrganizationConfigurationAuditLogsPropertyToTerraform(struct!.auditLogs),
  }
}


export function tfOrganizationConfigurationKubernetesPropertyToHclTerraform(struct?: TfOrganizationConfiguration.KubernetesPropertyOutputReference | TfOrganizationConfiguration.KubernetesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_logs: {
      value: tfOrganizationConfigurationAuditLogsPropertyToHclTerraform(struct!.auditLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AuditLogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationEbsVolumesPropertyToTerraform(struct?: TfOrganizationConfiguration.EbsVolumesPropertyOutputReference | TfOrganizationConfiguration.EbsVolumesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enable: cdktn.booleanToTerraform(struct!.autoEnable),
  }
}


export function tfOrganizationConfigurationEbsVolumesPropertyToHclTerraform(struct?: TfOrganizationConfiguration.EbsVolumesPropertyOutputReference | TfOrganizationConfiguration.EbsVolumesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enable: {
      value: cdktn.booleanToHclTerraform(struct!.autoEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationScanEc2InstanceWithFindingsPropertyToTerraform(struct?: TfOrganizationConfiguration.ScanEc2InstanceWithFindingsPropertyOutputReference | TfOrganizationConfiguration.ScanEc2InstanceWithFindingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_volumes: tfOrganizationConfigurationEbsVolumesPropertyToTerraform(struct!.ebsVolumes),
  }
}


export function tfOrganizationConfigurationScanEc2InstanceWithFindingsPropertyToHclTerraform(struct?: TfOrganizationConfiguration.ScanEc2InstanceWithFindingsPropertyOutputReference | TfOrganizationConfiguration.ScanEc2InstanceWithFindingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_volumes: {
      value: tfOrganizationConfigurationEbsVolumesPropertyToHclTerraform(struct!.ebsVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "EbsVolumesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationMalwareProtectionPropertyToTerraform(struct?: TfOrganizationConfiguration.MalwareProtectionPropertyOutputReference | TfOrganizationConfiguration.MalwareProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_ec2_instance_with_findings: tfOrganizationConfigurationScanEc2InstanceWithFindingsPropertyToTerraform(struct!.scanEc2InstanceWithFindings),
  }
}


export function tfOrganizationConfigurationMalwareProtectionPropertyToHclTerraform(struct?: TfOrganizationConfiguration.MalwareProtectionPropertyOutputReference | TfOrganizationConfiguration.MalwareProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_ec2_instance_with_findings: {
      value: tfOrganizationConfigurationScanEc2InstanceWithFindingsPropertyToHclTerraform(struct!.scanEc2InstanceWithFindings),
      isBlock: true,
      type: "list",
      storageClassType: "ScanEc2InstanceWithFindingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationS3LogsPropertyToTerraform(struct?: TfOrganizationConfiguration.S3LogsPropertyOutputReference | TfOrganizationConfiguration.S3LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enable: cdktn.booleanToTerraform(struct!.autoEnable),
  }
}


export function tfOrganizationConfigurationS3LogsPropertyToHclTerraform(struct?: TfOrganizationConfiguration.S3LogsPropertyOutputReference | TfOrganizationConfiguration.S3LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enable: {
      value: cdktn.booleanToHclTerraform(struct!.autoEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationDatasourcesPropertyToTerraform(struct?: TfOrganizationConfiguration.DatasourcesPropertyOutputReference | TfOrganizationConfiguration.DatasourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kubernetes: tfOrganizationConfigurationKubernetesPropertyToTerraform(struct!.kubernetes),
    malware_protection: tfOrganizationConfigurationMalwareProtectionPropertyToTerraform(struct!.malwareProtection),
    s3_logs: tfOrganizationConfigurationS3LogsPropertyToTerraform(struct!.s3Logs),
  }
}


export function tfOrganizationConfigurationDatasourcesPropertyToHclTerraform(struct?: TfOrganizationConfiguration.DatasourcesPropertyOutputReference | TfOrganizationConfiguration.DatasourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kubernetes: {
      value: tfOrganizationConfigurationKubernetesPropertyToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesPropertyList",
    },
    malware_protection: {
      value: tfOrganizationConfigurationMalwareProtectionPropertyToHclTerraform(struct!.malwareProtection),
      isBlock: true,
      type: "list",
      storageClassType: "MalwareProtectionPropertyList",
    },
    s3_logs: {
      value: tfOrganizationConfigurationS3LogsPropertyToHclTerraform(struct!.s3Logs),
      isBlock: true,
      type: "list",
      storageClassType: "S3LogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfOrganizationConfiguration {
export interface AuditLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#enable TfOrganizationConfiguration#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
}
export class AuditLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface KubernetesProperty {
  /**
  * audit_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#audit_logs TfOrganizationConfiguration#audit_logs}
  */
  readonly auditLogs: AuditLogsProperty;
}
export class KubernetesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogs = this._auditLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogs.internalValue = value.auditLogs;
    }
  }

  // audit_logs - computed: false, optional: false, required: true
  private _auditLogs = new AuditLogsPropertyOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: AuditLogsProperty) {
    this._auditLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }
}
export interface EbsVolumesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#auto_enable TfOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktn.IResolvable;
}
export class EbsVolumesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsVolumesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsVolumesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoEnable = value.autoEnable;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktn.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktn.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }
}
export interface ScanEc2InstanceWithFindingsProperty {
  /**
  * ebs_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#ebs_volumes TfOrganizationConfiguration#ebs_volumes}
  */
  readonly ebsVolumes: EbsVolumesProperty;
}
export class ScanEc2InstanceWithFindingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScanEc2InstanceWithFindingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumes = this._ebsVolumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScanEc2InstanceWithFindingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ebsVolumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ebsVolumes.internalValue = value.ebsVolumes;
    }
  }

  // ebs_volumes - computed: false, optional: false, required: true
  private _ebsVolumes = new EbsVolumesPropertyOutputReference(this, "ebs_volumes");
  public get ebsVolumes() {
    return this._ebsVolumes;
  }
  public putEbsVolumes(value: EbsVolumesProperty) {
    this._ebsVolumes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumesInput() {
    return this._ebsVolumes.internalValue;
  }
}
export interface MalwareProtectionProperty {
  /**
  * scan_ec2_instance_with_findings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#scan_ec2_instance_with_findings TfOrganizationConfiguration#scan_ec2_instance_with_findings}
  */
  readonly scanEc2InstanceWithFindings: ScanEc2InstanceWithFindingsProperty;
}
export class MalwareProtectionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MalwareProtectionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanEc2InstanceWithFindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanEc2InstanceWithFindings = this._scanEc2InstanceWithFindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MalwareProtectionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scanEc2InstanceWithFindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scanEc2InstanceWithFindings.internalValue = value.scanEc2InstanceWithFindings;
    }
  }

  // scan_ec2_instance_with_findings - computed: false, optional: false, required: true
  private _scanEc2InstanceWithFindings = new ScanEc2InstanceWithFindingsPropertyOutputReference(this, "scan_ec2_instance_with_findings");
  public get scanEc2InstanceWithFindings() {
    return this._scanEc2InstanceWithFindings;
  }
  public putScanEc2InstanceWithFindings(value: ScanEc2InstanceWithFindingsProperty) {
    this._scanEc2InstanceWithFindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanEc2InstanceWithFindingsInput() {
    return this._scanEc2InstanceWithFindings.internalValue;
  }
}
export interface S3LogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#auto_enable TfOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktn.IResolvable;
}
export class S3LogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3LogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3LogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoEnable = value.autoEnable;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktn.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktn.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }
}
export interface DatasourcesProperty {
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#kubernetes TfOrganizationConfiguration#kubernetes}
  */
  readonly kubernetes?: KubernetesProperty;
  /**
  * malware_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#malware_protection TfOrganizationConfiguration#malware_protection}
  */
  readonly malwareProtection?: MalwareProtectionProperty;
  /**
  * s3_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_organization_configuration#s3_logs TfOrganizationConfiguration#s3_logs}
  */
  readonly s3Logs?: S3LogsProperty;
}
export class DatasourcesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._malwareProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareProtection = this._malwareProtection?.internalValue;
    }
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetes.internalValue = undefined;
      this._malwareProtection.internalValue = undefined;
      this._s3Logs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetes.internalValue = value.kubernetes;
      this._malwareProtection.internalValue = value.malwareProtection;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new KubernetesPropertyOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: KubernetesProperty) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // malware_protection - computed: false, optional: true, required: false
  private _malwareProtection = new MalwareProtectionPropertyOutputReference(this, "malware_protection");
  public get malwareProtection() {
    return this._malwareProtection;
  }
  public putMalwareProtection(value: MalwareProtectionProperty) {
    this._malwareProtection.internalValue = value;
  }
  public resetMalwareProtection() {
    this._malwareProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareProtectionInput() {
    return this._malwareProtection.internalValue;
  }

  // s3_logs - computed: false, optional: true, required: false
  private _s3Logs = new S3LogsPropertyOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: S3LogsProperty) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}
}
