// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfStackConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#description TfStack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#display_name TfStack#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#embed_host_domains TfStack#embed_host_domains}
  */
  readonly embedHostDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#feedback_url TfStack#feedback_url}
  */
  readonly feedbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#id TfStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#name TfStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#redirect_url TfStack#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#region TfStack#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#tags TfStack#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#tags_all TfStack#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#access_endpoints TfStack#access_endpoints}
  */
  readonly accessEndpoints?: TfStack.AccessEndpointsProperty[] | cdktn.IResolvable;
  /**
  * application_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#application_settings TfStack#application_settings}
  */
  readonly applicationSettings?: TfStack.ApplicationSettingsProperty;
  /**
  * storage_connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#storage_connectors TfStack#storage_connectors}
  */
  readonly storageConnectors?: TfStack.StorageConnectorsProperty[] | cdktn.IResolvable;
  /**
  * streaming_experience_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#streaming_experience_settings TfStack#streaming_experience_settings}
  */
  readonly streamingExperienceSettings?: TfStack.StreamingExperienceSettingsProperty;
  /**
  * user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#user_settings TfStack#user_settings}
  */
  readonly userSettings?: TfStack.UserSettingsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack aws_appstream_stack}
*/
export class TfStack extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appstream_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfStack resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfStack to import
  * @param importFromId The id of the existing TfStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appstream_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack aws_appstream_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfStackConfig
  */
  public constructor(scope: Construct, id: string, config: TfStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_stack',
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
    this._displayName = config.displayName;
    this._embedHostDomains = config.embedHostDomains;
    this._feedbackUrl = config.feedbackUrl;
    this._id = config.id;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessEndpoints.internalValue = config.accessEndpoints;
    this._applicationSettings.internalValue = config.applicationSettings;
    this._storageConnectors.internalValue = config.storageConnectors;
    this._streamingExperienceSettings.internalValue = config.streamingExperienceSettings;
    this._userSettings.internalValue = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // embed_host_domains - computed: true, optional: true, required: false
  private _embedHostDomains?: string[]; 
  public get embedHostDomains() {
    return cdktn.Fn.tolist(this.getListAttribute('embed_host_domains'));
  }
  public set embedHostDomains(value: string[]) {
    this._embedHostDomains = value;
  }
  public resetEmbedHostDomains() {
    this._embedHostDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedHostDomainsInput() {
    return this._embedHostDomains;
  }

  // feedback_url - computed: true, optional: true, required: false
  private _feedbackUrl?: string; 
  public get feedbackUrl() {
    return this.getStringAttribute('feedback_url');
  }
  public set feedbackUrl(value: string) {
    this._feedbackUrl = value;
  }
  public resetFeedbackUrl() {
    this._feedbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackUrlInput() {
    return this._feedbackUrl;
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

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
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

  // access_endpoints - computed: false, optional: true, required: false
  private _accessEndpoints = new TfStack.AccessEndpointsPropertyList(this, "access_endpoints", true);
  public get accessEndpoints() {
    return this._accessEndpoints;
  }
  public putAccessEndpoints(value: TfStack.AccessEndpointsProperty[] | cdktn.IResolvable) {
    this._accessEndpoints.internalValue = value;
  }
  public resetAccessEndpoints() {
    this._accessEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointsInput() {
    return this._accessEndpoints.internalValue;
  }

  // application_settings - computed: false, optional: true, required: false
  private _applicationSettings = new TfStack.ApplicationSettingsPropertyOutputReference(this, "application_settings");
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: TfStack.ApplicationSettingsProperty) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // storage_connectors - computed: false, optional: true, required: false
  private _storageConnectors = new TfStack.StorageConnectorsPropertyList(this, "storage_connectors", true);
  public get storageConnectors() {
    return this._storageConnectors;
  }
  public putStorageConnectors(value: TfStack.StorageConnectorsProperty[] | cdktn.IResolvable) {
    this._storageConnectors.internalValue = value;
  }
  public resetStorageConnectors() {
    this._storageConnectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConnectorsInput() {
    return this._storageConnectors.internalValue;
  }

  // streaming_experience_settings - computed: false, optional: true, required: false
  private _streamingExperienceSettings = new TfStack.StreamingExperienceSettingsPropertyOutputReference(this, "streaming_experience_settings");
  public get streamingExperienceSettings() {
    return this._streamingExperienceSettings;
  }
  public putStreamingExperienceSettings(value: TfStack.StreamingExperienceSettingsProperty) {
    this._streamingExperienceSettings.internalValue = value;
  }
  public resetStreamingExperienceSettings() {
    this._streamingExperienceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingExperienceSettingsInput() {
    return this._streamingExperienceSettings.internalValue;
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings = new TfStack.UserSettingsPropertyList(this, "user_settings", true);
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: TfStack.UserSettingsProperty[] | cdktn.IResolvable) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      embed_host_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._embedHostDomains),
      feedback_url: cdktn.stringToTerraform(this._feedbackUrl),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      redirect_url: cdktn.stringToTerraform(this._redirectUrl),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      access_endpoints: cdktn.listMapper(tfStackAccessEndpointsPropertyToTerraform, true)(this._accessEndpoints.internalValue),
      application_settings: tfStackApplicationSettingsPropertyToTerraform(this._applicationSettings.internalValue),
      storage_connectors: cdktn.listMapper(tfStackStorageConnectorsPropertyToTerraform, true)(this._storageConnectors.internalValue),
      streaming_experience_settings: tfStackStreamingExperienceSettingsPropertyToTerraform(this._streamingExperienceSettings.internalValue),
      user_settings: cdktn.listMapper(tfStackUserSettingsPropertyToTerraform, true)(this._userSettings.internalValue),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embed_host_domains: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._embedHostDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      feedback_url: {
        value: cdktn.stringToHclTerraform(this._feedbackUrl),
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
      redirect_url: {
        value: cdktn.stringToHclTerraform(this._redirectUrl),
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
      access_endpoints: {
        value: cdktn.listMapperHcl(tfStackAccessEndpointsPropertyToHclTerraform, true)(this._accessEndpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfStack.AccessEndpointsPropertyList",
      },
      application_settings: {
        value: tfStackApplicationSettingsPropertyToHclTerraform(this._applicationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfStack.ApplicationSettingsPropertyList",
      },
      storage_connectors: {
        value: cdktn.listMapperHcl(tfStackStorageConnectorsPropertyToHclTerraform, true)(this._storageConnectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfStack.StorageConnectorsPropertyList",
      },
      streaming_experience_settings: {
        value: tfStackStreamingExperienceSettingsPropertyToHclTerraform(this._streamingExperienceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfStack.StreamingExperienceSettingsPropertyList",
      },
      user_settings: {
        value: cdktn.listMapperHcl(tfStackUserSettingsPropertyToHclTerraform, true)(this._userSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfStack.UserSettingsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfStackAccessEndpointsPropertyToTerraform(struct?: TfStack.AccessEndpointsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
    vpce_id: cdktn.stringToTerraform(struct!.vpceId),
  }
}


export function tfStackAccessEndpointsPropertyToHclTerraform(struct?: TfStack.AccessEndpointsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpce_id: {
      value: cdktn.stringToHclTerraform(struct!.vpceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfStackApplicationSettingsPropertyToTerraform(struct?: TfStack.ApplicationSettingsPropertyOutputReference | TfStack.ApplicationSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    settings_group: cdktn.stringToTerraform(struct!.settingsGroup),
  }
}


export function tfStackApplicationSettingsPropertyToHclTerraform(struct?: TfStack.ApplicationSettingsPropertyOutputReference | TfStack.ApplicationSettingsProperty): any {
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
    settings_group: {
      value: cdktn.stringToHclTerraform(struct!.settingsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfStackStorageConnectorsPropertyToTerraform(struct?: TfStack.StorageConnectorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_type: cdktn.stringToTerraform(struct!.connectorType),
    domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domains),
    resource_identifier: cdktn.stringToTerraform(struct!.resourceIdentifier),
  }
}


export function tfStackStorageConnectorsPropertyToHclTerraform(struct?: TfStack.StorageConnectorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_type: {
      value: cdktn.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfStackStreamingExperienceSettingsPropertyToTerraform(struct?: TfStack.StreamingExperienceSettingsPropertyOutputReference | TfStack.StreamingExperienceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preferred_protocol: cdktn.stringToTerraform(struct!.preferredProtocol),
  }
}


export function tfStackStreamingExperienceSettingsPropertyToHclTerraform(struct?: TfStack.StreamingExperienceSettingsPropertyOutputReference | TfStack.StreamingExperienceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preferred_protocol: {
      value: cdktn.stringToHclTerraform(struct!.preferredProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfStackUserSettingsPropertyToTerraform(struct?: TfStack.UserSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function tfStackUserSettingsPropertyToHclTerraform(struct?: TfStack.UserSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfStack {
export interface AccessEndpointsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#endpoint_type TfStack#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#vpce_id TfStack#vpce_id}
  */
  readonly vpceId?: string;
}
export class AccessEndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessEndpointsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._vpceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceId = this._vpceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessEndpointsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointType = undefined;
      this._vpceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointType = value.endpointType;
      this._vpceId = value.vpceId;
    }
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // vpce_id - computed: true, optional: true, required: false
  private _vpceId?: string; 
  public get vpceId() {
    return this.getStringAttribute('vpce_id');
  }
  public set vpceId(value: string) {
    this._vpceId = value;
  }
  public resetVpceId() {
    this._vpceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdInput() {
    return this._vpceId;
  }
}

export class AccessEndpointsPropertyList extends cdktn.ComplexList {
  public internalValue? : AccessEndpointsProperty[] | cdktn.IResolvable

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
  public get(index: number): AccessEndpointsPropertyOutputReference {
    return new AccessEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#enabled TfStack#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#settings_group TfStack#settings_group}
  */
  readonly settingsGroup?: string;
}
export class ApplicationSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settingsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsGroup = this._settingsGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._settingsGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._settingsGroup = value.settingsGroup;
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

  // settings_group - computed: false, optional: true, required: false
  private _settingsGroup?: string; 
  public get settingsGroup() {
    return this.getStringAttribute('settings_group');
  }
  public set settingsGroup(value: string) {
    this._settingsGroup = value;
  }
  public resetSettingsGroup() {
    this._settingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsGroupInput() {
    return this._settingsGroup;
  }
}
export interface StorageConnectorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#connector_type TfStack#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#domains TfStack#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#resource_identifier TfStack#resource_identifier}
  */
  readonly resourceIdentifier?: string;
}
export class StorageConnectorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageConnectorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._resourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdentifier = this._resourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageConnectorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorType = undefined;
      this._domains = undefined;
      this._resourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorType = value.connectorType;
      this._domains = value.domains;
      this._resourceIdentifier = value.resourceIdentifier;
    }
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // resource_identifier - computed: true, optional: true, required: false
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  public resetResourceIdentifier() {
    this._resourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }
}

export class StorageConnectorsPropertyList extends cdktn.ComplexList {
  public internalValue? : StorageConnectorsProperty[] | cdktn.IResolvable

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
  public get(index: number): StorageConnectorsPropertyOutputReference {
    return new StorageConnectorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamingExperienceSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#preferred_protocol TfStack#preferred_protocol}
  */
  readonly preferredProtocol?: string;
}
export class StreamingExperienceSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamingExperienceSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredProtocol = this._preferredProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingExperienceSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredProtocol = value.preferredProtocol;
    }
  }

  // preferred_protocol - computed: false, optional: true, required: false
  private _preferredProtocol?: string; 
  public get preferredProtocol() {
    return this.getStringAttribute('preferred_protocol');
  }
  public set preferredProtocol(value: string) {
    this._preferredProtocol = value;
  }
  public resetPreferredProtocol() {
    this._preferredProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredProtocolInput() {
    return this._preferredProtocol;
  }
}
export interface UserSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#action TfStack#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appstream_stack#permission TfStack#permission}
  */
  readonly permission: string;
}
export class UserSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._permission = value.permission;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class UserSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsPropertyOutputReference {
    return new UserSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
