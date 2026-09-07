// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRepositoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#force_destroy AwsRepository#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#id AwsRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#region AwsRepository#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#repository_name AwsRepository#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#tags AwsRepository#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#tags_all AwsRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * catalog_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#catalog_data AwsRepository#catalog_data}
  */
  readonly catalogData?: AwsRepository.CatalogDataProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#timeouts AwsRepository#timeouts}
  */
  readonly timeouts?: AwsRepository.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository}
*/
export class AwsRepository extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecrpublic_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRepository resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRepository to import
  * @param importFromId The id of the existing AwsRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecrpublic_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecrpublic_repository',
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
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._region = config.region;
    this._repositoryName = config.repositoryName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._catalogData.internalValue = config.catalogData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
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

  // catalog_data - computed: false, optional: true, required: false
  private _catalogData = new AwsRepository.CatalogDataPropertyOutputReference(this, "catalog_data");
  public get catalogData() {
    return this._catalogData;
  }
  public putCatalogData(value: AwsRepository.CatalogDataProperty) {
    this._catalogData.internalValue = value;
  }
  public resetCatalogData() {
    this._catalogData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogDataInput() {
    return this._catalogData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsRepository.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsRepository.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      repository_name: cdktn.stringToTerraform(this._repositoryName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      catalog_data: awsRepositoryCatalogDataPropertyToTerraform(this._catalogData.internalValue),
      timeouts: awsRepositoryTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      repository_name: {
        value: cdktn.stringToHclTerraform(this._repositoryName),
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
      catalog_data: {
        value: awsRepositoryCatalogDataPropertyToHclTerraform(this._catalogData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRepository.CatalogDataPropertyList",
      },
      timeouts: {
        value: awsRepositoryTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsRepository.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRepositoryCatalogDataPropertyToTerraform(struct?: AwsRepository.CatalogDataPropertyOutputReference | AwsRepository.CatalogDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    about_text: cdktn.stringToTerraform(struct!.aboutText),
    architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.architectures),
    description: cdktn.stringToTerraform(struct!.description),
    logo_image_blob: cdktn.stringToTerraform(struct!.logoImageBlob),
    operating_systems: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.operatingSystems),
    usage_text: cdktn.stringToTerraform(struct!.usageText),
  }
}


export function awsRepositoryCatalogDataPropertyToHclTerraform(struct?: AwsRepository.CatalogDataPropertyOutputReference | AwsRepository.CatalogDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    about_text: {
      value: cdktn.stringToHclTerraform(struct!.aboutText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architectures: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_image_blob: {
      value: cdktn.stringToHclTerraform(struct!.logoImageBlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_systems: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.operatingSystems),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    usage_text: {
      value: cdktn.stringToHclTerraform(struct!.usageText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRepositoryTimeoutsPropertyToTerraform(struct?: AwsRepository.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsRepositoryTimeoutsPropertyToHclTerraform(struct?: AwsRepository.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRepository {
export interface CatalogDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#about_text AwsRepository#about_text}
  */
  readonly aboutText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#architectures AwsRepository#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#description AwsRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#logo_image_blob AwsRepository#logo_image_blob}
  */
  readonly logoImageBlob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#operating_systems AwsRepository#operating_systems}
  */
  readonly operatingSystems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#usage_text AwsRepository#usage_text}
  */
  readonly usageText?: string;
}
export class CatalogDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aboutText !== undefined) {
      hasAnyValues = true;
      internalValueResult.aboutText = this._aboutText;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._logoImageBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoImageBlob = this._logoImageBlob;
    }
    if (this._operatingSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystems = this._operatingSystems;
    }
    if (this._usageText !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageText = this._usageText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aboutText = undefined;
      this._architectures = undefined;
      this._description = undefined;
      this._logoImageBlob = undefined;
      this._operatingSystems = undefined;
      this._usageText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aboutText = value.aboutText;
      this._architectures = value.architectures;
      this._description = value.description;
      this._logoImageBlob = value.logoImageBlob;
      this._operatingSystems = value.operatingSystems;
      this._usageText = value.usageText;
    }
  }

  // about_text - computed: false, optional: true, required: false
  private _aboutText?: string; 
  public get aboutText() {
    return this.getStringAttribute('about_text');
  }
  public set aboutText(value: string) {
    this._aboutText = value;
  }
  public resetAboutText() {
    this._aboutText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aboutTextInput() {
    return this._aboutText;
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return cdktn.Fn.tolist(this.getListAttribute('architectures'));
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
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

  // logo_image_blob - computed: true, optional: true, required: false
  private _logoImageBlob?: string; 
  public get logoImageBlob() {
    return this.getStringAttribute('logo_image_blob');
  }
  public set logoImageBlob(value: string) {
    this._logoImageBlob = value;
  }
  public resetLogoImageBlob() {
    this._logoImageBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageBlobInput() {
    return this._logoImageBlob;
  }

  // operating_systems - computed: false, optional: true, required: false
  private _operatingSystems?: string[]; 
  public get operatingSystems() {
    return cdktn.Fn.tolist(this.getListAttribute('operating_systems'));
  }
  public set operatingSystems(value: string[]) {
    this._operatingSystems = value;
  }
  public resetOperatingSystems() {
    this._operatingSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemsInput() {
    return this._operatingSystems;
  }

  // usage_text - computed: false, optional: true, required: false
  private _usageText?: string; 
  public get usageText() {
    return this.getStringAttribute('usage_text');
  }
  public set usageText(value: string) {
    this._usageText = value;
  }
  public resetUsageText() {
    this._usageText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTextInput() {
    return this._usageText;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecrpublic_repository#delete AwsRepository#delete}
  */
  readonly delete?: string;
}
export class TimeoutsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimeoutsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
}
