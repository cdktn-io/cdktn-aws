// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSubscriberConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#access_type AwsSubscriber#access_type}
  */
  readonly accessType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#region AwsSubscriber#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#subscriber_description AwsSubscriber#subscriber_description}
  */
  readonly subscriberDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#subscriber_name AwsSubscriber#subscriber_name}
  */
  readonly subscriberName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#tags AwsSubscriber#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#source AwsSubscriber#source}
  */
  readonly source?: AwsSubscriber.SourceProperty[] | cdktn.IResolvable;
  /**
  * subscriber_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#subscriber_identity AwsSubscriber#subscriber_identity}
  */
  readonly subscriberIdentity?: AwsSubscriber.SubscriberIdentityProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#timeouts AwsSubscriber#timeouts}
  */
  readonly timeouts?: AwsSubscriber.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}
*/
export class AwsSubscriber extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSubscriber resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSubscriber to import
  * @param importFromId The id of the existing AwsSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSubscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSubscriberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsSubscriberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_subscriber',
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
    this._accessType = config.accessType;
    this._region = config.region;
    this._subscriberDescription = config.subscriberDescription;
    this._subscriberName = config.subscriberName;
    this._tags = config.tags;
    this._source.internalValue = config.source;
    this._subscriberIdentity.internalValue = config.subscriberIdentity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_share_arn - computed: true, optional: false, required: false
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }

  // resource_share_name - computed: true, optional: false, required: false
  public get resourceShareName() {
    return this.getStringAttribute('resource_share_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }

  // subscriber_description - computed: false, optional: true, required: false
  private _subscriberDescription?: string; 
  public get subscriberDescription() {
    return this.getStringAttribute('subscriber_description');
  }
  public set subscriberDescription(value: string) {
    this._subscriberDescription = value;
  }
  public resetSubscriberDescription() {
    this._subscriberDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberDescriptionInput() {
    return this._subscriberDescription;
  }

  // subscriber_endpoint - computed: true, optional: false, required: false
  public get subscriberEndpoint() {
    return this.getStringAttribute('subscriber_endpoint');
  }

  // subscriber_name - computed: false, optional: true, required: false
  private _subscriberName?: string; 
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }
  public set subscriberName(value: string) {
    this._subscriberName = value;
  }
  public resetSubscriberName() {
    this._subscriberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberNameInput() {
    return this._subscriberName;
  }

  // subscriber_status - computed: true, optional: false, required: false
  public get subscriberStatus() {
    return this.getStringAttribute('subscriber_status');
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

  // source - computed: false, optional: true, required: false
  private _source = new AwsSubscriber.SourcePropertyList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: AwsSubscriber.SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // subscriber_identity - computed: false, optional: true, required: false
  private _subscriberIdentity = new AwsSubscriber.SubscriberIdentityPropertyList(this, "subscriber_identity", false);
  public get subscriberIdentity() {
    return this._subscriberIdentity;
  }
  public putSubscriberIdentity(value: AwsSubscriber.SubscriberIdentityProperty[] | cdktn.IResolvable) {
    this._subscriberIdentity.internalValue = value;
  }
  public resetSubscriberIdentity() {
    this._subscriberIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdentityInput() {
    return this._subscriberIdentity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsSubscriber.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsSubscriber.TimeoutsProperty) {
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
      access_type: cdktn.stringToTerraform(this._accessType),
      region: cdktn.stringToTerraform(this._region),
      subscriber_description: cdktn.stringToTerraform(this._subscriberDescription),
      subscriber_name: cdktn.stringToTerraform(this._subscriberName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      source: cdktn.listMapper(awsSubscriberSourcePropertyToTerraform, true)(this._source.internalValue),
      subscriber_identity: cdktn.listMapper(awsSubscriberSubscriberIdentityPropertyToTerraform, true)(this._subscriberIdentity.internalValue),
      timeouts: awsSubscriberTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktn.stringToHclTerraform(this._accessType),
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
      subscriber_description: {
        value: cdktn.stringToHclTerraform(this._subscriberDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_name: {
        value: cdktn.stringToHclTerraform(this._subscriberName),
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
      source: {
        value: cdktn.listMapperHcl(awsSubscriberSourcePropertyToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsSubscriber.SourcePropertyList",
      },
      subscriber_identity: {
        value: cdktn.listMapperHcl(awsSubscriberSubscriberIdentityPropertyToHclTerraform, true)(this._subscriberIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSubscriber.SubscriberIdentityPropertyList",
      },
      timeouts: {
        value: awsSubscriberTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsSubscriber.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSubscriberAwsLogSourceResourcePropertyToTerraform(struct?: AwsSubscriber.AwsLogSourceResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_name: cdktn.stringToTerraform(struct!.sourceName),
    source_version: cdktn.stringToTerraform(struct!.sourceVersion),
  }
}


export function awsSubscriberAwsLogSourceResourcePropertyToHclTerraform(struct?: AwsSubscriber.AwsLogSourceResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktn.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSubscriberAttributesPropertyToTerraform(struct?: AwsSubscriber.AttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsSubscriberAttributesPropertyToHclTerraform(struct?: AwsSubscriber.AttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsSubscriberProviderPropertyToTerraform(struct?: AwsSubscriber.ProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsSubscriberProviderPropertyToHclTerraform(struct?: AwsSubscriber.ProviderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsSubscriberCustomLogSourceResourcePropertyToTerraform(struct?: AwsSubscriber.CustomLogSourceResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_name: cdktn.stringToTerraform(struct!.sourceName),
    source_version: cdktn.stringToTerraform(struct!.sourceVersion),
  }
}


export function awsSubscriberCustomLogSourceResourcePropertyToHclTerraform(struct?: AwsSubscriber.CustomLogSourceResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktn.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSubscriberSourcePropertyToTerraform(struct?: AwsSubscriber.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_log_source_resource: cdktn.listMapper(awsSubscriberAwsLogSourceResourcePropertyToTerraform, true)(struct!.awsLogSourceResource),
    custom_log_source_resource: cdktn.listMapper(awsSubscriberCustomLogSourceResourcePropertyToTerraform, true)(struct!.customLogSourceResource),
  }
}


export function awsSubscriberSourcePropertyToHclTerraform(struct?: AwsSubscriber.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_log_source_resource: {
      value: cdktn.listMapperHcl(awsSubscriberAwsLogSourceResourcePropertyToHclTerraform, true)(struct!.awsLogSourceResource),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLogSourceResourcePropertyList",
    },
    custom_log_source_resource: {
      value: cdktn.listMapperHcl(awsSubscriberCustomLogSourceResourcePropertyToHclTerraform, true)(struct!.customLogSourceResource),
      isBlock: true,
      type: "list",
      storageClassType: "CustomLogSourceResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSubscriberSubscriberIdentityPropertyToTerraform(struct?: AwsSubscriber.SubscriberIdentityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id: cdktn.stringToTerraform(struct!.externalId),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function awsSubscriberSubscriberIdentityPropertyToHclTerraform(struct?: AwsSubscriber.SubscriberIdentityProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsSubscriberTimeoutsPropertyToTerraform(struct?: AwsSubscriber.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsSubscriberTimeoutsPropertyToHclTerraform(struct?: AwsSubscriber.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsSubscriber {
export interface AwsLogSourceResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#source_name AwsSubscriber#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#source_version AwsSubscriber#source_version}
  */
  readonly sourceVersion?: string;
}
export class AwsLogSourceResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AwsLogSourceResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLogSourceResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class AwsLogSourceResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : AwsLogSourceResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): AwsLogSourceResourcePropertyOutputReference {
    return new AwsLogSourceResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttributesProperty {
}
export class AttributesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AttributesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttributesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_arn - computed: true, optional: false, required: false
  public get crawlerArn() {
    return this.getStringAttribute('crawler_arn');
  }

  // database_arn - computed: true, optional: false, required: false
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }
}

export class AttributesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): AttributesPropertyOutputReference {
    return new AttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderProperty {
}
export class ProviderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProviderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class ProviderPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ProviderPropertyOutputReference {
    return new ProviderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomLogSourceResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#source_name AwsSubscriber#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#source_version AwsSubscriber#source_version}
  */
  readonly sourceVersion?: string;
}
export class CustomLogSourceResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomLogSourceResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomLogSourceResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new AttributesPropertyList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // provider - computed: true, optional: false, required: false
  private _provider = new ProviderPropertyList(this, "provider", false);
  public get provider() {
    return this._provider;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class CustomLogSourceResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : CustomLogSourceResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomLogSourceResourcePropertyOutputReference {
    return new CustomLogSourceResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * aws_log_source_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#aws_log_source_resource AwsSubscriber#aws_log_source_resource}
  */
  readonly awsLogSourceResource?: AwsLogSourceResourceProperty[] | cdktn.IResolvable;
  /**
  * custom_log_source_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#custom_log_source_resource AwsSubscriber#custom_log_source_resource}
  */
  readonly customLogSourceResource?: CustomLogSourceResourceProperty[] | cdktn.IResolvable;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsLogSourceResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLogSourceResource = this._awsLogSourceResource?.internalValue;
    }
    if (this._customLogSourceResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLogSourceResource = this._customLogSourceResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsLogSourceResource.internalValue = undefined;
      this._customLogSourceResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsLogSourceResource.internalValue = value.awsLogSourceResource;
      this._customLogSourceResource.internalValue = value.customLogSourceResource;
    }
  }

  // aws_log_source_resource - computed: false, optional: true, required: false
  private _awsLogSourceResource = new AwsLogSourceResourcePropertyList(this, "aws_log_source_resource", false);
  public get awsLogSourceResource() {
    return this._awsLogSourceResource;
  }
  public putAwsLogSourceResource(value: AwsLogSourceResourceProperty[] | cdktn.IResolvable) {
    this._awsLogSourceResource.internalValue = value;
  }
  public resetAwsLogSourceResource() {
    this._awsLogSourceResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLogSourceResourceInput() {
    return this._awsLogSourceResource.internalValue;
  }

  // custom_log_source_resource - computed: false, optional: true, required: false
  private _customLogSourceResource = new CustomLogSourceResourcePropertyList(this, "custom_log_source_resource", false);
  public get customLogSourceResource() {
    return this._customLogSourceResource;
  }
  public putCustomLogSourceResource(value: CustomLogSourceResourceProperty[] | cdktn.IResolvable) {
    this._customLogSourceResource.internalValue = value;
  }
  public resetCustomLogSourceResource() {
    this._customLogSourceResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogSourceResourceInput() {
    return this._customLogSourceResource.internalValue;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriberIdentityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#external_id AwsSubscriber#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#principal AwsSubscriber#principal}
  */
  readonly principal: string;
}
export class SubscriberIdentityPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriberIdentityProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriberIdentityProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._principal = value.principal;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

export class SubscriberIdentityPropertyList extends cdktn.ComplexList {
  public internalValue? : SubscriberIdentityProperty[] | cdktn.IResolvable

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
  public get(index: number): SubscriberIdentityPropertyOutputReference {
    return new SubscriberIdentityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#create AwsSubscriber#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#delete AwsSubscriber#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber#update AwsSubscriber#update}
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
