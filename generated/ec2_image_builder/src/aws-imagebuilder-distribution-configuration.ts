// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDistributionConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#description TfDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#id TfDistributionConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#name TfDistributionConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#region TfDistributionConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#tags TfDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#tags_all TfDistributionConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#distribution TfDistributionConfiguration#distribution}
  */
  readonly distribution: TfDistributionConfiguration.DistributionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}
*/
export class TfDistributionConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_distribution_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDistributionConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDistributionConfiguration to import
  * @param importFromId The id of the existing TfDistributionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDistributionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_imagebuilder_distribution_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configuration',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._distribution.internalValue = config.distribution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
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

  // distribution - computed: false, optional: false, required: true
  private _distribution = new TfDistributionConfiguration.DistributionPropertyList(this, "distribution", true);
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: TfDistributionConfiguration.DistributionProperty[] | cdktn.IResolvable) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      distribution: cdktn.listMapper(tfDistributionConfigurationDistributionPropertyToTerraform, true)(this._distribution.internalValue),
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
      distribution: {
        value: cdktn.listMapperHcl(tfDistributionConfigurationDistributionPropertyToHclTerraform, true)(this._distribution.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfDistributionConfiguration.DistributionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDistributionConfigurationLaunchPermissionPropertyToTerraform(struct?: TfDistributionConfiguration.LaunchPermissionPropertyOutputReference | TfDistributionConfiguration.LaunchPermissionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organization_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationArns),
    organizational_unit_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnitArns),
    user_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userGroups),
    user_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userIds),
  }
}


export function tfDistributionConfigurationLaunchPermissionPropertyToHclTerraform(struct?: TfDistributionConfiguration.LaunchPermissionPropertyOutputReference | TfDistributionConfiguration.LaunchPermissionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organization_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_unit_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnitArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationAmiDistributionConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.AmiDistributionConfigurationPropertyOutputReference | TfDistributionConfiguration.AmiDistributionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ami_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.amiTags),
    description: cdktn.stringToTerraform(struct!.description),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    name: cdktn.stringToTerraform(struct!.name),
    target_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetAccountIds),
    launch_permission: tfDistributionConfigurationLaunchPermissionPropertyToTerraform(struct!.launchPermission),
  }
}


export function tfDistributionConfigurationAmiDistributionConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.AmiDistributionConfigurationPropertyOutputReference | TfDistributionConfiguration.AmiDistributionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ami_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.amiTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetAccountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    launch_permission: {
      value: tfDistributionConfigurationLaunchPermissionPropertyToHclTerraform(struct!.launchPermission),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchPermissionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationTargetRepositoryPropertyToTerraform(struct?: TfDistributionConfiguration.TargetRepositoryPropertyOutputReference | TfDistributionConfiguration.TargetRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_name: cdktn.stringToTerraform(struct!.repositoryName),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function tfDistributionConfigurationTargetRepositoryPropertyToHclTerraform(struct?: TfDistributionConfiguration.TargetRepositoryPropertyOutputReference | TfDistributionConfiguration.TargetRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_name: {
      value: cdktn.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationContainerDistributionConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.ContainerDistributionConfigurationPropertyOutputReference | TfDistributionConfiguration.ContainerDistributionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
    description: cdktn.stringToTerraform(struct!.description),
    target_repository: tfDistributionConfigurationTargetRepositoryPropertyToTerraform(struct!.targetRepository),
  }
}


export function tfDistributionConfigurationContainerDistributionConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.ContainerDistributionConfigurationPropertyOutputReference | TfDistributionConfiguration.ContainerDistributionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerTags),
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
    target_repository: {
      value: tfDistributionConfigurationTargetRepositoryPropertyToHclTerraform(struct!.targetRepository),
      isBlock: true,
      type: "list",
      storageClassType: "TargetRepositoryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationLaunchTemplatePropertyToTerraform(struct?: TfDistributionConfiguration.LaunchTemplatePropertyOutputReference | TfDistributionConfiguration.LaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktn.stringToTerraform(struct!.launchTemplateVersion),
  }
}


export function tfDistributionConfigurationLaunchTemplatePropertyToHclTerraform(struct?: TfDistributionConfiguration.LaunchTemplatePropertyOutputReference | TfDistributionConfiguration.LaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_version: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationSnapshotConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.SnapshotConfigurationPropertyOutputReference | TfDistributionConfiguration.SnapshotConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_resource_count: cdktn.numberToTerraform(struct!.targetResourceCount),
  }
}


export function tfDistributionConfigurationSnapshotConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.SnapshotConfigurationPropertyOutputReference | TfDistributionConfiguration.SnapshotConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_resource_count: {
      value: cdktn.numberToHclTerraform(struct!.targetResourceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationFastLaunchConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.FastLaunchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    max_parallel_launches: cdktn.numberToTerraform(struct!.maxParallelLaunches),
    launch_template: tfDistributionConfigurationLaunchTemplatePropertyToTerraform(struct!.launchTemplate),
    snapshot_configuration: tfDistributionConfigurationSnapshotConfigurationPropertyToTerraform(struct!.snapshotConfiguration),
  }
}


export function tfDistributionConfigurationFastLaunchConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.FastLaunchConfigurationProperty | cdktn.IResolvable): any {
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
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parallel_launches: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelLaunches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    launch_template: {
      value: tfDistributionConfigurationLaunchTemplatePropertyToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplatePropertyList",
    },
    snapshot_configuration: {
      value: tfDistributionConfigurationSnapshotConfigurationPropertyToHclTerraform(struct!.snapshotConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnapshotConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationLaunchTemplateConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.LaunchTemplateConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    default: cdktn.booleanToTerraform(struct!.default),
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
  }
}


export function tfDistributionConfigurationLaunchTemplateConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.LaunchTemplateConfigurationProperty | cdktn.IResolvable): any {
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
    default: {
      value: cdktn.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationS3ExportConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.S3ExportConfigurationPropertyOutputReference | TfDistributionConfiguration.S3ExportConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_image_format: cdktn.stringToTerraform(struct!.diskImageFormat),
    role_name: cdktn.stringToTerraform(struct!.roleName),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
  }
}


export function tfDistributionConfigurationS3ExportConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.S3ExportConfigurationPropertyOutputReference | TfDistributionConfiguration.S3ExportConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_image_format: {
      value: cdktn.stringToHclTerraform(struct!.diskImageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktn.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationSsmParameterConfigurationPropertyToTerraform(struct?: TfDistributionConfiguration.SsmParameterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ami_account_id: cdktn.stringToTerraform(struct!.amiAccountId),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
  }
}


export function tfDistributionConfigurationSsmParameterConfigurationPropertyToHclTerraform(struct?: TfDistributionConfiguration.SsmParameterConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ami_account_id: {
      value: cdktn.stringToHclTerraform(struct!.amiAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDistributionConfigurationDistributionPropertyToTerraform(struct?: TfDistributionConfiguration.DistributionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    license_configuration_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.licenseConfigurationArns),
    region: cdktn.stringToTerraform(struct!.region),
    ami_distribution_configuration: tfDistributionConfigurationAmiDistributionConfigurationPropertyToTerraform(struct!.amiDistributionConfiguration),
    container_distribution_configuration: tfDistributionConfigurationContainerDistributionConfigurationPropertyToTerraform(struct!.containerDistributionConfiguration),
    fast_launch_configuration: cdktn.listMapper(tfDistributionConfigurationFastLaunchConfigurationPropertyToTerraform, true)(struct!.fastLaunchConfiguration),
    launch_template_configuration: cdktn.listMapper(tfDistributionConfigurationLaunchTemplateConfigurationPropertyToTerraform, true)(struct!.launchTemplateConfiguration),
    s3_export_configuration: tfDistributionConfigurationS3ExportConfigurationPropertyToTerraform(struct!.s3ExportConfiguration),
    ssm_parameter_configuration: cdktn.listMapper(tfDistributionConfigurationSsmParameterConfigurationPropertyToTerraform, true)(struct!.ssmParameterConfiguration),
  }
}


export function tfDistributionConfigurationDistributionPropertyToHclTerraform(struct?: TfDistributionConfiguration.DistributionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    license_configuration_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.licenseConfigurationArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_distribution_configuration: {
      value: tfDistributionConfigurationAmiDistributionConfigurationPropertyToHclTerraform(struct!.amiDistributionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AmiDistributionConfigurationPropertyList",
    },
    container_distribution_configuration: {
      value: tfDistributionConfigurationContainerDistributionConfigurationPropertyToHclTerraform(struct!.containerDistributionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerDistributionConfigurationPropertyList",
    },
    fast_launch_configuration: {
      value: cdktn.listMapperHcl(tfDistributionConfigurationFastLaunchConfigurationPropertyToHclTerraform, true)(struct!.fastLaunchConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "FastLaunchConfigurationPropertyList",
    },
    launch_template_configuration: {
      value: cdktn.listMapperHcl(tfDistributionConfigurationLaunchTemplateConfigurationPropertyToHclTerraform, true)(struct!.launchTemplateConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "LaunchTemplateConfigurationPropertyList",
    },
    s3_export_configuration: {
      value: tfDistributionConfigurationS3ExportConfigurationPropertyToHclTerraform(struct!.s3ExportConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ExportConfigurationPropertyList",
    },
    ssm_parameter_configuration: {
      value: cdktn.listMapperHcl(tfDistributionConfigurationSsmParameterConfigurationPropertyToHclTerraform, true)(struct!.ssmParameterConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "SsmParameterConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfDistributionConfiguration {
export interface LaunchPermissionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#organization_arns TfDistributionConfiguration#organization_arns}
  */
  readonly organizationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#organizational_unit_arns TfDistributionConfiguration#organizational_unit_arns}
  */
  readonly organizationalUnitArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#user_groups TfDistributionConfiguration#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#user_ids TfDistributionConfiguration#user_ids}
  */
  readonly userIds?: string[];
}
export class LaunchPermissionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchPermissionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationArns = this._organizationArns;
    }
    if (this._organizationalUnitArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitArns = this._organizationalUnitArns;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchPermissionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organizationArns = undefined;
      this._organizationalUnitArns = undefined;
      this._userGroups = undefined;
      this._userIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organizationArns = value.organizationArns;
      this._organizationalUnitArns = value.organizationalUnitArns;
      this._userGroups = value.userGroups;
      this._userIds = value.userIds;
    }
  }

  // organization_arns - computed: false, optional: true, required: false
  private _organizationArns?: string[]; 
  public get organizationArns() {
    return cdktn.Fn.tolist(this.getListAttribute('organization_arns'));
  }
  public set organizationArns(value: string[]) {
    this._organizationArns = value;
  }
  public resetOrganizationArns() {
    this._organizationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationArnsInput() {
    return this._organizationArns;
  }

  // organizational_unit_arns - computed: false, optional: true, required: false
  private _organizationalUnitArns?: string[]; 
  public get organizationalUnitArns() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_unit_arns'));
  }
  public set organizationalUnitArns(value: string[]) {
    this._organizationalUnitArns = value;
  }
  public resetOrganizationalUnitArns() {
    this._organizationalUnitArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitArnsInput() {
    return this._organizationalUnitArns;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('user_groups'));
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktn.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }
}
export interface AmiDistributionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#ami_tags TfDistributionConfiguration#ami_tags}
  */
  readonly amiTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#description TfDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#kms_key_id TfDistributionConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#name TfDistributionConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#target_account_ids TfDistributionConfiguration#target_account_ids}
  */
  readonly targetAccountIds?: string[];
  /**
  * launch_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_permission TfDistributionConfiguration#launch_permission}
  */
  readonly launchPermission?: LaunchPermissionProperty;
}
export class AmiDistributionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmiDistributionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiTags = this._amiTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccountIds = this._targetAccountIds;
    }
    if (this._launchPermission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchPermission = this._launchPermission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmiDistributionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiTags = undefined;
      this._description = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._targetAccountIds = undefined;
      this._launchPermission.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiTags = value.amiTags;
      this._description = value.description;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._targetAccountIds = value.targetAccountIds;
      this._launchPermission.internalValue = value.launchPermission;
    }
  }

  // ami_tags - computed: false, optional: true, required: false
  private _amiTags?: { [key: string]: string }; 
  public get amiTags() {
    return this.getStringMapAttribute('ami_tags');
  }
  public set amiTags(value: { [key: string]: string }) {
    this._amiTags = value;
  }
  public resetAmiTags() {
    this._amiTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTagsInput() {
    return this._amiTags;
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

  // name - computed: false, optional: true, required: false
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

  // target_account_ids - computed: false, optional: true, required: false
  private _targetAccountIds?: string[]; 
  public get targetAccountIds() {
    return cdktn.Fn.tolist(this.getListAttribute('target_account_ids'));
  }
  public set targetAccountIds(value: string[]) {
    this._targetAccountIds = value;
  }
  public resetTargetAccountIds() {
    this._targetAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountIdsInput() {
    return this._targetAccountIds;
  }

  // launch_permission - computed: false, optional: true, required: false
  private _launchPermission = new LaunchPermissionPropertyOutputReference(this, "launch_permission");
  public get launchPermission() {
    return this._launchPermission;
  }
  public putLaunchPermission(value: LaunchPermissionProperty) {
    this._launchPermission.internalValue = value;
  }
  public resetLaunchPermission() {
    this._launchPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchPermissionInput() {
    return this._launchPermission.internalValue;
  }
}
export interface TargetRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#repository_name TfDistributionConfiguration#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#service TfDistributionConfiguration#service}
  */
  readonly service: string;
}
export class TargetRepositoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetRepositoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetRepositoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryName = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryName = value.repositoryName;
      this._service = value.service;
    }
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ContainerDistributionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#container_tags TfDistributionConfiguration#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#description TfDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * target_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#target_repository TfDistributionConfiguration#target_repository}
  */
  readonly targetRepository: TargetRepositoryProperty;
}
export class ContainerDistributionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerDistributionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._targetRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRepository = this._targetRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerDistributionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerTags = undefined;
      this._description = undefined;
      this._targetRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerTags = value.containerTags;
      this._description = value.description;
      this._targetRepository.internalValue = value.targetRepository;
    }
  }

  // container_tags - computed: false, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return cdktn.Fn.tolist(this.getListAttribute('container_tags'));
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
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

  // target_repository - computed: false, optional: false, required: true
  private _targetRepository = new TargetRepositoryPropertyOutputReference(this, "target_repository");
  public get targetRepository() {
    return this._targetRepository;
  }
  public putTargetRepository(value: TargetRepositoryProperty) {
    this._targetRepository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepositoryInput() {
    return this._targetRepository.internalValue;
  }
}
export interface LaunchTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id TfDistributionConfiguration#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template_name TfDistributionConfiguration#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template_version TfDistributionConfiguration#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
}
export class LaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }
}
export interface SnapshotConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#target_resource_count TfDistributionConfiguration#target_resource_count}
  */
  readonly targetResourceCount?: number;
}
export class SnapshotConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnapshotConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetResourceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceCount = this._targetResourceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetResourceCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetResourceCount = value.targetResourceCount;
    }
  }

  // target_resource_count - computed: false, optional: true, required: false
  private _targetResourceCount?: number; 
  public get targetResourceCount() {
    return this.getNumberAttribute('target_resource_count');
  }
  public set targetResourceCount(value: number) {
    this._targetResourceCount = value;
  }
  public resetTargetResourceCount() {
    this._targetResourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceCountInput() {
    return this._targetResourceCount;
  }
}
export interface FastLaunchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#account_id TfDistributionConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#enabled TfDistributionConfiguration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#max_parallel_launches TfDistributionConfiguration#max_parallel_launches}
  */
  readonly maxParallelLaunches?: number;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template TfDistributionConfiguration#launch_template}
  */
  readonly launchTemplate?: LaunchTemplateProperty;
  /**
  * snapshot_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#snapshot_configuration TfDistributionConfiguration#snapshot_configuration}
  */
  readonly snapshotConfiguration?: SnapshotConfigurationProperty;
}
export class FastLaunchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FastLaunchConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxParallelLaunches !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelLaunches = this._maxParallelLaunches;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._snapshotConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotConfiguration = this._snapshotConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastLaunchConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._enabled = undefined;
      this._maxParallelLaunches = undefined;
      this._launchTemplate.internalValue = undefined;
      this._snapshotConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._enabled = value.enabled;
      this._maxParallelLaunches = value.maxParallelLaunches;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._snapshotConfiguration.internalValue = value.snapshotConfiguration;
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

  // max_parallel_launches - computed: false, optional: true, required: false
  private _maxParallelLaunches?: number; 
  public get maxParallelLaunches() {
    return this.getNumberAttribute('max_parallel_launches');
  }
  public set maxParallelLaunches(value: number) {
    this._maxParallelLaunches = value;
  }
  public resetMaxParallelLaunches() {
    this._maxParallelLaunches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelLaunchesInput() {
    return this._maxParallelLaunches;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new LaunchTemplatePropertyOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: LaunchTemplateProperty) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // snapshot_configuration - computed: false, optional: true, required: false
  private _snapshotConfiguration = new SnapshotConfigurationPropertyOutputReference(this, "snapshot_configuration");
  public get snapshotConfiguration() {
    return this._snapshotConfiguration;
  }
  public putSnapshotConfiguration(value: SnapshotConfigurationProperty) {
    this._snapshotConfiguration.internalValue = value;
  }
  public resetSnapshotConfiguration() {
    this._snapshotConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotConfigurationInput() {
    return this._snapshotConfiguration.internalValue;
  }
}

export class FastLaunchConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : FastLaunchConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): FastLaunchConfigurationPropertyOutputReference {
    return new FastLaunchConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#account_id TfDistributionConfiguration#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#default TfDistributionConfiguration#default}
  */
  readonly default?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id TfDistributionConfiguration#launch_template_id}
  */
  readonly launchTemplateId: string;
}
export class LaunchTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LaunchTemplateConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._default = undefined;
      this._launchTemplateId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._default = value.default;
      this._launchTemplateId = value.launchTemplateId;
    }
  }

  // account_id - computed: false, optional: true, required: false
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

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktn.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktn.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // launch_template_id - computed: false, optional: false, required: true
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }
}

export class LaunchTemplateConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : LaunchTemplateConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): LaunchTemplateConfigurationPropertyOutputReference {
    return new LaunchTemplateConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ExportConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#disk_image_format TfDistributionConfiguration#disk_image_format}
  */
  readonly diskImageFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#role_name TfDistributionConfiguration#role_name}
  */
  readonly roleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#s3_bucket TfDistributionConfiguration#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#s3_prefix TfDistributionConfiguration#s3_prefix}
  */
  readonly s3Prefix?: string;
}
export class S3ExportConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ExportConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImageFormat = this._diskImageFormat;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExportConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskImageFormat = undefined;
      this._roleName = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskImageFormat = value.diskImageFormat;
      this._roleName = value.roleName;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
    }
  }

  // disk_image_format - computed: false, optional: false, required: true
  private _diskImageFormat?: string; 
  public get diskImageFormat() {
    return this.getStringAttribute('disk_image_format');
  }
  public set diskImageFormat(value: string) {
    this._diskImageFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageFormatInput() {
    return this._diskImageFormat;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }
}
export interface SsmParameterConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#ami_account_id TfDistributionConfiguration#ami_account_id}
  */
  readonly amiAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#data_type TfDistributionConfiguration#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#parameter_name TfDistributionConfiguration#parameter_name}
  */
  readonly parameterName: string;
}
export class SsmParameterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmParameterConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiAccountId = this._amiAccountId;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmParameterConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiAccountId = undefined;
      this._dataType = undefined;
      this._parameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiAccountId = value.amiAccountId;
      this._dataType = value.dataType;
      this._parameterName = value.parameterName;
    }
  }

  // ami_account_id - computed: false, optional: true, required: false
  private _amiAccountId?: string; 
  public get amiAccountId() {
    return this.getStringAttribute('ami_account_id');
  }
  public set amiAccountId(value: string) {
    this._amiAccountId = value;
  }
  public resetAmiAccountId() {
    this._amiAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiAccountIdInput() {
    return this._amiAccountId;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class SsmParameterConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SsmParameterConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SsmParameterConfigurationPropertyOutputReference {
    return new SsmParameterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DistributionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#license_configuration_arns TfDistributionConfiguration#license_configuration_arns}
  */
  readonly licenseConfigurationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#region TfDistributionConfiguration#region}
  */
  readonly region: string;
  /**
  * ami_distribution_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#ami_distribution_configuration TfDistributionConfiguration#ami_distribution_configuration}
  */
  readonly amiDistributionConfiguration?: AmiDistributionConfigurationProperty;
  /**
  * container_distribution_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#container_distribution_configuration TfDistributionConfiguration#container_distribution_configuration}
  */
  readonly containerDistributionConfiguration?: ContainerDistributionConfigurationProperty;
  /**
  * fast_launch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#fast_launch_configuration TfDistributionConfiguration#fast_launch_configuration}
  */
  readonly fastLaunchConfiguration?: FastLaunchConfigurationProperty[] | cdktn.IResolvable;
  /**
  * launch_template_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#launch_template_configuration TfDistributionConfiguration#launch_template_configuration}
  */
  readonly launchTemplateConfiguration?: LaunchTemplateConfigurationProperty[] | cdktn.IResolvable;
  /**
  * s3_export_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#s3_export_configuration TfDistributionConfiguration#s3_export_configuration}
  */
  readonly s3ExportConfiguration?: S3ExportConfigurationProperty;
  /**
  * ssm_parameter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_distribution_configuration#ssm_parameter_configuration TfDistributionConfiguration#ssm_parameter_configuration}
  */
  readonly ssmParameterConfiguration?: SsmParameterConfigurationProperty[] | cdktn.IResolvable;
}
export class DistributionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DistributionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArns = this._licenseConfigurationArns;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._amiDistributionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiDistributionConfiguration = this._amiDistributionConfiguration?.internalValue;
    }
    if (this._containerDistributionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDistributionConfiguration = this._containerDistributionConfiguration?.internalValue;
    }
    if (this._fastLaunchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastLaunchConfiguration = this._fastLaunchConfiguration?.internalValue;
    }
    if (this._launchTemplateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateConfiguration = this._launchTemplateConfiguration?.internalValue;
    }
    if (this._s3ExportConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ExportConfiguration = this._s3ExportConfiguration?.internalValue;
    }
    if (this._ssmParameterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmParameterConfiguration = this._ssmParameterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArns = undefined;
      this._region = undefined;
      this._amiDistributionConfiguration.internalValue = undefined;
      this._containerDistributionConfiguration.internalValue = undefined;
      this._fastLaunchConfiguration.internalValue = undefined;
      this._launchTemplateConfiguration.internalValue = undefined;
      this._s3ExportConfiguration.internalValue = undefined;
      this._ssmParameterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArns = value.licenseConfigurationArns;
      this._region = value.region;
      this._amiDistributionConfiguration.internalValue = value.amiDistributionConfiguration;
      this._containerDistributionConfiguration.internalValue = value.containerDistributionConfiguration;
      this._fastLaunchConfiguration.internalValue = value.fastLaunchConfiguration;
      this._launchTemplateConfiguration.internalValue = value.launchTemplateConfiguration;
      this._s3ExportConfiguration.internalValue = value.s3ExportConfiguration;
      this._ssmParameterConfiguration.internalValue = value.ssmParameterConfiguration;
    }
  }

  // license_configuration_arns - computed: false, optional: true, required: false
  private _licenseConfigurationArns?: string[]; 
  public get licenseConfigurationArns() {
    return cdktn.Fn.tolist(this.getListAttribute('license_configuration_arns'));
  }
  public set licenseConfigurationArns(value: string[]) {
    this._licenseConfigurationArns = value;
  }
  public resetLicenseConfigurationArns() {
    this._licenseConfigurationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnsInput() {
    return this._licenseConfigurationArns;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ami_distribution_configuration - computed: false, optional: true, required: false
  private _amiDistributionConfiguration = new AmiDistributionConfigurationPropertyOutputReference(this, "ami_distribution_configuration");
  public get amiDistributionConfiguration() {
    return this._amiDistributionConfiguration;
  }
  public putAmiDistributionConfiguration(value: AmiDistributionConfigurationProperty) {
    this._amiDistributionConfiguration.internalValue = value;
  }
  public resetAmiDistributionConfiguration() {
    this._amiDistributionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiDistributionConfigurationInput() {
    return this._amiDistributionConfiguration.internalValue;
  }

  // container_distribution_configuration - computed: false, optional: true, required: false
  private _containerDistributionConfiguration = new ContainerDistributionConfigurationPropertyOutputReference(this, "container_distribution_configuration");
  public get containerDistributionConfiguration() {
    return this._containerDistributionConfiguration;
  }
  public putContainerDistributionConfiguration(value: ContainerDistributionConfigurationProperty) {
    this._containerDistributionConfiguration.internalValue = value;
  }
  public resetContainerDistributionConfiguration() {
    this._containerDistributionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDistributionConfigurationInput() {
    return this._containerDistributionConfiguration.internalValue;
  }

  // fast_launch_configuration - computed: false, optional: true, required: false
  private _fastLaunchConfiguration = new FastLaunchConfigurationPropertyList(this, "fast_launch_configuration", true);
  public get fastLaunchConfiguration() {
    return this._fastLaunchConfiguration;
  }
  public putFastLaunchConfiguration(value: FastLaunchConfigurationProperty[] | cdktn.IResolvable) {
    this._fastLaunchConfiguration.internalValue = value;
  }
  public resetFastLaunchConfiguration() {
    this._fastLaunchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastLaunchConfigurationInput() {
    return this._fastLaunchConfiguration.internalValue;
  }

  // launch_template_configuration - computed: false, optional: true, required: false
  private _launchTemplateConfiguration = new LaunchTemplateConfigurationPropertyList(this, "launch_template_configuration", true);
  public get launchTemplateConfiguration() {
    return this._launchTemplateConfiguration;
  }
  public putLaunchTemplateConfiguration(value: LaunchTemplateConfigurationProperty[] | cdktn.IResolvable) {
    this._launchTemplateConfiguration.internalValue = value;
  }
  public resetLaunchTemplateConfiguration() {
    this._launchTemplateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigurationInput() {
    return this._launchTemplateConfiguration.internalValue;
  }

  // s3_export_configuration - computed: false, optional: true, required: false
  private _s3ExportConfiguration = new S3ExportConfigurationPropertyOutputReference(this, "s3_export_configuration");
  public get s3ExportConfiguration() {
    return this._s3ExportConfiguration;
  }
  public putS3ExportConfiguration(value: S3ExportConfigurationProperty) {
    this._s3ExportConfiguration.internalValue = value;
  }
  public resetS3ExportConfiguration() {
    this._s3ExportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportConfigurationInput() {
    return this._s3ExportConfiguration.internalValue;
  }

  // ssm_parameter_configuration - computed: false, optional: true, required: false
  private _ssmParameterConfiguration = new SsmParameterConfigurationPropertyList(this, "ssm_parameter_configuration", true);
  public get ssmParameterConfiguration() {
    return this._ssmParameterConfiguration;
  }
  public putSsmParameterConfiguration(value: SsmParameterConfigurationProperty[] | cdktn.IResolvable) {
    this._ssmParameterConfiguration.internalValue = value;
  }
  public resetSsmParameterConfiguration() {
    this._ssmParameterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmParameterConfigurationInput() {
    return this._ssmParameterConfiguration.internalValue;
  }
}

export class DistributionPropertyList extends cdktn.ComplexList {
  public internalValue? : DistributionProperty[] | cdktn.IResolvable

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
  public get(index: number): DistributionPropertyOutputReference {
    return new DistributionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
