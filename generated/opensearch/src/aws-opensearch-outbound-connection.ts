// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsOutboundConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#accept_connection AwsOutboundConnection#accept_connection}
  */
  readonly acceptConnection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#connection_alias AwsOutboundConnection#connection_alias}
  */
  readonly connectionAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#connection_mode AwsOutboundConnection#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#id AwsOutboundConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#region AwsOutboundConnection#region}
  */
  readonly region?: string;
  /**
  * connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#connection_properties AwsOutboundConnection#connection_properties}
  */
  readonly connectionProperties?: AwsOutboundConnection.ConnectionPropertiesProperty;
  /**
  * local_domain_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#local_domain_info AwsOutboundConnection#local_domain_info}
  */
  readonly localDomainInfo: AwsOutboundConnection.LocalDomainInfoProperty;
  /**
  * remote_domain_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#remote_domain_info AwsOutboundConnection#remote_domain_info}
  */
  readonly remoteDomainInfo: AwsOutboundConnection.RemoteDomainInfoProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#timeouts AwsOutboundConnection#timeouts}
  */
  readonly timeouts?: AwsOutboundConnection.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection}
*/
export class AwsOutboundConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearch_outbound_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsOutboundConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsOutboundConnection to import
  * @param importFromId The id of the existing AwsOutboundConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsOutboundConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearch_outbound_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsOutboundConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsOutboundConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearch_outbound_connection',
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
    this._acceptConnection = config.acceptConnection;
    this._connectionAlias = config.connectionAlias;
    this._connectionMode = config.connectionMode;
    this._id = config.id;
    this._region = config.region;
    this._connectionProperties.internalValue = config.connectionProperties;
    this._localDomainInfo.internalValue = config.localDomainInfo;
    this._remoteDomainInfo.internalValue = config.remoteDomainInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_connection - computed: false, optional: true, required: false
  private _acceptConnection?: boolean | cdktn.IResolvable; 
  public get acceptConnection() {
    return this.getBooleanAttribute('accept_connection');
  }
  public set acceptConnection(value: boolean | cdktn.IResolvable) {
    this._acceptConnection = value;
  }
  public resetAcceptConnection() {
    this._acceptConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptConnectionInput() {
    return this._acceptConnection;
  }

  // connection_alias - computed: false, optional: false, required: true
  private _connectionAlias?: string; 
  public get connectionAlias() {
    return this.getStringAttribute('connection_alias');
  }
  public set connectionAlias(value: string) {
    this._connectionAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAliasInput() {
    return this._connectionAlias;
  }

  // connection_mode - computed: true, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
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

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties = new AwsOutboundConnection.ConnectionPropertiesPropertyOutputReference(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }
  public putConnectionProperties(value: AwsOutboundConnection.ConnectionPropertiesProperty) {
    this._connectionProperties.internalValue = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties.internalValue;
  }

  // local_domain_info - computed: false, optional: false, required: true
  private _localDomainInfo = new AwsOutboundConnection.LocalDomainInfoPropertyOutputReference(this, "local_domain_info");
  public get localDomainInfo() {
    return this._localDomainInfo;
  }
  public putLocalDomainInfo(value: AwsOutboundConnection.LocalDomainInfoProperty) {
    this._localDomainInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainInfoInput() {
    return this._localDomainInfo.internalValue;
  }

  // remote_domain_info - computed: false, optional: false, required: true
  private _remoteDomainInfo = new AwsOutboundConnection.RemoteDomainInfoPropertyOutputReference(this, "remote_domain_info");
  public get remoteDomainInfo() {
    return this._remoteDomainInfo;
  }
  public putRemoteDomainInfo(value: AwsOutboundConnection.RemoteDomainInfoProperty) {
    this._remoteDomainInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDomainInfoInput() {
    return this._remoteDomainInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsOutboundConnection.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsOutboundConnection.TimeoutsProperty) {
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
      accept_connection: cdktn.booleanToTerraform(this._acceptConnection),
      connection_alias: cdktn.stringToTerraform(this._connectionAlias),
      connection_mode: cdktn.stringToTerraform(this._connectionMode),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      connection_properties: awsOutboundConnectionConnectionPropertiesPropertyToTerraform(this._connectionProperties.internalValue),
      local_domain_info: awsOutboundConnectionLocalDomainInfoPropertyToTerraform(this._localDomainInfo.internalValue),
      remote_domain_info: awsOutboundConnectionRemoteDomainInfoPropertyToTerraform(this._remoteDomainInfo.internalValue),
      timeouts: awsOutboundConnectionTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_connection: {
        value: cdktn.booleanToHclTerraform(this._acceptConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_alias: {
        value: cdktn.stringToHclTerraform(this._connectionAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_mode: {
        value: cdktn.stringToHclTerraform(this._connectionMode),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_properties: {
        value: awsOutboundConnectionConnectionPropertiesPropertyToHclTerraform(this._connectionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsOutboundConnection.ConnectionPropertiesPropertyList",
      },
      local_domain_info: {
        value: awsOutboundConnectionLocalDomainInfoPropertyToHclTerraform(this._localDomainInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsOutboundConnection.LocalDomainInfoPropertyList",
      },
      remote_domain_info: {
        value: awsOutboundConnectionRemoteDomainInfoPropertyToHclTerraform(this._remoteDomainInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsOutboundConnection.RemoteDomainInfoPropertyList",
      },
      timeouts: {
        value: awsOutboundConnectionTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsOutboundConnection.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsOutboundConnectionCrossClusterSearchPropertyToTerraform(struct?: AwsOutboundConnection.CrossClusterSearchPropertyOutputReference | AwsOutboundConnection.CrossClusterSearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skip_unavailable: cdktn.stringToTerraform(struct!.skipUnavailable),
  }
}


export function awsOutboundConnectionCrossClusterSearchPropertyToHclTerraform(struct?: AwsOutboundConnection.CrossClusterSearchPropertyOutputReference | AwsOutboundConnection.CrossClusterSearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skip_unavailable: {
      value: cdktn.stringToHclTerraform(struct!.skipUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsOutboundConnectionConnectionPropertiesPropertyToTerraform(struct?: AwsOutboundConnection.ConnectionPropertiesPropertyOutputReference | AwsOutboundConnection.ConnectionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_cluster_search: awsOutboundConnectionCrossClusterSearchPropertyToTerraform(struct!.crossClusterSearch),
  }
}


export function awsOutboundConnectionConnectionPropertiesPropertyToHclTerraform(struct?: AwsOutboundConnection.ConnectionPropertiesPropertyOutputReference | AwsOutboundConnection.ConnectionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_cluster_search: {
      value: awsOutboundConnectionCrossClusterSearchPropertyToHclTerraform(struct!.crossClusterSearch),
      isBlock: true,
      type: "list",
      storageClassType: "CrossClusterSearchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsOutboundConnectionLocalDomainInfoPropertyToTerraform(struct?: AwsOutboundConnection.LocalDomainInfoPropertyOutputReference | AwsOutboundConnection.LocalDomainInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    owner_id: cdktn.stringToTerraform(struct!.ownerId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsOutboundConnectionLocalDomainInfoPropertyToHclTerraform(struct?: AwsOutboundConnection.LocalDomainInfoPropertyOutputReference | AwsOutboundConnection.LocalDomainInfoProperty): any {
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
    owner_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsOutboundConnectionRemoteDomainInfoPropertyToTerraform(struct?: AwsOutboundConnection.RemoteDomainInfoPropertyOutputReference | AwsOutboundConnection.RemoteDomainInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    owner_id: cdktn.stringToTerraform(struct!.ownerId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsOutboundConnectionRemoteDomainInfoPropertyToHclTerraform(struct?: AwsOutboundConnection.RemoteDomainInfoPropertyOutputReference | AwsOutboundConnection.RemoteDomainInfoProperty): any {
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
    owner_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsOutboundConnectionTimeoutsPropertyToTerraform(struct?: AwsOutboundConnection.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsOutboundConnectionTimeoutsPropertyToHclTerraform(struct?: AwsOutboundConnection.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsOutboundConnection {
export interface CrossClusterSearchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#skip_unavailable AwsOutboundConnection#skip_unavailable}
  */
  readonly skipUnavailable?: string;
}
export class CrossClusterSearchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CrossClusterSearchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnavailable = this._skipUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrossClusterSearchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipUnavailable = value.skipUnavailable;
    }
  }

  // skip_unavailable - computed: false, optional: true, required: false
  private _skipUnavailable?: string; 
  public get skipUnavailable() {
    return this.getStringAttribute('skip_unavailable');
  }
  public set skipUnavailable(value: string) {
    this._skipUnavailable = value;
  }
  public resetSkipUnavailable() {
    this._skipUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnavailableInput() {
    return this._skipUnavailable;
  }
}
export interface ConnectionPropertiesProperty {
  /**
  * cross_cluster_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#cross_cluster_search AwsOutboundConnection#cross_cluster_search}
  */
  readonly crossClusterSearch?: CrossClusterSearchProperty;
}
export class ConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossClusterSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossClusterSearch = this._crossClusterSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossClusterSearch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossClusterSearch.internalValue = value.crossClusterSearch;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // cross_cluster_search - computed: false, optional: true, required: false
  private _crossClusterSearch = new CrossClusterSearchPropertyOutputReference(this, "cross_cluster_search");
  public get crossClusterSearch() {
    return this._crossClusterSearch;
  }
  public putCrossClusterSearch(value: CrossClusterSearchProperty) {
    this._crossClusterSearch.internalValue = value;
  }
  public resetCrossClusterSearch() {
    this._crossClusterSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossClusterSearchInput() {
    return this._crossClusterSearch.internalValue;
  }
}
export interface LocalDomainInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#domain_name AwsOutboundConnection#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#owner_id AwsOutboundConnection#owner_id}
  */
  readonly ownerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#region AwsOutboundConnection#region}
  */
  readonly region: string;
}
export class LocalDomainInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocalDomainInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalDomainInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._ownerId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._ownerId = value.ownerId;
      this._region = value.region;
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
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
export interface RemoteDomainInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#domain_name AwsOutboundConnection#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#owner_id AwsOutboundConnection#owner_id}
  */
  readonly ownerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#region AwsOutboundConnection#region}
  */
  readonly region: string;
}
export class RemoteDomainInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RemoteDomainInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteDomainInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._ownerId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._ownerId = value.ownerId;
      this._region = value.region;
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#create AwsOutboundConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearch_outbound_connection#delete AwsOutboundConnection#delete}
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
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
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
      this._create = undefined;
      this._delete = undefined;
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
}
}
