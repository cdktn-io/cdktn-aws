// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsS3ControlStorageLensConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#account_id AwsS3ControlStorageLensConfiguration#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#config_id AwsS3ControlStorageLensConfiguration#config_id}
  */
  readonly configId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#id AwsS3ControlStorageLensConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#region AwsS3ControlStorageLensConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#tags AwsS3ControlStorageLensConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#tags_all AwsS3ControlStorageLensConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * storage_lens_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#storage_lens_configuration AwsS3ControlStorageLensConfiguration#storage_lens_configuration}
  */
  readonly storageLensConfiguration: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration}
*/
export class AwsS3ControlStorageLensConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_storage_lens_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsS3ControlStorageLensConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsS3ControlStorageLensConfiguration to import
  * @param importFromId The id of the existing AwsS3ControlStorageLensConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsS3ControlStorageLensConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_storage_lens_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsS3ControlStorageLensConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsS3ControlStorageLensConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_storage_lens_configuration',
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
    this._accountId = config.accountId;
    this._configId = config.configId;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._storageLensConfiguration.internalValue = config.storageLensConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // storage_lens_configuration - computed: false, optional: false, required: true
  private _storageLensConfiguration = new AwsS3ControlStorageLensConfiguration.StorageLensConfigurationPropertyOutputReference(this, "storage_lens_configuration");
  public get storageLensConfiguration() {
    return this._storageLensConfiguration;
  }
  public putStorageLensConfiguration(value: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationProperty) {
    this._storageLensConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensConfigurationInput() {
    return this._storageLensConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      config_id: cdktn.stringToTerraform(this._configId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      storage_lens_configuration: awsS3ControlStorageLensConfigurationStorageLensConfigurationPropertyToTerraform(this._storageLensConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktn.stringToHclTerraform(this._configId),
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
      storage_lens_configuration: {
        value: awsS3ControlStorageLensConfigurationStorageLensConfigurationPropertyToHclTerraform(this._storageLensConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsS3ControlStorageLensConfiguration.StorageLensConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelActivityMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelActivityMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelActivityMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelActivityMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationSelectionCriteriaPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.SelectionCriteriaPropertyOutputReference | AwsS3ControlStorageLensConfiguration.SelectionCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    max_depth: cdktn.numberToTerraform(struct!.maxDepth),
    min_storage_bytes_percentage: cdktn.numberToTerraform(struct!.minStorageBytesPercentage),
  }
}


export function awsS3ControlStorageLensConfigurationSelectionCriteriaPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.SelectionCriteriaPropertyOutputReference | AwsS3ControlStorageLensConfiguration.SelectionCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_depth: {
      value: cdktn.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_storage_bytes_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minStorageBytesPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    selection_criteria: awsS3ControlStorageLensConfigurationSelectionCriteriaPropertyToTerraform(struct!.selectionCriteria),
  }
}


export function awsS3ControlStorageLensConfigurationStorageMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageMetricsProperty): any {
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
    selection_criteria: {
      value: awsS3ControlStorageLensConfigurationSelectionCriteriaPropertyToHclTerraform(struct!.selectionCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "SelectionCriteriaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationPrefixLevelPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.PrefixLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.PrefixLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_metrics: awsS3ControlStorageLensConfigurationStorageMetricsPropertyToTerraform(struct!.storageMetrics),
  }
}


export function awsS3ControlStorageLensConfigurationPrefixLevelPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.PrefixLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.PrefixLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageMetricsPropertyToHclTerraform(struct!.storageMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageMetricsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationBucketLevelPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.BucketLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.BucketLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activity_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct!.advancedDataProtectionMetrics),
    advanced_performance_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToTerraform(struct!.advancedPerformanceMetrics),
    detailed_status_code_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyToTerraform(struct!.detailedStatusCodeMetrics),
    prefix_level: awsS3ControlStorageLensConfigurationPrefixLevelPropertyToTerraform(struct!.prefixLevel),
  }
}


export function awsS3ControlStorageLensConfigurationBucketLevelPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.BucketLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.BucketLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activity_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyToHclTerraform(struct!.activityMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyList",
    },
    advanced_cost_optimization_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct!.advancedCostOptimizationMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyList",
    },
    advanced_data_protection_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct!.advancedDataProtectionMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyList",
    },
    advanced_performance_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct!.advancedPerformanceMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyList",
    },
    detailed_status_code_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyToHclTerraform(struct!.detailedStatusCodeMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyList",
    },
    prefix_level: {
      value: awsS3ControlStorageLensConfigurationPrefixLevelPropertyToHclTerraform(struct!.prefixLevel),
      isBlock: true,
      type: "list",
      storageClassType: "PrefixLevelPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationAccountLevelPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.AccountLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.AccountLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activity_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsPropertyToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyToTerraform(struct!.advancedDataProtectionMetrics),
    advanced_performance_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyToTerraform(struct!.advancedPerformanceMetrics),
    bucket_level: awsS3ControlStorageLensConfigurationBucketLevelPropertyToTerraform(struct!.bucketLevel),
    detailed_status_code_metrics: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyToTerraform(struct!.detailedStatusCodeMetrics),
  }
}


export function awsS3ControlStorageLensConfigurationAccountLevelPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.AccountLevelPropertyOutputReference | AwsS3ControlStorageLensConfiguration.AccountLevelProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activity_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsPropertyToHclTerraform(struct!.activityMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelActivityMetricsPropertyList",
    },
    advanced_cost_optimization_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyToHclTerraform(struct!.advancedCostOptimizationMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyList",
    },
    advanced_data_protection_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyToHclTerraform(struct!.advancedDataProtectionMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyList",
    },
    advanced_performance_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyToHclTerraform(struct!.advancedPerformanceMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyList",
    },
    bucket_level: {
      value: awsS3ControlStorageLensConfigurationBucketLevelPropertyToHclTerraform(struct!.bucketLevel),
      isBlock: true,
      type: "list",
      storageClassType: "BucketLevelPropertyList",
    },
    detailed_status_code_metrics: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyToHclTerraform(struct!.detailedStatusCodeMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationAwsOrgPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.AwsOrgPropertyOutputReference | AwsS3ControlStorageLensConfiguration.AwsOrgProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsS3ControlStorageLensConfigurationAwsOrgPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.AwsOrgPropertyOutputReference | AwsS3ControlStorageLensConfiguration.AwsOrgProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationCloudWatchMetricsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.CloudWatchMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.CloudWatchMetricsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsS3ControlStorageLensConfigurationCloudWatchMetricsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.CloudWatchMetricsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.CloudWatchMetricsProperty): any {
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


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_kms: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyToTerraform(struct!.sseKms),
    sse_s3: cdktn.listMapper(awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyToTerraform, true)(struct!.sseS3),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_kms: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyToHclTerraform(struct!.sseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyList",
    },
    sse_s3: {
      value: cdktn.listMapperHcl(awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyToHclTerraform, true)(struct!.sseS3),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    arn: cdktn.stringToTerraform(struct!.arn),
    format: cdktn.stringToTerraform(struct!.format),
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    encryption: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct!.encryption),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportS3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_kms: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToTerraform(struct!.sseKms),
    sse_s3: cdktn.listMapper(awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyToTerraform, true)(struct!.sseS3),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_kms: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToHclTerraform(struct!.sseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyList",
    },
    sse_s3: {
      value: cdktn.listMapperHcl(awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyToHclTerraform, true)(struct!.sseS3),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct!.encryption),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationDataExportStorageLensTableDestinationProperty): any {
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
    encryption: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationDataExportPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.DataExportPropertyOutputReference | AwsS3ControlStorageLensConfiguration.DataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloud_watch_metrics: awsS3ControlStorageLensConfigurationCloudWatchMetricsPropertyToTerraform(struct!.cloudWatchMetrics),
    s3_bucket_destination: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationPropertyToTerraform(struct!.s3BucketDestination),
    storage_lens_table_destination: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationPropertyToTerraform(struct!.storageLensTableDestination),
  }
}


export function awsS3ControlStorageLensConfigurationDataExportPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.DataExportPropertyOutputReference | AwsS3ControlStorageLensConfiguration.DataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloud_watch_metrics: {
      value: awsS3ControlStorageLensConfigurationCloudWatchMetricsPropertyToHclTerraform(struct!.cloudWatchMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "CloudWatchMetricsPropertyList",
    },
    s3_bucket_destination: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationPropertyToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportS3BucketDestinationPropertyList",
    },
    storage_lens_table_destination: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationDataExportStorageLensTableDestinationPropertyToHclTerraform(struct!.storageLensTableDestination),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationDataExportStorageLensTableDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationExcludePropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.ExcludePropertyOutputReference | AwsS3ControlStorageLensConfiguration.ExcludeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function awsS3ControlStorageLensConfigurationExcludePropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.ExcludePropertyOutputReference | AwsS3ControlStorageLensConfiguration.ExcludeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buckets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_kms: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyToTerraform(struct!.sseKms),
    sse_s3: cdktn.listMapper(awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyToTerraform, true)(struct!.sseS3),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_kms: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyToHclTerraform(struct!.sseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyList",
    },
    sse_s3: {
      value: cdktn.listMapperHcl(awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyToHclTerraform, true)(struct!.sseS3),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    arn: cdktn.stringToTerraform(struct!.arn),
    format: cdktn.stringToTerraform(struct!.format),
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    encryption: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToTerraform(struct!.encryption),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_kms: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToTerraform(struct!.sseKms),
    sse_s3: cdktn.listMapper(awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyToTerraform, true)(struct!.sseS3),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_kms: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyToHclTerraform(struct!.sseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyList",
    },
    sse_s3: {
      value: cdktn.listMapperHcl(awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyToHclTerraform, true)(struct!.sseS3),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToTerraform(struct!.encryption),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty): any {
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
    encryption: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationExpandedPrefixesDataExportPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.ExpandedPrefixesDataExportPropertyOutputReference | AwsS3ControlStorageLensConfiguration.ExpandedPrefixesDataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_destination: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToTerraform(struct!.s3BucketDestination),
    storage_lens_table_destination: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToTerraform(struct!.storageLensTableDestination),
  }
}


export function awsS3ControlStorageLensConfigurationExpandedPrefixesDataExportPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.ExpandedPrefixesDataExportPropertyOutputReference | AwsS3ControlStorageLensConfiguration.ExpandedPrefixesDataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_destination: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyList",
    },
    storage_lens_table_destination: {
      value: awsS3ControlStorageLensConfigurationStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyToHclTerraform(struct!.storageLensTableDestination),
      isBlock: true,
      type: "list",
      storageClassType: "StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationIncludePropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.IncludePropertyOutputReference | AwsS3ControlStorageLensConfiguration.IncludeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function awsS3ControlStorageLensConfigurationIncludePropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.IncludePropertyOutputReference | AwsS3ControlStorageLensConfiguration.IncludeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buckets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationPropertyToTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    prefix_delimiter: cdktn.stringToTerraform(struct!.prefixDelimiter),
    account_level: awsS3ControlStorageLensConfigurationAccountLevelPropertyToTerraform(struct!.accountLevel),
    aws_org: awsS3ControlStorageLensConfigurationAwsOrgPropertyToTerraform(struct!.awsOrg),
    data_export: awsS3ControlStorageLensConfigurationDataExportPropertyToTerraform(struct!.dataExport),
    exclude: awsS3ControlStorageLensConfigurationExcludePropertyToTerraform(struct!.exclude),
    expanded_prefixes_data_export: awsS3ControlStorageLensConfigurationExpandedPrefixesDataExportPropertyToTerraform(struct!.expandedPrefixesDataExport),
    include: awsS3ControlStorageLensConfigurationIncludePropertyToTerraform(struct!.include),
  }
}


export function awsS3ControlStorageLensConfigurationStorageLensConfigurationPropertyToHclTerraform(struct?: AwsS3ControlStorageLensConfiguration.StorageLensConfigurationPropertyOutputReference | AwsS3ControlStorageLensConfiguration.StorageLensConfigurationProperty): any {
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
    prefix_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.prefixDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_level: {
      value: awsS3ControlStorageLensConfigurationAccountLevelPropertyToHclTerraform(struct!.accountLevel),
      isBlock: true,
      type: "list",
      storageClassType: "AccountLevelPropertyList",
    },
    aws_org: {
      value: awsS3ControlStorageLensConfigurationAwsOrgPropertyToHclTerraform(struct!.awsOrg),
      isBlock: true,
      type: "list",
      storageClassType: "AwsOrgPropertyList",
    },
    data_export: {
      value: awsS3ControlStorageLensConfigurationDataExportPropertyToHclTerraform(struct!.dataExport),
      isBlock: true,
      type: "list",
      storageClassType: "DataExportPropertyList",
    },
    exclude: {
      value: awsS3ControlStorageLensConfigurationExcludePropertyToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePropertyList",
    },
    expanded_prefixes_data_export: {
      value: awsS3ControlStorageLensConfigurationExpandedPrefixesDataExportPropertyToHclTerraform(struct!.expandedPrefixesDataExport),
      isBlock: true,
      type: "list",
      storageClassType: "ExpandedPrefixesDataExportPropertyList",
    },
    include: {
      value: awsS3ControlStorageLensConfigurationIncludePropertyToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "IncludePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsS3ControlStorageLensConfiguration {
export interface StorageLensConfigurationAccountLevelActivityMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelActivityMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelActivityMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelActivityMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty | undefined) {
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
export interface StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty | undefined) {
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
export interface SelectionCriteriaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#delimiter AwsS3ControlStorageLensConfiguration#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#max_depth AwsS3ControlStorageLensConfiguration#max_depth}
  */
  readonly maxDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#min_storage_bytes_percentage AwsS3ControlStorageLensConfiguration#min_storage_bytes_percentage}
  */
  readonly minStorageBytesPercentage?: number;
}
export class SelectionCriteriaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelectionCriteriaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._minStorageBytesPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorageBytesPercentage = this._minStorageBytesPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectionCriteriaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._maxDepth = undefined;
      this._minStorageBytesPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._maxDepth = value.maxDepth;
      this._minStorageBytesPercentage = value.minStorageBytesPercentage;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // max_depth - computed: false, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // min_storage_bytes_percentage - computed: false, optional: true, required: false
  private _minStorageBytesPercentage?: number; 
  public get minStorageBytesPercentage() {
    return this.getNumberAttribute('min_storage_bytes_percentage');
  }
  public set minStorageBytesPercentage(value: number) {
    this._minStorageBytesPercentage = value;
  }
  public resetMinStorageBytesPercentage() {
    this._minStorageBytesPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageBytesPercentageInput() {
    return this._minStorageBytesPercentage;
  }
}
export interface StorageMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * selection_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#selection_criteria AwsS3ControlStorageLensConfiguration#selection_criteria}
  */
  readonly selectionCriteria?: SelectionCriteriaProperty;
}
export class StorageMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._selectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionCriteria = this._selectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageMetricsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._selectionCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._selectionCriteria.internalValue = value.selectionCriteria;
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

  // selection_criteria - computed: false, optional: true, required: false
  private _selectionCriteria = new SelectionCriteriaPropertyOutputReference(this, "selection_criteria");
  public get selectionCriteria() {
    return this._selectionCriteria;
  }
  public putSelectionCriteria(value: SelectionCriteriaProperty) {
    this._selectionCriteria.internalValue = value;
  }
  public resetSelectionCriteria() {
    this._selectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionCriteriaInput() {
    return this._selectionCriteria.internalValue;
  }
}
export interface PrefixLevelProperty {
  /**
  * storage_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#storage_metrics AwsS3ControlStorageLensConfiguration#storage_metrics}
  */
  readonly storageMetrics: StorageMetricsProperty;
}
export class PrefixLevelPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrefixLevelProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMetrics = this._storageMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrefixLevelProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageMetrics.internalValue = value.storageMetrics;
    }
  }

  // storage_metrics - computed: false, optional: false, required: true
  private _storageMetrics = new StorageMetricsPropertyOutputReference(this, "storage_metrics");
  public get storageMetrics() {
    return this._storageMetrics;
  }
  public putStorageMetrics(value: StorageMetricsProperty) {
    this._storageMetrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMetricsInput() {
    return this._storageMetrics.internalValue;
  }
}
export interface BucketLevelProperty {
  /**
  * activity_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#activity_metrics AwsS3ControlStorageLensConfiguration#activity_metrics}
  */
  readonly activityMetrics?: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty;
  /**
  * advanced_cost_optimization_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_cost_optimization_metrics AwsS3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty;
  /**
  * advanced_data_protection_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_data_protection_metrics AwsS3ControlStorageLensConfiguration#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty;
  /**
  * advanced_performance_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_performance_metrics AwsS3ControlStorageLensConfiguration#advanced_performance_metrics}
  */
  readonly advancedPerformanceMetrics?: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty;
  /**
  * detailed_status_code_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#detailed_status_code_metrics AwsS3ControlStorageLensConfiguration#detailed_status_code_metrics}
  */
  readonly detailedStatusCodeMetrics?: StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty;
  /**
  * prefix_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#prefix_level AwsS3ControlStorageLensConfiguration#prefix_level}
  */
  readonly prefixLevel?: PrefixLevelProperty;
}
export class BucketLevelPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketLevelProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
    }
    if (this._detailedStatusCodeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodeMetrics = this._detailedStatusCodeMetrics?.internalValue;
    }
    if (this._prefixLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLevel = this._prefixLevel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketLevelProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._advancedPerformanceMetrics.internalValue = undefined;
      this._detailedStatusCodeMetrics.internalValue = undefined;
      this._prefixLevel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
      this._detailedStatusCodeMetrics.internalValue = value.detailedStatusCodeMetrics;
      this._prefixLevel.internalValue = value.prefixLevel;
    }
  }

  // activity_metrics - computed: false, optional: true, required: false
  private _activityMetrics = new StorageLensConfigurationAccountLevelBucketLevelActivityMetricsPropertyOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: StorageLensConfigurationAccountLevelBucketLevelActivityMetricsProperty) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: false, optional: true, required: false
  private _advancedCostOptimizationMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsPropertyOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsProperty) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: false, optional: true, required: false
  private _advancedDataProtectionMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsPropertyOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsProperty) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // advanced_performance_metrics - computed: false, optional: true, required: false
  private _advancedPerformanceMetrics = new StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsPropertyOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }
  public putAdvancedPerformanceMetrics(value: StorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsProperty) {
    this._advancedPerformanceMetrics.internalValue = value;
  }
  public resetAdvancedPerformanceMetrics() {
    this._advancedPerformanceMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPerformanceMetricsInput() {
    return this._advancedPerformanceMetrics.internalValue;
  }

  // detailed_status_code_metrics - computed: false, optional: true, required: false
  private _detailedStatusCodeMetrics = new StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsPropertyOutputReference(this, "detailed_status_code_metrics");
  public get detailedStatusCodeMetrics() {
    return this._detailedStatusCodeMetrics;
  }
  public putDetailedStatusCodeMetrics(value: StorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsProperty) {
    this._detailedStatusCodeMetrics.internalValue = value;
  }
  public resetDetailedStatusCodeMetrics() {
    this._detailedStatusCodeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodeMetricsInput() {
    return this._detailedStatusCodeMetrics.internalValue;
  }

  // prefix_level - computed: false, optional: true, required: false
  private _prefixLevel = new PrefixLevelPropertyOutputReference(this, "prefix_level");
  public get prefixLevel() {
    return this._prefixLevel;
  }
  public putPrefixLevel(value: PrefixLevelProperty) {
    this._prefixLevel.internalValue = value;
  }
  public resetPrefixLevel() {
    this._prefixLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLevelInput() {
    return this._prefixLevel.internalValue;
  }
}
export interface StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty | undefined) {
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
export interface AccountLevelProperty {
  /**
  * activity_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#activity_metrics AwsS3ControlStorageLensConfiguration#activity_metrics}
  */
  readonly activityMetrics?: StorageLensConfigurationAccountLevelActivityMetricsProperty;
  /**
  * advanced_cost_optimization_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_cost_optimization_metrics AwsS3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty;
  /**
  * advanced_data_protection_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_data_protection_metrics AwsS3ControlStorageLensConfiguration#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty;
  /**
  * advanced_performance_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#advanced_performance_metrics AwsS3ControlStorageLensConfiguration#advanced_performance_metrics}
  */
  readonly advancedPerformanceMetrics?: StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty;
  /**
  * bucket_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#bucket_level AwsS3ControlStorageLensConfiguration#bucket_level}
  */
  readonly bucketLevel: BucketLevelProperty;
  /**
  * detailed_status_code_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#detailed_status_code_metrics AwsS3ControlStorageLensConfiguration#detailed_status_code_metrics}
  */
  readonly detailedStatusCodeMetrics?: StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty;
}
export class AccountLevelPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountLevelProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
    }
    if (this._bucketLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketLevel = this._bucketLevel?.internalValue;
    }
    if (this._detailedStatusCodeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodeMetrics = this._detailedStatusCodeMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountLevelProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._advancedPerformanceMetrics.internalValue = undefined;
      this._bucketLevel.internalValue = undefined;
      this._detailedStatusCodeMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
      this._bucketLevel.internalValue = value.bucketLevel;
      this._detailedStatusCodeMetrics.internalValue = value.detailedStatusCodeMetrics;
    }
  }

  // activity_metrics - computed: false, optional: true, required: false
  private _activityMetrics = new StorageLensConfigurationAccountLevelActivityMetricsPropertyOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: StorageLensConfigurationAccountLevelActivityMetricsProperty) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: false, optional: true, required: false
  private _advancedCostOptimizationMetrics = new StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsPropertyOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: StorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsProperty) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: false, optional: true, required: false
  private _advancedDataProtectionMetrics = new StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsPropertyOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: StorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsProperty) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // advanced_performance_metrics - computed: false, optional: true, required: false
  private _advancedPerformanceMetrics = new StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsPropertyOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }
  public putAdvancedPerformanceMetrics(value: StorageLensConfigurationAccountLevelAdvancedPerformanceMetricsProperty) {
    this._advancedPerformanceMetrics.internalValue = value;
  }
  public resetAdvancedPerformanceMetrics() {
    this._advancedPerformanceMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPerformanceMetricsInput() {
    return this._advancedPerformanceMetrics.internalValue;
  }

  // bucket_level - computed: false, optional: false, required: true
  private _bucketLevel = new BucketLevelPropertyOutputReference(this, "bucket_level");
  public get bucketLevel() {
    return this._bucketLevel;
  }
  public putBucketLevel(value: BucketLevelProperty) {
    this._bucketLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketLevelInput() {
    return this._bucketLevel.internalValue;
  }

  // detailed_status_code_metrics - computed: false, optional: true, required: false
  private _detailedStatusCodeMetrics = new StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsPropertyOutputReference(this, "detailed_status_code_metrics");
  public get detailedStatusCodeMetrics() {
    return this._detailedStatusCodeMetrics;
  }
  public putDetailedStatusCodeMetrics(value: StorageLensConfigurationAccountLevelDetailedStatusCodeMetricsProperty) {
    this._detailedStatusCodeMetrics.internalValue = value;
  }
  public resetDetailedStatusCodeMetrics() {
    this._detailedStatusCodeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodeMetricsInput() {
    return this._detailedStatusCodeMetrics.internalValue;
  }
}
export interface AwsOrgProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#arn AwsS3ControlStorageLensConfiguration#arn}
  */
  readonly arn: string;
}
export class AwsOrgPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsOrgProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsOrgProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
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
}
export interface CloudWatchMetricsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}
export class CloudWatchMetricsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudWatchMetricsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudWatchMetricsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#key_id AwsS3ControlStorageLensConfiguration#key_id}
  */
  readonly keyId: string;
}
export class StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property {
}
export class StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyList extends cdktn.ComplexList {
  public internalValue? : StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable

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
  public get(index: number): StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference {
    return new StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty {
  /**
  * sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_kms AwsS3ControlStorageLensConfiguration#sse_kms}
  */
  readonly sseKms?: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty;
  /**
  * sse_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_s3 AwsS3ControlStorageLensConfiguration#sse_s3}
  */
  readonly sseS3?: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable;
}
export class StorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    if (this._sseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseS3 = this._sseS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKms.internalValue = undefined;
      this._sseS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKms.internalValue = value.sseKms;
      this._sseS3.internalValue = value.sseS3;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsProperty) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3 = new StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3PropertyList(this, "sse_s3", false);
  public get sseS3() {
    return this._sseS3;
  }
  public putSseS3(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable) {
    this._sseS3.internalValue = value;
  }
  public resetSseS3() {
    this._sseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3.internalValue;
  }
}
export interface StorageLensConfigurationDataExportS3BucketDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#account_id AwsS3ControlStorageLensConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#arn AwsS3ControlStorageLensConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#format AwsS3ControlStorageLensConfiguration#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#output_schema_version AwsS3ControlStorageLensConfiguration#output_schema_version}
  */
  readonly outputSchemaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#prefix AwsS3ControlStorageLensConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#encryption AwsS3ControlStorageLensConfiguration#encryption}
  */
  readonly encryption?: StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty;
}
export class StorageLensConfigurationDataExportS3BucketDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportS3BucketDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportS3BucketDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._arn = undefined;
      this._format = undefined;
      this._outputSchemaVersion = undefined;
      this._prefix = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._arn = value.arn;
      this._format = value.format;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._prefix = value.prefix;
      this._encryption.internalValue = value.encryption;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_schema_version - computed: false, optional: false, required: true
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageLensConfigurationDataExportS3BucketDestinationEncryptionPropertyOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageLensConfigurationDataExportS3BucketDestinationEncryptionProperty) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#key_id AwsS3ControlStorageLensConfiguration#key_id}
  */
  readonly keyId: string;
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property {
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyList extends cdktn.ComplexList {
  public internalValue? : StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable

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
  public get(index: number): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference {
    return new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty {
  /**
  * sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_kms AwsS3ControlStorageLensConfiguration#sse_kms}
  */
  readonly sseKms?: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty;
  /**
  * sse_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_s3 AwsS3ControlStorageLensConfiguration#sse_s3}
  */
  readonly sseS3?: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable;
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    if (this._sseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseS3 = this._sseS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKms.internalValue = undefined;
      this._sseS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKms.internalValue = value.sseKms;
      this._sseS3.internalValue = value.sseS3;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseKmsProperty) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3 = new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3PropertyList(this, "sse_s3", false);
  public get sseS3() {
    return this._sseS3;
  }
  public putSseS3(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable) {
    this._sseS3.internalValue = value;
  }
  public resetSseS3() {
    this._sseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3.internalValue;
  }
}
export interface StorageLensConfigurationDataExportStorageLensTableDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#encryption AwsS3ControlStorageLensConfiguration#encryption}
  */
  readonly encryption?: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty;
}
export class StorageLensConfigurationDataExportStorageLensTableDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationDataExportStorageLensTableDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationDataExportStorageLensTableDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryption.internalValue = value.encryption;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionPropertyOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageLensConfigurationDataExportStorageLensTableDestinationEncryptionProperty) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface DataExportProperty {
  /**
  * cloud_watch_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#cloud_watch_metrics AwsS3ControlStorageLensConfiguration#cloud_watch_metrics}
  */
  readonly cloudWatchMetrics?: CloudWatchMetricsProperty;
  /**
  * s3_bucket_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#s3_bucket_destination AwsS3ControlStorageLensConfiguration#s3_bucket_destination}
  */
  readonly s3BucketDestination?: StorageLensConfigurationDataExportS3BucketDestinationProperty;
  /**
  * storage_lens_table_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#storage_lens_table_destination AwsS3ControlStorageLensConfiguration#storage_lens_table_destination}
  */
  readonly storageLensTableDestination?: StorageLensConfigurationDataExportStorageLensTableDestinationProperty;
}
export class DataExportPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataExportProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchMetrics = this._cloudWatchMetrics?.internalValue;
    }
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    if (this._storageLensTableDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExportProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudWatchMetrics.internalValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
      this._storageLensTableDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudWatchMetrics.internalValue = value.cloudWatchMetrics;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
      this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
    }
  }

  // cloud_watch_metrics - computed: false, optional: true, required: false
  private _cloudWatchMetrics = new CloudWatchMetricsPropertyOutputReference(this, "cloud_watch_metrics");
  public get cloudWatchMetrics() {
    return this._cloudWatchMetrics;
  }
  public putCloudWatchMetrics(value: CloudWatchMetricsProperty) {
    this._cloudWatchMetrics.internalValue = value;
  }
  public resetCloudWatchMetrics() {
    this._cloudWatchMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchMetricsInput() {
    return this._cloudWatchMetrics.internalValue;
  }

  // s3_bucket_destination - computed: false, optional: true, required: false
  private _s3BucketDestination = new StorageLensConfigurationDataExportS3BucketDestinationPropertyOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: StorageLensConfigurationDataExportS3BucketDestinationProperty) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }

  // storage_lens_table_destination - computed: false, optional: true, required: false
  private _storageLensTableDestination = new StorageLensConfigurationDataExportStorageLensTableDestinationPropertyOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
  public putStorageLensTableDestination(value: StorageLensConfigurationDataExportStorageLensTableDestinationProperty) {
    this._storageLensTableDestination.internalValue = value;
  }
  public resetStorageLensTableDestination() {
    this._storageLensTableDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensTableDestinationInput() {
    return this._storageLensTableDestination.internalValue;
  }
}
export interface ExcludeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#buckets AwsS3ControlStorageLensConfiguration#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#regions AwsS3ControlStorageLensConfiguration#regions}
  */
  readonly regions?: string[];
}
export class ExcludePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExcludeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#key_id AwsS3ControlStorageLensConfiguration#key_id}
  */
  readonly keyId: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property {
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyList extends cdktn.ComplexList {
  public internalValue? : StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable

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
  public get(index: number): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference {
    return new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty {
  /**
  * sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_kms AwsS3ControlStorageLensConfiguration#sse_kms}
  */
  readonly sseKms?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty;
  /**
  * sse_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_s3 AwsS3ControlStorageLensConfiguration#sse_s3}
  */
  readonly sseS3?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    if (this._sseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseS3 = this._sseS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKms.internalValue = undefined;
      this._sseS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKms.internalValue = value.sseKms;
      this._sseS3.internalValue = value.sseS3;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsPropertyOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseKmsProperty) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3 = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3PropertyList(this, "sse_s3", false);
  public get sseS3() {
    return this._sseS3;
  }
  public putSseS3(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSseS3Property[] | cdktn.IResolvable) {
    this._sseS3.internalValue = value;
  }
  public resetSseS3() {
    this._sseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3.internalValue;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#account_id AwsS3ControlStorageLensConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#arn AwsS3ControlStorageLensConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#format AwsS3ControlStorageLensConfiguration#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#output_schema_version AwsS3ControlStorageLensConfiguration#output_schema_version}
  */
  readonly outputSchemaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#prefix AwsS3ControlStorageLensConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#encryption AwsS3ControlStorageLensConfiguration#encryption}
  */
  readonly encryption?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty;
}
export class StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._arn = undefined;
      this._format = undefined;
      this._outputSchemaVersion = undefined;
      this._prefix = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._arn = value.arn;
      this._format = value.format;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._prefix = value.prefix;
      this._encryption.internalValue = value.encryption;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_schema_version - computed: false, optional: false, required: true
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionPropertyOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionProperty) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#key_id AwsS3ControlStorageLensConfiguration#key_id}
  */
  readonly keyId: string;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property {
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyList extends cdktn.ComplexList {
  public internalValue? : StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable

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
  public get(index: number): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference {
    return new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty {
  /**
  * sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_kms AwsS3ControlStorageLensConfiguration#sse_kms}
  */
  readonly sseKms?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty;
  /**
  * sse_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#sse_s3 AwsS3ControlStorageLensConfiguration#sse_s3}
  */
  readonly sseS3?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    if (this._sseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseS3 = this._sseS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKms.internalValue = undefined;
      this._sseS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKms.internalValue = value.sseKms;
      this._sseS3.internalValue = value.sseS3;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsPropertyOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseKmsProperty) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3 = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3PropertyList(this, "sse_s3", false);
  public get sseS3() {
    return this._sseS3;
  }
  public putSseS3(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSseS3Property[] | cdktn.IResolvable) {
    this._sseS3.internalValue = value;
  }
  public resetSseS3() {
    this._sseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3.internalValue;
  }
}
export interface StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#encryption AwsS3ControlStorageLensConfiguration#encryption}
  */
  readonly encryption?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty;
}
export class StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryption.internalValue = value.encryption;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionPropertyOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionProperty) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface ExpandedPrefixesDataExportProperty {
  /**
  * s3_bucket_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#s3_bucket_destination AwsS3ControlStorageLensConfiguration#s3_bucket_destination}
  */
  readonly s3BucketDestination?: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty;
  /**
  * storage_lens_table_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#storage_lens_table_destination AwsS3ControlStorageLensConfiguration#storage_lens_table_destination}
  */
  readonly storageLensTableDestination?: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty;
}
export class ExpandedPrefixesDataExportPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpandedPrefixesDataExportProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    if (this._storageLensTableDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpandedPrefixesDataExportProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketDestination.internalValue = undefined;
      this._storageLensTableDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
      this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
    }
  }

  // s3_bucket_destination - computed: false, optional: true, required: false
  private _s3BucketDestination = new StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationPropertyOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: StorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationProperty) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }

  // storage_lens_table_destination - computed: false, optional: true, required: false
  private _storageLensTableDestination = new StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationPropertyOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
  public putStorageLensTableDestination(value: StorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationProperty) {
    this._storageLensTableDestination.internalValue = value;
  }
  public resetStorageLensTableDestination() {
    this._storageLensTableDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensTableDestinationInput() {
    return this._storageLensTableDestination.internalValue;
  }
}
export interface IncludeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#buckets AwsS3ControlStorageLensConfiguration#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#regions AwsS3ControlStorageLensConfiguration#regions}
  */
  readonly regions?: string[];
}
export class IncludePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncludeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncludeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface StorageLensConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#enabled AwsS3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#prefix_delimiter AwsS3ControlStorageLensConfiguration#prefix_delimiter}
  */
  readonly prefixDelimiter?: string;
  /**
  * account_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#account_level AwsS3ControlStorageLensConfiguration#account_level}
  */
  readonly accountLevel: AccountLevelProperty;
  /**
  * aws_org block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#aws_org AwsS3ControlStorageLensConfiguration#aws_org}
  */
  readonly awsOrg?: AwsOrgProperty;
  /**
  * data_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#data_export AwsS3ControlStorageLensConfiguration#data_export}
  */
  readonly dataExport?: DataExportProperty;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#exclude AwsS3ControlStorageLensConfiguration#exclude}
  */
  readonly exclude?: ExcludeProperty;
  /**
  * expanded_prefixes_data_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#expanded_prefixes_data_export AwsS3ControlStorageLensConfiguration#expanded_prefixes_data_export}
  */
  readonly expandedPrefixesDataExport?: ExpandedPrefixesDataExportProperty;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_storage_lens_configuration#include AwsS3ControlStorageLensConfiguration#include}
  */
  readonly include?: IncludeProperty;
}
export class StorageLensConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageLensConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefixDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelimiter = this._prefixDelimiter;
    }
    if (this._accountLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountLevel = this._accountLevel?.internalValue;
    }
    if (this._awsOrg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOrg = this._awsOrg?.internalValue;
    }
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._expandedPrefixesDataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedPrefixesDataExport = this._expandedPrefixesDataExport?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageLensConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._prefixDelimiter = undefined;
      this._accountLevel.internalValue = undefined;
      this._awsOrg.internalValue = undefined;
      this._dataExport.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._expandedPrefixesDataExport.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._prefixDelimiter = value.prefixDelimiter;
      this._accountLevel.internalValue = value.accountLevel;
      this._awsOrg.internalValue = value.awsOrg;
      this._dataExport.internalValue = value.dataExport;
      this._exclude.internalValue = value.exclude;
      this._expandedPrefixesDataExport.internalValue = value.expandedPrefixesDataExport;
      this._include.internalValue = value.include;
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

  // prefix_delimiter - computed: false, optional: true, required: false
  private _prefixDelimiter?: string; 
  public get prefixDelimiter() {
    return this.getStringAttribute('prefix_delimiter');
  }
  public set prefixDelimiter(value: string) {
    this._prefixDelimiter = value;
  }
  public resetPrefixDelimiter() {
    this._prefixDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelimiterInput() {
    return this._prefixDelimiter;
  }

  // account_level - computed: false, optional: false, required: true
  private _accountLevel = new AccountLevelPropertyOutputReference(this, "account_level");
  public get accountLevel() {
    return this._accountLevel;
  }
  public putAccountLevel(value: AccountLevelProperty) {
    this._accountLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLevelInput() {
    return this._accountLevel.internalValue;
  }

  // aws_org - computed: false, optional: true, required: false
  private _awsOrg = new AwsOrgPropertyOutputReference(this, "aws_org");
  public get awsOrg() {
    return this._awsOrg;
  }
  public putAwsOrg(value: AwsOrgProperty) {
    this._awsOrg.internalValue = value;
  }
  public resetAwsOrg() {
    this._awsOrg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrgInput() {
    return this._awsOrg.internalValue;
  }

  // data_export - computed: false, optional: true, required: false
  private _dataExport = new DataExportPropertyOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: DataExportProperty) {
    this._dataExport.internalValue = value;
  }
  public resetDataExport() {
    this._dataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new ExcludePropertyOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ExcludeProperty) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // expanded_prefixes_data_export - computed: false, optional: true, required: false
  private _expandedPrefixesDataExport = new ExpandedPrefixesDataExportPropertyOutputReference(this, "expanded_prefixes_data_export");
  public get expandedPrefixesDataExport() {
    return this._expandedPrefixesDataExport;
  }
  public putExpandedPrefixesDataExport(value: ExpandedPrefixesDataExportProperty) {
    this._expandedPrefixesDataExport.internalValue = value;
  }
  public resetExpandedPrefixesDataExport() {
    this._expandedPrefixesDataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedPrefixesDataExportInput() {
    return this._expandedPrefixesDataExport.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new IncludePropertyOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: IncludeProperty) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
}
