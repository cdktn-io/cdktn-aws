// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfBucketAnalyticsConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#bucket TfBucketAnalyticsConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#id TfBucketAnalyticsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#name TfBucketAnalyticsConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#region TfBucketAnalyticsConfiguration#region}
  */
  readonly region?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#filter TfBucketAnalyticsConfiguration#filter}
  */
  readonly filter?: TfBucketAnalyticsConfiguration.FilterProperty;
  /**
  * storage_class_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#storage_class_analysis TfBucketAnalyticsConfiguration#storage_class_analysis}
  */
  readonly storageClassAnalysis?: TfBucketAnalyticsConfiguration.StorageClassAnalysisProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration}
*/
export class TfBucketAnalyticsConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_analytics_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfBucketAnalyticsConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfBucketAnalyticsConfiguration to import
  * @param importFromId The id of the existing TfBucketAnalyticsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfBucketAnalyticsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_analytics_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfBucketAnalyticsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfBucketAnalyticsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_analytics_configuration',
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
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._filter.internalValue = config.filter;
    this._storageClassAnalysis.internalValue = config.storageClassAnalysis;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new TfBucketAnalyticsConfiguration.FilterPropertyOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: TfBucketAnalyticsConfiguration.FilterProperty) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // storage_class_analysis - computed: false, optional: true, required: false
  private _storageClassAnalysis = new TfBucketAnalyticsConfiguration.StorageClassAnalysisPropertyOutputReference(this, "storage_class_analysis");
  public get storageClassAnalysis() {
    return this._storageClassAnalysis;
  }
  public putStorageClassAnalysis(value: TfBucketAnalyticsConfiguration.StorageClassAnalysisProperty) {
    this._storageClassAnalysis.internalValue = value;
  }
  public resetStorageClassAnalysis() {
    this._storageClassAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassAnalysisInput() {
    return this._storageClassAnalysis.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      filter: tfBucketAnalyticsConfigurationFilterPropertyToTerraform(this._filter.internalValue),
      storage_class_analysis: tfBucketAnalyticsConfigurationStorageClassAnalysisPropertyToTerraform(this._storageClassAnalysis.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
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
      filter: {
        value: tfBucketAnalyticsConfigurationFilterPropertyToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBucketAnalyticsConfiguration.FilterPropertyList",
      },
      storage_class_analysis: {
        value: tfBucketAnalyticsConfigurationStorageClassAnalysisPropertyToHclTerraform(this._storageClassAnalysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfBucketAnalyticsConfiguration.StorageClassAnalysisPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfBucketAnalyticsConfigurationFilterPropertyToTerraform(struct?: TfBucketAnalyticsConfiguration.FilterPropertyOutputReference | TfBucketAnalyticsConfiguration.FilterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
  }
}


export function tfBucketAnalyticsConfigurationFilterPropertyToHclTerraform(struct?: TfBucketAnalyticsConfiguration.FilterPropertyOutputReference | TfBucketAnalyticsConfiguration.FilterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBucketAnalyticsConfigurationS3BucketDestinationPropertyToTerraform(struct?: TfBucketAnalyticsConfiguration.S3BucketDestinationPropertyOutputReference | TfBucketAnalyticsConfiguration.S3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_account_id: cdktn.stringToTerraform(struct!.bucketAccountId),
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    format: cdktn.stringToTerraform(struct!.format),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function tfBucketAnalyticsConfigurationS3BucketDestinationPropertyToHclTerraform(struct?: TfBucketAnalyticsConfiguration.S3BucketDestinationPropertyOutputReference | TfBucketAnalyticsConfiguration.S3BucketDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBucketAnalyticsConfigurationDestinationPropertyToTerraform(struct?: TfBucketAnalyticsConfiguration.DestinationPropertyOutputReference | TfBucketAnalyticsConfiguration.DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_destination: tfBucketAnalyticsConfigurationS3BucketDestinationPropertyToTerraform(struct!.s3BucketDestination),
  }
}


export function tfBucketAnalyticsConfigurationDestinationPropertyToHclTerraform(struct?: TfBucketAnalyticsConfiguration.DestinationPropertyOutputReference | TfBucketAnalyticsConfiguration.DestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_destination: {
      value: tfBucketAnalyticsConfigurationS3BucketDestinationPropertyToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBucketAnalyticsConfigurationDataExportPropertyToTerraform(struct?: TfBucketAnalyticsConfiguration.DataExportPropertyOutputReference | TfBucketAnalyticsConfiguration.DataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    destination: tfBucketAnalyticsConfigurationDestinationPropertyToTerraform(struct!.destination),
  }
}


export function tfBucketAnalyticsConfigurationDataExportPropertyToHclTerraform(struct?: TfBucketAnalyticsConfiguration.DataExportPropertyOutputReference | TfBucketAnalyticsConfiguration.DataExportProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: tfBucketAnalyticsConfigurationDestinationPropertyToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfBucketAnalyticsConfigurationStorageClassAnalysisPropertyToTerraform(struct?: TfBucketAnalyticsConfiguration.StorageClassAnalysisPropertyOutputReference | TfBucketAnalyticsConfiguration.StorageClassAnalysisProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_export: tfBucketAnalyticsConfigurationDataExportPropertyToTerraform(struct!.dataExport),
  }
}


export function tfBucketAnalyticsConfigurationStorageClassAnalysisPropertyToHclTerraform(struct?: TfBucketAnalyticsConfiguration.StorageClassAnalysisPropertyOutputReference | TfBucketAnalyticsConfiguration.StorageClassAnalysisProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_export: {
      value: tfBucketAnalyticsConfigurationDataExportPropertyToHclTerraform(struct!.dataExport),
      isBlock: true,
      type: "list",
      storageClassType: "DataExportPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfBucketAnalyticsConfiguration {
export interface FilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#prefix TfBucketAnalyticsConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#tags TfBucketAnalyticsConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
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
}
export interface S3BucketDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#bucket_account_id TfBucketAnalyticsConfiguration#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#bucket_arn TfBucketAnalyticsConfiguration#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#format TfBucketAnalyticsConfiguration#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#prefix TfBucketAnalyticsConfiguration#prefix}
  */
  readonly prefix?: string;
}
export class S3BucketDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccountId = this._bucketAccountId;
    }
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketAccountId = undefined;
      this._bucketArn = undefined;
      this._format = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketAccountId = value.bucketAccountId;
      this._bucketArn = value.bucketArn;
      this._format = value.format;
      this._prefix = value.prefix;
    }
  }

  // bucket_account_id - computed: false, optional: true, required: false
  private _bucketAccountId?: string; 
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }
  public set bucketAccountId(value: string) {
    this._bucketAccountId = value;
  }
  public resetBucketAccountId() {
    this._bucketAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccountIdInput() {
    return this._bucketAccountId;
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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
}
export interface DestinationProperty {
  /**
  * s3_bucket_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#s3_bucket_destination TfBucketAnalyticsConfiguration#s3_bucket_destination}
  */
  readonly s3BucketDestination: S3BucketDestinationProperty;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
    }
  }

  // s3_bucket_destination - computed: false, optional: false, required: true
  private _s3BucketDestination = new S3BucketDestinationPropertyOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: S3BucketDestinationProperty) {
    this._s3BucketDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }
}
export interface DataExportProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#output_schema_version TfBucketAnalyticsConfiguration#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#destination TfBucketAnalyticsConfiguration#destination}
  */
  readonly destination: DestinationProperty;
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
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExportProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputSchemaVersion = undefined;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._destination.internalValue = value.destination;
    }
  }

  // output_schema_version - computed: false, optional: true, required: false
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  public resetOutputSchemaVersion() {
    this._outputSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DestinationPropertyOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DestinationProperty) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface StorageClassAnalysisProperty {
  /**
  * data_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_analytics_configuration#data_export TfBucketAnalyticsConfiguration#data_export}
  */
  readonly dataExport: DataExportProperty;
}
export class StorageClassAnalysisPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageClassAnalysisProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageClassAnalysisProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataExport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataExport.internalValue = value.dataExport;
    }
  }

  // data_export - computed: false, optional: false, required: true
  private _dataExport = new DataExportPropertyOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: DataExportProperty) {
    this._dataExport.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }
}
}
