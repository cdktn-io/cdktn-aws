// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResourceSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#id AwsResourceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_name AwsResourceSet#resource_set_name}
  */
  readonly resourceSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_type AwsResourceSet#resource_set_type}
  */
  readonly resourceSetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#tags AwsResourceSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#tags_all AwsResourceSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#resources AwsResourceSet#resources}
  */
  readonly resources: AwsResourceSet.ResourcesProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#timeouts AwsResourceSet#timeouts}
  */
  readonly timeouts?: AwsResourceSet.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set}
*/
export class AwsResourceSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53recoveryreadiness_resource_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResourceSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResourceSet to import
  * @param importFromId The id of the existing AwsResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResourceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53recoveryreadiness_resource_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoveryreadiness_resource_set',
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
    this._id = config.id;
    this._resourceSetName = config.resourceSetName;
    this._resourceSetType = config.resourceSetType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // resource_set_name - computed: false, optional: false, required: true
  private _resourceSetName?: string; 
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName;
  }

  // resource_set_type - computed: false, optional: false, required: true
  private _resourceSetType?: string; 
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }
  public set resourceSetType(value: string) {
    this._resourceSetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetTypeInput() {
    return this._resourceSetType;
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

  // resources - computed: false, optional: false, required: true
  private _resources = new AwsResourceSet.ResourcesPropertyList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: AwsResourceSet.ResourcesProperty[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsResourceSet.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsResourceSet.TimeoutsProperty) {
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
      id: cdktn.stringToTerraform(this._id),
      resource_set_name: cdktn.stringToTerraform(this._resourceSetName),
      resource_set_type: cdktn.stringToTerraform(this._resourceSetType),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      resources: cdktn.listMapper(awsResourceSetResourcesPropertyToTerraform, true)(this._resources.internalValue),
      timeouts: awsResourceSetTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set_name: {
        value: cdktn.stringToHclTerraform(this._resourceSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set_type: {
        value: cdktn.stringToHclTerraform(this._resourceSetType),
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
      resources: {
        value: cdktn.listMapperHcl(awsResourceSetResourcesPropertyToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResourceSet.ResourcesPropertyList",
      },
      timeouts: {
        value: awsResourceSetTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsResourceSet.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResourceSetNlbResourcePropertyToTerraform(struct?: AwsResourceSet.NlbResourcePropertyOutputReference | AwsResourceSet.NlbResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsResourceSetNlbResourcePropertyToHclTerraform(struct?: AwsResourceSet.NlbResourcePropertyOutputReference | AwsResourceSet.NlbResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceSetR53ResourcePropertyToTerraform(struct?: AwsResourceSet.R53ResourcePropertyOutputReference | AwsResourceSet.R53ResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    record_set_id: cdktn.stringToTerraform(struct!.recordSetId),
  }
}


export function awsResourceSetR53ResourcePropertyToHclTerraform(struct?: AwsResourceSet.R53ResourcePropertyOutputReference | AwsResourceSet.R53ResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_set_id: {
      value: cdktn.stringToHclTerraform(struct!.recordSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceSetTargetResourcePropertyToTerraform(struct?: AwsResourceSet.TargetResourcePropertyOutputReference | AwsResourceSet.TargetResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nlb_resource: awsResourceSetNlbResourcePropertyToTerraform(struct!.nlbResource),
    r53_resource: awsResourceSetR53ResourcePropertyToTerraform(struct!.r53Resource),
  }
}


export function awsResourceSetTargetResourcePropertyToHclTerraform(struct?: AwsResourceSet.TargetResourcePropertyOutputReference | AwsResourceSet.TargetResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nlb_resource: {
      value: awsResourceSetNlbResourcePropertyToHclTerraform(struct!.nlbResource),
      isBlock: true,
      type: "list",
      storageClassType: "NlbResourcePropertyList",
    },
    r53_resource: {
      value: awsResourceSetR53ResourcePropertyToHclTerraform(struct!.r53Resource),
      isBlock: true,
      type: "list",
      storageClassType: "R53ResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceSetDnsTargetResourcePropertyToTerraform(struct?: AwsResourceSet.DnsTargetResourcePropertyOutputReference | AwsResourceSet.DnsTargetResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    hosted_zone_arn: cdktn.stringToTerraform(struct!.hostedZoneArn),
    record_set_id: cdktn.stringToTerraform(struct!.recordSetId),
    record_type: cdktn.stringToTerraform(struct!.recordType),
    target_resource: awsResourceSetTargetResourcePropertyToTerraform(struct!.targetResource),
  }
}


export function awsResourceSetDnsTargetResourcePropertyToHclTerraform(struct?: AwsResourceSet.DnsTargetResourcePropertyOutputReference | AwsResourceSet.DnsTargetResourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_arn: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_set_id: {
      value: cdktn.stringToHclTerraform(struct!.recordSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktn.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource: {
      value: awsResourceSetTargetResourcePropertyToHclTerraform(struct!.targetResource),
      isBlock: true,
      type: "list",
      storageClassType: "TargetResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceSetResourcesPropertyToTerraform(struct?: AwsResourceSet.ResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    readiness_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.readinessScopes),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    dns_target_resource: awsResourceSetDnsTargetResourcePropertyToTerraform(struct!.dnsTargetResource),
  }
}


export function awsResourceSetResourcesPropertyToHclTerraform(struct?: AwsResourceSet.ResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    readiness_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.readinessScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_target_resource: {
      value: awsResourceSetDnsTargetResourcePropertyToHclTerraform(struct!.dnsTargetResource),
      isBlock: true,
      type: "list",
      storageClassType: "DnsTargetResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResourceSetTimeoutsPropertyToTerraform(struct?: AwsResourceSet.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsResourceSetTimeoutsPropertyToHclTerraform(struct?: AwsResourceSet.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsResourceSet {
export interface NlbResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#arn AwsResourceSet#arn}
  */
  readonly arn?: string;
}
export class NlbResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NlbResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface R53ResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#domain_name AwsResourceSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id AwsResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
}
export class R53ResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): R53ResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._recordSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R53ResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._recordSetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._recordSetId = value.recordSetId;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // record_set_id - computed: false, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }
}
export interface TargetResourceProperty {
  /**
  * nlb_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#nlb_resource AwsResourceSet#nlb_resource}
  */
  readonly nlbResource?: NlbResourceProperty;
  /**
  * r53_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#r53_resource AwsResourceSet#r53_resource}
  */
  readonly r53Resource?: R53ResourceProperty;
}
export class TargetResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nlbResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlbResource = this._nlbResource?.internalValue;
    }
    if (this._r53Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r53Resource = this._r53Resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nlbResource.internalValue = undefined;
      this._r53Resource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nlbResource.internalValue = value.nlbResource;
      this._r53Resource.internalValue = value.r53Resource;
    }
  }

  // nlb_resource - computed: false, optional: true, required: false
  private _nlbResource = new NlbResourcePropertyOutputReference(this, "nlb_resource");
  public get nlbResource() {
    return this._nlbResource;
  }
  public putNlbResource(value: NlbResourceProperty) {
    this._nlbResource.internalValue = value;
  }
  public resetNlbResource() {
    this._nlbResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlbResourceInput() {
    return this._nlbResource.internalValue;
  }

  // r53_resource - computed: false, optional: true, required: false
  private _r53Resource = new R53ResourcePropertyOutputReference(this, "r53_resource");
  public get r53Resource() {
    return this._r53Resource;
  }
  public putR53Resource(value: R53ResourceProperty) {
    this._r53Resource.internalValue = value;
  }
  public resetR53Resource() {
    this._r53Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r53ResourceInput() {
    return this._r53Resource.internalValue;
  }
}
export interface DnsTargetResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#domain_name AwsResourceSet#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#hosted_zone_arn AwsResourceSet#hosted_zone_arn}
  */
  readonly hostedZoneArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id AwsResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#record_type AwsResourceSet#record_type}
  */
  readonly recordType?: string;
  /**
  * target_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#target_resource AwsResourceSet#target_resource}
  */
  readonly targetResource?: TargetResourceProperty;
}
export class DnsTargetResourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTargetResourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._hostedZoneArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneArn = this._hostedZoneArn;
    }
    if (this._recordSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._targetResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResource = this._targetResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTargetResourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._hostedZoneArn = undefined;
      this._recordSetId = undefined;
      this._recordType = undefined;
      this._targetResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._hostedZoneArn = value.hostedZoneArn;
      this._recordSetId = value.recordSetId;
      this._recordType = value.recordType;
      this._targetResource.internalValue = value.targetResource;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // hosted_zone_arn - computed: false, optional: true, required: false
  private _hostedZoneArn?: string; 
  public get hostedZoneArn() {
    return this.getStringAttribute('hosted_zone_arn');
  }
  public set hostedZoneArn(value: string) {
    this._hostedZoneArn = value;
  }
  public resetHostedZoneArn() {
    this._hostedZoneArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneArnInput() {
    return this._hostedZoneArn;
  }

  // record_set_id - computed: false, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // target_resource - computed: false, optional: true, required: false
  private _targetResource = new TargetResourcePropertyOutputReference(this, "target_resource");
  public get targetResource() {
    return this._targetResource;
  }
  public putTargetResource(value: TargetResourceProperty) {
    this._targetResource.internalValue = value;
  }
  public resetTargetResource() {
    this._targetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource.internalValue;
  }
}
export interface ResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#readiness_scopes AwsResourceSet#readiness_scopes}
  */
  readonly readinessScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#resource_arn AwsResourceSet#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * dns_target_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#dns_target_resource AwsResourceSet#dns_target_resource}
  */
  readonly dnsTargetResource?: DnsTargetResourceProperty;
}
export class ResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readinessScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessScopes = this._readinessScopes;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._dnsTargetResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTargetResource = this._dnsTargetResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readinessScopes = undefined;
      this._resourceArn = undefined;
      this._dnsTargetResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readinessScopes = value.readinessScopes;
      this._resourceArn = value.resourceArn;
      this._dnsTargetResource.internalValue = value.dnsTargetResource;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // readiness_scopes - computed: false, optional: true, required: false
  private _readinessScopes?: string[]; 
  public get readinessScopes() {
    return this.getListAttribute('readiness_scopes');
  }
  public set readinessScopes(value: string[]) {
    this._readinessScopes = value;
  }
  public resetReadinessScopes() {
    this._readinessScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessScopesInput() {
    return this._readinessScopes;
  }

  // resource_arn - computed: false, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // dns_target_resource - computed: false, optional: true, required: false
  private _dnsTargetResource = new DnsTargetResourcePropertyOutputReference(this, "dns_target_resource");
  public get dnsTargetResource() {
    return this._dnsTargetResource;
  }
  public putDnsTargetResource(value: DnsTargetResourceProperty) {
    this._dnsTargetResource.internalValue = value;
  }
  public resetDnsTargetResource() {
    this._dnsTargetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTargetResourceInput() {
    return this._dnsTargetResource.internalValue;
  }
}

export class ResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourcesPropertyOutputReference {
    return new ResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53recoveryreadiness_resource_set#delete AwsResourceSet#delete}
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
