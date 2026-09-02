// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRecordsExclusiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#zone_id TfRecordsExclusive#zone_id}
  */
  readonly zoneId: string;
  /**
  * resource_record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#resource_record_set TfRecordsExclusive#resource_record_set}
  */
  readonly resourceRecordSet?: TfRecordsExclusive.ResourceRecordSetProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#timeouts TfRecordsExclusive#timeouts}
  */
  readonly timeouts?: TfRecordsExclusive.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}
*/
export class TfRecordsExclusive extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_records_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRecordsExclusive resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRecordsExclusive to import
  * @param importFromId The id of the existing TfRecordsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRecordsExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_records_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRecordsExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: TfRecordsExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_records_exclusive',
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
    this._zoneId = config.zoneId;
    this._resourceRecordSet.internalValue = config.resourceRecordSet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // resource_record_set - computed: false, optional: true, required: false
  private _resourceRecordSet = new TfRecordsExclusive.ResourceRecordSetPropertyList(this, "resource_record_set", true);
  public get resourceRecordSet() {
    return this._resourceRecordSet;
  }
  public putResourceRecordSet(value: TfRecordsExclusive.ResourceRecordSetProperty[] | cdktn.IResolvable) {
    this._resourceRecordSet.internalValue = value;
  }
  public resetResourceRecordSet() {
    this._resourceRecordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordSetInput() {
    return this._resourceRecordSet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfRecordsExclusive.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfRecordsExclusive.TimeoutsProperty) {
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
      zone_id: cdktn.stringToTerraform(this._zoneId),
      resource_record_set: cdktn.listMapper(tfRecordsExclusiveResourceRecordSetPropertyToTerraform, true)(this._resourceRecordSet.internalValue),
      timeouts: tfRecordsExclusiveTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zone_id: {
        value: cdktn.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_record_set: {
        value: cdktn.listMapperHcl(tfRecordsExclusiveResourceRecordSetPropertyToHclTerraform, true)(this._resourceRecordSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfRecordsExclusive.ResourceRecordSetPropertyList",
      },
      timeouts: {
        value: tfRecordsExclusiveTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfRecordsExclusive.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRecordsExclusiveAliasTargetPropertyToTerraform(struct?: TfRecordsExclusive.AliasTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_name: cdktn.stringToTerraform(struct!.dnsName),
    evaluate_target_health: cdktn.booleanToTerraform(struct!.evaluateTargetHealth),
    hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
  }
}


export function tfRecordsExclusiveAliasTargetPropertyToHclTerraform(struct?: TfRecordsExclusive.AliasTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_name: {
      value: cdktn.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate_target_health: {
      value: cdktn.booleanToHclTerraform(struct!.evaluateTargetHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosted_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveCidrRoutingConfigPropertyToTerraform(struct?: TfRecordsExclusive.CidrRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_id: cdktn.stringToTerraform(struct!.collectionId),
    location_name: cdktn.stringToTerraform(struct!.locationName),
  }
}


export function tfRecordsExclusiveCidrRoutingConfigPropertyToHclTerraform(struct?: TfRecordsExclusive.CidrRoutingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_id: {
      value: cdktn.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktn.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveGeolocationPropertyToTerraform(struct?: TfRecordsExclusive.GeolocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continent_code: cdktn.stringToTerraform(struct!.continentCode),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    subdivision_code: cdktn.stringToTerraform(struct!.subdivisionCode),
  }
}


export function tfRecordsExclusiveGeolocationPropertyToHclTerraform(struct?: TfRecordsExclusive.GeolocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continent_code: {
      value: cdktn.stringToHclTerraform(struct!.continentCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivision_code: {
      value: cdktn.stringToHclTerraform(struct!.subdivisionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveCoordinatesPropertyToTerraform(struct?: TfRecordsExclusive.CoordinatesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    latitude: cdktn.stringToTerraform(struct!.latitude),
    longitude: cdktn.stringToTerraform(struct!.longitude),
  }
}


export function tfRecordsExclusiveCoordinatesPropertyToHclTerraform(struct?: TfRecordsExclusive.CoordinatesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    latitude: {
      value: cdktn.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktn.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveGeoproximityLocationPropertyToTerraform(struct?: TfRecordsExclusive.GeoproximityLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    bias: cdktn.numberToTerraform(struct!.bias),
    local_zone_group: cdktn.stringToTerraform(struct!.localZoneGroup),
    coordinates: cdktn.listMapper(tfRecordsExclusiveCoordinatesPropertyToTerraform, true)(struct!.coordinates),
  }
}


export function tfRecordsExclusiveGeoproximityLocationPropertyToHclTerraform(struct?: TfRecordsExclusive.GeoproximityLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bias: {
      value: cdktn.numberToHclTerraform(struct!.bias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_zone_group: {
      value: cdktn.stringToHclTerraform(struct!.localZoneGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coordinates: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveCoordinatesPropertyToHclTerraform, true)(struct!.coordinates),
      isBlock: true,
      type: "list",
      storageClassType: "CoordinatesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveResourceRecordsPropertyToTerraform(struct?: TfRecordsExclusive.ResourceRecordsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfRecordsExclusiveResourceRecordsPropertyToHclTerraform(struct?: TfRecordsExclusive.ResourceRecordsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveResourceRecordSetPropertyToTerraform(struct?: TfRecordsExclusive.ResourceRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover: cdktn.stringToTerraform(struct!.failover),
    health_check_id: cdktn.stringToTerraform(struct!.healthCheckId),
    multi_value_answer: cdktn.booleanToTerraform(struct!.multiValueAnswer),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    set_identifier: cdktn.stringToTerraform(struct!.setIdentifier),
    traffic_policy_instance_id: cdktn.stringToTerraform(struct!.trafficPolicyInstanceId),
    ttl: cdktn.numberToTerraform(struct!.ttl),
    type: cdktn.stringToTerraform(struct!.type),
    weight: cdktn.numberToTerraform(struct!.weight),
    alias_target: cdktn.listMapper(tfRecordsExclusiveAliasTargetPropertyToTerraform, true)(struct!.aliasTarget),
    cidr_routing_config: cdktn.listMapper(tfRecordsExclusiveCidrRoutingConfigPropertyToTerraform, true)(struct!.cidrRoutingConfig),
    geolocation: cdktn.listMapper(tfRecordsExclusiveGeolocationPropertyToTerraform, true)(struct!.geolocation),
    geoproximity_location: cdktn.listMapper(tfRecordsExclusiveGeoproximityLocationPropertyToTerraform, true)(struct!.geoproximityLocation),
    resource_records: cdktn.listMapper(tfRecordsExclusiveResourceRecordsPropertyToTerraform, true)(struct!.resourceRecords),
  }
}


export function tfRecordsExclusiveResourceRecordSetPropertyToHclTerraform(struct?: TfRecordsExclusive.ResourceRecordSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover: {
      value: cdktn.stringToHclTerraform(struct!.failover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_id: {
      value: cdktn.stringToHclTerraform(struct!.healthCheckId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_answer: {
      value: cdktn.booleanToHclTerraform(struct!.multiValueAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_identifier: {
      value: cdktn.stringToHclTerraform(struct!.setIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_policy_instance_id: {
      value: cdktn.stringToHclTerraform(struct!.trafficPolicyInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktn.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alias_target: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveAliasTargetPropertyToHclTerraform, true)(struct!.aliasTarget),
      isBlock: true,
      type: "list",
      storageClassType: "AliasTargetPropertyList",
    },
    cidr_routing_config: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveCidrRoutingConfigPropertyToHclTerraform, true)(struct!.cidrRoutingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CidrRoutingConfigPropertyList",
    },
    geolocation: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveGeolocationPropertyToHclTerraform, true)(struct!.geolocation),
      isBlock: true,
      type: "list",
      storageClassType: "GeolocationPropertyList",
    },
    geoproximity_location: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveGeoproximityLocationPropertyToHclTerraform, true)(struct!.geoproximityLocation),
      isBlock: true,
      type: "list",
      storageClassType: "GeoproximityLocationPropertyList",
    },
    resource_records: {
      value: cdktn.listMapperHcl(tfRecordsExclusiveResourceRecordsPropertyToHclTerraform, true)(struct!.resourceRecords),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceRecordsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRecordsExclusiveTimeoutsPropertyToTerraform(struct?: TfRecordsExclusive.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function tfRecordsExclusiveTimeoutsPropertyToHclTerraform(struct?: TfRecordsExclusive.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfRecordsExclusive {
export interface AliasTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#dns_name TfRecordsExclusive#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#evaluate_target_health TfRecordsExclusive#evaluate_target_health}
  */
  readonly evaluateTargetHealth: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#hosted_zone_id TfRecordsExclusive#hosted_zone_id}
  */
  readonly hostedZoneId: string;
}
export class AliasTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AliasTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AliasTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._evaluateTargetHealth = undefined;
      this._hostedZoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._hostedZoneId = value.hostedZoneId;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // evaluate_target_health - computed: false, optional: false, required: true
  private _evaluateTargetHealth?: boolean | cdktn.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktn.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }
}

export class AliasTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : AliasTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): AliasTargetPropertyOutputReference {
    return new AliasTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CidrRoutingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#collection_id TfRecordsExclusive#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#location_name TfRecordsExclusive#location_name}
  */
  readonly locationName: string;
}
export class CidrRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CidrRoutingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CidrRoutingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionId = undefined;
      this._locationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionId = value.collectionId;
      this._locationName = value.locationName;
    }
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}

export class CidrRoutingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CidrRoutingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CidrRoutingConfigPropertyOutputReference {
    return new CidrRoutingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeolocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#continent_code TfRecordsExclusive#continent_code}
  */
  readonly continentCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#country_code TfRecordsExclusive#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#subdivision_code TfRecordsExclusive#subdivision_code}
  */
  readonly subdivisionCode?: string;
}
export class GeolocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeolocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continentCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.continentCode = this._continentCode;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._subdivisionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivisionCode = this._subdivisionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeolocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continentCode = undefined;
      this._countryCode = undefined;
      this._subdivisionCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continentCode = value.continentCode;
      this._countryCode = value.countryCode;
      this._subdivisionCode = value.subdivisionCode;
    }
  }

  // continent_code - computed: false, optional: true, required: false
  private _continentCode?: string; 
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }
  public set continentCode(value: string) {
    this._continentCode = value;
  }
  public resetContinentCode() {
    this._continentCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentCodeInput() {
    return this._continentCode;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // subdivision_code - computed: false, optional: true, required: false
  private _subdivisionCode?: string; 
  public get subdivisionCode() {
    return this.getStringAttribute('subdivision_code');
  }
  public set subdivisionCode(value: string) {
    this._subdivisionCode = value;
  }
  public resetSubdivisionCode() {
    this._subdivisionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionCodeInput() {
    return this._subdivisionCode;
  }
}

export class GeolocationPropertyList extends cdktn.ComplexList {
  public internalValue? : GeolocationProperty[] | cdktn.IResolvable

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
  public get(index: number): GeolocationPropertyOutputReference {
    return new GeolocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoordinatesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#latitude TfRecordsExclusive#latitude}
  */
  readonly latitude: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#longitude TfRecordsExclusive#longitude}
  */
  readonly longitude: string;
}
export class CoordinatesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoordinatesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoordinatesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}

export class CoordinatesPropertyList extends cdktn.ComplexList {
  public internalValue? : CoordinatesProperty[] | cdktn.IResolvable

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
  public get(index: number): CoordinatesPropertyOutputReference {
    return new CoordinatesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeoproximityLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#aws_region TfRecordsExclusive#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#bias TfRecordsExclusive#bias}
  */
  readonly bias?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#local_zone_group TfRecordsExclusive#local_zone_group}
  */
  readonly localZoneGroup?: string;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#coordinates TfRecordsExclusive#coordinates}
  */
  readonly coordinates?: CoordinatesProperty[] | cdktn.IResolvable;
}
export class GeoproximityLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeoproximityLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._bias !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias;
    }
    if (this._localZoneGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.localZoneGroup = this._localZoneGroup;
    }
    if (this._coordinates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeoproximityLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._bias = undefined;
      this._localZoneGroup = undefined;
      this._coordinates.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._bias = value.bias;
      this._localZoneGroup = value.localZoneGroup;
      this._coordinates.internalValue = value.coordinates;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // bias - computed: false, optional: true, required: false
  private _bias?: number; 
  public get bias() {
    return this.getNumberAttribute('bias');
  }
  public set bias(value: number) {
    this._bias = value;
  }
  public resetBias() {
    this._bias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias;
  }

  // local_zone_group - computed: false, optional: true, required: false
  private _localZoneGroup?: string; 
  public get localZoneGroup() {
    return this.getStringAttribute('local_zone_group');
  }
  public set localZoneGroup(value: string) {
    this._localZoneGroup = value;
  }
  public resetLocalZoneGroup() {
    this._localZoneGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localZoneGroupInput() {
    return this._localZoneGroup;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new CoordinatesPropertyList(this, "coordinates", false);
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: CoordinatesProperty[] | cdktn.IResolvable) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }
}

export class GeoproximityLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : GeoproximityLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): GeoproximityLocationPropertyOutputReference {
    return new GeoproximityLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceRecordsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#value TfRecordsExclusive#value}
  */
  readonly value: string;
}
export class ResourceRecordsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceRecordsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRecordsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourceRecordsPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceRecordsProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceRecordsPropertyOutputReference {
    return new ResourceRecordsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceRecordSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#failover TfRecordsExclusive#failover}
  */
  readonly failover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#health_check_id TfRecordsExclusive#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#multi_value_answer TfRecordsExclusive#multi_value_answer}
  */
  readonly multiValueAnswer?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#name TfRecordsExclusive#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#region TfRecordsExclusive#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#set_identifier TfRecordsExclusive#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id TfRecordsExclusive#traffic_policy_instance_id}
  */
  readonly trafficPolicyInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#ttl TfRecordsExclusive#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#type TfRecordsExclusive#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#weight TfRecordsExclusive#weight}
  */
  readonly weight?: number;
  /**
  * alias_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#alias_target TfRecordsExclusive#alias_target}
  */
  readonly aliasTarget?: AliasTargetProperty[] | cdktn.IResolvable;
  /**
  * cidr_routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#cidr_routing_config TfRecordsExclusive#cidr_routing_config}
  */
  readonly cidrRoutingConfig?: CidrRoutingConfigProperty[] | cdktn.IResolvable;
  /**
  * geolocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#geolocation TfRecordsExclusive#geolocation}
  */
  readonly geolocation?: GeolocationProperty[] | cdktn.IResolvable;
  /**
  * geoproximity_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#geoproximity_location TfRecordsExclusive#geoproximity_location}
  */
  readonly geoproximityLocation?: GeoproximityLocationProperty[] | cdktn.IResolvable;
  /**
  * resource_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#resource_records TfRecordsExclusive#resource_records}
  */
  readonly resourceRecords?: ResourceRecordsProperty[] | cdktn.IResolvable;
}
export class ResourceRecordSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceRecordSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._healthCheckId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckId = this._healthCheckId;
    }
    if (this._multiValueAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueAnswer = this._multiValueAnswer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._setIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIdentifier = this._setIdentifier;
    }
    if (this._trafficPolicyInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPolicyInstanceId = this._trafficPolicyInstanceId;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._aliasTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasTarget = this._aliasTarget?.internalValue;
    }
    if (this._cidrRoutingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRoutingConfig = this._cidrRoutingConfig?.internalValue;
    }
    if (this._geolocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocation = this._geolocation?.internalValue;
    }
    if (this._geoproximityLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoproximityLocation = this._geoproximityLocation?.internalValue;
    }
    if (this._resourceRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecords = this._resourceRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRecordSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failover = undefined;
      this._healthCheckId = undefined;
      this._multiValueAnswer = undefined;
      this._name = undefined;
      this._region = undefined;
      this._setIdentifier = undefined;
      this._trafficPolicyInstanceId = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._weight = undefined;
      this._aliasTarget.internalValue = undefined;
      this._cidrRoutingConfig.internalValue = undefined;
      this._geolocation.internalValue = undefined;
      this._geoproximityLocation.internalValue = undefined;
      this._resourceRecords.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failover = value.failover;
      this._healthCheckId = value.healthCheckId;
      this._multiValueAnswer = value.multiValueAnswer;
      this._name = value.name;
      this._region = value.region;
      this._setIdentifier = value.setIdentifier;
      this._trafficPolicyInstanceId = value.trafficPolicyInstanceId;
      this._ttl = value.ttl;
      this._type = value.type;
      this._weight = value.weight;
      this._aliasTarget.internalValue = value.aliasTarget;
      this._cidrRoutingConfig.internalValue = value.cidrRoutingConfig;
      this._geolocation.internalValue = value.geolocation;
      this._geoproximityLocation.internalValue = value.geoproximityLocation;
      this._resourceRecords.internalValue = value.resourceRecords;
    }
  }

  // failover - computed: false, optional: true, required: false
  private _failover?: string; 
  public get failover() {
    return this.getStringAttribute('failover');
  }
  public set failover(value: string) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string; 
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }
  public set healthCheckId(value: string) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
  }

  // multi_value_answer - computed: false, optional: true, required: false
  private _multiValueAnswer?: boolean | cdktn.IResolvable; 
  public get multiValueAnswer() {
    return this.getBooleanAttribute('multi_value_answer');
  }
  public set multiValueAnswer(value: boolean | cdktn.IResolvable) {
    this._multiValueAnswer = value;
  }
  public resetMultiValueAnswer() {
    this._multiValueAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueAnswerInput() {
    return this._multiValueAnswer;
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

  // region - computed: false, optional: true, required: false
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

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // traffic_policy_instance_id - computed: false, optional: true, required: false
  private _trafficPolicyInstanceId?: string; 
  public get trafficPolicyInstanceId() {
    return this.getStringAttribute('traffic_policy_instance_id');
  }
  public set trafficPolicyInstanceId(value: string) {
    this._trafficPolicyInstanceId = value;
  }
  public resetTrafficPolicyInstanceId() {
    this._trafficPolicyInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInstanceIdInput() {
    return this._trafficPolicyInstanceId;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // alias_target - computed: false, optional: true, required: false
  private _aliasTarget = new AliasTargetPropertyList(this, "alias_target", false);
  public get aliasTarget() {
    return this._aliasTarget;
  }
  public putAliasTarget(value: AliasTargetProperty[] | cdktn.IResolvable) {
    this._aliasTarget.internalValue = value;
  }
  public resetAliasTarget() {
    this._aliasTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasTargetInput() {
    return this._aliasTarget.internalValue;
  }

  // cidr_routing_config - computed: false, optional: true, required: false
  private _cidrRoutingConfig = new CidrRoutingConfigPropertyList(this, "cidr_routing_config", false);
  public get cidrRoutingConfig() {
    return this._cidrRoutingConfig;
  }
  public putCidrRoutingConfig(value: CidrRoutingConfigProperty[] | cdktn.IResolvable) {
    this._cidrRoutingConfig.internalValue = value;
  }
  public resetCidrRoutingConfig() {
    this._cidrRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRoutingConfigInput() {
    return this._cidrRoutingConfig.internalValue;
  }

  // geolocation - computed: false, optional: true, required: false
  private _geolocation = new GeolocationPropertyList(this, "geolocation", false);
  public get geolocation() {
    return this._geolocation;
  }
  public putGeolocation(value: GeolocationProperty[] | cdktn.IResolvable) {
    this._geolocation.internalValue = value;
  }
  public resetGeolocation() {
    this._geolocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationInput() {
    return this._geolocation.internalValue;
  }

  // geoproximity_location - computed: false, optional: true, required: false
  private _geoproximityLocation = new GeoproximityLocationPropertyList(this, "geoproximity_location", false);
  public get geoproximityLocation() {
    return this._geoproximityLocation;
  }
  public putGeoproximityLocation(value: GeoproximityLocationProperty[] | cdktn.IResolvable) {
    this._geoproximityLocation.internalValue = value;
  }
  public resetGeoproximityLocation() {
    this._geoproximityLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoproximityLocationInput() {
    return this._geoproximityLocation.internalValue;
  }

  // resource_records - computed: false, optional: true, required: false
  private _resourceRecords = new ResourceRecordsPropertyList(this, "resource_records", false);
  public get resourceRecords() {
    return this._resourceRecords;
  }
  public putResourceRecords(value: ResourceRecordsProperty[] | cdktn.IResolvable) {
    this._resourceRecords.internalValue = value;
  }
  public resetResourceRecords() {
    this._resourceRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordsInput() {
    return this._resourceRecords.internalValue;
  }
}

export class ResourceRecordSetPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceRecordSetProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceRecordSetPropertyOutputReference {
    return new ResourceRecordSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#create TfRecordsExclusive#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_records_exclusive#update TfRecordsExclusive#update}
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
}
