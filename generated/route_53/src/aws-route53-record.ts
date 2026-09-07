// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRecordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#allow_overwrite AwsRecord#allow_overwrite}
  */
  readonly allowOverwrite?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#health_check_id AwsRecord#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#id AwsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#multivalue_answer_routing_policy AwsRecord#multivalue_answer_routing_policy}
  */
  readonly multivalueAnswerRoutingPolicy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#name AwsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#records AwsRecord#records}
  */
  readonly records?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#set_identifier AwsRecord#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#ttl AwsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#type AwsRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#zone_id AwsRecord#zone_id}
  */
  readonly zoneId: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#alias AwsRecord#alias}
  */
  readonly alias?: AwsRecord.AliasProperty;
  /**
  * cidr_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#cidr_routing_policy AwsRecord#cidr_routing_policy}
  */
  readonly cidrRoutingPolicy?: AwsRecord.CidrRoutingPolicyProperty;
  /**
  * failover_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#failover_routing_policy AwsRecord#failover_routing_policy}
  */
  readonly failoverRoutingPolicy?: AwsRecord.FailoverRoutingPolicyProperty;
  /**
  * geolocation_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#geolocation_routing_policy AwsRecord#geolocation_routing_policy}
  */
  readonly geolocationRoutingPolicy?: AwsRecord.GeolocationRoutingPolicyProperty;
  /**
  * geoproximity_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#geoproximity_routing_policy AwsRecord#geoproximity_routing_policy}
  */
  readonly geoproximityRoutingPolicy?: AwsRecord.GeoproximityRoutingPolicyProperty;
  /**
  * latency_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#latency_routing_policy AwsRecord#latency_routing_policy}
  */
  readonly latencyRoutingPolicy?: AwsRecord.LatencyRoutingPolicyProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#timeouts AwsRecord#timeouts}
  */
  readonly timeouts?: AwsRecord.TimeoutsProperty;
  /**
  * weighted_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#weighted_routing_policy AwsRecord#weighted_routing_policy}
  */
  readonly weightedRoutingPolicy?: AwsRecord.WeightedRoutingPolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record aws_route53_record}
*/
export class AwsRecord extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRecord resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRecord to import
  * @param importFromId The id of the existing AwsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record aws_route53_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_record',
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
    this._allowOverwrite = config.allowOverwrite;
    this._healthCheckId = config.healthCheckId;
    this._id = config.id;
    this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
    this._name = config.name;
    this._records = config.records;
    this._setIdentifier = config.setIdentifier;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._alias.internalValue = config.alias;
    this._cidrRoutingPolicy.internalValue = config.cidrRoutingPolicy;
    this._failoverRoutingPolicy.internalValue = config.failoverRoutingPolicy;
    this._geolocationRoutingPolicy.internalValue = config.geolocationRoutingPolicy;
    this._geoproximityRoutingPolicy.internalValue = config.geoproximityRoutingPolicy;
    this._latencyRoutingPolicy.internalValue = config.latencyRoutingPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._weightedRoutingPolicy.internalValue = config.weightedRoutingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_overwrite - computed: true, optional: true, required: false
  private _allowOverwrite?: boolean | cdktn.IResolvable; 
  public get allowOverwrite() {
    return this.getBooleanAttribute('allow_overwrite');
  }
  public set allowOverwrite(value: boolean | cdktn.IResolvable) {
    this._allowOverwrite = value;
  }
  public resetAllowOverwrite() {
    this._allowOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverwriteInput() {
    return this._allowOverwrite;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // multivalue_answer_routing_policy - computed: false, optional: true, required: false
  private _multivalueAnswerRoutingPolicy?: boolean | cdktn.IResolvable; 
  public get multivalueAnswerRoutingPolicy() {
    return this.getBooleanAttribute('multivalue_answer_routing_policy');
  }
  public set multivalueAnswerRoutingPolicy(value: boolean | cdktn.IResolvable) {
    this._multivalueAnswerRoutingPolicy = value;
  }
  public resetMultivalueAnswerRoutingPolicy() {
    this._multivalueAnswerRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalueAnswerRoutingPolicyInput() {
    return this._multivalueAnswerRoutingPolicy;
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

  // records - computed: false, optional: true, required: false
  private _records?: string[]; 
  public get records() {
    return cdktn.Fn.tolist(this.getListAttribute('records'));
  }
  public set records(value: string[]) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
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

  // alias - computed: false, optional: true, required: false
  private _alias = new AwsRecord.AliasPropertyOutputReference(this, "alias");
  public get alias() {
    return this._alias;
  }
  public putAlias(value: AwsRecord.AliasProperty) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // cidr_routing_policy - computed: false, optional: true, required: false
  private _cidrRoutingPolicy = new AwsRecord.CidrRoutingPolicyPropertyOutputReference(this, "cidr_routing_policy");
  public get cidrRoutingPolicy() {
    return this._cidrRoutingPolicy;
  }
  public putCidrRoutingPolicy(value: AwsRecord.CidrRoutingPolicyProperty) {
    this._cidrRoutingPolicy.internalValue = value;
  }
  public resetCidrRoutingPolicy() {
    this._cidrRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRoutingPolicyInput() {
    return this._cidrRoutingPolicy.internalValue;
  }

  // failover_routing_policy - computed: false, optional: true, required: false
  private _failoverRoutingPolicy = new AwsRecord.FailoverRoutingPolicyPropertyOutputReference(this, "failover_routing_policy");
  public get failoverRoutingPolicy() {
    return this._failoverRoutingPolicy;
  }
  public putFailoverRoutingPolicy(value: AwsRecord.FailoverRoutingPolicyProperty) {
    this._failoverRoutingPolicy.internalValue = value;
  }
  public resetFailoverRoutingPolicy() {
    this._failoverRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRoutingPolicyInput() {
    return this._failoverRoutingPolicy.internalValue;
  }

  // geolocation_routing_policy - computed: false, optional: true, required: false
  private _geolocationRoutingPolicy = new AwsRecord.GeolocationRoutingPolicyPropertyOutputReference(this, "geolocation_routing_policy");
  public get geolocationRoutingPolicy() {
    return this._geolocationRoutingPolicy;
  }
  public putGeolocationRoutingPolicy(value: AwsRecord.GeolocationRoutingPolicyProperty) {
    this._geolocationRoutingPolicy.internalValue = value;
  }
  public resetGeolocationRoutingPolicy() {
    this._geolocationRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationRoutingPolicyInput() {
    return this._geolocationRoutingPolicy.internalValue;
  }

  // geoproximity_routing_policy - computed: false, optional: true, required: false
  private _geoproximityRoutingPolicy = new AwsRecord.GeoproximityRoutingPolicyPropertyOutputReference(this, "geoproximity_routing_policy");
  public get geoproximityRoutingPolicy() {
    return this._geoproximityRoutingPolicy;
  }
  public putGeoproximityRoutingPolicy(value: AwsRecord.GeoproximityRoutingPolicyProperty) {
    this._geoproximityRoutingPolicy.internalValue = value;
  }
  public resetGeoproximityRoutingPolicy() {
    this._geoproximityRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoproximityRoutingPolicyInput() {
    return this._geoproximityRoutingPolicy.internalValue;
  }

  // latency_routing_policy - computed: false, optional: true, required: false
  private _latencyRoutingPolicy = new AwsRecord.LatencyRoutingPolicyPropertyOutputReference(this, "latency_routing_policy");
  public get latencyRoutingPolicy() {
    return this._latencyRoutingPolicy;
  }
  public putLatencyRoutingPolicy(value: AwsRecord.LatencyRoutingPolicyProperty) {
    this._latencyRoutingPolicy.internalValue = value;
  }
  public resetLatencyRoutingPolicy() {
    this._latencyRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyRoutingPolicyInput() {
    return this._latencyRoutingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsRecord.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsRecord.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // weighted_routing_policy - computed: false, optional: true, required: false
  private _weightedRoutingPolicy = new AwsRecord.WeightedRoutingPolicyPropertyOutputReference(this, "weighted_routing_policy");
  public get weightedRoutingPolicy() {
    return this._weightedRoutingPolicy;
  }
  public putWeightedRoutingPolicy(value: AwsRecord.WeightedRoutingPolicyProperty) {
    this._weightedRoutingPolicy.internalValue = value;
  }
  public resetWeightedRoutingPolicy() {
    this._weightedRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRoutingPolicyInput() {
    return this._weightedRoutingPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overwrite: cdktn.booleanToTerraform(this._allowOverwrite),
      health_check_id: cdktn.stringToTerraform(this._healthCheckId),
      id: cdktn.stringToTerraform(this._id),
      multivalue_answer_routing_policy: cdktn.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
      name: cdktn.stringToTerraform(this._name),
      records: cdktn.listMapper(cdktn.stringToTerraform, false)(this._records),
      set_identifier: cdktn.stringToTerraform(this._setIdentifier),
      ttl: cdktn.numberToTerraform(this._ttl),
      type: cdktn.stringToTerraform(this._type),
      zone_id: cdktn.stringToTerraform(this._zoneId),
      alias: awsRecordAliasPropertyToTerraform(this._alias.internalValue),
      cidr_routing_policy: awsRecordCidrRoutingPolicyPropertyToTerraform(this._cidrRoutingPolicy.internalValue),
      failover_routing_policy: awsRecordFailoverRoutingPolicyPropertyToTerraform(this._failoverRoutingPolicy.internalValue),
      geolocation_routing_policy: awsRecordGeolocationRoutingPolicyPropertyToTerraform(this._geolocationRoutingPolicy.internalValue),
      geoproximity_routing_policy: awsRecordGeoproximityRoutingPolicyPropertyToTerraform(this._geoproximityRoutingPolicy.internalValue),
      latency_routing_policy: awsRecordLatencyRoutingPolicyPropertyToTerraform(this._latencyRoutingPolicy.internalValue),
      timeouts: awsRecordTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      weighted_routing_policy: awsRecordWeightedRoutingPolicyPropertyToTerraform(this._weightedRoutingPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_overwrite: {
        value: cdktn.booleanToHclTerraform(this._allowOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_id: {
        value: cdktn.stringToHclTerraform(this._healthCheckId),
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
      multivalue_answer_routing_policy: {
        value: cdktn.booleanToHclTerraform(this._multivalueAnswerRoutingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      records: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._records),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_identifier: {
        value: cdktn.stringToHclTerraform(this._setIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktn.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: awsRecordAliasPropertyToHclTerraform(this._alias.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.AliasPropertyList",
      },
      cidr_routing_policy: {
        value: awsRecordCidrRoutingPolicyPropertyToHclTerraform(this._cidrRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.CidrRoutingPolicyPropertyList",
      },
      failover_routing_policy: {
        value: awsRecordFailoverRoutingPolicyPropertyToHclTerraform(this._failoverRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.FailoverRoutingPolicyPropertyList",
      },
      geolocation_routing_policy: {
        value: awsRecordGeolocationRoutingPolicyPropertyToHclTerraform(this._geolocationRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.GeolocationRoutingPolicyPropertyList",
      },
      geoproximity_routing_policy: {
        value: awsRecordGeoproximityRoutingPolicyPropertyToHclTerraform(this._geoproximityRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.GeoproximityRoutingPolicyPropertyList",
      },
      latency_routing_policy: {
        value: awsRecordLatencyRoutingPolicyPropertyToHclTerraform(this._latencyRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.LatencyRoutingPolicyPropertyList",
      },
      timeouts: {
        value: awsRecordTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsRecord.TimeoutsProperty",
      },
      weighted_routing_policy: {
        value: awsRecordWeightedRoutingPolicyPropertyToHclTerraform(this._weightedRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRecord.WeightedRoutingPolicyPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRecordAliasPropertyToTerraform(struct?: AwsRecord.AliasPropertyOutputReference | AwsRecord.AliasProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate_target_health: cdktn.booleanToTerraform(struct!.evaluateTargetHealth),
    name: cdktn.stringToTerraform(struct!.name),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function awsRecordAliasPropertyToHclTerraform(struct?: AwsRecord.AliasPropertyOutputReference | AwsRecord.AliasProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate_target_health: {
      value: cdktn.booleanToHclTerraform(struct!.evaluateTargetHealth),
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
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRecordCidrRoutingPolicyPropertyToTerraform(struct?: AwsRecord.CidrRoutingPolicyPropertyOutputReference | AwsRecord.CidrRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_id: cdktn.stringToTerraform(struct!.collectionId),
    location_name: cdktn.stringToTerraform(struct!.locationName),
  }
}


export function awsRecordCidrRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.CidrRoutingPolicyPropertyOutputReference | AwsRecord.CidrRoutingPolicyProperty): any {
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


export function awsRecordFailoverRoutingPolicyPropertyToTerraform(struct?: AwsRecord.FailoverRoutingPolicyPropertyOutputReference | AwsRecord.FailoverRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsRecordFailoverRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.FailoverRoutingPolicyPropertyOutputReference | AwsRecord.FailoverRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsRecordGeolocationRoutingPolicyPropertyToTerraform(struct?: AwsRecord.GeolocationRoutingPolicyPropertyOutputReference | AwsRecord.GeolocationRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continent: cdktn.stringToTerraform(struct!.continent),
    country: cdktn.stringToTerraform(struct!.country),
    subdivision: cdktn.stringToTerraform(struct!.subdivision),
  }
}


export function awsRecordGeolocationRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.GeolocationRoutingPolicyPropertyOutputReference | AwsRecord.GeolocationRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continent: {
      value: cdktn.stringToHclTerraform(struct!.continent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktn.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivision: {
      value: cdktn.stringToHclTerraform(struct!.subdivision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRecordCoordinatesPropertyToTerraform(struct?: AwsRecord.CoordinatesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    latitude: cdktn.stringToTerraform(struct!.latitude),
    longitude: cdktn.stringToTerraform(struct!.longitude),
  }
}


export function awsRecordCoordinatesPropertyToHclTerraform(struct?: AwsRecord.CoordinatesProperty | cdktn.IResolvable): any {
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


export function awsRecordGeoproximityRoutingPolicyPropertyToTerraform(struct?: AwsRecord.GeoproximityRoutingPolicyPropertyOutputReference | AwsRecord.GeoproximityRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    bias: cdktn.numberToTerraform(struct!.bias),
    local_zone_group: cdktn.stringToTerraform(struct!.localZoneGroup),
    coordinates: cdktn.listMapper(awsRecordCoordinatesPropertyToTerraform, true)(struct!.coordinates),
  }
}


export function awsRecordGeoproximityRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.GeoproximityRoutingPolicyPropertyOutputReference | AwsRecord.GeoproximityRoutingPolicyProperty): any {
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
      value: cdktn.listMapperHcl(awsRecordCoordinatesPropertyToHclTerraform, true)(struct!.coordinates),
      isBlock: true,
      type: "set",
      storageClassType: "CoordinatesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRecordLatencyRoutingPolicyPropertyToTerraform(struct?: AwsRecord.LatencyRoutingPolicyPropertyOutputReference | AwsRecord.LatencyRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsRecordLatencyRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.LatencyRoutingPolicyPropertyOutputReference | AwsRecord.LatencyRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRecordTimeoutsPropertyToTerraform(struct?: AwsRecord.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsRecordTimeoutsPropertyToHclTerraform(struct?: AwsRecord.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsRecordWeightedRoutingPolicyPropertyToTerraform(struct?: AwsRecord.WeightedRoutingPolicyPropertyOutputReference | AwsRecord.WeightedRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsRecordWeightedRoutingPolicyPropertyToHclTerraform(struct?: AwsRecord.WeightedRoutingPolicyPropertyOutputReference | AwsRecord.WeightedRoutingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRecord {
export interface AliasProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#evaluate_target_health AwsRecord#evaluate_target_health}
  */
  readonly evaluateTargetHealth: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#name AwsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#zone_id AwsRecord#zone_id}
  */
  readonly zoneId: string;
}
export class AliasPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AliasProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AliasProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluateTargetHealth = undefined;
      this._name = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._name = value.name;
      this._zoneId = value.zoneId;
    }
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
}
export interface CidrRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#collection_id AwsRecord#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#location_name AwsRecord#location_name}
  */
  readonly locationName: string;
}
export class CidrRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CidrRoutingPolicyProperty | undefined {
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

  public set internalValue(value: CidrRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionId = undefined;
      this._locationName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface FailoverRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#type AwsRecord#type}
  */
  readonly type: string;
}
export class FailoverRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverRoutingPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface GeolocationRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#continent AwsRecord#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#country AwsRecord#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#subdivision AwsRecord#subdivision}
  */
  readonly subdivision?: string;
}
export class GeolocationRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeolocationRoutingPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._subdivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivision = this._subdivision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeolocationRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continent = undefined;
      this._country = undefined;
      this._subdivision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continent = value.continent;
      this._country = value.country;
      this._subdivision = value.subdivision;
    }
  }

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // subdivision - computed: false, optional: true, required: false
  private _subdivision?: string; 
  public get subdivision() {
    return this.getStringAttribute('subdivision');
  }
  public set subdivision(value: string) {
    this._subdivision = value;
  }
  public resetSubdivision() {
    this._subdivision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionInput() {
    return this._subdivision;
  }
}
export interface CoordinatesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#latitude AwsRecord#latitude}
  */
  readonly latitude: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#longitude AwsRecord#longitude}
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
export interface GeoproximityRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#aws_region AwsRecord#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#bias AwsRecord#bias}
  */
  readonly bias?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#local_zone_group AwsRecord#local_zone_group}
  */
  readonly localZoneGroup?: string;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#coordinates AwsRecord#coordinates}
  */
  readonly coordinates?: CoordinatesProperty[] | cdktn.IResolvable;
}
export class GeoproximityRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeoproximityRoutingPolicyProperty | undefined {
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

  public set internalValue(value: GeoproximityRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._bias = undefined;
      this._localZoneGroup = undefined;
      this._coordinates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _coordinates = new CoordinatesPropertyList(this, "coordinates", true);
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
export interface LatencyRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#region AwsRecord#region}
  */
  readonly region: string;
}
export class LatencyRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LatencyRoutingPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LatencyRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#create AwsRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#delete AwsRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#update AwsRecord#update}
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
export interface WeightedRoutingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53_record#weight AwsRecord#weight}
  */
  readonly weight: number;
}
export class WeightedRoutingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WeightedRoutingPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WeightedRoutingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weight = value.weight;
    }
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
}
