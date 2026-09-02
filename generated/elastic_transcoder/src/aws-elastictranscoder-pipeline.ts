// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#aws_kms_key_arn TfPipeline#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#id TfPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#input_bucket TfPipeline#input_bucket}
  */
  readonly inputBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#name TfPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#output_bucket TfPipeline#output_bucket}
  */
  readonly outputBucket?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#region TfPipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#role TfPipeline#role}
  */
  readonly role: string;
  /**
  * content_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#content_config TfPipeline#content_config}
  */
  readonly contentConfig?: TfPipeline.ContentConfigProperty;
  /**
  * content_config_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#content_config_permissions TfPipeline#content_config_permissions}
  */
  readonly contentConfigPermissions?: TfPipeline.ContentConfigPermissionsProperty[] | cdktn.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#notifications TfPipeline#notifications}
  */
  readonly notifications?: TfPipeline.NotificationsProperty;
  /**
  * thumbnail_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#thumbnail_config TfPipeline#thumbnail_config}
  */
  readonly thumbnailConfig?: TfPipeline.ThumbnailConfigProperty;
  /**
  * thumbnail_config_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#thumbnail_config_permissions TfPipeline#thumbnail_config_permissions}
  */
  readonly thumbnailConfigPermissions?: TfPipeline.ThumbnailConfigPermissionsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline}
*/
export class TfPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elastictranscoder_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfPipeline to import
  * @param importFromId The id of the existing TfPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_elastictranscoder_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: TfPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_pipeline',
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
    this._awsKmsKeyArn = config.awsKmsKeyArn;
    this._id = config.id;
    this._inputBucket = config.inputBucket;
    this._name = config.name;
    this._outputBucket = config.outputBucket;
    this._region = config.region;
    this._role = config.role;
    this._contentConfig.internalValue = config.contentConfig;
    this._contentConfigPermissions.internalValue = config.contentConfigPermissions;
    this._notifications.internalValue = config.notifications;
    this._thumbnailConfig.internalValue = config.thumbnailConfig;
    this._thumbnailConfigPermissions.internalValue = config.thumbnailConfigPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string; 
  public get awsKmsKeyArn() {
    return this.getStringAttribute('aws_kms_key_arn');
  }
  public set awsKmsKeyArn(value: string) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn;
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

  // input_bucket - computed: false, optional: false, required: true
  private _inputBucket?: string; 
  public get inputBucket() {
    return this.getStringAttribute('input_bucket');
  }
  public set inputBucket(value: string) {
    this._inputBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBucketInput() {
    return this._inputBucket;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output_bucket - computed: true, optional: true, required: false
  private _outputBucket?: string; 
  public get outputBucket() {
    return this.getStringAttribute('output_bucket');
  }
  public set outputBucket(value: string) {
    this._outputBucket = value;
  }
  public resetOutputBucket() {
    this._outputBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputBucketInput() {
    return this._outputBucket;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // content_config - computed: false, optional: true, required: false
  private _contentConfig = new TfPipeline.ContentConfigPropertyOutputReference(this, "content_config");
  public get contentConfig() {
    return this._contentConfig;
  }
  public putContentConfig(value: TfPipeline.ContentConfigProperty) {
    this._contentConfig.internalValue = value;
  }
  public resetContentConfig() {
    this._contentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig.internalValue;
  }

  // content_config_permissions - computed: false, optional: true, required: false
  private _contentConfigPermissions = new TfPipeline.ContentConfigPermissionsPropertyList(this, "content_config_permissions", true);
  public get contentConfigPermissions() {
    return this._contentConfigPermissions;
  }
  public putContentConfigPermissions(value: TfPipeline.ContentConfigPermissionsProperty[] | cdktn.IResolvable) {
    this._contentConfigPermissions.internalValue = value;
  }
  public resetContentConfigPermissions() {
    this._contentConfigPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigPermissionsInput() {
    return this._contentConfigPermissions.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new TfPipeline.NotificationsPropertyOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: TfPipeline.NotificationsProperty) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // thumbnail_config - computed: false, optional: true, required: false
  private _thumbnailConfig = new TfPipeline.ThumbnailConfigPropertyOutputReference(this, "thumbnail_config");
  public get thumbnailConfig() {
    return this._thumbnailConfig;
  }
  public putThumbnailConfig(value: TfPipeline.ThumbnailConfigProperty) {
    this._thumbnailConfig.internalValue = value;
  }
  public resetThumbnailConfig() {
    this._thumbnailConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigInput() {
    return this._thumbnailConfig.internalValue;
  }

  // thumbnail_config_permissions - computed: false, optional: true, required: false
  private _thumbnailConfigPermissions = new TfPipeline.ThumbnailConfigPermissionsPropertyList(this, "thumbnail_config_permissions", true);
  public get thumbnailConfigPermissions() {
    return this._thumbnailConfigPermissions;
  }
  public putThumbnailConfigPermissions(value: TfPipeline.ThumbnailConfigPermissionsProperty[] | cdktn.IResolvable) {
    this._thumbnailConfigPermissions.internalValue = value;
  }
  public resetThumbnailConfigPermissions() {
    this._thumbnailConfigPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigPermissionsInput() {
    return this._thumbnailConfigPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_kms_key_arn: cdktn.stringToTerraform(this._awsKmsKeyArn),
      id: cdktn.stringToTerraform(this._id),
      input_bucket: cdktn.stringToTerraform(this._inputBucket),
      name: cdktn.stringToTerraform(this._name),
      output_bucket: cdktn.stringToTerraform(this._outputBucket),
      region: cdktn.stringToTerraform(this._region),
      role: cdktn.stringToTerraform(this._role),
      content_config: tfPipelineContentConfigPropertyToTerraform(this._contentConfig.internalValue),
      content_config_permissions: cdktn.listMapper(tfPipelineContentConfigPermissionsPropertyToTerraform, true)(this._contentConfigPermissions.internalValue),
      notifications: tfPipelineNotificationsPropertyToTerraform(this._notifications.internalValue),
      thumbnail_config: tfPipelineThumbnailConfigPropertyToTerraform(this._thumbnailConfig.internalValue),
      thumbnail_config_permissions: cdktn.listMapper(tfPipelineThumbnailConfigPermissionsPropertyToTerraform, true)(this._thumbnailConfigPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._awsKmsKeyArn),
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
      input_bucket: {
        value: cdktn.stringToHclTerraform(this._inputBucket),
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
      output_bucket: {
        value: cdktn.stringToHclTerraform(this._outputBucket),
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_config: {
        value: tfPipelineContentConfigPropertyToHclTerraform(this._contentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfPipeline.ContentConfigPropertyList",
      },
      content_config_permissions: {
        value: cdktn.listMapperHcl(tfPipelineContentConfigPermissionsPropertyToHclTerraform, true)(this._contentConfigPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfPipeline.ContentConfigPermissionsPropertyList",
      },
      notifications: {
        value: tfPipelineNotificationsPropertyToHclTerraform(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfPipeline.NotificationsPropertyList",
      },
      thumbnail_config: {
        value: tfPipelineThumbnailConfigPropertyToHclTerraform(this._thumbnailConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfPipeline.ThumbnailConfigPropertyList",
      },
      thumbnail_config_permissions: {
        value: cdktn.listMapperHcl(tfPipelineThumbnailConfigPermissionsPropertyToHclTerraform, true)(this._thumbnailConfigPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfPipeline.ThumbnailConfigPermissionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfPipelineContentConfigPropertyToTerraform(struct?: TfPipeline.ContentConfigPropertyOutputReference | TfPipeline.ContentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function tfPipelineContentConfigPropertyToHclTerraform(struct?: TfPipeline.ContentConfigPropertyOutputReference | TfPipeline.ContentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfPipelineContentConfigPermissionsPropertyToTerraform(struct?: TfPipeline.ContentConfigPermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.access),
    grantee: cdktn.stringToTerraform(struct!.grantee),
    grantee_type: cdktn.stringToTerraform(struct!.granteeType),
  }
}


export function tfPipelineContentConfigPermissionsPropertyToHclTerraform(struct?: TfPipeline.ContentConfigPermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    grantee: {
      value: cdktn.stringToHclTerraform(struct!.grantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grantee_type: {
      value: cdktn.stringToHclTerraform(struct!.granteeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfPipelineNotificationsPropertyToTerraform(struct?: TfPipeline.NotificationsPropertyOutputReference | TfPipeline.NotificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    completed: cdktn.stringToTerraform(struct!.completed),
    error: cdktn.stringToTerraform(struct!.error),
    progressing: cdktn.stringToTerraform(struct!.progressing),
    warning: cdktn.stringToTerraform(struct!.warning),
  }
}


export function tfPipelineNotificationsPropertyToHclTerraform(struct?: TfPipeline.NotificationsPropertyOutputReference | TfPipeline.NotificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    completed: {
      value: cdktn.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: cdktn.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progressing: {
      value: cdktn.stringToHclTerraform(struct!.progressing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktn.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfPipelineThumbnailConfigPropertyToTerraform(struct?: TfPipeline.ThumbnailConfigPropertyOutputReference | TfPipeline.ThumbnailConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function tfPipelineThumbnailConfigPropertyToHclTerraform(struct?: TfPipeline.ThumbnailConfigPropertyOutputReference | TfPipeline.ThumbnailConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfPipelineThumbnailConfigPermissionsPropertyToTerraform(struct?: TfPipeline.ThumbnailConfigPermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.access),
    grantee: cdktn.stringToTerraform(struct!.grantee),
    grantee_type: cdktn.stringToTerraform(struct!.granteeType),
  }
}


export function tfPipelineThumbnailConfigPermissionsPropertyToHclTerraform(struct?: TfPipeline.ThumbnailConfigPermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    grantee: {
      value: cdktn.stringToHclTerraform(struct!.grantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grantee_type: {
      value: cdktn.stringToHclTerraform(struct!.granteeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfPipeline {
export interface ContentConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#bucket TfPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#storage_class TfPipeline#storage_class}
  */
  readonly storageClass?: string;
}
export class ContentConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._storageClass = value.storageClass;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface ContentConfigPermissionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#access TfPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#grantee TfPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#grantee_type TfPipeline#grantee_type}
  */
  readonly granteeType?: string;
}
export class ContentConfigPermissionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContentConfigPermissionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._grantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantee = this._grantee;
    }
    if (this._granteeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeType = this._granteeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentConfigPermissionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._grantee = undefined;
      this._granteeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._grantee = value.grantee;
      this._granteeType = value.granteeType;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // grantee - computed: false, optional: true, required: false
  private _grantee?: string; 
  public get grantee() {
    return this.getStringAttribute('grantee');
  }
  public set grantee(value: string) {
    this._grantee = value;
  }
  public resetGrantee() {
    this._grantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee;
  }

  // grantee_type - computed: false, optional: true, required: false
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  public resetGranteeType() {
    this._granteeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
  }
}

export class ContentConfigPermissionsPropertyList extends cdktn.ComplexList {
  public internalValue? : ContentConfigPermissionsProperty[] | cdktn.IResolvable

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
  public get(index: number): ContentConfigPermissionsPropertyOutputReference {
    return new ContentConfigPermissionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#completed TfPipeline#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#error TfPipeline#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#progressing TfPipeline#progressing}
  */
  readonly progressing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#warning TfPipeline#warning}
  */
  readonly warning?: string;
}
export class NotificationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completed !== undefined) {
      hasAnyValues = true;
      internalValueResult.completed = this._completed;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._progressing !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressing = this._progressing;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._completed = undefined;
      this._error = undefined;
      this._progressing = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._completed = value.completed;
      this._error = value.error;
      this._progressing = value.progressing;
      this._warning = value.warning;
    }
  }

  // completed - computed: false, optional: true, required: false
  private _completed?: string; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // progressing - computed: false, optional: true, required: false
  private _progressing?: string; 
  public get progressing() {
    return this.getStringAttribute('progressing');
  }
  public set progressing(value: string) {
    this._progressing = value;
  }
  public resetProgressing() {
    this._progressing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressingInput() {
    return this._progressing;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ThumbnailConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#bucket TfPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#storage_class TfPipeline#storage_class}
  */
  readonly storageClass?: string;
}
export class ThumbnailConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThumbnailConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThumbnailConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._storageClass = value.storageClass;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface ThumbnailConfigPermissionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#access TfPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#grantee TfPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastictranscoder_pipeline#grantee_type TfPipeline#grantee_type}
  */
  readonly granteeType?: string;
}
export class ThumbnailConfigPermissionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThumbnailConfigPermissionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._grantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantee = this._grantee;
    }
    if (this._granteeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeType = this._granteeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThumbnailConfigPermissionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._grantee = undefined;
      this._granteeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._grantee = value.grantee;
      this._granteeType = value.granteeType;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // grantee - computed: false, optional: true, required: false
  private _grantee?: string; 
  public get grantee() {
    return this.getStringAttribute('grantee');
  }
  public set grantee(value: string) {
    this._grantee = value;
  }
  public resetGrantee() {
    this._grantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee;
  }

  // grantee_type - computed: false, optional: true, required: false
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  public resetGranteeType() {
    this._granteeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
  }
}

export class ThumbnailConfigPermissionsPropertyList extends cdktn.ComplexList {
  public internalValue? : ThumbnailConfigPermissionsProperty[] | cdktn.IResolvable

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
  public get(index: number): ThumbnailConfigPermissionsPropertyOutputReference {
    return new ThumbnailConfigPermissionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
