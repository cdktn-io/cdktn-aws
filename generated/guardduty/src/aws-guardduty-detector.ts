// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#enable TfDetector#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#finding_publishing_frequency TfDetector#finding_publishing_frequency}
  */
  readonly findingPublishingFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#id TfDetector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#region TfDetector#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#tags TfDetector#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#tags_all TfDetector#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * datasources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#datasources TfDetector#datasources}
  */
  readonly datasources?: TfDetector.DatasourcesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector aws_guardduty_detector}
*/
export class TfDetector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDetector to import
  * @param importFromId The id of the existing TfDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector aws_guardduty_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDetectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfDetectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_detector',
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
    this._enable = config.enable;
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._datasources.internalValue = config.datasources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string; 
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string) {
    this._findingPublishingFrequency = value;
  }
  public resetFindingPublishingFrequency() {
    this._findingPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingPublishingFrequencyInput() {
    return this._findingPublishingFrequency;
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

  // datasources - computed: false, optional: true, required: false
  private _datasources = new TfDetector.DatasourcesPropertyOutputReference(this, "datasources");
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: TfDetector.DatasourcesProperty) {
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
      enable: cdktn.booleanToTerraform(this._enable),
      finding_publishing_frequency: cdktn.stringToTerraform(this._findingPublishingFrequency),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      datasources: tfDetectorDatasourcesPropertyToTerraform(this._datasources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktn.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      finding_publishing_frequency: {
        value: cdktn.stringToHclTerraform(this._findingPublishingFrequency),
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
      datasources: {
        value: tfDetectorDatasourcesPropertyToHclTerraform(this._datasources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDetector.DatasourcesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDetectorAuditLogsPropertyToTerraform(struct?: TfDetector.AuditLogsPropertyOutputReference | TfDetector.AuditLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function tfDetectorAuditLogsPropertyToHclTerraform(struct?: TfDetector.AuditLogsPropertyOutputReference | TfDetector.AuditLogsProperty): any {
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


export function tfDetectorKubernetesPropertyToTerraform(struct?: TfDetector.KubernetesPropertyOutputReference | TfDetector.KubernetesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_logs: tfDetectorAuditLogsPropertyToTerraform(struct!.auditLogs),
  }
}


export function tfDetectorKubernetesPropertyToHclTerraform(struct?: TfDetector.KubernetesPropertyOutputReference | TfDetector.KubernetesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_logs: {
      value: tfDetectorAuditLogsPropertyToHclTerraform(struct!.auditLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AuditLogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDetectorEbsVolumesPropertyToTerraform(struct?: TfDetector.EbsVolumesPropertyOutputReference | TfDetector.EbsVolumesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function tfDetectorEbsVolumesPropertyToHclTerraform(struct?: TfDetector.EbsVolumesPropertyOutputReference | TfDetector.EbsVolumesProperty): any {
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


export function tfDetectorScanEc2InstanceWithFindingsPropertyToTerraform(struct?: TfDetector.ScanEc2InstanceWithFindingsPropertyOutputReference | TfDetector.ScanEc2InstanceWithFindingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_volumes: tfDetectorEbsVolumesPropertyToTerraform(struct!.ebsVolumes),
  }
}


export function tfDetectorScanEc2InstanceWithFindingsPropertyToHclTerraform(struct?: TfDetector.ScanEc2InstanceWithFindingsPropertyOutputReference | TfDetector.ScanEc2InstanceWithFindingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_volumes: {
      value: tfDetectorEbsVolumesPropertyToHclTerraform(struct!.ebsVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "EbsVolumesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDetectorMalwareProtectionPropertyToTerraform(struct?: TfDetector.MalwareProtectionPropertyOutputReference | TfDetector.MalwareProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_ec2_instance_with_findings: tfDetectorScanEc2InstanceWithFindingsPropertyToTerraform(struct!.scanEc2InstanceWithFindings),
  }
}


export function tfDetectorMalwareProtectionPropertyToHclTerraform(struct?: TfDetector.MalwareProtectionPropertyOutputReference | TfDetector.MalwareProtectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_ec2_instance_with_findings: {
      value: tfDetectorScanEc2InstanceWithFindingsPropertyToHclTerraform(struct!.scanEc2InstanceWithFindings),
      isBlock: true,
      type: "list",
      storageClassType: "ScanEc2InstanceWithFindingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDetectorS3LogsPropertyToTerraform(struct?: TfDetector.S3LogsPropertyOutputReference | TfDetector.S3LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function tfDetectorS3LogsPropertyToHclTerraform(struct?: TfDetector.S3LogsPropertyOutputReference | TfDetector.S3LogsProperty): any {
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


export function tfDetectorDatasourcesPropertyToTerraform(struct?: TfDetector.DatasourcesPropertyOutputReference | TfDetector.DatasourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kubernetes: tfDetectorKubernetesPropertyToTerraform(struct!.kubernetes),
    malware_protection: tfDetectorMalwareProtectionPropertyToTerraform(struct!.malwareProtection),
    s3_logs: tfDetectorS3LogsPropertyToTerraform(struct!.s3Logs),
  }
}


export function tfDetectorDatasourcesPropertyToHclTerraform(struct?: TfDetector.DatasourcesPropertyOutputReference | TfDetector.DatasourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kubernetes: {
      value: tfDetectorKubernetesPropertyToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesPropertyList",
    },
    malware_protection: {
      value: tfDetectorMalwareProtectionPropertyToHclTerraform(struct!.malwareProtection),
      isBlock: true,
      type: "list",
      storageClassType: "MalwareProtectionPropertyList",
    },
    s3_logs: {
      value: tfDetectorS3LogsPropertyToHclTerraform(struct!.s3Logs),
      isBlock: true,
      type: "list",
      storageClassType: "S3LogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfDetector {
export interface AuditLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#enable TfDetector#enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#audit_logs TfDetector#audit_logs}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#enable TfDetector#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsVolumesProperty | undefined) {
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
export interface ScanEc2InstanceWithFindingsProperty {
  /**
  * ebs_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#ebs_volumes TfDetector#ebs_volumes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#scan_ec2_instance_with_findings TfDetector#scan_ec2_instance_with_findings}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#enable TfDetector#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3LogsProperty | undefined) {
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
export interface DatasourcesProperty {
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#kubernetes TfDetector#kubernetes}
  */
  readonly kubernetes?: KubernetesProperty;
  /**
  * malware_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#malware_protection TfDetector#malware_protection}
  */
  readonly malwareProtection?: MalwareProtectionProperty;
  /**
  * s3_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/guardduty_detector#s3_logs TfDetector#s3_logs}
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
