// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsHubConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#hub_description AwsHub#hub_description}
  */
  readonly hubDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#hub_display_name AwsHub#hub_display_name}
  */
  readonly hubDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#hub_name AwsHub#hub_name}
  */
  readonly hubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#hub_search_keywords AwsHub#hub_search_keywords}
  */
  readonly hubSearchKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#id AwsHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#region AwsHub#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#tags AwsHub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#tags_all AwsHub#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#s3_storage_config AwsHub#s3_storage_config}
  */
  readonly s3StorageConfig?: AwsHub.S3StorageConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub aws_sagemaker_hub}
*/
export class AwsHub extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsHub resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsHub to import
  * @param importFromId The id of the existing AwsHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub aws_sagemaker_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsHubConfig
  */
  public constructor(scope: Construct, id: string, config: AwsHubConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hub',
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
    this._hubDescription = config.hubDescription;
    this._hubDisplayName = config.hubDisplayName;
    this._hubName = config.hubName;
    this._hubSearchKeywords = config.hubSearchKeywords;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3StorageConfig.internalValue = config.s3StorageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // hub_description - computed: false, optional: false, required: true
  private _hubDescription?: string; 
  public get hubDescription() {
    return this.getStringAttribute('hub_description');
  }
  public set hubDescription(value: string) {
    this._hubDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubDescriptionInput() {
    return this._hubDescription;
  }

  // hub_display_name - computed: false, optional: true, required: false
  private _hubDisplayName?: string; 
  public get hubDisplayName() {
    return this.getStringAttribute('hub_display_name');
  }
  public set hubDisplayName(value: string) {
    this._hubDisplayName = value;
  }
  public resetHubDisplayName() {
    this._hubDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubDisplayNameInput() {
    return this._hubDisplayName;
  }

  // hub_name - computed: false, optional: false, required: true
  private _hubName?: string; 
  public get hubName() {
    return this.getStringAttribute('hub_name');
  }
  public set hubName(value: string) {
    this._hubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNameInput() {
    return this._hubName;
  }

  // hub_search_keywords - computed: false, optional: true, required: false
  private _hubSearchKeywords?: string[]; 
  public get hubSearchKeywords() {
    return cdktn.Fn.tolist(this.getListAttribute('hub_search_keywords'));
  }
  public set hubSearchKeywords(value: string[]) {
    this._hubSearchKeywords = value;
  }
  public resetHubSearchKeywords() {
    this._hubSearchKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubSearchKeywordsInput() {
    return this._hubSearchKeywords;
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

  // s3_storage_config - computed: false, optional: true, required: false
  private _s3StorageConfig = new AwsHub.S3StorageConfigPropertyOutputReference(this, "s3_storage_config");
  public get s3StorageConfig() {
    return this._s3StorageConfig;
  }
  public putS3StorageConfig(value: AwsHub.S3StorageConfigProperty) {
    this._s3StorageConfig.internalValue = value;
  }
  public resetS3StorageConfig() {
    this._s3StorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageConfigInput() {
    return this._s3StorageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hub_description: cdktn.stringToTerraform(this._hubDescription),
      hub_display_name: cdktn.stringToTerraform(this._hubDisplayName),
      hub_name: cdktn.stringToTerraform(this._hubName),
      hub_search_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(this._hubSearchKeywords),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      s3_storage_config: awsHubS3StorageConfigPropertyToTerraform(this._s3StorageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hub_description: {
        value: cdktn.stringToHclTerraform(this._hubDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_display_name: {
        value: cdktn.stringToHclTerraform(this._hubDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_name: {
        value: cdktn.stringToHclTerraform(this._hubName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_search_keywords: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._hubSearchKeywords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      s3_storage_config: {
        value: awsHubS3StorageConfigPropertyToHclTerraform(this._s3StorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHub.S3StorageConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsHubS3StorageConfigPropertyToTerraform(struct?: AwsHub.S3StorageConfigPropertyOutputReference | AwsHub.S3StorageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsHubS3StorageConfigPropertyToHclTerraform(struct?: AwsHub.S3StorageConfigPropertyOutputReference | AwsHub.S3StorageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsHub {
export interface S3StorageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub#s3_output_path AwsHub#s3_output_path}
  */
  readonly s3OutputPath?: string;
}
export class S3StorageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3StorageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
}
