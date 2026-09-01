// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAlbTargetGroupConfig extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#connection_termination AwsAlbTargetGroup#connection_termination}
    */
    readonly connectionTermination?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#deregistration_delay AwsAlbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#id AwsAlbTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#ip_address_type AwsAlbTargetGroup#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AwsAlbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#load_balancing_algorithm_type AwsAlbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AwsAlbTargetGroup#load_balancing_anomaly_mitigation}
    */
    readonly loadBalancingAnomalyMitigation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AwsAlbTargetGroup#load_balancing_cross_zone_enabled}
    */
    readonly loadBalancingCrossZoneEnabled?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#name AwsAlbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#name_prefix AwsAlbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#port AwsAlbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#preserve_client_ip AwsAlbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#protocol AwsAlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#protocol_version AwsAlbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#proxy_protocol_v2 AwsAlbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktn.IResolvable;
    /**
    * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#region AwsAlbTargetGroup#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#slow_start AwsAlbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#tags AwsAlbTargetGroup#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#tags_all AwsAlbTargetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#target_control_port AwsAlbTargetGroup#target_control_port}
    */
    readonly targetControlPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#target_type AwsAlbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#vpc_id AwsAlbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#health_check AwsAlbTargetGroup#health_check}
    */
    readonly healthCheck?: AwsAlbTargetGroup.HealthCheckProperty;
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#stickiness AwsAlbTargetGroup#stickiness}
    */
    readonly stickiness?: AwsAlbTargetGroup.StickinessProperty;
    /**
    * target_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#target_failover AwsAlbTargetGroup#target_failover}
    */
    readonly targetFailover?: AwsAlbTargetGroup.TargetFailoverProperty[] | cdktn.IResolvable;
    /**
    * target_group_health block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#target_group_health AwsAlbTargetGroup#target_group_health}
    */
    readonly targetGroupHealth?: AwsAlbTargetGroup.TargetGroupHealthProperty;
    /**
    * target_health_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#target_health_state AwsAlbTargetGroup#target_health_state}
    */
    readonly targetHealthState?: AwsAlbTargetGroup.TargetHealthStateProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group aws_alb_target_group}
*/
export class AwsAlbTargetGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "aws_alb_target_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a AwsAlbTargetGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AwsAlbTargetGroup to import
    * @param importFromId The id of the existing AwsAlbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AwsAlbTargetGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_alb_target_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group aws_alb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsAlbTargetGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: AwsAlbTargetGroupConfig = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_alb_target_group',
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
        this._connectionTermination = config.connectionTermination;
        this._deregistrationDelay = config.deregistrationDelay;
        this._id = config.id;
        this._ipAddressType = config.ipAddressType;
        this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
        this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
        this._loadBalancingAnomalyMitigation = config.loadBalancingAnomalyMitigation;
        this._loadBalancingCrossZoneEnabled = config.loadBalancingCrossZoneEnabled;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._port = config.port;
        this._preserveClientIp = config.preserveClientIp;
        this._protocol = config.protocol;
        this._protocolVersion = config.protocolVersion;
        this._proxyProtocolV2 = config.proxyProtocolV2;
        this._region = config.region;
        this._slowStart = config.slowStart;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._targetControlPort = config.targetControlPort;
        this._targetType = config.targetType;
        this._vpcId = config.vpcId;
        this._healthCheck.internalValue = config.healthCheck;
        this._stickiness.internalValue = config.stickiness;
        this._targetFailover.internalValue = config.targetFailover;
        this._targetGroupHealth.internalValue = config.targetGroupHealth;
        this._targetHealthState.internalValue = config.targetHealthState;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // arn_suffix - computed: true, optional: false, required: false
    public get arnSuffix() {
        return this.getStringAttribute('arn_suffix');
    }

    // connection_termination - computed: true, optional: true, required: false
    private _connectionTermination?: boolean | cdktn.IResolvable; 
    public get connectionTermination() {
        return this.getBooleanAttribute('connection_termination');
    }
    public set connectionTermination(value: boolean | cdktn.IResolvable) {
        this._connectionTermination = value;
    }
    public resetConnectionTermination() {
        this._connectionTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTerminationInput() {
        return this._connectionTermination;
    }

    // deregistration_delay - computed: false, optional: true, required: false
    private _deregistrationDelay?: string; 
    public get deregistrationDelay() {
        return this.getStringAttribute('deregistration_delay');
    }
    public set deregistrationDelay(value: string) {
        this._deregistrationDelay = value;
    }
    public resetDeregistrationDelay() {
        this._deregistrationDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deregistrationDelayInput() {
        return this._deregistrationDelay;
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

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // lambda_multi_value_headers_enabled - computed: false, optional: true, required: false
    private _lambdaMultiValueHeadersEnabled?: boolean | cdktn.IResolvable; 
    public get lambdaMultiValueHeadersEnabled() {
        return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
    }
    public set lambdaMultiValueHeadersEnabled(value: boolean | cdktn.IResolvable) {
        this._lambdaMultiValueHeadersEnabled = value;
    }
    public resetLambdaMultiValueHeadersEnabled() {
        this._lambdaMultiValueHeadersEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaMultiValueHeadersEnabledInput() {
        return this._lambdaMultiValueHeadersEnabled;
    }

    // load_balancer_arns - computed: true, optional: false, required: false
    public get loadBalancerArns() {
        return cdktn.Fn.tolist(this.getListAttribute('load_balancer_arns'));
    }

    // load_balancing_algorithm_type - computed: true, optional: true, required: false
    private _loadBalancingAlgorithmType?: string; 
    public get loadBalancingAlgorithmType() {
        return this.getStringAttribute('load_balancing_algorithm_type');
    }
    public set loadBalancingAlgorithmType(value: string) {
        this._loadBalancingAlgorithmType = value;
    }
    public resetLoadBalancingAlgorithmType() {
        this._loadBalancingAlgorithmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancingAlgorithmTypeInput() {
        return this._loadBalancingAlgorithmType;
    }

    // load_balancing_anomaly_mitigation - computed: true, optional: true, required: false
    private _loadBalancingAnomalyMitigation?: string; 
    public get loadBalancingAnomalyMitigation() {
        return this.getStringAttribute('load_balancing_anomaly_mitigation');
    }
    public set loadBalancingAnomalyMitigation(value: string) {
        this._loadBalancingAnomalyMitigation = value;
    }
    public resetLoadBalancingAnomalyMitigation() {
        this._loadBalancingAnomalyMitigation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancingAnomalyMitigationInput() {
        return this._loadBalancingAnomalyMitigation;
    }

    // load_balancing_cross_zone_enabled - computed: true, optional: true, required: false
    private _loadBalancingCrossZoneEnabled?: string; 
    public get loadBalancingCrossZoneEnabled() {
        return this.getStringAttribute('load_balancing_cross_zone_enabled');
    }
    public set loadBalancingCrossZoneEnabled(value: string) {
        this._loadBalancingCrossZoneEnabled = value;
    }
    public resetLoadBalancingCrossZoneEnabled() {
        this._loadBalancingCrossZoneEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancingCrossZoneEnabledInput() {
        return this._loadBalancingCrossZoneEnabled;
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

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string; 
    public get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
        this._namePrefix = value;
    }
    public resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
        return this._namePrefix;
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

    // preserve_client_ip - computed: true, optional: true, required: false
    private _preserveClientIp?: string; 
    public get preserveClientIp() {
        return this.getStringAttribute('preserve_client_ip');
    }
    public set preserveClientIp(value: string) {
        this._preserveClientIp = value;
    }
    public resetPreserveClientIp() {
        this._preserveClientIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveClientIpInput() {
        return this._preserveClientIp;
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // protocol_version - computed: true, optional: true, required: false
    private _protocolVersion?: string; 
    public get protocolVersion() {
        return this.getStringAttribute('protocol_version');
    }
    public set protocolVersion(value: string) {
        this._protocolVersion = value;
    }
    public resetProtocolVersion() {
        this._protocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolVersionInput() {
        return this._protocolVersion;
    }

    // proxy_protocol_v2 - computed: false, optional: true, required: false
    private _proxyProtocolV2?: boolean | cdktn.IResolvable; 
    public get proxyProtocolV2() {
        return this.getBooleanAttribute('proxy_protocol_v2');
    }
    public set proxyProtocolV2(value: boolean | cdktn.IResolvable) {
        this._proxyProtocolV2 = value;
    }
    public resetProxyProtocolV2() {
        this._proxyProtocolV2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyProtocolV2Input() {
        return this._proxyProtocolV2;
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

    // slow_start - computed: false, optional: true, required: false
    private _slowStart?: number; 
    public get slowStart() {
        return this.getNumberAttribute('slow_start');
    }
    public set slowStart(value: number) {
        this._slowStart = value;
    }
    public resetSlowStart() {
        this._slowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slowStartInput() {
        return this._slowStart;
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

    // target_control_port - computed: false, optional: true, required: false
    private _targetControlPort?: number; 
    public get targetControlPort() {
        return this.getNumberAttribute('target_control_port');
    }
    public set targetControlPort(value: number) {
        this._targetControlPort = value;
    }
    public resetTargetControlPort() {
        this._targetControlPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetControlPortInput() {
        return this._targetControlPort;
    }

    // target_type - computed: false, optional: true, required: false
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    public resetTargetType() {
        this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // health_check - computed: false, optional: true, required: false
    private _healthCheck = new AwsAlbTargetGroup.HealthCheckPropertyOutputReference(this, "health_check");
    public get healthCheck() {
        return this._healthCheck;
    }
    public putHealthCheck(value: AwsAlbTargetGroup.HealthCheckProperty) {
        this._healthCheck.internalValue = value;
    }
    public resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
        return this._healthCheck.internalValue;
    }

    // stickiness - computed: false, optional: true, required: false
    private _stickiness = new AwsAlbTargetGroup.StickinessPropertyOutputReference(this, "stickiness");
    public get stickiness() {
        return this._stickiness;
    }
    public putStickiness(value: AwsAlbTargetGroup.StickinessProperty) {
        this._stickiness.internalValue = value;
    }
    public resetStickiness() {
        this._stickiness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stickinessInput() {
        return this._stickiness.internalValue;
    }

    // target_failover - computed: false, optional: true, required: false
    private _targetFailover = new AwsAlbTargetGroup.TargetFailoverPropertyList(this, "target_failover", false);
    public get targetFailover() {
        return this._targetFailover;
    }
    public putTargetFailover(value: AwsAlbTargetGroup.TargetFailoverProperty[] | cdktn.IResolvable) {
        this._targetFailover.internalValue = value;
    }
    public resetTargetFailover() {
        this._targetFailover.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetFailoverInput() {
        return this._targetFailover.internalValue;
    }

    // target_group_health - computed: false, optional: true, required: false
    private _targetGroupHealth = new AwsAlbTargetGroup.TargetGroupHealthPropertyOutputReference(this, "target_group_health");
    public get targetGroupHealth() {
        return this._targetGroupHealth;
    }
    public putTargetGroupHealth(value: AwsAlbTargetGroup.TargetGroupHealthProperty) {
        this._targetGroupHealth.internalValue = value;
    }
    public resetTargetGroupHealth() {
        this._targetGroupHealth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupHealthInput() {
        return this._targetGroupHealth.internalValue;
    }

    // target_health_state - computed: false, optional: true, required: false
    private _targetHealthState = new AwsAlbTargetGroup.TargetHealthStatePropertyList(this, "target_health_state", false);
    public get targetHealthState() {
        return this._targetHealthState;
    }
    public putTargetHealthState(value: AwsAlbTargetGroup.TargetHealthStateProperty[] | cdktn.IResolvable) {
        this._targetHealthState.internalValue = value;
    }
    public resetTargetHealthState() {
        this._targetHealthState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetHealthStateInput() {
        return this._targetHealthState.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_termination: cdktn.booleanToTerraform(this._connectionTermination),
            deregistration_delay: cdktn.stringToTerraform(this._deregistrationDelay),
            id: cdktn.stringToTerraform(this._id),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            lambda_multi_value_headers_enabled: cdktn.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
            load_balancing_algorithm_type: cdktn.stringToTerraform(this._loadBalancingAlgorithmType),
            load_balancing_anomaly_mitigation: cdktn.stringToTerraform(this._loadBalancingAnomalyMitigation),
            load_balancing_cross_zone_enabled: cdktn.stringToTerraform(this._loadBalancingCrossZoneEnabled),
            name: cdktn.stringToTerraform(this._name),
            name_prefix: cdktn.stringToTerraform(this._namePrefix),
            port: cdktn.numberToTerraform(this._port),
            preserve_client_ip: cdktn.stringToTerraform(this._preserveClientIp),
            protocol: cdktn.stringToTerraform(this._protocol),
            protocol_version: cdktn.stringToTerraform(this._protocolVersion),
            proxy_protocol_v2: cdktn.booleanToTerraform(this._proxyProtocolV2),
            region: cdktn.stringToTerraform(this._region),
            slow_start: cdktn.numberToTerraform(this._slowStart),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
            target_control_port: cdktn.numberToTerraform(this._targetControlPort),
            target_type: cdktn.stringToTerraform(this._targetType),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
            health_check: awsAlbTargetGroupHealthCheckPropertyToTerraform(this._healthCheck.internalValue),
            stickiness: awsAlbTargetGroupStickinessPropertyToTerraform(this._stickiness.internalValue),
            target_failover: cdktn.listMapper(awsAlbTargetGroupTargetFailoverPropertyToTerraform, true)(this._targetFailover.internalValue),
            target_group_health: awsAlbTargetGroupTargetGroupHealthPropertyToTerraform(this._targetGroupHealth.internalValue),
            target_health_state: cdktn.listMapper(awsAlbTargetGroupTargetHealthStatePropertyToTerraform, true)(this._targetHealthState.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_termination: {
                value: cdktn.booleanToHclTerraform(this._connectionTermination),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            deregistration_delay: {
                value: cdktn.stringToHclTerraform(this._deregistrationDelay),
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
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_multi_value_headers_enabled: {
                value: cdktn.booleanToHclTerraform(this._lambdaMultiValueHeadersEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            load_balancing_algorithm_type: {
                value: cdktn.stringToHclTerraform(this._loadBalancingAlgorithmType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancing_anomaly_mitigation: {
                value: cdktn.stringToHclTerraform(this._loadBalancingAnomalyMitigation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancing_cross_zone_enabled: {
                value: cdktn.stringToHclTerraform(this._loadBalancingCrossZoneEnabled),
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
            name_prefix: {
                value: cdktn.stringToHclTerraform(this._namePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            preserve_client_ip: {
                value: cdktn.stringToHclTerraform(this._preserveClientIp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol_version: {
                value: cdktn.stringToHclTerraform(this._protocolVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxy_protocol_v2: {
                value: cdktn.booleanToHclTerraform(this._proxyProtocolV2),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            region: {
                value: cdktn.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slow_start: {
                value: cdktn.numberToHclTerraform(this._slowStart),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            target_control_port: {
                value: cdktn.numberToHclTerraform(this._targetControlPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_type: {
                value: cdktn.stringToHclTerraform(this._targetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check: {
                value: awsAlbTargetGroupHealthCheckPropertyToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AwsAlbTargetGroup.HealthCheckPropertyList",
            },
            stickiness: {
                value: awsAlbTargetGroupStickinessPropertyToHclTerraform(this._stickiness.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AwsAlbTargetGroup.StickinessPropertyList",
            },
            target_failover: {
                value: cdktn.listMapperHcl(awsAlbTargetGroupTargetFailoverPropertyToHclTerraform, true)(this._targetFailover.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AwsAlbTargetGroup.TargetFailoverPropertyList",
            },
            target_group_health: {
                value: awsAlbTargetGroupTargetGroupHealthPropertyToHclTerraform(this._targetGroupHealth.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AwsAlbTargetGroup.TargetGroupHealthPropertyList",
            },
            target_health_state: {
                value: cdktn.listMapperHcl(awsAlbTargetGroupTargetHealthStatePropertyToHclTerraform, true)(this._targetHealthState.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AwsAlbTargetGroup.TargetHealthStatePropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function awsAlbTargetGroupHealthCheckPropertyToTerraform(struct?: AwsAlbTargetGroup.HealthCheckPropertyOutputReference | AwsAlbTargetGroup.HealthCheckProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        healthy_threshold: cdktn.numberToTerraform(struct!.healthyThreshold),
        interval: cdktn.numberToTerraform(struct!.interval),
        matcher: cdktn.stringToTerraform(struct!.matcher),
        path: cdktn.stringToTerraform(struct!.path),
        port: cdktn.stringToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        timeout: cdktn.numberToTerraform(struct!.timeout),
        unhealthy_threshold: cdktn.numberToTerraform(struct!.unhealthyThreshold),
    }
}


export function awsAlbTargetGroupHealthCheckPropertyToHclTerraform(struct?: AwsAlbTargetGroup.HealthCheckPropertyOutputReference | AwsAlbTargetGroup.HealthCheckProperty): any {
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
        healthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        matcher: {
            value: cdktn.stringToHclTerraform(struct!.matcher),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktn.numberToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unhealthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.unhealthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAlbTargetGroupStickinessPropertyToTerraform(struct?: AwsAlbTargetGroup.StickinessPropertyOutputReference | AwsAlbTargetGroup.StickinessProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookie_duration: cdktn.numberToTerraform(struct!.cookieDuration),
        cookie_name: cdktn.stringToTerraform(struct!.cookieName),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function awsAlbTargetGroupStickinessPropertyToHclTerraform(struct?: AwsAlbTargetGroup.StickinessPropertyOutputReference | AwsAlbTargetGroup.StickinessProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookie_duration: {
            value: cdktn.numberToHclTerraform(struct!.cookieDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.cookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function awsAlbTargetGroupTargetFailoverPropertyToTerraform(struct?: AwsAlbTargetGroup.TargetFailoverProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_deregistration: cdktn.stringToTerraform(struct!.onDeregistration),
        on_unhealthy: cdktn.stringToTerraform(struct!.onUnhealthy),
    }
}


export function awsAlbTargetGroupTargetFailoverPropertyToHclTerraform(struct?: AwsAlbTargetGroup.TargetFailoverProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_deregistration: {
            value: cdktn.stringToHclTerraform(struct!.onDeregistration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_unhealthy: {
            value: cdktn.stringToHclTerraform(struct!.onUnhealthy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAlbTargetGroupDnsFailoverPropertyToTerraform(struct?: AwsAlbTargetGroup.DnsFailoverPropertyOutputReference | AwsAlbTargetGroup.DnsFailoverProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        minimum_healthy_targets_count: cdktn.stringToTerraform(struct!.minimumHealthyTargetsCount),
        minimum_healthy_targets_percentage: cdktn.stringToTerraform(struct!.minimumHealthyTargetsPercentage),
    }
}


export function awsAlbTargetGroupDnsFailoverPropertyToHclTerraform(struct?: AwsAlbTargetGroup.DnsFailoverPropertyOutputReference | AwsAlbTargetGroup.DnsFailoverProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        minimum_healthy_targets_count: {
            value: cdktn.stringToHclTerraform(struct!.minimumHealthyTargetsCount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        minimum_healthy_targets_percentage: {
            value: cdktn.stringToHclTerraform(struct!.minimumHealthyTargetsPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAlbTargetGroupUnhealthyStateRoutingPropertyToTerraform(struct?: AwsAlbTargetGroup.UnhealthyStateRoutingPropertyOutputReference | AwsAlbTargetGroup.UnhealthyStateRoutingProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        minimum_healthy_targets_count: cdktn.numberToTerraform(struct!.minimumHealthyTargetsCount),
        minimum_healthy_targets_percentage: cdktn.stringToTerraform(struct!.minimumHealthyTargetsPercentage),
    }
}


export function awsAlbTargetGroupUnhealthyStateRoutingPropertyToHclTerraform(struct?: AwsAlbTargetGroup.UnhealthyStateRoutingPropertyOutputReference | AwsAlbTargetGroup.UnhealthyStateRoutingProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        minimum_healthy_targets_count: {
            value: cdktn.numberToHclTerraform(struct!.minimumHealthyTargetsCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_healthy_targets_percentage: {
            value: cdktn.stringToHclTerraform(struct!.minimumHealthyTargetsPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAlbTargetGroupTargetGroupHealthPropertyToTerraform(struct?: AwsAlbTargetGroup.TargetGroupHealthPropertyOutputReference | AwsAlbTargetGroup.TargetGroupHealthProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_failover: awsAlbTargetGroupDnsFailoverPropertyToTerraform(struct!.dnsFailover),
        unhealthy_state_routing: awsAlbTargetGroupUnhealthyStateRoutingPropertyToTerraform(struct!.unhealthyStateRouting),
    }
}


export function awsAlbTargetGroupTargetGroupHealthPropertyToHclTerraform(struct?: AwsAlbTargetGroup.TargetGroupHealthPropertyOutputReference | AwsAlbTargetGroup.TargetGroupHealthProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_failover: {
            value: awsAlbTargetGroupDnsFailoverPropertyToHclTerraform(struct!.dnsFailover),
            isBlock: true,
            type: "list",
            storageClassType: "DnsFailoverPropertyList",
        },
        unhealthy_state_routing: {
            value: awsAlbTargetGroupUnhealthyStateRoutingPropertyToHclTerraform(struct!.unhealthyStateRouting),
            isBlock: true,
            type: "list",
            storageClassType: "UnhealthyStateRoutingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAlbTargetGroupTargetHealthStatePropertyToTerraform(struct?: AwsAlbTargetGroup.TargetHealthStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_unhealthy_connection_termination: cdktn.booleanToTerraform(struct!.enableUnhealthyConnectionTermination),
        unhealthy_draining_interval: cdktn.numberToTerraform(struct!.unhealthyDrainingInterval),
    }
}


export function awsAlbTargetGroupTargetHealthStatePropertyToHclTerraform(struct?: AwsAlbTargetGroup.TargetHealthStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_unhealthy_connection_termination: {
            value: cdktn.booleanToHclTerraform(struct!.enableUnhealthyConnectionTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        unhealthy_draining_interval: {
            value: cdktn.numberToHclTerraform(struct!.unhealthyDrainingInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAlbTargetGroup {
export interface HealthCheckProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#enabled AwsAlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#healthy_threshold AwsAlbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#interval AwsAlbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#matcher AwsAlbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#path AwsAlbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#port AwsAlbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#protocol AwsAlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#timeout AwsAlbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#unhealthy_threshold AwsAlbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export class HealthCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false, 0);
    }

    public get internalValue(): HealthCheckProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._healthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._matcher !== undefined) {
            hasAnyValues = true;
            internalValueResult.matcher = this._matcher;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._unhealthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._healthyThreshold = undefined;
            this._interval = undefined;
            this._matcher = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._timeout = undefined;
            this._unhealthyThreshold = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._healthyThreshold = value.healthyThreshold;
            this._interval = value.interval;
            this._matcher = value.matcher;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._timeout = value.timeout;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // healthy_threshold - computed: false, optional: true, required: false
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
        this._healthyThreshold = value;
    }
    public resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
        return this._healthyThreshold;
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // matcher - computed: true, optional: true, required: false
    private _matcher?: string; 
    public get matcher() {
        return this.getStringAttribute('matcher');
    }
    public set matcher(value: string) {
        this._matcher = value;
    }
    public resetMatcher() {
        this._matcher = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matcherInput() {
        return this._matcher;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // port - computed: false, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // unhealthy_threshold - computed: false, optional: true, required: false
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
        this._unhealthyThreshold = value;
    }
    public resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
export interface StickinessProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#cookie_duration AwsAlbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#cookie_name AwsAlbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#enabled AwsAlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#type AwsAlbTargetGroup#type}
    */
    readonly type: string;
}
export class StickinessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false, 0);
    }

    public get internalValue(): StickinessProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookieDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieDuration = this._cookieDuration;
        }
        if (this._cookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieName = this._cookieName;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StickinessProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cookieDuration = undefined;
            this._cookieName = undefined;
            this._enabled = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cookieDuration = value.cookieDuration;
            this._cookieName = value.cookieName;
            this._enabled = value.enabled;
            this._type = value.type;
        }
    }

    // cookie_duration - computed: false, optional: true, required: false
    private _cookieDuration?: number; 
    public get cookieDuration() {
        return this.getNumberAttribute('cookie_duration');
    }
    public set cookieDuration(value: number) {
        this._cookieDuration = value;
    }
    public resetCookieDuration() {
        this._cookieDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieDurationInput() {
        return this._cookieDuration;
    }

    // cookie_name - computed: false, optional: true, required: false
    private _cookieName?: string; 
    public get cookieName() {
        return this.getStringAttribute('cookie_name');
    }
    public set cookieName(value: string) {
        this._cookieName = value;
    }
    public resetCookieName() {
        this._cookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieNameInput() {
        return this._cookieName;
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
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
export interface TargetFailoverProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#on_deregistration AwsAlbTargetGroup#on_deregistration}
    */
    readonly onDeregistration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#on_unhealthy AwsAlbTargetGroup#on_unhealthy}
    */
    readonly onUnhealthy: string;
}
export class TargetFailoverPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetFailoverProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onDeregistration !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDeregistration = this._onDeregistration;
        }
        if (this._onUnhealthy !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnhealthy = this._onUnhealthy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetFailoverProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onDeregistration = undefined;
            this._onUnhealthy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onDeregistration = value.onDeregistration;
            this._onUnhealthy = value.onUnhealthy;
        }
    }

    // on_deregistration - computed: false, optional: false, required: true
    private _onDeregistration?: string; 
    public get onDeregistration() {
        return this.getStringAttribute('on_deregistration');
    }
    public set onDeregistration(value: string) {
        this._onDeregistration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get onDeregistrationInput() {
        return this._onDeregistration;
    }

    // on_unhealthy - computed: false, optional: false, required: true
    private _onUnhealthy?: string; 
    public get onUnhealthy() {
        return this.getStringAttribute('on_unhealthy');
    }
    public set onUnhealthy(value: string) {
        this._onUnhealthy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get onUnhealthyInput() {
        return this._onUnhealthy;
    }
}

export class TargetFailoverPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetFailoverProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetFailoverPropertyOutputReference {
        return new TargetFailoverPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DnsFailoverProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#minimum_healthy_targets_count AwsAlbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AwsAlbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export class DnsFailoverPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false, 0);
    }

    public get internalValue(): DnsFailoverProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minimumHealthyTargetsCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyTargetsCount = this._minimumHealthyTargetsCount;
        }
        if (this._minimumHealthyTargetsPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyTargetsPercentage = this._minimumHealthyTargetsPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsFailoverProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minimumHealthyTargetsCount = undefined;
            this._minimumHealthyTargetsPercentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minimumHealthyTargetsCount = value.minimumHealthyTargetsCount;
            this._minimumHealthyTargetsPercentage = value.minimumHealthyTargetsPercentage;
        }
    }

    // minimum_healthy_targets_count - computed: false, optional: true, required: false
    private _minimumHealthyTargetsCount?: string; 
    public get minimumHealthyTargetsCount() {
        return this.getStringAttribute('minimum_healthy_targets_count');
    }
    public set minimumHealthyTargetsCount(value: string) {
        this._minimumHealthyTargetsCount = value;
    }
    public resetMinimumHealthyTargetsCount() {
        this._minimumHealthyTargetsCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyTargetsCountInput() {
        return this._minimumHealthyTargetsCount;
    }

    // minimum_healthy_targets_percentage - computed: false, optional: true, required: false
    private _minimumHealthyTargetsPercentage?: string; 
    public get minimumHealthyTargetsPercentage() {
        return this.getStringAttribute('minimum_healthy_targets_percentage');
    }
    public set minimumHealthyTargetsPercentage(value: string) {
        this._minimumHealthyTargetsPercentage = value;
    }
    public resetMinimumHealthyTargetsPercentage() {
        this._minimumHealthyTargetsPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyTargetsPercentageInput() {
        return this._minimumHealthyTargetsPercentage;
    }
}
export interface UnhealthyStateRoutingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#minimum_healthy_targets_count AwsAlbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AwsAlbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export class UnhealthyStateRoutingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false, 0);
    }

    public get internalValue(): UnhealthyStateRoutingProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minimumHealthyTargetsCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyTargetsCount = this._minimumHealthyTargetsCount;
        }
        if (this._minimumHealthyTargetsPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyTargetsPercentage = this._minimumHealthyTargetsPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnhealthyStateRoutingProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minimumHealthyTargetsCount = undefined;
            this._minimumHealthyTargetsPercentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minimumHealthyTargetsCount = value.minimumHealthyTargetsCount;
            this._minimumHealthyTargetsPercentage = value.minimumHealthyTargetsPercentage;
        }
    }

    // minimum_healthy_targets_count - computed: false, optional: true, required: false
    private _minimumHealthyTargetsCount?: number; 
    public get minimumHealthyTargetsCount() {
        return this.getNumberAttribute('minimum_healthy_targets_count');
    }
    public set minimumHealthyTargetsCount(value: number) {
        this._minimumHealthyTargetsCount = value;
    }
    public resetMinimumHealthyTargetsCount() {
        this._minimumHealthyTargetsCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyTargetsCountInput() {
        return this._minimumHealthyTargetsCount;
    }

    // minimum_healthy_targets_percentage - computed: false, optional: true, required: false
    private _minimumHealthyTargetsPercentage?: string; 
    public get minimumHealthyTargetsPercentage() {
        return this.getStringAttribute('minimum_healthy_targets_percentage');
    }
    public set minimumHealthyTargetsPercentage(value: string) {
        this._minimumHealthyTargetsPercentage = value;
    }
    public resetMinimumHealthyTargetsPercentage() {
        this._minimumHealthyTargetsPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyTargetsPercentageInput() {
        return this._minimumHealthyTargetsPercentage;
    }
}
export interface TargetGroupHealthProperty {
    /**
    * dns_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#dns_failover AwsAlbTargetGroup#dns_failover}
    */
    readonly dnsFailover?: DnsFailoverProperty;
    /**
    * unhealthy_state_routing block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#unhealthy_state_routing AwsAlbTargetGroup#unhealthy_state_routing}
    */
    readonly unhealthyStateRouting?: UnhealthyStateRoutingProperty;
}
export class TargetGroupHealthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false, 0);
    }

    public get internalValue(): TargetGroupHealthProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsFailover?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsFailover = this._dnsFailover?.internalValue;
        }
        if (this._unhealthyStateRouting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyStateRouting = this._unhealthyStateRouting?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupHealthProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dnsFailover.internalValue = undefined;
            this._unhealthyStateRouting.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dnsFailover.internalValue = value.dnsFailover;
            this._unhealthyStateRouting.internalValue = value.unhealthyStateRouting;
        }
    }

    // dns_failover - computed: false, optional: true, required: false
    private _dnsFailover = new DnsFailoverPropertyOutputReference(this, "dns_failover");
    public get dnsFailover() {
        return this._dnsFailover;
    }
    public putDnsFailover(value: DnsFailoverProperty) {
        this._dnsFailover.internalValue = value;
    }
    public resetDnsFailover() {
        this._dnsFailover.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsFailoverInput() {
        return this._dnsFailover.internalValue;
    }

    // unhealthy_state_routing - computed: false, optional: true, required: false
    private _unhealthyStateRouting = new UnhealthyStateRoutingPropertyOutputReference(this, "unhealthy_state_routing");
    public get unhealthyStateRouting() {
        return this._unhealthyStateRouting;
    }
    public putUnhealthyStateRouting(value: UnhealthyStateRoutingProperty) {
        this._unhealthyStateRouting.internalValue = value;
    }
    public resetUnhealthyStateRouting() {
        this._unhealthyStateRouting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyStateRoutingInput() {
        return this._unhealthyStateRouting.internalValue;
    }
}
export interface TargetHealthStateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#enable_unhealthy_connection_termination AwsAlbTargetGroup#enable_unhealthy_connection_termination}
    */
    readonly enableUnhealthyConnectionTermination: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_target_group#unhealthy_draining_interval AwsAlbTargetGroup#unhealthy_draining_interval}
    */
    readonly unhealthyDrainingInterval?: number;
}
export class TargetHealthStatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetHealthStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableUnhealthyConnectionTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableUnhealthyConnectionTermination = this._enableUnhealthyConnectionTermination;
        }
        if (this._unhealthyDrainingInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyDrainingInterval = this._unhealthyDrainingInterval;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetHealthStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableUnhealthyConnectionTermination = undefined;
            this._unhealthyDrainingInterval = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableUnhealthyConnectionTermination = value.enableUnhealthyConnectionTermination;
            this._unhealthyDrainingInterval = value.unhealthyDrainingInterval;
        }
    }

    // enable_unhealthy_connection_termination - computed: false, optional: false, required: true
    private _enableUnhealthyConnectionTermination?: boolean | cdktn.IResolvable; 
    public get enableUnhealthyConnectionTermination() {
        return this.getBooleanAttribute('enable_unhealthy_connection_termination');
    }
    public set enableUnhealthyConnectionTermination(value: boolean | cdktn.IResolvable) {
        this._enableUnhealthyConnectionTermination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enableUnhealthyConnectionTerminationInput() {
        return this._enableUnhealthyConnectionTermination;
    }

    // unhealthy_draining_interval - computed: false, optional: true, required: false
    private _unhealthyDrainingInterval?: number; 
    public get unhealthyDrainingInterval() {
        return this.getNumberAttribute('unhealthy_draining_interval');
    }
    public set unhealthyDrainingInterval(value: number) {
        this._unhealthyDrainingInterval = value;
    }
    public resetUnhealthyDrainingInterval() {
        this._unhealthyDrainingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyDrainingIntervalInput() {
        return this._unhealthyDrainingInterval;
    }
}

export class TargetHealthStatePropertyList extends cdktn.ComplexList {
    public internalValue? : TargetHealthStateProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetHealthStatePropertyOutputReference {
        return new TargetHealthStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
