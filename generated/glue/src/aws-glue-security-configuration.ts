// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfSecurityConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#id TfSecurityConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#name TfSecurityConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#region TfSecurityConfiguration#region}
  */
  readonly region?: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#encryption_configuration TfSecurityConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration: TfSecurityConfiguration.EncryptionConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration aws_glue_security_configuration}
*/
export class TfSecurityConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_security_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfSecurityConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfSecurityConfiguration to import
  * @param importFromId The id of the existing TfSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfSecurityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_security_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration aws_glue_security_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfSecurityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_security_configuration',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration = new TfSecurityConfiguration.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: TfSecurityConfiguration.EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      encryption_configuration: tfSecurityConfigurationEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      encryption_configuration: {
        value: tfSecurityConfigurationEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfSecurityConfiguration.EncryptionConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfSecurityConfigurationCloudwatchEncryptionPropertyToTerraform(struct?: TfSecurityConfiguration.CloudwatchEncryptionPropertyOutputReference | TfSecurityConfiguration.CloudwatchEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_encryption_mode: cdktn.stringToTerraform(struct!.cloudwatchEncryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfSecurityConfigurationCloudwatchEncryptionPropertyToHclTerraform(struct?: TfSecurityConfiguration.CloudwatchEncryptionPropertyOutputReference | TfSecurityConfiguration.CloudwatchEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSecurityConfigurationJobBookmarksEncryptionPropertyToTerraform(struct?: TfSecurityConfiguration.JobBookmarksEncryptionPropertyOutputReference | TfSecurityConfiguration.JobBookmarksEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_bookmarks_encryption_mode: cdktn.stringToTerraform(struct!.jobBookmarksEncryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfSecurityConfigurationJobBookmarksEncryptionPropertyToHclTerraform(struct?: TfSecurityConfiguration.JobBookmarksEncryptionPropertyOutputReference | TfSecurityConfiguration.JobBookmarksEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_bookmarks_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.jobBookmarksEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSecurityConfigurationS3EncryptionPropertyToTerraform(struct?: TfSecurityConfiguration.S3EncryptionPropertyOutputReference | TfSecurityConfiguration.S3EncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    s3_encryption_mode: cdktn.stringToTerraform(struct!.s3EncryptionMode),
  }
}


export function tfSecurityConfigurationS3EncryptionPropertyToHclTerraform(struct?: TfSecurityConfiguration.S3EncryptionPropertyOutputReference | TfSecurityConfiguration.S3EncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3EncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSecurityConfigurationEncryptionConfigurationPropertyToTerraform(struct?: TfSecurityConfiguration.EncryptionConfigurationPropertyOutputReference | TfSecurityConfiguration.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_encryption: tfSecurityConfigurationCloudwatchEncryptionPropertyToTerraform(struct!.cloudwatchEncryption),
    job_bookmarks_encryption: tfSecurityConfigurationJobBookmarksEncryptionPropertyToTerraform(struct!.jobBookmarksEncryption),
    s3_encryption: tfSecurityConfigurationS3EncryptionPropertyToTerraform(struct!.s3Encryption),
  }
}


export function tfSecurityConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: TfSecurityConfiguration.EncryptionConfigurationPropertyOutputReference | TfSecurityConfiguration.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_encryption: {
      value: tfSecurityConfigurationCloudwatchEncryptionPropertyToHclTerraform(struct!.cloudwatchEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEncryptionPropertyList",
    },
    job_bookmarks_encryption: {
      value: tfSecurityConfigurationJobBookmarksEncryptionPropertyToHclTerraform(struct!.jobBookmarksEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "JobBookmarksEncryptionPropertyList",
    },
    s3_encryption: {
      value: tfSecurityConfigurationS3EncryptionPropertyToHclTerraform(struct!.s3Encryption),
      isBlock: true,
      type: "list",
      storageClassType: "S3EncryptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfSecurityConfiguration {
export interface CloudwatchEncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#cloudwatch_encryption_mode TfSecurityConfiguration#cloudwatch_encryption_mode}
  */
  readonly cloudwatchEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#kms_key_arn TfSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class CloudwatchEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // cloudwatch_encryption_mode - computed: false, optional: true, required: false
  private _cloudwatchEncryptionMode?: string; 
  public get cloudwatchEncryptionMode() {
    return this.getStringAttribute('cloudwatch_encryption_mode');
  }
  public set cloudwatchEncryptionMode(value: string) {
    this._cloudwatchEncryptionMode = value;
  }
  public resetCloudwatchEncryptionMode() {
    this._cloudwatchEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionModeInput() {
    return this._cloudwatchEncryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface JobBookmarksEncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode TfSecurityConfiguration#job_bookmarks_encryption_mode}
  */
  readonly jobBookmarksEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#kms_key_arn TfSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class JobBookmarksEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobBookmarksEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobBookmarksEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobBookmarksEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobBookmarksEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // job_bookmarks_encryption_mode - computed: false, optional: true, required: false
  private _jobBookmarksEncryptionMode?: string; 
  public get jobBookmarksEncryptionMode() {
    return this.getStringAttribute('job_bookmarks_encryption_mode');
  }
  public set jobBookmarksEncryptionMode(value: string) {
    this._jobBookmarksEncryptionMode = value;
  }
  public resetJobBookmarksEncryptionMode() {
    this._jobBookmarksEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionModeInput() {
    return this._jobBookmarksEncryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface S3EncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#kms_key_arn TfSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#s3_encryption_mode TfSecurityConfiguration#s3_encryption_mode}
  */
  readonly s3EncryptionMode?: string;
}
export class S3EncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3EncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3EncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3EncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyArn = undefined;
      this._s3EncryptionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3EncryptionMode = value.s3EncryptionMode;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // s3_encryption_mode - computed: false, optional: true, required: false
  private _s3EncryptionMode?: string; 
  public get s3EncryptionMode() {
    return this.getStringAttribute('s3_encryption_mode');
  }
  public set s3EncryptionMode(value: string) {
    this._s3EncryptionMode = value;
  }
  public resetS3EncryptionMode() {
    this._s3EncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionModeInput() {
    return this._s3EncryptionMode;
  }
}
export interface EncryptionConfigurationProperty {
  /**
  * cloudwatch_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#cloudwatch_encryption TfSecurityConfiguration#cloudwatch_encryption}
  */
  readonly cloudwatchEncryption: CloudwatchEncryptionProperty;
  /**
  * job_bookmarks_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#job_bookmarks_encryption TfSecurityConfiguration#job_bookmarks_encryption}
  */
  readonly jobBookmarksEncryption: JobBookmarksEncryptionProperty;
  /**
  * s3_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_security_configuration#s3_encryption TfSecurityConfiguration#s3_encryption}
  */
  readonly s3Encryption: S3EncryptionProperty;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryption = this._cloudwatchEncryption?.internalValue;
    }
    if (this._jobBookmarksEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryption = this._jobBookmarksEncryption?.internalValue;
    }
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchEncryption.internalValue = undefined;
      this._jobBookmarksEncryption.internalValue = undefined;
      this._s3Encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
      this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
      this._s3Encryption.internalValue = value.s3Encryption;
    }
  }

  // cloudwatch_encryption - computed: false, optional: false, required: true
  private _cloudwatchEncryption = new CloudwatchEncryptionPropertyOutputReference(this, "cloudwatch_encryption");
  public get cloudwatchEncryption() {
    return this._cloudwatchEncryption;
  }
  public putCloudwatchEncryption(value: CloudwatchEncryptionProperty) {
    this._cloudwatchEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionInput() {
    return this._cloudwatchEncryption.internalValue;
  }

  // job_bookmarks_encryption - computed: false, optional: false, required: true
  private _jobBookmarksEncryption = new JobBookmarksEncryptionPropertyOutputReference(this, "job_bookmarks_encryption");
  public get jobBookmarksEncryption() {
    return this._jobBookmarksEncryption;
  }
  public putJobBookmarksEncryption(value: JobBookmarksEncryptionProperty) {
    this._jobBookmarksEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionInput() {
    return this._jobBookmarksEncryption.internalValue;
  }

  // s3_encryption - computed: false, optional: false, required: true
  private _s3Encryption = new S3EncryptionPropertyOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: S3EncryptionProperty) {
    this._s3Encryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }
}
}
