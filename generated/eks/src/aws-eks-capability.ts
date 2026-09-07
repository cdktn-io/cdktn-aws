// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCapabilityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#capability_name AwsCapability#capability_name}
  */
  readonly capabilityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#cluster_name AwsCapability#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#delete_propagation_policy AwsCapability#delete_propagation_policy}
  */
  readonly deletePropagationPolicy: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#region AwsCapability#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#role_arn AwsCapability#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#tags AwsCapability#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#type AwsCapability#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#configuration AwsCapability#configuration}
  */
  readonly configuration?: AwsCapability.ConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#timeouts AwsCapability#timeouts}
  */
  readonly timeouts?: AwsCapability.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability aws_eks_capability}
*/
export class AwsCapability extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCapability resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCapability to import
  * @param importFromId The id of the existing AwsCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability aws_eks_capability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCapabilityConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCapabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_capability',
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
    this._capabilityName = config.capabilityName;
    this._clusterName = config.clusterName;
    this._deletePropagationPolicy = config.deletePropagationPolicy;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capability_name - computed: false, optional: false, required: true
  private _capabilityName?: string; 
  public get capabilityName() {
    return this.getStringAttribute('capability_name');
  }
  public set capabilityName(value: string) {
    this._capabilityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityNameInput() {
    return this._capabilityName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // delete_propagation_policy - computed: false, optional: false, required: true
  private _deletePropagationPolicy?: string; 
  public get deletePropagationPolicy() {
    return this.getStringAttribute('delete_propagation_policy');
  }
  public set deletePropagationPolicy(value: string) {
    this._deletePropagationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePropagationPolicyInput() {
    return this._deletePropagationPolicy;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsCapability.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsCapability.ConfigurationProperty[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsCapability.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsCapability.TimeoutsProperty) {
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
      capability_name: cdktn.stringToTerraform(this._capabilityName),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      delete_propagation_policy: cdktn.stringToTerraform(this._deletePropagationPolicy),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      configuration: cdktn.listMapper(awsCapabilityConfigurationPropertyToTerraform, true)(this._configuration.internalValue),
      timeouts: awsCapabilityTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capability_name: {
        value: cdktn.stringToHclTerraform(this._capabilityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_propagation_policy: {
        value: cdktn.stringToHclTerraform(this._deletePropagationPolicy),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
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
      configuration: {
        value: cdktn.listMapperHcl(awsCapabilityConfigurationPropertyToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCapability.ConfigurationPropertyList",
      },
      timeouts: {
        value: awsCapabilityTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsCapability.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCapabilityAwsIdcPropertyToTerraform(struct?: AwsCapability.AwsIdcProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idc_instance_arn: cdktn.stringToTerraform(struct!.idcInstanceArn),
    idc_region: cdktn.stringToTerraform(struct!.idcRegion),
  }
}


export function awsCapabilityAwsIdcPropertyToHclTerraform(struct?: AwsCapability.AwsIdcProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idc_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.idcInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idc_region: {
      value: cdktn.stringToHclTerraform(struct!.idcRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapabilityNetworkAccessPropertyToTerraform(struct?: AwsCapability.NetworkAccessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpce_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpceIds),
  }
}


export function awsCapabilityNetworkAccessPropertyToHclTerraform(struct?: AwsCapability.NetworkAccessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsCapabilityIdentityPropertyToTerraform(struct?: AwsCapability.IdentityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsCapabilityIdentityPropertyToHclTerraform(struct?: AwsCapability.IdentityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapabilityRbacRoleMappingPropertyToTerraform(struct?: AwsCapability.RbacRoleMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    identity: cdktn.listMapper(awsCapabilityIdentityPropertyToTerraform, true)(struct!.identity),
  }
}


export function awsCapabilityRbacRoleMappingPropertyToHclTerraform(struct?: AwsCapability.RbacRoleMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktn.listMapperHcl(awsCapabilityIdentityPropertyToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapabilityArgoCdPropertyToTerraform(struct?: AwsCapability.ArgoCdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    aws_idc: cdktn.listMapper(awsCapabilityAwsIdcPropertyToTerraform, true)(struct!.awsIdc),
    network_access: cdktn.listMapper(awsCapabilityNetworkAccessPropertyToTerraform, true)(struct!.networkAccess),
    rbac_role_mapping: cdktn.listMapper(awsCapabilityRbacRoleMappingPropertyToTerraform, true)(struct!.rbacRoleMapping),
  }
}


export function awsCapabilityArgoCdPropertyToHclTerraform(struct?: AwsCapability.ArgoCdProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_idc: {
      value: cdktn.listMapperHcl(awsCapabilityAwsIdcPropertyToHclTerraform, true)(struct!.awsIdc),
      isBlock: true,
      type: "list",
      storageClassType: "AwsIdcPropertyList",
    },
    network_access: {
      value: cdktn.listMapperHcl(awsCapabilityNetworkAccessPropertyToHclTerraform, true)(struct!.networkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAccessPropertyList",
    },
    rbac_role_mapping: {
      value: cdktn.listMapperHcl(awsCapabilityRbacRoleMappingPropertyToHclTerraform, true)(struct!.rbacRoleMapping),
      isBlock: true,
      type: "set",
      storageClassType: "RbacRoleMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapabilityConfigurationPropertyToTerraform(struct?: AwsCapability.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    argo_cd: cdktn.listMapper(awsCapabilityArgoCdPropertyToTerraform, true)(struct!.argoCd),
  }
}


export function awsCapabilityConfigurationPropertyToHclTerraform(struct?: AwsCapability.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    argo_cd: {
      value: cdktn.listMapperHcl(awsCapabilityArgoCdPropertyToHclTerraform, true)(struct!.argoCd),
      isBlock: true,
      type: "list",
      storageClassType: "ArgoCdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCapabilityTimeoutsPropertyToTerraform(struct?: AwsCapability.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsCapabilityTimeoutsPropertyToHclTerraform(struct?: AwsCapability.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsCapability {
export interface AwsIdcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#idc_instance_arn AwsCapability#idc_instance_arn}
  */
  readonly idcInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#idc_region AwsCapability#idc_region}
  */
  readonly idcRegion?: string;
}
export class AwsIdcPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsIdcProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idcInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcInstanceArn = this._idcInstanceArn;
    }
    if (this._idcRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcRegion = this._idcRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIdcProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idcInstanceArn = undefined;
      this._idcRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idcInstanceArn = value.idcInstanceArn;
      this._idcRegion = value.idcRegion;
    }
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

  // idc_region - computed: true, optional: true, required: false
  private _idcRegion?: string; 
  public get idcRegion() {
    return this.getStringAttribute('idc_region');
  }
  public set idcRegion(value: string) {
    this._idcRegion = value;
  }
  public resetIdcRegion() {
    this._idcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcRegionInput() {
    return this._idcRegion;
  }
}

export class AwsIdcPropertyList extends cdktn.ComplexList {
  public internalValue? : AwsIdcProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsIdcPropertyOutputReference {
    return new AwsIdcPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAccessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#vpce_ids AwsCapability#vpce_ids}
  */
  readonly vpceIds?: string[];
}
export class NetworkAccessPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkAccessProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceIds = this._vpceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAccessProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpceIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpceIds = value.vpceIds;
    }
  }

  // vpce_ids - computed: false, optional: true, required: false
  private _vpceIds?: string[]; 
  public get vpceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpce_ids'));
  }
  public set vpceIds(value: string[]) {
    this._vpceIds = value;
  }
  public resetVpceIds() {
    this._vpceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdsInput() {
    return this._vpceIds;
  }
}

export class NetworkAccessPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkAccessProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkAccessPropertyOutputReference {
    return new NetworkAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#id AwsCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#type AwsCapability#type}
  */
  readonly type: string;
}
export class IdentityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class IdentityPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentityProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentityPropertyOutputReference {
    return new IdentityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RbacRoleMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#role AwsCapability#role}
  */
  readonly role: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#identity AwsCapability#identity}
  */
  readonly identity?: IdentityProperty[] | cdktn.IResolvable;
}
export class RbacRoleMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RbacRoleMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RbacRoleMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._identity.internalValue = value.identity;
    }
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

  // identity - computed: false, optional: true, required: false
  private _identity = new IdentityPropertyList(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: IdentityProperty[] | cdktn.IResolvable) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class RbacRoleMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : RbacRoleMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): RbacRoleMappingPropertyOutputReference {
    return new RbacRoleMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArgoCdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#namespace AwsCapability#namespace}
  */
  readonly namespace?: string;
  /**
  * aws_idc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#aws_idc AwsCapability#aws_idc}
  */
  readonly awsIdc?: AwsIdcProperty[] | cdktn.IResolvable;
  /**
  * network_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#network_access AwsCapability#network_access}
  */
  readonly networkAccess?: NetworkAccessProperty[] | cdktn.IResolvable;
  /**
  * rbac_role_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#rbac_role_mapping AwsCapability#rbac_role_mapping}
  */
  readonly rbacRoleMapping?: RbacRoleMappingProperty[] | cdktn.IResolvable;
}
export class ArgoCdPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArgoCdProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._awsIdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIdc = this._awsIdc?.internalValue;
    }
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    if (this._rbacRoleMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbacRoleMapping = this._rbacRoleMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArgoCdProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._awsIdc.internalValue = undefined;
      this._networkAccess.internalValue = undefined;
      this._rbacRoleMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._awsIdc.internalValue = value.awsIdc;
      this._networkAccess.internalValue = value.networkAccess;
      this._rbacRoleMapping.internalValue = value.rbacRoleMapping;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // aws_idc - computed: false, optional: true, required: false
  private _awsIdc = new AwsIdcPropertyList(this, "aws_idc", false);
  public get awsIdc() {
    return this._awsIdc;
  }
  public putAwsIdc(value: AwsIdcProperty[] | cdktn.IResolvable) {
    this._awsIdc.internalValue = value;
  }
  public resetAwsIdc() {
    this._awsIdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIdcInput() {
    return this._awsIdc.internalValue;
  }

  // network_access - computed: false, optional: true, required: false
  private _networkAccess = new NetworkAccessPropertyList(this, "network_access", false);
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: NetworkAccessProperty[] | cdktn.IResolvable) {
    this._networkAccess.internalValue = value;
  }
  public resetNetworkAccess() {
    this._networkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessInput() {
    return this._networkAccess.internalValue;
  }

  // rbac_role_mapping - computed: false, optional: true, required: false
  private _rbacRoleMapping = new RbacRoleMappingPropertyList(this, "rbac_role_mapping", true);
  public get rbacRoleMapping() {
    return this._rbacRoleMapping;
  }
  public putRbacRoleMapping(value: RbacRoleMappingProperty[] | cdktn.IResolvable) {
    this._rbacRoleMapping.internalValue = value;
  }
  public resetRbacRoleMapping() {
    this._rbacRoleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacRoleMappingInput() {
    return this._rbacRoleMapping.internalValue;
  }
}

export class ArgoCdPropertyList extends cdktn.ComplexList {
  public internalValue? : ArgoCdProperty[] | cdktn.IResolvable

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
  public get(index: number): ArgoCdPropertyOutputReference {
    return new ArgoCdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * argo_cd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#argo_cd AwsCapability#argo_cd}
  */
  readonly argoCd?: ArgoCdProperty[] | cdktn.IResolvable;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argoCd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCd = this._argoCd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = value.argoCd;
    }
  }

  // argo_cd - computed: false, optional: true, required: false
  private _argoCd = new ArgoCdPropertyList(this, "argo_cd", false);
  public get argoCd() {
    return this._argoCd;
  }
  public putArgoCd(value: ArgoCdProperty[] | cdktn.IResolvable) {
    this._argoCd.internalValue = value;
  }
  public resetArgoCd() {
    this._argoCd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdInput() {
    return this._argoCd.internalValue;
  }
}

export class ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationPropertyOutputReference {
    return new ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#create AwsCapability#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#delete AwsCapability#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/eks_capability#update AwsCapability#update}
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
