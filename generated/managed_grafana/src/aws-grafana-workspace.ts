// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#account_access_type AwsWorkspace#account_access_type}
  */
  readonly accountAccessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#authentication_providers AwsWorkspace#authentication_providers}
  */
  readonly authenticationProviders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#configuration AwsWorkspace#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#data_sources AwsWorkspace#data_sources}
  */
  readonly dataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#description AwsWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#grafana_version AwsWorkspace#grafana_version}
  */
  readonly grafanaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#id AwsWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#kms_key_id AwsWorkspace#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#name AwsWorkspace#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#notification_destinations AwsWorkspace#notification_destinations}
  */
  readonly notificationDestinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#organization_role_name AwsWorkspace#organization_role_name}
  */
  readonly organizationRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#organizational_units AwsWorkspace#organizational_units}
  */
  readonly organizationalUnits?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#permission_type AwsWorkspace#permission_type}
  */
  readonly permissionType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#region AwsWorkspace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#role_arn AwsWorkspace#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#stack_set_name AwsWorkspace#stack_set_name}
  */
  readonly stackSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#tags AwsWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#tags_all AwsWorkspace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * network_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#network_access_control AwsWorkspace#network_access_control}
  */
  readonly networkAccessControl?: AwsWorkspace.NetworkAccessControlProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#timeouts AwsWorkspace#timeouts}
  */
  readonly timeouts?: AwsWorkspace.TimeoutsProperty;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#vpc_configuration AwsWorkspace#vpc_configuration}
  */
  readonly vpcConfiguration?: AwsWorkspace.VpcConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace aws_grafana_workspace}
*/
export class AwsWorkspace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_grafana_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsWorkspace to import
  * @param importFromId The id of the existing AwsWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_grafana_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace aws_grafana_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace',
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
    this._accountAccessType = config.accountAccessType;
    this._authenticationProviders = config.authenticationProviders;
    this._configuration = config.configuration;
    this._dataSources = config.dataSources;
    this._description = config.description;
    this._grafanaVersion = config.grafanaVersion;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._notificationDestinations = config.notificationDestinations;
    this._organizationRoleName = config.organizationRoleName;
    this._organizationalUnits = config.organizationalUnits;
    this._permissionType = config.permissionType;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._stackSetName = config.stackSetName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._networkAccessControl.internalValue = config.networkAccessControl;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access_type - computed: false, optional: false, required: true
  private _accountAccessType?: string; 
  public get accountAccessType() {
    return this.getStringAttribute('account_access_type');
  }
  public set accountAccessType(value: string) {
    this._accountAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessTypeInput() {
    return this._accountAccessType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_providers - computed: false, optional: false, required: true
  private _authenticationProviders?: string[]; 
  public get authenticationProviders() {
    return this.getListAttribute('authentication_providers');
  }
  public set authenticationProviders(value: string[]) {
    this._authenticationProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProvidersInput() {
    return this._authenticationProviders;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // grafana_version - computed: true, optional: true, required: false
  private _grafanaVersion?: string; 
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
  }
  public set grafanaVersion(value: string) {
    this._grafanaVersion = value;
  }
  public resetGrafanaVersion() {
    this._grafanaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaVersionInput() {
    return this._grafanaVersion;
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

  // kms_key_id - computed: true, optional: true, required: false
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

  // notification_destinations - computed: false, optional: true, required: false
  private _notificationDestinations?: string[]; 
  public get notificationDestinations() {
    return this.getListAttribute('notification_destinations');
  }
  public set notificationDestinations(value: string[]) {
    this._notificationDestinations = value;
  }
  public resetNotificationDestinations() {
    this._notificationDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDestinationsInput() {
    return this._notificationDestinations;
  }

  // organization_role_name - computed: false, optional: true, required: false
  private _organizationRoleName?: string; 
  public get organizationRoleName() {
    return this.getStringAttribute('organization_role_name');
  }
  public set organizationRoleName(value: string) {
    this._organizationRoleName = value;
  }
  public resetOrganizationRoleName() {
    this._organizationRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleNameInput() {
    return this._organizationRoleName;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // saml_configuration_status - computed: true, optional: false, required: false
  public get samlConfigurationStatus() {
    return this.getStringAttribute('saml_configuration_status');
  }

  // stack_set_name - computed: false, optional: true, required: false
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  public resetStackSetName() {
    this._stackSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName;
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

  // network_access_control - computed: false, optional: true, required: false
  private _networkAccessControl = new AwsWorkspace.NetworkAccessControlPropertyOutputReference(this, "network_access_control");
  public get networkAccessControl() {
    return this._networkAccessControl;
  }
  public putNetworkAccessControl(value: AwsWorkspace.NetworkAccessControlProperty) {
    this._networkAccessControl.internalValue = value;
  }
  public resetNetworkAccessControl() {
    this._networkAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessControlInput() {
    return this._networkAccessControl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsWorkspace.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsWorkspace.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration = new AwsWorkspace.VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: AwsWorkspace.VpcConfigurationProperty) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_access_type: cdktn.stringToTerraform(this._accountAccessType),
      authentication_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authenticationProviders),
      configuration: cdktn.stringToTerraform(this._configuration),
      data_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataSources),
      description: cdktn.stringToTerraform(this._description),
      grafana_version: cdktn.stringToTerraform(this._grafanaVersion),
      id: cdktn.stringToTerraform(this._id),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      notification_destinations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationDestinations),
      organization_role_name: cdktn.stringToTerraform(this._organizationRoleName),
      organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(this._organizationalUnits),
      permission_type: cdktn.stringToTerraform(this._permissionType),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      stack_set_name: cdktn.stringToTerraform(this._stackSetName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      network_access_control: awsWorkspaceNetworkAccessControlPropertyToTerraform(this._networkAccessControl.internalValue),
      timeouts: awsWorkspaceTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_configuration: awsWorkspaceVpcConfigurationPropertyToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_access_type: {
        value: cdktn.stringToHclTerraform(this._accountAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_providers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authenticationProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration: {
        value: cdktn.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_version: {
        value: cdktn.stringToHclTerraform(this._grafanaVersion),
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
      notification_destinations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationDestinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_role_name: {
        value: cdktn.stringToHclTerraform(this._organizationRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_units: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._organizationalUnits),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permission_type: {
        value: cdktn.stringToHclTerraform(this._permissionType),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_set_name: {
        value: cdktn.stringToHclTerraform(this._stackSetName),
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
      network_access_control: {
        value: awsWorkspaceNetworkAccessControlPropertyToHclTerraform(this._networkAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsWorkspace.NetworkAccessControlPropertyList",
      },
      timeouts: {
        value: awsWorkspaceTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsWorkspace.TimeoutsProperty",
      },
      vpc_configuration: {
        value: awsWorkspaceVpcConfigurationPropertyToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsWorkspace.VpcConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsWorkspaceNetworkAccessControlPropertyToTerraform(struct?: AwsWorkspace.NetworkAccessControlPropertyOutputReference | AwsWorkspace.NetworkAccessControlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix_list_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prefixListIds),
    vpce_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpceIds),
  }
}


export function awsWorkspaceNetworkAccessControlPropertyToHclTerraform(struct?: AwsWorkspace.NetworkAccessControlPropertyOutputReference | AwsWorkspace.NetworkAccessControlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix_list_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpce_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkspaceTimeoutsPropertyToTerraform(struct?: AwsWorkspace.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsWorkspaceTimeoutsPropertyToHclTerraform(struct?: AwsWorkspace.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsWorkspaceVpcConfigurationPropertyToTerraform(struct?: AwsWorkspace.VpcConfigurationPropertyOutputReference | AwsWorkspace.VpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsWorkspaceVpcConfigurationPropertyToHclTerraform(struct?: AwsWorkspace.VpcConfigurationPropertyOutputReference | AwsWorkspace.VpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsWorkspace {
export interface NetworkAccessControlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#prefix_list_ids AwsWorkspace#prefix_list_ids}
  */
  readonly prefixListIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#vpce_ids AwsWorkspace#vpce_ids}
  */
  readonly vpceIds: string[];
}
export class NetworkAccessControlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAccessControlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._vpceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceIds = this._vpceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAccessControlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixListIds = undefined;
      this._vpceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixListIds = value.prefixListIds;
      this._vpceIds = value.vpceIds;
    }
  }

  // prefix_list_ids - computed: false, optional: false, required: true
  private _prefixListIds?: string[]; 
  public get prefixListIds() {
    return cdktn.Fn.tolist(this.getListAttribute('prefix_list_ids'));
  }
  public set prefixListIds(value: string[]) {
    this._prefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }

  // vpce_ids - computed: false, optional: false, required: true
  private _vpceIds?: string[]; 
  public get vpceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpce_ids'));
  }
  public set vpceIds(value: string[]) {
    this._vpceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdsInput() {
    return this._vpceIds;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#create AwsWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#update AwsWorkspace#update}
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
export interface VpcConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#security_group_ids AwsWorkspace#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/grafana_workspace#subnet_ids AwsWorkspace#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
}
