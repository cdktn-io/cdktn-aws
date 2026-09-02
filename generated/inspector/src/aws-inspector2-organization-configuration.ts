// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOrganizationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#id TfOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#region TfOrganizationConfiguration#region}
  */
  readonly region?: string;
  /**
  * auto_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#auto_enable TfOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: TfOrganizationConfiguration.AutoEnableProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#timeouts TfOrganizationConfiguration#timeouts}
  */
  readonly timeouts?: TfOrganizationConfiguration.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration}
*/
export class TfOrganizationConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector2_organization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOrganizationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOrganizationConfiguration to import
  * @param importFromId The id of the existing TfOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOrganizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_inspector2_organization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector2_organization_configuration',
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
    this._id = config.id;
    this._region = config.region;
    this._autoEnable.internalValue = config.autoEnable;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_account_limit_reached - computed: true, optional: false, required: false
  public get maxAccountLimitReached() {
    return this.getBooleanAttribute('max_account_limit_reached');
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

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable = new TfOrganizationConfiguration.AutoEnablePropertyOutputReference(this, "auto_enable");
  public get autoEnable() {
    return this._autoEnable;
  }
  public putAutoEnable(value: TfOrganizationConfiguration.AutoEnableProperty) {
    this._autoEnable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfOrganizationConfiguration.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfOrganizationConfiguration.TimeoutsProperty) {
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
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      auto_enable: tfOrganizationConfigurationAutoEnablePropertyToTerraform(this._autoEnable.internalValue),
      timeouts: tfOrganizationConfigurationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      auto_enable: {
        value: tfOrganizationConfigurationAutoEnablePropertyToHclTerraform(this._autoEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOrganizationConfiguration.AutoEnablePropertyList",
      },
      timeouts: {
        value: tfOrganizationConfigurationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfOrganizationConfiguration.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOrganizationConfigurationAutoEnablePropertyToTerraform(struct?: TfOrganizationConfiguration.AutoEnablePropertyOutputReference | TfOrganizationConfiguration.AutoEnableProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_repository: cdktn.booleanToTerraform(struct!.codeRepository),
    ec2: cdktn.booleanToTerraform(struct!.ec2),
    ecr: cdktn.booleanToTerraform(struct!.ecr),
    lambda: cdktn.booleanToTerraform(struct!.lambda),
    lambda_code: cdktn.booleanToTerraform(struct!.lambdaCode),
  }
}


export function tfOrganizationConfigurationAutoEnablePropertyToHclTerraform(struct?: TfOrganizationConfiguration.AutoEnablePropertyOutputReference | TfOrganizationConfiguration.AutoEnableProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_repository: {
      value: cdktn.booleanToHclTerraform(struct!.codeRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ec2: {
      value: cdktn.booleanToHclTerraform(struct!.ec2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecr: {
      value: cdktn.booleanToHclTerraform(struct!.ecr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda: {
      value: cdktn.booleanToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_code: {
      value: cdktn.booleanToHclTerraform(struct!.lambdaCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOrganizationConfigurationTimeoutsPropertyToTerraform(struct?: TfOrganizationConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfOrganizationConfigurationTimeoutsPropertyToHclTerraform(struct?: TfOrganizationConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfOrganizationConfiguration {
export interface AutoEnableProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#code_repository TfOrganizationConfiguration#code_repository}
  */
  readonly codeRepository?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#ec2 TfOrganizationConfiguration#ec2}
  */
  readonly ec2: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#ecr TfOrganizationConfiguration#ecr}
  */
  readonly ecr: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#lambda TfOrganizationConfiguration#lambda}
  */
  readonly lambda?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#lambda_code TfOrganizationConfiguration#lambda_code}
  */
  readonly lambdaCode?: boolean | cdktn.IResolvable;
}
export class AutoEnablePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoEnableProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository;
    }
    if (this._ec2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2 = this._ec2;
    }
    if (this._ecr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecr = this._ecr;
    }
    if (this._lambda !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda;
    }
    if (this._lambdaCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaCode = this._lambdaCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoEnableProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeRepository = undefined;
      this._ec2 = undefined;
      this._ecr = undefined;
      this._lambda = undefined;
      this._lambdaCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeRepository = value.codeRepository;
      this._ec2 = value.ec2;
      this._ecr = value.ecr;
      this._lambda = value.lambda;
      this._lambdaCode = value.lambdaCode;
    }
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository?: boolean | cdktn.IResolvable; 
  public get codeRepository() {
    return this.getBooleanAttribute('code_repository');
  }
  public set codeRepository(value: boolean | cdktn.IResolvable) {
    this._codeRepository = value;
  }
  public resetCodeRepository() {
    this._codeRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository;
  }

  // ec2 - computed: false, optional: false, required: true
  private _ec2?: boolean | cdktn.IResolvable; 
  public get ec2() {
    return this.getBooleanAttribute('ec2');
  }
  public set ec2(value: boolean | cdktn.IResolvable) {
    this._ec2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2Input() {
    return this._ec2;
  }

  // ecr - computed: false, optional: false, required: true
  private _ecr?: boolean | cdktn.IResolvable; 
  public get ecr() {
    return this.getBooleanAttribute('ecr');
  }
  public set ecr(value: boolean | cdktn.IResolvable) {
    this._ecr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrInput() {
    return this._ecr;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: boolean | cdktn.IResolvable; 
  public get lambda() {
    return this.getBooleanAttribute('lambda');
  }
  public set lambda(value: boolean | cdktn.IResolvable) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda;
  }

  // lambda_code - computed: false, optional: true, required: false
  private _lambdaCode?: boolean | cdktn.IResolvable; 
  public get lambdaCode() {
    return this.getBooleanAttribute('lambda_code');
  }
  public set lambdaCode(value: boolean | cdktn.IResolvable) {
    this._lambdaCode = value;
  }
  public resetLambdaCode() {
    this._lambdaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaCodeInput() {
    return this._lambdaCode;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#create TfOrganizationConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#delete TfOrganizationConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/inspector2_organization_configuration#update TfOrganizationConfiguration#update}
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
}
