// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsQuicksightDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#aws_account_id AwsQuicksightDataSource#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#data_source_id AwsQuicksightDataSource#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#id AwsQuicksightDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#name AwsQuicksightDataSource#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#region AwsQuicksightDataSource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#tags AwsQuicksightDataSource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#tags_all AwsQuicksightDataSource#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#type AwsQuicksightDataSource#type}
  */
  readonly type: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#credentials AwsQuicksightDataSource#credentials}
  */
  readonly credentials?: AwsQuicksightDataSource.CredentialsProperty;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#parameters AwsQuicksightDataSource#parameters}
  */
  readonly parameters: AwsQuicksightDataSource.ParametersProperty;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#permission AwsQuicksightDataSource#permission}
  */
  readonly permission?: AwsQuicksightDataSource.PermissionProperty[] | cdktn.IResolvable;
  /**
  * ssl_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#ssl_properties AwsQuicksightDataSource#ssl_properties}
  */
  readonly sslProperties?: AwsQuicksightDataSource.SslPropertiesProperty;
  /**
  * vpc_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#vpc_connection_properties AwsQuicksightDataSource#vpc_connection_properties}
  */
  readonly vpcConnectionProperties?: AwsQuicksightDataSource.VpcConnectionPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source aws_quicksight_data_source}
*/
export class AwsQuicksightDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsQuicksightDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsQuicksightDataSource to import
  * @param importFromId The id of the existing AwsQuicksightDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsQuicksightDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source aws_quicksight_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsQuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsQuicksightDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_data_source',
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
    this._dataSourceId = config.dataSourceId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._credentials.internalValue = config.credentials;
    this._parameters.internalValue = config.parameters;
    this._permission.internalValue = config.permission;
    this._sslProperties.internalValue = config.sslProperties;
    this._vpcConnectionProperties.internalValue = config.vpcConnectionProperties;
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

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new AwsQuicksightDataSource.CredentialsPropertyOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AwsQuicksightDataSource.CredentialsProperty) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new AwsQuicksightDataSource.ParametersPropertyOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AwsQuicksightDataSource.ParametersProperty) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new AwsQuicksightDataSource.PermissionPropertyList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: AwsQuicksightDataSource.PermissionProperty[] | cdktn.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // ssl_properties - computed: false, optional: true, required: false
  private _sslProperties = new AwsQuicksightDataSource.SslPropertiesPropertyOutputReference(this, "ssl_properties");
  public get sslProperties() {
    return this._sslProperties;
  }
  public putSslProperties(value: AwsQuicksightDataSource.SslPropertiesProperty) {
    this._sslProperties.internalValue = value;
  }
  public resetSslProperties() {
    this._sslProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPropertiesInput() {
    return this._sslProperties.internalValue;
  }

  // vpc_connection_properties - computed: false, optional: true, required: false
  private _vpcConnectionProperties = new AwsQuicksightDataSource.VpcConnectionPropertiesPropertyOutputReference(this, "vpc_connection_properties");
  public get vpcConnectionProperties() {
    return this._vpcConnectionProperties;
  }
  public putVpcConnectionProperties(value: AwsQuicksightDataSource.VpcConnectionPropertiesProperty) {
    this._vpcConnectionProperties.internalValue = value;
  }
  public resetVpcConnectionProperties() {
    this._vpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionPropertiesInput() {
    return this._vpcConnectionProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      data_source_id: cdktn.stringToTerraform(this._dataSourceId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      credentials: awsQuicksightDataSourceCredentialsPropertyToTerraform(this._credentials.internalValue),
      parameters: awsQuicksightDataSourceParametersPropertyToTerraform(this._parameters.internalValue),
      permission: cdktn.listMapper(awsQuicksightDataSourcePermissionPropertyToTerraform, true)(this._permission.internalValue),
      ssl_properties: awsQuicksightDataSourceSslPropertiesPropertyToTerraform(this._sslProperties.internalValue),
      vpc_connection_properties: awsQuicksightDataSourceVpcConnectionPropertiesPropertyToTerraform(this._vpcConnectionProperties.internalValue),
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
      data_source_id: {
        value: cdktn.stringToHclTerraform(this._dataSourceId),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: awsQuicksightDataSourceCredentialsPropertyToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSource.CredentialsPropertyList",
      },
      parameters: {
        value: awsQuicksightDataSourceParametersPropertyToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSource.ParametersPropertyList",
      },
      permission: {
        value: cdktn.listMapperHcl(awsQuicksightDataSourcePermissionPropertyToHclTerraform, true)(this._permission.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsQuicksightDataSource.PermissionPropertyList",
      },
      ssl_properties: {
        value: awsQuicksightDataSourceSslPropertiesPropertyToHclTerraform(this._sslProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSource.SslPropertiesPropertyList",
      },
      vpc_connection_properties: {
        value: awsQuicksightDataSourceVpcConnectionPropertiesPropertyToHclTerraform(this._vpcConnectionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsQuicksightDataSource.VpcConnectionPropertiesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsQuicksightDataSourceCredentialPairPropertyToTerraform(struct?: AwsQuicksightDataSource.CredentialPairPropertyOutputReference | AwsQuicksightDataSource.CredentialPairProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function awsQuicksightDataSourceCredentialPairPropertyToHclTerraform(struct?: AwsQuicksightDataSource.CredentialPairPropertyOutputReference | AwsQuicksightDataSource.CredentialPairProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceCredentialsPropertyToTerraform(struct?: AwsQuicksightDataSource.CredentialsPropertyOutputReference | AwsQuicksightDataSource.CredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_source_arn: cdktn.stringToTerraform(struct!.copySourceArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    credential_pair: awsQuicksightDataSourceCredentialPairPropertyToTerraform(struct!.credentialPair),
  }
}


export function awsQuicksightDataSourceCredentialsPropertyToHclTerraform(struct?: AwsQuicksightDataSource.CredentialsPropertyOutputReference | AwsQuicksightDataSource.CredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.copySourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_pair: {
      value: awsQuicksightDataSourceCredentialPairPropertyToHclTerraform(struct!.credentialPair),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialPairPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceAmazonElasticsearchPropertyToTerraform(struct?: AwsQuicksightDataSource.AmazonElasticsearchPropertyOutputReference | AwsQuicksightDataSource.AmazonElasticsearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function awsQuicksightDataSourceAmazonElasticsearchPropertyToHclTerraform(struct?: AwsQuicksightDataSource.AmazonElasticsearchPropertyOutputReference | AwsQuicksightDataSource.AmazonElasticsearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceAthenaPropertyToTerraform(struct?: AwsQuicksightDataSource.AthenaPropertyOutputReference | AwsQuicksightDataSource.AthenaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    work_group: cdktn.stringToTerraform(struct!.workGroup),
  }
}


export function awsQuicksightDataSourceAthenaPropertyToHclTerraform(struct?: AwsQuicksightDataSource.AthenaPropertyOutputReference | AwsQuicksightDataSource.AthenaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktn.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceAuroraPropertyToTerraform(struct?: AwsQuicksightDataSource.AuroraPropertyOutputReference | AwsQuicksightDataSource.AuroraProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceAuroraPropertyToHclTerraform(struct?: AwsQuicksightDataSource.AuroraPropertyOutputReference | AwsQuicksightDataSource.AuroraProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceAuroraPostgresqlPropertyToTerraform(struct?: AwsQuicksightDataSource.AuroraPostgresqlPropertyOutputReference | AwsQuicksightDataSource.AuroraPostgresqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceAuroraPostgresqlPropertyToHclTerraform(struct?: AwsQuicksightDataSource.AuroraPostgresqlPropertyOutputReference | AwsQuicksightDataSource.AuroraPostgresqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceAwsIotAnalyticsPropertyToTerraform(struct?: AwsQuicksightDataSource.AwsIotAnalyticsPropertyOutputReference | AwsQuicksightDataSource.AwsIotAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_name: cdktn.stringToTerraform(struct!.dataSetName),
  }
}


export function awsQuicksightDataSourceAwsIotAnalyticsPropertyToHclTerraform(struct?: AwsQuicksightDataSource.AwsIotAnalyticsPropertyOutputReference | AwsQuicksightDataSource.AwsIotAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_set_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceDatabricksPropertyToTerraform(struct?: AwsQuicksightDataSource.DatabricksPropertyOutputReference | AwsQuicksightDataSource.DatabricksProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
  }
}


export function awsQuicksightDataSourceDatabricksPropertyToHclTerraform(struct?: AwsQuicksightDataSource.DatabricksPropertyOutputReference | AwsQuicksightDataSource.DatabricksProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceJiraPropertyToTerraform(struct?: AwsQuicksightDataSource.JiraPropertyOutputReference | AwsQuicksightDataSource.JiraProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    site_base_url: cdktn.stringToTerraform(struct!.siteBaseUrl),
  }
}


export function awsQuicksightDataSourceJiraPropertyToHclTerraform(struct?: AwsQuicksightDataSource.JiraPropertyOutputReference | AwsQuicksightDataSource.JiraProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    site_base_url: {
      value: cdktn.stringToHclTerraform(struct!.siteBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceMariaDbPropertyToTerraform(struct?: AwsQuicksightDataSource.MariaDbPropertyOutputReference | AwsQuicksightDataSource.MariaDbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceMariaDbPropertyToHclTerraform(struct?: AwsQuicksightDataSource.MariaDbPropertyOutputReference | AwsQuicksightDataSource.MariaDbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceMysqlPropertyToTerraform(struct?: AwsQuicksightDataSource.MysqlPropertyOutputReference | AwsQuicksightDataSource.MysqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceMysqlPropertyToHclTerraform(struct?: AwsQuicksightDataSource.MysqlPropertyOutputReference | AwsQuicksightDataSource.MysqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceOraclePropertyToTerraform(struct?: AwsQuicksightDataSource.OraclePropertyOutputReference | AwsQuicksightDataSource.OracleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceOraclePropertyToHclTerraform(struct?: AwsQuicksightDataSource.OraclePropertyOutputReference | AwsQuicksightDataSource.OracleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourcePostgresqlPropertyToTerraform(struct?: AwsQuicksightDataSource.PostgresqlPropertyOutputReference | AwsQuicksightDataSource.PostgresqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourcePostgresqlPropertyToHclTerraform(struct?: AwsQuicksightDataSource.PostgresqlPropertyOutputReference | AwsQuicksightDataSource.PostgresqlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourcePrestoPropertyToTerraform(struct?: AwsQuicksightDataSource.PrestoPropertyOutputReference | AwsQuicksightDataSource.PrestoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourcePrestoPropertyToHclTerraform(struct?: AwsQuicksightDataSource.PrestoPropertyOutputReference | AwsQuicksightDataSource.PrestoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceRdsPropertyToTerraform(struct?: AwsQuicksightDataSource.RdsPropertyOutputReference | AwsQuicksightDataSource.RdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function awsQuicksightDataSourceRdsPropertyToHclTerraform(struct?: AwsQuicksightDataSource.RdsPropertyOutputReference | AwsQuicksightDataSource.RdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceRedshiftPropertyToTerraform(struct?: AwsQuicksightDataSource.RedshiftPropertyOutputReference | AwsQuicksightDataSource.RedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceRedshiftPropertyToHclTerraform(struct?: AwsQuicksightDataSource.RedshiftPropertyOutputReference | AwsQuicksightDataSource.RedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceManifestFileLocationPropertyToTerraform(struct?: AwsQuicksightDataSource.ManifestFileLocationPropertyOutputReference | AwsQuicksightDataSource.ManifestFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsQuicksightDataSourceManifestFileLocationPropertyToHclTerraform(struct?: AwsQuicksightDataSource.ManifestFileLocationPropertyOutputReference | AwsQuicksightDataSource.ManifestFileLocationProperty): any {
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
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceS3PropertyToTerraform(struct?: AwsQuicksightDataSource.S3PropertyOutputReference | AwsQuicksightDataSource.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    manifest_file_location: awsQuicksightDataSourceManifestFileLocationPropertyToTerraform(struct!.manifestFileLocation),
  }
}


export function awsQuicksightDataSourceS3PropertyToHclTerraform(struct?: AwsQuicksightDataSource.S3PropertyOutputReference | AwsQuicksightDataSource.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest_file_location: {
      value: awsQuicksightDataSourceManifestFileLocationPropertyToHclTerraform(struct!.manifestFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "ManifestFileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceServiceNowPropertyToTerraform(struct?: AwsQuicksightDataSource.ServiceNowPropertyOutputReference | AwsQuicksightDataSource.ServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    site_base_url: cdktn.stringToTerraform(struct!.siteBaseUrl),
  }
}


export function awsQuicksightDataSourceServiceNowPropertyToHclTerraform(struct?: AwsQuicksightDataSource.ServiceNowPropertyOutputReference | AwsQuicksightDataSource.ServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    site_base_url: {
      value: cdktn.stringToHclTerraform(struct!.siteBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceSnowflakePropertyToTerraform(struct?: AwsQuicksightDataSource.SnowflakePropertyOutputReference | AwsQuicksightDataSource.SnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function awsQuicksightDataSourceSnowflakePropertyToHclTerraform(struct?: AwsQuicksightDataSource.SnowflakePropertyOutputReference | AwsQuicksightDataSource.SnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceSparkPropertyToTerraform(struct?: AwsQuicksightDataSource.SparkPropertyOutputReference | AwsQuicksightDataSource.SparkProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceSparkPropertyToHclTerraform(struct?: AwsQuicksightDataSource.SparkPropertyOutputReference | AwsQuicksightDataSource.SparkProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceSqlServerPropertyToTerraform(struct?: AwsQuicksightDataSource.SqlServerPropertyOutputReference | AwsQuicksightDataSource.SqlServerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceSqlServerPropertyToHclTerraform(struct?: AwsQuicksightDataSource.SqlServerPropertyOutputReference | AwsQuicksightDataSource.SqlServerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceTeradataPropertyToTerraform(struct?: AwsQuicksightDataSource.TeradataPropertyOutputReference | AwsQuicksightDataSource.TeradataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsQuicksightDataSourceTeradataPropertyToHclTerraform(struct?: AwsQuicksightDataSource.TeradataPropertyOutputReference | AwsQuicksightDataSource.TeradataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceTwitterPropertyToTerraform(struct?: AwsQuicksightDataSource.TwitterPropertyOutputReference | AwsQuicksightDataSource.TwitterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_rows: cdktn.numberToTerraform(struct!.maxRows),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function awsQuicksightDataSourceTwitterPropertyToHclTerraform(struct?: AwsQuicksightDataSource.TwitterPropertyOutputReference | AwsQuicksightDataSource.TwitterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_rows: {
      value: cdktn.numberToHclTerraform(struct!.maxRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceParametersPropertyToTerraform(struct?: AwsQuicksightDataSource.ParametersPropertyOutputReference | AwsQuicksightDataSource.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_elasticsearch: awsQuicksightDataSourceAmazonElasticsearchPropertyToTerraform(struct!.amazonElasticsearch),
    athena: awsQuicksightDataSourceAthenaPropertyToTerraform(struct!.athena),
    aurora: awsQuicksightDataSourceAuroraPropertyToTerraform(struct!.aurora),
    aurora_postgresql: awsQuicksightDataSourceAuroraPostgresqlPropertyToTerraform(struct!.auroraPostgresql),
    aws_iot_analytics: awsQuicksightDataSourceAwsIotAnalyticsPropertyToTerraform(struct!.awsIotAnalytics),
    databricks: awsQuicksightDataSourceDatabricksPropertyToTerraform(struct!.databricks),
    jira: awsQuicksightDataSourceJiraPropertyToTerraform(struct!.jira),
    maria_db: awsQuicksightDataSourceMariaDbPropertyToTerraform(struct!.mariaDb),
    mysql: awsQuicksightDataSourceMysqlPropertyToTerraform(struct!.mysql),
    oracle: awsQuicksightDataSourceOraclePropertyToTerraform(struct!.oracle),
    postgresql: awsQuicksightDataSourcePostgresqlPropertyToTerraform(struct!.postgresql),
    presto: awsQuicksightDataSourcePrestoPropertyToTerraform(struct!.presto),
    rds: awsQuicksightDataSourceRdsPropertyToTerraform(struct!.rds),
    redshift: awsQuicksightDataSourceRedshiftPropertyToTerraform(struct!.redshift),
    s3: awsQuicksightDataSourceS3PropertyToTerraform(struct!.s3),
    service_now: awsQuicksightDataSourceServiceNowPropertyToTerraform(struct!.serviceNow),
    snowflake: awsQuicksightDataSourceSnowflakePropertyToTerraform(struct!.snowflake),
    spark: awsQuicksightDataSourceSparkPropertyToTerraform(struct!.spark),
    sql_server: awsQuicksightDataSourceSqlServerPropertyToTerraform(struct!.sqlServer),
    teradata: awsQuicksightDataSourceTeradataPropertyToTerraform(struct!.teradata),
    twitter: awsQuicksightDataSourceTwitterPropertyToTerraform(struct!.twitter),
  }
}


export function awsQuicksightDataSourceParametersPropertyToHclTerraform(struct?: AwsQuicksightDataSource.ParametersPropertyOutputReference | AwsQuicksightDataSource.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_elasticsearch: {
      value: awsQuicksightDataSourceAmazonElasticsearchPropertyToHclTerraform(struct!.amazonElasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "AmazonElasticsearchPropertyList",
    },
    athena: {
      value: awsQuicksightDataSourceAthenaPropertyToHclTerraform(struct!.athena),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaPropertyList",
    },
    aurora: {
      value: awsQuicksightDataSourceAuroraPropertyToHclTerraform(struct!.aurora),
      isBlock: true,
      type: "list",
      storageClassType: "AuroraPropertyList",
    },
    aurora_postgresql: {
      value: awsQuicksightDataSourceAuroraPostgresqlPropertyToHclTerraform(struct!.auroraPostgresql),
      isBlock: true,
      type: "list",
      storageClassType: "AuroraPostgresqlPropertyList",
    },
    aws_iot_analytics: {
      value: awsQuicksightDataSourceAwsIotAnalyticsPropertyToHclTerraform(struct!.awsIotAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "AwsIotAnalyticsPropertyList",
    },
    databricks: {
      value: awsQuicksightDataSourceDatabricksPropertyToHclTerraform(struct!.databricks),
      isBlock: true,
      type: "list",
      storageClassType: "DatabricksPropertyList",
    },
    jira: {
      value: awsQuicksightDataSourceJiraPropertyToHclTerraform(struct!.jira),
      isBlock: true,
      type: "list",
      storageClassType: "JiraPropertyList",
    },
    maria_db: {
      value: awsQuicksightDataSourceMariaDbPropertyToHclTerraform(struct!.mariaDb),
      isBlock: true,
      type: "list",
      storageClassType: "MariaDbPropertyList",
    },
    mysql: {
      value: awsQuicksightDataSourceMysqlPropertyToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlPropertyList",
    },
    oracle: {
      value: awsQuicksightDataSourceOraclePropertyToHclTerraform(struct!.oracle),
      isBlock: true,
      type: "list",
      storageClassType: "OraclePropertyList",
    },
    postgresql: {
      value: awsQuicksightDataSourcePostgresqlPropertyToHclTerraform(struct!.postgresql),
      isBlock: true,
      type: "list",
      storageClassType: "PostgresqlPropertyList",
    },
    presto: {
      value: awsQuicksightDataSourcePrestoPropertyToHclTerraform(struct!.presto),
      isBlock: true,
      type: "list",
      storageClassType: "PrestoPropertyList",
    },
    rds: {
      value: awsQuicksightDataSourceRdsPropertyToHclTerraform(struct!.rds),
      isBlock: true,
      type: "list",
      storageClassType: "RdsPropertyList",
    },
    redshift: {
      value: awsQuicksightDataSourceRedshiftPropertyToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftPropertyList",
    },
    s3: {
      value: awsQuicksightDataSourceS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
    service_now: {
      value: awsQuicksightDataSourceServiceNowPropertyToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNowPropertyList",
    },
    snowflake: {
      value: awsQuicksightDataSourceSnowflakePropertyToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakePropertyList",
    },
    spark: {
      value: awsQuicksightDataSourceSparkPropertyToHclTerraform(struct!.spark),
      isBlock: true,
      type: "list",
      storageClassType: "SparkPropertyList",
    },
    sql_server: {
      value: awsQuicksightDataSourceSqlServerPropertyToHclTerraform(struct!.sqlServer),
      isBlock: true,
      type: "list",
      storageClassType: "SqlServerPropertyList",
    },
    teradata: {
      value: awsQuicksightDataSourceTeradataPropertyToHclTerraform(struct!.teradata),
      isBlock: true,
      type: "list",
      storageClassType: "TeradataPropertyList",
    },
    twitter: {
      value: awsQuicksightDataSourceTwitterPropertyToHclTerraform(struct!.twitter),
      isBlock: true,
      type: "list",
      storageClassType: "TwitterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourcePermissionPropertyToTerraform(struct?: AwsQuicksightDataSource.PermissionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function awsQuicksightDataSourcePermissionPropertyToHclTerraform(struct?: AwsQuicksightDataSource.PermissionProperty | cdktn.IResolvable): any {
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


export function awsQuicksightDataSourceSslPropertiesPropertyToTerraform(struct?: AwsQuicksightDataSource.SslPropertiesPropertyOutputReference | AwsQuicksightDataSource.SslPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_ssl: cdktn.booleanToTerraform(struct!.disableSsl),
  }
}


export function awsQuicksightDataSourceSslPropertiesPropertyToHclTerraform(struct?: AwsQuicksightDataSource.SslPropertiesPropertyOutputReference | AwsQuicksightDataSource.SslPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_ssl: {
      value: cdktn.booleanToHclTerraform(struct!.disableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsQuicksightDataSourceVpcConnectionPropertiesPropertyToTerraform(struct?: AwsQuicksightDataSource.VpcConnectionPropertiesPropertyOutputReference | AwsQuicksightDataSource.VpcConnectionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function awsQuicksightDataSourceVpcConnectionPropertiesPropertyToHclTerraform(struct?: AwsQuicksightDataSource.VpcConnectionPropertiesPropertyOutputReference | AwsQuicksightDataSource.VpcConnectionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsQuicksightDataSource {
export interface CredentialPairProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#password AwsQuicksightDataSource#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#username AwsQuicksightDataSource#username}
  */
  readonly username: string;
}
export class CredentialPairPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialPairProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialPairProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CredentialsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#copy_source_arn AwsQuicksightDataSource#copy_source_arn}
  */
  readonly copySourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#secret_arn AwsQuicksightDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * credential_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#credential_pair AwsQuicksightDataSource#credential_pair}
  */
  readonly credentialPair?: CredentialPairProperty;
}
export class CredentialsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copySourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.copySourceArn = this._copySourceArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._credentialPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialPair = this._credentialPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copySourceArn = undefined;
      this._secretArn = undefined;
      this._credentialPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copySourceArn = value.copySourceArn;
      this._secretArn = value.secretArn;
      this._credentialPair.internalValue = value.credentialPair;
    }
  }

  // copy_source_arn - computed: false, optional: true, required: false
  private _copySourceArn?: string; 
  public get copySourceArn() {
    return this.getStringAttribute('copy_source_arn');
  }
  public set copySourceArn(value: string) {
    this._copySourceArn = value;
  }
  public resetCopySourceArn() {
    this._copySourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySourceArnInput() {
    return this._copySourceArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // credential_pair - computed: false, optional: true, required: false
  private _credentialPair = new CredentialPairPropertyOutputReference(this, "credential_pair");
  public get credentialPair() {
    return this._credentialPair;
  }
  public putCredentialPair(value: CredentialPairProperty) {
    this._credentialPair.internalValue = value;
  }
  public resetCredentialPair() {
    this._credentialPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialPairInput() {
    return this._credentialPair.internalValue;
  }
}
export interface AmazonElasticsearchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#domain AwsQuicksightDataSource#domain}
  */
  readonly domain: string;
}
export class AmazonElasticsearchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmazonElasticsearchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonElasticsearchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface AthenaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#role_arn AwsQuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#work_group AwsQuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}
export class AthenaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._workGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._workGroup = value.workGroup;
    }
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

  // work_group - computed: false, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface AuroraProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class AuroraPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuroraProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuroraProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface AuroraPostgresqlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class AuroraPostgresqlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuroraPostgresqlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuroraPostgresqlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface AwsIotAnalyticsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#data_set_name AwsQuicksightDataSource#data_set_name}
  */
  readonly dataSetName: string;
}
export class AwsIotAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsIotAnalyticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetName = this._dataSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIotAnalyticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetName = value.dataSetName;
    }
  }

  // data_set_name - computed: false, optional: false, required: true
  private _dataSetName?: string; 
  public get dataSetName() {
    return this.getStringAttribute('data_set_name');
  }
  public set dataSetName(value: string) {
    this._dataSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetNameInput() {
    return this._dataSetName;
  }
}
export interface DatabricksProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#sql_endpoint_path AwsQuicksightDataSource#sql_endpoint_path}
  */
  readonly sqlEndpointPath: string;
}
export class DatabricksPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabricksProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sqlEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabricksProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._sqlEndpointPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._sqlEndpointPath = value.sqlEndpointPath;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_endpoint_path - computed: false, optional: false, required: true
  private _sqlEndpointPath?: string; 
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
  public set sqlEndpointPath(value: string) {
    this._sqlEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointPathInput() {
    return this._sqlEndpointPath;
  }
}
export interface JiraProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#site_base_url AwsQuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}
export class JiraPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JiraProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteBaseUrl = this._siteBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteBaseUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteBaseUrl = value.siteBaseUrl;
    }
  }

  // site_base_url - computed: false, optional: false, required: true
  private _siteBaseUrl?: string; 
  public get siteBaseUrl() {
    return this.getStringAttribute('site_base_url');
  }
  public set siteBaseUrl(value: string) {
    this._siteBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteBaseUrlInput() {
    return this._siteBaseUrl;
  }
}
export interface MariaDbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class MariaDbPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MariaDbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariaDbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MysqlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class MysqlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface OracleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class OraclePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface PostgresqlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class PostgresqlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostgresqlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface PrestoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#catalog AwsQuicksightDataSource#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class PrestoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrestoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrestoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface RdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#instance_id AwsQuicksightDataSource#instance_id}
  */
  readonly instanceId: string;
}
export class RdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._instanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._instanceId = value.instanceId;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface RedshiftProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#cluster_id AwsQuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port?: number;
}
export class RedshiftPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ManifestFileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#bucket AwsQuicksightDataSource#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#key AwsQuicksightDataSource#key}
  */
  readonly key: string;
}
export class ManifestFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManifestFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#role_arn AwsQuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * manifest_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#manifest_file_location AwsQuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: ManifestFileLocationProperty;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._manifestFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._manifestFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._manifestFileLocation.internalValue = value.manifestFileLocation;
    }
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

  // manifest_file_location - computed: false, optional: false, required: true
  private _manifestFileLocation = new ManifestFileLocationPropertyOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }
  public putManifestFileLocation(value: ManifestFileLocationProperty) {
    this._manifestFileLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileLocationInput() {
    return this._manifestFileLocation.internalValue;
  }
}
export interface ServiceNowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#site_base_url AwsQuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}
export class ServiceNowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteBaseUrl = this._siteBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteBaseUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteBaseUrl = value.siteBaseUrl;
    }
  }

  // site_base_url - computed: false, optional: false, required: true
  private _siteBaseUrl?: string; 
  public get siteBaseUrl() {
    return this.getStringAttribute('site_base_url');
  }
  public set siteBaseUrl(value: string) {
    this._siteBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteBaseUrlInput() {
    return this._siteBaseUrl;
  }
}
export interface SnowflakeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#warehouse AwsQuicksightDataSource#warehouse}
  */
  readonly warehouse: string;
}
export class SnowflakePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._warehouse = value.warehouse;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface SparkProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class SparkPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SparkProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface SqlServerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class SqlServerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlServerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlServerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface TeradataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#database AwsQuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#host AwsQuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#port AwsQuicksightDataSource#port}
  */
  readonly port: number;
}
export class TeradataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeradataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeradataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface TwitterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#max_rows AwsQuicksightDataSource#max_rows}
  */
  readonly maxRows: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#query AwsQuicksightDataSource#query}
  */
  readonly query: string;
}
export class TwitterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwitterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRows = this._maxRows;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwitterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRows = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRows = value.maxRows;
      this._query = value.query;
    }
  }

  // max_rows - computed: false, optional: false, required: true
  private _maxRows?: number; 
  public get maxRows() {
    return this.getNumberAttribute('max_rows');
  }
  public set maxRows(value: number) {
    this._maxRows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInput() {
    return this._maxRows;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ParametersProperty {
  /**
  * amazon_elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#amazon_elasticsearch AwsQuicksightDataSource#amazon_elasticsearch}
  */
  readonly amazonElasticsearch?: AmazonElasticsearchProperty;
  /**
  * athena block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#athena AwsQuicksightDataSource#athena}
  */
  readonly athena?: AthenaProperty;
  /**
  * aurora block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#aurora AwsQuicksightDataSource#aurora}
  */
  readonly aurora?: AuroraProperty;
  /**
  * aurora_postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#aurora_postgresql AwsQuicksightDataSource#aurora_postgresql}
  */
  readonly auroraPostgresql?: AuroraPostgresqlProperty;
  /**
  * aws_iot_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#aws_iot_analytics AwsQuicksightDataSource#aws_iot_analytics}
  */
  readonly awsIotAnalytics?: AwsIotAnalyticsProperty;
  /**
  * databricks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#databricks AwsQuicksightDataSource#databricks}
  */
  readonly databricks?: DatabricksProperty;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#jira AwsQuicksightDataSource#jira}
  */
  readonly jira?: JiraProperty;
  /**
  * maria_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#maria_db AwsQuicksightDataSource#maria_db}
  */
  readonly mariaDb?: MariaDbProperty;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#mysql AwsQuicksightDataSource#mysql}
  */
  readonly mysql?: MysqlProperty;
  /**
  * oracle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#oracle AwsQuicksightDataSource#oracle}
  */
  readonly oracle?: OracleProperty;
  /**
  * postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#postgresql AwsQuicksightDataSource#postgresql}
  */
  readonly postgresql?: PostgresqlProperty;
  /**
  * presto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#presto AwsQuicksightDataSource#presto}
  */
  readonly presto?: PrestoProperty;
  /**
  * rds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#rds AwsQuicksightDataSource#rds}
  */
  readonly rds?: RdsProperty;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#redshift AwsQuicksightDataSource#redshift}
  */
  readonly redshift?: RedshiftProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#s3 AwsQuicksightDataSource#s3}
  */
  readonly s3?: S3Property;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#service_now AwsQuicksightDataSource#service_now}
  */
  readonly serviceNow?: ServiceNowProperty;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#snowflake AwsQuicksightDataSource#snowflake}
  */
  readonly snowflake?: SnowflakeProperty;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#spark AwsQuicksightDataSource#spark}
  */
  readonly spark?: SparkProperty;
  /**
  * sql_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#sql_server AwsQuicksightDataSource#sql_server}
  */
  readonly sqlServer?: SqlServerProperty;
  /**
  * teradata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#teradata AwsQuicksightDataSource#teradata}
  */
  readonly teradata?: TeradataProperty;
  /**
  * twitter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#twitter AwsQuicksightDataSource#twitter}
  */
  readonly twitter?: TwitterProperty;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonElasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonElasticsearch = this._amazonElasticsearch?.internalValue;
    }
    if (this._athena?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athena = this._athena?.internalValue;
    }
    if (this._aurora?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aurora = this._aurora?.internalValue;
    }
    if (this._auroraPostgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraPostgresql = this._auroraPostgresql?.internalValue;
    }
    if (this._awsIotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIotAnalytics = this._awsIotAnalytics?.internalValue;
    }
    if (this._databricks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricks = this._databricks?.internalValue;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    if (this._mariaDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDb = this._mariaDb?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._oracle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracle = this._oracle?.internalValue;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._presto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presto = this._presto?.internalValue;
    }
    if (this._rds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rds = this._rds?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._spark?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spark = this._spark?.internalValue;
    }
    if (this._sqlServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServer = this._sqlServer?.internalValue;
    }
    if (this._teradata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teradata = this._teradata?.internalValue;
    }
    if (this._twitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twitter = this._twitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonElasticsearch.internalValue = undefined;
      this._athena.internalValue = undefined;
      this._aurora.internalValue = undefined;
      this._auroraPostgresql.internalValue = undefined;
      this._awsIotAnalytics.internalValue = undefined;
      this._databricks.internalValue = undefined;
      this._jira.internalValue = undefined;
      this._mariaDb.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._oracle.internalValue = undefined;
      this._postgresql.internalValue = undefined;
      this._presto.internalValue = undefined;
      this._rds.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._spark.internalValue = undefined;
      this._sqlServer.internalValue = undefined;
      this._teradata.internalValue = undefined;
      this._twitter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonElasticsearch.internalValue = value.amazonElasticsearch;
      this._athena.internalValue = value.athena;
      this._aurora.internalValue = value.aurora;
      this._auroraPostgresql.internalValue = value.auroraPostgresql;
      this._awsIotAnalytics.internalValue = value.awsIotAnalytics;
      this._databricks.internalValue = value.databricks;
      this._jira.internalValue = value.jira;
      this._mariaDb.internalValue = value.mariaDb;
      this._mysql.internalValue = value.mysql;
      this._oracle.internalValue = value.oracle;
      this._postgresql.internalValue = value.postgresql;
      this._presto.internalValue = value.presto;
      this._rds.internalValue = value.rds;
      this._redshift.internalValue = value.redshift;
      this._s3.internalValue = value.s3;
      this._serviceNow.internalValue = value.serviceNow;
      this._snowflake.internalValue = value.snowflake;
      this._spark.internalValue = value.spark;
      this._sqlServer.internalValue = value.sqlServer;
      this._teradata.internalValue = value.teradata;
      this._twitter.internalValue = value.twitter;
    }
  }

  // amazon_elasticsearch - computed: false, optional: true, required: false
  private _amazonElasticsearch = new AmazonElasticsearchPropertyOutputReference(this, "amazon_elasticsearch");
  public get amazonElasticsearch() {
    return this._amazonElasticsearch;
  }
  public putAmazonElasticsearch(value: AmazonElasticsearchProperty) {
    this._amazonElasticsearch.internalValue = value;
  }
  public resetAmazonElasticsearch() {
    this._amazonElasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonElasticsearchInput() {
    return this._amazonElasticsearch.internalValue;
  }

  // athena - computed: false, optional: true, required: false
  private _athena = new AthenaPropertyOutputReference(this, "athena");
  public get athena() {
    return this._athena;
  }
  public putAthena(value: AthenaProperty) {
    this._athena.internalValue = value;
  }
  public resetAthena() {
    this._athena.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaInput() {
    return this._athena.internalValue;
  }

  // aurora - computed: false, optional: true, required: false
  private _aurora = new AuroraPropertyOutputReference(this, "aurora");
  public get aurora() {
    return this._aurora;
  }
  public putAurora(value: AuroraProperty) {
    this._aurora.internalValue = value;
  }
  public resetAurora() {
    this._aurora.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraInput() {
    return this._aurora.internalValue;
  }

  // aurora_postgresql - computed: false, optional: true, required: false
  private _auroraPostgresql = new AuroraPostgresqlPropertyOutputReference(this, "aurora_postgresql");
  public get auroraPostgresql() {
    return this._auroraPostgresql;
  }
  public putAuroraPostgresql(value: AuroraPostgresqlProperty) {
    this._auroraPostgresql.internalValue = value;
  }
  public resetAuroraPostgresql() {
    this._auroraPostgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraPostgresqlInput() {
    return this._auroraPostgresql.internalValue;
  }

  // aws_iot_analytics - computed: false, optional: true, required: false
  private _awsIotAnalytics = new AwsIotAnalyticsPropertyOutputReference(this, "aws_iot_analytics");
  public get awsIotAnalytics() {
    return this._awsIotAnalytics;
  }
  public putAwsIotAnalytics(value: AwsIotAnalyticsProperty) {
    this._awsIotAnalytics.internalValue = value;
  }
  public resetAwsIotAnalytics() {
    this._awsIotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIotAnalyticsInput() {
    return this._awsIotAnalytics.internalValue;
  }

  // databricks - computed: false, optional: true, required: false
  private _databricks = new DatabricksPropertyOutputReference(this, "databricks");
  public get databricks() {
    return this._databricks;
  }
  public putDatabricks(value: DatabricksProperty) {
    this._databricks.internalValue = value;
  }
  public resetDatabricks() {
    this._databricks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksInput() {
    return this._databricks.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new JiraPropertyOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: JiraProperty) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // maria_db - computed: false, optional: true, required: false
  private _mariaDb = new MariaDbPropertyOutputReference(this, "maria_db");
  public get mariaDb() {
    return this._mariaDb;
  }
  public putMariaDb(value: MariaDbProperty) {
    this._mariaDb.internalValue = value;
  }
  public resetMariaDb() {
    this._mariaDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbInput() {
    return this._mariaDb.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new MysqlPropertyOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: MysqlProperty) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new OraclePropertyOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: OracleProperty) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new PostgresqlPropertyOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: PostgresqlProperty) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // presto - computed: false, optional: true, required: false
  private _presto = new PrestoPropertyOutputReference(this, "presto");
  public get presto() {
    return this._presto;
  }
  public putPresto(value: PrestoProperty) {
    this._presto.internalValue = value;
  }
  public resetPresto() {
    this._presto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoInput() {
    return this._presto.internalValue;
  }

  // rds - computed: false, optional: true, required: false
  private _rds = new RdsPropertyOutputReference(this, "rds");
  public get rds() {
    return this._rds;
  }
  public putRds(value: RdsProperty) {
    this._rds.internalValue = value;
  }
  public resetRds() {
    this._rds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new RedshiftPropertyOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: RedshiftProperty) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new ServiceNowPropertyOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: ServiceNowProperty) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new SnowflakePropertyOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: SnowflakeProperty) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new SparkPropertyOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: SparkProperty) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // sql_server - computed: false, optional: true, required: false
  private _sqlServer = new SqlServerPropertyOutputReference(this, "sql_server");
  public get sqlServer() {
    return this._sqlServer;
  }
  public putSqlServer(value: SqlServerProperty) {
    this._sqlServer.internalValue = value;
  }
  public resetSqlServer() {
    this._sqlServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerInput() {
    return this._sqlServer.internalValue;
  }

  // teradata - computed: false, optional: true, required: false
  private _teradata = new TeradataPropertyOutputReference(this, "teradata");
  public get teradata() {
    return this._teradata;
  }
  public putTeradata(value: TeradataProperty) {
    this._teradata.internalValue = value;
  }
  public resetTeradata() {
    this._teradata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataInput() {
    return this._teradata.internalValue;
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter = new TwitterPropertyOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: TwitterProperty) {
    this._twitter.internalValue = value;
  }
  public resetTwitter() {
    this._twitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter.internalValue;
  }
}
export interface PermissionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#actions AwsQuicksightDataSource#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#principal AwsQuicksightDataSource#principal}
  */
  readonly principal: string;
}
export class PermissionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PermissionProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PermissionProperty | cdktn.IResolvable | undefined) {
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

export class PermissionPropertyList extends cdktn.ComplexList {
  public internalValue? : PermissionProperty[] | cdktn.IResolvable

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
  public get(index: number): PermissionPropertyOutputReference {
    return new PermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#disable_ssl AwsQuicksightDataSource#disable_ssl}
  */
  readonly disableSsl: boolean | cdktn.IResolvable;
}
export class SslPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSsl = this._disableSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSsl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSsl = value.disableSsl;
    }
  }

  // disable_ssl - computed: false, optional: false, required: true
  private _disableSsl?: boolean | cdktn.IResolvable; 
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
  public set disableSsl(value: boolean | cdktn.IResolvable) {
    this._disableSsl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslInput() {
    return this._disableSsl;
  }
}
export interface VpcConnectionPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_data_source#vpc_connection_arn AwsQuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn: string;
}
export class VpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectionPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectionPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcConnectionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: false, optional: false, required: true
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
}
