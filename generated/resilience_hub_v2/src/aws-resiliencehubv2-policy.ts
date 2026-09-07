// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#description AwsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#kms_key_id AwsPolicy#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#name AwsPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#region AwsPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#tags AwsPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * availability_slo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#availability_slo AwsPolicy#availability_slo}
  */
  readonly availabilitySlo?: AwsPolicy.AvailabilitySloProperty[] | cdktn.IResolvable;
  /**
  * data_recovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#data_recovery AwsPolicy#data_recovery}
  */
  readonly dataRecovery?: AwsPolicy.DataRecoveryProperty[] | cdktn.IResolvable;
  /**
  * multi_az block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_az AwsPolicy#multi_az}
  */
  readonly multiAz?: AwsPolicy.MultiAzProperty[] | cdktn.IResolvable;
  /**
  * multi_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_region AwsPolicy#multi_region}
  */
  readonly multiRegion?: AwsPolicy.MultiRegionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy aws_resiliencehubv2_policy}
*/
export class AwsPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resiliencehubv2_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPolicy to import
  * @param importFromId The id of the existing AwsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resiliencehubv2_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy aws_resiliencehubv2_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resiliencehubv2_policy',
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
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._availabilitySlo.internalValue = config.availabilitySlo;
    this._dataRecovery.internalValue = config.dataRecovery;
    this._multiAz.internalValue = config.multiAz;
    this._multiRegion.internalValue = config.multiRegion;
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

  // kms_key_id - computed: false, optional: true, required: false
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

  // availability_slo - computed: false, optional: true, required: false
  private _availabilitySlo = new AwsPolicy.AvailabilitySloPropertyList(this, "availability_slo", false);
  public get availabilitySlo() {
    return this._availabilitySlo;
  }
  public putAvailabilitySlo(value: AwsPolicy.AvailabilitySloProperty[] | cdktn.IResolvable) {
    this._availabilitySlo.internalValue = value;
  }
  public resetAvailabilitySlo() {
    this._availabilitySlo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySloInput() {
    return this._availabilitySlo.internalValue;
  }

  // data_recovery - computed: false, optional: true, required: false
  private _dataRecovery = new AwsPolicy.DataRecoveryPropertyList(this, "data_recovery", false);
  public get dataRecovery() {
    return this._dataRecovery;
  }
  public putDataRecovery(value: AwsPolicy.DataRecoveryProperty[] | cdktn.IResolvable) {
    this._dataRecovery.internalValue = value;
  }
  public resetDataRecovery() {
    this._dataRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRecoveryInput() {
    return this._dataRecovery.internalValue;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz = new AwsPolicy.MultiAzPropertyList(this, "multi_az", false);
  public get multiAz() {
    return this._multiAz;
  }
  public putMultiAz(value: AwsPolicy.MultiAzProperty[] | cdktn.IResolvable) {
    this._multiAz.internalValue = value;
  }
  public resetMultiAz() {
    this._multiAz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz.internalValue;
  }

  // multi_region - computed: false, optional: true, required: false
  private _multiRegion = new AwsPolicy.MultiRegionPropertyList(this, "multi_region", false);
  public get multiRegion() {
    return this._multiRegion;
  }
  public putMultiRegion(value: AwsPolicy.MultiRegionProperty[] | cdktn.IResolvable) {
    this._multiRegion.internalValue = value;
  }
  public resetMultiRegion() {
    this._multiRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionInput() {
    return this._multiRegion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      availability_slo: cdktn.listMapper(awsPolicyAvailabilitySloPropertyToTerraform, true)(this._availabilitySlo.internalValue),
      data_recovery: cdktn.listMapper(awsPolicyDataRecoveryPropertyToTerraform, true)(this._dataRecovery.internalValue),
      multi_az: cdktn.listMapper(awsPolicyMultiAzPropertyToTerraform, true)(this._multiAz.internalValue),
      multi_region: cdktn.listMapper(awsPolicyMultiRegionPropertyToTerraform, true)(this._multiRegion.internalValue),
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
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      availability_slo: {
        value: cdktn.listMapperHcl(awsPolicyAvailabilitySloPropertyToHclTerraform, true)(this._availabilitySlo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.AvailabilitySloPropertyList",
      },
      data_recovery: {
        value: cdktn.listMapperHcl(awsPolicyDataRecoveryPropertyToHclTerraform, true)(this._dataRecovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.DataRecoveryPropertyList",
      },
      multi_az: {
        value: cdktn.listMapperHcl(awsPolicyMultiAzPropertyToHclTerraform, true)(this._multiAz.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.MultiAzPropertyList",
      },
      multi_region: {
        value: cdktn.listMapperHcl(awsPolicyMultiRegionPropertyToHclTerraform, true)(this._multiRegion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPolicy.MultiRegionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPolicyAvailabilitySloPropertyToTerraform(struct?: AwsPolicy.AvailabilitySloProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cdktn.numberToTerraform(struct!.target),
  }
}


export function awsPolicyAvailabilitySloPropertyToHclTerraform(struct?: AwsPolicy.AvailabilitySloProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cdktn.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyDataRecoveryPropertyToTerraform(struct?: AwsPolicy.DataRecoveryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_between_backups_in_minutes: cdktn.numberToTerraform(struct!.timeBetweenBackupsInMinutes),
  }
}


export function awsPolicyDataRecoveryPropertyToHclTerraform(struct?: AwsPolicy.DataRecoveryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_between_backups_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeBetweenBackupsInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyMultiAzPropertyToTerraform(struct?: AwsPolicy.MultiAzProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disaster_recovery_approach: cdktn.stringToTerraform(struct!.disasterRecoveryApproach),
    rpo_in_minutes: cdktn.numberToTerraform(struct!.rpoInMinutes),
    rto_in_minutes: cdktn.numberToTerraform(struct!.rtoInMinutes),
  }
}


export function awsPolicyMultiAzPropertyToHclTerraform(struct?: AwsPolicy.MultiAzProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disaster_recovery_approach: {
      value: cdktn.stringToHclTerraform(struct!.disasterRecoveryApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.rpoInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.rtoInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPolicyMultiRegionPropertyToTerraform(struct?: AwsPolicy.MultiRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disaster_recovery_approach: cdktn.stringToTerraform(struct!.disasterRecoveryApproach),
    rpo_in_minutes: cdktn.numberToTerraform(struct!.rpoInMinutes),
    rto_in_minutes: cdktn.numberToTerraform(struct!.rtoInMinutes),
  }
}


export function awsPolicyMultiRegionPropertyToHclTerraform(struct?: AwsPolicy.MultiRegionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disaster_recovery_approach: {
      value: cdktn.stringToHclTerraform(struct!.disasterRecoveryApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.rpoInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.rtoInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPolicy {
export interface AvailabilitySloProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#target AwsPolicy#target}
  */
  readonly target: number;
}
export class AvailabilitySloPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AvailabilitySloProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AvailabilitySloProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class AvailabilitySloPropertyList extends cdktn.ComplexList {
  public internalValue? : AvailabilitySloProperty[] | cdktn.IResolvable

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
  public get(index: number): AvailabilitySloPropertyOutputReference {
    return new AvailabilitySloPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRecoveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes AwsPolicy#time_between_backups_in_minutes}
  */
  readonly timeBetweenBackupsInMinutes: number;
}
export class DataRecoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataRecoveryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeBetweenBackupsInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBetweenBackupsInMinutes = this._timeBetweenBackupsInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRecoveryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeBetweenBackupsInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeBetweenBackupsInMinutes = value.timeBetweenBackupsInMinutes;
    }
  }

  // time_between_backups_in_minutes - computed: false, optional: false, required: true
  private _timeBetweenBackupsInMinutes?: number; 
  public get timeBetweenBackupsInMinutes() {
    return this.getNumberAttribute('time_between_backups_in_minutes');
  }
  public set timeBetweenBackupsInMinutes(value: number) {
    this._timeBetweenBackupsInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBetweenBackupsInMinutesInput() {
    return this._timeBetweenBackupsInMinutes;
  }
}

export class DataRecoveryPropertyList extends cdktn.ComplexList {
  public internalValue? : DataRecoveryProperty[] | cdktn.IResolvable

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
  public get(index: number): DataRecoveryPropertyOutputReference {
    return new DataRecoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MultiAzProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach AwsPolicy#disaster_recovery_approach}
  */
  readonly disasterRecoveryApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes AwsPolicy#rpo_in_minutes}
  */
  readonly rpoInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes AwsPolicy#rto_in_minutes}
  */
  readonly rtoInMinutes?: number;
}
export class MultiAzPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MultiAzProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disasterRecoveryApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoveryApproach = this._disasterRecoveryApproach;
    }
    if (this._rpoInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInMinutes = this._rpoInMinutes;
    }
    if (this._rtoInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInMinutes = this._rtoInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultiAzProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disasterRecoveryApproach = undefined;
      this._rpoInMinutes = undefined;
      this._rtoInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disasterRecoveryApproach = value.disasterRecoveryApproach;
      this._rpoInMinutes = value.rpoInMinutes;
      this._rtoInMinutes = value.rtoInMinutes;
    }
  }

  // disaster_recovery_approach - computed: false, optional: false, required: true
  private _disasterRecoveryApproach?: string; 
  public get disasterRecoveryApproach() {
    return this.getStringAttribute('disaster_recovery_approach');
  }
  public set disasterRecoveryApproach(value: string) {
    this._disasterRecoveryApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryApproachInput() {
    return this._disasterRecoveryApproach;
  }

  // rpo_in_minutes - computed: false, optional: true, required: false
  private _rpoInMinutes?: number; 
  public get rpoInMinutes() {
    return this.getNumberAttribute('rpo_in_minutes');
  }
  public set rpoInMinutes(value: number) {
    this._rpoInMinutes = value;
  }
  public resetRpoInMinutes() {
    this._rpoInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInMinutesInput() {
    return this._rpoInMinutes;
  }

  // rto_in_minutes - computed: false, optional: true, required: false
  private _rtoInMinutes?: number; 
  public get rtoInMinutes() {
    return this.getNumberAttribute('rto_in_minutes');
  }
  public set rtoInMinutes(value: number) {
    this._rtoInMinutes = value;
  }
  public resetRtoInMinutes() {
    this._rtoInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInMinutesInput() {
    return this._rtoInMinutes;
  }
}

export class MultiAzPropertyList extends cdktn.ComplexList {
  public internalValue? : MultiAzProperty[] | cdktn.IResolvable

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
  public get(index: number): MultiAzPropertyOutputReference {
    return new MultiAzPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MultiRegionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach AwsPolicy#disaster_recovery_approach}
  */
  readonly disasterRecoveryApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes AwsPolicy#rpo_in_minutes}
  */
  readonly rpoInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes AwsPolicy#rto_in_minutes}
  */
  readonly rtoInMinutes?: number;
}
export class MultiRegionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MultiRegionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disasterRecoveryApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoveryApproach = this._disasterRecoveryApproach;
    }
    if (this._rpoInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInMinutes = this._rpoInMinutes;
    }
    if (this._rtoInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInMinutes = this._rtoInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultiRegionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disasterRecoveryApproach = undefined;
      this._rpoInMinutes = undefined;
      this._rtoInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disasterRecoveryApproach = value.disasterRecoveryApproach;
      this._rpoInMinutes = value.rpoInMinutes;
      this._rtoInMinutes = value.rtoInMinutes;
    }
  }

  // disaster_recovery_approach - computed: false, optional: false, required: true
  private _disasterRecoveryApproach?: string; 
  public get disasterRecoveryApproach() {
    return this.getStringAttribute('disaster_recovery_approach');
  }
  public set disasterRecoveryApproach(value: string) {
    this._disasterRecoveryApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryApproachInput() {
    return this._disasterRecoveryApproach;
  }

  // rpo_in_minutes - computed: false, optional: true, required: false
  private _rpoInMinutes?: number; 
  public get rpoInMinutes() {
    return this.getNumberAttribute('rpo_in_minutes');
  }
  public set rpoInMinutes(value: number) {
    this._rpoInMinutes = value;
  }
  public resetRpoInMinutes() {
    this._rpoInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInMinutesInput() {
    return this._rpoInMinutes;
  }

  // rto_in_minutes - computed: false, optional: true, required: false
  private _rtoInMinutes?: number; 
  public get rtoInMinutes() {
    return this.getNumberAttribute('rto_in_minutes');
  }
  public set rtoInMinutes(value: number) {
    this._rtoInMinutes = value;
  }
  public resetRtoInMinutes() {
    this._rtoInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInMinutesInput() {
    return this._rtoInMinutes;
  }
}

export class MultiRegionPropertyList extends cdktn.ComplexList {
  public internalValue? : MultiRegionProperty[] | cdktn.IResolvable

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
  public get(index: number): MultiRegionPropertyOutputReference {
    return new MultiRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
