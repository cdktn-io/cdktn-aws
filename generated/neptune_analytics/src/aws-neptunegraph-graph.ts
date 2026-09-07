// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsGraphConfig extends cdktn.TerraformMetaArguments {
  /**
  * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#deletion_protection AwsGraph#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The graph name. For example: my-graph-1.
  * 								The name must contain from 1 to 63 letters, numbers, or hyphens, 
  * 								and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
  * 								If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for, 
  * 								followed by a combination of Stack Name and a UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#graph_name AwsGraph#graph_name}
  */
  readonly graphName?: string;
  /**
  * Allows user to specify name prefix and have remainder of name automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#graph_name_prefix AwsGraph#graph_name_prefix}
  */
  readonly graphNamePrefix?: string;
  /**
  * Specifies a KMS key to use to encrypt data in the new graph.  Value must be ARN of KMS Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#kms_key_identifier AwsGraph#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#provisioned_memory AwsGraph#provisioned_memory}
  */
  readonly provisionedMemory: number;
  /**
  * Specifies whether or not the graph can be reachable over the internet. 
  * 								All access to graphs is IAM authenticated.
  * 								When the graph is publicly available, its domain name system (DNS) endpoint resolves to 
  * 								the public IP address from the internet. When the graph isn't publicly available, you need 
  * 								to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private 
  * 								IP address that is reachable from the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#public_connectivity AwsGraph#public_connectivity}
  */
  readonly publicConnectivity?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#region AwsGraph#region}
  */
  readonly region?: string;
  /**
  * The number of replicas in other AZs.  Value must be between 0 and 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#replica_count AwsGraph#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#tags AwsGraph#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#timeouts AwsGraph#timeouts}
  */
  readonly timeouts?: AwsGraph.TimeoutsProperty;
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#vector_search_configuration AwsGraph#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: AwsGraph.VectorSearchConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}
*/
export class AwsGraph extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_neptunegraph_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsGraph resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsGraph to import
  * @param importFromId The id of the existing AwsGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_neptunegraph_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsGraphConfig
  */
  public constructor(scope: Construct, id: string, config: AwsGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_neptunegraph_graph',
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
    this._deletionProtection = config.deletionProtection;
    this._graphName = config.graphName;
    this._graphNamePrefix = config.graphNamePrefix;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._provisionedMemory = config.provisionedMemory;
    this._publicConnectivity = config.publicConnectivity;
    this._region = config.region;
    this._replicaCount = config.replicaCount;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._vectorSearchConfiguration.internalValue = config.vectorSearchConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // graph_name - computed: true, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // graph_name_prefix - computed: false, optional: true, required: false
  private _graphNamePrefix?: string; 
  public get graphNamePrefix() {
    return this.getStringAttribute('graph_name_prefix');
  }
  public set graphNamePrefix(value: string) {
    this._graphNamePrefix = value;
  }
  public resetGraphNamePrefix() {
    this._graphNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNamePrefixInput() {
    return this._graphNamePrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // provisioned_memory - computed: false, optional: false, required: true
  private _provisionedMemory?: number; 
  public get provisionedMemory() {
    return this.getNumberAttribute('provisioned_memory');
  }
  public set provisionedMemory(value: number) {
    this._provisionedMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedMemoryInput() {
    return this._provisionedMemory;
  }

  // public_connectivity - computed: true, optional: true, required: false
  private _publicConnectivity?: boolean | cdktn.IResolvable; 
  public get publicConnectivity() {
    return this.getBooleanAttribute('public_connectivity');
  }
  public set publicConnectivity(value: boolean | cdktn.IResolvable) {
    this._publicConnectivity = value;
  }
  public resetPublicConnectivity() {
    this._publicConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectivityInput() {
    return this._publicConnectivity;
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

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsGraph.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsGraph.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new AwsGraph.VectorSearchConfigurationPropertyList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: AwsGraph.VectorSearchConfigurationProperty[] | cdktn.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      graph_name: cdktn.stringToTerraform(this._graphName),
      graph_name_prefix: cdktn.stringToTerraform(this._graphNamePrefix),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      provisioned_memory: cdktn.numberToTerraform(this._provisionedMemory),
      public_connectivity: cdktn.booleanToTerraform(this._publicConnectivity),
      region: cdktn.stringToTerraform(this._region),
      replica_count: cdktn.numberToTerraform(this._replicaCount),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: awsGraphTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vector_search_configuration: cdktn.listMapper(awsGraphVectorSearchConfigurationPropertyToTerraform, true)(this._vectorSearchConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graph_name: {
        value: cdktn.stringToHclTerraform(this._graphName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_name_prefix: {
        value: cdktn.stringToHclTerraform(this._graphNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_memory: {
        value: cdktn.numberToHclTerraform(this._provisionedMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_connectivity: {
        value: cdktn.booleanToHclTerraform(this._publicConnectivity),
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
      replica_count: {
        value: cdktn.numberToHclTerraform(this._replicaCount),
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
      timeouts: {
        value: awsGraphTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsGraph.TimeoutsProperty",
      },
      vector_search_configuration: {
        value: cdktn.listMapperHcl(awsGraphVectorSearchConfigurationPropertyToHclTerraform, true)(this._vectorSearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGraph.VectorSearchConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsGraphTimeoutsPropertyToTerraform(struct?: AwsGraph.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsGraphTimeoutsPropertyToHclTerraform(struct?: AwsGraph.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsGraphVectorSearchConfigurationPropertyToTerraform(struct?: AwsGraph.VectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vector_search_dimension: cdktn.numberToTerraform(struct!.vectorSearchDimension),
  }
}


export function awsGraphVectorSearchConfigurationPropertyToHclTerraform(struct?: AwsGraph.VectorSearchConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vector_search_dimension: {
      value: cdktn.numberToHclTerraform(struct!.vectorSearchDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsGraph {
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#create AwsGraph#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#delete AwsGraph#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#update AwsGraph#update}
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
export interface VectorSearchConfigurationProperty {
  /**
  * Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/neptunegraph_graph#vector_search_dimension AwsGraph#vector_search_dimension}
  */
  readonly vectorSearchDimension?: number;
}
export class VectorSearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VectorSearchConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchDimension = this._vectorSearchDimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchDimension = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchDimension = value.vectorSearchDimension;
    }
  }

  // vector_search_dimension - computed: false, optional: true, required: false
  private _vectorSearchDimension?: number; 
  public get vectorSearchDimension() {
    return this.getNumberAttribute('vector_search_dimension');
  }
  public set vectorSearchDimension(value: number) {
    this._vectorSearchDimension = value;
  }
  public resetVectorSearchDimension() {
    this._vectorSearchDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchDimensionInput() {
    return this._vectorSearchDimension;
  }
}

export class VectorSearchConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : VectorSearchConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): VectorSearchConfigurationPropertyOutputReference {
    return new VectorSearchConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
