// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBatchJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#container_properties AwsBatchJobDefinition#container_properties}
  */
  readonly containerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#deregister_on_new_revision AwsBatchJobDefinition#deregister_on_new_revision}
  */
  readonly deregisterOnNewRevision?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#ecs_properties AwsBatchJobDefinition#ecs_properties}
  */
  readonly ecsProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#id AwsBatchJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#node_properties AwsBatchJobDefinition#node_properties}
  */
  readonly nodeProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#parameters AwsBatchJobDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#platform_capabilities AwsBatchJobDefinition#platform_capabilities}
  */
  readonly platformCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#propagate_tags AwsBatchJobDefinition#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#region AwsBatchJobDefinition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#scheduling_priority AwsBatchJobDefinition#scheduling_priority}
  */
  readonly schedulingPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#tags AwsBatchJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#tags_all AwsBatchJobDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#type AwsBatchJobDefinition#type}
  */
  readonly type: string;
  /**
  * eks_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#eks_properties AwsBatchJobDefinition#eks_properties}
  */
  readonly eksProperties?: AwsBatchJobDefinition.EksPropertiesProperty;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#retry_strategy AwsBatchJobDefinition#retry_strategy}
  */
  readonly retryStrategy?: AwsBatchJobDefinition.RetryStrategyProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#timeout AwsBatchJobDefinition#timeout}
  */
  readonly timeout?: AwsBatchJobDefinition.TimeoutProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition aws_batch_job_definition}
*/
export class AwsBatchJobDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBatchJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBatchJobDefinition to import
  * @param importFromId The id of the existing AwsBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition aws_batch_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_definition',
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
    this._containerProperties = config.containerProperties;
    this._deregisterOnNewRevision = config.deregisterOnNewRevision;
    this._ecsProperties = config.ecsProperties;
    this._id = config.id;
    this._name = config.name;
    this._nodeProperties = config.nodeProperties;
    this._parameters = config.parameters;
    this._platformCapabilities = config.platformCapabilities;
    this._propagateTags = config.propagateTags;
    this._region = config.region;
    this._schedulingPriority = config.schedulingPriority;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._eksProperties.internalValue = config.eksProperties;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._timeout.internalValue = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_prefix - computed: true, optional: false, required: false
  public get arnPrefix() {
    return this.getStringAttribute('arn_prefix');
  }

  // container_properties - computed: false, optional: true, required: false
  private _containerProperties?: string; 
  public get containerProperties() {
    return this.getStringAttribute('container_properties');
  }
  public set containerProperties(value: string) {
    this._containerProperties = value;
  }
  public resetContainerProperties() {
    this._containerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPropertiesInput() {
    return this._containerProperties;
  }

  // deregister_on_new_revision - computed: false, optional: true, required: false
  private _deregisterOnNewRevision?: boolean | cdktn.IResolvable; 
  public get deregisterOnNewRevision() {
    return this.getBooleanAttribute('deregister_on_new_revision');
  }
  public set deregisterOnNewRevision(value: boolean | cdktn.IResolvable) {
    this._deregisterOnNewRevision = value;
  }
  public resetDeregisterOnNewRevision() {
    this._deregisterOnNewRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterOnNewRevisionInput() {
    return this._deregisterOnNewRevision;
  }

  // ecs_properties - computed: false, optional: true, required: false
  private _ecsProperties?: string; 
  public get ecsProperties() {
    return this.getStringAttribute('ecs_properties');
  }
  public set ecsProperties(value: string) {
    this._ecsProperties = value;
  }
  public resetEcsProperties() {
    this._ecsProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPropertiesInput() {
    return this._ecsProperties;
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

  // node_properties - computed: false, optional: true, required: false
  private _nodeProperties?: string; 
  public get nodeProperties() {
    return this.getStringAttribute('node_properties');
  }
  public set nodeProperties(value: string) {
    this._nodeProperties = value;
  }
  public resetNodeProperties() {
    this._nodeProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePropertiesInput() {
    return this._nodeProperties;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // platform_capabilities - computed: false, optional: true, required: false
  private _platformCapabilities?: string[]; 
  public get platformCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('platform_capabilities'));
  }
  public set platformCapabilities(value: string[]) {
    this._platformCapabilities = value;
  }
  public resetPlatformCapabilities() {
    this._platformCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCapabilitiesInput() {
    return this._platformCapabilities;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: boolean | cdktn.IResolvable; 
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktn.IResolvable) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // scheduling_priority - computed: false, optional: true, required: false
  private _schedulingPriority?: number; 
  public get schedulingPriority() {
    return this.getNumberAttribute('scheduling_priority');
  }
  public set schedulingPriority(value: number) {
    this._schedulingPriority = value;
  }
  public resetSchedulingPriority() {
    this._schedulingPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPriorityInput() {
    return this._schedulingPriority;
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

  // eks_properties - computed: false, optional: true, required: false
  private _eksProperties = new AwsBatchJobDefinition.EksPropertiesPropertyOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
  }
  public putEksProperties(value: AwsBatchJobDefinition.EksPropertiesProperty) {
    this._eksProperties.internalValue = value;
  }
  public resetEksProperties() {
    this._eksProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksPropertiesInput() {
    return this._eksProperties.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new AwsBatchJobDefinition.RetryStrategyPropertyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: AwsBatchJobDefinition.RetryStrategyProperty) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AwsBatchJobDefinition.TimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AwsBatchJobDefinition.TimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_properties: cdktn.stringToTerraform(this._containerProperties),
      deregister_on_new_revision: cdktn.booleanToTerraform(this._deregisterOnNewRevision),
      ecs_properties: cdktn.stringToTerraform(this._ecsProperties),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      node_properties: cdktn.stringToTerraform(this._nodeProperties),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      platform_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._platformCapabilities),
      propagate_tags: cdktn.booleanToTerraform(this._propagateTags),
      region: cdktn.stringToTerraform(this._region),
      scheduling_priority: cdktn.numberToTerraform(this._schedulingPriority),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      eks_properties: awsBatchJobDefinitionEksPropertiesPropertyToTerraform(this._eksProperties.internalValue),
      retry_strategy: awsBatchJobDefinitionRetryStrategyPropertyToTerraform(this._retryStrategy.internalValue),
      timeout: awsBatchJobDefinitionTimeoutPropertyToTerraform(this._timeout.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_properties: {
        value: cdktn.stringToHclTerraform(this._containerProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister_on_new_revision: {
        value: cdktn.booleanToHclTerraform(this._deregisterOnNewRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_properties: {
        value: cdktn.stringToHclTerraform(this._ecsProperties),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_properties: {
        value: cdktn.stringToHclTerraform(this._nodeProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      platform_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._platformCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      propagate_tags: {
        value: cdktn.booleanToHclTerraform(this._propagateTags),
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
      scheduling_priority: {
        value: cdktn.numberToHclTerraform(this._schedulingPriority),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_properties: {
        value: awsBatchJobDefinitionEksPropertiesPropertyToHclTerraform(this._eksProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchJobDefinition.EksPropertiesPropertyList",
      },
      retry_strategy: {
        value: awsBatchJobDefinitionRetryStrategyPropertyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchJobDefinition.RetryStrategyPropertyList",
      },
      timeout: {
        value: awsBatchJobDefinitionTimeoutPropertyToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchJobDefinition.TimeoutPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersEnvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersEnvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersResourcesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limits: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.limits),
    requests: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requests),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersResourcesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limits: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersSecurityContextPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersSecurityContextProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_privilege_escalation: cdktn.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktn.booleanToTerraform(struct!.privileged),
    read_only_root_file_system: cdktn.booleanToTerraform(struct!.readOnlyRootFileSystem),
    run_as_group: cdktn.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktn.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktn.numberToTerraform(struct!.runAsUser),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersSecurityContextPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersSecurityContextProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktn.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged: {
      value: cdktn.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_file_system: {
      value: cdktn.booleanToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktn.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktn.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktn.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersVolumeMountsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    name: cdktn.stringToTerraform(struct!.name),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesContainersVolumeMountsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionContainersPropertyToTerraform(struct?: AwsBatchJobDefinition.ContainersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    image: cdktn.stringToTerraform(struct!.image),
    image_pull_policy: cdktn.stringToTerraform(struct!.imagePullPolicy),
    name: cdktn.stringToTerraform(struct!.name),
    env: cdktn.listMapper(awsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvPropertyToTerraform, true)(struct!.env),
    resources: awsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesPropertyToTerraform(struct!.resources),
    security_context: awsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextPropertyToTerraform(struct!.securityContext),
    volume_mounts: cdktn.listMapper(awsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsPropertyToTerraform, true)(struct!.volumeMounts),
  }
}


export function awsBatchJobDefinitionContainersPropertyToHclTerraform(struct?: AwsBatchJobDefinition.ContainersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktn.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvPropertyToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "EksPropertiesPodPropertiesContainersEnvPropertyList",
    },
    resources: {
      value: awsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesPropertyToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesContainersResourcesPropertyList",
    },
    security_context: {
      value: awsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextPropertyToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesContainersSecurityContextPropertyList",
    },
    volume_mounts: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsPropertyToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesContainersVolumeMountsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionImagePullSecretPropertyToTerraform(struct?: AwsBatchJobDefinition.ImagePullSecretProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsBatchJobDefinitionImagePullSecretPropertyToHclTerraform(struct?: AwsBatchJobDefinition.ImagePullSecretProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersEnvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersEnvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersResourcesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limits: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.limits),
    requests: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requests),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersResourcesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limits: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersSecurityContextPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersSecurityContextProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_privilege_escalation: cdktn.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktn.booleanToTerraform(struct!.privileged),
    read_only_root_file_system: cdktn.booleanToTerraform(struct!.readOnlyRootFileSystem),
    run_as_group: cdktn.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktn.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktn.numberToTerraform(struct!.runAsUser),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersSecurityContextPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersSecurityContextProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktn.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged: {
      value: cdktn.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_file_system: {
      value: cdktn.booleanToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktn.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktn.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktn.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersVolumeMountsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    name: cdktn.stringToTerraform(struct!.name),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
  }
}


export function awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPodPropertiesInitContainersVolumeMountsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionInitContainersPropertyToTerraform(struct?: AwsBatchJobDefinition.InitContainersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    image: cdktn.stringToTerraform(struct!.image),
    image_pull_policy: cdktn.stringToTerraform(struct!.imagePullPolicy),
    name: cdktn.stringToTerraform(struct!.name),
    env: cdktn.listMapper(awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvPropertyToTerraform, true)(struct!.env),
    resources: awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesPropertyToTerraform(struct!.resources),
    security_context: awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextPropertyToTerraform(struct!.securityContext),
    volume_mounts: cdktn.listMapper(awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsPropertyToTerraform, true)(struct!.volumeMounts),
  }
}


export function awsBatchJobDefinitionInitContainersPropertyToHclTerraform(struct?: AwsBatchJobDefinition.InitContainersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktn.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvPropertyToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "EksPropertiesPodPropertiesInitContainersEnvPropertyList",
    },
    resources: {
      value: awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesPropertyToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesInitContainersResourcesPropertyList",
    },
    security_context: {
      value: awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextPropertyToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesInitContainersSecurityContextPropertyList",
    },
    volume_mounts: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsPropertyToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionMetadataPropertyToTerraform(struct?: AwsBatchJobDefinition.MetadataPropertyOutputReference | AwsBatchJobDefinition.MetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function awsBatchJobDefinitionMetadataPropertyToHclTerraform(struct?: AwsBatchJobDefinition.MetadataPropertyOutputReference | AwsBatchJobDefinition.MetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEmptyDirPropertyToTerraform(struct?: AwsBatchJobDefinition.EmptyDirPropertyOutputReference | AwsBatchJobDefinition.EmptyDirProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    medium: cdktn.stringToTerraform(struct!.medium),
    size_limit: cdktn.stringToTerraform(struct!.sizeLimit),
  }
}


export function awsBatchJobDefinitionEmptyDirPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EmptyDirPropertyOutputReference | AwsBatchJobDefinition.EmptyDirProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    medium: {
      value: cdktn.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktn.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionHostPathPropertyToTerraform(struct?: AwsBatchJobDefinition.HostPathPropertyOutputReference | AwsBatchJobDefinition.HostPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsBatchJobDefinitionHostPathPropertyToHclTerraform(struct?: AwsBatchJobDefinition.HostPathPropertyOutputReference | AwsBatchJobDefinition.HostPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionSecretPropertyToTerraform(struct?: AwsBatchJobDefinition.SecretPropertyOutputReference | AwsBatchJobDefinition.SecretProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    optional: cdktn.booleanToTerraform(struct!.optional),
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function awsBatchJobDefinitionSecretPropertyToHclTerraform(struct?: AwsBatchJobDefinition.SecretPropertyOutputReference | AwsBatchJobDefinition.SecretProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    optional: {
      value: cdktn.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionVolumesPropertyToTerraform(struct?: AwsBatchJobDefinition.VolumesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    empty_dir: awsBatchJobDefinitionEmptyDirPropertyToTerraform(struct!.emptyDir),
    host_path: awsBatchJobDefinitionHostPathPropertyToTerraform(struct!.hostPath),
    secret: awsBatchJobDefinitionSecretPropertyToTerraform(struct!.secret),
  }
}


export function awsBatchJobDefinitionVolumesPropertyToHclTerraform(struct?: AwsBatchJobDefinition.VolumesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir: {
      value: awsBatchJobDefinitionEmptyDirPropertyToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "list",
      storageClassType: "EmptyDirPropertyList",
    },
    host_path: {
      value: awsBatchJobDefinitionHostPathPropertyToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "list",
      storageClassType: "HostPathPropertyList",
    },
    secret: {
      value: awsBatchJobDefinitionSecretPropertyToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "SecretPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionPodPropertiesPropertyToTerraform(struct?: AwsBatchJobDefinition.PodPropertiesPropertyOutputReference | AwsBatchJobDefinition.PodPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_policy: cdktn.stringToTerraform(struct!.dnsPolicy),
    host_network: cdktn.booleanToTerraform(struct!.hostNetwork),
    service_account_name: cdktn.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktn.booleanToTerraform(struct!.shareProcessNamespace),
    containers: cdktn.listMapper(awsBatchJobDefinitionContainersPropertyToTerraform, true)(struct!.containers),
    image_pull_secret: cdktn.listMapper(awsBatchJobDefinitionImagePullSecretPropertyToTerraform, true)(struct!.imagePullSecret),
    init_containers: cdktn.listMapper(awsBatchJobDefinitionInitContainersPropertyToTerraform, true)(struct!.initContainers),
    metadata: awsBatchJobDefinitionMetadataPropertyToTerraform(struct!.metadata),
    volumes: cdktn.listMapper(awsBatchJobDefinitionVolumesPropertyToTerraform, true)(struct!.volumes),
  }
}


export function awsBatchJobDefinitionPodPropertiesPropertyToHclTerraform(struct?: AwsBatchJobDefinition.PodPropertiesPropertyOutputReference | AwsBatchJobDefinition.PodPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_policy: {
      value: cdktn.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_network: {
      value: cdktn.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_process_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionContainersPropertyToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "ContainersPropertyList",
    },
    image_pull_secret: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionImagePullSecretPropertyToHclTerraform, true)(struct!.imagePullSecret),
      isBlock: true,
      type: "list",
      storageClassType: "ImagePullSecretPropertyList",
    },
    init_containers: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionInitContainersPropertyToHclTerraform, true)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "InitContainersPropertyList",
    },
    metadata: {
      value: awsBatchJobDefinitionMetadataPropertyToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "MetadataPropertyList",
    },
    volumes: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionVolumesPropertyToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "VolumesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEksPropertiesPropertyToTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pod_properties: awsBatchJobDefinitionPodPropertiesPropertyToTerraform(struct!.podProperties),
  }
}


export function awsBatchJobDefinitionEksPropertiesPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EksPropertiesPropertyOutputReference | AwsBatchJobDefinition.EksPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pod_properties: {
      value: awsBatchJobDefinitionPodPropertiesPropertyToHclTerraform(struct!.podProperties),
      isBlock: true,
      type: "list",
      storageClassType: "PodPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionEvaluateOnExitPropertyToTerraform(struct?: AwsBatchJobDefinition.EvaluateOnExitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    on_exit_code: cdktn.stringToTerraform(struct!.onExitCode),
    on_reason: cdktn.stringToTerraform(struct!.onReason),
    on_status_reason: cdktn.stringToTerraform(struct!.onStatusReason),
  }
}


export function awsBatchJobDefinitionEvaluateOnExitPropertyToHclTerraform(struct?: AwsBatchJobDefinition.EvaluateOnExitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_exit_code: {
      value: cdktn.stringToHclTerraform(struct!.onExitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_reason: {
      value: cdktn.stringToHclTerraform(struct!.onReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_status_reason: {
      value: cdktn.stringToHclTerraform(struct!.onStatusReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionRetryStrategyPropertyToTerraform(struct?: AwsBatchJobDefinition.RetryStrategyPropertyOutputReference | AwsBatchJobDefinition.RetryStrategyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attempts: cdktn.numberToTerraform(struct!.attempts),
    evaluate_on_exit: cdktn.listMapper(awsBatchJobDefinitionEvaluateOnExitPropertyToTerraform, true)(struct!.evaluateOnExit),
  }
}


export function awsBatchJobDefinitionRetryStrategyPropertyToHclTerraform(struct?: AwsBatchJobDefinition.RetryStrategyPropertyOutputReference | AwsBatchJobDefinition.RetryStrategyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attempts: {
      value: cdktn.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate_on_exit: {
      value: cdktn.listMapperHcl(awsBatchJobDefinitionEvaluateOnExitPropertyToHclTerraform, true)(struct!.evaluateOnExit),
      isBlock: true,
      type: "list",
      storageClassType: "EvaluateOnExitPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBatchJobDefinitionTimeoutPropertyToTerraform(struct?: AwsBatchJobDefinition.TimeoutPropertyOutputReference | AwsBatchJobDefinition.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attempt_duration_seconds: cdktn.numberToTerraform(struct!.attemptDurationSeconds),
  }
}


export function awsBatchJobDefinitionTimeoutPropertyToHclTerraform(struct?: AwsBatchJobDefinition.TimeoutPropertyOutputReference | AwsBatchJobDefinition.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attempt_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.attemptDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBatchJobDefinition {
export interface EksPropertiesPodPropertiesContainersEnvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#value AwsBatchJobDefinition#value}
  */
  readonly value: string;
}
export class EksPropertiesPodPropertiesContainersEnvPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksPropertiesPodPropertiesContainersEnvProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesContainersEnvProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class EksPropertiesPodPropertiesContainersEnvPropertyList extends cdktn.ComplexList {
  public internalValue? : EksPropertiesPodPropertiesContainersEnvProperty[] | cdktn.IResolvable

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
  public get(index: number): EksPropertiesPodPropertiesContainersEnvPropertyOutputReference {
    return new EksPropertiesPodPropertiesContainersEnvPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksPropertiesPodPropertiesContainersResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#limits AwsBatchJobDefinition#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#requests AwsBatchJobDefinition#requests}
  */
  readonly requests?: { [key: string]: string };
}
export class EksPropertiesPodPropertiesContainersResourcesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPropertiesPodPropertiesContainersResourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesContainersResourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface EksPropertiesPodPropertiesContainersSecurityContextProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#allow_privilege_escalation AwsBatchJobDefinition#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#privileged AwsBatchJobDefinition#privileged}
  */
  readonly privileged?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#read_only_root_file_system AwsBatchJobDefinition#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_group AwsBatchJobDefinition#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_non_root AwsBatchJobDefinition#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_user AwsBatchJobDefinition#run_as_user}
  */
  readonly runAsUser?: number;
}
export class EksPropertiesPodPropertiesContainersSecurityContextPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPropertiesPodPropertiesContainersSecurityContextProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesContainersSecurityContextProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._privileged = undefined;
      this._readOnlyRootFileSystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._privileged = value.privileged;
      this._readOnlyRootFileSystem = value.readOnlyRootFileSystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktn.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktn.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktn.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktn.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem?: boolean | cdktn.IResolvable; 
  public get readOnlyRootFileSystem() {
    return this.getBooleanAttribute('read_only_root_file_system');
  }
  public set readOnlyRootFileSystem(value: boolean | cdktn.IResolvable) {
    this._readOnlyRootFileSystem = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktn.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktn.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface EksPropertiesPodPropertiesContainersVolumeMountsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#mount_path AwsBatchJobDefinition#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#read_only AwsBatchJobDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
}
export class EksPropertiesPodPropertiesContainersVolumeMountsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksPropertiesPodPropertiesContainersVolumeMountsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesContainersVolumeMountsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class EksPropertiesPodPropertiesContainersVolumeMountsPropertyList extends cdktn.ComplexList {
  public internalValue? : EksPropertiesPodPropertiesContainersVolumeMountsProperty[] | cdktn.IResolvable

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
  public get(index: number): EksPropertiesPodPropertiesContainersVolumeMountsPropertyOutputReference {
    return new EksPropertiesPodPropertiesContainersVolumeMountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#args AwsBatchJobDefinition#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#command AwsBatchJobDefinition#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#image AwsBatchJobDefinition#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#image_pull_policy AwsBatchJobDefinition#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#env AwsBatchJobDefinition#env}
  */
  readonly env?: EksPropertiesPodPropertiesContainersEnvProperty[] | cdktn.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#resources AwsBatchJobDefinition#resources}
  */
  readonly resources?: EksPropertiesPodPropertiesContainersResourcesProperty;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#security_context AwsBatchJobDefinition#security_context}
  */
  readonly securityContext?: EksPropertiesPodPropertiesContainersSecurityContextProperty;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#volume_mounts AwsBatchJobDefinition#volume_mounts}
  */
  readonly volumeMounts?: EksPropertiesPodPropertiesContainersVolumeMountsProperty[] | cdktn.IResolvable;
}
export class ContainersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._name = value.name;
      this._env.internalValue = value.env;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // name - computed: false, optional: true, required: false
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

  // env - computed: false, optional: true, required: false
  private _env = new EksPropertiesPodPropertiesContainersEnvPropertyList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: EksPropertiesPodPropertiesContainersEnvProperty[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new EksPropertiesPodPropertiesContainersResourcesPropertyOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: EksPropertiesPodPropertiesContainersResourcesProperty) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new EksPropertiesPodPropertiesContainersSecurityContextPropertyOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EksPropertiesPodPropertiesContainersSecurityContextProperty) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new EksPropertiesPodPropertiesContainersVolumeMountsPropertyList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: EksPropertiesPodPropertiesContainersVolumeMountsProperty[] | cdktn.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class ContainersPropertyList extends cdktn.ComplexList {
  public internalValue? : ContainersProperty[] | cdktn.IResolvable

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
  public get(index: number): ContainersPropertyOutputReference {
    return new ContainersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagePullSecretProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
}
export class ImagePullSecretPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImagePullSecretProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagePullSecretProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class ImagePullSecretPropertyList extends cdktn.ComplexList {
  public internalValue? : ImagePullSecretProperty[] | cdktn.IResolvable

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
  public get(index: number): ImagePullSecretPropertyOutputReference {
    return new ImagePullSecretPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksPropertiesPodPropertiesInitContainersEnvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#value AwsBatchJobDefinition#value}
  */
  readonly value: string;
}
export class EksPropertiesPodPropertiesInitContainersEnvPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksPropertiesPodPropertiesInitContainersEnvProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesInitContainersEnvProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class EksPropertiesPodPropertiesInitContainersEnvPropertyList extends cdktn.ComplexList {
  public internalValue? : EksPropertiesPodPropertiesInitContainersEnvProperty[] | cdktn.IResolvable

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
  public get(index: number): EksPropertiesPodPropertiesInitContainersEnvPropertyOutputReference {
    return new EksPropertiesPodPropertiesInitContainersEnvPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksPropertiesPodPropertiesInitContainersResourcesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#limits AwsBatchJobDefinition#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#requests AwsBatchJobDefinition#requests}
  */
  readonly requests?: { [key: string]: string };
}
export class EksPropertiesPodPropertiesInitContainersResourcesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPropertiesPodPropertiesInitContainersResourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesInitContainersResourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface EksPropertiesPodPropertiesInitContainersSecurityContextProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#allow_privilege_escalation AwsBatchJobDefinition#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#privileged AwsBatchJobDefinition#privileged}
  */
  readonly privileged?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#read_only_root_file_system AwsBatchJobDefinition#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_group AwsBatchJobDefinition#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_non_root AwsBatchJobDefinition#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#run_as_user AwsBatchJobDefinition#run_as_user}
  */
  readonly runAsUser?: number;
}
export class EksPropertiesPodPropertiesInitContainersSecurityContextPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPropertiesPodPropertiesInitContainersSecurityContextProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesInitContainersSecurityContextProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._privileged = undefined;
      this._readOnlyRootFileSystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._privileged = value.privileged;
      this._readOnlyRootFileSystem = value.readOnlyRootFileSystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktn.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktn.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktn.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktn.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem?: boolean | cdktn.IResolvable; 
  public get readOnlyRootFileSystem() {
    return this.getBooleanAttribute('read_only_root_file_system');
  }
  public set readOnlyRootFileSystem(value: boolean | cdktn.IResolvable) {
    this._readOnlyRootFileSystem = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktn.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktn.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface EksPropertiesPodPropertiesInitContainersVolumeMountsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#mount_path AwsBatchJobDefinition#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#read_only AwsBatchJobDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
}
export class EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksPropertiesPodPropertiesInitContainersVolumeMountsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesPodPropertiesInitContainersVolumeMountsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyList extends cdktn.ComplexList {
  public internalValue? : EksPropertiesPodPropertiesInitContainersVolumeMountsProperty[] | cdktn.IResolvable

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
  public get(index: number): EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyOutputReference {
    return new EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InitContainersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#args AwsBatchJobDefinition#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#command AwsBatchJobDefinition#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#image AwsBatchJobDefinition#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#image_pull_policy AwsBatchJobDefinition#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#env AwsBatchJobDefinition#env}
  */
  readonly env?: EksPropertiesPodPropertiesInitContainersEnvProperty[] | cdktn.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#resources AwsBatchJobDefinition#resources}
  */
  readonly resources?: EksPropertiesPodPropertiesInitContainersResourcesProperty;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#security_context AwsBatchJobDefinition#security_context}
  */
  readonly securityContext?: EksPropertiesPodPropertiesInitContainersSecurityContextProperty;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#volume_mounts AwsBatchJobDefinition#volume_mounts}
  */
  readonly volumeMounts?: EksPropertiesPodPropertiesInitContainersVolumeMountsProperty[] | cdktn.IResolvable;
}
export class InitContainersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InitContainersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InitContainersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._name = value.name;
      this._env.internalValue = value.env;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // name - computed: false, optional: true, required: false
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

  // env - computed: false, optional: true, required: false
  private _env = new EksPropertiesPodPropertiesInitContainersEnvPropertyList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: EksPropertiesPodPropertiesInitContainersEnvProperty[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new EksPropertiesPodPropertiesInitContainersResourcesPropertyOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: EksPropertiesPodPropertiesInitContainersResourcesProperty) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new EksPropertiesPodPropertiesInitContainersSecurityContextPropertyOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EksPropertiesPodPropertiesInitContainersSecurityContextProperty) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new EksPropertiesPodPropertiesInitContainersVolumeMountsPropertyList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: EksPropertiesPodPropertiesInitContainersVolumeMountsProperty[] | cdktn.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class InitContainersPropertyList extends cdktn.ComplexList {
  public internalValue? : InitContainersProperty[] | cdktn.IResolvable

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
  public get(index: number): InitContainersPropertyOutputReference {
    return new InitContainersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetadataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#labels AwsBatchJobDefinition#labels}
  */
  readonly labels?: { [key: string]: string };
}
export class MetadataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface EmptyDirProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#medium AwsBatchJobDefinition#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#size_limit AwsBatchJobDefinition#size_limit}
  */
  readonly sizeLimit: string;
}
export class EmptyDirPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmptyDirProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmptyDirProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: false, required: true
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface HostPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#path AwsBatchJobDefinition#path}
  */
  readonly path: string;
}
export class HostPathPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostPathProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostPathProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SecretProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#optional AwsBatchJobDefinition#optional}
  */
  readonly optional?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#secret_name AwsBatchJobDefinition#secret_name}
  */
  readonly secretName: string;
}
export class SecretPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktn.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktn.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface VolumesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name?: string;
  /**
  * empty_dir block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#empty_dir AwsBatchJobDefinition#empty_dir}
  */
  readonly emptyDir?: EmptyDirProperty;
  /**
  * host_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#host_path AwsBatchJobDefinition#host_path}
  */
  readonly hostPath?: HostPathProperty;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#secret AwsBatchJobDefinition#secret}
  */
  readonly secret?: SecretProperty;
}
export class VolumesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VolumesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._emptyDir.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._emptyDir.internalValue = value.emptyDir;
      this._hostPath.internalValue = value.hostPath;
      this._secret.internalValue = value.secret;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new EmptyDirPropertyOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: EmptyDirProperty) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new HostPathPropertyOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: HostPathProperty) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new SecretPropertyOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: SecretProperty) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class VolumesPropertyList extends cdktn.ComplexList {
  public internalValue? : VolumesProperty[] | cdktn.IResolvable

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
  public get(index: number): VolumesPropertyOutputReference {
    return new VolumesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#dns_policy AwsBatchJobDefinition#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#host_network AwsBatchJobDefinition#host_network}
  */
  readonly hostNetwork?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#service_account_name AwsBatchJobDefinition#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#share_process_namespace AwsBatchJobDefinition#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktn.IResolvable;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#containers AwsBatchJobDefinition#containers}
  */
  readonly containers: ContainersProperty[] | cdktn.IResolvable;
  /**
  * image_pull_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#image_pull_secret AwsBatchJobDefinition#image_pull_secret}
  */
  readonly imagePullSecret?: ImagePullSecretProperty[] | cdktn.IResolvable;
  /**
  * init_containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#init_containers AwsBatchJobDefinition#init_containers}
  */
  readonly initContainers?: InitContainersProperty[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#metadata AwsBatchJobDefinition#metadata}
  */
  readonly metadata?: MetadataProperty;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#volumes AwsBatchJobDefinition#volumes}
  */
  readonly volumes?: VolumesProperty[] | cdktn.IResolvable;
}
export class PodPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._imagePullSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsPolicy = undefined;
      this._hostNetwork = undefined;
      this._serviceAccountName = undefined;
      this._shareProcessNamespace = undefined;
      this._containers.internalValue = undefined;
      this._imagePullSecret.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsPolicy = value.dnsPolicy;
      this._hostNetwork = value.hostNetwork;
      this._serviceAccountName = value.serviceAccountName;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._containers.internalValue = value.containers;
      this._imagePullSecret.internalValue = value.imagePullSecret;
      this._initContainers.internalValue = value.initContainers;
      this._metadata.internalValue = value.metadata;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktn.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktn.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktn.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktn.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new ContainersPropertyList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: ContainersProperty[] | cdktn.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret = new ImagePullSecretPropertyList(this, "image_pull_secret", false);
  public get imagePullSecret() {
    return this._imagePullSecret;
  }
  public putImagePullSecret(value: ImagePullSecretProperty[] | cdktn.IResolvable) {
    this._imagePullSecret.internalValue = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new InitContainersPropertyList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: InitContainersProperty[] | cdktn.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MetadataPropertyOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MetadataProperty) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new VolumesPropertyList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: VolumesProperty[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface EksPropertiesProperty {
  /**
  * pod_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#pod_properties AwsBatchJobDefinition#pod_properties}
  */
  readonly podProperties: PodPropertiesProperty;
}
export class EksPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podProperties = this._podProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podProperties.internalValue = value.podProperties;
    }
  }

  // pod_properties - computed: false, optional: false, required: true
  private _podProperties = new PodPropertiesPropertyOutputReference(this, "pod_properties");
  public get podProperties() {
    return this._podProperties;
  }
  public putPodProperties(value: PodPropertiesProperty) {
    this._podProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podPropertiesInput() {
    return this._podProperties.internalValue;
  }
}
export interface EvaluateOnExitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#action AwsBatchJobDefinition#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#on_exit_code AwsBatchJobDefinition#on_exit_code}
  */
  readonly onExitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#on_reason AwsBatchJobDefinition#on_reason}
  */
  readonly onReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#on_status_reason AwsBatchJobDefinition#on_status_reason}
  */
  readonly onStatusReason?: string;
}
export class EvaluateOnExitPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvaluateOnExitProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._onExitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExitCode = this._onExitCode;
    }
    if (this._onReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onReason = this._onReason;
    }
    if (this._onStatusReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStatusReason = this._onStatusReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvaluateOnExitProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._onExitCode = undefined;
      this._onReason = undefined;
      this._onStatusReason = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._onExitCode = value.onExitCode;
      this._onReason = value.onReason;
      this._onStatusReason = value.onStatusReason;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // on_exit_code - computed: false, optional: true, required: false
  private _onExitCode?: string; 
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }
  public set onExitCode(value: string) {
    this._onExitCode = value;
  }
  public resetOnExitCode() {
    this._onExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExitCodeInput() {
    return this._onExitCode;
  }

  // on_reason - computed: false, optional: true, required: false
  private _onReason?: string; 
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }
  public set onReason(value: string) {
    this._onReason = value;
  }
  public resetOnReason() {
    this._onReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReasonInput() {
    return this._onReason;
  }

  // on_status_reason - computed: false, optional: true, required: false
  private _onStatusReason?: string; 
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
  public set onStatusReason(value: string) {
    this._onStatusReason = value;
  }
  public resetOnStatusReason() {
    this._onStatusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStatusReasonInput() {
    return this._onStatusReason;
  }
}

export class EvaluateOnExitPropertyList extends cdktn.ComplexList {
  public internalValue? : EvaluateOnExitProperty[] | cdktn.IResolvable

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
  public get(index: number): EvaluateOnExitPropertyOutputReference {
    return new EvaluateOnExitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetryStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#attempts AwsBatchJobDefinition#attempts}
  */
  readonly attempts?: number;
  /**
  * evaluate_on_exit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#evaluate_on_exit AwsBatchJobDefinition#evaluate_on_exit}
  */
  readonly evaluateOnExit?: EvaluateOnExitProperty[] | cdktn.IResolvable;
}
export class RetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetryStrategyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._evaluateOnExit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateOnExit = this._evaluateOnExit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryStrategyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
      this._evaluateOnExit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
      this._evaluateOnExit.internalValue = value.evaluateOnExit;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // evaluate_on_exit - computed: false, optional: true, required: false
  private _evaluateOnExit = new EvaluateOnExitPropertyList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
  public putEvaluateOnExit(value: EvaluateOnExitProperty[] | cdktn.IResolvable) {
    this._evaluateOnExit.internalValue = value;
  }
  public resetEvaluateOnExit() {
    this._evaluateOnExit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateOnExitInput() {
    return this._evaluateOnExit.internalValue;
  }
}
export interface TimeoutProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/batch_job_definition#attempt_duration_seconds AwsBatchJobDefinition#attempt_duration_seconds}
  */
  readonly attemptDurationSeconds?: number;
}
export class TimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attemptDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptDurationSeconds = this._attemptDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attemptDurationSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attemptDurationSeconds = value.attemptDurationSeconds;
    }
  }

  // attempt_duration_seconds - computed: false, optional: true, required: false
  private _attemptDurationSeconds?: number; 
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
  public set attemptDurationSeconds(value: number) {
    this._attemptDurationSeconds = value;
  }
  public resetAttemptDurationSeconds() {
    this._attemptDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDurationSecondsInput() {
    return this._attemptDurationSeconds;
  }
}
}
