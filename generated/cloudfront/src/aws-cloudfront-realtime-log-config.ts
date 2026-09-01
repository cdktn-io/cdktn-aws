// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudfrontRealtimeLogConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#fields AwsCloudfrontRealtimeLogConfig#fields}
  */
  readonly fields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#id AwsCloudfrontRealtimeLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#name AwsCloudfrontRealtimeLogConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#sampling_rate AwsCloudfrontRealtimeLogConfig#sampling_rate}
  */
  readonly samplingRate: number;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#endpoint AwsCloudfrontRealtimeLogConfig#endpoint}
  */
  readonly endpoint: AwsCloudfrontRealtimeLogConfig.EndpointProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}
*/
export class AwsCloudfrontRealtimeLogConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_realtime_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudfrontRealtimeLogConfig to import
  * @param importFromId The id of the existing AwsCloudfrontRealtimeLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudfrontRealtimeLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_realtime_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudfrontRealtimeLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudfrontRealtimeLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_realtime_log_config',
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
    this._fields = config.fields;
    this._id = config.id;
    this._name = config.name;
    this._samplingRate = config.samplingRate;
    this._endpoint.internalValue = config.endpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return cdktn.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new AwsCloudfrontRealtimeLogConfig.EndpointPropertyOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: AwsCloudfrontRealtimeLogConfig.EndpointProperty) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._fields),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      sampling_rate: cdktn.numberToTerraform(this._samplingRate),
      endpoint: awsCloudfrontRealtimeLogConfigEndpointPropertyToTerraform(this._endpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      sampling_rate: {
        value: cdktn.numberToHclTerraform(this._samplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint: {
        value: awsCloudfrontRealtimeLogConfigEndpointPropertyToHclTerraform(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudfrontRealtimeLogConfig.EndpointPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudfrontRealtimeLogConfigKinesisStreamConfigPropertyToTerraform(struct?: AwsCloudfrontRealtimeLogConfig.KinesisStreamConfigPropertyOutputReference | AwsCloudfrontRealtimeLogConfig.KinesisStreamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function awsCloudfrontRealtimeLogConfigKinesisStreamConfigPropertyToHclTerraform(struct?: AwsCloudfrontRealtimeLogConfig.KinesisStreamConfigPropertyOutputReference | AwsCloudfrontRealtimeLogConfig.KinesisStreamConfigProperty): any {
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
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudfrontRealtimeLogConfigEndpointPropertyToTerraform(struct?: AwsCloudfrontRealtimeLogConfig.EndpointPropertyOutputReference | AwsCloudfrontRealtimeLogConfig.EndpointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_type: cdktn.stringToTerraform(struct!.streamType),
    kinesis_stream_config: awsCloudfrontRealtimeLogConfigKinesisStreamConfigPropertyToTerraform(struct!.kinesisStreamConfig),
  }
}


export function awsCloudfrontRealtimeLogConfigEndpointPropertyToHclTerraform(struct?: AwsCloudfrontRealtimeLogConfig.EndpointPropertyOutputReference | AwsCloudfrontRealtimeLogConfig.EndpointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stream_type: {
      value: cdktn.stringToHclTerraform(struct!.streamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_stream_config: {
      value: awsCloudfrontRealtimeLogConfigKinesisStreamConfigPropertyToHclTerraform(struct!.kinesisStreamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisStreamConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudfrontRealtimeLogConfig {
export interface KinesisStreamConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#role_arn AwsCloudfrontRealtimeLogConfig#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#stream_arn AwsCloudfrontRealtimeLogConfig#stream_arn}
  */
  readonly streamArn: string;
}
export class KinesisStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisStreamConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisStreamConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._streamArn = value.streamArn;
    }
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

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface EndpointProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#stream_type AwsCloudfrontRealtimeLogConfig#stream_type}
  */
  readonly streamType: string;
  /**
  * kinesis_stream_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config AwsCloudfrontRealtimeLogConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig: KinesisStreamConfigProperty;
}
export class EndpointPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamType = this._streamType;
    }
    if (this._kinesisStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamConfig = this._kinesisStreamConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamType = undefined;
      this._kinesisStreamConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamType = value.streamType;
      this._kinesisStreamConfig.internalValue = value.kinesisStreamConfig;
    }
  }

  // stream_type - computed: false, optional: false, required: true
  private _streamType?: string; 
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
  public set streamType(value: string) {
    this._streamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTypeInput() {
    return this._streamType;
  }

  // kinesis_stream_config - computed: false, optional: false, required: true
  private _kinesisStreamConfig = new KinesisStreamConfigPropertyOutputReference(this, "kinesis_stream_config");
  public get kinesisStreamConfig() {
    return this._kinesisStreamConfig;
  }
  public putKinesisStreamConfig(value: KinesisStreamConfigProperty) {
    this._kinesisStreamConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamConfigInput() {
    return this._kinesisStreamConfig.internalValue;
  }
}
}
