// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsQuicksightThemeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#aws_account_id AwsQuicksightTheme#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#base_theme_id AwsQuicksightTheme#base_theme_id}
  */
  readonly baseThemeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#id AwsQuicksightTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#name AwsQuicksightTheme#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#region AwsQuicksightTheme#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#tags AwsQuicksightTheme#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#tags_all AwsQuicksightTheme#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#theme_id AwsQuicksightTheme#theme_id}
  */
  readonly themeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#version_description AwsQuicksightTheme#version_description}
  */
  readonly versionDescription?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#configuration AwsQuicksightTheme#configuration}
  */
  readonly configuration?: AwsQuicksightTheme.ConfigurationProperty;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#permissions AwsQuicksightTheme#permissions}
  */
  readonly permissions?: AwsQuicksightTheme.PermissionsProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#timeouts AwsQuicksightTheme#timeouts}
  */
  readonly timeouts?: AwsQuicksightTheme.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme aws_quicksight_theme}
*/
export class AwsQuicksightTheme extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsQuicksightTheme resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsQuicksightTheme to import
  * @param importFromId The id of the existing AwsQuicksightTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsQuicksightTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme aws_quicksight_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsQuicksightThemeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsQuicksightThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_theme',
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
    this._awsAccountId = config.awsAccountId;
    this._baseThemeId = config.baseThemeId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._themeId = config.themeId;
    this._versionDescription = config.versionDescription;
    this._configuration.internalValue = config.configuration;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // base_theme_id - computed: false, optional: false, required: true
  private _baseThemeId?: string; 
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }
  public set baseThemeId(value: string) {
    this._baseThemeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseThemeIdInput() {
    return this._baseThemeId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // theme_id - computed: false, optional: false, required: true
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsQuicksightTheme.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsQuicksightTheme.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new AwsQuicksightTheme.PermissionsPropertyList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: AwsQuicksightTheme.PermissionsProperty[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsQuicksightTheme.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsQuicksightTheme.TimeoutsProperty) {
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
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      base_theme_id: cdktn.stringToTerraform(this._baseThemeId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      theme_id: cdktn.stringToTerraform(this._themeId),
      version_description: cdktn.stringToTerraform(this._versionDescription),
      configuration: awsQuicksightThemeConfigurationPropertyToTerraform(this._configuration.internalValue),
      permissions: cdktn.listMapper(awsQuicksightThemePermissionsPropertyToTerraform, true)(this._permissions.internalValue),
      timeouts: awsQuicksightThemeTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_theme_id: {
        value: cdktn.stringToHclTerraform(this._baseThemeId),
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
      theme_id: {
        value: cdktn.stringToHclTerraform(this._themeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: awsQuicksightThemeConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightTheme.ConfigurationPropertyList",
      },
      permissions: {
        value: cdktn.listMapperHcl(awsQuicksightThemePermissionsPropertyToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightTheme.PermissionsPropertyList",
      },
      timeouts: {
        value: awsQuicksightThemeTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsQuicksightTheme.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsQuicksightThemeDataColorPalettePropertyToTerraform(struct?: AwsQuicksightTheme.DataColorPalettePropertyOutputReference | AwsQuicksightTheme.DataColorPaletteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    colors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.colors),
    empty_fill_color: cdktn.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.minMaxGradient),
  }
}


export function awsQuicksightThemeDataColorPalettePropertyToHclTerraform(struct?: AwsQuicksightTheme.DataColorPalettePropertyOutputReference | AwsQuicksightTheme.DataColorPaletteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    colors: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.colors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    empty_fill_color: {
      value: cdktn.stringToHclTerraform(struct!.emptyFillColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_max_gradient: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.minMaxGradient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeBorderPropertyToTerraform(struct?: AwsQuicksightTheme.BorderPropertyOutputReference | AwsQuicksightTheme.BorderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function awsQuicksightThemeBorderPropertyToHclTerraform(struct?: AwsQuicksightTheme.BorderPropertyOutputReference | AwsQuicksightTheme.BorderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeTilePropertyToTerraform(struct?: AwsQuicksightTheme.TilePropertyOutputReference | AwsQuicksightTheme.TileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    border: awsQuicksightThemeBorderPropertyToTerraform(struct!.border),
  }
}


export function awsQuicksightThemeTilePropertyToHclTerraform(struct?: AwsQuicksightTheme.TilePropertyOutputReference | AwsQuicksightTheme.TileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    border: {
      value: awsQuicksightThemeBorderPropertyToHclTerraform(struct!.border),
      isBlock: true,
      type: "list",
      storageClassType: "BorderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeGutterPropertyToTerraform(struct?: AwsQuicksightTheme.GutterPropertyOutputReference | AwsQuicksightTheme.GutterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function awsQuicksightThemeGutterPropertyToHclTerraform(struct?: AwsQuicksightTheme.GutterPropertyOutputReference | AwsQuicksightTheme.GutterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeMarginPropertyToTerraform(struct?: AwsQuicksightTheme.MarginPropertyOutputReference | AwsQuicksightTheme.MarginProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function awsQuicksightThemeMarginPropertyToHclTerraform(struct?: AwsQuicksightTheme.MarginPropertyOutputReference | AwsQuicksightTheme.MarginProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeTileLayoutPropertyToTerraform(struct?: AwsQuicksightTheme.TileLayoutPropertyOutputReference | AwsQuicksightTheme.TileLayoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gutter: awsQuicksightThemeGutterPropertyToTerraform(struct!.gutter),
    margin: awsQuicksightThemeMarginPropertyToTerraform(struct!.margin),
  }
}


export function awsQuicksightThemeTileLayoutPropertyToHclTerraform(struct?: AwsQuicksightTheme.TileLayoutPropertyOutputReference | AwsQuicksightTheme.TileLayoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gutter: {
      value: awsQuicksightThemeGutterPropertyToHclTerraform(struct!.gutter),
      isBlock: true,
      type: "list",
      storageClassType: "GutterPropertyList",
    },
    margin: {
      value: awsQuicksightThemeMarginPropertyToHclTerraform(struct!.margin),
      isBlock: true,
      type: "list",
      storageClassType: "MarginPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeSheetPropertyToTerraform(struct?: AwsQuicksightTheme.SheetPropertyOutputReference | AwsQuicksightTheme.SheetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tile: awsQuicksightThemeTilePropertyToTerraform(struct!.tile),
    tile_layout: awsQuicksightThemeTileLayoutPropertyToTerraform(struct!.tileLayout),
  }
}


export function awsQuicksightThemeSheetPropertyToHclTerraform(struct?: AwsQuicksightTheme.SheetPropertyOutputReference | AwsQuicksightTheme.SheetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tile: {
      value: awsQuicksightThemeTilePropertyToHclTerraform(struct!.tile),
      isBlock: true,
      type: "list",
      storageClassType: "TilePropertyList",
    },
    tile_layout: {
      value: awsQuicksightThemeTileLayoutPropertyToHclTerraform(struct!.tileLayout),
      isBlock: true,
      type: "list",
      storageClassType: "TileLayoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeFontFamiliesPropertyToTerraform(struct?: AwsQuicksightTheme.FontFamiliesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
  }
}


export function awsQuicksightThemeFontFamiliesPropertyToHclTerraform(struct?: AwsQuicksightTheme.FontFamiliesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeTypographyPropertyToTerraform(struct?: AwsQuicksightTheme.TypographyPropertyOutputReference | AwsQuicksightTheme.TypographyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_families: cdktn.listMapper(awsQuicksightThemeFontFamiliesPropertyToTerraform, true)(struct!.fontFamilies),
  }
}


export function awsQuicksightThemeTypographyPropertyToHclTerraform(struct?: AwsQuicksightTheme.TypographyPropertyOutputReference | AwsQuicksightTheme.TypographyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_families: {
      value: cdktn.listMapperHcl(awsQuicksightThemeFontFamiliesPropertyToHclTerraform, true)(struct!.fontFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "FontFamiliesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeUiColorPalettePropertyToTerraform(struct?: AwsQuicksightTheme.UiColorPalettePropertyOutputReference | AwsQuicksightTheme.UiColorPaletteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accent: cdktn.stringToTerraform(struct!.accent),
    accent_foreground: cdktn.stringToTerraform(struct!.accentForeground),
    danger: cdktn.stringToTerraform(struct!.danger),
    danger_foreground: cdktn.stringToTerraform(struct!.dangerForeground),
    dimension: cdktn.stringToTerraform(struct!.dimension),
    dimension_foreground: cdktn.stringToTerraform(struct!.dimensionForeground),
    measure: cdktn.stringToTerraform(struct!.measure),
    measure_foreground: cdktn.stringToTerraform(struct!.measureForeground),
    primary_background: cdktn.stringToTerraform(struct!.primaryBackground),
    primary_foreground: cdktn.stringToTerraform(struct!.primaryForeground),
    secondary_background: cdktn.stringToTerraform(struct!.secondaryBackground),
    secondary_foreground: cdktn.stringToTerraform(struct!.secondaryForeground),
    success: cdktn.stringToTerraform(struct!.success),
    success_foreground: cdktn.stringToTerraform(struct!.successForeground),
    warning: cdktn.stringToTerraform(struct!.warning),
    warning_foreground: cdktn.stringToTerraform(struct!.warningForeground),
  }
}


export function awsQuicksightThemeUiColorPalettePropertyToHclTerraform(struct?: AwsQuicksightTheme.UiColorPalettePropertyOutputReference | AwsQuicksightTheme.UiColorPaletteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accent: {
      value: cdktn.stringToHclTerraform(struct!.accent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accent_foreground: {
      value: cdktn.stringToHclTerraform(struct!.accentForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    danger: {
      value: cdktn.stringToHclTerraform(struct!.danger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    danger_foreground: {
      value: cdktn.stringToHclTerraform(struct!.dangerForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_foreground: {
      value: cdktn.stringToHclTerraform(struct!.dimensionForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure: {
      value: cdktn.stringToHclTerraform(struct!.measure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_foreground: {
      value: cdktn.stringToHclTerraform(struct!.measureForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_background: {
      value: cdktn.stringToHclTerraform(struct!.primaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_foreground: {
      value: cdktn.stringToHclTerraform(struct!.primaryForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_background: {
      value: cdktn.stringToHclTerraform(struct!.secondaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_foreground: {
      value: cdktn.stringToHclTerraform(struct!.secondaryForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success: {
      value: cdktn.stringToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_foreground: {
      value: cdktn.stringToHclTerraform(struct!.successForeground),
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
    warning_foreground: {
      value: cdktn.stringToHclTerraform(struct!.warningForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeConfigurationPropertyToTerraform(struct?: AwsQuicksightTheme.ConfigurationPropertyOutputReference | AwsQuicksightTheme.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_color_palette: awsQuicksightThemeDataColorPalettePropertyToTerraform(struct!.dataColorPalette),
    sheet: awsQuicksightThemeSheetPropertyToTerraform(struct!.sheet),
    typography: awsQuicksightThemeTypographyPropertyToTerraform(struct!.typography),
    ui_color_palette: awsQuicksightThemeUiColorPalettePropertyToTerraform(struct!.uiColorPalette),
  }
}


export function awsQuicksightThemeConfigurationPropertyToHclTerraform(struct?: AwsQuicksightTheme.ConfigurationPropertyOutputReference | AwsQuicksightTheme.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_color_palette: {
      value: awsQuicksightThemeDataColorPalettePropertyToHclTerraform(struct!.dataColorPalette),
      isBlock: true,
      type: "list",
      storageClassType: "DataColorPalettePropertyList",
    },
    sheet: {
      value: awsQuicksightThemeSheetPropertyToHclTerraform(struct!.sheet),
      isBlock: true,
      type: "list",
      storageClassType: "SheetPropertyList",
    },
    typography: {
      value: awsQuicksightThemeTypographyPropertyToHclTerraform(struct!.typography),
      isBlock: true,
      type: "list",
      storageClassType: "TypographyPropertyList",
    },
    ui_color_palette: {
      value: awsQuicksightThemeUiColorPalettePropertyToHclTerraform(struct!.uiColorPalette),
      isBlock: true,
      type: "list",
      storageClassType: "UiColorPalettePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemePermissionsPropertyToTerraform(struct?: AwsQuicksightTheme.PermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function awsQuicksightThemePermissionsPropertyToHclTerraform(struct?: AwsQuicksightTheme.PermissionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightThemeTimeoutsPropertyToTerraform(struct?: AwsQuicksightTheme.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsQuicksightThemeTimeoutsPropertyToHclTerraform(struct?: AwsQuicksightTheme.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsQuicksightTheme {
export interface DataColorPaletteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#colors AwsQuicksightTheme#colors}
  */
  readonly colors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#empty_fill_color AwsQuicksightTheme#empty_fill_color}
  */
  readonly emptyFillColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#min_max_gradient AwsQuicksightTheme#min_max_gradient}
  */
  readonly minMaxGradient?: string[];
}
export class DataColorPalettePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataColorPaletteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._emptyFillColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFillColor = this._emptyFillColor;
    }
    if (this._minMaxGradient !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMaxGradient = this._minMaxGradient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataColorPaletteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors = undefined;
      this._emptyFillColor = undefined;
      this._minMaxGradient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors = value.colors;
      this._emptyFillColor = value.emptyFillColor;
      this._minMaxGradient = value.minMaxGradient;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors?: string[]; 
  public get colors() {
    return this.getListAttribute('colors');
  }
  public set colors(value: string[]) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // empty_fill_color - computed: false, optional: true, required: false
  private _emptyFillColor?: string; 
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }
  public set emptyFillColor(value: string) {
    this._emptyFillColor = value;
  }
  public resetEmptyFillColor() {
    this._emptyFillColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFillColorInput() {
    return this._emptyFillColor;
  }

  // min_max_gradient - computed: false, optional: true, required: false
  private _minMaxGradient?: string[]; 
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
  public set minMaxGradient(value: string[]) {
    this._minMaxGradient = value;
  }
  public resetMinMaxGradient() {
    this._minMaxGradient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMaxGradientInput() {
    return this._minMaxGradient;
  }
}
export interface BorderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#show AwsQuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}
export class BorderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BorderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BorderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface TileProperty {
  /**
  * border block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#border AwsQuicksightTheme#border}
  */
  readonly border?: BorderProperty;
}
export class TilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._border.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._border.internalValue = value.border;
    }
  }

  // border - computed: false, optional: true, required: false
  private _border = new BorderPropertyOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: BorderProperty) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }
}
export interface GutterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#show AwsQuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}
export class GutterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GutterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GutterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface MarginProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#show AwsQuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}
export class MarginPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MarginProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarginProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface TileLayoutProperty {
  /**
  * gutter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#gutter AwsQuicksightTheme#gutter}
  */
  readonly gutter?: GutterProperty;
  /**
  * margin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#margin AwsQuicksightTheme#margin}
  */
  readonly margin?: MarginProperty;
}
export class TileLayoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TileLayoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gutter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gutter = this._gutter?.internalValue;
    }
    if (this._margin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TileLayoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gutter.internalValue = undefined;
      this._margin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gutter.internalValue = value.gutter;
      this._margin.internalValue = value.margin;
    }
  }

  // gutter - computed: false, optional: true, required: false
  private _gutter = new GutterPropertyOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }
  public putGutter(value: GutterProperty) {
    this._gutter.internalValue = value;
  }
  public resetGutter() {
    this._gutter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gutterInput() {
    return this._gutter.internalValue;
  }

  // margin - computed: false, optional: true, required: false
  private _margin = new MarginPropertyOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
  public putMargin(value: MarginProperty) {
    this._margin.internalValue = value;
  }
  public resetMargin() {
    this._margin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin.internalValue;
  }
}
export interface SheetProperty {
  /**
  * tile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#tile AwsQuicksightTheme#tile}
  */
  readonly tile?: TileProperty;
  /**
  * tile_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#tile_layout AwsQuicksightTheme#tile_layout}
  */
  readonly tileLayout?: TileLayoutProperty;
}
export class SheetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SheetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tile = this._tile?.internalValue;
    }
    if (this._tileLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileLayout = this._tileLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SheetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tile.internalValue = undefined;
      this._tileLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tile.internalValue = value.tile;
      this._tileLayout.internalValue = value.tileLayout;
    }
  }

  // tile - computed: false, optional: true, required: false
  private _tile = new TilePropertyOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }
  public putTile(value: TileProperty) {
    this._tile.internalValue = value;
  }
  public resetTile() {
    this._tile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileInput() {
    return this._tile.internalValue;
  }

  // tile_layout - computed: false, optional: true, required: false
  private _tileLayout = new TileLayoutPropertyOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
  public putTileLayout(value: TileLayoutProperty) {
    this._tileLayout.internalValue = value;
  }
  public resetTileLayout() {
    this._tileLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileLayoutInput() {
    return this._tileLayout.internalValue;
  }
}
export interface FontFamiliesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#font_family AwsQuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
}
export class FontFamiliesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FontFamiliesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FontFamiliesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontFamily = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontFamily = value.fontFamily;
    }
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }
}

export class FontFamiliesPropertyList extends cdktn.ComplexList {
  public internalValue? : FontFamiliesProperty[] | cdktn.IResolvable

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
  public get(index: number): FontFamiliesPropertyOutputReference {
    return new FontFamiliesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypographyProperty {
  /**
  * font_families block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#font_families AwsQuicksightTheme#font_families}
  */
  readonly fontFamilies?: FontFamiliesProperty[] | cdktn.IResolvable;
}
export class TypographyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TypographyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamilies = this._fontFamilies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypographyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontFamilies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontFamilies.internalValue = value.fontFamilies;
    }
  }

  // font_families - computed: false, optional: true, required: false
  private _fontFamilies = new FontFamiliesPropertyList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }
  public putFontFamilies(value: FontFamiliesProperty[] | cdktn.IResolvable) {
    this._fontFamilies.internalValue = value;
  }
  public resetFontFamilies() {
    this._fontFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamiliesInput() {
    return this._fontFamilies.internalValue;
  }
}
export interface UiColorPaletteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#accent AwsQuicksightTheme#accent}
  */
  readonly accent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#accent_foreground AwsQuicksightTheme#accent_foreground}
  */
  readonly accentForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#danger AwsQuicksightTheme#danger}
  */
  readonly danger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#danger_foreground AwsQuicksightTheme#danger_foreground}
  */
  readonly dangerForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#dimension AwsQuicksightTheme#dimension}
  */
  readonly dimension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#dimension_foreground AwsQuicksightTheme#dimension_foreground}
  */
  readonly dimensionForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#measure AwsQuicksightTheme#measure}
  */
  readonly measure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#measure_foreground AwsQuicksightTheme#measure_foreground}
  */
  readonly measureForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#primary_background AwsQuicksightTheme#primary_background}
  */
  readonly primaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#primary_foreground AwsQuicksightTheme#primary_foreground}
  */
  readonly primaryForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#secondary_background AwsQuicksightTheme#secondary_background}
  */
  readonly secondaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#secondary_foreground AwsQuicksightTheme#secondary_foreground}
  */
  readonly secondaryForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#success AwsQuicksightTheme#success}
  */
  readonly success?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#success_foreground AwsQuicksightTheme#success_foreground}
  */
  readonly successForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#warning AwsQuicksightTheme#warning}
  */
  readonly warning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#warning_foreground AwsQuicksightTheme#warning_foreground}
  */
  readonly warningForeground?: string;
}
export class UiColorPalettePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UiColorPaletteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent;
    }
    if (this._accentForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.accentForeground = this._accentForeground;
    }
    if (this._danger !== undefined) {
      hasAnyValues = true;
      internalValueResult.danger = this._danger;
    }
    if (this._dangerForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dangerForeground = this._dangerForeground;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._dimensionForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionForeground = this._dimensionForeground;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._measureForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureForeground = this._measureForeground;
    }
    if (this._primaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBackground = this._primaryBackground;
    }
    if (this._primaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryForeground = this._primaryForeground;
    }
    if (this._secondaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBackground = this._secondaryBackground;
    }
    if (this._secondaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryForeground = this._secondaryForeground;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._successForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.successForeground = this._successForeground;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningForeground = this._warningForeground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UiColorPaletteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accent = undefined;
      this._accentForeground = undefined;
      this._danger = undefined;
      this._dangerForeground = undefined;
      this._dimension = undefined;
      this._dimensionForeground = undefined;
      this._measure = undefined;
      this._measureForeground = undefined;
      this._primaryBackground = undefined;
      this._primaryForeground = undefined;
      this._secondaryBackground = undefined;
      this._secondaryForeground = undefined;
      this._success = undefined;
      this._successForeground = undefined;
      this._warning = undefined;
      this._warningForeground = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accent = value.accent;
      this._accentForeground = value.accentForeground;
      this._danger = value.danger;
      this._dangerForeground = value.dangerForeground;
      this._dimension = value.dimension;
      this._dimensionForeground = value.dimensionForeground;
      this._measure = value.measure;
      this._measureForeground = value.measureForeground;
      this._primaryBackground = value.primaryBackground;
      this._primaryForeground = value.primaryForeground;
      this._secondaryBackground = value.secondaryBackground;
      this._secondaryForeground = value.secondaryForeground;
      this._success = value.success;
      this._successForeground = value.successForeground;
      this._warning = value.warning;
      this._warningForeground = value.warningForeground;
    }
  }

  // accent - computed: false, optional: true, required: false
  private _accent?: string; 
  public get accent() {
    return this.getStringAttribute('accent');
  }
  public set accent(value: string) {
    this._accent = value;
  }
  public resetAccent() {
    this._accent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent;
  }

  // accent_foreground - computed: false, optional: true, required: false
  private _accentForeground?: string; 
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }
  public set accentForeground(value: string) {
    this._accentForeground = value;
  }
  public resetAccentForeground() {
    this._accentForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentForegroundInput() {
    return this._accentForeground;
  }

  // danger - computed: false, optional: true, required: false
  private _danger?: string; 
  public get danger() {
    return this.getStringAttribute('danger');
  }
  public set danger(value: string) {
    this._danger = value;
  }
  public resetDanger() {
    this._danger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerInput() {
    return this._danger;
  }

  // danger_foreground - computed: false, optional: true, required: false
  private _dangerForeground?: string; 
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }
  public set dangerForeground(value: string) {
    this._dangerForeground = value;
  }
  public resetDangerForeground() {
    this._dangerForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerForegroundInput() {
    return this._dangerForeground;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // dimension_foreground - computed: false, optional: true, required: false
  private _dimensionForeground?: string; 
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }
  public set dimensionForeground(value: string) {
    this._dimensionForeground = value;
  }
  public resetDimensionForeground() {
    this._dimensionForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionForegroundInput() {
    return this._dimensionForeground;
  }

  // measure - computed: false, optional: true, required: false
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  public resetMeasure() {
    this._measure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
  }

  // measure_foreground - computed: false, optional: true, required: false
  private _measureForeground?: string; 
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }
  public set measureForeground(value: string) {
    this._measureForeground = value;
  }
  public resetMeasureForeground() {
    this._measureForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureForegroundInput() {
    return this._measureForeground;
  }

  // primary_background - computed: false, optional: true, required: false
  private _primaryBackground?: string; 
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }
  public set primaryBackground(value: string) {
    this._primaryBackground = value;
  }
  public resetPrimaryBackground() {
    this._primaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBackgroundInput() {
    return this._primaryBackground;
  }

  // primary_foreground - computed: false, optional: true, required: false
  private _primaryForeground?: string; 
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }
  public set primaryForeground(value: string) {
    this._primaryForeground = value;
  }
  public resetPrimaryForeground() {
    this._primaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryForegroundInput() {
    return this._primaryForeground;
  }

  // secondary_background - computed: false, optional: true, required: false
  private _secondaryBackground?: string; 
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }
  public set secondaryBackground(value: string) {
    this._secondaryBackground = value;
  }
  public resetSecondaryBackground() {
    this._secondaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBackgroundInput() {
    return this._secondaryBackground;
  }

  // secondary_foreground - computed: false, optional: true, required: false
  private _secondaryForeground?: string; 
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }
  public set secondaryForeground(value: string) {
    this._secondaryForeground = value;
  }
  public resetSecondaryForeground() {
    this._secondaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryForegroundInput() {
    return this._secondaryForeground;
  }

  // success - computed: false, optional: true, required: false
  private _success?: string; 
  public get success() {
    return this.getStringAttribute('success');
  }
  public set success(value: string) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // success_foreground - computed: false, optional: true, required: false
  private _successForeground?: string; 
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }
  public set successForeground(value: string) {
    this._successForeground = value;
  }
  public resetSuccessForeground() {
    this._successForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successForegroundInput() {
    return this._successForeground;
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

  // warning_foreground - computed: false, optional: true, required: false
  private _warningForeground?: string; 
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
  public set warningForeground(value: string) {
    this._warningForeground = value;
  }
  public resetWarningForeground() {
    this._warningForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningForegroundInput() {
    return this._warningForeground;
  }
}
export interface ConfigurationProperty {
  /**
  * data_color_palette block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#data_color_palette AwsQuicksightTheme#data_color_palette}
  */
  readonly dataColorPalette?: DataColorPaletteProperty;
  /**
  * sheet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#sheet AwsQuicksightTheme#sheet}
  */
  readonly sheet?: SheetProperty;
  /**
  * typography block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#typography AwsQuicksightTheme#typography}
  */
  readonly typography?: TypographyProperty;
  /**
  * ui_color_palette block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#ui_color_palette AwsQuicksightTheme#ui_color_palette}
  */
  readonly uiColorPalette?: UiColorPaletteProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataColorPalette = this._dataColorPalette?.internalValue;
    }
    if (this._sheet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheet = this._sheet?.internalValue;
    }
    if (this._typography?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typography = this._typography?.internalValue;
    }
    if (this._uiColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiColorPalette = this._uiColorPalette?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataColorPalette.internalValue = undefined;
      this._sheet.internalValue = undefined;
      this._typography.internalValue = undefined;
      this._uiColorPalette.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataColorPalette.internalValue = value.dataColorPalette;
      this._sheet.internalValue = value.sheet;
      this._typography.internalValue = value.typography;
      this._uiColorPalette.internalValue = value.uiColorPalette;
    }
  }

  // data_color_palette - computed: false, optional: true, required: false
  private _dataColorPalette = new DataColorPalettePropertyOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }
  public putDataColorPalette(value: DataColorPaletteProperty) {
    this._dataColorPalette.internalValue = value;
  }
  public resetDataColorPalette() {
    this._dataColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataColorPaletteInput() {
    return this._dataColorPalette.internalValue;
  }

  // sheet - computed: false, optional: true, required: false
  private _sheet = new SheetPropertyOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }
  public putSheet(value: SheetProperty) {
    this._sheet.internalValue = value;
  }
  public resetSheet() {
    this._sheet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetInput() {
    return this._sheet.internalValue;
  }

  // typography - computed: false, optional: true, required: false
  private _typography = new TypographyPropertyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
  public putTypography(value: TypographyProperty) {
    this._typography.internalValue = value;
  }
  public resetTypography() {
    this._typography.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typographyInput() {
    return this._typography.internalValue;
  }

  // ui_color_palette - computed: false, optional: true, required: false
  private _uiColorPalette = new UiColorPalettePropertyOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
  public putUiColorPalette(value: UiColorPaletteProperty) {
    this._uiColorPalette.internalValue = value;
  }
  public resetUiColorPalette() {
    this._uiColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiColorPaletteInput() {
    return this._uiColorPalette.internalValue;
  }
}
export interface PermissionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#actions AwsQuicksightTheme#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#principal AwsQuicksightTheme#principal}
  */
  readonly principal: string;
}
export class PermissionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PermissionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class PermissionsPropertyList extends cdktn.ComplexList {
  public internalValue? : PermissionsProperty[] | cdktn.IResolvable

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
  public get(index: number): PermissionsPropertyOutputReference {
    return new PermissionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#create AwsQuicksightTheme#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#delete AwsQuicksightTheme#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_theme#update AwsQuicksightTheme#update}
  */
  readonly update?: string;
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
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
}
