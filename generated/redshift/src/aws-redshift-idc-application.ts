// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRedshiftIdcApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#application_type AwsRedshiftIdcApplication#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#iam_role_arn AwsRedshiftIdcApplication#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#idc_display_name AwsRedshiftIdcApplication#idc_display_name}
  */
  readonly idcDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#idc_instance_arn AwsRedshiftIdcApplication#idc_instance_arn}
  */
  readonly idcInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#identity_namespace AwsRedshiftIdcApplication#identity_namespace}
  */
  readonly identityNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#redshift_idc_application_name AwsRedshiftIdcApplication#redshift_idc_application_name}
  */
  readonly redshiftIdcApplicationName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#region AwsRedshiftIdcApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#tags AwsRedshiftIdcApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * authorized_token_issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#authorized_token_issuer AwsRedshiftIdcApplication#authorized_token_issuer}
  */
  readonly authorizedTokenIssuer?: AwsRedshiftIdcApplication.AuthorizedTokenIssuerProperty[] | cdktn.IResolvable;
  /**
  * service_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#service_integration AwsRedshiftIdcApplication#service_integration}
  */
  readonly serviceIntegration?: AwsRedshiftIdcApplication.ServiceIntegrationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application aws_redshift_idc_application}
*/
export class AwsRedshiftIdcApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_idc_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRedshiftIdcApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRedshiftIdcApplication to import
  * @param importFromId The id of the existing AwsRedshiftIdcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRedshiftIdcApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_idc_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application aws_redshift_idc_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRedshiftIdcApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRedshiftIdcApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_idc_application',
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
    this._applicationType = config.applicationType;
    this._iamRoleArn = config.iamRoleArn;
    this._idcDisplayName = config.idcDisplayName;
    this._idcInstanceArn = config.idcInstanceArn;
    this._identityNamespace = config.identityNamespace;
    this._redshiftIdcApplicationName = config.redshiftIdcApplicationName;
    this._region = config.region;
    this._tags = config.tags;
    this._authorizedTokenIssuer.internalValue = config.authorizedTokenIssuer;
    this._serviceIntegration.internalValue = config.serviceIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // idc_display_name - computed: false, optional: false, required: true
  private _idcDisplayName?: string; 
  public get idcDisplayName() {
    return this.getStringAttribute('idc_display_name');
  }
  public set idcDisplayName(value: string) {
    this._idcDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcDisplayNameInput() {
    return this._idcDisplayName;
  }

  // idc_instance_arn - computed: false, optional: false, required: true
  private _idcInstanceArn?: string; 
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }
  public set idcInstanceArn(value: string) {
    this._idcInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcInstanceArnInput() {
    return this._idcInstanceArn;
  }

  // idc_managed_application_arn - computed: true, optional: false, required: false
  public get idcManagedApplicationArn() {
    return this.getStringAttribute('idc_managed_application_arn');
  }

  // identity_namespace - computed: true, optional: true, required: false
  private _identityNamespace?: string; 
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }
  public set identityNamespace(value: string) {
    this._identityNamespace = value;
  }
  public resetIdentityNamespace() {
    this._identityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNamespaceInput() {
    return this._identityNamespace;
  }

  // redshift_idc_application_arn - computed: true, optional: false, required: false
  public get redshiftIdcApplicationArn() {
    return this.getStringAttribute('redshift_idc_application_arn');
  }

  // redshift_idc_application_name - computed: false, optional: false, required: true
  private _redshiftIdcApplicationName?: string; 
  public get redshiftIdcApplicationName() {
    return this.getStringAttribute('redshift_idc_application_name');
  }
  public set redshiftIdcApplicationName(value: string) {
    this._redshiftIdcApplicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftIdcApplicationNameInput() {
    return this._redshiftIdcApplicationName;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // authorized_token_issuer - computed: false, optional: true, required: false
  private _authorizedTokenIssuer = new AwsRedshiftIdcApplication.AuthorizedTokenIssuerPropertyList(this, "authorized_token_issuer", false);
  public get authorizedTokenIssuer() {
    return this._authorizedTokenIssuer;
  }
  public putAuthorizedTokenIssuer(value: AwsRedshiftIdcApplication.AuthorizedTokenIssuerProperty[] | cdktn.IResolvable) {
    this._authorizedTokenIssuer.internalValue = value;
  }
  public resetAuthorizedTokenIssuer() {
    this._authorizedTokenIssuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedTokenIssuerInput() {
    return this._authorizedTokenIssuer.internalValue;
  }

  // service_integration - computed: false, optional: true, required: false
  private _serviceIntegration = new AwsRedshiftIdcApplication.ServiceIntegrationPropertyList(this, "service_integration", false);
  public get serviceIntegration() {
    return this._serviceIntegration;
  }
  public putServiceIntegration(value: AwsRedshiftIdcApplication.ServiceIntegrationProperty[] | cdktn.IResolvable) {
    this._serviceIntegration.internalValue = value;
  }
  public resetServiceIntegration() {
    this._serviceIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationInput() {
    return this._serviceIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktn.stringToTerraform(this._applicationType),
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      idc_display_name: cdktn.stringToTerraform(this._idcDisplayName),
      idc_instance_arn: cdktn.stringToTerraform(this._idcInstanceArn),
      identity_namespace: cdktn.stringToTerraform(this._identityNamespace),
      redshift_idc_application_name: cdktn.stringToTerraform(this._redshiftIdcApplicationName),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      authorized_token_issuer: cdktn.listMapper(awsRedshiftIdcApplicationAuthorizedTokenIssuerPropertyToTerraform, true)(this._authorizedTokenIssuer.internalValue),
      service_integration: cdktn.listMapper(awsRedshiftIdcApplicationServiceIntegrationPropertyToTerraform, true)(this._serviceIntegration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktn.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idc_display_name: {
        value: cdktn.stringToHclTerraform(this._idcDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idc_instance_arn: {
        value: cdktn.stringToHclTerraform(this._idcInstanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_namespace: {
        value: cdktn.stringToHclTerraform(this._identityNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_idc_application_name: {
        value: cdktn.stringToHclTerraform(this._redshiftIdcApplicationName),
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
      authorized_token_issuer: {
        value: cdktn.listMapperHcl(awsRedshiftIdcApplicationAuthorizedTokenIssuerPropertyToHclTerraform, true)(this._authorizedTokenIssuer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRedshiftIdcApplication.AuthorizedTokenIssuerPropertyList",
      },
      service_integration: {
        value: cdktn.listMapperHcl(awsRedshiftIdcApplicationServiceIntegrationPropertyToHclTerraform, true)(this._serviceIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRedshiftIdcApplication.ServiceIntegrationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRedshiftIdcApplicationAuthorizedTokenIssuerPropertyToTerraform(struct?: AwsRedshiftIdcApplication.AuthorizedTokenIssuerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorized_audiences_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authorizedAudiencesList),
    trusted_token_issuer_arn: cdktn.stringToTerraform(struct!.trustedTokenIssuerArn),
  }
}


export function awsRedshiftIdcApplicationAuthorizedTokenIssuerPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.AuthorizedTokenIssuerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorized_audiences_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authorizedAudiencesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_token_issuer_arn: {
      value: cdktn.stringToHclTerraform(struct!.trustedTokenIssuerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationLakeFormationQueryPropertyToTerraform(struct?: AwsRedshiftIdcApplication.LakeFormationQueryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization: cdktn.stringToTerraform(struct!.authorization),
  }
}


export function awsRedshiftIdcApplicationLakeFormationQueryPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.LakeFormationQueryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization: {
      value: cdktn.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationLakeFormationPropertyToTerraform(struct?: AwsRedshiftIdcApplication.LakeFormationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lake_formation_query: cdktn.listMapper(awsRedshiftIdcApplicationLakeFormationQueryPropertyToTerraform, true)(struct!.lakeFormationQuery),
  }
}


export function awsRedshiftIdcApplicationLakeFormationPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.LakeFormationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lake_formation_query: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationLakeFormationQueryPropertyToHclTerraform, true)(struct!.lakeFormationQuery),
      isBlock: true,
      type: "list",
      storageClassType: "LakeFormationQueryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationConnectPropertyToTerraform(struct?: AwsRedshiftIdcApplication.ConnectProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization: cdktn.stringToTerraform(struct!.authorization),
  }
}


export function awsRedshiftIdcApplicationConnectPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.ConnectProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization: {
      value: cdktn.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationRedshiftPropertyToTerraform(struct?: AwsRedshiftIdcApplication.RedshiftProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connect: cdktn.listMapper(awsRedshiftIdcApplicationConnectPropertyToTerraform, true)(struct!.connect),
  }
}


export function awsRedshiftIdcApplicationRedshiftPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.RedshiftProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connect: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationConnectPropertyToHclTerraform, true)(struct!.connect),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationReadWriteAccessPropertyToTerraform(struct?: AwsRedshiftIdcApplication.ReadWriteAccessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization: cdktn.stringToTerraform(struct!.authorization),
  }
}


export function awsRedshiftIdcApplicationReadWriteAccessPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.ReadWriteAccessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization: {
      value: cdktn.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationS3AccessGrantsPropertyToTerraform(struct?: AwsRedshiftIdcApplication.S3AccessGrantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_write_access: cdktn.listMapper(awsRedshiftIdcApplicationReadWriteAccessPropertyToTerraform, true)(struct!.readWriteAccess),
  }
}


export function awsRedshiftIdcApplicationS3AccessGrantsPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.S3AccessGrantsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_write_access: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationReadWriteAccessPropertyToHclTerraform, true)(struct!.readWriteAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ReadWriteAccessPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRedshiftIdcApplicationServiceIntegrationPropertyToTerraform(struct?: AwsRedshiftIdcApplication.ServiceIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lake_formation: cdktn.listMapper(awsRedshiftIdcApplicationLakeFormationPropertyToTerraform, true)(struct!.lakeFormation),
    redshift: cdktn.listMapper(awsRedshiftIdcApplicationRedshiftPropertyToTerraform, true)(struct!.redshift),
    s3_access_grants: cdktn.listMapper(awsRedshiftIdcApplicationS3AccessGrantsPropertyToTerraform, true)(struct!.s3AccessGrants),
  }
}


export function awsRedshiftIdcApplicationServiceIntegrationPropertyToHclTerraform(struct?: AwsRedshiftIdcApplication.ServiceIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lake_formation: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationLakeFormationPropertyToHclTerraform, true)(struct!.lakeFormation),
      isBlock: true,
      type: "list",
      storageClassType: "LakeFormationPropertyList",
    },
    redshift: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationRedshiftPropertyToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftPropertyList",
    },
    s3_access_grants: {
      value: cdktn.listMapperHcl(awsRedshiftIdcApplicationS3AccessGrantsPropertyToHclTerraform, true)(struct!.s3AccessGrants),
      isBlock: true,
      type: "list",
      storageClassType: "S3AccessGrantsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRedshiftIdcApplication {
export interface AuthorizedTokenIssuerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#authorized_audiences_list AwsRedshiftIdcApplication#authorized_audiences_list}
  */
  readonly authorizedAudiencesList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn AwsRedshiftIdcApplication#trusted_token_issuer_arn}
  */
  readonly trustedTokenIssuerArn?: string;
}
export class AuthorizedTokenIssuerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthorizedTokenIssuerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedAudiencesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedAudiencesList = this._authorizedAudiencesList;
    }
    if (this._trustedTokenIssuerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedTokenIssuerArn = this._trustedTokenIssuerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizedTokenIssuerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedAudiencesList = undefined;
      this._trustedTokenIssuerArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedAudiencesList = value.authorizedAudiencesList;
      this._trustedTokenIssuerArn = value.trustedTokenIssuerArn;
    }
  }

  // authorized_audiences_list - computed: false, optional: true, required: false
  private _authorizedAudiencesList?: string[]; 
  public get authorizedAudiencesList() {
    return this.getListAttribute('authorized_audiences_list');
  }
  public set authorizedAudiencesList(value: string[]) {
    this._authorizedAudiencesList = value;
  }
  public resetAuthorizedAudiencesList() {
    this._authorizedAudiencesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAudiencesListInput() {
    return this._authorizedAudiencesList;
  }

  // trusted_token_issuer_arn - computed: false, optional: true, required: false
  private _trustedTokenIssuerArn?: string; 
  public get trustedTokenIssuerArn() {
    return this.getStringAttribute('trusted_token_issuer_arn');
  }
  public set trustedTokenIssuerArn(value: string) {
    this._trustedTokenIssuerArn = value;
  }
  public resetTrustedTokenIssuerArn() {
    this._trustedTokenIssuerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedTokenIssuerArnInput() {
    return this._trustedTokenIssuerArn;
  }
}

export class AuthorizedTokenIssuerPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthorizedTokenIssuerProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthorizedTokenIssuerPropertyOutputReference {
    return new AuthorizedTokenIssuerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeFormationQueryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#authorization AwsRedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}
export class LakeFormationQueryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeFormationQueryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeFormationQueryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class LakeFormationQueryPropertyList extends cdktn.ComplexList {
  public internalValue? : LakeFormationQueryProperty[] | cdktn.IResolvable

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
  public get(index: number): LakeFormationQueryPropertyOutputReference {
    return new LakeFormationQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeFormationProperty {
  /**
  * lake_formation_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#lake_formation_query AwsRedshiftIdcApplication#lake_formation_query}
  */
  readonly lakeFormationQuery?: LakeFormationQueryProperty[] | cdktn.IResolvable;
}
export class LakeFormationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeFormationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lakeFormationQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeFormationQuery = this._lakeFormationQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeFormationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lakeFormationQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lakeFormationQuery.internalValue = value.lakeFormationQuery;
    }
  }

  // lake_formation_query - computed: false, optional: true, required: false
  private _lakeFormationQuery = new LakeFormationQueryPropertyList(this, "lake_formation_query", false);
  public get lakeFormationQuery() {
    return this._lakeFormationQuery;
  }
  public putLakeFormationQuery(value: LakeFormationQueryProperty[] | cdktn.IResolvable) {
    this._lakeFormationQuery.internalValue = value;
  }
  public resetLakeFormationQuery() {
    this._lakeFormationQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationQueryInput() {
    return this._lakeFormationQuery.internalValue;
  }
}

export class LakeFormationPropertyList extends cdktn.ComplexList {
  public internalValue? : LakeFormationProperty[] | cdktn.IResolvable

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
  public get(index: number): LakeFormationPropertyOutputReference {
    return new LakeFormationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#authorization AwsRedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}
export class ConnectPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class ConnectPropertyList extends cdktn.ComplexList {
  public internalValue? : ConnectProperty[] | cdktn.IResolvable

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
  public get(index: number): ConnectPropertyOutputReference {
    return new ConnectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftProperty {
  /**
  * connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#connect AwsRedshiftIdcApplication#connect}
  */
  readonly connect?: ConnectProperty[] | cdktn.IResolvable;
}
export class RedshiftPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RedshiftProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect.internalValue = value.connect;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect = new ConnectPropertyList(this, "connect", false);
  public get connect() {
    return this._connect;
  }
  public putConnect(value: ConnectProperty[] | cdktn.IResolvable) {
    this._connect.internalValue = value;
  }
  public resetConnect() {
    this._connect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect.internalValue;
  }
}

export class RedshiftPropertyList extends cdktn.ComplexList {
  public internalValue? : RedshiftProperty[] | cdktn.IResolvable

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
  public get(index: number): RedshiftPropertyOutputReference {
    return new RedshiftPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReadWriteAccessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#authorization AwsRedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}
export class ReadWriteAccessPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReadWriteAccessProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReadWriteAccessProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class ReadWriteAccessPropertyList extends cdktn.ComplexList {
  public internalValue? : ReadWriteAccessProperty[] | cdktn.IResolvable

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
  public get(index: number): ReadWriteAccessPropertyOutputReference {
    return new ReadWriteAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3AccessGrantsProperty {
  /**
  * read_write_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#read_write_access AwsRedshiftIdcApplication#read_write_access}
  */
  readonly readWriteAccess?: ReadWriteAccessProperty[] | cdktn.IResolvable;
}
export class S3AccessGrantsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3AccessGrantsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readWriteAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteAccess = this._readWriteAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3AccessGrantsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readWriteAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readWriteAccess.internalValue = value.readWriteAccess;
    }
  }

  // read_write_access - computed: false, optional: true, required: false
  private _readWriteAccess = new ReadWriteAccessPropertyList(this, "read_write_access", false);
  public get readWriteAccess() {
    return this._readWriteAccess;
  }
  public putReadWriteAccess(value: ReadWriteAccessProperty[] | cdktn.IResolvable) {
    this._readWriteAccess.internalValue = value;
  }
  public resetReadWriteAccess() {
    this._readWriteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteAccessInput() {
    return this._readWriteAccess.internalValue;
  }
}

export class S3AccessGrantsPropertyList extends cdktn.ComplexList {
  public internalValue? : S3AccessGrantsProperty[] | cdktn.IResolvable

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
  public get(index: number): S3AccessGrantsPropertyOutputReference {
    return new S3AccessGrantsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationProperty {
  /**
  * lake_formation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#lake_formation AwsRedshiftIdcApplication#lake_formation}
  */
  readonly lakeFormation?: LakeFormationProperty[] | cdktn.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#redshift AwsRedshiftIdcApplication#redshift}
  */
  readonly redshift?: RedshiftProperty[] | cdktn.IResolvable;
  /**
  * s3_access_grants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/redshift_idc_application#s3_access_grants AwsRedshiftIdcApplication#s3_access_grants}
  */
  readonly s3AccessGrants?: S3AccessGrantsProperty[] | cdktn.IResolvable;
}
export class ServiceIntegrationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceIntegrationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lakeFormation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeFormation = this._lakeFormation?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3AccessGrants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessGrants = this._s3AccessGrants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lakeFormation.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3AccessGrants.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lakeFormation.internalValue = value.lakeFormation;
      this._redshift.internalValue = value.redshift;
      this._s3AccessGrants.internalValue = value.s3AccessGrants;
    }
  }

  // lake_formation - computed: false, optional: true, required: false
  private _lakeFormation = new LakeFormationPropertyList(this, "lake_formation", false);
  public get lakeFormation() {
    return this._lakeFormation;
  }
  public putLakeFormation(value: LakeFormationProperty[] | cdktn.IResolvable) {
    this._lakeFormation.internalValue = value;
  }
  public resetLakeFormation() {
    this._lakeFormation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationInput() {
    return this._lakeFormation.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new RedshiftPropertyList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: RedshiftProperty[] | cdktn.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3_access_grants - computed: false, optional: true, required: false
  private _s3AccessGrants = new S3AccessGrantsPropertyList(this, "s3_access_grants", false);
  public get s3AccessGrants() {
    return this._s3AccessGrants;
  }
  public putS3AccessGrants(value: S3AccessGrantsProperty[] | cdktn.IResolvable) {
    this._s3AccessGrants.internalValue = value;
  }
  public resetS3AccessGrants() {
    this._s3AccessGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessGrantsInput() {
    return this._s3AccessGrants.internalValue;
  }
}

export class ServiceIntegrationPropertyList extends cdktn.ComplexList {
  public internalValue? : ServiceIntegrationProperty[] | cdktn.IResolvable

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
  public get(index: number): ServiceIntegrationPropertyOutputReference {
    return new ServiceIntegrationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
