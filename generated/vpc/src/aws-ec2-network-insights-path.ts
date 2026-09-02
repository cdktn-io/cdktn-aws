// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEc2NetworkInsightsPathConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination TfEc2NetworkInsightsPath#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_ip TfEc2NetworkInsightsPath#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_port TfEc2NetworkInsightsPath#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#id TfEc2NetworkInsightsPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#protocol TfEc2NetworkInsightsPath#protocol}
  */
  readonly protocol: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#region TfEc2NetworkInsightsPath#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source TfEc2NetworkInsightsPath#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source_ip TfEc2NetworkInsightsPath#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#tags TfEc2NetworkInsightsPath#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#tags_all TfEc2NetworkInsightsPath#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * filter_at_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#filter_at_destination TfEc2NetworkInsightsPath#filter_at_destination}
  */
  readonly filterAtDestination?: TfEc2NetworkInsightsPath.FilterAtDestinationProperty;
  /**
  * filter_at_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#filter_at_source TfEc2NetworkInsightsPath#filter_at_source}
  */
  readonly filterAtSource?: TfEc2NetworkInsightsPath.FilterAtSourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path}
*/
export class TfEc2NetworkInsightsPath extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_network_insights_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEc2NetworkInsightsPath resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEc2NetworkInsightsPath to import
  * @param importFromId The id of the existing TfEc2NetworkInsightsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEc2NetworkInsightsPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_network_insights_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEc2NetworkInsightsPathConfig
  */
  public constructor(scope: Construct, id: string, config: TfEc2NetworkInsightsPathConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_network_insights_path',
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
    this._destination = config.destination;
    this._destinationIp = config.destinationIp;
    this._destinationPort = config.destinationPort;
    this._id = config.id;
    this._protocol = config.protocol;
    this._region = config.region;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._filterAtDestination.internalValue = config.filterAtDestination;
    this._filterAtSource.internalValue = config.filterAtSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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

  // filter_at_destination - computed: false, optional: true, required: false
  private _filterAtDestination = new TfEc2NetworkInsightsPath.FilterAtDestinationPropertyOutputReference(this, "filter_at_destination");
  public get filterAtDestination() {
    return this._filterAtDestination;
  }
  public putFilterAtDestination(value: TfEc2NetworkInsightsPath.FilterAtDestinationProperty) {
    this._filterAtDestination.internalValue = value;
  }
  public resetFilterAtDestination() {
    this._filterAtDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAtDestinationInput() {
    return this._filterAtDestination.internalValue;
  }

  // filter_at_source - computed: false, optional: true, required: false
  private _filterAtSource = new TfEc2NetworkInsightsPath.FilterAtSourcePropertyOutputReference(this, "filter_at_source");
  public get filterAtSource() {
    return this._filterAtSource;
  }
  public putFilterAtSource(value: TfEc2NetworkInsightsPath.FilterAtSourceProperty) {
    this._filterAtSource.internalValue = value;
  }
  public resetFilterAtSource() {
    this._filterAtSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAtSourceInput() {
    return this._filterAtSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktn.stringToTerraform(this._destination),
      destination_ip: cdktn.stringToTerraform(this._destinationIp),
      destination_port: cdktn.numberToTerraform(this._destinationPort),
      id: cdktn.stringToTerraform(this._id),
      protocol: cdktn.stringToTerraform(this._protocol),
      region: cdktn.stringToTerraform(this._region),
      source: cdktn.stringToTerraform(this._source),
      source_ip: cdktn.stringToTerraform(this._sourceIp),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      filter_at_destination: tfEc2NetworkInsightsPathFilterAtDestinationPropertyToTerraform(this._filterAtDestination.internalValue),
      filter_at_source: tfEc2NetworkInsightsPathFilterAtSourcePropertyToTerraform(this._filterAtSource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: cdktn.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip: {
        value: cdktn.stringToHclTerraform(this._destinationIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktn.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktn.stringToHclTerraform(this._sourceIp),
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
      filter_at_destination: {
        value: tfEc2NetworkInsightsPathFilterAtDestinationPropertyToHclTerraform(this._filterAtDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEc2NetworkInsightsPath.FilterAtDestinationPropertyList",
      },
      filter_at_source: {
        value: tfEc2NetworkInsightsPathFilterAtSourcePropertyToHclTerraform(this._filterAtSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEc2NetworkInsightsPath.FilterAtSourcePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangePropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationDestinationPortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationDestinationPortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function tfEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangePropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationDestinationPortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationDestinationPortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEc2NetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationSourcePortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationSourcePortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function tfEc2NetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationSourcePortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationSourcePortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEc2NetworkInsightsPathFilterAtDestinationPropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationPropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
    source_address: cdktn.stringToTerraform(struct!.sourceAddress),
    destination_port_range: tfEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangePropertyToTerraform(struct!.destinationPortRange),
    source_port_range: tfEc2NetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToTerraform(struct!.sourcePortRange),
  }
}


export function tfEc2NetworkInsightsPathFilterAtDestinationPropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtDestinationPropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_address: {
      value: cdktn.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range: {
      value: tfEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangePropertyToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "FilterAtDestinationDestinationPortRangePropertyList",
    },
    source_port_range: {
      value: tfEc2NetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "FilterAtDestinationSourcePortRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEc2NetworkInsightsPathFilterAtSourceDestinationPortRangePropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourceDestinationPortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceDestinationPortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function tfEc2NetworkInsightsPathFilterAtSourceDestinationPortRangePropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourceDestinationPortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceDestinationPortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEc2NetworkInsightsPathFilterAtSourceSourcePortRangePropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourceSourcePortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceSourcePortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function tfEc2NetworkInsightsPathFilterAtSourceSourcePortRangePropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourceSourcePortRangePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceSourcePortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEc2NetworkInsightsPathFilterAtSourcePropertyToTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourcePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
    source_address: cdktn.stringToTerraform(struct!.sourceAddress),
    destination_port_range: tfEc2NetworkInsightsPathFilterAtSourceDestinationPortRangePropertyToTerraform(struct!.destinationPortRange),
    source_port_range: tfEc2NetworkInsightsPathFilterAtSourceSourcePortRangePropertyToTerraform(struct!.sourcePortRange),
  }
}


export function tfEc2NetworkInsightsPathFilterAtSourcePropertyToHclTerraform(struct?: TfEc2NetworkInsightsPath.FilterAtSourcePropertyOutputReference | TfEc2NetworkInsightsPath.FilterAtSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_address: {
      value: cdktn.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range: {
      value: tfEc2NetworkInsightsPathFilterAtSourceDestinationPortRangePropertyToHclTerraform(struct!.destinationPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "FilterAtSourceDestinationPortRangePropertyList",
    },
    source_port_range: {
      value: tfEc2NetworkInsightsPathFilterAtSourceSourcePortRangePropertyToHclTerraform(struct!.sourcePortRange),
      isBlock: true,
      type: "list",
      storageClassType: "FilterAtSourceSourcePortRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfEc2NetworkInsightsPath {
export interface FilterAtDestinationDestinationPortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#from_port TfEc2NetworkInsightsPath#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#to_port TfEc2NetworkInsightsPath#to_port}
  */
  readonly toPort?: number;
}
export class FilterAtDestinationDestinationPortRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtDestinationDestinationPortRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtDestinationDestinationPortRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}
export interface FilterAtDestinationSourcePortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#from_port TfEc2NetworkInsightsPath#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#to_port TfEc2NetworkInsightsPath#to_port}
  */
  readonly toPort?: number;
}
export class FilterAtDestinationSourcePortRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtDestinationSourcePortRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtDestinationSourcePortRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}
export interface FilterAtDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_address TfEc2NetworkInsightsPath#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source_address TfEc2NetworkInsightsPath#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_port_range TfEc2NetworkInsightsPath#destination_port_range}
  */
  readonly destinationPortRange?: FilterAtDestinationDestinationPortRangeProperty;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source_port_range TfEc2NetworkInsightsPath#source_port_range}
  */
  readonly sourcePortRange?: FilterAtDestinationSourcePortRangeProperty;
}
export class FilterAtDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._destinationPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
    }
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationAddress = undefined;
      this._sourceAddress = undefined;
      this._destinationPortRange.internalValue = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationAddress = value.destinationAddress;
      this._sourceAddress = value.sourceAddress;
      this._destinationPortRange.internalValue = value.destinationPortRange;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange = new FilterAtDestinationDestinationPortRangePropertyOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: FilterAtDestinationDestinationPortRangeProperty) {
    this._destinationPortRange.internalValue = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange.internalValue;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new FilterAtDestinationSourcePortRangePropertyOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: FilterAtDestinationSourcePortRangeProperty) {
    this._sourcePortRange.internalValue = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange.internalValue;
  }
}
export interface FilterAtSourceDestinationPortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#from_port TfEc2NetworkInsightsPath#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#to_port TfEc2NetworkInsightsPath#to_port}
  */
  readonly toPort?: number;
}
export class FilterAtSourceDestinationPortRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtSourceDestinationPortRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtSourceDestinationPortRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}
export interface FilterAtSourceSourcePortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#from_port TfEc2NetworkInsightsPath#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#to_port TfEc2NetworkInsightsPath#to_port}
  */
  readonly toPort?: number;
}
export class FilterAtSourceSourcePortRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtSourceSourcePortRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtSourceSourcePortRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}
export interface FilterAtSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_address TfEc2NetworkInsightsPath#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source_address TfEc2NetworkInsightsPath#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * destination_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#destination_port_range TfEc2NetworkInsightsPath#destination_port_range}
  */
  readonly destinationPortRange?: FilterAtSourceDestinationPortRangeProperty;
  /**
  * source_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_path#source_port_range TfEc2NetworkInsightsPath#source_port_range}
  */
  readonly sourcePortRange?: FilterAtSourceSourcePortRangeProperty;
}
export class FilterAtSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterAtSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._destinationPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
    }
    if (this._sourcePortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterAtSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationAddress = undefined;
      this._sourceAddress = undefined;
      this._destinationPortRange.internalValue = undefined;
      this._sourcePortRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationAddress = value.destinationAddress;
      this._sourceAddress = value.sourceAddress;
      this._destinationPortRange.internalValue = value.destinationPortRange;
      this._sourcePortRange.internalValue = value.sourcePortRange;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange = new FilterAtSourceDestinationPortRangePropertyOutputReference(this, "destination_port_range");
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public putDestinationPortRange(value: FilterAtSourceDestinationPortRangeProperty) {
    this._destinationPortRange.internalValue = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange.internalValue;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange = new FilterAtSourceSourcePortRangePropertyOutputReference(this, "source_port_range");
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public putSourcePortRange(value: FilterAtSourceSourcePortRangeProperty) {
    this._sourcePortRange.internalValue = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange.internalValue;
  }
}
}
