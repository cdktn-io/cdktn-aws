// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfAccessGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#access_grants_location_id TfAccessGrant#access_grants_location_id}
  */
  readonly accessGrantsLocationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#account_id TfAccessGrant#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#permission TfAccessGrant#permission}
  */
  readonly permission: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#region TfAccessGrant#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#s3_prefix_type TfAccessGrant#s3_prefix_type}
  */
  readonly s3PrefixType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#tags TfAccessGrant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_grants_location_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#access_grants_location_configuration TfAccessGrant#access_grants_location_configuration}
  */
  readonly accessGrantsLocationConfiguration?: TfAccessGrant.AccessGrantsLocationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * grantee block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#grantee TfAccessGrant#grantee}
  */
  readonly grantee?: TfAccessGrant.GranteeProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant aws_s3control_access_grant}
*/
export class TfAccessGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfAccessGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfAccessGrant to import
  * @param importFromId The id of the existing TfAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfAccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant aws_s3control_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfAccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: TfAccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_access_grant',
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
    this._accessGrantsLocationId = config.accessGrantsLocationId;
    this._accountId = config.accountId;
    this._permission = config.permission;
    this._region = config.region;
    this._s3PrefixType = config.s3PrefixType;
    this._tags = config.tags;
    this._accessGrantsLocationConfiguration.internalValue = config.accessGrantsLocationConfiguration;
    this._grantee.internalValue = config.grantee;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grant_arn - computed: true, optional: false, required: false
  public get accessGrantArn() {
    return this.getStringAttribute('access_grant_arn');
  }

  // access_grant_id - computed: true, optional: false, required: false
  public get accessGrantId() {
    return this.getStringAttribute('access_grant_id');
  }

  // access_grants_location_id - computed: false, optional: false, required: true
  private _accessGrantsLocationId?: string; 
  public get accessGrantsLocationId() {
    return this.getStringAttribute('access_grants_location_id');
  }
  public set accessGrantsLocationId(value: string) {
    this._accessGrantsLocationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsLocationIdInput() {
    return this._accessGrantsLocationId;
  }

  // account_id - computed: true, optional: true, required: false
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

  // grant_scope - computed: true, optional: false, required: false
  public get grantScope() {
    return this.getStringAttribute('grant_scope');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // s3_prefix_type - computed: false, optional: true, required: false
  private _s3PrefixType?: string; 
  public get s3PrefixType() {
    return this.getStringAttribute('s3_prefix_type');
  }
  public set s3PrefixType(value: string) {
    this._s3PrefixType = value;
  }
  public resetS3PrefixType() {
    this._s3PrefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixTypeInput() {
    return this._s3PrefixType;
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

  // access_grants_location_configuration - computed: false, optional: true, required: false
  private _accessGrantsLocationConfiguration = new TfAccessGrant.AccessGrantsLocationConfigurationPropertyList(this, "access_grants_location_configuration", false);
  public get accessGrantsLocationConfiguration() {
    return this._accessGrantsLocationConfiguration;
  }
  public putAccessGrantsLocationConfiguration(value: TfAccessGrant.AccessGrantsLocationConfigurationProperty[] | cdktn.IResolvable) {
    this._accessGrantsLocationConfiguration.internalValue = value;
  }
  public resetAccessGrantsLocationConfiguration() {
    this._accessGrantsLocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsLocationConfigurationInput() {
    return this._accessGrantsLocationConfiguration.internalValue;
  }

  // grantee - computed: false, optional: true, required: false
  private _grantee = new TfAccessGrant.GranteePropertyList(this, "grantee", false);
  public get grantee() {
    return this._grantee;
  }
  public putGrantee(value: TfAccessGrant.GranteeProperty[] | cdktn.IResolvable) {
    this._grantee.internalValue = value;
  }
  public resetGrantee() {
    this._grantee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_grants_location_id: cdktn.stringToTerraform(this._accessGrantsLocationId),
      account_id: cdktn.stringToTerraform(this._accountId),
      permission: cdktn.stringToTerraform(this._permission),
      region: cdktn.stringToTerraform(this._region),
      s3_prefix_type: cdktn.stringToTerraform(this._s3PrefixType),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      access_grants_location_configuration: cdktn.listMapper(tfAccessGrantAccessGrantsLocationConfigurationPropertyToTerraform, true)(this._accessGrantsLocationConfiguration.internalValue),
      grantee: cdktn.listMapper(tfAccessGrantGranteePropertyToTerraform, true)(this._grantee.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_grants_location_id: {
        value: cdktn.stringToHclTerraform(this._accessGrantsLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktn.stringToHclTerraform(this._permission),
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
      s3_prefix_type: {
        value: cdktn.stringToHclTerraform(this._s3PrefixType),
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
      access_grants_location_configuration: {
        value: cdktn.listMapperHcl(tfAccessGrantAccessGrantsLocationConfigurationPropertyToHclTerraform, true)(this._accessGrantsLocationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfAccessGrant.AccessGrantsLocationConfigurationPropertyList",
      },
      grantee: {
        value: cdktn.listMapperHcl(tfAccessGrantGranteePropertyToHclTerraform, true)(this._grantee.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfAccessGrant.GranteePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfAccessGrantAccessGrantsLocationConfigurationPropertyToTerraform(struct?: TfAccessGrant.AccessGrantsLocationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_sub_prefix: cdktn.stringToTerraform(struct!.s3SubPrefix),
  }
}


export function tfAccessGrantAccessGrantsLocationConfigurationPropertyToHclTerraform(struct?: TfAccessGrant.AccessGrantsLocationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_sub_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3SubPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAccessGrantGranteePropertyToTerraform(struct?: TfAccessGrant.GranteeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grantee_identifier: cdktn.stringToTerraform(struct!.granteeIdentifier),
    grantee_type: cdktn.stringToTerraform(struct!.granteeType),
  }
}


export function tfAccessGrantGranteePropertyToHclTerraform(struct?: TfAccessGrant.GranteeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grantee_identifier: {
      value: cdktn.stringToHclTerraform(struct!.granteeIdentifier),
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


export namespace TfAccessGrant {
export interface AccessGrantsLocationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#s3_sub_prefix TfAccessGrant#s3_sub_prefix}
  */
  readonly s3SubPrefix?: string;
}
export class AccessGrantsLocationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessGrantsLocationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3SubPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SubPrefix = this._s3SubPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessGrantsLocationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3SubPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3SubPrefix = value.s3SubPrefix;
    }
  }

  // s3_sub_prefix - computed: false, optional: true, required: false
  private _s3SubPrefix?: string; 
  public get s3SubPrefix() {
    return this.getStringAttribute('s3_sub_prefix');
  }
  public set s3SubPrefix(value: string) {
    this._s3SubPrefix = value;
  }
  public resetS3SubPrefix() {
    this._s3SubPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SubPrefixInput() {
    return this._s3SubPrefix;
  }
}

export class AccessGrantsLocationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AccessGrantsLocationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AccessGrantsLocationConfigurationPropertyOutputReference {
    return new AccessGrantsLocationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GranteeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#grantee_identifier TfAccessGrant#grantee_identifier}
  */
  readonly granteeIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3control_access_grant#grantee_type TfAccessGrant#grantee_type}
  */
  readonly granteeType: string;
}
export class GranteePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GranteeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granteeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeIdentifier = this._granteeIdentifier;
    }
    if (this._granteeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeType = this._granteeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GranteeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granteeIdentifier = undefined;
      this._granteeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granteeIdentifier = value.granteeIdentifier;
      this._granteeType = value.granteeType;
    }
  }

  // grantee_identifier - computed: false, optional: false, required: true
  private _granteeIdentifier?: string; 
  public get granteeIdentifier() {
    return this.getStringAttribute('grantee_identifier');
  }
  public set granteeIdentifier(value: string) {
    this._granteeIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeIdentifierInput() {
    return this._granteeIdentifier;
  }

  // grantee_type - computed: false, optional: false, required: true
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
  }
}

export class GranteePropertyList extends cdktn.ComplexList {
  public internalValue? : GranteeProperty[] | cdktn.IResolvable

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
  public get(index: number): GranteePropertyOutputReference {
    return new GranteePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
