// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsServiceIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#region AwsServiceIntegration#region}
  */
  readonly region?: string;
  /**
  * kms_server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption AwsServiceIntegration#kms_server_side_encryption}
  */
  readonly kmsServerSideEncryption?: AwsServiceIntegration.KmsServerSideEncryptionProperty[] | cdktn.IResolvable;
  /**
  * logs_anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection AwsServiceIntegration#logs_anomaly_detection}
  */
  readonly logsAnomalyDetection?: AwsServiceIntegration.LogsAnomalyDetectionProperty[] | cdktn.IResolvable;
  /**
  * ops_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#ops_center AwsServiceIntegration#ops_center}
  */
  readonly opsCenter?: AwsServiceIntegration.OpsCenterProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}
*/
export class AwsServiceIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsServiceIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsServiceIntegration to import
  * @param importFromId The id of the existing AwsServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsServiceIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsServiceIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_service_integration',
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
    this._region = config.region;
    this._kmsServerSideEncryption.internalValue = config.kmsServerSideEncryption;
    this._logsAnomalyDetection.internalValue = config.logsAnomalyDetection;
    this._opsCenter.internalValue = config.opsCenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kms_server_side_encryption - computed: false, optional: true, required: false
  private _kmsServerSideEncryption = new AwsServiceIntegration.KmsServerSideEncryptionPropertyList(this, "kms_server_side_encryption", false);
  public get kmsServerSideEncryption() {
    return this._kmsServerSideEncryption;
  }
  public putKmsServerSideEncryption(value: AwsServiceIntegration.KmsServerSideEncryptionProperty[] | cdktn.IResolvable) {
    this._kmsServerSideEncryption.internalValue = value;
  }
  public resetKmsServerSideEncryption() {
    this._kmsServerSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsServerSideEncryptionInput() {
    return this._kmsServerSideEncryption.internalValue;
  }

  // logs_anomaly_detection - computed: false, optional: true, required: false
  private _logsAnomalyDetection = new AwsServiceIntegration.LogsAnomalyDetectionPropertyList(this, "logs_anomaly_detection", false);
  public get logsAnomalyDetection() {
    return this._logsAnomalyDetection;
  }
  public putLogsAnomalyDetection(value: AwsServiceIntegration.LogsAnomalyDetectionProperty[] | cdktn.IResolvable) {
    this._logsAnomalyDetection.internalValue = value;
  }
  public resetLogsAnomalyDetection() {
    this._logsAnomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAnomalyDetectionInput() {
    return this._logsAnomalyDetection.internalValue;
  }

  // ops_center - computed: false, optional: true, required: false
  private _opsCenter = new AwsServiceIntegration.OpsCenterPropertyList(this, "ops_center", false);
  public get opsCenter() {
    return this._opsCenter;
  }
  public putOpsCenter(value: AwsServiceIntegration.OpsCenterProperty[] | cdktn.IResolvable) {
    this._opsCenter.internalValue = value;
  }
  public resetOpsCenter() {
    this._opsCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsCenterInput() {
    return this._opsCenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      kms_server_side_encryption: cdktn.listMapper(awsServiceIntegrationKmsServerSideEncryptionPropertyToTerraform, true)(this._kmsServerSideEncryption.internalValue),
      logs_anomaly_detection: cdktn.listMapper(awsServiceIntegrationLogsAnomalyDetectionPropertyToTerraform, true)(this._logsAnomalyDetection.internalValue),
      ops_center: cdktn.listMapper(awsServiceIntegrationOpsCenterPropertyToTerraform, true)(this._opsCenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_server_side_encryption: {
        value: cdktn.listMapperHcl(awsServiceIntegrationKmsServerSideEncryptionPropertyToHclTerraform, true)(this._kmsServerSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsServiceIntegration.KmsServerSideEncryptionPropertyList",
      },
      logs_anomaly_detection: {
        value: cdktn.listMapperHcl(awsServiceIntegrationLogsAnomalyDetectionPropertyToHclTerraform, true)(this._logsAnomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsServiceIntegration.LogsAnomalyDetectionPropertyList",
      },
      ops_center: {
        value: cdktn.listMapperHcl(awsServiceIntegrationOpsCenterPropertyToHclTerraform, true)(this._opsCenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsServiceIntegration.OpsCenterPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsServiceIntegrationKmsServerSideEncryptionPropertyToTerraform(struct?: AwsServiceIntegration.KmsServerSideEncryptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    opt_in_status: cdktn.stringToTerraform(struct!.optInStatus),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsServiceIntegrationKmsServerSideEncryptionPropertyToHclTerraform(struct?: AwsServiceIntegration.KmsServerSideEncryptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opt_in_status: {
      value: cdktn.stringToHclTerraform(struct!.optInStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsServiceIntegrationLogsAnomalyDetectionPropertyToTerraform(struct?: AwsServiceIntegration.LogsAnomalyDetectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    opt_in_status: cdktn.stringToTerraform(struct!.optInStatus),
  }
}


export function awsServiceIntegrationLogsAnomalyDetectionPropertyToHclTerraform(struct?: AwsServiceIntegration.LogsAnomalyDetectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    opt_in_status: {
      value: cdktn.stringToHclTerraform(struct!.optInStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsServiceIntegrationOpsCenterPropertyToTerraform(struct?: AwsServiceIntegration.OpsCenterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    opt_in_status: cdktn.stringToTerraform(struct!.optInStatus),
  }
}


export function awsServiceIntegrationOpsCenterPropertyToHclTerraform(struct?: AwsServiceIntegration.OpsCenterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    opt_in_status: {
      value: cdktn.stringToHclTerraform(struct!.optInStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsServiceIntegration {
export interface KmsServerSideEncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#kms_key_id AwsServiceIntegration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#opt_in_status AwsServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#type AwsServiceIntegration#type}
  */
  readonly type?: string;
}
export class KmsServerSideEncryptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsServerSideEncryptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsServerSideEncryptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._optInStatus = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._optInStatus = value.optInStatus;
      this._type = value.type;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class KmsServerSideEncryptionPropertyList extends cdktn.ComplexList {
  public internalValue? : KmsServerSideEncryptionProperty[] | cdktn.IResolvable

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
  public get(index: number): KmsServerSideEncryptionPropertyOutputReference {
    return new KmsServerSideEncryptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsAnomalyDetectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#opt_in_status AwsServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
}
export class LogsAnomalyDetectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogsAnomalyDetectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsAnomalyDetectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optInStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optInStatus = value.optInStatus;
    }
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }
}

export class LogsAnomalyDetectionPropertyList extends cdktn.ComplexList {
  public internalValue? : LogsAnomalyDetectionProperty[] | cdktn.IResolvable

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
  public get(index: number): LogsAnomalyDetectionPropertyOutputReference {
    return new LogsAnomalyDetectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsCenterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_service_integration#opt_in_status AwsServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
}
export class OpsCenterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpsCenterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsCenterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optInStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optInStatus = value.optInStatus;
    }
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }
}

export class OpsCenterPropertyList extends cdktn.ComplexList {
  public internalValue? : OpsCenterProperty[] | cdktn.IResolvable

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
  public get(index: number): OpsCenterPropertyOutputReference {
    return new OpsCenterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
