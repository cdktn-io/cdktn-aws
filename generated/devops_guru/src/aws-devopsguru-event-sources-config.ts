// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEventSourcesConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config#region TfEventSourcesConfig#region}
  */
  readonly region?: string;
  /**
  * event_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config#event_sources TfEventSourcesConfig#event_sources}
  */
  readonly eventSources?: TfEventSourcesConfig.EventSourcesProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config}
*/
export class TfEventSourcesConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_event_sources_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEventSourcesConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEventSourcesConfig to import
  * @param importFromId The id of the existing TfEventSourcesConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEventSourcesConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_event_sources_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEventSourcesConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfEventSourcesConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_event_sources_config',
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
    this._eventSources.internalValue = config.eventSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_sources - computed: false, optional: true, required: false
  private _eventSources = new TfEventSourcesConfig.EventSourcesPropertyList(this, "event_sources", false);
  public get eventSources() {
    return this._eventSources;
  }
  public putEventSources(value: TfEventSourcesConfig.EventSourcesProperty[] | cdktn.IResolvable) {
    this._eventSources.internalValue = value;
  }
  public resetEventSources() {
    this._eventSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourcesInput() {
    return this._eventSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      event_sources: cdktn.listMapper(tfEventSourcesConfigEventSourcesPropertyToTerraform, true)(this._eventSources.internalValue),
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
      event_sources: {
        value: cdktn.listMapperHcl(tfEventSourcesConfigEventSourcesPropertyToHclTerraform, true)(this._eventSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourcesConfig.EventSourcesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEventSourcesConfigAmazonCodeGuruProfilerPropertyToTerraform(struct?: TfEventSourcesConfig.AmazonCodeGuruProfilerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfEventSourcesConfigAmazonCodeGuruProfilerPropertyToHclTerraform(struct?: TfEventSourcesConfig.AmazonCodeGuruProfilerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourcesConfigEventSourcesPropertyToTerraform(struct?: TfEventSourcesConfig.EventSourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_code_guru_profiler: cdktn.listMapper(tfEventSourcesConfigAmazonCodeGuruProfilerPropertyToTerraform, true)(struct!.amazonCodeGuruProfiler),
  }
}


export function tfEventSourcesConfigEventSourcesPropertyToHclTerraform(struct?: TfEventSourcesConfig.EventSourcesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_code_guru_profiler: {
      value: cdktn.listMapperHcl(tfEventSourcesConfigAmazonCodeGuruProfilerPropertyToHclTerraform, true)(struct!.amazonCodeGuruProfiler),
      isBlock: true,
      type: "list",
      storageClassType: "AmazonCodeGuruProfilerPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfEventSourcesConfig {
export interface AmazonCodeGuruProfilerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config#status TfEventSourcesConfig#status}
  */
  readonly status: string;
}
export class AmazonCodeGuruProfilerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmazonCodeGuruProfilerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonCodeGuruProfilerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class AmazonCodeGuruProfilerPropertyList extends cdktn.ComplexList {
  public internalValue? : AmazonCodeGuruProfilerProperty[] | cdktn.IResolvable

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
  public get(index: number): AmazonCodeGuruProfilerPropertyOutputReference {
    return new AmazonCodeGuruProfilerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSourcesProperty {
  /**
  * amazon_code_guru_profiler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/devopsguru_event_sources_config#amazon_code_guru_profiler TfEventSourcesConfig#amazon_code_guru_profiler}
  */
  readonly amazonCodeGuruProfiler?: AmazonCodeGuruProfilerProperty[] | cdktn.IResolvable;
}
export class EventSourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventSourcesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonCodeGuruProfiler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonCodeGuruProfiler = this._amazonCodeGuruProfiler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSourcesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonCodeGuruProfiler.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonCodeGuruProfiler.internalValue = value.amazonCodeGuruProfiler;
    }
  }

  // amazon_code_guru_profiler - computed: false, optional: true, required: false
  private _amazonCodeGuruProfiler = new AmazonCodeGuruProfilerPropertyList(this, "amazon_code_guru_profiler", false);
  public get amazonCodeGuruProfiler() {
    return this._amazonCodeGuruProfiler;
  }
  public putAmazonCodeGuruProfiler(value: AmazonCodeGuruProfilerProperty[] | cdktn.IResolvable) {
    this._amazonCodeGuruProfiler.internalValue = value;
  }
  public resetAmazonCodeGuruProfiler() {
    this._amazonCodeGuruProfiler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonCodeGuruProfilerInput() {
    return this._amazonCodeGuruProfiler.internalValue;
  }
}

export class EventSourcesPropertyList extends cdktn.ComplexList {
  public internalValue? : EventSourcesProperty[] | cdktn.IResolvable

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
  public get(index: number): EventSourcesPropertyOutputReference {
    return new EventSourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
