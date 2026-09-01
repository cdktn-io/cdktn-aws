// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsEc2NetworkInsightsAccessScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#region AwsEc2NetworkInsightsAccessScope#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#tags AwsEc2NetworkInsightsAccessScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * exclude_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#exclude_paths AwsEc2NetworkInsightsAccessScope#exclude_paths}
  */
  readonly excludePaths?: AwsEc2NetworkInsightsAccessScope.ExcludePathsProperty[] | cdktn.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#match_paths AwsEc2NetworkInsightsAccessScope#match_paths}
  */
  readonly matchPaths?: AwsEc2NetworkInsightsAccessScope.MatchPathsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope}
*/
export class AwsEc2NetworkInsightsAccessScope extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_network_insights_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEc2NetworkInsightsAccessScope to import
  * @param importFromId The id of the existing AwsEc2NetworkInsightsAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEc2NetworkInsightsAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_network_insights_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEc2NetworkInsightsAccessScopeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsEc2NetworkInsightsAccessScopeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_network_insights_access_scope',
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
    this._region = config.region;
    this._tags = config.tags;
    this._excludePaths.internalValue = config.excludePaths;
    this._matchPaths.internalValue = config.matchPaths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // exclude_paths - computed: false, optional: true, required: false
  private _excludePaths = new AwsEc2NetworkInsightsAccessScope.ExcludePathsPropertyList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }
  public putExcludePaths(value: AwsEc2NetworkInsightsAccessScope.ExcludePathsProperty[] | cdktn.IResolvable) {
    this._excludePaths.internalValue = value;
  }
  public resetExcludePaths() {
    this._excludePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths.internalValue;
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new AwsEc2NetworkInsightsAccessScope.MatchPathsPropertyList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: AwsEc2NetworkInsightsAccessScope.MatchPathsProperty[] | cdktn.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      exclude_paths: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsPropertyToTerraform, true)(this._excludePaths.internalValue),
      match_paths: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsPropertyToTerraform, true)(this._matchPaths.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      exclude_paths: {
        value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsPropertyToHclTerraform, true)(this._excludePaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEc2NetworkInsightsAccessScope.ExcludePathsPropertyList",
      },
      match_paths: {
        value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsPropertyToHclTerraform, true)(this._matchPaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEc2NetworkInsightsAccessScope.MatchPathsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementPropertyToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementPropertyToTerraform, true)(struct!.resourceStatement),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementPropertyToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsDestinationPacketHeaderStatementPropertyList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementPropertyToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsDestinationResourceStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourcePropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToTerraform, true)(struct!.resourceStatement),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsSourcePropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsSourcePacketHeaderStatementPropertyList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsSourceResourceStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeThroughResourcesPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ThroughResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToTerraform, true)(struct!.resourceStatement),
  }
}


export function awsEc2NetworkInsightsAccessScopeThroughResourcesPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ThroughResourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsThroughResourcesResourceStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPropertyToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeExcludePathsSourcePropertyToTerraform, true)(struct!.source),
    through_resources: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeThroughResourcesPropertyToTerraform, true)(struct!.throughResources),
  }
}


export function awsEc2NetworkInsightsAccessScopeExcludePathsPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.ExcludePathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsDestinationPropertyToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsDestinationPropertyList",
    },
    source: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeExcludePathsSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ExcludePathsSourcePropertyList",
    },
    through_resources: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeThroughResourcesPropertyToHclTerraform, true)(struct!.throughResources),
      isBlock: true,
      type: "list",
      storageClassType: "ThroughResourcesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToTerraform, true)(struct!.resourceStatement),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsDestinationPacketHeaderStatementPropertyList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsDestinationResourceStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourceResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourceResourceStatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourcePropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToTerraform, true)(struct!.resourceStatement),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsSourcePropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsSourcePacketHeaderStatementPropertyList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsSourceResourceStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsPropertyToTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPropertyToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(awsEc2NetworkInsightsAccessScopeMatchPathsSourcePropertyToTerraform, true)(struct!.source),
  }
}


export function awsEc2NetworkInsightsAccessScopeMatchPathsPropertyToHclTerraform(struct?: AwsEc2NetworkInsightsAccessScope.MatchPathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsDestinationPropertyToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsDestinationPropertyList",
    },
    source: {
      value: cdktn.listMapperHcl(awsEc2NetworkInsightsAccessScopeMatchPathsSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsEc2NetworkInsightsAccessScope {
export interface ExcludePathsDestinationPacketHeaderStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_addresses AwsEc2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_ports AwsEc2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists AwsEc2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#protocols AwsEc2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_addresses AwsEc2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_ports AwsEc2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists AwsEc2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}
export class ExcludePathsDestinationPacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class ExcludePathsDestinationPacketHeaderStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsDestinationPacketHeaderStatementPropertyOutputReference {
    return new ExcludePathsDestinationPacketHeaderStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsDestinationResourceStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_types AwsEc2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resources AwsEc2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}
export class ExcludePathsDestinationResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class ExcludePathsDestinationResourceStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsDestinationResourceStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsDestinationResourceStatementPropertyOutputReference {
    return new ExcludePathsDestinationResourceStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsDestinationProperty {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement AwsEc2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: ExcludePathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_statement AwsEc2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: ExcludePathsDestinationResourceStatementProperty[] | cdktn.IResolvable;
}
export class ExcludePathsDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new ExcludePathsDestinationPacketHeaderStatementPropertyList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: ExcludePathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new ExcludePathsDestinationResourceStatementPropertyList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: ExcludePathsDestinationResourceStatementProperty[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class ExcludePathsDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsDestinationPropertyOutputReference {
    return new ExcludePathsDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsSourcePacketHeaderStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_addresses AwsEc2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_ports AwsEc2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists AwsEc2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#protocols AwsEc2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_addresses AwsEc2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_ports AwsEc2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists AwsEc2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}
export class ExcludePathsSourcePacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class ExcludePathsSourcePacketHeaderStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsSourcePacketHeaderStatementPropertyOutputReference {
    return new ExcludePathsSourcePacketHeaderStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsSourceResourceStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_types AwsEc2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resources AwsEc2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}
export class ExcludePathsSourceResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class ExcludePathsSourceResourceStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsSourceResourceStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsSourceResourceStatementPropertyOutputReference {
    return new ExcludePathsSourceResourceStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsSourceProperty {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement AwsEc2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: ExcludePathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_statement AwsEc2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: ExcludePathsSourceResourceStatementProperty[] | cdktn.IResolvable;
}
export class ExcludePathsSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new ExcludePathsSourcePacketHeaderStatementPropertyList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: ExcludePathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new ExcludePathsSourceResourceStatementPropertyList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: ExcludePathsSourceResourceStatementProperty[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class ExcludePathsSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsSourcePropertyOutputReference {
    return new ExcludePathsSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsThroughResourcesResourceStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_types AwsEc2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resources AwsEc2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}
export class ExcludePathsThroughResourcesResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class ExcludePathsThroughResourcesResourceStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsThroughResourcesResourceStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsThroughResourcesResourceStatementPropertyOutputReference {
    return new ExcludePathsThroughResourcesResourceStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThroughResourcesProperty {
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_statement AwsEc2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: ExcludePathsThroughResourcesResourceStatementProperty[] | cdktn.IResolvable;
}
export class ThroughResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ThroughResourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThroughResourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new ExcludePathsThroughResourcesResourceStatementPropertyList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: ExcludePathsThroughResourcesResourceStatementProperty[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class ThroughResourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : ThroughResourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): ThroughResourcesPropertyOutputReference {
    return new ThroughResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExcludePathsProperty {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination AwsEc2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: ExcludePathsDestinationProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source AwsEc2NetworkInsightsAccessScope#source}
  */
  readonly source?: ExcludePathsSourceProperty[] | cdktn.IResolvable;
  /**
  * through_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#through_resources AwsEc2NetworkInsightsAccessScope#through_resources}
  */
  readonly throughResources?: ThroughResourcesProperty[] | cdktn.IResolvable;
}
export class ExcludePathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExcludePathsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._throughResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughResources = this._throughResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExcludePathsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._throughResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._throughResources.internalValue = value.throughResources;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ExcludePathsDestinationPropertyList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ExcludePathsDestinationProperty[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ExcludePathsSourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ExcludePathsSourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // through_resources - computed: false, optional: true, required: false
  private _throughResources = new ThroughResourcesPropertyList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
  public putThroughResources(value: ThroughResourcesProperty[] | cdktn.IResolvable) {
    this._throughResources.internalValue = value;
  }
  public resetThroughResources() {
    this._throughResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughResourcesInput() {
    return this._throughResources.internalValue;
  }
}

export class ExcludePathsPropertyList extends cdktn.ComplexList {
  public internalValue? : ExcludePathsProperty[] | cdktn.IResolvable

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
  public get(index: number): ExcludePathsPropertyOutputReference {
    return new ExcludePathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsDestinationPacketHeaderStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_addresses AwsEc2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_ports AwsEc2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists AwsEc2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#protocols AwsEc2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_addresses AwsEc2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_ports AwsEc2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists AwsEc2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}
export class MatchPathsDestinationPacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class MatchPathsDestinationPacketHeaderStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsDestinationPacketHeaderStatementPropertyOutputReference {
    return new MatchPathsDestinationPacketHeaderStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsDestinationResourceStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_types AwsEc2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resources AwsEc2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}
export class MatchPathsDestinationResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class MatchPathsDestinationResourceStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsDestinationResourceStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsDestinationResourceStatementPropertyOutputReference {
    return new MatchPathsDestinationResourceStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsDestinationProperty {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement AwsEc2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: MatchPathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_statement AwsEc2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: MatchPathsDestinationResourceStatementProperty[] | cdktn.IResolvable;
}
export class MatchPathsDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new MatchPathsDestinationPacketHeaderStatementPropertyList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: MatchPathsDestinationPacketHeaderStatementProperty[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new MatchPathsDestinationResourceStatementPropertyList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: MatchPathsDestinationResourceStatementProperty[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class MatchPathsDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsDestinationPropertyOutputReference {
    return new MatchPathsDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsSourcePacketHeaderStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_addresses AwsEc2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_ports AwsEc2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists AwsEc2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#protocols AwsEc2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_addresses AwsEc2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_ports AwsEc2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists AwsEc2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}
export class MatchPathsSourcePacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class MatchPathsSourcePacketHeaderStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsSourcePacketHeaderStatementPropertyOutputReference {
    return new MatchPathsSourcePacketHeaderStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsSourceResourceStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_types AwsEc2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resources AwsEc2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}
export class MatchPathsSourceResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsSourceResourceStatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsSourceResourceStatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class MatchPathsSourceResourceStatementPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsSourceResourceStatementProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsSourceResourceStatementPropertyOutputReference {
    return new MatchPathsSourceResourceStatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsSourceProperty {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement AwsEc2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: MatchPathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#resource_statement AwsEc2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: MatchPathsSourceResourceStatementProperty[] | cdktn.IResolvable;
}
export class MatchPathsSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new MatchPathsSourcePacketHeaderStatementPropertyList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: MatchPathsSourcePacketHeaderStatementProperty[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new MatchPathsSourceResourceStatementPropertyList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: MatchPathsSourceResourceStatementProperty[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class MatchPathsSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsSourcePropertyOutputReference {
    return new MatchPathsSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsProperty {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#destination AwsEc2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: MatchPathsDestinationProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_network_insights_access_scope#source AwsEc2NetworkInsightsAccessScope#source}
  */
  readonly source?: MatchPathsSourceProperty[] | cdktn.IResolvable;
}
export class MatchPathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new MatchPathsDestinationPropertyList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MatchPathsDestinationProperty[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new MatchPathsSourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: MatchPathsSourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class MatchPathsPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsPropertyOutputReference {
    return new MatchPathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
